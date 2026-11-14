# Práctica — Aseguramiento de la Calidad del Software (Curso 048)

Sitio asignado: **Buggy Cars Rating** (https://buggy.justtestit.org/)

## Integrante

| Nombre | Carné |
|---|---|
| Javier José Luis Rivera Pérez | 1790-22-10552 |

## Descripción

Pruebas manuales y automatizadas (Playwright + TypeScript) sobre el sitio de práctica,
con Page Object Model, fixtures reutilizables, evidencias automáticas y ejecución en
Chromium.

Alcance de la práctica: **5 casos de prueba** (3 automatizados y 2 manuales) sobre las
historias HU-1 (registro), HU-2 (perfil) y HU-3 (votar), y el reporte de los defectos encontrados.

**Navegador utilizado:** los tests automatizados corren en Chromium de Playwright (proyecto
`chromium`, el que genera las capturas de `evidencias/`). Los dos casos
manuales se ejecutaron en Google Chrome.

## Instalación

```bash
npm install              # respeta .npmrc (ignore-scripts=true)
npx playwright install chromium
```

## Ejecución

```bash
npx playwright test --grep "@smoke"   # prueba de humo (verifica el entorno)
npx playwright test --grep "@auto"    # los 3 casos automatizados
npx playwright show-report            # reporte HTML
```

## Estructura

```
proyecto-qa-buggy/
├── .github/workflows/playwright.yml   # integración continua (GitHub Actions)
├── tests/
│   ├── smoke.spec.ts                  # verifica que el entorno funciona
│   └── casos-automatizados.spec.ts    # TC-A01..TC-A03
├── pages/                             # Page Object Model
│   ├── HomePage.ts
│   ├── RegisterPage.ts
│   ├── OverallPage.ts
│   └── ModelPage.ts
├── fixtures/index.ts
├── helpers/evidencia.ts               # guarda la captura de cada test en evidencias/
├── test-data/users.ts                 # datos ficticios
├── documentos/
│   ├── Casos de Prueba.xlsx           # 3 automatizados + 2 manuales
│   ├── Reporte de Defectos.docx
│   └── Informe - Practica Buggy.docx
├── reportes/                          # reporte HTML y análisis
├── evidencias/                        # capturas de los tests y de los casos manuales
├── docs/
├── .npmrc (ignore-scripts=true)
├── playwright.config.ts
└── tsconfig.json
```

## Casos de prueba

| ID | Tipo | Caso | Historia | Estado |
|---|---|---|---|---|
| TC-A01 | Automatizado | Registro con confirmación de clave distinta | HU-1, C4 | OK |
| TC-A02 | Automatizado | Registro con clave de 6 caracteres que cumple la historia | HU-1, C2 | FALLO (DR-001) |
| TC-A03 | Automatizado | Votar sin iniciar sesión en el primer auto de Overall Rating | HU-3, C4 | OK |
| TC-M01 | Manual | Cambio de clave desde el perfil por una de 8 caracteres | HU-2, C2 | FALLO (DR-002) |
| TC-M02 | Manual | Guardar el perfil con el nombre vacío | HU-2, C3 | OK |

El detalle de pasos, datos y resultados está en `documentos/Casos de Prueba.xlsx`.

**TC-A02 falla a propósito:** el sitio rechaza la clave, que según la historia es válida, y eso es el
defecto DR-001. El test no se modificó para que pase.

## Defectos encontrados

| ID | Defecto | Severidad |
|---|---|---|
| DR-001 | El registro rechaza una clave de 6 caracteres que cumple la historia de usuario | Media |
| DR-002 | El perfil acepta una clave nueva de 8 caracteres aunque la historia pide mínimo 10 | Media |

El detalle está en `documentos/Reporte de Defectos.docx`.

## Evidencias

- Casos automatizados: `evidencias/TC-A01.png`, `TC-A02.png` y `TC-A03.png` (los genera cada test al correr).
- Casos manuales: `evidencias/TC-M01.png`, `TC-M02.png` y `TC-M02-campo-vacio.png`.
- Defectos: `evidencias/DR-001.png` y `evidencias/DR-002.png`.

## Documentos en Drive

Los documentos de la práctica (casos de prueba, reporte de defectos e informe) también están en esta carpeta de Drive: https://drive.google.com/drive/folders/1Z-YngwQwSuo9MJKQVsX3IvG3lBSUk9Ya?usp=sharing
