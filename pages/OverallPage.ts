import { Page, Locator } from '@playwright/test';

export class OverallPage {
  readonly page: Page;
  readonly firstCarLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstCarLink = page.locator('table a[href^="/model/"]').first();
  }

  async openFirstCar() {
    await this.firstCarLink.click();
  }
}
