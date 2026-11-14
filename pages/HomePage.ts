import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly logo: Locator;
  readonly loginInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly registerLink: Locator;
  readonly popularMake: Locator;
  readonly popularModel: Locator;
  readonly overallRating: Locator;
  readonly overallRatingLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logo = page.getByRole('link', { name: 'Buggy Rating' });
    this.loginInput = page.locator('input[name="login"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.registerLink = page.getByRole('link', { name: 'Register' });
    this.popularMake = page.getByText('Popular Make');
    this.popularModel = page.getByText('Popular Model');
    this.overallRating = page.getByText('Overall Rating');
    this.overallRatingLink = page.locator('a[href="/overall"]');
  }

  async navigate() {
    await this.page.goto('/');
  }

  async expectLoaded() {
    await expect(this.logo).toBeVisible();
    await expect(this.popularMake).toBeVisible();
  }
}
