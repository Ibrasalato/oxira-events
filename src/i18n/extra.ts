import type { Lang } from './content';

// Copy for the exhibitions calendar, the stand planner, the privacy page and the 404 page.
type Extra = {
  book: {
    tabQuote: string; tabBook: string; lead: string; day: string; time: string; tz: string; channel: string;
    channels: { id: string; t: string }[]; topic: string; topicHint: string; name: string; phone: string; email: string; emailHint: string; company: string;
    submit: string; sending: string; ok: string; okTail: string; err: string; missing: string; pickSlot: string; link: string;
  };
  profile: { download: string; size: string };
  ar3d: { open: string; title: string; place: string; hint: string; desktop: string; unsupported: string; close: string; loading: string };
  cta: { design3d: string; navPlanner: string; orChat: string };
  cal: {
    title: string; lead: string; plan: string; site: string; more: string; less: string; source: string;
    sectors: Record<string, string>; cities: Record<string, string>;
  };
  planner: {
    title: string; lead: string;
    size: string; sizeCustom: string; sqm: string;
    type: string; types: { id: string; t: string; d: string }[];
    build: string; builds: { id: string; t: string }[];
    extras: string; extrasList: { id: string; t: string }[];
    event: string; eventNone: string;
    summary: string; apply: string; applied: string;
    plan: string; open: string; aisle: string;
    look: string; wall: string; walls: { id: string; t: string }[]; accent: string;
    carpet: string; carpets: { id: string; t: string }[];
    logo: string; logoPick: string; logoHint: string; logoClear: string;
    concept: string;
    view3d: string; view2d: string; loading: string; noWebgl: string; drag: string; reset: string; save: string; attached: string;
  };
  privacy: { link: string; title: string; updated: string; body: { h: string; p: string }[] };
  notFound: { title: string; body: string; home: string };
};

