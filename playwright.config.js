const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  fullyParallel: true,
  testDir: './tests',
  reporter: [
    ['list'], // To get a detailed step-by-step output with test nesting
    ['html', { open: 'never' }] // Optional: For HTML report generation
  ],
  // Optional: Set the output directory for reports
  outputDir: 'test-results',
  projects: [
    {
      name: 'Chromium',          // This project will run tests in Chromium
      use: { browserName: 'chromium' },  // Define browser to use
    },
    {
      name: 'Firefox',           // This project will run tests in Firefox
      use: { browserName: 'firefox' },   // Define browser to use
    },
    {
      name: 'WebKit',            // This project will run tests in WebKit
      use: { browserName: 'webkit' },    // Define browser to use
    },
  ],
  workers: 4,  // Set the number of workers for parallel testing (you can adjust this number)
});
