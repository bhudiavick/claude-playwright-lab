import { test } from '@playwright/test';
import { PlaywrightHomePage } from './pages/playwrightHomePage';

test('has title', async ({ page }) => {
  const home = new PlaywrightHomePage(page);

  await home.goto();
  await home.expectTitleContainsPlaywright();
});

test('get started link', async ({ page }) => {
  const home = new PlaywrightHomePage(page);

  await home.goto();
  await home.clickGetStarted();
  await home.expectInstallationHeadingVisible();
});