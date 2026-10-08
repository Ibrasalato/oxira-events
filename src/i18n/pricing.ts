// Stand price estimate shown in the planner. Hidden until the rates below are filled in.
// SAR before VAT. Set perM2 for a build type to a number to show the estimate for that type.
export const PRICING = {
  perM2: { custom: null, modular: null, double: null } as Record<'custom' | 'modular' | 'double', number | null>,
  /** Smallest project you accept, SAR. */
  min: null as number | null,
  /** Fixed price per extra, SAR (null = not included in the estimate). */
  extras: { led: null, meeting: null, storage: null, counter: null, lighting: null, sound: null, print: null, giveaways: null, media: null } as Record<string, number | null>,
  /** Range shown around the estimate, ±. */
  spread: 0.15,
  vat: 0.15,
};

export const priceTxt = {
  ar: { label: 'تقدير مبدئي', sar: 'ر.س', vat: 'قبل الضريبة', note: 'تقدير تقريبي للتخطيط، والسعر النهائي في عرض السعر.' },
  en: { label: 'Rough estimate', sar: 'SAR', vat: 'before VAT', note: 'A planning estimate; the final price comes in your quote.' },
  de: { label: 'Grobe Schätzung', sar: 'SAR', vat: 'zzgl. MwSt.', note: 'Eine Planungsschätzung; den finalen Preis erhalten Sie im Angebot.' },
  fr: { label: 'Estimation indicative', sar: 'SAR', vat: 'HT', note: 'Estimation pour planifier ; le prix final figure dans votre devis.' },
  ru: { label: 'Предварительная оценка', sar: 'SAR', vat: 'без НДС', note: 'Оценка для планирования; итоговая цена — в коммерческом предложении.' },
};
