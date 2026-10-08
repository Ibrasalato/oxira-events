// n8n Code node "Build booking emails" (run once for each item).
// Team email + client confirmation (page language) + .ics calendar invite for both.
const b = $('Prepare booking').first().json;
const id = $('Save booking').first().json.id;
const lang = ['ar', 'en', 'de', 'fr', 'ru'].includes(b.lang) ? b.lang : 'ar';
const start = DateTime.fromISO(b.date + 'T' + b.time, { zone: 'Asia/Riyadh' });
const end = start.plus({ minutes: 30 });
const CH = {
  call: { ar: 'مكالمة هاتفية', en: 'Phone call', de: 'Telefonat', fr: 'Appel téléphonique', ru: 'Телефонный звонок' },
  whatsapp: { ar: 'مكالمة واتساب', en: 'WhatsApp call', de: 'WhatsApp-Anruf', fr: 'Appel WhatsApp', ru: 'Звонок в WhatsApp' },
  video: { ar: 'اجتماع فيديو', en: 'Video meeting', de: 'Videomeeting', fr: 'Visioconférence', ru: 'Видеовстреча' },
  visit: { ar: 'زيارة مكتبنا', en: 'Visit our office', de: 'Besuch in unserem Büro', fr: 'Visite de nos bureaux', ru: 'Визит в наш офис' },
};
const ch = CH[b.channel] || CH.call;
const T = {
  ar: { dir: 'rtl', subject: 'استلمنا طلب موعد الاستشارة رقم ' + id + ' | Oxira Events', hi: 'أهلاً ' + b.contact_name + '،', intro: 'سجّلنا طلب موعد الاستشارة، وسيؤكده فريقنا معك. التفاصيل:', when: 'الموعد', how: 'طريقة التواصل', topic: 'الموضوع', num: 'رقم الحجز', ics: 'أرفقنا دعوة تقويم تضيفها لتقويمك بضغطة واحدة.', note: 'إذا احتجت تغيير الموعد رد على هذا الإيميل.', sign: 'فريق Oxira Events', fmt: { locale: 'ar' } },
  en: { dir: 'ltr', subject: 'Your consultation request #' + id + ' | Oxira Events', hi: 'Hello ' + b.contact_name + ',', intro: 'We have your consultation request and our team will confirm it with you. Details:', when: 'Time', how: 'How we connect', topic: 'Topic', num: 'Booking number', ics: 'A calendar invite is attached so you can add it in one tap.', note: 'Need another time? Just reply to this email.', sign: 'The Oxira Events team', fmt: { locale: 'en-GB' } },
  de: { dir: 'ltr', subject: 'Ihre Beratungsanfrage Nr. ' + id + ' | Oxira Events', hi: 'Hallo ' + b.contact_name + ',', intro: 'wir haben Ihre Beratungsanfrage erhalten; unser Team bestätigt den Termin mit Ihnen. Details:', when: 'Termin', how: 'Kontaktweg', topic: 'Thema', num: 'Buchungsnummer', ics: 'Eine Kalendereinladung ist angehängt.', note: 'Anderer Termin gewünscht? Antworten Sie einfach auf diese E-Mail.', sign: 'Ihr Oxira Events Team', fmt: { locale: 'de-DE' } },
  fr: { dir: 'ltr', subject: 'Votre demande de rendez-vous n° ' + id + ' | Oxira Events', hi: 'Bonjour ' + b.contact_name + ',', intro: 'nous avons bien reçu votre demande de rendez-vous ; notre équipe vous la confirmera. Détails :', when: 'Horaire', how: 'Moyen de contact', topic: 'Sujet', num: 'Numéro de réservation', ics: 'Une invitation de calendrier est jointe.', note: 'Besoin d’un autre horaire ? Répondez simplement à cet e-mail.', sign: 'L’équipe Oxira Events', fmt: { locale: 'fr-FR' } },
  ru: { dir: 'ltr', subject: 'Ваша запись на консультацию № ' + id + ' | Oxira Events', hi: 'Здравствуйте, ' + b.contact_name + '!', intro: 'Мы получили запрос на консультацию, наша команда подтвердит его. Детали:', when: 'Время', how: 'Способ связи', topic: 'Тема', num: 'Номер записи', ics: 'Во вложении — приглашение для календаря.', note: 'Нужно другое время? Просто ответьте на это письмо.', sign: 'Команда Oxira Events', fmt: { locale: 'ru-RU' } },
};
const t = T[lang];
const whenLocal = start.setLocale(t.fmt.locale).toFormat('cccc d LLLL yyyy · HH:mm') + ' (' + (lang === 'ar' ? 'بتوقيت الرياض' : 'Riyadh time, GMT+3') + ')';
const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>');
const tbl = (rows, dir) => '<table role="presentation" style="border-collapse:collapse;width:100%">' + rows.filter(([, v]) => String(v || '').trim()).map(([k, v]) =>
  '<tr><td style="padding:9px 12px;border-bottom:1px solid #DCE3EA;color:#3E5570;width:36%;vertical-align:top">' + esc(k) + '</td><td style="padding:9px 12px;border-bottom:1px solid #DCE3EA;color:#0A253E;font-weight:600">' + esc(v) + '</td></tr>').join('') + '</table>';
