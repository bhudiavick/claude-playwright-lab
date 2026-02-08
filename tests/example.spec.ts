import { test } from '@playwright/test';
import { PlaywrightHomePage } from './pages/playwrightHomePage';

test('get started link', async ({ page }) => {
  const home = new PlaywrightHomePage(page);

  await home.goto();

  // Precondition: link is actionable
  await home.expectGetStartedVisible();

  // Robust navigation wait
  await Promise.all([
    page.waitForURL(/.*\/docs\/intro.*/),
    home.clickGetStarted(),
  ]);

  await home.expectInstallationHeadingVisible();
});