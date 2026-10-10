// Case studies: one page per project at /work/<slug>/ (Arabic) and /en/work/<slug>/ (English).
// Only entries with `published: true` are built. Drafts are visible in `npm run dev` only, so you can preview them.
//
// To add a project: copy the SAMPLE below, give it a unique slug, fill in the facts, put the photos in
// public/img/work/ as <id>-s.webp (720px wide) and <id>-l.webp (1400px wide), then set published: true.
// Write only what is true and approved by the client.

export type ProjectCopy = {
  title: string;      // page h1, e.g. "A corner stand that pulled the aisle in"
  summary: string;    // 1–2 sentences for cards and the meta description (120–160 characters)
  challenge: string[]; // paragraphs
  solution: string[];
  result: string[];
};
export type Project = {
  slug: string;
  published: boolean;
  client: string;         // brand name as it should appear
  event: { ar: string; en: string };
  city: { ar: string; en: string };
  venue?: { ar: string; en: string };
  year: number;
  sizeM2?: number;
  openSides?: 1 | 2 | 3 | 4;
  build?: 'custom' | 'modular' | 'double';
  buildDays?: number;     // days on site for installation
  services: string[];     // landing-page slugs, e.g. ['exhibition-stands', 'lighting-sound-led-screens']
  cover: string;          // photo id in public/img/work (cover image)
  gallery: string[];      // more photo ids
  ar: ProjectCopy;
  en: ProjectCopy;
  testimonial?: { quote: string; lang: 'ar' | 'en'; name: string; role: string };
};

const SAMPLE: Project = {
  slug: 'sample-project',
  published: false,
  client: 'اسم العميل',
  event: { ar: '[اسم المعرض]', en: '[Show name]' },
  city: { ar: 'الرياض', en: 'Riyadh' },
  venue: { ar: '[القاعة]', en: '[Venue]' },
  year: 2026,
  sizeM2: 54,
  openSides: 2,
  build: 'custom',
  buildDays: 3,
  services: ['exhibition-stands', 'lighting-sound-led-screens', 'printing-acrylic'],
  cover: '8',
  gallery: ['39', '15', '9'],
  ar: {
    title: '[عنوان يلخص المشروع]',
    summary: '[جملة أو جملتان تلخصان ما طلبه العميل وما قدمناه والنتيجة.]',
    challenge: ['[ما الذي احتاجه العميل؟ ما القيود: المساحة، الموعد، الميزانية، شروط القاعة؟]'],
    solution: ['[ماذا صممنا ونفذنا؟ المواد، الإضاءة، الشاشات، توزيع المساحة.]'],
    result: ['[ماذا تحقق؟ موعد التسليم، رأي العميل، أي نتيجة يمكن ذكرها بموافقته.]'],
  },
  en: {
    title: '[A headline that sums up the project]',
    summary: '[One or two sentences: what the client needed, what we delivered and the result.]',
    challenge: ['[What did the client need? Constraints: space, deadline, budget, venue rules?]'],
    solution: ['[What we designed and built: materials, lighting, screens, layout.]'],
    result: ['[What it achieved: handover time, client feedback, any result they approve sharing.]'],
  },
};

export const PROJECTS: Project[] = [SAMPLE];

export const visibleProjects = (dev: boolean) => PROJECTS.filter((p) => p.published || dev);

export const PROJECT_TXT = {
  ar: { kicker: 'قصة مشروع', facts: 'بطاقة المشروع', client: 'العميل', event: 'المعرض', city: 'المدينة', venue: 'القاعة', year: 'السنة', size: 'المساحة', sides: 'الجهات المفتوحة', build: 'نوع البناء', days: 'أيام التركيب', services: 'الخدمات', challenge: 'التحدي', solution: 'الحل', result: 'النتيجة', gallery: 'صور المشروع', builds: { custom: 'تصميم خاص بالكامل', modular: 'نظام معياري مطوّر', double: 'جناح بطابقين' }, m2: 'م²', sideN: (n: number) => ['', 'جهة واحدة', 'جهتان', 'ثلاث جهات', 'أربع جهات'][n], daysN: (n: number) => `${n} ${n > 2 && n < 11 ? 'أيام' : 'يوم'}`, more: 'مشاريع أخرى', cta: 'تريد نتيجة مثلها في معرضك القادم؟', draft: 'مسودة: هذه الصفحة لا تُنشر حتى تكتمل' },
  en: { kicker: 'Case study', facts: 'Project facts', client: 'Client', event: 'Show', city: 'City', venue: 'Venue', year: 'Year', size: 'Size', sides: 'Open sides', build: 'Build', days: 'Build-up', services: 'Services', challenge: 'The challenge', solution: 'What we built', result: 'The result', gallery: 'Project photos', builds: { custom: 'Fully custom build', modular: 'Upgraded modular system', double: 'Double-deck stand' }, m2: 'm²', sideN: (n: number) => ['', 'One side', 'Two sides', 'Three sides', 'Four sides (island)'][n], daysN: (n: number) => `${n} day${n === 1 ? '' : 's'}`, more: 'More projects', cta: 'Want a result like this at your next show?', draft: 'Draft: this page is not published until it is complete' },
} as const;
