import { test, expect } from '../fixtures';

test.describe('Smoke @smoke', () => {
  test('la página de inicio carga con su formulario de login', async ({ homePage }) => {
    await expect(homePage.page).toHaveTitle('Buggy Cars Rating');
    await expect(homePage.loginInput).toBeVisible();
    await expect(homePage.registerLink).toBeVisible();
  });
});
