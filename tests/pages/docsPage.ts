import { expect, type Page, type Locator } from '@playwright/test';

export class DocsPage {
  readonly page: Page;
  readonly installationHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.installationHeading = page.getByRole('heading', { name: 'Installation' });
  }

  async waitForIntroUrl(): Promise<void> {
    await this.page.waitForURL(/.*\/docs\/intro.*/);
  }

  async expectInstallationVisible(): Promise<void> {
    await expect(this.installationHeading).toBeVisible();
  }
}