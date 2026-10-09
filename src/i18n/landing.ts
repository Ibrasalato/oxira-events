// Service and region landing pages (Arabic + English only).
// Structure lives here; the copy lives in landing-ar.ts and landing-en.ts, keyed by slug.
import type { Lang } from './content';
import { ar } from './landing-ar';
import { en } from './landing-en';

export type LLang = 'ar' | 'en';
/** Languages the landing pages exist in. hreflang, the language menu and the sitemap only list these. */
export const LANDING_LANGS: Lang[] = ['ar', 'en'];
/** Last content change of the landing pages, for the sitemap. Bump when the copy changes. */
export const LANDING_LASTMOD = '2026-10-09';

/** Text may contain links: [label](@slug) to another landing page, [label](#anchor) to a home-page section. */
export type Block = { h: string; p?: string[]; list?: string[]; after?: string[] };
export type Copy = {
  name: string;        // short name, used in menus, cards and breadcrumbs
  teaser: string;      // one sentence for cards on the hub page
  title: string;       // <title>, ≤ 60 characters
  description: string; // meta description, 120–160 characters
  h1: string;
  kicker: string;
  lead: string;
  blocks: Block[];
  faq: { q: string; a: string }[];
};
export type HubCopy = Omit<Copy, 'blocks' | 'faq'> & { servicesTitle: string; servicesLead: string; regionsTitle: string; regionsLead: string; other: string[] };

type Place = { '@type': 'Country' | 'City' | 'State' | 'AdministrativeArea'; name: string };
export type Landing = {
  slug: string;
  kind: 'service' | 'region';
  img: string;          // portfolio photo id (public/img/work/<id>-s.webp)
  serviceType: string;  // schema.org Service.serviceType (English)
  area: Place[];        // schema.org areaServed
  related: string[];    // slugs
};

const KSA: Place = { '@type': 'Country', name: 'Saudi Arabia' };
const GULF: Place[] = [KSA, { '@type': 'Country', name: 'United Arab Emirates' }, { '@type': 'Country', name: 'Qatar' }, { '@type': 'Country', name: 'Egypt' }];

export const PAGES: Landing[] = [
  { slug: 'exhibition-stands', kind: 'service', img: '39', serviceType: 'Exhibition stand design and build', area: GULF, related: ['lighting-sound-led-screens', 'printing-acrylic', 'exhibition-stands-riyadh', 'exhibition-stands-jeddah'] },
  { slug: 'conference-stages', kind: 'service', img: '46', serviceType: 'Conference stage and event production', area: GULF, related: ['lighting-sound-led-screens', 'media-production', 'promotional-giveaways', 'exhibition-stands-riyadh'] },
  { slug: 'lighting-sound-led-screens', kind: 'service', img: '34', serviceType: 'Event lighting, sound and LED screens', area: GULF, related: ['exhibition-stands', 'conference-stages', 'media-production'] },
  { slug: 'printing-acrylic', kind: 'service', img: '25', serviceType: 'Exhibition printing, signage and acrylic fabrication', area: GULF, related: ['exhibition-stands', 'promotional-giveaways', 'conference-stages'] },
  { slug: 'promotional-giveaways', kind: 'service', img: '43', serviceType: 'Promotional giveaways and corporate awards', area: GULF, related: ['exhibition-stands', 'conference-stages', 'printing-acrylic'] },
  { slug: 'media-production', kind: 'service', img: '9', serviceType: 'Event photography, video and media production', area: GULF, related: ['lighting-sound-led-screens', 'conference-stages', 'exhibition-stands'] },
  { slug: 'exhibition-stands-riyadh', kind: 'region', img: '8', serviceType: 'Exhibition stand design and build', area: [{ '@type': 'City', name: 'Riyadh' }], related: ['exhibition-stands', 'conference-stages', 'exhibition-stands-jeddah', 'exhibition-stands-eastern-province'] },
  { slug: 'exhibition-stands-jeddah', kind: 'region', img: '14', serviceType: 'Exhibition stand design and build', area: [{ '@type': 'City', name: 'Jeddah' }], related: ['exhibition-stands', 'printing-acrylic', 'exhibition-stands-riyadh', 'exhibition-stands-egypt'] },
  { slug: 'exhibition-stands-eastern-province', kind: 'region', img: '46', serviceType: 'Exhibition stand design and build', area: [{ '@type': 'AdministrativeArea', name: 'Eastern Province, Saudi Arabia' }, { '@type': 'City', name: 'Dammam' }, { '@type': 'City', name: 'Al Khobar' }, { '@type': 'City', name: 'Dhahran' }], related: ['exhibition-stands', 'lighting-sound-led-screens', 'exhibition-stands-riyadh', 'exhibition-stands-qatar'] },
  { slug: 'exhibition-stands-uae', kind: 'region', img: '15', serviceType: 'Exhibition stand design and build', area: [{ '@type': 'Country', name: 'United Arab Emirates' }, { '@type': 'City', name: 'Dubai' }, { '@type': 'City', name: 'Abu Dhabi' }, KSA], related: ['exhibition-stands', 'exhibition-stands-riyadh', 'exhibition-stands-qatar', 'media-production'] },
  { slug: 'exhibition-stands-qatar', kind: 'region', img: '36', serviceType: 'Exhibition stand design and build', area: [{ '@type': 'Country', name: 'Qatar' }, { '@type': 'City', name: 'Doha' }, KSA], related: ['exhibition-stands', 'conference-stages', 'exhibition-stands-eastern-province', 'exhibition-stands-uae'] },
  { slug: 'exhibition-stands-egypt', kind: 'region', img: '17', serviceType: 'Exhibition stand design and build', area: [{ '@type': 'Country', name: 'Egypt' }, { '@type': 'City', name: 'Cairo' }, KSA], related: ['exhibition-stands', 'exhibition-stands-riyadh', 'exhibition-stands-jeddah', 'promotional-giveaways'] },
];
export const HUB_SLUG = 'services';
export const SERVICES = PAGES.filter((p) => p.kind === 'service');
export const REGIONS = PAGES.filter((p) => p.kind === 'region');

