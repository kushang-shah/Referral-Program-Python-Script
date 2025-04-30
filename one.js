const axios = require('axios');

async function main() {
    const userIds = [];
    var page_no = 1;
    // while (userIds.length < 10) {
        console.log(`Fetching page ${page_no}...`);
        const url = `https://admin.staging.skillz.com/players/search?page=${page_no}&skillz_users_advanced_grid%5Bbalance1%5D=&skillz_users_advanced_grid%5Bbalance2%5D=&skillz_users_advanced_grid%5Bcurrency%5D=&skillz_users_advanced_grid%5Bdate_created1%5D=&skillz_users_advanced_grid%5Bdate_created2%5D=&skillz_users_advanced_grid%5Bdevice_id%5D=&skillz_users_advanced_grid%5Bdisplay_name%5D=V2cardigan&skillz_users_advanced_grid%5Bemail%5D=&skillz_users_advanced_grid%5Bfirst_name%5D=&skillz_users_advanced_grid%5Bid%5D=&skillz_users_advanced_grid%5Blast_name%5D=&skillz_users_advanced_grid%5Blocked_balance1%5D=&skillz_users_advanced_grid%5Blocked_balance2%5D=&skillz_users_advanced_grid%5Bpaypal_provider_transaction_id%5D=&skillz_users_advanced_grid%5Bphone%5D=&skillz_users_advanced_grid%5Bsecondary_email%5D=`;
        const headers = {
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
            'cache-control': 'max-age=0',
            'cookie': '_rdt_uuid=1744180561984.16154577-7566-4b95-94c6-d465b71523b9; _gcl_au=1.1.96142808.1744188897; sc-iid=c756f6ee-31e6-4296-b158-cd441274bc2b497c60a7-8564-4f4e-aac8-3a27ea05a379; AF_DEFAULT_MEASUREMENT_STATUS=true; afUserId=8bf2df87-827c-4908-a40e-7fd2da1cde4b-p; _ga_20N9Q3HJPZ=GS1.1.1744203070.2.1.1744203072.58.0.0; _ga_TJ4QWY97WB=GS1.1.1744203070.2.1.1744203072.0.0.0; AF_SYNC=1745233314845; staging_sklz_cu=268551435685; WZRK_G=34f07b25e3654f4badb515b6969a65ed; _ga_N1J08WYR0C=GS1.1.1745234483.6.1.1745236323.0.0.0; _ga_1FR83BKXJ1=GS1.1.1745396937.18.1.1745396937.60.0.0; stagingaccessToken=eyJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiMjY4NTUxNDM1Njg1IiwiY2xpZW50X2lkIjoiMzYxNiIsInJvbGVzIjpbIlJPTEVfU0RLX1VTRVIiXSwic3ViIjoiMjY4NTUxNDM1Njg1IiwiZXhwIjoxNzQ1Mzk3ODM3LCJpc3MiOiJza2lsbHoiLCJpYXQiOjE3NDUzOTY5Mzd9.ZAnQUYdbejtiK6v1vYHyZ-wj-1WFjf1Wz-zwn6jPROZeyR2hTtzGN7_Y6na24tZhADhmVWkfA0YES7f5Gr3DUK9WLdDFRXtZjxy2MLRyKi4GmyeEJJ_Zqt80evLa04M3P9eqxJsKO2Aj58Cslcs0GJGD_I4a05LLCPoHAiJaunGbLK4yNTzcZimtb4gD_rXi3JuAVVyZegiHWzPnPxA168gNtu8yxgBz15WCcsVGjojl5vl17lnFHgDdm6dh3pi0qigWLjoRM1JdAUl-tsCFtBOAOOG1ZMy_jha7PzSssOtSNf-aCU5-B4Ok0HpKfWnINhFxqJGN6gy2sxhWBBiXcA; stagingrefreshToken=00ea43b4-d7b7-4639-aac8-bc232dccc6b2; _ga=GA1.2.1134994766.1744180562; _gid=GA1.2.146893484.1745396940; WZRK_S_TEST-K9Z-R57-7K7Z=%7B%22p%22%3A1%2C%22s%22%3A1745396956%2C%22t%22%3A1745397057%7D; _portal-admin_session=K01LL0EydVN0NEZJNEJjNlVuL2sxckl0U1NaU3hqUnNqQ1FHVklBK3I0TUthaXZETUcrc0tTenA2ZXltODVtMFNSb3FaZkhSUUpZUTdOQVFVOGc5RGVlZTJ6VzV1NGhmdCs1TGZ5RWlTeCtWZ3ZCUHpRMENldHVJTnNjbmVyTktRRi92U1JGTTh1a0JzVjNUNjBoaTVUaC90bm5rODVXeHJ4Uk9sSTdiN2Q1dUJkRFUrcWlrS2dFaFArZkNVcjhmdUZQYkdQOTRRSk9nNW1XWWFaYzhJZG5iNUw2dmREN3BlaTJLa0M3a2Y2WjJNQnQ5elBqdjdsR1A4bzNEeXhDWlFrTWNkYkNyZ2pQWVgxdlF6bG94K0JjUmpnK3ZEMHdNcXAxMlFybGF5K0FRaGRWL3Z6MVBJbVg3NXNra2dtWFN1Y1FQckZrVUNYR2UvOU1hZUxoaFZxM28vcGxwaGRybEIyM25QQ2VYcmpNPS0tVEw2ZkxBdktqSWo4MVkzZFpTY3FHQT09--968d473eb602df2abdb23304a25a3af36950c754',
            'if-none-match': 'W/"6c2c63f5c6fbd6bed4232aa400f2e32a"',
            'priority': 'u=0, i',
            'referer': 'https://admin.staging.skillz.com/players/search?utf8=%E2%9C%93&skillz_users_advanced_grid%5Bid%5D=&skillz_users_advanced_grid%5Bdisplay_name%5D=V2cardigan&skillz_users_advanced_grid%5Bfirst_name%5D=&skillz_users_advanced_grid%5Blast_name%5D=&skillz_users_advanced_grid%5Bdevice_id%5D=&skillz_users_advanced_grid%5Bemail%5D=&skillz_users_advanced_grid%5Bsecondary_email%5D=&skillz_users_advanced_grid%5Bpaypal_provider_transaction_id%5D=&skillz_users_advanced_grid%5Bphone%5D=&skillz_users_advanced_grid%5Bdate_created1%5D=&skillz_users_advanced_grid%5Bdate_created2%5D=&skillz_users_advanced_grid%5Bcurrency%5D=&skillz_users_advanced_grid%5Bbalance1%5D=&skillz_users_advanced_grid%5Bbalance2%5D=&skillz_users_advanced_grid%5Blocked_balance1%5D=&skillz_users_advanced_grid%5Blocked_balance2%5D=&commit=Search',
            'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'document',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-user': '?1',
            'upgrade-insecure-requests': '1',
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36'
        };
        try {
            console.log(`Fetching data from ${url}`);
            
            const response = await axios.get(url, { headers });
            var htmlContent = response.data;
            const $ = cheerio.load(htmlContent);
            $('td.id').each((index, element) => {
                userIds.push($(element).text().trim());
            });
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
        console.log(`Fetched ${userIds.length} user IDs from page ${page_no}`);
        page_no++;
    // }
    console.log(userIds);
}

main();
