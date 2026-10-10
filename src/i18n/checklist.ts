// Printable exhibition checklist (PDF download on the exhibition-checklist guide page).
// Mirrors the seven phases of the guide in landing-guides-ar.ts / landing-guides-en.ts.
export type Phase = { when: string; items: string[] };

export const CHECKLIST: Record<'ar' | 'en', { title: string; subtitle: string; phases: Phase[]; footer: string }> = {
  ar: {
    title: 'قائمة تجهيز المعرض',
    subtitle: 'من 90 يوماً قبل المعرض حتى المتابعة بعده. راجع دليل العارضين للمواعيد الدقيقة لمعرضك.',
    phases: [
      {
        when: 'قبل المعرض بـ 90 يوماً أو أكثر',
        items: [
          'حدد أهداف المشاركة وطريقة قياسها',
          'اعتمد الميزانية: المساحة والجناح والخدمات والسفر والضيافة',
          'احجز المساحة واحصل على مخطط القاعة ورقم الجناح',
          'اقرأ دليل العارضين وسجّل كل المواعيد النهائية',
          'اختر منفذ الجناح وشاركه الموجز والمساحة والجهات المفتوحة',
          'حدد المنتجات والعروض والرسائل الأساسية',
          'خطط لسفر الفريق وإقامته إن لزم',
        ],
      },
      {
        when: 'قبل المعرض بـ 60 يوماً',
        items: [
          'اعتمد التصميم ثلاثي الأبعاد',
          'قدّم رسومات الجناح لاعتماد المنظم قبل الموعد',
          'اطلب الكهرباء والمياه والإنترنت عبر المنظم',
          'أكّد الشاشات والإضاءة والصوت وابدأ تجهيز المحتوى',
          'خطط لشحن المعروضات والعينات والإجراءات الجمركية',
          'رتّب التأمين إن كان مطلوباً',
          'أبلغ عملاءك برقم الجناح وادعهم لحجز اجتماعات',
        ],
      },
      {
        when: 'قبل المعرض بـ 30 يوماً',
        items: [
          'أرسل ملفات الجرافيك النهائية الجاهزة للطباعة',
          'سجّل الفريق واطلب بطاقات العارضين',
          'أكّد الأثاث والمخازن والقطع المستأجرة',
          'جهّز المطبوعات والعينات والهدايا الترويجية',
          'جهّز وسيلة تسجيل العملاء وحدد البيانات المطلوبة',
          'احجز الضيافة إن لزم',
          'أكّد مواعيد التركيب والفك ودخول المركبات',
        ],
      },
      {
        when: 'الأسبوعان الأخيران',
        items: [
          'اعقد اجتماع إحاطة للفريق: الأهداف والرسائل والمناوبات',
          'تأكد من وصول الشحنات أو أنها في موعدها',
          'جهّز حقيبة الجناح: شواحن وتوصيلات وأدوات وإسعافات أولية',
          'تحقق من تأكيد البطاقات والخدمات والاعتمادات كتابياً',
          'شارك قائمة جهات الاتصال مع الفريق',
          'أرسل تذكيراً لمن حجزوا اجتماعات',
        ],
      },
      {
        when: 'أيام التركيب',
        items: [
          'وجود ممثل من فريقك في الموقع',
          'طابق الجناح مع التصميم المعتمد: المقاسات والجرافيك والإملاء',
          'اختبر الكهرباء والإضاءة والشاشات والمحتوى',
          'رتّب المنتجات والعينات والمطبوعات',
          'أبقِ الجناح خالياً من الصناديق واعرف مكان المخزن',
          'وقّع الاستلام وسجّل الملاحظات قبل الافتتاح',
        ],
      },
      {
        when: 'أيام المعرض',
        items: [
          'اجتماع قصير للفريق كل صباح',
          'جناح نظيف ومرتب وفريق حاضر دائماً',
          'سجّل كل عميل محتمل مع احتياجه والخطوة التالية',
          'التقط صوراً ومقاطع للجناح والأنشطة',
          'التزم بتعليمات المنظم في الصوت والممرات والسلامة',
          'أبقِ رقم ممثل المنفذ في الموقع قريباً',
        ],
      },
      {
        when: 'بعد المعرض',
        items: [
          'تابع كل عميل محتمل خلال 48 ساعة',
          'رتّب العملاء حسب الأولوية ووزّعهم على المبيعات',
          'رتّب الفك وإعادة المعروضات وتخزين ما يُعاد استخدامه',
          'قيّم النتائج مقارنة بالأهداف والتكاليف',
          'دوّن الدروس المستفادة للمشاركة القادمة',
          'فعّل تنبيهات معرضك التالي في تقويم المعارض',
        ],
      },
    ],
    footer: 'تحتاج جناحاً لمعرضك القادم؟ تواصل مع Oxira Events: events.oxira.sa | info@oxira.sa | +966 56 567 0776',
  },
  en: {
    title: 'Exhibition checklist',
    subtitle: 'From 90 days before the show to the follow-up after it. Check the exhibitor manual for your show’s exact dates.',
    phases: [
      {
        when: '90 days or more before',
        items: [
          'Set goals for the show and how you will measure them',
          'Agree the budget: space, stand, services, travel and hospitality',
          'Book your space and get the floor plan and plot number',
          'Read the exhibitor manual and note every deadline',
          'Choose your stand builder; share the brief, plot size and open sides',
          'Decide the products, demos and key messages',
          'Plan staff travel and accommodation if needed',
        ],
      },
      {
        when: '60 days before',
        items: [
          'Sign off the 3D stand design',
          'Submit stand drawings for organiser approval before the deadline',
          'Order power, water and internet through the organiser',
          'Confirm screens, lighting and AV; start preparing content',
          'Plan shipping of exhibits and samples, including customs',
          'Arrange insurance if required',
          'Tell customers your stand number and invite them to book meetings',
        ],
      },
      {
        when: '30 days before',
        items: [
          'Send final print-ready graphics files',
          'Register staff and order exhibitor badges',
          'Confirm furniture, storage and rented items',
          'Prepare brochures, samples and giveaways',
          'Set up lead capture and decide what data you need',
          'Book hospitality if needed',
          'Confirm build-up and breakdown times and vehicle access',
        ],
      },
      {
        when: 'Final two weeks',
        items: [
          'Brief the team: goals, key messages and shifts',
          'Confirm shipping has arrived or is on schedule',
          'Pack a stand kit: chargers, extension leads, tools and first aid',
          'Check badges, service orders and approvals are confirmed in writing',
          'Share a contact list with the team',
          'Send reminders to everyone who booked a meeting',
        ],
      },
      {
        when: 'Build-up days',
        items: [
          'Have someone from your team on site',
          'Check the stand against the approved design, graphics and spelling',
          'Test power, lighting, screens and content',
          'Place products, samples and brochures',
          'Keep the stand clear of boxes; know where storage is',
          'Sign off the handover and list any fixes before opening',
        ],
      },
      {
        when: 'Show days',
        items: [
          'Short team briefing every morning',
          'Keep the stand clean, tidy and staffed at all times',
          'Log every lead with their needs and the next step',
          'Take photos and video of the stand and activities',
          'Follow the organiser’s rules on noise, aisles and safety',
          'Keep the builder’s on-site contact close',
        ],
      },
      {
        when: 'After the show',
        items: [
          'Follow up every lead within 48 hours',
          'Prioritise leads and pass them to the right salespeople',
          'Arrange breakdown, return of exhibits and storage for reuse',
          'Review results against goals and costs',
          'Write down lessons for next time',
          'Set alerts for your next show in the shows calendar',
        ],
      },
    ],
    footer: 'Need a stand for your next show? Contact Oxira Events: events.oxira.sa | info@oxira.sa | +966 56 567 0776',
  },
};
