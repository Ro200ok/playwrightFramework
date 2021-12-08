const {MainPage} = require('../framework');

const { chromium } = require('playwright');

const url = 'https://jsonplaceholder.typicode.com/'




// afterEach( async()=> {
    
//     await browser.close();
// })


describe('Noop spec', function(){
    it('noop it', async function(){
      
    const browser = await chromium.launch();
    
    const page = await browser.newPage();
    await page.goto(url);
    
    const mainPage = new MainPage(page);
    // await MainPage.click('/html/body/header/nav/ul/li[1]/a')
    
    
    await page.screenshot({ path: `example.png` });
    
    await browser.close();


    })
})