import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightHomePage {
  readonly page: Page;

  // Locators (top)
  readonly getStartedLink: Locator;
  readonly installationHeading: Locator;

  constructor(page: Page) {
    this.page = page;

    this.getStartedLink = page.getByRole('link', { name: 'Get started' });
    this.installationHeading = page.getByRole('heading', { name: 'Installation' });
  }

  async goto(): Promise<void> {
    await this.page.goto('https://playwright.dev/');
  }

  async expectTitleContainsPlaywright(): Promise<void> {
    await expect(this.page).toHaveTitle(/Playwright/);
  }

  async clickGetStarted(): Promise<void> {
    await this.getStartedLink.click();
  }

  async expectGetStartedVisible(): Promise<void> {
  await expect(this.getStartedLink).toBeVisible();
}

  async expectInstallationHeadingVisible(): Promise<void> {
    await expect(this.installationHeading).toBeVisible();
  }
}