const ar: Extra = {
  book: { tabQuote: 'اطلب عرض سعر', tabBook: 'احجز مكالمة استشارة', lead: 'اختر وقتاً يناسبك لمكالمة 30 دقيقة مع فريقنا. الموعد مبدئي ونؤكده معك.', day: 'اليوم', time: 'الوقت', tz: 'بتوقيت الرياض', channel: 'طريقة التواصل', channels: [{ id: 'call', t: 'مكالمة هاتفية' }, { id: 'whatsapp', t: 'واتساب' }, { id: 'video', t: 'اجتماع فيديو' }, { id: 'visit', t: 'زيارة مكتبنا' }], topic: 'عن ماذا تريد أن نتحدث؟', topicHint: 'اسم المعرض، المساحة، أي فكرة لديك', name: 'الاسم', phone: 'الجوال', email: 'البريد الإلكتروني', emailHint: 'لنرسل لك دعوة التقويم', company: 'الجهة أو الشركة', submit: 'احجز الموعد', sending: 'جارٍ الحجز…', ok: 'تم تسجيل طلب الموعد رقم', okTail: 'سنؤكده معك قريباً، وأرسلنا دعوة التقويم إلى بريدك إن كتبته.', err: 'لم يُحجز الموعد. اختر وقتاً آخر أو راسلنا على واتساب.', missing: 'اختر اليوم والوقت، واكتب الاسم ورقم الجوال.', pickSlot: 'اختر يوماً لعرض الأوقات المتاحة.', link: 'أو احجز مكالمة استشارة' },
  profile: { download: 'حمّل الملف التعريفي', size: 'PDF' },
  ar3d: { open: 'شاهده في مكانك (AR)', title: 'جناحك في مكانك الحقيقي', place: 'ضع الجناح في مكانك', hint: 'وجّه كاميرا الجوال إلى الأرض، ثم ضع الجناح بحجمه الحقيقي وتجوّل حوله.', desktop: 'افتح هذه الصفحة من جوالك (آيفون أو أندرويد) لتشاهد جناحك بالواقع المعزز بحجمه الحقيقي.', unsupported: 'جهازك لا يدعم الواقع المعزز، ويمكنك تدوير الجناح هنا.', close: 'إغلاق', loading: 'جارٍ تجهيز الجناح…' },
  cta: { design3d: 'صمّم جناحك ثلاثي الأبعاد', navPlanner: 'صمّم جناحك', orChat: 'أو تحدث مع المساعد الذكي' },
  cal: {
    title: 'معارض قادمة في السعودية',
    lead: 'أبرز المعارض المؤكدة مواعيدها من منظميها. اختر معرضك ونبدأ تصميم جناحك قبلها بوقت كافٍ.',
    plan: 'خطّط جناحك',
    site: 'الموقع الرسمي',
    more: 'عرض كل المعارض',
    less: 'عرض أقل',
    source: 'المواعيد من المواقع الرسمية للمنظمين، تحقق منها قبل الحجز.',
    sectors: { agriculture: 'زراعة', health: 'صحة', construction: 'بناء وتشييد', energy: 'طاقة وكهرباء', realestate: 'عقار', food: 'أغذية ومشروبات', mobility: 'نقل وتنقّل', tech: 'تقنية', auto: 'سيارات', industry: 'صناعة ولوجستيات', entertainment: 'ترفيه', beauty: 'تجميل', hospitality: 'ضيافة وفنادق', interiors: 'تصميم داخلي' },
    cities: { Riyadh: 'الرياض', Jeddah: 'جدة', Dammam: 'الدمام' },
  },
  planner: {
    title: 'خطّط جناحك في دقيقة',
    lead: 'اختر المساحة وشكل الجناح وما تحتاجه فيه، ونرسل تصورك مع طلب عرض السعر.',
    size: 'المساحة', sizeCustom: 'مساحة أخرى', sqm: 'م²',
    type: 'الجهات المفتوحة على الممرات',
    types: [
      { id: 'row', t: 'جهة واحدة', d: 'جناح في صف' },
      { id: 'corner', t: 'جهتان', d: 'جناح زاوية' },
      { id: 'peninsula', t: 'ثلاث جهات', d: 'شبه جزيرة' },
      { id: 'island', t: 'أربع جهات', d: 'جزيرة' },
    ],
    build: 'نوع البناء',
    builds: [
      { id: 'custom', t: 'تصميم خاص بالكامل' },
      { id: 'modular', t: 'نظام معياري مطوّر' },
      { id: 'double', t: 'جناح بطابقين' },
    ],
    extras: 'داخل الجناح',
    extrasList: [
      { id: 'led', t: 'شاشة LED' }, { id: 'meeting', t: 'غرفة اجتماعات' }, { id: 'storage', t: 'مخزن' },
      { id: 'counter', t: 'كاونتر استقبال' }, { id: 'lighting', t: 'إضاءة مميزة' }, { id: 'sound', t: 'نظام صوت' },
      { id: 'print', t: 'طباعة وجرافيك' }, { id: 'giveaways', t: 'هدايا دعائية' }, { id: 'media', t: 'تصوير وفيديو' },
    ],
    event: 'المعرض', eventNone: 'لم أحدد بعد',
    summary: 'تصورك',
    apply: 'أكمل الطلب بهذا التصور',
    applied: 'أضفنا تصورك إلى نموذج الطلب. أكمل بياناتك وأرسل.',
    plan: 'مسقط الجناح', open: 'مفتوح', aisle: 'ممر',
    look: 'المظهر', wall: 'لون الجدران', walls: [{ id: 'white', t: 'أبيض' }, { id: 'navy', t: 'كحلي' }, { id: 'black', t: 'أسود' }, { id: 'wood', t: 'خشبي' }], accent: 'لون علامتك',
    carpet: 'الأرضية', carpets: [{ id: 'grey', t: 'موكيت رمادي' }, { id: 'blue', t: 'موكيت أزرق' }, { id: 'red', t: 'موكيت أحمر' }, { id: 'wood', t: 'باركيه' }],
    logo: 'شعارك', logoPick: 'ارفع الشعار', logoHint: 'PNG أو JPG. يظهر على الجناح هنا، ولا يُرسل إلا مع طلبك.', logoClear: 'إزالة',
    concept: 'تصور مبدئي، والتصميم النهائي يجهزه فريقنا',
    view3d: 'ثلاثي الأبعاد', view2d: 'المسقط', loading: 'جارٍ تجهيز التصميم ثلاثي الأبعاد…', noWebgl: 'متصفحك لا يدعم العرض ثلاثي الأبعاد، نعرض لك المسقط.', drag: 'اسحب للتدوير، وقرّب بعجلة الماوس أو بإصبعين.', reset: 'الزاوية الافتراضية', save: 'حفظ الصورة', attached: 'سيُرفق تصميمك ثلاثي الأبعاد مع الطلب ليبدأ منه مصممونا.',
  },
  privacy: {
    link: 'سياسة الخصوصية',
    title: 'سياسة الخصوصية',
    updated: 'آخر تحديث: أكتوبر 2026',
    body: [
      { h: 'من نحن', p: 'هذا الموقع تابع لشركة أوكسيرا (Oxira)، شركة سعودية. للتواصل بخصوص بياناتك: info@oxira.sa.' },
      { h: 'البيانات التي نجمعها', p: 'عند إرسال نموذج طلب عرض السعر أو المحادثة مع المساعد الذكي نجمع ما تكتبه أنت فقط: الاسم، الجوال، البريد، الجهة، تفاصيل المعرض والجناح، ونص المحادثة.' },
      { h: 'لماذا نستخدمها', p: 'للرد على طلبك، وإعداد التصميم وعرض السعر، والتواصل معك بخصوصه. لا نبيع بياناتك ولا نستخدمها لأغراض أخرى.' },
      { h: 'أين تُحفظ', p: 'تُحفظ الطلبات في نظام أتمتة سحابي (n8n) وتصل إلى بريد الشركة. يعالج المساعد الذكي رسائلك عبر مزوّد نموذج ذكاء اصطناعي لتوليد الرد.' },
      { h: 'مدة الاحتفاظ', p: 'نحتفظ بالطلب طوال فترة التعامل معك، ثم نحذفه عند طلبك أو عند انتهاء الحاجة إليه.' },
      { h: 'حقوقك', p: 'وفق نظام حماية البيانات الشخصية في المملكة، يحق لك طلب الاطلاع على بياناتك أو تصحيحها أو حذفها. راسلنا على info@oxira.sa وسنرد خلال المدة النظامية.' },
      { h: 'ملفات تعريف الارتباط', p: 'لا يستخدم الموقع ملفات تعريف ارتباط للتتبع أو الإعلانات. يحفظ المتصفح رقماً مؤقتاً للمحادثة فقط حتى تغلق الصفحة.' },
    ],
  },
  notFound: { title: 'هذه الصفحة غير موجودة', body: 'ربما تغيّر الرابط. ابدأ من الصفحة الرئيسية أو اطلب عرض سعر مباشرة.', home: 'الصفحة الرئيسية' },
};

