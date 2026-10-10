import type { Copy } from './landing';

// English copy for the venue pages. Same rules as the other landing copy:
// no clients, past projects, awards, accreditations, capacities, hall sizes, prices or years
// beyond the verified venue facts. Rules that vary by show are attributed to the organiser’s exhibitor manual.
export const venuesEn: Record<string, Copy> = {
  'riyadh-front-exhibition-center': {
    name: 'Riyadh Front (RFECC)',
    teaser: 'Stand design and build for shows at Riyadh Front, on Airport Road near King Khalid International Airport.',
    title: 'Exhibition Stands at Riyadh Front (RFECC) | Oxira Events',
    description: 'Exhibition stand design and build at Riyadh Front Exhibition & Conference Center (RFECC): 3D design, fabrication in Riyadh, installation and breakdown.',
    h1: 'Exhibition stands at Riyadh Front Exhibition & Conference Center',
    kicker: 'Venues',
    lead: 'Riyadh Front Exhibition & Conference Center (RFECC) is one of the busiest venues in Riyadh for large trade shows. We design your stand to its plot on the hall plan, fabricate it in our Riyadh workshop, and install it at Riyadh Front ready for opening day, then take it down after close.',
    blocks: [
      {
        h: 'About Riyadh Front for exhibitors',
        p: [
          'Riyadh Front sits on Airport Road, roughly 9 km from King Khalid International Airport. That makes it easy to reach for exhibitors and visitors flying in, and it is one of the venues where Riyadh’s large trade shows regularly take place.',
          'The venue does not set every rule on its own: each show at Riyadh Front has its own organiser, and the organiser’s exhibitor manual sets the height limits, build-up and breakdown hours, power orders, rigging and hanging structures, contractor registration, insurance and the fire-rated materials required. We work from that manual for the specific show you are taking part in.',
        ],
      },
      {
        h: 'What to plan for a stand at Riyadh Front',
        list: [
          'Your stand number and the hall plan, so we design to the real plot and the number of open sides.',
          'The exhibitor manual and its deadlines for stand drawings, power orders and contractor registration.',
          'The build-up and breakdown schedule, which sets when our crew and deliveries can enter the hall.',
          'Traffic on Airport Road at peak times, which we allow for when timing deliveries and crew arrival.',
          'Storage on the stand for stock, brochures and giveaways during the show days.',
        ],
      },
      {
        h: 'What we handle at Riyadh Front',
        p: ['Because Riyadh Front is in our home city, the stand travels a short distance from our workshop to the hall. One team covers the whole project:'],
        list: [
          'A 3D design with materials and lighting, revised with you until sign-off.',
          'Dimensioned drawings for the organiser’s approval when the show requires them.',
          'Fabrication, print and graphics in our Riyadh workshop.',
          '[Lighting and LED screens](@lighting-sound-led-screens), with the power load calculated so you can order the right connection.',
          'Transport, installation and testing before handover, then breakdown and a clear plot after close.',
        ],
      },
      {
        h: 'How to start',
        p: [
          'Send us the show name and your stand number as soon as your space is booked. You can [design your stand in 3D](#planner) on our site and attach it to your request, or [book a call](#book) with our team to go through the plot and the exhibitor manual together.',
          'Before you brief us, the [exhibition checklist](@exhibition-checklist) helps you gather what we need, the [stand cost guide](@exhibition-stand-cost-guide) explains what drives the budget, and the [guide to stand types](@exhibition-stand-types) compares the build options. See also our [exhibition stands](@exhibition-stands) service and our page on stands in [Riyadh](@exhibition-stands-riyadh).',
        ],
      },
    ],
    faq: [
      { q: 'Who builds exhibition stands at Riyadh Front?', a: 'Exhibitors appoint their own stand builder, within the rules in the organiser’s exhibitor manual. We design and build stands for shows at Riyadh Front from our Riyadh workshop, covering design, fabrication, installation and breakdown.' },
      { q: 'How early should I book a stand builder for a show at Riyadh Front?', a: 'As soon as your space is booked. A custom stand needs time for design, the organiser’s approval and fabrication, and the manual sets deadlines for drawings and power orders that come well before build-up.' },
      { q: 'What are the height limits and build-up hours at Riyadh Front?', a: 'They are set per show in the organiser’s exhibitor manual, not by one fixed venue rule. Send us the manual and we design and schedule the build to match it.' },
      { q: 'Can you supply LED screens and lighting for my Riyadh Front stand?', a: 'Yes. Lighting and screens are part of the same project, and we calculate the power load so you can order the right connection from the organiser.' },
    ],
  },

  'riyadh-international-convention-center': {
    name: 'Riyadh International (RICEC)',
    teaser: 'Stand design and build for shows and forums at the Riyadh International Convention & Exhibition Center on King Abdullah Road.',
    title: 'Exhibition Stands at RICEC, Riyadh | Oxira Events',
    description: 'Exhibition stand design and build at Riyadh International Convention & Exhibition Center (RICEC): 3D design, fabrication in Riyadh, install and breakdown.',
    h1: 'Exhibition stands at Riyadh International Convention & Exhibition Center',
    kicker: 'Venues',
    lead: 'The Riyadh International Convention & Exhibition Center (RICEC) sits on King Abdullah Road in northern Riyadh, inside the city. It hosts technology, construction, healthcare, food and industrial shows as well as government forums, and we design, build and install stands there from our Riyadh workshop.',
    blocks: [
      {
        h: 'About RICEC for exhibitors',
        p: [
          'Being inside the city on King Abdullah Road, RICEC is close to many company offices in Riyadh, which makes it practical for sales teams who come and go during show days. The mix of events is wide: trade shows in technology, construction, healthcare, food and industry, and government forums where the audience and the tone of the stand differ from a sales-led show.',
          'Each event has its own organiser, and the organiser’s exhibitor manual sets the height limits, build-up and breakdown hours, power orders, rigging, contractor registration, insurance and fire-rated material requirements. We plan the stand around the manual for your specific show.',
        ],
      },
      {
        h: 'What to plan for a stand at RICEC',
        list: [
          'The stand number, hall plan and open sides, so the design fits the real plot.',
          'The manual’s deadlines for stand drawings, power orders and contractor registration.',
          'Delivery and crew access times during build-up, which we confirm with the organiser.',
          'City traffic on King Abdullah Road, which we allow for in the delivery schedule.',
          'For forums and government events, a stand that suits the audience: clear messaging, meeting space and a calmer finish.',
        ],
      },
      {
        h: 'What we handle at RICEC',
        list: [
          'Studying your plot and visitor flow, then a 3D design revised with you until sign-off.',
          'Drawings for the organiser’s approval when the show requires them.',
          'Fabrication, print, acrylic and graphics in our Riyadh workshop.',
          '[Lighting and LED screens](@lighting-sound-led-screens) built into the stand, with the power load calculated.',
          'Transport across the city, installation, testing and handover before opening, then breakdown after close.',
        ],
      },
      {
        h: 'How to start',
        p: [
          'Tell us the show and your stand number once your space is confirmed. [Design your stand in 3D](#planner) on our site, or [book a call](#book) to go through the plot and manual with our team.',
          'The [exhibition checklist](@exhibition-checklist), the [stand cost guide](@exhibition-stand-cost-guide) and the [guide to stand types](@exhibition-stand-types) help you prepare a brief. More on our [exhibition stands](@exhibition-stands) service and on stands in [Riyadh](@exhibition-stands-riyadh).',
        ],
      },
    ],
    faq: [
      { q: 'Who builds exhibition stands at the Riyadh International Convention & Exhibition Center?', a: 'Each exhibitor appoints a stand builder, following the organiser’s exhibitor manual. We design and build stands for shows at RICEC from our Riyadh workshop, from the 3D design to breakdown.' },
      { q: 'How early should I book a stand builder for a show at RICEC?', a: 'As soon as your space is booked. Design, approval and fabrication take time, and the manual’s deadlines for drawings and power orders fall well before the build-up days.' },
      { q: 'Do you build stands for government forums at RICEC?', a: 'Yes. We design stands for forums as well as trade shows, adjusting the layout and finish to the audience and following the organiser’s rules for that event.' },
      { q: 'Where do I find the build rules for my show at RICEC?', a: 'In the organiser’s exhibitor manual, which sets height limits, build-up hours, power, rigging and safety requirements for that show. Send it to us and we work to it.' },
    ],
  },

  'riyadh-exhibition-center-malham': {
    name: 'Malham (RECC)',
    teaser: 'Stand design and build for the large shows at the Riyadh Exhibition & Convention Center in Malham, with logistics planned for the trip north.',
    title: 'Exhibition Stands at Malham (RECC), Riyadh | Oxira Events',
    description: 'Exhibition stand design and build at the Riyadh Exhibition & Convention Center, Malham (RECC): 3D design, fabrication, transport, installation and breakdown.',
    h1: 'Exhibition stands at the Riyadh Exhibition & Convention Center, Malham',
    kicker: 'Venues',
    lead: 'The Riyadh Exhibition & Convention Center in Malham (RECC) lies north of Riyadh, roughly an hour’s drive from the city centre, and is favoured by the largest shows because capacity can be expanded with temporary halls and structures. A stand there needs careful logistics, and we plan transport, crew travel and build-up from our Riyadh workshop.',
    blocks: [
      {
        h: 'About Malham for exhibitors',
        p: [
          'Malham is chosen for the biggest events because organisers can add temporary halls and structures around the permanent buildings. For an exhibitor, that means your stand may sit in a permanent hall or in a temporary one, and the conditions can differ between the two, so it is worth checking which hall your plot is in early.',
          'As at every venue, the organiser’s exhibitor manual sets the height limits, build-up and breakdown hours, power orders, rigging and hanging structures, contractor registration, insurance and fire-rated materials. At large shows these rules and deadlines are often strict, and we work to them from the first drawing.',
        ],
      },
      {
        h: 'Logistics: what to plan for a stand at Malham',
        list: [
          'Travel time: the drive from central Riyadh is roughly an hour, so crew shifts and daily trips are planned around it.',
          'Transport of stand parts: we design the stand in modules that load, travel and assemble efficiently, with a packing list for every piece.',
          'Deliveries: at large shows, vehicle access to the halls is usually scheduled by the organiser, so we book delivery slots in advance.',
          'Build-up planning: the schedule leaves room for traffic and site access queues so the stand is handed over on time.',
          'On-site spares: we bring spare fixings, lamps and graphics, since a trip back to the workshop costs hours.',
        ],
      },
      {
        h: 'What we handle at Malham',
        list: [
          'A 3D design to your plot, revised with you until sign-off, and drawings for the organiser’s approval.',
          'Fabrication, print and graphics in our Riyadh workshop, with the stand pre-assembled where useful so problems are solved before it travels.',
          '[Lighting and LED screens](@lighting-sound-led-screens), with the power load calculated for your order to the organiser.',
          'Transport to Malham, installation, testing and handover before opening.',
          'Support during show days and breakdown within the organiser’s breakdown window.',
        ],
      },
      {
        h: 'How to start',
        p: [
          'For a show at Malham, contact us as soon as your space is booked, since logistics add to the planning time. [Design your stand in 3D](#planner) on our site, or [book a call](#book) to go through the plot, the manual and the delivery schedule.',
          'Use the [exhibition checklist](@exhibition-checklist), the [stand cost guide](@exhibition-stand-cost-guide) and the [guide to stand types](@exhibition-stand-types) to prepare your brief, and see our [exhibition stands](@exhibition-stands) service and stands in [Riyadh](@exhibition-stands-riyadh).',
        ],
      },
    ],
    faq: [
      { q: 'Who builds exhibition stands at the Riyadh Exhibition & Convention Center in Malham?', a: 'Exhibitors appoint their own stand builder under the organiser’s exhibitor manual. We design and build stands for shows at Malham from our Riyadh workshop and plan the transport and installation on site.' },
      { q: 'How early should I book a stand builder for a show at Malham?', a: 'As early as possible once your space is booked. Large shows have strict deadlines for drawings, power orders and delivery slots, and the distance from the city adds to the logistics planning.' },
      { q: 'How far is Malham from Riyadh, and does it affect the cost?', a: 'It is roughly an hour’s drive from the city centre. Transport and crew travel are part of the quote, and we show them as clear lines so you can see what they add.' },
      { q: 'Is my stand in a permanent hall or a temporary one?', a: 'That depends on the show and your plot. Check the hall plan or ask the organiser, then send it to us, as the conditions and rules can differ and we plan the stand around them.' },
    ],
  },

  'jeddah-exhibition-center': {
    name: 'Jeddah (JIECC)',
    teaser: 'Stand design and build for shows at the Jeddah International Exhibition & Convention Center, with transport and crew planned from Riyadh.',
    title: 'Exhibition Stands at JIECC, Jeddah | Oxira Events',
    description: 'Exhibition stand design and build at Jeddah International Exhibition & Convention Center (JIECC): 3D design, fabrication, transport, installation, breakdown.',
    h1: 'Exhibition stands at Jeddah International Exhibition & Convention Center',
    kicker: 'Venues',
    lead: 'The Jeddah International Exhibition & Convention Center (JIECC) is in central Jeddah, near Fakeeh Hospital, Red Sea Mall and Aziz Mall, and hosts trade fairs as well as technology, real estate and medical shows. We design and fabricate your stand in our Riyadh workshop and plan the transport and the crew trip to Jeddah so it reaches the hall ready.',
    blocks: [
      {
        h: 'About JIECC for exhibitors',
        p: [
          'JIECC’s central location near Fakeeh Hospital, Red Sea Mall and Aziz Mall makes it easy for visitors to reach, and the shows it hosts range from general trade fairs to technology, real estate and medical events, each with its own kind of stand.',
          'Each show has its own organiser, and the organiser’s exhibitor manual sets the height limits, build-up and breakdown hours, power orders, rigging, contractor registration, insurance and fire-rated materials. We plan to the manual for your show.',
        ],
      },
      {
        h: 'What to plan for a stand at JIECC',
        list: [
          'Road transport from Riyadh to Jeddah, built into the schedule ahead of the build-up days.',
          'A stand designed in modules that travel safely and assemble quickly, with a packing list for every piece.',
          'Crew travel and accommodation for the build-up, show and breakdown days.',
          'The manual’s deadlines for drawings, power orders and contractor registration.',
          'Delivery access to the venue in central Jeddah, timed with the organiser and around city traffic.',
        ],
      },
      {
        h: 'What we handle at JIECC',
        p: ['We are based in Riyadh, so a Jeddah show is planned as a project in another city:'],
        list: [
          'A 3D design to your plot and drawings for the organiser’s approval.',
          'Fabrication, print and graphics in our Riyadh workshop, with the stand checked before it is packed.',
          '[Lighting and LED screens](@lighting-sound-led-screens), with the power load calculated.',
          'Transport to Jeddah and our installation crew on site until handover.',
          'Breakdown after close and the return of reusable elements if you plan to exhibit again.',
        ],
        after: ['Where it makes more sense to source some items in Jeddah itself, such as rental furniture, we say so in the quote so you know where every line comes from.'],
      },
      {
        h: 'How to start',
        p: [
          'Send us the show and your stand number once your space is booked, as transport adds to the planning time. [Design your stand in 3D](#planner) or [book a call](#book) with our team.',
          'Prepare with the [exhibition checklist](@exhibition-checklist), the [stand cost guide](@exhibition-stand-cost-guide) and the [guide to stand types](@exhibition-stand-types). More on our [exhibition stands](@exhibition-stands) service and stands in [Jeddah](@exhibition-stands-jeddah).',
        ],
      },
    ],
    faq: [
      { q: 'Who builds exhibition stands at the Jeddah International Exhibition & Convention Center?', a: 'Each exhibitor appoints a stand builder under the organiser’s exhibitor manual. We design and fabricate stands in Riyadh for shows at JIECC and plan transport and installation in Jeddah.' },
      { q: 'How early should I book a stand builder for a show at JIECC?', a: 'As soon as your space is booked. Besides design, approval and fabrication, the schedule needs time for road transport from Riyadh before the build-up days.' },
      { q: 'Does building in Jeddah from Riyadh cost more?', a: 'Transport and crew travel are added to the quote as clear lines. Designing the stand in modules keeps transport efficient, and reusable elements can lower the cost of later shows.' },
      { q: 'Where are the height limits and build-up hours for my show at JIECC?', a: 'In the organiser’s exhibitor manual for that show. Send it to us and we design and schedule to it.' },
    ],
  },

  'dhahran-expo': {
    name: 'Dhahran Expo',
    teaser: 'Stand design and build for energy and industrial shows at Dhahran Expo in the Eastern Province, with transport and crew planned from Riyadh.',
    title: 'Exhibition Stands at Dhahran Expo | Oxira Events',
    description: 'Exhibition stand design and build at Dhahran Expo (Dhahran International Exhibition Center) for energy and industrial shows: 3D design, build and installation.',
    h1: 'Exhibition stands at Dhahran Expo',
    kicker: 'Venues',
    lead: 'Dhahran Expo, the Dhahran International Exhibition Center, is on Dhahran Exhibition Road in the Eastern Province and is a regular home for energy and industrial shows. We design and fabricate your stand in our Riyadh workshop and plan the transport and crew trip to Dhahran.',
    blocks: [
      {
        h: 'About Dhahran Expo for exhibitors',
        p: [
          'A 2018 expansion sponsored by Saudi Aramco added a Southern Building with seven multi-purpose halls, so it is worth checking which building and hall your plot is in when you receive the hall plan.',
          'Energy and industrial shows are common at Dhahran Expo, and their stands often need heavy product or equipment displays, technical screens and meeting rooms for detailed discussions. The organiser’s exhibitor manual for each show sets the height limits, build-up and breakdown hours, power orders, rigging, contractor registration, insurance and fire-rated materials.',
        ],
      },
      {
        h: 'What to plan for a stand at Dhahran Expo',
        list: [
          'Road transport from Riyadh to the Eastern Province, scheduled ahead of the build-up days.',
          'A modular stand that travels safely, with a packing list for every piece.',
          'Crew travel and accommodation for build-up, show days and breakdown.',
          'Heavy exhibits: their weight, size and delivery route into the hall, agreed with the organiser.',
          'The manual’s deadlines for drawings, power orders and contractor registration.',
        ],
      },
      {
        h: 'What we handle at Dhahran Expo',
        list: [
          'A 3D design to your plot and drawings for the organiser’s approval.',
          'Fabrication, print and graphics in our Riyadh workshop, including plinths and fixtures sized for your equipment.',
          '[Lighting and LED screens](@lighting-sound-led-screens) for technical content, with the power load calculated.',
          'Transport to Dhahran, installation, testing and handover before opening.',
          'Breakdown after close and storage of reusable elements if you exhibit again.',
        ],
      },
      {
        h: 'How to start',
        p: [
          'Send us the show and your stand number once your space is booked. [Design your stand in 3D](#planner) or [book a call](#book) with our team.',
          'Prepare with the [exhibition checklist](@exhibition-checklist), the [stand cost guide](@exhibition-stand-cost-guide) and the [guide to stand types](@exhibition-stand-types). See also our [exhibition stands](@exhibition-stands) service and stands in the [Eastern Province](@exhibition-stands-eastern-province).',
        ],
      },
    ],
    faq: [
      { q: 'Who builds exhibition stands at Dhahran Expo?', a: 'Exhibitors appoint their own stand builder under the organiser’s exhibitor manual. We design and fabricate stands in Riyadh for shows at Dhahran Expo and plan transport and installation on site.' },
      { q: 'How early should I book a stand builder for a show at Dhahran Expo?', a: 'As soon as your space is booked. The schedule needs time for design, approval and fabrication, plus road transport to the Eastern Province before build-up.' },
      { q: 'Can you build stands for heavy equipment displays at Dhahran Expo?', a: 'Yes. We design plinths and fixtures for the weight and size of your exhibits and agree the delivery route into the hall with the organiser.' },
      { q: 'Where are the build rules for my show at Dhahran Expo?', a: 'In the organiser’s exhibitor manual for that show, which sets heights, build-up hours, power and safety requirements. Send it to us and we work to it.' },
    ],
  },
};
