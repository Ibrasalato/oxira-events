// Trust signals for the home page: numbers, client logos, testimonials, accreditations and company registration.
// Every section stays hidden until it has real data. Only add facts you can stand behind, and only show a
// client's logo or words with their permission.
import type { Lang } from './content';

type L5 = Record<Lang, string>;

export type Stat = { value: string; label: L5 };
export type Client = { name: string; logo: string }; // logo: path under public/, e.g. '/img/clients/acme.svg' (SVG or PNG, transparent)
export type Testimonial = { quote: string; lang: 'ar' | 'en'; name: string; role: string; company: string; project?: string }; // project: case-study slug
export type Accreditation = { name: L5; detail?: L5; logo?: string };

export const STATS: Stat[] = [
  // { value: '150+', label: { ar: 'جناح نفذناه', en: 'stands delivered', de: 'realisierte Stände', fr: 'stands livrés', ru: 'построенных стендов' } },
];

export const CLIENTS: Client[] = [
  // { name: 'Corpotrade', logo: '/img/clients/corpotrade.svg' },
];

export const TESTIMONIALS: Testimonial[] = [
  // { quote: '…', lang: 'ar', name: '…', role: 'مدير التسويق', company: '…' },
];

export const ACCREDITATIONS: Accreditation[] = [
  // { name: { ar: 'مقاول معتمد في واجهة الرياض', en: 'Approved contractor at Riyadh Front', de: '…', fr: '…', ru: '…' } },
];

/** Shown in the footer when filled (Saudi buyers and procurement teams look for these). */
export const COMPANY = { cr: '', vat: '' };

export const PROOF_TXT: Record<Lang, { stats: string; clients: string; clientsLead: string; says: string; accred: string; cr: string; vat: string; caseStudies: string; caseLead: string; read: string }> = {
  ar: { stats: 'أرقامنا', clients: 'علامات صممنا لها', clientsLead: 'شركات وجهات اختارتنا لتمثيلها في المعارض والمؤتمرات.', says: 'ماذا يقول عملاؤنا', accred: 'الاعتمادات والتراخيص', cr: 'السجل التجاري', vat: 'الرقم الضريبي', caseStudies: 'قصص مشاريع', caseLead: 'كيف تحوّل الموجز إلى جناح جاهز في القاعة: التحدي، والحل، والنتيجة.', read: 'اقرأ القصة' },
  en: { stats: 'In numbers', clients: 'Brands we have built for', clientsLead: 'Companies and organisations that chose us to represent them at shows and conferences.', says: 'What our clients say', accred: 'Accreditations and licences', cr: 'Commercial registration', vat: 'VAT number', caseStudies: 'Case studies', caseLead: 'How a brief becomes a finished stand on the show floor: the challenge, the solution and the result.', read: 'Read the story' },
  de: { stats: 'In Zahlen', clients: 'Marken, für die wir gebaut haben', clientsLead: 'Unternehmen und Organisationen, die uns auf Messen und Konferenzen vertrauen.', says: 'Was unsere Kunden sagen', accred: 'Zulassungen und Lizenzen', cr: 'Handelsregister', vat: 'USt-Nr.', caseStudies: 'Fallstudien', caseLead: 'Vom Briefing zum fertigen Messestand: Aufgabe, Lösung und Ergebnis.', read: 'Zur Fallstudie' },
  fr: { stats: 'En chiffres', clients: 'Marques pour lesquelles nous avons construit', clientsLead: 'Des entreprises et organisations qui nous ont confié leur présence sur salons et conférences.', says: 'Ce que disent nos clients', accred: 'Agréments et licences', cr: 'Registre du commerce', vat: 'N° de TVA', caseStudies: 'Études de cas', caseLead: 'Du brief au stand terminé : le défi, la solution et le résultat.', read: 'Lire l’étude' },
  ru: { stats: 'В цифрах', clients: 'Бренды, для которых мы строили', clientsLead: 'Компании и организации, доверившие нам своё присутствие на выставках и конференциях.', says: 'Что говорят клиенты', accred: 'Аккредитации и лицензии', cr: 'Коммерческий регистр', vat: 'ИНН (НДС)', caseStudies: 'Кейсы', caseLead: 'Как бриф превращается в готовый стенд: задача, решение и результат.', read: 'Читать кейс' },
};