const en: Extra = {
  book: { tabQuote: 'Request a quote', tabBook: 'Book a consultation call', lead: 'Pick a time for a 30-minute call with our team. The slot is provisional and we confirm it with you.', day: 'Day', time: 'Time', tz: 'Riyadh time', channel: 'How we connect', channels: [{ id: 'call', t: 'Phone call' }, { id: 'whatsapp', t: 'WhatsApp' }, { id: 'video', t: 'Video meeting' }, { id: 'visit', t: 'Visit our office' }], topic: 'What would you like to discuss?', topicHint: 'Exhibition name, stand size, any ideas', name: 'Name', phone: 'Mobile', email: 'Email', emailHint: 'so we can send you the calendar invite', company: 'Company', submit: 'Book the call', sending: 'Booking…', ok: 'Consultation request received. Number', okTail: 'We will confirm it with you soon; the calendar invite is in your inbox if you added an email.', err: 'The call wasn\'t booked. Pick another time or message us on WhatsApp.', missing: 'Pick a day and time, and add your name and mobile.', pickSlot: 'Pick a day to see the available times.', link: 'or book a consultation call' },
  profile: { download: 'Download company profile', size: 'PDF' },
  ar3d: { open: 'View in your space (AR)', title: 'Your stand in your real space', place: 'Place the stand', hint: 'Point your phone at the floor, place the stand at real size and walk around it.', desktop: 'Open this page on your phone (iPhone or Android) to see your stand at real size in augmented reality.', unsupported: 'Your device doesn\'t support AR; you can still rotate the stand here.', close: 'Close', loading: 'Preparing your stand…' },
  cta: { design3d: 'Design your stand in 3D', navPlanner: 'Design your stand', orChat: 'or chat with our AI assistant' },
  cal: {
    title: 'Upcoming exhibitions in Saudi Arabia',
    lead: 'Major shows with dates confirmed by their organizers. Pick yours and we start your stand design with time to spare.',
    plan: 'Plan my stand',
    site: 'Official site',
    more: 'Show all exhibitions',
    less: 'Show less',
    source: 'Dates are from the organizers’ official websites. Check them before booking.',
    sectors: { agriculture: 'Agriculture', health: 'Healthcare', construction: 'Construction', energy: 'Energy & power', realestate: 'Real estate', food: 'Food & beverage', mobility: 'Mobility', tech: 'Technology', auto: 'Automotive', industry: 'Industry & logistics', entertainment: 'Entertainment', beauty: 'Beauty', hospitality: 'Hospitality', interiors: 'Interiors' },
    cities: { Riyadh: 'Riyadh', Jeddah: 'Jeddah', Dammam: 'Dammam' },
  },
  planner: {
    title: 'Plan your stand in a minute',
    lead: 'Choose the size, layout and what goes inside, and we send your outline with the quote request.',
    size: 'Size', sizeCustom: 'Other size', sqm: 'm²',
    type: 'Sides open to the aisles',
    types: [
      { id: 'row', t: 'One side', d: 'Row stand' },
      { id: 'corner', t: 'Two sides', d: 'Corner stand' },
      { id: 'peninsula', t: 'Three sides', d: 'Peninsula' },
      { id: 'island', t: 'Four sides', d: 'Island' },
    ],
    build: 'Build type',
    builds: [
      { id: 'custom', t: 'Fully custom build' },
      { id: 'modular', t: 'Upgraded modular system' },
      { id: 'double', t: 'Double-deck stand' },
    ],
    extras: 'Inside the stand',
    extrasList: [
      { id: 'led', t: 'LED screen' }, { id: 'meeting', t: 'Meeting room' }, { id: 'storage', t: 'Storage' },
      { id: 'counter', t: 'Reception counter' }, { id: 'lighting', t: 'Feature lighting' }, { id: 'sound', t: 'Sound system' },
      { id: 'print', t: 'Print & graphics' }, { id: 'giveaways', t: 'Giveaways' }, { id: 'media', t: 'Photo & video' },
    ],
    event: 'Exhibition', eventNone: 'Not decided yet',
    summary: 'Your outline',
    apply: 'Continue the request with this outline',
    applied: 'Your outline is in the request form. Add your details and send.',
    plan: 'Stand plan', open: 'Open', aisle: 'Aisle',
    look: 'Look', wall: 'Wall colour', walls: [{ id: 'white', t: 'White' }, { id: 'navy', t: 'Navy' }, { id: 'black', t: 'Black' }, { id: 'wood', t: 'Wood' }], accent: 'Brand colour',
    carpet: 'Floor', carpets: [{ id: 'grey', t: 'Grey carpet' }, { id: 'blue', t: 'Blue carpet' }, { id: 'red', t: 'Red carpet' }, { id: 'wood', t: 'Wood floor' }],
    logo: 'Your logo', logoPick: 'Upload logo', logoHint: 'PNG or JPG. Shown on the stand here, and only sent with your request.', logoClear: 'Remove',
    concept: 'Initial concept. Our team prepares the final design',
    view3d: '3D', view2d: 'Plan', loading: 'Preparing the 3D design…', noWebgl: 'Your browser can’t show 3D, so here is the plan.', drag: 'Drag to rotate, zoom with the mouse wheel or two fingers.', reset: 'Reset view', save: 'Save image', attached: 'Your 3D design will be attached to the request for our designers to start from.',
  },
  privacy: {
    link: 'Privacy policy',
    title: 'Privacy policy',
    updated: 'Last updated: October 2026',
    body: [
      { h: 'Who we are', p: 'This website belongs to Oxira, a Saudi company. For anything about your data: info@oxira.sa.' },
      { h: 'What we collect', p: 'When you send the quote form or chat with the assistant, we collect only what you write: name, mobile, email, company, exhibition and stand details, and the chat text.' },
      { h: 'Why we use it', p: 'To answer your request, prepare the design and quote, and contact you about it. We do not sell your data or use it for anything else.' },
      { h: 'Where it is kept', p: 'Requests are stored in a cloud automation system (n8n) and sent to the company mailbox. The assistant sends your messages to an AI model provider to generate its replies.' },
      { h: 'How long we keep it', p: 'We keep a request while we work with you, then delete it on request or once it is no longer needed.' },
      { h: 'Your rights', p: 'Under Saudi Arabia’s Personal Data Protection Law you can ask to see, correct or delete your data. Email info@oxira.sa and we will reply within the statutory period.' },
      { h: 'Cookies', p: 'The site uses no tracking or advertising cookies. Your browser keeps a temporary chat ID only until you close the page.' },
    ],
  },
  notFound: { title: 'This page doesn’t exist', body: 'The link may have changed. Start from the home page or request a quote directly.', home: 'Home page' },
};

