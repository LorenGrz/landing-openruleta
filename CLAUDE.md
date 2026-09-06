# Contexto del proyecto

Landing estática de portfolio para **OpenRuleta** (repo aparte,
`LorenGrz/OpenRuleta`): toolkit de sorteo self-hostable con Next.js + Supabase —
un formulario público de inscripción (deployable) y una rueda de ganadores para
el operador (local o con HTTP Basic Auth). Este repo **no tiene lógica propia** —
solo enlaza al repositorio y muestra capturas. Next.js 16 con `output: 'export'`,
deploy automático a GitHub Pages en cada push a `master`
(https://lorengrz.github.io/landing-openruleta/).

Repo hermano del mismo patrón (landing estática + app aparte): también hay
`landing-booklibre`, `landing-frauddetector`, `landing-humandetector`,
`landing-prioria`, `landing-serverlessscanner`, `landing-studyquest`.

## Notas

- Paleta azul/blanca que sigue los tokens de OpenRuleta
  (`packages/ui/src/theme.css`), no la del resto de las landings. Fuente
  Montserrat, igual que las apps.
- Capturas en `public/` (`form.png`, `wheel.png`, `winner.png`): la de la rueda
  se sacó con datos de ejemplo (figuras históricas), no con asistentes reales.
- El dato del evento (Data Saturday LATAM Argentina 2026, ~300 inscripciones en
  simultáneo) es real y va nombrado, a pedido de Loren.

## Última revisión

2026-09-06 — creación del repo.
