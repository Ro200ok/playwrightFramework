const {MainPage} = require('../framework');
const { chromium } = require('playwright');
const { after } = require('mocha');
const url = 'https://jsonplaceholder.typicode.com/'

describe('Noop spec', function(){
    let browser = null;
    let page = null;
    
    beforeEach(async () => {
    browser = await chromium.launch({headless: false});
    page = await browser.newPage();
    await page.goto(url);
    })
    
    afterEach(async () => {
        await browser.close();
    })

    it('noop it', async function(){
    
    
    const mainPage = new MainPage(page);
    await page.screenshot({ path: `example.png` });

    })
})