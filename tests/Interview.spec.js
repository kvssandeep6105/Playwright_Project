const playwright = require('@playwright/test');
const {test, expect} = require('@playwright/test');


test('automation Test', async () => {
    const browser = await playwright.chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.saucedemo.com/');
    const data = await page.locator('//div[h4][1]');
    console.log(await data.allTextContents());
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();

    await page.on('dialog', async dialog => {
        await dialog.accept();
    });
    await page.waitForLoadState('networkidle');
    const list = await page.locator(".inventory_item");
    const count = await list.count();
    console.log(`Number of items: ${count}`);
    for (let i = 0; i < count; i++) {
        const itemText = await list.nth(i).textContent();
        if (itemText.includes('Sauce Labs Backpack')) {
            await list.nth(i).locator("button[data-test$='add-to-cart-sauce-labs-backpack']").click();
            break;
        } else if (itemText.includes('Sauce Labs Fleece Jacket')) {
            await list.nth(i).locator("button[data-test$='add-to-cart-sauce-labs-fleece-jacket']").click();
            break;

        }
    }
    await page.locator("#shopping_cart_container").click();
    await page.locator("#checkout").click();
    await page.getByPlaceholder('First Name').fill('John');
    await page.getByPlaceholder('Last Name').fill('Doe');
    await page.getByPlaceholder('Zip/Postal Code').fill('12345');
    await page.locator("#continue").click();
    await page.locator("#finish").click();
});

test('Automation print value from the tabele', async () => {
    const browser = await playwright.chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.nseindia.com/');
    // Wait for the USD price element to be visible
    await page.waitForTimeout(3000);
    const usdLocator = page.locator('//tr//td//div[@class="curr_sign"]');
    const count = await usdLocator.locator('td').count();
    console.log(`Number of rows in the table: ${count}`);
    for (let i = 0; i < count; i++) {
        const rowText = await usdLocator.nth(i).textContent();
        if (rowText.includes('USD')) {
            console.log(`Row containing USD: ${rowText}`);
            break;
        }
    }
    await browser.close();
    
 
  });

  

test('Facebook login', async () => {
  const browser = await require('@playwright/test').chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.facebook.com/');

  // Replace with your actual credentials
  await page.locator('input[name="email"]').fill('YOUR_USERNAME');
  await page.locator('input[name="pass"]').fill('YOUR_PASSWORD');
  //await page.locator('button[name="login"]').click();

  // Optionally, wait for navigation or a specific element after login
  // await page.waitForNavigation();
  // await expect(page).toHaveURL(/facebook.com/);

  await browser.close();
});

test.only('IRCTC login', async () => {
    const browser = await playwright.chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.irctc.co.in/nget/train-search');

    // Wait for the login button to be visible and click it
    await page.locator('button[class="btn btn-primary"]').click();

    // search for trains
    await page.getByRole('searchbox').nth(0).fill('Singarayakonda');
   // await page.pause(3000);
   // await page.locator('//span[@class="ng-star-inserted"]').first().press('Enter');
    await page.getByRole('searchbox').nth(0).press('Enter');
    await page.getByRole('searchbox').nth(1).fill('Mumbai');
    await page.getByRole('searchbox').nth(1).press('Enter');
    await page.locator('//button[@label="Find Trains"]').click();
   
    await browser.close();//
});