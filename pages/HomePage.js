const { expect } = require('@playwright/test');

class HomePage {
  constructor(page) {
    this.page = page;
  }

  // Navigate to a specific section
  async navigateToSection(sectionName) {
    await this.page.click(`button h2:has-text("${sectionName}")`);
  }

  // Verify that the task exists in the specified column
  async verifyTaskInColumn(task, column) {
    const taskSelector = `text="${column}" >> .. >> text="${task}"`;
    await expect(this.page.locator(taskSelector)).toBeVisible();
  }

  // Verify that a tag exists for a specific task
  async verifyTagForTask(task, tag) {
    const tagSelector = `text="${tag}" >> .. >> .. >> text="${task}"`;
    await expect(this.page.locator(tagSelector)).toBeVisible();
  }
}

module.exports = HomePage;
