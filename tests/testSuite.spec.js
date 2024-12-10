const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const HomePage = require('../pages/HomePage');
const testData = require('../data/testData.json');

test.describe('Data-Driven Task Validation', () => {
  testData.forEach(({ scenario, app, task, column, tags }) => {
    test.describe(scenario, () => {
      let loginPage;
      let homePage;

      // Setup: Login and navigate before each test
      test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        homePage = new HomePage(page);
        
        // Log in and navigate
        await loginPage.navigateToLoginPage();
        await loginPage.login('admin', 'password123');
        await homePage.navigateToSection(app);
      });

      // Verify task in the specified column
      test(`Verify task "${task}" in column "${column}"`, async () => {
        await homePage.verifyTaskInColumn(task, column);
      });

      // Verify tags for the task
      tags.forEach(tag => {
        test(`Verify tag "${tag}" for task "${task}"`, async () => {
          await homePage.verifyTagForTask(task, tag);
        });
      });
    });
  });
});
