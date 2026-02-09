import { test, expect } from './fixtures/testFixtures';

test('uses po + api fixture (no page in signature)', async ({ po, api }) => {
  // Intercept anything that matches this pattern (demo pattern)
  await api.mockJson(/.*\/api\/demo.*/, { ok: true, items: [{ id: 1 }] });

  await po.home.goto();
  await po.home.expectTitleContainsPlaywright();

  // Escape hatch still exists if you need it:
  // await po.page.pause();

  // Direct request example (hits real URL - choose something stable or your own API)
  // const json = await api.getJson('https://example.com/api/health');
  // console.log(json);

  await expect(po.page).toHaveTitle(/Playwright/);
});