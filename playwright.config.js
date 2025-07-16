// @ts-check
const { devices } = require('@playwright/test');

/**
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
const config = {
  testDir: './features',
  retries: 0,

  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },

  reporter: [
    ['list'],                // CLI output
    ['allure-playwright'],   // Allure reporter
  ],

  use: {
    browserName: 'chromium',
    headless: true,
    screenshot: 'on',
    trace: 'on',
  },
};

module.exports = config;
