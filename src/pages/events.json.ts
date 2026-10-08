// Public list of shows for the n8n workflow "Oxira Events — Exhibition alerts" (daily reminders).
import events from '../i18n/events.json';

export function GET() {
  return new Response(JSON.stringify({ events }), { headers: { 'Content-Type': 'application/json' } });
}
