import Image from 'next/image';
import Icon from '../components/Icon';

// next/image with `unoptimized: true` does not auto-prefix basePath for
// plain public/ files, so it's applied by hand here to match next.config.js.
const base = process.env.GITHUB_ACTIONS ? '/landing-openruleta' : '';

const REPO = 'https://github.com/LorenGrz/OpenRuleta';

const SHOTS = [
  {
    src: 'form.png',
    title: 'Formulario público',
    body: 'Una pantalla. Nombre, email, últimos 3 dígitos del documento. Se comparte por QR y se completa desde el celular.',
  },
  {
    src: 'wheel.png',
    title: 'Rueda de ganadores',
    body: 'Un segmento por participante, lista en vivo al costado. Gira, marca al ganador y lo saca del bombo para las próximas vueltas.',
  },
  {
    src: 'winner.png',
    title: 'Premio pre-cargado',
    body: 'El campo de premio ya viene con el título del sorteo, así quien lo opera no lo tipea dos veces. Confirmá y exportá el CSV.',
  },
];

const HOW = [
  {
    icon: 'qr_code_2',
    title: 'apps/form — la parte pública',
    body: 'Next.js estático deployable en Vercel. Usa la anon key de Supabase, que por RLS solo puede INSERT en la tabla de participantes. Honeypot anti-bot y un índice único por email que rechaza duplicados con 409.',
  },
  {
    icon: 'casino',
    title: 'apps/ruleta — la parte del operador',
    body: 'La rueda que se proyecta en el evento. Usa la service_role key (lee, actualiza y borra), así que corre en tu máquina — o hosteada detrás de HTTP Basic Auth con una sola variable de entorno.',
  },
  {
    icon: 'database',
    title: 'Una sola tabla en Supabase',
    body: 'public.participants. El form inserta, la rueda marca won_at y prize. "Reiniciar sorteo" limpia los ganadores. Todo entra en el free tier; un cron diario evita que el proyecto se pause.',
  },
  {
    icon: 'tune',
    title: 'Todo lo tuyo en un archivo',
    body: 'packages/config/src/index.ts: nombre del evento, todos los textos (inglés por defecto, se traducen ahí), reglas del campo de documento, sponsors, colaboradores, tiempos de la rueda, colores del confeti y columnas del CSV.',
  },
];

const RUN_LOCAL = [
  'git clone https://github.com/LorenGrz/OpenRuleta && cd OpenRuleta',
  'pnpm install                 # una vez, en la raíz (es un workspace pnpm)',
  '# creá un proyecto Supabase y corré supabase/schema.sql en el SQL Editor',
  'cp apps/form/.env.example   apps/form/.env.local     # URL + anon key',
  'cp apps/ruleta/.env.example apps/ruleta/.env.local   # URL + service_role key',
  'pnpm dev:form     # → http://localhost:3000',
  'pnpm dev:ruleta   # → http://localhost:3100  (otra terminal)',
];

const DEPLOY_FORM = [
  {
    step: '01',
    title: 'Importá el repo en Vercel',
    body: 'Root Directory: apps/form. El resto lo detecta solo (Next.js).',
  },
  {
    step: '02',
    title: 'Variables de entorno',
    body: 'NEXT_PUBLIC_SUPABASE_URL y SUPABASE_ANON_KEY. La anon key solo puede INSERT, así que es segura en un deploy público.',
  },
  {
    step: '03',
    title: 'Deploy + cron',
    body: 'apps/form/vercel.json registra un hit diario a /api/ping para que el proyecto Supabase free no se pause por inactividad.',
  },
  {
    step: '04',
    title: 'QR a la URL',
    body: 'Generás un QR apuntando al deploy y lo ponés en una slide. Durante el evento corrés apps/ruleta local contra el mismo Supabase; toma las inscripciones nuevas solo (poll cada pocos segundos).',
  },
];

