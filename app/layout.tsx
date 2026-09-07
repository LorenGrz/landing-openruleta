import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'OpenRuleta — Sorteo para eventos, de la inscripción a la rueda',
  description:
    'Toolkit de sorteo self-hostable con Next.js y Supabase: un formulario público de inscripción (deployable) y una rueda de ganadores para quien corre el sorteo (local o con candado). Usado en vivo en Data Saturday LATAM Argentina 2026 (~300 inscripciones en simultáneo) y probado con 1000 en pruebas de carga. Portfolio preview.',
  openGraph: {
    title: 'OpenRuleta',
    description:
      'Formulario público de inscripción + rueda de ganadores, sobre un Supabase free tier. Open source (MIT).',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background font-body text-foreground antialiased">{children}</body>
    </html>
  );
}
