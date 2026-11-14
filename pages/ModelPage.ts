import { Page, Locator } from '@playwright/test';

export class ModelPage {
  readonly page: Page;
  readonly loginToVoteMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginToVoteMessage = page.getByText('You need to be logged in to vote.');
  }
}