export const COPY: Record<LLang, Record<string, Copy>> = { ar: ar.pages, en: en.pages };
export const HUB: Record<LLang, HubCopy> = { ar: ar.hub, en: en.hub };

export const UI = {
  ar: {
    home: 'الرئيسية', services: 'الخدمات', navPlanner: 'صمّم جناحك', work: 'أعمالنا', about: 'من نحن', contact: 'تواصل معنا',
    quote: 'اطلب عرض سعر', whatsapp: 'راسلنا على واتساب', call: 'اتصل بنا', book: 'احجز مكالمة استشارة', chat: 'أو تحدث مع المساعد الذكي',
    faq: 'أسئلة شائعة', related: 'صفحات ذات صلة', more: 'التفاصيل',
    ctaTitle: 'جاهز تبدأ؟ أخبرنا عن معرضك أو فعاليتك',
    ctaLead: 'أرسل ما تعرفه الآن من الصفحة الرئيسية، أو راسلنا مباشرة، ويتواصل معك فريقنا لترتيب التصميم وعرض السعر.',
    asideTitle: 'عرض سعر لمشروعك', asideLead: 'أرسل تفاصيل معرضك أو فعاليتك ونرد عليك بالتصميم والتكلفة.',
    photo: 'جناح عارض من أعمالنا', footServices: 'خدماتنا', footRegions: 'أين نعمل', allServices: 'كل الخدمات',
    homeServices: 'كل الخدمات والمدن التي نخدمها',
  },
  en: {
    home: 'Home', services: 'Services', navPlanner: 'Design your stand', work: 'Work', about: 'About', contact: 'Contact',
    quote: 'Request a quote', whatsapp: 'Message us on WhatsApp', call: 'Call us', book: 'Book a consultation call', chat: 'Or chat with our assistant',
    faq: 'Frequently asked questions', related: 'Related pages', more: 'Details',
    ctaTitle: 'Ready to start? Tell us about your show or event',
    ctaLead: 'Send what you know now from our home page, or message us directly, and our team will get back to you with a design and a quote.',
    asideTitle: 'Get a quote for your project', asideLead: 'Send us your show or event details and we will come back with a design and a cost.',
    photo: 'An exhibition stand from our portfolio', footServices: 'Services', footRegions: 'Where we work', allServices: 'All services',
    homeServices: 'All services and the places we work',
  },
} as const;

/** Landing pages only exist in Arabic and English; other languages link to the English version. */
export const landingLang = (l: Lang): LLang => (l === 'ar' ? 'ar' : 'en');
export const landingHref = (l: Lang, slug: string) => `${l === 'ar' ? '/' : '/en/'}${slug}/`;

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
/** Escape text and turn [label](@slug) / [label](#anchor) into links. */
export function rich(s: string, l: LLang) {
  return esc(s).replace(/\[([^\]]+)\]\(([@#])([^)]+)\)/g, (_, label, kind, target) => {
    const href = kind === '@' ? landingHref(l, target) : `${l === 'ar' ? '/' : '/en/'}#${target}`;
    return `<a href="${href}">${label}</a>`;
  });
}
/** Plain text (links removed), for JSON-LD. */
export const plain = (s: string) => s.replace(/\[([^\]]+)\]\([@#][^)]+\)/g, '$1');
