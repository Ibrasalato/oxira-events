import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://events.oxira.sa',
  i18n: {
    defaultLocale: 'ar',
    locales: ['ar', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
