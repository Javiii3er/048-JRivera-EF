import { Page, Locator } from '@playwright/test';
import { Usuario } from '../test-data/users';

export class RegisterPage {
  readonly page: Page;
  readonly loginInput: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly registerButton: Locator;
  readonly passwordsDoNotMatch: Locator;
  readonly registrationSuccessful: Locator;
  readonly visibleAlert: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginInput = page.locator('#username');
    this.firstNameInput = page.locator('#firstName');
    this.lastNameInput = page.locator('#lastName');
    this.passwordInput = page.locator('#password');
    this.confirmPasswordInput = page.locator('#confirmPassword');
    this.registerButton = page.locator('form button[type="submit"]', { hasText: 'Register' });
    this.passwordsDoNotMatch = page.getByText('Passwords do not match');
    this.registrationSuccessful = page.getByText('Registration is successful');
    this.visibleAlert = page.locator('.alert:visible');
  }

  async navigate() {
    await this.page.goto('/register');
    await this.loginInput.waitFor();
  }

  async fillForm(usuario: Usuario, confirmacion: string = usuario.password) {
    await this.loginInput.fill(usuario.login);
    await this.firstNameInput.fill(usuario.firstName);
    await this.lastNameInput.fill(usuario.lastName);
    await this.passwordInput.fill(usuario.password);
    await this.confirmPasswordInput.fill(confirmacion);
  }
}
