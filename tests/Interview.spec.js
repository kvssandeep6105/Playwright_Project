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

  

test.only('Facebook login', async () => {
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