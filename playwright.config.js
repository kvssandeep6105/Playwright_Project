// @ts-check
const { devices } = require('@playwright/test');

/**
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
const config = {
  testDir: 'tests',
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
    headless: false,
    screenshot: 'on',
    trace: 'on',
    viewport: { width: 1280, height: 720 },
  },
};

module.exports = config;
