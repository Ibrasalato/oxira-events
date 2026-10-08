// n8n Code node "Build client email" (run once for each item).
// Confirmation email to the visitor in the language of the page they used.
const p = $('Prepare request').first().json;
const id = $('Save request').first().json.id;
const lang = ['ar', 'en', 'de', 'fr', 'ru'].includes(p.lang) ? p.lang : 'ar';
const T = {
  ar: {
    dir: 'rtl', subject: 'استلمنا طلبك رقم ' + id + ' | Oxira Events',
    hi: 'أهلاً ' + p.contact_name + '،', intro: 'شكراً لتواصلك مع Oxira Events. استلمنا طلبك وهذه تفاصيله:',
    num: 'رقم الطلب', service: 'الخدمة', event: 'المعرض أو الفعالية', date: 'التاريخ', size: 'مساحة الجناح', details: 'التفاصيل',
    design: 'تصورك ثلاثي الأبعاد', designNote: 'هذا تصور مبدئي من المخطِّط، وسيجهز فريقنا التصميم النهائي.',
    next: 'الخطوات القادمة', steps: ['يراجع فريقنا طلبك ويتواصل معك لتأكيد التفاصيل.', 'نجهز تصميم الجناح وعرض السعر.', 'بعد الاعتماد نبدأ التصنيع ونركّب الجناح قبل الافتتاح.'],
    reach: 'لأي استفسار رد على هذا الإيميل أو راسلنا على واتساب', sign: 'فريق Oxira Events',
  },
  en: {
    dir: 'ltr', subject: 'We received your request #' + id + ' | Oxira Events',
    hi: 'Hello ' + p.contact_name + ',', intro: 'Thank you for contacting Oxira Events. We received your request:',
    num: 'Request number', service: 'Service', event: 'Exhibition or event', date: 'Date', size: 'Stand size', details: 'Details',
    design: 'Your 3D outline', designNote: 'This is an initial concept from the planner. Our team prepares the final design.',
    next: 'What happens next', steps: ['Our team reviews your request and contacts you to confirm the details.', 'We prepare the stand design and the quote.', 'Once approved, we fabricate and install the stand before opening.'],
    reach: 'For any question, reply to this email or message us on WhatsApp', sign: 'The Oxira Events team',
  },
  de: {
    dir: 'ltr', subject: 'Ihre Anfrage Nr. ' + id + ' ist eingegangen | Oxira Events',
    hi: 'Hallo ' + p.contact_name + ',', intro: 'vielen Dank für Ihre Anfrage bei Oxira Events. Folgende Angaben haben wir erhalten:',
    num: 'Anfragenummer', service: 'Leistung', event: 'Messe oder Veranstaltung', date: 'Datum', size: 'Standgröße', details: 'Details',
    design: 'Ihr 3D-Entwurf', designNote: 'Dies ist ein erster Entwurf aus dem Planer. Das finale Design erstellt unser Team.',
    next: 'Die nächsten Schritte', steps: ['Unser Team prüft Ihre Anfrage und meldet sich, um die Details abzustimmen.', 'Wir erstellen Standentwurf und Angebot.', 'Nach Freigabe fertigen wir den Stand und bauen ihn vor Messebeginn auf.'],
    reach: 'Bei Fragen antworten Sie einfach auf diese E-Mail oder schreiben Sie uns auf WhatsApp', sign: 'Ihr Oxira Events Team',
  },
  fr: {
    dir: 'ltr', subject: 'Nous avons reçu votre demande n° ' + id + ' | Oxira Events',
    hi: 'Bonjour ' + p.contact_name + ',', intro: 'merci d’avoir contacté Oxira Events. Voici votre demande :',
    num: 'Numéro de demande', service: 'Service', event: 'Salon ou événement', date: 'Date', size: 'Surface du stand', details: 'Détails',
    design: 'Votre esquisse 3D', designNote: 'Il s’agit d’une esquisse initiale issue du planificateur. Notre équipe prépare la conception finale.',
    next: 'Prochaines étapes', steps: ['Notre équipe étudie votre demande et vous contacte pour confirmer les détails.', 'Nous préparons la conception du stand et le devis.', 'Après validation, nous fabriquons et montons le stand avant l’ouverture.'],
    reach: 'Pour toute question, répondez à cet e-mail ou écrivez-nous sur WhatsApp', sign: 'L’équipe Oxira Events',
  },
  ru: {
    dir: 'ltr', subject: 'Мы получили ваш запрос № ' + id + ' | Oxira Events',
    hi: 'Здравствуйте, ' + p.contact_name + '!', intro: 'Спасибо, что обратились в Oxira Events. Мы получили ваш запрос:',
    num: 'Номер запроса', service: 'Услуга', event: 'Выставка или мероприятие', date: 'Дата', size: 'Площадь стенда', details: 'Подробности',
    design: 'Ваш 3D-эскиз', designNote: 'Это предварительный эскиз из планировщика. Финальный проект готовит наша команда.',
    next: 'Что дальше', steps: ['Наша команда изучит запрос и свяжется с вами для уточнения деталей.', 'Мы подготовим проект стенда и смету.', 'После согласования изготовим и смонтируем стенд до открытия.'],
    reach: 'Если есть вопросы, ответьте на это письмо или напишите нам в WhatsApp', sign: 'Команда Oxira Events',
  },
};
const t = T[lang];
const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>');
const align = t.dir === 'rtl' ? 'right' : 'left';
const rows = [[t.num, '#' + id], [t.service, p.service], [t.event, p.event_name], [t.date, p.event_date], [t.size, p.stand_size ? p.stand_size + ' m²' : ''], [t.details, p.needs]]
  .filter(([, v]) => String(v || '').trim());
