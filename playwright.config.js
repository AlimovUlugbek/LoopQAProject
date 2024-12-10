const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  projects: [
    {
      name: 'web',
      use: {
        browserName: 'webkit',
        ...devices['Desktop Chrome'],
      },
    },
  ],
  testDir: './tests',
  reporter: [
    ['list'], // To get a detailed step-by-step output with test nesting
    ['html', { open: 'never' }] // Optional: For HTML report generation
  ],
  // Optional: Set the output directory for reports
  outputDir: 'test-results',
});
