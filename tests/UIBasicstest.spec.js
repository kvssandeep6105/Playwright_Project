const {test,expect} = require('@playwright/test');
const { PageObject } = require('../POM/pageObject');


test('Page Playwright test',async ({page})=> {
    
//    const context = await browser.newContext();
//    const page =  await context.newPage();
    await page.goto("https://www.automationexercise.com/");
    console.log(await page.title()); // to get the title of the page
   
   const pageObject = new PageObject(page);
   await pageObject.userName.fill("Sai Sandeep");
   await pageObject.email.fill("saisandeep6105@gmail.com");
   await pageObject.agreeTerms.check();
   await pageObject.formSubmit.click();
   await page.waitForTimeout(2000);
});
