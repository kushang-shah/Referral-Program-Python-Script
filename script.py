import asyncio
import aiohttp
import csv
import json
import collections
import logging
from datetime import datetime
import humanfriendly
import sys
import time
from atomicx import AtomicInt
import signal
import pandas as pd
import os

# Example CSV
# user_id,bonus_amount
# 268544680488,10
# 268544680488,2
# 268544680488,-3

if len(sys.argv) != 7:
    print('Usage: python award_cash.py user_bonus_file environment basic_auth_token batch_size max_concurrency rate_limit')
    sys.exit(1)

run_time = datetime.utcnow().strftime("%Y-%m-%d_%H-%M-%S")

# Setup logging to both console and file
logging.basicConfig(level=logging.INFO, 
                    format='%(asctime)s - %(levelname)s - %(message)s',
                    handlers=[
                        logging.FileHandler(f"refund_processing_{run_time}.log", mode='a'),
                    ])
formatter = logging.Formatter('%(asctime)s - %(levelname)s - %(message)s')

file_handler = logging.FileHandler(f"refund_processing_{run_time}.log", mode='a')
file_handler.setFormatter(formatter)

console_handler = logging.StreamHandler()
console_handler.setFormatter(formatter)

file_and_console_logger = logging.getLogger(__name__)
file_and_console_logger.setLevel(logging.INFO)
file_and_console_logger.addHandler(file_handler)
file_and_console_logger.addHandler(console_handler)

def user_bonus_line_to_dict(fields):
    return {
        'user_id': fields[0],
        'bonus_amount': fields[1],
    }

def append_to_cash_summary(user, cash_bonus, net_refferral_earning):
    line = '{0},{1},{2}\n'.format(user, cash_bonus, net_refferral_earning)
    with open(f'cash_refunds_summary_{run_time}.csv', 'a') as cash_file:
        cash_file.write(line)

async def make_request(refund, base_url, headers, session):
    logging.info("Request parameters: %s", json.dumps(refund))
    start_time = time.time()
    
    async with session.post(base_url, headers=headers, json=refund) as response:
        response_data = await response.text()
        response_data = response_data.encode('ascii', 'ignore').decode('ascii')
        
        if response.status != 200:
            file_and_console_logger.error("POST failed with parameters: %s, Status code: %d", json.dumps(refund), response.status)
            file_and_console_logger.error("Response: %s, UserId: %s", response_data, refund['user_id'])
            file_and_console_logger.error("Aborting! Please check the logs and re-run with the remaining subset of user (see extract_remaining_users_to_process.py)...")
            global abort_flag
            abort_flag = True
            return
        else:
            # Update summaries on successful requests
            user_id = refund['user_id']
            cash_summary[user_id]['cash_bonus'] += float(refund.get('cash_bonus', 0))
            append_to_cash_summary(user_id, cash_summary[user_id]['cash_bonus'], float(refund.get('net_referral_earning', 0)))
        
        logging.info("Response: %s, UserId: %s", response_data, refund['user_id'])
        
        # Rate limiting
        elapsed_time = time.time() - start_time
        if elapsed_time < 1.0 / rate_limit:
            await asyncio.sleep(1.0 / rate_limit - elapsed_time)
        
        return response_data

def log_progress(start_time, total_requests, completed_requests):
    elapsed_time = (datetime.utcnow() - start_time).total_seconds()
    if completed_requests == 0:
        est_total_time = float(60*60*99)
    else:
        est_total_time = (elapsed_time / completed_requests) * total_requests
    est_remaining_time = est_total_time - elapsed_time
    human_readable_elapsed = humanfriendly.format_timespan(elapsed_time)
    human_readable_remaining = humanfriendly.format_timespan(est_remaining_time)
    file_and_console_logger.info("Elapsed Time: %s, Estimated Remaining Time: %s, Completed Requests: %d/%d",
                 human_readable_elapsed, human_readable_remaining, completed_requests, total_requests)

async def periodically_log_progress(start_time, total_requests):
    global completed_requests
    global abort_flag
    if abort_flag:
        return
    
    log_progress(start_time, total_requests, completed_requests.load())
    await asyncio.sleep(5)
    asyncio.create_task(periodically_log_progress(start_time, total_requests))

user_bonus_file_path = sys.argv[1]
environment = sys.argv[2]
basic_auth_token = sys.argv[3]
batch_size = int(sys.argv[4])
max_concurrency = int(sys.argv[5])
rate_limit = float(sys.argv[6])  # Requests per second limit

environment_string = {
    'qa': 'qa.',
    'staging': 'staging.',
    'sandbox': 'sandbox.',
    'production': '',
}.get(environment, 'invalid')

if environment_string == 'invalid':
    file_and_console_logger.error('Invalid environment: %s', environment)
    sys.exit(1)
base_url = 'https://' + environment_string + 'skillz.com/ap/v1/update_balance_referral'
headers = {'Authorization': 'Basic ' + basic_auth_token, 'Content-Type': 'application/json'}

