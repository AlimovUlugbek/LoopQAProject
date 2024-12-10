const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  reporter: [
    ['list'], // To get a detailed step-by-step output with test nesting
    ['html', { open: 'never' }] // Optional: For HTML report generation
  ],
  // Optional: Set the output directory for reports
  outputDir: 'test-results',
  workers: 4,  // Set the number of workers for parallel testing (you can adjust this number)
});