const de: Extra = {
  book: { tabQuote: 'Angebot anfragen', tabBook: 'Beratungsgespräch buchen', lead: 'Wählen Sie einen Termin für ein 30-minütiges Gespräch. Der Termin ist vorläufig, wir bestätigen ihn mit Ihnen.', day: 'Tag', time: 'Uhrzeit', tz: 'Ortszeit Riad', channel: 'Kontaktweg', channels: [{ id: 'call', t: 'Telefonat' }, { id: 'whatsapp', t: 'WhatsApp' }, { id: 'video', t: 'Videomeeting' }, { id: 'visit', t: 'Besuch im Büro' }], topic: 'Worüber möchten Sie sprechen?', topicHint: 'Messe, Standgröße, Ihre Ideen', name: 'Name', phone: 'Mobilnummer', email: 'E-Mail', emailHint: 'für die Kalendereinladung', company: 'Unternehmen', submit: 'Termin buchen', sending: 'Wird gebucht…', ok: 'Terminanfrage erhalten. Nummer', okTail: 'Wir bestätigen den Termin in Kürze; die Kalendereinladung liegt in Ihrem Postfach, falls Sie eine E-Mail angegeben haben.', err: 'Der Termin wurde nicht gebucht. Wählen Sie eine andere Zeit oder schreiben Sie uns auf WhatsApp.', missing: 'Bitte Tag, Uhrzeit, Name und Mobilnummer angeben.', pickSlot: 'Wählen Sie einen Tag, um freie Zeiten zu sehen.', link: 'oder Beratungsgespräch buchen' },
  profile: { download: 'Unternehmensprofil herunterladen', size: 'PDF' },
  ar3d: { open: 'In Ihrem Raum ansehen (AR)', title: 'Ihr Stand in Ihrem echten Raum', place: 'Stand platzieren', hint: 'Richten Sie die Kamera auf den Boden, platzieren Sie den Stand in Originalgröße und gehen Sie herum.', desktop: 'Öffnen Sie diese Seite auf Ihrem Smartphone (iPhone oder Android), um Ihren Stand in Originalgröße in AR zu sehen.', unsupported: 'Ihr Gerät unterstützt kein AR; Sie können den Stand hier drehen.', close: 'Schließen', loading: 'Stand wird vorbereitet…' },
  cta: { design3d: 'Stand in 3D gestalten', navPlanner: 'Stand gestalten', orChat: 'oder mit unserem KI-Assistenten chatten' },
  cal: {
    title: 'Kommende Messen in Saudi-Arabien',
    lead: 'Große Messen mit vom Veranstalter bestätigten Terminen. Wählen Sie Ihre Messe, und wir beginnen rechtzeitig mit dem Standentwurf.',
    plan: 'Stand planen',
    site: 'Offizielle Website',
    more: 'Alle Messen zeigen',
    less: 'Weniger zeigen',
    source: 'Termine von den offiziellen Websites der Veranstalter. Bitte vor der Buchung prüfen.',
    sectors: { agriculture: 'Landwirtschaft', health: 'Gesundheit', construction: 'Bau', energy: 'Energie', realestate: 'Immobilien', food: 'Lebensmittel', mobility: 'Mobilität', tech: 'Technologie', auto: 'Automobil', industry: 'Industrie & Logistik', entertainment: 'Unterhaltung', beauty: 'Beauty', hospitality: 'Hotellerie', interiors: 'Innenausbau' },
    cities: { Riyadh: 'Riad', Jeddah: 'Dschidda', Dammam: 'Dammam' },
  },
  planner: {
    title: 'Planen Sie Ihren Stand in einer Minute',
    lead: 'Wählen Sie Größe, Standtyp und Ausstattung, und wir senden Ihren Entwurf mit der Angebotsanfrage.',
    size: 'Größe', sizeCustom: 'Andere Größe', sqm: 'm²',
    type: 'Offene Seiten zum Gang',
    types: [
      { id: 'row', t: 'Eine Seite', d: 'Reihenstand' },
      { id: 'corner', t: 'Zwei Seiten', d: 'Eckstand' },
      { id: 'peninsula', t: 'Drei Seiten', d: 'Kopfstand' },
      { id: 'island', t: 'Vier Seiten', d: 'Inselstand' },
    ],
    build: 'Bauart',
    builds: [
      { id: 'custom', t: 'Individueller Standbau' },
      { id: 'modular', t: 'Aufgewertetes Systemstand' },
      { id: 'double', t: 'Zweistöckiger Stand' },
    ],
    extras: 'Im Stand',
    extrasList: [
      { id: 'led', t: 'LED-Wand' }, { id: 'meeting', t: 'Besprechungsraum' }, { id: 'storage', t: 'Lager' },
      { id: 'counter', t: 'Empfangstheke' }, { id: 'lighting', t: 'Akzentbeleuchtung' }, { id: 'sound', t: 'Tonanlage' },
      { id: 'print', t: 'Druck & Grafik' }, { id: 'giveaways', t: 'Werbegeschenke' }, { id: 'media', t: 'Foto & Video' },
    ],
    event: 'Messe', eventNone: 'Noch offen',
    summary: 'Ihr Entwurf',
    apply: 'Anfrage mit diesem Entwurf fortsetzen',
    applied: 'Ihr Entwurf steht im Anfrageformular. Ergänzen Sie Ihre Daten und senden Sie ab.',
    plan: 'Standgrundriss', open: 'Offen', aisle: 'Gang',
    look: 'Gestaltung', wall: 'Wandfarbe', walls: [{ id: 'white', t: 'Weiß' }, { id: 'navy', t: 'Marine' }, { id: 'black', t: 'Schwarz' }, { id: 'wood', t: 'Holz' }], accent: 'Markenfarbe',
    carpet: 'Boden', carpets: [{ id: 'grey', t: 'Teppich grau' }, { id: 'blue', t: 'Teppich blau' }, { id: 'red', t: 'Teppich rot' }, { id: 'wood', t: 'Holzboden' }],
    logo: 'Ihr Logo', logoPick: 'Logo hochladen', logoHint: 'PNG oder JPG. Wird hier auf dem Stand gezeigt und nur mit Ihrer Anfrage gesendet.', logoClear: 'Entfernen',
    concept: 'Erster Entwurf. Das finale Design erstellt unser Team',
    view3d: '3D', view2d: 'Grundriss', loading: '3D-Entwurf wird vorbereitet…', noWebgl: 'Ihr Browser kann kein 3D anzeigen, hier ist der Grundriss.', drag: 'Ziehen zum Drehen, Zoom mit Mausrad oder zwei Fingern.', reset: 'Ansicht zurücksetzen', save: 'Bild speichern', attached: 'Ihr 3D-Entwurf wird der Anfrage beigefügt, damit unsere Designer darauf aufbauen.',
  },
  privacy: {
    link: 'Datenschutz',
    title: 'Datenschutzerklärung',
    updated: 'Stand: Oktober 2026',
    body: [
      { h: 'Wer wir sind', p: 'Diese Website gehört Oxira, einem saudischen Unternehmen. Fragen zu Ihren Daten: info@oxira.sa.' },
      { h: 'Welche Daten wir erheben', p: 'Wenn Sie das Anfrageformular senden oder mit dem Assistenten chatten, erheben wir nur, was Sie eingeben: Name, Mobilnummer, E-Mail, Unternehmen, Messe- und Standdetails sowie den Chattext.' },
      { h: 'Wozu wir sie nutzen', p: 'Um Ihre Anfrage zu beantworten, Entwurf und Angebot zu erstellen und Sie dazu zu kontaktieren. Wir verkaufen Ihre Daten nicht und nutzen sie für nichts anderes.' },
      { h: 'Wo sie gespeichert werden', p: 'Anfragen werden in einem Cloud-Automatisierungssystem (n8n) gespeichert und an das Firmenpostfach gesendet. Der Assistent sendet Ihre Nachrichten an einen KI-Modellanbieter, um Antworten zu erzeugen.' },
      { h: 'Speicherdauer', p: 'Wir bewahren eine Anfrage auf, solange wir mit Ihnen zusammenarbeiten, und löschen sie auf Wunsch oder wenn sie nicht mehr benötigt wird.' },
      { h: 'Ihre Rechte', p: 'Nach dem saudischen Datenschutzgesetz (PDPL) können Sie Auskunft, Berichtigung oder Löschung Ihrer Daten verlangen. Schreiben Sie an info@oxira.sa.' },
      { h: 'Cookies', p: 'Die Website verwendet keine Tracking- oder Werbe-Cookies. Ihr Browser speichert nur eine vorübergehende Chat-ID, bis Sie die Seite schließen.' },
    ],
  },
  notFound: { title: 'Diese Seite gibt es nicht', body: 'Der Link hat sich vielleicht geändert. Starten Sie auf der Startseite oder fragen Sie direkt ein Angebot an.', home: 'Startseite' },
};