const shell = (dir, inner) => '<div dir="' + dir + '" style="background:#F5F8FC;padding:24px 12px;font-family:Tahoma,Arial,sans-serif;font-size:15px;line-height:1.7;text-align:' + (dir === 'rtl' ? 'right' : 'left') + '"><div style="max-width:640px;margin:0 auto;background:#fff;border:1px solid #DCE3EA"><div style="background:#0A253E;padding:18px 24px"><span style="color:#fff;font-size:22px;font-weight:700;font-family:Arial,sans-serif" dir="ltr">Oxira</span> <span style="background:#F5A800;color:#0A253E;font-weight:700;font-size:12px;padding:3px 8px;font-family:Arial,sans-serif">Events</span></div><div style="padding:24px">' + inner + '</div><div style="height:6px;background:#F5A800"></div></div></div>';

const clientHtml = shell(t.dir,
  '<p style="margin:0 0 6px;color:#0A253E;font-weight:700">' + esc(t.hi) + '</p><p style="margin:0 0 16px;color:#3E5570">' + esc(t.intro) + '</p>' +
  tbl([[t.num, '#' + id], [t.when, whenLocal], [t.how, ch[lang]], [t.topic, b.topic]], t.dir) +
  '<p style="margin:18px 0 0;color:#3E5570">' + esc(t.ics) + ' ' + esc(t.note) + '</p><p style="margin:14px 0 0;color:#0A253E;font-weight:700">' + esc(t.sign) + '</p>');

const teamWhen = start.setLocale('ar').toFormat('cccc d LLLL yyyy · HH:mm') + ' (الرياض)';
const teamHtml = shell('rtl',
  '<h2 style="margin:0 0 12px;color:#0A253E;font-size:19px">طلب موعد استشارة جديد</h2>' +
  tbl([['رقم الحجز', '#' + id], ['الموعد', teamWhen], ['طريقة التواصل', ch.ar], ['الاسم', b.contact_name], ['الجوال', b.phone], ['البريد', b.email], ['الجهة', b.company], ['الموضوع', b.topic], ['لغة الصفحة', b.lang]], 'rtl') +
  '<p style="margin:16px 0 0;color:#3E5570;font-size:14px">الموعد مبدئي: تواصل مع العميل لتأكيده. دعوة التقويم مرفقة.</p>');

// .ics invite (Riyadh is UTC+3 all year)
const u = (d) => d.toUTC().toFormat("yyyyMMdd'T'HHmmss'Z'");
const icsText = (s) => String(s || '').replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;');
const ics = [
  'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Oxira Events//Consultation//EN', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH',
  'BEGIN:VEVENT',
  'UID:booking-' + id + '@events.oxira.sa',
  'DTSTAMP:' + u(DateTime.utc()),
  'DTSTART:' + u(start),
  'DTEND:' + u(end),
  'SUMMARY:' + icsText('Oxira Events · ' + ch.en + ' · ' + b.contact_name),
  'DESCRIPTION:' + icsText('Oxira Events consultation #' + id + '\n' + ch.en + '\n' + (b.topic || '') + '\nWhatsApp: +966 56 567 0776 · info@oxira.sa'),
  'LOCATION:' + icsText(b.channel === 'visit' ? 'Oxira, Riyadh' : ch.en),
  'ORGANIZER;CN=Oxira Events:mailto:info@oxira.sa',
  'BEGIN:VALARM', 'TRIGGER:-PT15M', 'ACTION:DISPLAY', 'DESCRIPTION:Oxira Events', 'END:VALARM',
  'END:VEVENT', 'END:VCALENDAR', '',
].join('\r\n');

return {
  json: {
    id, to: b.email, hasEmail: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(b.email || ''),
    subjectClient: t.subject, htmlClient: clientHtml,
    subjectTeam: 'موعد استشارة جديد رقم ' + id + ': ' + b.contact_name + ' · ' + teamWhen, htmlTeam: teamHtml,
  },
  binary: { invite: { data: Buffer.from(ics, 'utf8').toString('base64'), mimeType: 'text/calendar', fileName: 'oxira-events-consultation.ics', fileExtension: 'ics' } },
};
