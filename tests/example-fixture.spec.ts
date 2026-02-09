import { test, expect } from './fixtures/testFixtures';

test('fixture provides a single po object', async ({ po, page }) => {
  await po.home.goto();
  await po.home.expectTitleContainsPlaywright();

  await po.home.clickGetStarted();
  await po.docs.waitForIntroUrl();
  await po.docs.expectInstallationVisible();

  // nav is just a demo here
  await po.nav.tryOpenSearch();

  // page still available if you want it
  await expect(page).toHaveTitle(/Playwright/);
});