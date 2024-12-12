import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './src/tests',
    fullyParallel: true,
    reporter: [['list'], ['html', { open: 'never' }]],
    use: {
        headless: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
    },
    projects: [
        {
          name: 'Chromium',
          use: { browserName: 'chromium' },  // Runs tests in Chromium
        },
        {
          name: 'Firefox',
          use: { browserName: 'firefox' },    // Runs tests in Firefox
        },
        {
          name: 'WebKit',
          use: { browserName: 'webkit' },     // Runs tests in WebKit
        },
      ],
});