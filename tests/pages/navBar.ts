import { type Page, type Locator } from '@playwright/test';

export class NavBar {
  readonly page: Page;
  readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    // Example only — replace with real app locators later
    this.searchButton = page.getByRole('button', { name: /search/i });
  }

  async tryOpenSearch(): Promise<void> {
    // Example “safe action” placeholder
    if (await this.searchButton.isVisible().catch(() => false)) {
      await this.searchButton.click();
    }
  }
}