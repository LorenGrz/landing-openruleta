import type { Config } from 'tailwindcss';

// Palette echoes the OpenRuleta apps' theme tokens
// (packages/ui/src/theme.css) — kept in sync by hand since this is a
// separate Next.js project.
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#f6f8fc',
        surface: '#ffffff',
        'surface-alt': '#eef2fb',
        foreground: '#0b1220',
        muted: '#5b6472',
        primary: '#2563eb',
        'primary-deep': '#1e3a8a',
        outline: '#dbe3f0',
      },
      fontFamily: {
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        body: ['Montserrat', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
