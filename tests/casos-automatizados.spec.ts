import { test, expect } from '../fixtures';
import { nuevoUsuario, CLAVE_6_CARACTERES } from '../test-data/users';
import { guardarEvidencia } from '../helpers/evidencia';

test.describe('Casos automatizados @auto', () => {
  // HU-1, C4: la confirmación de la clave debe coincidir con la clave.
  test('TC-A01 - Registro con confirmación de clave distinta', async ({ registerPage, page }, testInfo) => {
    const usuario = nuevoUsuario();
    await registerPage.fillForm(usuario, 'OtraClave#999');

    await expect(registerPage.passwordsDoNotMatch).toBeVisible();
    await expect(registerPage.registerButton).toBeDisabled();
    await expect(registerPage.registrationSuccessful).toBeHidden();

    await guardarEvidencia(page, testInfo, 'TC-A01');
  });

  test('TC-A02 - Registro con clave de 6 caracteres que cumple la historia', async ({ registerPage, page }, testInfo) => {
    const usuario = nuevoUsuario({ password: CLAVE_6_CARACTERES });
    expect(usuario.password).toHaveLength(6);

    await registerPage.fillForm(usuario);
    await registerPage.registerButton.click();

    // Se espera la respuesta del sitio (éxito o error) y se captura antes de verificar.
    await expect(registerPage.visibleAlert).toBeVisible();
    await guardarEvidencia(page, testInfo, 'TC-A02');

    await expect(registerPage.registrationSuccessful).toBeVisible();
  });

  test('TC-A03 - Votar sin iniciar sesión muestra el aviso de login', async ({ homePage, overallPage, modelPage, page }, testInfo) => {
    await homePage.overallRatingLink.click();
    await expect(page).toHaveURL(/\/overall/);

    await overallPage.openFirstCar();
    await expect(page).toHaveURL(/\/model\//);

    await expect(modelPage.loginToVoteMessage).toBeVisible({ timeout: 30000 });
    await guardarEvidencia(page, testInfo, 'TC-A03');
  });
});
