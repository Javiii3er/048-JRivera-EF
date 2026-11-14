import { Page, TestInfo } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

export async function guardarEvidencia(page: Page, testInfo: TestInfo, nombre: string) {
  let captura: Buffer;
  try {
    captura = await page.screenshot({ fullPage: true });
  } catch {
    // En algunas corridas la captura de página completa falla; se usa solo lo visible.
    captura = await page.screenshot();
  }
  await testInfo.attach(nombre, { body: captura, contentType: 'image/png' });
  if (testInfo.project.name === 'chromium') {
    const carpeta = path.resolve(__dirname, '..', 'evidencias');
    fs.mkdirSync(carpeta, { recursive: true });
    fs.writeFileSync(path.join(carpeta, `${nombre}.png`), captura);
  }
}
