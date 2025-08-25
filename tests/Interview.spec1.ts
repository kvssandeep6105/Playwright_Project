import { test, expect, chromium, Page, Browser, BrowserContext } from '@playwright/test';

test('Automation Test', async () => {
    const browser: Browser = await chromium.launch();
    const context: BrowserContext = await browser.newContext();
    const page: Page = await context.newPage();

    await page.goto('https://www.saucedemo.com/');
    const data = page.locator('//div[h4][1]');
    console.log(await data.allTextContents());

    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();

    page.on('dialog', async dialog => {
        await dialog.accept();
    });

    await page.waitForLoadState('networkidle');

    const list = page.locator(".inventory_item");
    const count: number = await list.count();
    console.log(`Number of items: ${count}`);

    for (let i = 0; i < count; i++) {
        const itemText = await list.nth(i).textContent();
        if (itemText?.includes('Sauce Labs Backpack')) {
            await list.nth(i).locator("button[data-test$='add-to-cart-sauce-labs-backpack']").click();
            break;
        } else if (itemText?.includes('Sauce Labs Fleece Jacket')) {
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
    await browser.close();
});

test('Automation print value from the table', async () => {
    const browser: Browser = await chromium.launch();
    const context: BrowserContext = await browser.newContext();
    const page: Page = await context.newPage();

    await page.goto('https://www.nseindia.com/');
    await page.waitForTimeout(3000);

    const usdLocator = page.locator('//tr//td//div[@class="curr_sign"]');
    const count: number = await usdLocator.locator('td').count();
    console.log(`Number of rows in the table: ${count}`);

    for (let i = 0; i < count; i++) {
        const rowText = await usdLocator.nth(i).textContent();
        if (rowText?.includes('USD')) {
            console.log(`Row containing USD: ${rowText}`);
            break;
        }
    }

    await browser.close();
});

test('Facebook login', async () => {
    const browser: Browser = await chromium.launch({ headless: false });
    const context: BrowserContext = await browser.newContext();
    const page: Page = await context.newPage();

    await page.goto('https://www.facebook.com/');
    await page.locator('input[name="email"]').fill('YOUR_USERNAME');
    await page.locator('input[name="pass"]').fill('YOUR_PASSWORD');
    // await page.locator('button[name="login"]').click();
    await browser.close();
});

test.only('IRCTC login', async () => {
    const browser: Browser = await chromium.launch({ headless: false });
    const context: BrowserContext = await browser.newContext();
    const page: Page = await context.newPage();

    await page.goto('https://www.irctc.co.in/nget/train-search');
    await page.locator('button[class="btn btn-primary"]').click();

    await page.getByRole('searchbox').nth(0).fill('Singarayakonda');
    await page.getByRole('searchbox').nth(0).press('Enter');
    await page.getByRole('searchbox').nth(1).fill('Mumbai');
    await page.getByRole('searchbox').nth(1).press('Enter');
    await page.locator('//button[@label="Find Trains"]').click();

    await browser.close();
});