# ==============================================================================
# Set up the data structures for the customer service summaries
# ==============================================================================
file_and_console_logger.info("Reading input file.")
with open(user_bonus_file_path, 'r') as file:
    reader = csv.reader(file)
    next(reader)  # Skip header
    cash_summary = collections.defaultdict(dict)

    refunds = []
    for row in reader:
        user_id, bonus_amount, net_referral_earnings = row[0].strip(), row[1].strip(), row[2].strip()
        cash_summary[user_id] = {'cash_bonus': 0}
        refunds.append({
            'user_id': user_id,
            'bonus_amount': bonus_amount,
            'net_referral_earning': net_referral_earnings
        })

file_and_console_logger.info("Total refunds to process: %d", len(refunds))

# Append headers to the summary files if they do not exist
with open(f'cash_refunds_summary_{run_time}.csv', 'a+') as cash_file:
    if cash_file.tell() == 0:
        cash_file.write('user_id,cash_bonus,net_referral_earning\n')

# ==============================================================================
# Process the refunds
# ==============================================================================
def create_refund_request(refund):
    return {
        'user_id': refund['user_id'],
        'cash_bonus': refund['bonus_amount'],
        'net_referral_earning': refund['net_referral_earning']
    }

completed_requests = AtomicInt()  # Use a thread-safe counter for completed requests
abort_flag = False

def save_remaining_users_to_process():
    # File paths
    original_file = user_bonus_file_path
    backup_file = f'refund_backup_{run_time}.csv'
    processed_file = f'cash_refunds_summary_{run_time}.csv'  # Replace run_time with the actual timestamp

    # Load the original and processed files into DataFrames
    original_df = pd.read_csv(original_file)
    processed_df = pd.read_csv(processed_file)

    # Find remaining entries by comparing the two DataFrames
    remaining_df = pd.merge(
        original_df,
        processed_df,
        left_on=['USER_ID', 'BONUS_CASH', 'NET_REFERRAL_EARNING'],
        right_on=['user_id', 'cash_bonus', 'net_referral_earning'],
        how='left',
        indicator=True
    ).query('_merge == "left_only"').drop(columns=['user_id', 'cash_bonus', '_merge'])

    # Ensure the remaining DataFrame has the same columns as the original file
    remaining_df = remaining_df[original_df.columns]

    # Save the original file as a backup
    os.rename(original_file, backup_file)
    file_and_console_logger.info(f"Original file renamed to '{backup_file}' as a backup.")

    # Save the remaining entries to the original file
    remaining_df.to_csv(original_file, index=False)
    file_and_console_logger.info(f"Remaining users to process have been saved to '{original_file}'.")


async def process_refunds():
    global completed_requests, abort_flag
    
    start_time = datetime.utcnow()
    file_and_console_logger.info("Started processing at %s", start_time.strftime("%Y-%m-%d %H:%M:%S UTC"))
    file_and_console_logger.info("Environment: %s", environment)
    file_and_console_logger.info("Batch Size: %s", batch_size)
    file_and_console_logger.info("Max Concurrency: %s workers", max_concurrency)
    file_and_console_logger.info("Rate Limit: %s requests/sec", rate_limit)

    # Start the periodic logging
    asyncio.create_task(periodically_log_progress(start_time, len(refunds)))

    async with aiohttp.ClientSession() as session:
        sem = asyncio.Semaphore(max_concurrency)
        
        async def semaphore_make_request(refund):
            async with sem:
                if abort_flag:
                    return
                await make_request_with_tracking(refund, base_url, headers, session)
        
        async def make_request_with_tracking(refund, base_url, headers, session):
            result = await make_request(refund, base_url, headers, session)
            completed_requests.inc()  # Atomically increment the completed requests counter
            return result
        
        tasks = []
        for i in range(0, len(refunds), batch_size):
            batch = refunds[i:i + batch_size]
            for refund in batch:
                request_data = create_refund_request(refund)
                tasks.append(semaphore_make_request(request_data))
        
        await asyncio.gather(*tasks)
    
    end_time = datetime.utcnow()
    global completed_requests
    log_progress(start_time, len(refunds), completed_requests.load())
    file_and_console_logger.info("Finished processing at %s", end_time.strftime("%Y-%m-%d %H:%M:%S UTC"))

    total_duration = end_time - start_time
    human_readable_duration = humanfriendly.format_timespan(total_duration.total_seconds())
    file_and_console_logger.info("Total duration: %s", human_readable_duration)

    if(abort_flag):
        file_and_console_logger.error("Processing was aborted due to an error.")
    else:
        file_and_console_logger.info("Processing completed successfully.")
    save_remaining_users_to_process()

    # Stop the periodic logging
    abort_flag = True
    file_and_console_logger.info("Exiting...")

def signal_handler(sig, frame):
    global abort_flag
    print("")
    file_and_console_logger.warning("Received interrupt signal. Shutting down gracefully...")
    abort_flag = True
    # Cancel all tasks (if needed), or let them complete
    loop = asyncio.get_event_loop()
    for task in asyncio.all_tasks(loop):
        task.cancel()
    
    # Stop the event loop gracefully
    time.sleep(5)
    loop.stop()
    exit(1)


if __name__ == "__main__":
    # Register the signal handler for SIGINT
    signal.signal(signal.SIGINT, signal_handler)
    
    try:
        asyncio.run(process_refunds())
    except Exception as e:
        file_and_console_logger.warning("Processing was cancelled.")
        file_and_console_logger.error(e)