const fr: Extra = {
  book: { tabQuote: 'Demander un devis', tabBook: 'Réserver un appel conseil', lead: 'Choisissez un créneau pour un appel de 30 minutes. Le créneau est provisoire et nous le confirmons avec vous.', day: 'Jour', time: 'Heure', tz: 'heure de Riyad', channel: 'Moyen de contact', channels: [{ id: 'call', t: 'Appel téléphonique' }, { id: 'whatsapp', t: 'WhatsApp' }, { id: 'video', t: 'Visioconférence' }, { id: 'visit', t: 'Visite de nos bureaux' }], topic: 'De quoi souhaitez-vous parler ?', topicHint: 'Nom du salon, surface, vos idées', name: 'Nom', phone: 'Mobile', email: 'E-mail', emailHint: 'pour recevoir l’invitation de calendrier', company: 'Société', submit: 'Réserver l’appel', sending: 'Réservation…', ok: 'Demande de rendez-vous reçue. Numéro', okTail: 'Nous vous la confirmerons rapidement ; l’invitation de calendrier est dans votre boîte si vous avez indiqué un e-mail.', err: 'Le rendez-vous n’a pas été réservé. Choisissez un autre créneau ou écrivez-nous sur WhatsApp.', missing: 'Choisissez le jour et l’heure, et indiquez votre nom et votre mobile.', pickSlot: 'Choisissez un jour pour voir les créneaux disponibles.', link: 'ou réservez un appel conseil' },
  profile: { download: 'Télécharger la présentation', size: 'PDF' },
  ar3d: { open: 'Voir chez vous (RA)', title: 'Votre stand dans votre espace réel', place: 'Placer le stand', hint: 'Visez le sol avec votre téléphone, placez le stand à taille réelle et tournez autour.', desktop: 'Ouvrez cette page sur votre téléphone (iPhone ou Android) pour voir votre stand à taille réelle en réalité augmentée.', unsupported: 'Votre appareil ne prend pas en charge la RA ; vous pouvez faire pivoter le stand ici.', close: 'Fermer', loading: 'Préparation du stand…' },
  cta: { design3d: 'Concevez votre stand en 3D', navPlanner: 'Concevoir mon stand', orChat: 'ou discutez avec notre assistant IA' },
  cal: {
    title: 'Salons à venir en Arabie saoudite',
    lead: 'Les grands salons dont les dates sont confirmées par les organisateurs. Choisissez le vôtre et nous lançons la conception de votre stand à temps.',
    plan: 'Planifier mon stand',
    site: 'Site officiel',
    more: 'Voir tous les salons',
    less: 'Voir moins',
    source: 'Dates issues des sites officiels des organisateurs. Vérifiez-les avant de réserver.',
    sectors: { agriculture: 'Agriculture', health: 'Santé', construction: 'Construction', energy: 'Énergie', realestate: 'Immobilier', food: 'Agroalimentaire', mobility: 'Mobilité', tech: 'Technologie', auto: 'Automobile', industry: 'Industrie et logistique', entertainment: 'Divertissement', beauty: 'Beauté', hospitality: 'Hôtellerie', interiors: 'Aménagement intérieur' },
    cities: { Riyadh: 'Riyad', Jeddah: 'Djeddah', Dammam: 'Dammam' },
  },
  planner: {
    title: 'Planifiez votre stand en une minute',
    lead: 'Choisissez la surface, la configuration et l’équipement, et nous envoyons votre esquisse avec la demande de devis.',
    size: 'Surface', sizeCustom: 'Autre surface', sqm: 'm²',
    type: 'Côtés ouverts sur les allées',
    types: [
      { id: 'row', t: 'Un côté', d: 'Stand en ligne' },
      { id: 'corner', t: 'Deux côtés', d: 'Stand d’angle' },
      { id: 'peninsula', t: 'Trois côtés', d: 'Péninsule' },
      { id: 'island', t: 'Quatre côtés', d: 'Îlot' },
    ],
    build: 'Type de construction',
    builds: [
      { id: 'custom', t: 'Stand entièrement sur mesure' },
      { id: 'modular', t: 'Système modulaire amélioré' },
      { id: 'double', t: 'Stand à étage' },
    ],
    extras: 'Dans le stand',
    extrasList: [
      { id: 'led', t: 'Écran LED' }, { id: 'meeting', t: 'Salle de réunion' }, { id: 'storage', t: 'Réserve' },
      { id: 'counter', t: 'Comptoir d’accueil' }, { id: 'lighting', t: 'Éclairage d’ambiance' }, { id: 'sound', t: 'Sonorisation' },
      { id: 'print', t: 'Impression et graphisme' }, { id: 'giveaways', t: 'Objets publicitaires' }, { id: 'media', t: 'Photo et vidéo' },
    ],
    event: 'Salon', eventNone: 'Pas encore choisi',
    summary: 'Votre esquisse',
    apply: 'Continuer la demande avec cette esquisse',
    applied: 'Votre esquisse est dans le formulaire. Ajoutez vos coordonnées et envoyez.',
    plan: 'Plan du stand', open: 'Ouvert', aisle: 'Allée',
    look: 'Apparence', wall: 'Couleur des murs', walls: [{ id: 'white', t: 'Blanc' }, { id: 'navy', t: 'Marine' }, { id: 'black', t: 'Noir' }, { id: 'wood', t: 'Bois' }], accent: 'Couleur de marque',
    carpet: 'Sol', carpets: [{ id: 'grey', t: 'Moquette grise' }, { id: 'blue', t: 'Moquette bleue' }, { id: 'red', t: 'Moquette rouge' }, { id: 'wood', t: 'Parquet' }],
    logo: 'Votre logo', logoPick: 'Importer le logo', logoHint: 'PNG ou JPG. Affiché ici sur le stand, et envoyé uniquement avec votre demande.', logoClear: 'Retirer',
    concept: 'Esquisse initiale. Notre équipe prépare la conception finale',
    view3d: '3D', view2d: 'Plan', loading: 'Préparation de la vue 3D…', noWebgl: 'Votre navigateur ne peut pas afficher la 3D, voici le plan.', drag: 'Faites glisser pour tourner, zoomez à la molette ou à deux doigts.', reset: 'Vue par défaut', save: 'Enregistrer l’image', attached: 'Votre conception 3D sera jointe à la demande pour servir de base à nos designers.',
  },
  privacy: {
    link: 'Confidentialité',
    title: 'Politique de confidentialité',
    updated: 'Dernière mise à jour : octobre 2026',
    body: [
      { h: 'Qui sommes-nous', p: 'Ce site appartient à Oxira, entreprise saoudienne. Pour toute question sur vos données : info@oxira.sa.' },
      { h: 'Données collectées', p: 'Lorsque vous envoyez le formulaire ou discutez avec l’assistant, nous collectons uniquement ce que vous saisissez : nom, mobile, e-mail, société, détails du salon et du stand, et le texte de la discussion.' },
      { h: 'Utilisation', p: 'Pour répondre à votre demande, préparer la conception et le devis, et vous recontacter. Nous ne vendons pas vos données et ne les utilisons à aucune autre fin.' },
      { h: 'Stockage', p: 'Les demandes sont stockées dans un outil d’automatisation cloud (n8n) et envoyées à la boîte mail de l’entreprise. L’assistant transmet vos messages à un fournisseur de modèle d’IA pour générer ses réponses.' },
      { h: 'Durée de conservation', p: 'Nous conservons une demande le temps de notre collaboration, puis la supprimons à votre demande ou lorsqu’elle n’est plus utile.' },
      { h: 'Vos droits', p: 'Selon la loi saoudienne sur la protection des données personnelles (PDPL), vous pouvez demander l’accès, la rectification ou la suppression de vos données. Écrivez à info@oxira.sa.' },
      { h: 'Cookies', p: 'Le site n’utilise aucun cookie de suivi ou publicitaire. Votre navigateur conserve seulement un identifiant de discussion temporaire jusqu’à la fermeture de la page.' },
    ],
  },
  notFound: { title: 'Cette page n’existe pas', body: 'Le lien a peut-être changé. Revenez à l’accueil ou demandez directement un devis.', home: 'Accueil' },
};

