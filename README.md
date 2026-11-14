# Práctica — Aseguramiento de la Calidad del Software (Curso 048)

Sitio asignado: **Buggy Cars Rating** (https://buggy.justtestit.org/)

## Integrante

| Nombre | Carné |
|---|---|
| Javier José Luis Rivera Pérez | 1790-22-10552 |

## Descripción

Pruebas manuales y automatizadas (Playwright + TypeScript) sobre el sitio de práctica,
con Page Object Model, fixtures reutilizables, evidencias automáticas y ejecución en
Chromium y Firefox.

Alcance de la práctica: **5 casos de prueba** (3 automatizados y 2 manuales) y el reporte
de los defectos encontrados.

## Instalación

```bash
npm install              # respeta .npmrc (ignore-scripts=true)
npx playwright install chromium firefox
```

## Ejecución

```bash
npx playwright test --grep "@smoke"   # prueba de humo (verifica el entorno)
npx playwright test --grep "@auto"    # los 3 casos automatizados
npx playwright test --project=firefox # solo en Firefox
npx playwright show-report            # reporte HTML
```

## Estructura

```
proyecto-qa-buggy/
├── .github/workflows/playwright.yml   # integración continua (GitHub Actions)
├── tests/
│   ├── smoke.spec.ts                  # verifica que el entorno funciona
│   └── casos-automatizados.spec.ts    # TC-A01..TC-A03 (pendientes)
├── pages/
│   └── HomePage.ts
├── fixtures/index.ts
├── helpers/
├── test-data/users.ts                 # datos ficticios
├── documentos/
│   ├── Casos de Prueba.xlsx           # 3 automatizados + 2 manuales
│   ├── Reporte de Defectos.docx
│   └── Informe - Practica Buggy.docx
├── reportes/                          # reporte HTML y análisis
├── evidencias/                        # capturas y videos
├── docs/
├── .npmrc (ignore-scripts=true)
├── playwright.config.ts
└── tsconfig.json
```

## Casos de prueba

| ID | Tipo | Caso | Estado |
|---|---|---|---|
| TC-A01 | Automatizado | (pendiente) | — |
| TC-A02 | Automatizado | (pendiente) | — |
| TC-A03 | Automatizado | (pendiente) | — |
| TC-M01 | Manual | (pendiente) | — |
| TC-M02 | Manual | (pendiente) | — |

## Defectos encontrados

| ID | Defecto | Severidad |
|---|---|---|
| DR-001 | (pendiente) | — |
"# 048-JRivera-EF" 
