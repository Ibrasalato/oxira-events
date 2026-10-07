export function GET() {
  return new Response('User-agent: *\nAllow: /\n\nSitemap: https://events.oxira.sa/sitemap.xml\n', { headers: { 'Content-Type': 'text/plain' } });
}