const ru: Extra = {
  book: { tabQuote: 'Запросить смету', tabBook: 'Записаться на консультацию', lead: 'Выберите время для 30-минутного звонка с нашей командой. Время предварительное, мы подтвердим его.', day: 'День', time: 'Время', tz: 'время Эр-Рияда', channel: 'Способ связи', channels: [{ id: 'call', t: 'Телефонный звонок' }, { id: 'whatsapp', t: 'WhatsApp' }, { id: 'video', t: 'Видеовстреча' }, { id: 'visit', t: 'Визит в офис' }], topic: 'Что хотите обсудить?', topicHint: 'Название выставки, площадь, ваши идеи', name: 'Имя', phone: 'Мобильный', email: 'E-mail', emailHint: 'чтобы отправить приглашение в календарь', company: 'Компания', submit: 'Записаться', sending: 'Записываем…', ok: 'Запрос на консультацию получен. Номер', okTail: 'Мы скоро подтвердим время; приглашение для календаря отправлено на почту, если вы её указали.', err: 'Запись не создана. Выберите другое время или напишите нам в WhatsApp.', missing: 'Выберите день и время, укажите имя и мобильный.', pickSlot: 'Выберите день, чтобы увидеть свободное время.', link: 'или запишитесь на консультацию' },
  profile: { download: 'Скачать профиль компании', size: 'PDF' },
  ar3d: { open: 'Посмотреть у себя (AR)', title: 'Ваш стенд в реальном пространстве', place: 'Разместить стенд', hint: 'Наведите камеру на пол, разместите стенд в натуральную величину и обойдите его.', desktop: 'Откройте эту страницу на телефоне (iPhone или Android), чтобы увидеть стенд в натуральную величину в дополненной реальности.', unsupported: 'Ваше устройство не поддерживает AR; стенд можно вращать здесь.', close: 'Закрыть', loading: 'Готовим стенд…' },
  cta: { design3d: 'Создайте стенд в 3D', navPlanner: 'Создать стенд', orChat: 'или напишите нашему ИИ-ассистенту' },
  cal: {
    title: 'Ближайшие выставки в Саудовской Аравии',
    lead: 'Крупные выставки с датами, подтверждёнными организаторами. Выберите свою, и мы начнём проект стенда заранее.',
    plan: 'Спланировать стенд',
    site: 'Официальный сайт',
    more: 'Показать все выставки',
    less: 'Свернуть',
    source: 'Даты взяты с официальных сайтов организаторов. Проверьте их перед бронированием.',
    sectors: { agriculture: 'Сельское хозяйство', health: 'Здравоохранение', construction: 'Строительство', energy: 'Энергетика', realestate: 'Недвижимость', food: 'Продукты питания', mobility: 'Транспорт', tech: 'Технологии', auto: 'Автомобили', industry: 'Промышленность и логистика', entertainment: 'Развлечения', beauty: 'Красота', hospitality: 'Гостеприимство', interiors: 'Интерьеры' },
    cities: { Riyadh: 'Эр-Рияд', Jeddah: 'Джидда', Dammam: 'Даммам' },
  },
  planner: {
    title: 'Спланируйте стенд за минуту',
    lead: 'Выберите площадь, тип стенда и наполнение, и мы отправим ваш эскиз вместе с запросом сметы.',
    size: 'Площадь', sizeCustom: 'Другая площадь', sqm: 'м²',
    type: 'Открытые стороны',
    types: [
      { id: 'row', t: 'Одна сторона', d: 'Линейный стенд' },
      { id: 'corner', t: 'Две стороны', d: 'Угловой стенд' },
      { id: 'peninsula', t: 'Три стороны', d: 'Полуостров' },
      { id: 'island', t: 'Четыре стороны', d: 'Остров' },
    ],
    build: 'Тип застройки',
    builds: [
      { id: 'custom', t: 'Полностью индивидуальный' },
      { id: 'modular', t: 'Улучшенный модульный' },
      { id: 'double', t: 'Двухэтажный стенд' },
    ],
    extras: 'Внутри стенда',
    extrasList: [
      { id: 'led', t: 'LED-экран' }, { id: 'meeting', t: 'Переговорная' }, { id: 'storage', t: 'Склад' },
      { id: 'counter', t: 'Стойка ресепшн' }, { id: 'lighting', t: 'Акцентный свет' }, { id: 'sound', t: 'Звук' },
      { id: 'print', t: 'Печать и графика' }, { id: 'giveaways', t: 'Сувениры' }, { id: 'media', t: 'Фото и видео' },
    ],
    event: 'Выставка', eventNone: 'Ещё не выбрана',
    summary: 'Ваш эскиз',
    apply: 'Продолжить запрос с этим эскизом',
    applied: 'Эскиз добавлен в форму запроса. Укажите контакты и отправьте.',
    plan: 'План стенда', open: 'Открыто', aisle: 'Проход',
    look: 'Оформление', wall: 'Цвет стен', walls: [{ id: 'white', t: 'Белый' }, { id: 'navy', t: 'Тёмно-синий' }, { id: 'black', t: 'Чёрный' }, { id: 'wood', t: 'Дерево' }], accent: 'Цвет бренда',
    carpet: 'Пол', carpets: [{ id: 'grey', t: 'Серый ковролин' }, { id: 'blue', t: 'Синий ковролин' }, { id: 'red', t: 'Красный ковролин' }, { id: 'wood', t: 'Паркет' }],
    logo: 'Ваш логотип', logoPick: 'Загрузить логотип', logoHint: 'PNG или JPG. Показывается здесь на стенде и отправляется только с вашим запросом.', logoClear: 'Убрать',
    concept: 'Предварительный эскиз. Финальный проект готовит наша команда',
    view3d: '3D', view2d: 'План', loading: 'Готовим 3D-модель…', noWebgl: 'Ваш браузер не поддерживает 3D, показываем план.', drag: 'Перетаскивайте для вращения, масштаб — колесом мыши или двумя пальцами.', reset: 'Исходный вид', save: 'Сохранить изображение', attached: 'Ваш 3D-проект будет приложен к запросу, чтобы дизайнеры начали с него.',
  },
  privacy: {
    link: 'Конфиденциальность',
    title: 'Политика конфиденциальности',
    updated: 'Обновлено: октябрь 2026',
    body: [
      { h: 'Кто мы', p: 'Сайт принадлежит саудовской компании Oxira. По вопросам ваших данных: info@oxira.sa.' },
      { h: 'Какие данные мы собираем', p: 'Когда вы отправляете форму или пишете ассистенту, мы получаем только то, что вы ввели: имя, мобильный, e-mail, компанию, данные о выставке и стенде и текст переписки.' },
      { h: 'Зачем', p: 'Чтобы ответить на запрос, подготовить проект и смету и связаться с вами. Мы не продаём ваши данные и не используем их в других целях.' },
      { h: 'Где хранятся', p: 'Запросы хранятся в облачной системе автоматизации (n8n) и пересылаются на почту компании. Ассистент передаёт ваши сообщения поставщику ИИ-модели для формирования ответов.' },
      { h: 'Срок хранения', p: 'Мы храним запрос, пока работаем с вами, и удаляем его по вашей просьбе или когда он больше не нужен.' },
      { h: 'Ваши права', p: 'По саудовскому закону о защите персональных данных (PDPL) вы можете запросить доступ к данным, их исправление или удаление. Пишите на info@oxira.sa.' },
      { h: 'Cookie', p: 'Сайт не использует рекламные или отслеживающие cookie. Браузер хранит только временный идентификатор чата до закрытия страницы.' },
    ],
  },
  notFound: { title: 'Такой страницы нет', body: 'Возможно, ссылка изменилась. Начните с главной или сразу запросите смету.', home: 'Главная' },
};

export const x: Record<Lang, Extra> = { ar, en, de, fr, ru };
