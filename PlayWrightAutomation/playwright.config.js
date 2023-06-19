// @ts-check
const { defineConfig, devices } = require('@playwright/test');


module.exports = defineConfig({
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: 60000,
  expect: {
    
    timeout: 10000
  },
  
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    browserName : 'chromium',
    headless : false,
    screenshot : 'on',
    trace :'on'
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    
  },

  
});

