import { expect, Page } from '@playwright/test';

class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Navigate to a specific section
  async navigateToSection(sectionName: string): Promise<void> {
    await this.page.click(`button h2:has-text(\"${sectionName}\")`);
  }

  // Verify that the task exists in the specified column
  async verifyTaskInColumn(task: string, column: string): Promise<void> {
    const taskSelector = `text=\"${column}\" >> .. >> text=\"${task}\"`;
    await expect(this.page.locator(taskSelector)).toBeVisible();
  }

  // Verify that a tag exists for a specific task
  async verifyTagForTask(task: string, tag: string): Promise<void> {
    const tagSelector = `text=\"${tag}\" >> .. >> .. >> text=\"${task}\"`;
    await expect(this.page.locator(tagSelector)).toBeVisible();
  }
}

export default HomePage;