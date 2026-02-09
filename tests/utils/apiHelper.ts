import { type Page, type APIRequestContext, expect } from '@playwright/test';

export class ApiHelper {
  readonly page: Page;
  readonly request: APIRequestContext;

  constructor(page: Page, request: APIRequestContext) {
    this.page = page;
    this.request = request;
  }

  // Intercept an API call and return stubbed JSON
  async mockJson(urlPart: string | RegExp, json: unknown, status = 200): Promise<void> {
    await this.page.route(urlPart, async (route) => {
      await route.fulfill({
        status,
        contentType: 'application/json',
        body: JSON.stringify(json),
      });
    });
  }

  // Example: wait for a response that matches a URL pattern
  async expectResponse(urlPart: string | RegExp, status = 200): Promise<void> {
    const res = await this.page.waitForResponse((r) => {
      const url = r.url();
      return typeof urlPart === 'string' ? url.includes(urlPart) : urlPart.test(url);
    });
    expect(res.status(), 'Unexpected response status').toBe(status);
  }

  // Example: use Playwright request fixture to call an endpoint directly
  async getJson(url: string): Promise<unknown> {
    const res = await this.request.get(url);
    expect(res.ok(), `GET failed: ${url}`).toBeTruthy();
    return await res.json();
  }

  async clearRoutes(): Promise<void> {
    await this.page.unrouteAll({ behavior: 'ignoreErrors' });
  }
}