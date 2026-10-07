import { languages, langPath } from '../i18n/content';

const site = 'https://events.oxira.sa';
const pages = ['', 'privacy/'];

export function GET() {
  const urls = pages.flatMap((p) =>
    languages.map((l) => {
      const alts = languages.map((a) => `<xhtml:link rel="alternate" hreflang="${a.code}" href="${site}${langPath(a.code)}${p}"/>`).join('');
      return `<url><loc>${site}${langPath(l.code)}${p}</loc>${alts}<xhtml:link rel="alternate" hreflang="x-default" href="${site}/${p}"/><priority>${p ? '0.3' : '1.0'}</priority></url>`;
    }),
  );
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls.join('')}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
