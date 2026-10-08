import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://events.oxira.sa',
  build: { inlineStylesheets: 'always' },
  vite: { build: { chunkSizeWarningLimit: 700 } },
  i18n: {
    defaultLocale: 'ar',
    locales: ['ar', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
