// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
*/
const config = ({
  testDir: './tests',
  timeout: 10 *3000,
  expect: {
   
    timeout: 10 *8000,
  },
  
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
   
    browserName: 'chromium',
    headless: false,  
  },

});
module.exports = config;
