# AGENTS.md

Single source of truth for humans and AI agents working on this repo. Moved here from CLAUDE.md on 2026-10-10 by `project-init`'s adopt mode - if this file and the code disagree, the code wins, fix this file.

## Documentation map (read this instead of the code)

1. `AGENTS.md` (this file) - map, how we work, workflow contract.
2. `.agents/CONTEXT.md` - current stack/architecture snapshot and repo facts.
3. `docs/plans/HANDOFF.md` - current state and how to resume, read first if work is mid-flight.
4. `docs/decisions/` - ADRs: why a non-trivial trade-off was decided the way it was.

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
  simultáneo) es el uso real y va nombrado, a pedido de Loren. Los 1000 son una
  prueba de carga posterior; la landing muestra los 1000 como número destacado y
  los ~300 como contexto del evento — sin dar a entender que 300 sea un tope.

## Última revisión

2026-09-07 — el número destacado pasa a 1000 (prueba de carga); los ~300 del
evento quedan como contexto.

## Workflow contract

These rules describe this repo's CURRENT reality, detected by `project-init`'s `adopt.sh` on 2026-10-10 - not an aspiration. If a row says "nothing (convention only)", that rule is not mechanically enforced today.

| Rule | Documented | Enforced by |
|---|---|---|
| Single branch flow - `master` is both base and release branch | this section | nothing (convention only) |
| Branch names observed: fix/ (1) | this section | nothing (convention only) |
| PRs merged into `master` via merge commit (1 of last 3 commits are merges) | this section | nothing (convention only) |
| ~100% of the last 2 commit subjects on `master` are Conventional Commits | this section | nothing (convention only) |
| CI: Deploy to GitHub Pages (deploy.yml): push,workflow_dispatch | this section | nothing requires it to pass before merge |
| Repo allows: squash=true, merge-commit=true, rebase=true; delete-branch-on-merge=false | this section | GitHub repo settings (`gh repo view`) |

Changing any rule above: update this table and every enforcement point in the same change, and record it in `docs/decisions/`.

### Recommended (not enforced yet)
- Branch protection on `master` (required status checks, no force-push).


## Documentation rules

- Any decision with a real trade-off (architecture, a hard-to-reverse library/service choice, data model, security trade-off) gets a new ADR under the ADR directory above.
- When work pauses mid-flight, update `docs/plans/HANDOFF.md` before stopping, not after.
- A change that alters architecture, env vars, commands, or deploy updates `AGENTS.md` and `.agents/CONTEXT.md` in the same change.
- Changing any "Workflow contract" rule updates every enforcement point in the same change, per that section above.
