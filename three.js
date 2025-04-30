const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const userIds = new Set();

async function m() {
    var page_no = 1;
    try {
        while(page_no < 100) {
            console.log(`Fetching page ${page_no}...`);
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `https://admin.staging.skillz.com/players/search?page=${page_no}&skillz_users_advanced_grid%5Bbalance1%5D=&skillz_users_advanced_grid%5Bbalance2%5D=&skillz_users_advanced_grid%5Bcurrency%5D=&skillz_users_advanced_grid%5Bdate_created1%5D=&skillz_users_advanced_grid%5Bdate_created2%5D=&skillz_users_advanced_grid%5Bdevice_id%5D=&skillz_users_advanced_grid%5Bdisplay_name%5D=V2cardigan&skillz_users_advanced_grid%5Bemail%5D=&skillz_users_advanced_grid%5Bfirst_name%5D=&skillz_users_advanced_grid%5Bid%5D=&skillz_users_advanced_grid%5Blast_name%5D=&skillz_users_advanced_grid%5Blocked_balance1%5D=&skillz_users_advanced_grid%5Blocked_balance2%5D=&skillz_users_advanced_grid%5Bpaypal_provider_transaction_id%5D=&skillz_users_advanced_grid%5Bphone%5D=&skillz_users_advanced_grid%5Bsecondary_email%5D=`,
                headers: { 
                  'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7', 
                  'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8', 
                  'if-none-match': 'W/"63c15393b168db61db82cd90d6bfd2dc"', 
                  'priority': 'u=0, i', 
                  'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"', 
                  'sec-ch-ua-mobile': '?0', 
                  'sec-ch-ua-platform': '"macOS"', 
                  'sec-fetch-dest': 'document', 
                  'sec-fetch-mode': 'navigate', 
                  'sec-fetch-site': 'none', 
                  'sec-fetch-user': '?1', 
                  'upgrade-insecure-requests': '1', 
                  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36', 
                  'Cookie': '_rdt_uuid=1744180561984.16154577-7566-4b95-94c6-d465b71523b9; _gcl_au=1.1.96142808.1744188897; sc-iid=c756f6ee-31e6-4296-b158-cd441274bc2b497c60a7-8564-4f4e-aac8-3a27ea05a379; AF_DEFAULT_MEASUREMENT_STATUS=true; afUserId=8bf2df87-827c-4908-a40e-7fd2da1cde4b-p; _ga_20N9Q3HJPZ=GS1.1.1744203070.2.1.1744203072.58.0.0; _ga_TJ4QWY97WB=GS1.1.1744203070.2.1.1744203072.0.0.0; AF_SYNC=1745233314845; staging_sklz_cu=268551435685; WZRK_G=34f07b25e3654f4badb515b6969a65ed; _ga_N1J08WYR0C=GS1.1.1745234483.6.1.1745236323.0.0.0; _ga_1FR83BKXJ1=GS1.1.1745396937.18.1.1745396937.60.0.0; _ga=GA1.2.1134994766.1744180562; _gid=GA1.2.146893484.1745396940; stagingaccessToken=eyJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiMjY4NTUxNDM1Njg1IiwiY2xpZW50X2lkIjoiMzYxNiIsInJvbGVzIjpbIlJPTEVfU0RLX1VTRVIiXSwic3ViIjoiMjY4NTUxNDM1Njg1IiwiZXhwIjoxNzQ1NDAwMTMxLCJpc3MiOiJza2lsbHoiLCJpYXQiOjE3NDUzOTkyMzF9.TLPsTbBUkx_H9ylAxCPiIzDCijTag7KdpUr8KVkqz2Rs7byQfq0_fx7TbRLx7hulM3ErdyU_V45oEhvrjWTq2EP_d_-MrQH9cINFqP0wrjgMKNMR5qo99hMSxqvZy4Ei2j5w7Ar0JfacCSsZQ1XKCW1QppE-Eq4fPuCze8ab_Zz-3NGK6eXZI4Whnq-IW8Slrn1nopoiWZn5RA8GRYOgEK5OfssYsLvuPVySH8gRmSL64vFhMY_6snyDc3U_DWsTd-pgxgOWRgxU5W2b_RAV1E_ByeFCcHMWDXL6DN8DP9X5_k5hUe4xX8283tl5fThdZk9Rk8L6V-thVRApLTl7uQ; stagingrefreshToken=ec873347-a3d3-4a9f-8681-f3a6eba6ef29; _portal-admin_session=bVdFRS8xYkhUK21lSkg1dVkxaDhNaHJNT2xwRHJZKzZQeFJjVXBoNmRTdmdncmZ6QU1IZ3ZCY3VlcTFZRDVEWHpMNFVtdEgzdC8rN0QzUjRFMUlSQkdoREp0S200UzNtT3Eybnlmb3cyakxzbkI2bUxZWmZmWDlUSG5UMm9NaTcrTFRxMGFmV0xaZXc1UHFPQVJQUXdDNE9JeVM1NEpMMC9tTjI1MklYazVmSnVIcEh2QlM1SUdLOXNlMllDSHRtQ0xoNHdLd3V0amQ1VFNndVVwcFlRdWNmYytHaG5ld3FIa3Z1VTdRaHhLbUxnZGlXd1NpOVp5dFNhbVd1cHRjc3NWL1RIL05GMjYwaExMUXRRY2J5d05tcUdFNkwzTzZ5S1dtNWxiS09rOXBqaEcrY2hkTTdNY3cvUjltWlFOUmtEVUpiRDdBNVhheStEbmt4QWFTN2plclhmZVF2anYxV1EyL0pNeHU0cFdFPS0tbFNXQ00yYzZROGg2cnBRK3ZNSjlxZz09--cd2b8c63343853863558a9e2f9e88c07a2fc5812; _portal-admin_session=OElUMVVIdzFyTWIzN2xsNGYyOFBXTUl6MElUeG0wLy9tTVFQYlBpWlhGMWNPLzJQczhjYkpITFo3OHpia3hVZ2tBQkkvMTN6ejBLVEovRnp2ZVJ6dmNCZ3lSUlp3cG9DUlg3eEwxYUVLT0VoTDNlbytYZEdCNXhSTGJDZjZjV3lDUXJUTDNCY0FIaXl4TEpjRnJIVDZlRndtZmdDVDBpTGlidThvRndHQlR0OGNHaE15TGZydTBlcGdWQjRIK2hPWWI3OGhRWTBBeEFJbnI3ZkhTWjU1Y2Z2dFYydEw3ZTB0OFBCcDluVENoeGdTWkR0Zk43MDkyZFFrakd1RlltMUVvSmZCeEJtcDlCYjVybFI0VENueUxRdEEwRlJlZHpoQUlWaXZpU3hsMmtKVGlYRVFRb1diSzlvMmNNWjFSNVYxZ0M4WU5ZUjZva3g2TTFjLy9ySWxFU2ZJMWE3TXJyNDNucmluNTlSSldzPS0tZnFMWmtPN2lBYUZEQjEwVWRtZk5YQT09--1543c6d3a2059d3d8fde898e7342c44fa7731b9e'
                }
            };
            console.log(`Made request: ${config.url}`);
            const response = await axios.request(config);
            console.log("Got response");
            var htmlContent = response.data;
            const $ = cheerio.load(htmlContent);
            $('td.id').each((index, element) => {
                userIds.add($(element).text().trim());
            });
            page_no++;
        }
    }
    catch (error) {
        console.log(error);
    }
    console.log(userIds);
    var data = "USER_ID,BONUS_CASH,NET_REFERRAL_EARNING\n";
    userIds.forEach((userId) => {
        let bonus = Math.floor(Math.random() * 100) + 1;
        let netReferralEarning = bonus;
        data += `${userId},${bonus},${netReferralEarning}\n`;
    });
    fs.writeFileSync('userIds.csv', data, 'utf8');
    console.log("CSV file created successfully");
    console.log("done");
    
}

m();