# Claude Playwright Lab (TypeScript)

A small learning repo to practice **Playwright Test + TypeScript** patterns using Claude Web:
- Page Objects (POM)
- A **POMaster** that instantiates multiple Page Objects once
- **Custom fixtures** so tests can use `({ po, api })` (no `page` needed in test signatures)
- A simple `ApiHelper` fixture for **network interception** and **Playwright request** usage
- TypeScript sanity checks with `tsc --noEmit`

---

## What’s in this repo

### 1) Page Objects
Location: `tests/pages/`

- `homePage.ts` — basic interactions on the Playwright homepage
- `docsPage.ts` — doc page assertions (e.g., Installation heading)
- `navBar.ts` — example of a reusable component object
- `poMaster.ts` — **POMaster** that creates and exposes all Page Objects under one object

### 2) POMaster (single object that holds all pages)
Location: `tests/pages/poMaster.ts`

The key idea is: tests receive one object (`po`) that contains multiple page objects:

```ts
await po.home.goto();
await po.home.clickGetStarted();
await po.docs.expectInstallationVisible();