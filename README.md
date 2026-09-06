# landing-openruleta

Sitio estático de portfolio para [OpenRuleta](https://github.com/LorenGrz/OpenRuleta) —
toolkit de sorteo self-hostable (Next.js + Supabase): un formulario público de
inscripción que se deploya, y una rueda de ganadores para quien corre el sorteo
(local o detrás de una contraseña).

No tiene servidor ni llamadas a API propias; solo enlaza al repositorio y muestra
capturas de las apps.

## Stack

- Next.js 16 (App Router, `output: 'export'`)
- Tailwind CSS
- TypeScript

## Desarrollo local

```bash
npm install
npm run dev
# http://localhost:3000
```

## Build

```bash
npm run build   # genera ./out
```

Se despliega automáticamente a GitHub Pages vía GitHub Actions en cada push a `master`.

**URL en vivo:** https://lorengrz.github.io/landing-openruleta/

## Proyecto relacionado

- Repo principal: [LorenGrz/OpenRuleta](https://github.com/LorenGrz/OpenRuleta)
