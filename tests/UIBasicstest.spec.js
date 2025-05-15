const {test} = require('@playwright/test');
const { expect } = require('../playwright.config');

test('Browser Context Playwright test',async ({browser})=> {

   const context = await browser.newContext();
   const page =  await context.newPage();
   await page.goto("https://rahulshettyacademy.com/practice-project");
    
});

test.only('Page Playwright test',async ({page})=> {
    
//    const context = await browser.newContext();
//    const page =  await context.newPage();
   await page.goto("https://rahulshettyacademy.com/practice-project");
    console.log(await page.title()); // to get the title of the page
    await expect(page).toHaveTitle("Improve Your Skill - Use our Practice Sites & Apps for your QA Automation | Rahul Shetty Academy");// to check the title of the page
});
