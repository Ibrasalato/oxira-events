import { languages, langPath, type Lang } from '../i18n/content';
import { PAGES, HUB_SLUG, LANDING_LANGS, LANDING_LASTMOD } from '../i18n/landing';

const site = 'https://events.oxira.sa';
const all = languages.map((l) => l.code);
// Each page lists only the language versions that exist for it; x-default is always the Arabic page.
const pages: { path: string; langs: Lang[]; priority: string; lastmod?: string }[] = [
  { path: '', langs: all, priority: '1.0' },
  { path: 'privacy/', langs: all, priority: '0.3' },
  { path: `${HUB_SLUG}/`, langs: LANDING_LANGS, priority: '0.8', lastmod: LANDING_LASTMOD },
  ...PAGES.map((p) => ({ path: `${p.slug}/`, langs: LANDING_LANGS, priority: p.kind === 'service' ? '0.8' : '0.7', lastmod: LANDING_LASTMOD })),
];

export function GET() {
  const urls = pages.flatMap((p) =>
    p.langs.map((code) => {
      const alts = p.langs.map((a) => `<xhtml:link rel="alternate" hreflang="${a}" href="${site}${langPath(a)}${p.path}"/>`).join('');
      const lastmod = p.lastmod ? `<lastmod>${p.lastmod}</lastmod>` : '';
      return `<url><loc>${site}${langPath(code)}${p.path}</loc>${lastmod}${alts}<xhtml:link rel="alternate" hreflang="x-default" href="${site}/${p.path}"/><priority>${p.priority}</priority></url>`;
    }),
  );
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls.join('')}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