const table = '<table role="presentation" style="border-collapse:collapse;width:100%">' + rows.map(([k, v]) =>
  '<tr><td style="padding:9px 12px;border-bottom:1px solid #DCE3EA;color:#3E5570;width:38%;vertical-align:top">' + esc(k) + '</td>' +
  '<td style="padding:9px 12px;border-bottom:1px solid #DCE3EA;color:#0A253E;font-weight:600">' + esc(v) + '</td></tr>').join('') + '</table>';
const hasPreview = !!($input.item.binary && $input.item.binary.preview);
const design = hasPreview
  ? '<h3 style="margin:26px 0 10px;color:#0A253E;font-size:17px">' + esc(t.design) + '</h3><img src="cid:preview" alt="" style="width:100%;max-width:600px;display:block;border:1px solid #DCE3EA"><p style="margin:8px 0 0;color:#3E5570;font-size:13px">' + esc(t.designNote) + '</p>'
  : '';
const steps = '<ol style="margin:8px 0 0;padding-' + (t.dir === 'rtl' ? 'right' : 'left') + ':20px;color:#0A253E">' + t.steps.map((s) => '<li style="margin:6px 0">' + esc(s) + '</li>').join('') + '</ol>';
const html =
  '<div dir="' + t.dir + '" style="background:#F5F8FC;padding:24px 12px;font-family:Tahoma,Arial,sans-serif;font-size:15px;line-height:1.7;text-align:' + align + '">' +
  '<div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #DCE3EA">' +
  '<div style="background:#0A253E;padding:18px 24px"><span style="color:#ffffff;font-size:22px;font-weight:700;font-family:Arial,sans-serif" dir="ltr">Oxira</span> <span style="background:#F5A800;color:#0A253E;font-weight:700;font-size:12px;padding:3px 8px;font-family:Arial,sans-serif">Events</span></div>' +
  '<div style="padding:24px">' +
  '<p style="margin:0 0 6px;color:#0A253E;font-weight:700">' + esc(t.hi) + '</p>' +
  '<p style="margin:0 0 16px;color:#3E5570">' + esc(t.intro) + '</p>' + table + design +
  '<h3 style="margin:26px 0 4px;color:#0A253E;font-size:17px">' + esc(t.next) + '</h3>' + steps +
  '<p style="margin:22px 0 0;color:#3E5570">' + esc(t.reach) + ': <a href="https://wa.me/966565670776" style="color:#007DB4;font-weight:700" dir="ltr">+966 56 567 0776</a></p>' +
  '<p style="margin:14px 0 0;color:#0A253E;font-weight:700">' + esc(t.sign) + '</p>' +
  '</div><div style="height:6px;background:#F5A800"></div></div>' +
  '<p style="text-align:center;color:#8193A8;font-size:12px;margin:14px 0 0" dir="ltr"><a href="https://events.oxira.sa" style="color:#8193A8">events.oxira.sa</a> · info@oxira.sa</p></div>';
const out = { json: { to: p.email, subject: t.subject, html, hasPreview } };
if (hasPreview) out.binary = { preview: $input.item.binary.preview };
return out;
