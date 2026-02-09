import { type Page } from '@playwright/test';
import { HomePage } from './homePage';
import { DocsPage } from './docsPage';
import { NavBar } from './navBar';

export class POMaster {
  readonly page: Page;

  // All your page objects live here
  readonly home: HomePage;
  readonly docs: DocsPage;
  readonly nav: NavBar;

  constructor(page: Page) {
    this.page = page;

    // Instantiate once
    this.home = new HomePage(page);
    this.docs = new DocsPage(page);
    this.nav = new NavBar(page);
  }
}