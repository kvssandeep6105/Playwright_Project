

const {test, expect} = require('@playwright/test');
const {After, Before,AfterStep,Status} = require('@cucumber/cucumber');
const playwright = require('@playwright/test');


test('window handle', async () => {
    const browser = await playwright.chromium.launch({
      headless: false,
     args: ['--start-maximized']
    });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.hyrtutorials.com/p/window-handles-practice.html');
    await page.locator('#newWindowBtn').click();
    const newWindow = await context.waitForEvent('page');
    await newWindow.waitForLoadState('load');
    const newWindowTitle = await newWindow.title();
    console.log(newWindowTitle);
    expect(newWindowTitle).toBe('Basic Controls - H Y R Tutorials');
    const newWindowUrl = await newWindow.url();
    expect(newWindowUrl).toBe('https://www.hyrtutorials.com/p/basic-controls.html');
  //  await newPage.setViewportSize({ width: 1920, height: 1080 });
    await newWindow.locator('#firstName').fill('John');
    await newWindow.locator('#lastName').fill('Doe');
    await newWindow.locator('#englishchbx').check();
    await newWindow.locator('#spanishchbx').check();
    await newWindow.locator('#email').fill('saisaa@gmail.com');
    await newWindow.locator('#password').fill('123456');
    await newWindow.locator('#registerbtn').click();
    await newWindow.close();
    await page.close(); 
   
});

test.only('window handle with multiple tabs', async () => {
    const browser = await playwright.chromium.launch({
      headless: false,
      args: ['--start-maximized']
    });

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://vinothqaacademy.com/multiple-windows/');
    await page.locator("//div[@class='elementor-element elementor-element-f5f0e8d elementor-widget elementor-widget-html']//button[@id='button1']").click();
    const newTab = await context.waitForEvent('page');
    await newTab.waitForLoadState('load');
    const newTabTitle = await newTab.title();
    console.log(newTabTitle);
    await newTab.locator("input[type$='checkbox']").nth(9).check();
    await newTab.locator("#deleteBtn").click();
    await newTab.getByPlaceholder('Name').fill('sandeep');
    await newTab.getByPlaceholder('Role').fill('QA Engineer');
    await newTab.getByPlaceholder('Email Address').fill('Qa@gmail.com');
    await newTab.getByPlaceholder('Location').fill('Germany');
    await newTab.getByPlaceholder('Department').fill('Digital Engineering');
    await newTab.locator("#addBtn").click();
    const rows = await newTab.locator("table#myTable tbody tr");
    const count = await rows.count();
    console.log(`Number of rows in the table: ${count}`);
    for (let i = 0; i < count; i++) {
        const rowText = await rows.nth(i).textContent();
      if(rowText.includes('sandeep')) {
        console.log(`Row ${i + 1} contains 'sandeep': ${rowText}`);
      }
    }
});
    