const STACK = [
  'Next.js 16 (App Router)',
  'React 19',
  'TypeScript',
  'Tailwind CSS v4',
  'pnpm workspaces',
  'Supabase',
  '@supabase/supabase-js',
  'canvas-confetti',
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero-wash border-b border-outline">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 pb-16 pt-20 text-center md:pt-28">
          <div className="flex items-center gap-2 rounded-full border border-outline bg-surface px-4 py-1.5 shadow-sm">
            <Icon name="casino" filled className="text-primary" />
            <span className="font-mono text-sm font-semibold tracking-wide">OpenRuleta</span>
            <span className="text-outline">·</span>
            <span className="font-mono text-xs text-muted">MIT · self-hostable</span>
          </div>

          <h1 className="max-w-3xl font-display text-3xl font-extrabold leading-tight md:text-5xl">
            Un sorteo para tu evento, <span className="text-primary">de la inscripción a la rueda</span>
          </h1>

          <p className="max-w-2xl text-lg text-muted">
            Dos apps chicas de Next.js sobre una sola base de Supabase: un{' '}
            <strong className="text-foreground">formulario público</strong> que la gente
            completa desde el celular, y una <strong className="text-foreground">rueda de
            ganadores</strong> para quien corre el sorteo. El form se deploya; la rueda corre
            local o detrás de una contraseña. Vos elegís.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={REPO}
              className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-white shadow-[0_10px_30px_rgba(37,99,235,0.35)] transition-transform hover:scale-[1.02]"
            >
              <Icon name="code" />
              Ver en GitHub
            </a>
            <a
              href="#correlo"
              className="flex items-center gap-2 rounded-xl border border-outline bg-surface px-6 py-3 font-semibold transition-colors hover:bg-surface-alt"
            >
              <Icon name="terminal" />
              Cómo correrlo
            </a>
            <a
              href="#como-funciona"
              className="flex items-center gap-2 rounded-xl border border-outline bg-surface px-6 py-3 font-semibold transition-colors hover:bg-surface-alt"
            >
              Cómo funciona
            </a>
          </div>
        </div>
      </section>

      {/* Event proof */}
      <section className="border-b border-outline bg-surface py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Probado en vivo
          </p>
          <h2 className="mb-4 font-display text-2xl font-bold md:text-3xl">
            Data Saturday LATAM Argentina 2026
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-muted">
            Se usó durante el evento real: los asistentes se inscribían desde el celular
            escaneando un QR mientras la rueda sorteaba ganadores en el escenario — todo
            contra un único proyecto de Supabase del plan gratuito.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              ['~300', 'inscripciones en simultáneo'],
              ['1', 'proyecto Supabase (free tier)'],
              ['0', 'servicios extra que mantener'],
            ].map(([n, label]) => (
              <div key={label} className="rounded-2xl border border-outline bg-surface-alt p-6">
                <div className="font-display text-3xl font-extrabold text-primary">{n}</div>
                <div className="mt-1 text-sm text-muted">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-3 text-center font-display text-3xl font-bold">Cómo se ve</h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-muted">
          Los datos de la rueda son de ejemplo; los sponsors y colaboradores son
          placeholders que se reemplazan en un archivo.
        </p>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {SHOTS.map((shot) => (
            <figure key={shot.src} className="flex flex-col">
              <div className="overflow-hidden rounded-2xl border border-outline bg-white shadow-[0_18px_50px_rgba(15,23,42,0.12)]">
                <Image
                  src={`${base}/${shot.src}`}
                  alt={shot.title}
                  width={1204}
                  height={983}
                  className="w-full"
                />
              </div>
              <figcaption className="mt-4">
                <p className="font-semibold">{shot.title}</p>
                <p className="mt-1 text-sm text-muted">{shot.body}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="como-funciona" className="border-y border-outline bg-surface py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-3 text-center font-display text-3xl font-bold">Cómo funciona</h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-muted">
            Dos apps, tres paquetes compartidos, una tabla. Sin backend propio.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {HOW.map((f) => (
              <div key={f.title} className="rounded-2xl border border-outline bg-surface-alt p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-primary/25 bg-primary/10">
                  <Icon name={f.icon} className="text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">{f.title}</h3>
                <p className="text-sm text-muted">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Run local */}
      <section id="correlo" className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="mb-3 text-center font-display text-3xl font-bold">Correlo local</h2>
        <p className="mx-auto mb-10 max-w-xl text-center text-muted">
          Node 20+, pnpm y un proyecto de Supabase. Las dos apps corren en paralelo en
          puertos distintos.
        </p>
        <div className="overflow-x-auto rounded-2xl border border-outline bg-foreground p-5 font-mono text-sm text-white/90 shadow-lg">
          <pre className="whitespace-pre">
            <code>{RUN_LOCAL.join('\n')}</code>
          </pre>
        </div>
        <p className="mt-4 text-center text-sm text-muted">
          Cada app lee su propio <code className="font-mono">.env.local</code>. El detalle
          está en el{' '}
          <a
            href={`${REPO}#setup`}
            className="font-semibold text-primary underline underline-offset-4"
          >
            README
          </a>
          .
        </p>
      </section>

      {/* Deploy the form */}
      <section className="border-y border-outline bg-surface py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-3 text-center font-display text-3xl font-bold">
            Deployá el form para tu evento
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted">
            La mitad pública es la que se sube. La rueda seguís corriéndola local contra la
            misma base.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {DEPLOY_FORM.map((d) => (
              <div key={d.step} className="rounded-2xl border border-outline bg-surface-alt p-6">
                <div className="mb-3 font-mono text-sm font-bold text-primary">{d.step}</div>
                <h3 className="mb-2 font-semibold">{d.title}</h3>
                <p className="text-sm text-muted">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="mb-3 font-display text-3xl font-bold">Cómo está hecho</h2>
        <p className="mx-auto mb-10 max-w-2xl text-muted">
          Monorepo pnpm: <code className="font-mono">apps/form</code>,{' '}
          <code className="font-mono">apps/ruleta</code> y tres paquetes compartidos
          (config, core, ui). Sin base de datos propia ni servidor: Supabase hace de
          backend.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {STACK.map((item) => (
            <span
              key={item}
              className="rounded-full border border-outline bg-surface px-4 py-2 font-mono text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-outline bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-12 text-center">
          <div className="flex items-center gap-1.5">
            <Icon name="casino" filled className="text-primary" />
            <span className="font-mono font-semibold">OpenRuleta</span>
          </div>
          <p className="text-sm text-muted">
            Proyecto de portfolio — Lorenzo Graizzaro. Open source bajo licencia MIT.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={REPO}
              className="text-sm font-semibold text-primary underline underline-offset-4"
            >
              Repositorio
            </a>
            <a
              href="https://lorengrz.github.io/"
              className="text-sm font-semibold text-primary underline underline-offset-4"
            >
              Portfolio
            </a>
            <a
              href="mailto:lorenzograizzaro55@gmail.com"
              className="text-sm font-semibold text-primary underline underline-offset-4"
            >
              lorenzograizzaro55@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
