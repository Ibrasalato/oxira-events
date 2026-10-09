# Oxira Events — events.oxira.sa

Arabic by default, plus English, German, French and Russian at `/en/`, `/de/`, `/fr/`, `/ru/` site for Oxira Events: exhibition stand design and build, conference stages, lighting and screens, print, giveaways and media production.

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
| All copy (AR, EN, DE, FR, RU), contact details, n8n webhook URLs | `src/i18n/content.ts` |
| Page markup, gallery, lightbox, quote form, chat widget | `src/components/Site.astro` |
| Styles and brand tokens | `src/styles/global.css` |
| Project photos (from the company profile) | `public/img/work/<n>-s.webp` (720px) and `-l.webp` (1400px) |
| Upcoming exhibitions calendar (edit to add/remove shows; ended shows hide themselves) | `src/i18n/events.json` |
| Calendar, stand planner, privacy and 404 copy (5 languages) | `src/i18n/extra.ts` |
| Share images per language (1200×630) | `public/og-<lang>.jpg` |
| 3D stand designer (three.js, loaded only when the planner is on screen) | `src/scripts/stand3d.ts`, `src/scripts/stand-boot.ts` |
| n8n workflow source (initial version; the live workflow in n8n is the source of truth) | `n8n/oxira-events.workflow.ts` |

To add a project: put `<id>-s.webp` and `<id>-l.webp` in `public/img/work/`, add its size to `src/i18n/work-dims.json`, and add `{ id, brand? }` to `WORK` in `content.ts`.

## AI agent and form (n8n workflow "Oxira Events")

Separate from the Oxira website agent.

- Chat widget → `POST https://api.oxira.sa/oxira-events-chat` with `{ sessionId, message, lang, page }`, returns `{ reply }`.
- Quote form → `POST https://api.oxira.sa/oxira-events-contact`, returns `{ success, id }`.
- Both save to the n8n data table `oxira_events_leads` and email info@oxira.sa.
- When the visitor used the stand planner, the form also sends `design` (choices) and `files` (preview JPG, GLB, OBJ as base64). The "Prepare attachments" node turns them into email attachments: the preview is embedded, the GLB keeps colours and logo, and the OBJ opens in any 3ds Max version. Units are metres.
- Allowed origins: `https://events.oxira.sa`, `https://ibrasalato.github.io`, `http://localhost:4321`.

## DNS

Add a CNAME record: host `events` → `ibrasalato.github.io`. Then in the repo's Settings → Pages, set the custom domain to `events.oxira.sa` and enable HTTPS.

## Booking, AR and profile
- Consultation booking (contact section, second tab) posts to `/webhook/oxira-events-booking`; n8n validates the slot (Sun–Thu, 10:00–16:30 Riyadh, ≥1h ahead, ≤45 days), saves it, emails the team and the client with an `.ics` invite. Code in `n8n/booking.js`.
- Quote requests with an email address get a confirmation in the page language (`n8n/client-email.js`).
- AR: the 3D planner exports the current stand as GLB and opens it in `<model-viewer>` (WebXR / Scene Viewer on Android, Quick Look on iPhone) at real scale.
- `public/oxira-events-profile-2026.pdf` is a web-compressed copy of the company profile.
