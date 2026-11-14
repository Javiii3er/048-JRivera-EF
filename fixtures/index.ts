import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { RegisterPage } from '../pages/RegisterPage';
import { OverallPage } from '../pages/OverallPage';
import { ModelPage } from '../pages/ModelPage';

type AppFixtures = {
  homePage: HomePage;
  registerPage: RegisterPage;
  overallPage: OverallPage;
  modelPage: ModelPage;
};

export const test = base.extend<AppFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    await homePage.expectLoaded();
    await use(homePage);
  },
  registerPage: async ({ page }, use) => {
    const registerPage = new RegisterPage(page);
    await registerPage.navigate();
    await use(registerPage);
  },
  overallPage: async ({ page }, use) => {
    await use(new OverallPage(page));
  },
  modelPage: async ({ page }, use) => {
    await use(new ModelPage(page));
  },
});

export { expect } from '@playwright/test';
