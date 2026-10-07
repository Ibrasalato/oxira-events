# Oxira Events — events.oxira.sa

Bilingual (Arabic default, English at `/en/`) site for Oxira Events: exhibition stand design and build, conference stages, lighting and screens, print, giveaways and media production.

Built with [Astro](https://astro.build), deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`. The custom domain is set in `public/CNAME`.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Where things live

| What | File |
| --- | --- |
| All copy (AR + EN), contact details, n8n webhook URLs | `src/i18n/content.ts` |
| Page markup, gallery, lightbox, quote form, chat widget | `src/components/Site.astro` |
| Styles and brand tokens | `src/styles/global.css` |
| Project photos (from the company profile) | `public/img/work/<n>-s.webp` (720px) and `-l.webp` (1400px) |
| n8n workflow source (reference copy) | `n8n/oxira-events.workflow.ts` |

To add a project: put `<id>-s.webp` and `<id>-l.webp` in `public/img/work/`, add its size to `src/i18n/work-dims.json`, and add `{ id, brand? }` to `WORK` in `content.ts`.

## AI agent and form (n8n workflow "Oxira Events")

Separate from the Oxira website agent.

- Chat widget → `POST https://ibrasalato.app.n8n.cloud/webhook/oxira-events-chat` with `{ sessionId, message, lang, page }`, returns `{ reply }`.
- Quote form → `POST https://ibrasalato.app.n8n.cloud/webhook/oxira-events-contact`, returns `{ success, id }`.
- Both save to the n8n data table `oxira_events_leads` and email info@oxira.sa.
- Allowed origins: `https://events.oxira.sa`, `https://ibrasalato.github.io`, `http://localhost:4321`.

## DNS

Add a CNAME record: host `events` → `ibrasalato.github.io`. Then in the repo's Settings → Pages, set the custom domain to `events.oxira.sa` and enable HTTPS.
