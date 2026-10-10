import type { Copy } from './landing';

// English copy for the long-form exhibitor guides. Same rules as the rest of the landing copy:
// general industry guidance only, no prices, statistics, clients, awards or years.
// Anything that varies by show is referred to the organiser’s exhibitor manual.
export const guidesEn: Record<string, Copy> = {
  'exhibition-stand-cost-guide': {
    name: 'Exhibition stand cost guide',
    teaser: 'What actually drives the price of an exhibition stand in Saudi Arabia, what is usually left out of a quote, and how to save.',
    title: 'Exhibition Stand Cost in Saudi Arabia | Oxira Events',
    description: 'How much does an exhibition stand cost in Saudi Arabia? The factors that drive the price, what quotes usually leave out, and practical ways to save.',
    h1: 'How much does an exhibition stand cost in Saudi Arabia?',
    kicker: 'Exhibitor guides',
    lead: 'There is no fixed price per square metre for an exhibition stand, because two stands of the same size can be built in completely different ways. What you pay depends on a handful of decisions: the shape of your plot, how the stand is built, what goes on it and when you start. This guide walks through each one so you can set a realistic budget and read quotes with confidence.',
    blocks: [
      {
        h: 'Why there is no single price',
        p: [
          'Ask ten stand builders what a stand costs and you will get ten different answers, and most of them will be fair. A stand is a custom project: it is designed for one plot, one brand and one set of goals, then fabricated, transported, installed and removed within dates the organiser sets. The useful question is not “what does a stand cost?” but “which choices move the price, and which of them matter to me?”',
          'The sections below cover those choices in roughly the order they affect the budget. Once you know them, you can decide where to spend and where to keep things simple.',
        ],
      },
      {
        h: 'The main cost drivers',
        list: [
          'Size and open sides: a bigger plot needs more structure, flooring and graphics. A corner, peninsula or island stand has more open faces to finish and fewer shared walls than a row stand. See [exhibition stand types](@exhibition-stand-types) for how each shape works.',
          'Build type: a fully custom stand in timber and finishes, an upgraded modular system with custom graphics, or a double-deck stand with an upper floor. Custom and double-deck builds take more design, engineering and workshop time.',
          'Materials and finishes: paint, laminate, tension fabric, acrylic, raised lettering, glass and metal all differ in cost and in how long they take to make.',
          'Graphics and print: the number and size of printed panels, backlit fabric, wall wraps and logos. More on this on our [printing and acrylic](@printing-acrylic) page.',
          'Lighting, LED screens and AV: general lighting is expected, but LED walls, large screens, sound and interactive content add equipment, content and technician time. See [lighting, sound and LED screens](@lighting-sound-led-screens).',
          'Furniture and storage: reception counters, display shelving, meeting rooms, lockable stores and custom-made pieces versus rented standard furniture.',
          'Flooring: raised flooring hides cables and levels the hall floor; carpet, vinyl and parquet finishes vary in cost.',
          'Design and approvals: 3D design rounds, technical drawings and any structural calculations the organiser asks for, especially for double-deck or tall structures.',
          'Transport, installation and breakdown: trucks, crew, lifting equipment, and the time allowed by the organiser for build-up and breakdown.',
          'Show city and venue logistics: distance from the workshop, venue access rules, working hours and any required contractors on site.',
          'Timing: a late start means rush fabrication, overtime and fewer material choices.',
          'Reuse: elements designed to be stored and rebuilt can spread the cost across several shows.',
        ],
      },
      {
        h: 'What is usually not in the stand builder’s price',
        p: ['A stand builder quotes for the stand itself. Several costs of exhibiting are usually paid to the organiser or other suppliers, and it helps to budget for them separately from the start:'],
        list: [
          'Space rental, paid to the organiser when you book your plot.',
          'Power, water, compressed air and internet connections, which are usually ordered through the organiser by their deadline.',
          'Exhibitor and contractor badges, and any registration fees.',
          'Hospitality: catering, coffee service and hostesses or promoters.',
          'Insurance for the stand, exhibits and public liability, which the organiser may require.',
          'Shipping of your own products and exhibits, and their storage.',
          'Travel and accommodation for your staff.',
        ],
        after: ['Exact requirements change from show to show, so check the organiser’s exhibitor manual for what is mandatory, what is ordered through them and the deadlines that apply.'],
      },
      {
        h: 'How to compare quotes like-for-like',
        p: ['Quotes often look far apart because they do not describe the same stand. Before you compare totals, line them up on the same points:'],
        list: [
          'Is the design the same size, height and number of open sides?',
          'Is it custom-built, modular or a mix? Who owns the elements after the show?',
          'Which materials and finishes are specified for walls, counters and flooring?',
          'How many screens, of what size, and is the content included?',
          'Is furniture custom-made or rented, and how many pieces?',
          'Are graphics, lighting, installation, breakdown and transport all included?',
          'Are approval drawings and on-site support during the show covered?',
          'What is excluded, and what happens if the brief changes after sign-off?',
        ],
        after: ['A clear, itemised quote is easier to adjust: you can drop or swap single items instead of starting again.'],
      },
      {
        h: 'Practical ways to save',
        list: [
          'Start early: booking design and fabrication slots in good time avoids rush charges and keeps more material options open. Our [exhibition checklist](@exhibition-checklist) shows what to do and when.',
          'Design for reuse: counters, light boxes, frames and furniture that can be stored and rebuilt bring down the cost of later shows.',
          'Use a modular structure with custom graphics where a fully custom build is not needed.',
          'Limit custom materials to what visitors see and touch most, such as the logo wall and the reception counter.',
          'Put the budget into one strong focal point rather than many small features.',
          'Keep the brief stable after sign-off; late changes are among the most expensive items on any project.',
          'Plan the year: if you exhibit several times, tell your builder so the design can work across plot sizes.',
        ],
      },
      {
        h: 'Getting an accurate quote',
        p: [
          'The fastest route to a reliable number is a clear brief: show name and dates, plot size and open sides, what the stand must hold, your brand assets and a rough budget if you have one. You can [sketch your stand in 3D](#planner) on our home page and attach it to your request, or [book a consultation call](#book) to talk it through.',
          'We design and build [exhibition stands](@exhibition-stands) for shows across the Kingdom, including [Riyadh](@exhibition-stands-riyadh), and send an itemised quote once we have your plot and brief. If you are still choosing which shows to attend, the [upcoming shows calendar](#calendar) lets you set email alerts for your sector.',
        ],
      },
    ],
    faq: [
      { q: 'Can you give me a price per square metre?', a: 'Not reliably. Two stands of the same size can differ a lot depending on build type, materials, screens and furniture. We quote per project once we have the plot and brief.' },
      { q: 'Is a modular stand always cheaper than a custom one?', a: 'Often for a single show, and usually over several shows because the frames are reused. A custom stand gives more freedom in shape and finish. Many stands mix both.' },
      { q: 'Does the stand price include power and space rental?', a: 'Usually not. Space rental and service connections such as power and water are normally booked and paid through the organiser. Check the exhibitor manual for the details.' },
      { q: 'Does a double-deck stand cost more?', a: 'Usually, yes. It needs structural design, organiser approval and more build-up time, but it adds floor area without renting a larger plot.' },
      { q: 'How can I lower the cost of exhibiting several times a year?', a: 'Design elements for storage and reuse, choose a modular base where it fits, and plan your shows together so one design can adapt to different plot sizes.' },
    ],
  },

  'exhibition-checklist': {
    name: 'Exhibition checklist',
    teaser: 'A phase-by-phase checklist from 90 days before the show to the follow-up after it, with a printable version.',
    title: 'Exhibition Checklist: 90 Days to Show | Oxira Events',
    description: 'Exhibition checklist from 90 days out to after the show: exhibitor manual, design approval, power, badges, shipping, graphics, staff and lead follow-up.',
    h1: 'Exhibition checklist: what to do 90 days before your show',
    kicker: 'Exhibitor guides',
    lead: 'Most problems on the show floor start weeks earlier, with a missed deadline or a decision left too late. This checklist splits the work into seven phases, from 90 days out to the follow-up after the show. Use it alongside the organiser’s exhibitor manual, which sets the exact dates for your event.',
    blocks: [
      {
        h: 'How to use this checklist',
        p: [
          'Timings below are a general guide. Every show has its own deadlines for stand approval, service orders and badges, and they are all in the organiser’s exhibitor manual. Read it early, copy the key dates into your calendar and work back from them.',
          'Give each item an owner. Exhibiting involves marketing, sales, logistics and finance, and many tasks slip because everyone assumes someone else has them. A single coordinator who holds the manual, the deadlines and the supplier contacts makes the whole process calmer.',
          'The most common causes of last-minute stress are predictable: stand drawings submitted after the approval deadline, power ordered too late or at the wrong capacity, graphics files that are not print-ready, badges not registered and shipments stuck on the way. Each of them has a place in the phases below.',
          'You can also download the printable checklist on this page, share it with your team and tick items off as you go.',
        ],
      },
      {
        h: '90 days or more before the show',
        list: [
          'Set clear goals for the show: leads, meetings, launches or brand awareness, and how you will measure them.',
          'Agree the overall budget, including space, stand, services, travel and hospitality. Our [stand cost guide](@exhibition-stand-cost-guide) explains what to include.',
          'Book your space and get the floor plan and plot number.',
          'Download and read the organiser’s exhibitor manual; note every deadline.',
          'Choose your stand builder and share the brief, plot size and open sides. The [stand types guide](@exhibition-stand-types) helps you decide the format.',
          'Decide which products, demos and messages the stand must carry.',
          'Plan travel and accommodation for staff if the show is in another city.',
        ],
      },
      {
        h: '60 days before',
        list: [
          'Sign off the 3D design after revisions. You can start one yourself with our [3D stand planner](#planner).',
          'Submit stand drawings for organiser approval before their deadline.',
          'Order power, water, internet and other services through the organiser.',
          'Confirm screens, lighting and AV needs and start preparing screen content.',
          'Plan shipping of exhibits and samples, including any customs steps.',
          'Arrange insurance if the organiser requires it.',
          'Start marketing: tell customers your stand number and invite them to book meetings.',
        ],
      },
      {
        h: '30 days before',
        list: [
          'Send final, print-ready graphics files to your builder in the agreed formats.',
          'Register staff and order exhibitor badges.',
          'Confirm stand furniture, storage and any rented items.',
          'Prepare brochures, samples and [promotional giveaways](@promotional-giveaways).',
          'Set up lead capture: a badge scanner, a form or an app, and decide what data you need.',
          'Book hospitality if you plan to offer catering or coffee on the stand.',
          'Confirm build-up and breakdown times and vehicle access with your builder.',
        ],
      },
      {
        h: 'The final two weeks',
        list: [
          'Hold a staff briefing: goals, key messages, who covers which shift and how to log leads.',
          'Confirm shipping has arrived or is on schedule.',
          'Prepare a stand kit: chargers, extension leads, tape, cleaning items, stationery and first aid.',
          'Check that all badges, service orders and approvals are confirmed in writing.',
          'Share a contact list: builder, organiser contacts and the on-site team lead.',
          'Send reminders to customers and prospects who booked meetings.',
        ],
      },
      {
        h: 'Build-up days',
        list: [
          'Have someone from your team on site to meet the builder and answer questions.',
          'Check the stand against the approved design: dimensions, graphics, logos and spelling.',
          'Test power, lighting, screens and content before handover.',
          'Unpack and place products, samples and brochures.',
          'Know where storage is and keep the stand clear of boxes.',
          'Sign off the handover and note anything to fix before opening.',
        ],
      },
      {
        h: 'Show days',
        list: [
          'Start each morning with a short team briefing on goals and the day’s meetings.',
          'Keep the stand clean, tidy and staffed at all times, especially at opening.',
          'Log every lead with notes on what they need and the agreed next step.',
          'Take photos and video of the stand and activities for later use.',
          'Follow the organiser’s rules on noise, aisles and safety.',
          'Keep the builder’s on-site contact close in case anything needs attention.',
        ],
      },
      {
        h: 'After the show',
        list: [
          'Follow up every lead within 48 hours while the conversation is fresh.',
          'Sort leads by priority and pass them to the right salespeople.',
          'Arrange breakdown and return of exhibits; confirm what is stored for reuse.',
          'Review results against your goals and costs.',
          'Write down what worked and what to change for next time.',
          'Check the [upcoming shows calendar](#calendar) and set alerts for your next show.',
        ],
        after: ['If you want one team to handle the stand from design to breakdown, see our [exhibition stands](@exhibition-stands) service, including shows in [Riyadh](@exhibition-stands-riyadh), or [book a consultation call](#book).'],
      },
    ],
    faq: [
      { q: 'How early should I start preparing for an exhibition?', a: 'Ideally three months or more before the show, and earlier for large custom or double-deck stands. Start as soon as your space is booked.' },
      { q: 'Where do I find the deadlines for my show?', a: 'In the organiser’s exhibitor manual. It lists dates for stand approval, service orders, badges, build-up and breakdown, and the rules for your venue.' },
      { q: 'Who orders power and other services for the stand?', a: 'Usually the exhibitor, through the organiser’s order forms and before their deadline. Your stand builder can tell you what power the design needs.' },
      { q: 'How quickly should I follow up leads after the show?', a: 'Within 48 hours if you can. Prepare the follow-up messages before the show so they are ready to send.' },
      { q: 'Is there a printable version of this checklist?', a: 'Yes. Download the printable checklist on this page and share it with your team.' },
    ],
  },

  'exhibition-stand-types': {
    name: 'Exhibition stand types',
    teaser: 'Row, corner, peninsula and island stands, and when to choose custom, modular or double-deck builds.',
    title: 'Exhibition Stand Types Explained | Oxira Events',
    description: 'Exhibition stand types explained: row, corner, peninsula and island, plus custom, modular and double-deck builds, with pros, cons and design tips.',
    h1: 'Exhibition stand types: row, corner, peninsula and island',
    kicker: 'Exhibitor guides',
    lead: 'Two decisions shape every stand: how many sides of your plot open onto aisles, and how the stand is built. Together they decide where visitors enter, where your logo and screens go and how much the stand costs. This guide explains each option so you can choose with your goals in mind.',
    blocks: [
      {
        h: 'Start with the plot',
        p: [
          'The organiser assigns plots on the floor plan, and each one has a number of open sides facing aisles. The rest of the sides back onto neighbouring stands or hall walls. Open sides decide how visitors see and reach you, so they matter as much as the size.',
          'Before you design, check the floor plan for aisle widths, nearby entrances and what is next to you, and read the organiser’s exhibitor manual for height limits and rules on closed walls facing aisles.',
        ],
      },
      {
        h: 'Row (inline) stand: one open side',
        p: ['A row stand sits in a line of stands with neighbours on both sides and a wall at the back, open only to the front aisle.'],
        list: [
          'Pros: usually the simplest and most economical format; the back wall gives a large surface for branding.',
          'Cons: visible from one direction only, and easy to walk past.',
          'Choose it for: first-time exhibitors, smaller budgets and product displays that work against a wall.',
          'Design tips: put the logo high on the back wall so it is seen from down the aisle, keep the front open and uncluttered, and place a screen or key product at eye level facing the aisle. Avoid a counter that blocks the whole front.',
        ],
      },
      {
        h: 'Corner stand: two open sides',
        p: ['A corner stand sits at the end of a row, open to two aisles that meet at the corner.'],
        list: [
          'Pros: seen from two directions and catches traffic from both aisles.',
          'Cons: fewer walls for display and storage than a row stand.',
          'Choose it for: brands that want more visibility without the cost of a larger island.',
          'Design tips: put the strongest visual on the corner itself, where both aisles meet. Use the two closed sides for the logo wall, storage and screens, and keep both open sides inviting.',
        ],
      },
      {
        h: 'Peninsula and island stands',
        p: ['A peninsula stand is open on three sides, with one side backing onto another stand. An island stand is open on all four sides, with aisles all around it.'],
        list: [
          'Peninsula pros: strong visibility, a solid back wall for branding, and room for meeting areas.',
          'Island pros: the highest visibility on the floor and complete freedom of layout; visitors can enter from any side.',
          'Cons: larger plots, more surfaces to finish and more to plan. Island stands have no back wall, so storage and meeting rooms must be built into the centre.',
          'Choose them for: launches, larger teams, brands that want to lead their sector at the show.',
          'Design tips: on a peninsula, use the back wall for the main logo and screen. On an island, use a central core for storage and meetings, and hanging or raised branding visible from every direction where the organiser allows it. Plan several entrances and avoid closing any side with long walls.',
        ],
      },
      {
        h: 'Custom, modular or double-deck',
        p: ['Once you know the shape, choose how the stand is built:'],
        list: [
          'Custom: built in timber and finishes to your design. Full freedom of shape, materials and detail; takes more design and workshop time. Best when the stand is a central part of your brand at the show.',
          'Modular: reusable frames and panels with custom graphics and finishes. Faster to build and easier to reuse across shows and plot sizes, with some limits on shape. Best for regular exhibitors and tighter timelines.',
          'Double-deck: a stand with an upper floor for meetings or hospitality. Adds space without a larger plot, but needs structural design, organiser approval and longer build-up. Best for large island or peninsula plots with heavy meeting schedules.',
        ],
        after: ['Many stands mix approaches, for example a modular base with a custom reception counter and logo wall. Our [cost guide](@exhibition-stand-cost-guide) explains how each choice affects the budget.'],
      },
      {
        h: 'Details that work on every type',
        list: [
          'Logo: high and unobstructed, visible from the aisle above people’s heads.',
          'Screens: at eye level facing the main traffic flow, with content that works without sound. See [lighting, sound and LED screens](@lighting-sound-led-screens).',
          'Graphics: one clear message per wall rather than many small ones. More on [printing and acrylic](@printing-acrylic).',
          'Entrances: open and free of steps where possible; raised floors need a ramp or a gentle edge.',
          'Storage: a small lockable store keeps stock and bags out of sight.',
          'Lighting: light the products and the logo, not only the ceiling.',
        ],
      },
      {
        h: 'See your stand before you build it',
        p: [
          'The easiest way to choose is to see the options on your actual plot. [Design it in 3D](#planner) with our free stand planner: set the size and open sides, place walls, screens and furniture, and send the result with your quote request. Or [book a consultation call](#book) and we will suggest the best format for your goals.',
          'We design and build all stand types as part of our [exhibition stands](@exhibition-stands) service, for shows in [Riyadh](@exhibition-stands-riyadh) and across the Kingdom. Planning ahead? Our [exhibition checklist](@exhibition-checklist) covers what to do from 90 days out.',
        ],
      },
    ],
    faq: [
      { q: 'Which stand type gets the most visitors?', a: 'More open sides mean more visibility, so island and peninsula stands usually see the most passing traffic. Location, design and staff matter as much as the format.' },
      { q: 'Can I choose the number of open sides?', a: 'It depends on the plots the organiser offers on the floor plan. Ask when you book, as corner and island plots are often requested early.' },
      { q: 'Do I need approval for a double-deck stand?', a: 'Usually, yes. Organisers normally require structural drawings and approval for upper floors and tall structures. Check the exhibitor manual for the rules.' },
      { q: 'Can a modular stand look custom?', a: 'Yes. With custom graphics, finishes, counters and lighting, a modular base can carry your brand well while staying reusable.' },
      { q: 'How do I see which type suits my plot?', a: 'Use the 3D stand planner on our home page to try your plot size and open sides, or book a call and we will advise.' },
    ],
  },
};
