import type { Copy, HubCopy } from './landing';

// English copy for the service and region pages. Same rules as the Arabic copy:
// no clients, numbers, prices, awards or years beyond what the rest of the site already states.
const pages: Record<string, Copy> = {
  'exhibition-stands': {
    name: 'Exhibition stand design & build',
    teaser: 'From a 3D design to a finished stand on the show floor: fabrication, print, lighting, installation and breakdown.',
    title: 'Exhibition Stand Builders in Saudi Arabia | Oxira Events',
    description: 'Exhibition stand design and build in Saudi Arabia: 3D design, fabrication, print, lighting and LED screens, on-site installation and breakdown. Request a quote.',
    h1: 'Exhibition stand design and build in Saudi Arabia',
    kicker: 'Exhibition stands',
    lead: 'We design your stand to its real dimensions on the hall plan, fabricate it in our workshop, install it on the show floor and hand it over before doors open, then take it down after close. One team follows every detail from the first sketch to the last day of the show.',
    blocks: [
      {
        h: 'What the service includes',
        p: ['A stand is not just walls and a logo. It is where your sales team works for several days, and it has to catch a visitor in the aisle and give them a reason to step in. That is why we run the whole project instead of splitting it across suppliers:'],
        list: [
          'Studying your plot on the floor plan and how visitors will flow past it.',
          'A realistic 3D design with materials and lighting, revised with you until sign-off.',
          'Dimensioned drawings for the organiser’s approval when they are required.',
          'Fabrication of the structure, finishes and custom furniture such as reception counters, shelving, meeting rooms and storage.',
          'Print, graphics, raised lettering and acrylic work.',
          'Lighting, LED screens and sound where needed.',
          'Transport and installation, with power and screens tested before handover.',
          'Support during the show, then breakdown and a clear plot.',
        ],
      },
      {
        h: 'Stand types and build options',
        p: [
          'The shape of a stand starts with how many sides open onto aisles: a row stand with one open side, a corner stand with two, a peninsula with three, or an island open on all four. Each one changes where the logo, screens and entrances go, and we plan for it from the first drawing.',
          'For the build there are three main routes: a fully custom stand built in timber and finished to your brand, an upgraded modular system using reusable frames with custom graphics and finishes, or a double-deck stand when you need extra meeting space without a bigger footprint. We explain what each option means for budget and timing before you choose.',
        ],
      },
      {
        h: 'Materials and finishes',
        p: ['We choose materials for the stand and how long it needs to last: painted or laminate-clad timber panels for walls and counters, printed tension fabric that can be backlit for large backdrops, acrylic and raised lettering for logos, and raised flooring in carpet, parquet or vinyl. If you exhibit several times a year, we suggest elements that can be stored and reused to bring down the cost of later shows.'],
      },
      {
        h: 'Process and typical timing',
        p: ['The work runs in five stages: brief and plot, 3D design and revisions, fabrication in the workshop, installation during the build-up days set by the organiser, and finally show days and breakdown. Timing depends on size and how custom the stand is; a modular stand needs less time, while a large custom or double-deck stand needs longer for design, approvals and fabrication. Contact us as soon as your space is booked; the earlier we start, the more options you keep.'],
      },
      {
        h: 'What we need from you',
        list: [
          'Show name and dates, and the hall plan or stand number if you have them.',
          'Stand size and the number of open sides.',
          'Brand assets: a high-resolution logo, colours and typefaces.',
          'What the stand has to hold: products, screens, a meeting area, storage.',
          'A rough budget if you have one, so we can propose what fits it.',
          'The organiser’s exhibitor manual, which sets height limits, build-up and breakdown times and safety rules.',
        ],
        after: ['You can start right now: [sketch your stand in 3D](#planner) on our site and attach it to your quote request, or [book a 30-minute consultation call](#book) with our team.'],
      },
      {
        h: 'Why one team',
        p: ['When the same team designs, fabricates, prints, lights and installs, one party owns the result and nothing falls between suppliers. Our [portfolio](#work) shows stands we built for brands in industry, food, retail and energy, and we serve shows in [Riyadh](@exhibition-stands-riyadh), [Jeddah](@exhibition-stands-jeddah) and the [Eastern Province](@exhibition-stands-eastern-province).'],
      },
    ],
    faq: [
      { q: 'How much does an exhibition stand cost?', a: 'It depends on size, build type, materials, screens, furniture and the city of the show. We send a detailed quote once we have your plot and brief, and you can outline what you need with the stand planner on our home page.' },
      { q: 'How early should I start before the show?', a: 'As soon as your space is booked. Large custom stands need more time for design, approval and fabrication, and our show alerts remind you two months and three weeks before the shows in your sector.' },
      { q: 'Do you offer design only or build only?', a: 'Our core service is design and build together. If you already have a design, we can review the dimensions and materials and build it.' },
      { q: 'Do you handle the organiser’s approvals?', a: 'We prepare the drawings and technical details organisers usually ask for to approve a stand, and we follow the exhibitor manual on heights, build-up times and safety.' },
      { q: 'Can the stand be reused at another show?', a: 'Often, yes, especially with modular systems and elements designed for storage. Tell us about your show plan for the year and we will design around it.' },
    ],
  },

  'conference-stages': {
    name: 'Conference stages & event production',
    teaser: 'Stages, printed or LED backdrops, lighting, sound and lecterns, installed and run on the day.',
    title: 'Conference Stage & Event Production | Oxira Events',
    description: 'Conference stage and event production in Saudi Arabia: stages, printed or LED backdrops, lighting, sound and lecterns, installed and run on the day.',
    h1: 'Conference stage and event production',
    kicker: 'Conferences and events',
    lead: 'The stage is what the room looks at all day, and what appears in every photo and clip afterwards. We design the stage and backdrop, supply the platform, lighting, sound and screens, and install and test everything before the audience walks in.',
    blocks: [
      {
        h: 'What a stage package includes',
        list: [
          'Stage and backdrop design in the event identity, with a 3D view before build.',
          'A stage platform at the right height and size for the room, with steps or a ramp.',
          'A printed backdrop, an LED wall, or a mix of both.',
          'Lectern, panel tables and seating for discussions.',
          'Stage and room lighting suited to photography and filming.',
          'Sound system, microphones and confidence monitors for speakers where needed.',
          'Wayfinding, registration signage and photo walls at the entrance.',
          'Installation, testing, operation during the event and breakdown afterwards.',
        ],
      },
      {
        h: 'From large conferences to launches',
        p: ['We work on different kinds of events: multi-session conferences and forums, launches and product reveals, award ceremonies, annual company meetings, and stages inside exhibitions. Each has its own needs. A conference needs clear sightlines to speakers and slides and steady sound for hours; a launch needs a reveal moment and deliberate lighting; a stage on a show floor has to draw people in from the aisles without disturbing the neighbouring stands.'],
      },
      {
        h: 'Printed backdrop or LED wall?',
        p: ['A printed backdrop is economical and clear when the content is fixed: event logo, sponsors, title. An LED wall lets you show slides, video and speaker names and change content between sessions, but it needs content built to the real screen size. Many events combine the two: a screen in the centre with printed wings. We help you choose based on room size, viewing distance and budget, and our [media production](@media-production) team can prepare the screen content.'],
      },
      {
        h: "Planning the stage around the room",
        p: ["Before we design, we settle three things: a platform height that lets the back rows see the speaker, a stage width that fits the number of panellists, and a screen position that the platform or columns will not block. Then we plan how speakers get on and off stage, where the sound and lighting desk sits, and where cameras go if the event is being filmed. These small details are what make an event run smoothly in front of an audience."],
      },
      {
        h: 'Working with the venue or hotel',
        p: ['Most venues and hotels have rules on load-in and build times, rigging loads, power points and fire-safe materials. We ask for the venue schedule and floor plan up front, agree access times with the venue team, and plan the build so the stage is ready for a speaker rehearsal before opening.'],
      },
      {
        h: 'What we need from you',
        list: [
          'Venue, room name and dimensions or floor plan.',
          'Event date and the time available for build-up and breakdown.',
          'Expected audience size and seating layout.',
          'Running order: speeches, panels, presentations, awards.',
          'Event identity and sponsor logos, if any.',
          'Whether you need filming or a live stream, so we can light for it.',
        ],
      },
      {
        h: 'Timing',
        p: ['Lead time depends on stage size, backdrop type and the build window the venue allows. Simple stages can be turned around quickly; large stages with screens and custom structures need longer for design and fabrication. Send the details early and we will confirm a realistic schedule, and complete the event with [awards and plaques](@promotional-giveaways) and [lighting, sound and screens](@lighting-sound-led-screens).'],
      },
    ],
    faq: [
      { q: 'Do you supply the screens, lighting and sound with the stage?', a: 'Yes, as part of the same project, so design, technical equipment and installation sit with one team.' },
      { q: 'Do you build stages inside exhibitions?', a: 'Yes. We design stages and presentation areas within exhibition stands or in the session areas that shows set aside.' },
      { q: 'Can you set up in a hotel ballroom?', a: 'Yes. We coordinate build times and the room’s requirements for power, rigging and safety with the hotel.' },
      { q: 'Do you film the event?', a: 'Yes, we offer photography and video. If you need a live stream, tell us early so we plan lighting and sound for it and spell out what the quote includes.' },
      { q: 'Do you make awards for speakers and sponsors?', a: 'Yes. We design and produce plaques with names and citations and deliver them before the ceremony.' },
      { q: "How much space does the stage need?", a: "It depends on the room size, the number of speakers per session and whether there is a screen. We recommend dimensions once we see the floor plan and the running order." },
    ],
  },

  'lighting-sound-led-screens': {
    name: 'Lighting, sound & LED screens',
    teaser: 'LED walls sized to your content, architectural stand lighting, and sound for stages and halls.',
    title: 'LED Screens, Lighting & Sound for Events | Oxira Events',
    description: 'LED screens sized to your content, architectural stand lighting and sound systems for stages and halls in Saudi Arabia, installed and run on site.',
    h1: 'LED screens, lighting and sound for exhibitions and events',
    kicker: 'Technical production',
    lead: 'Good lighting is the difference between a stand you notice from the end of the aisle and one visitors walk straight past. We supply lighting, LED screens and sound for exhibition stands, stages and halls, and install and run them with our own crew.',
    blocks: [
      {
        h: 'LED screens sized to the content',
        p: [
          'We start from the content and the viewing distance, not from a stock size. A screen on a stand is seen up close and needs a finer resolution; an LED wall behind a conference stage is seen from the back of the room. We agree the width, height and mounting with you: built into a stand wall, flown, on a floor frame, or display screens for smaller presentations and interactive points.',
          'We then send you the content specification, sizes and resolution, so video and logos show without stretching or cropping. Our [media production](@media-production) team can also make the content itself.',
        ],
      },
      {
        h: 'Stand and stage lighting',
        p: ['Stand lighting is different from the hall’s general lighting. We use spotlights on products, backlighting for logos and tension-fabric graphics, and concealed LED strips in ceilings and floors that define the shape of the stand. On stage we balance key light on speakers with backdrop lighting and effects, and we light for the camera so photos and video come out in true colour.'],
      },
      {
        h: 'Sound systems',
        p: ['For stages and conference rooms we provide sound that covers the room clearly, microphones for the lectern and panels, and a mixing desk with a sound technician during the event. On exhibition stands we keep sound within the stand and within the organiser’s limits, since most shows cap sound levels to protect neighbouring stands.'],
      },
      {
        h: "Typical set-ups",
        list: [
          "On an exhibition stand: a main screen playing the company film on a stand wall, smaller screens beside products explaining each one, and a backlit logo readable from a distance.",
          "At a conference: an LED wall behind the stage, side screens for the back rows, and sound with microphones for panel sessions.",
          "At a launch: theatrical lighting and effects for the reveal, and strong sound for music and the opening film.",
          "In a showroom or internal event: lighting that brings out products and screens for presentations.",
        ],
      },
      {
        h: 'Power and safety',
        p: ['Screens and lighting need a power plan. We calculate the load so you can order the right power connection from the organiser or venue, run cables safely and out of sight, and test everything before handover. Where we fly structures, we follow the venue’s rigging rules.'],
      },
      {
        h: 'How we work',
        list: [
          'We take the stand plan or room layout and the running order.',
          'We propose lighting, screens and sound as part of the 3D design.',
          'We confirm specifications, content and installation times.',
          'We install and test before opening, and our technical crew stays available during the event as agreed.',
          'We de-rig after the event.',
        ],
      },
      {
        h: 'What we need from you',
        list: [
          'Event type, venue and date.',
          'Stand plan or room dimensions.',
          'The content you want to show and how long it runs.',
          'Whether screens will carry speaker slides, video or a stream.',
          'Any requirements from the organiser or venue.',
        ],
        after: ['This equipment is a core part of our [exhibition stand design and build](@exhibition-stands) and [conference stage production](@conference-stages), and can also be ordered on its own.'],
      },
    ],
    faq: [
      { q: 'Can I order screens and lighting without a stand build?', a: 'Yes. Lighting, sound and screens can be ordered on their own for your event or stand, or as part of a full design-and-build project.' },
      { q: 'What size LED screen does my stand need?', a: 'It depends on the content, viewing distance and wall space. We recommend a size and resolution once we see the stand plan and what you plan to show.' },
      { q: 'Is a technician on site during the event?', a: 'We agree this in the quote. For stages and conferences a sound and lighting technician is normally present throughout; on exhibition stands we provide support as needed during the show.' },
      { q: 'Who prepares the screen content?', a: 'You can send finished content to the specification we give you, or our media production team can make it at the screen’s actual size.' },
      { q: 'Do you follow the show’s power rules?', a: 'Yes. We calculate the load, help you order the right connection from the organiser, and follow safety rules for cabling and rigging.' },
      { q: "Can screen content be changed during the show?", a: "Yes. We agree how content is played and updated, either from a player on the stand or with new files you send us during the show." },
    ],
  },

  'printing-acrylic': {
    name: 'Printing, signage & acrylic',
    teaser: 'Stand graphics, lightboxes, raised lettering, acrylic displays and event print.',
    title: 'Exhibition Printing, Signage & Acrylic | Oxira Events',
    description: 'Exhibition stand graphics and backdrops, lightboxes and raised lettering, acrylic displays, roll-ups and event print in Saudi Arabia, made to be seen up close.',
    h1: 'Exhibition printing, signage and acrylic work',
    kicker: 'Print and signage',
    lead: 'At a show, visitors stand a few steps from your stand wall and see every flaw in the print or the fitting. We print and fit stand graphics, signage and acrylic to a standard that holds up to close viewing and strong light.',
    blocks: [
      {
        h: 'What we print and make',
        list: [
          'Stand backdrops and wall graphics on vinyl or fabric.',
          'Backlit tension-fabric lightboxes.',
          'Raised and 3D lettering, illuminated or not.',
          'Logos cut from acrylic, foam board or timber.',
          'Acrylic stands and holders for products and brochures.',
          'Roll-ups, banners, wayfinding and registration signage.',
          'Photo walls and stage backdrops.',
          'Paper print for the show: brochures, catalogues and business cards.',
        ],
      },
      {
        h: 'Choosing the right material',
        p: ['Every surface has its material. Self-adhesive vinyl suits smooth walls and glass; printed fabric is light, easy to ship, gives deep colour without glare, and can be backlit. Acrylic gives a clean finish for logos and holders and comes clear, coloured or frosted. Raised letters give a logo presence from across the hall, especially when lit. We recommend materials based on where the piece sits, how long it needs to last and whether it will travel to more shows.'],
      },
      {
        h: 'Colour and brand',
        p: ['Brand colours do not come out the same on every material. We ask for your original brand files and colour references, match them as closely as the material allows, and check samples of key pieces with you before the final run. We also flag images or logos whose resolution is too low for large sizes.'],
      },
      {
        h: 'Preparing files',
        p: ['For large-format print, vector files (AI, PDF, EPS or SVG) are best for logos and text, with high-resolution images for the final size. If you do not have print-ready files, our design team lays out the graphics at the real size of every wall and panel as part of the stand design and sends you a final proof before printing.'],
      },
      {
        h: "Conference and event print",
        p: ["Beyond exhibition stands, we produce full conference print: welcome and wayfinding signs from the entrance to the hall, the registration backdrop, speaker name cards, sponsor boards and photo walls. We design them in the event identity so every piece feels part of one experience, and agree placement with the organiser so guests find their way without asking."],
      },
      {
        h: 'As part of a stand, or on its own',
        p: ['Print and acrylic can be part of a full [stand design and build](@exhibition-stands), or ordered on their own when you already have a stand structure and want new graphics, or need print for a conference or internal event. Either way we install on site, so panels go up straight and clean without bubbles or visible seams.'],
      },
      {
        h: 'Timing and what we need',
        p: ['Simple print needs a short lead time after files are approved; illuminated lettering and custom acrylic need longer to fabricate. Send us:'],
        list: [
          'A list of pieces and sizes, or the stand plan.',
          'Brand files and logos in vector format.',
          'Copy and images.',
          'Delivery date and installation location.',
        ],
        after: ['To keep your presence consistent, we can put the same identity on your [promotional giveaways](@promotional-giveaways) and [stage backdrops](@conference-stages).'],
      },
    ],
    faq: [
      { q: 'What file format should our logo be in?', a: 'A vector file in AI, PDF, EPS or SVG is best. Small PNG or JPG files usually are not enough for large sizes, and we will tell you if a file needs rebuilding.' },
      { q: 'Do you install the graphics at the venue?', a: 'Yes. We install graphics, panels and raised lettering on site within the build-up times set by the organiser.' },
      { q: 'Can fabric graphics be reused?', a: 'Yes. Tension fabric can be removed, folded, stored and refitted to the same frame at a later show, as long as it is stored properly.' },
      { q: 'We do not have a designer. Can you lay out the artwork?', a: 'Yes. Our design team prepares the artwork at real size from your brand identity and sends it for approval before printing.' },
      { q: "Can you print very large backdrops?", a: "Yes. Large backdrops are printed in panels that are fitted precisely to read as one piece, or on tension fabric, which allows large sizes with fewer seams." },
      { q: "Do you make signage and lettering for offices and showrooms?", a: "Yes. We make raised lettering, signs and acrylic work for offices and permanent showrooms, as part of our interior design and workspace service or on its own." },
    ],
  },

  'promotional-giveaways': {
    name: 'Promotional giveaways & awards',
    teaser: 'Branded gifts for visitors and partners, and plaques for speakers and sponsors.',
    title: 'Promotional Giveaways & Corporate Awards | Oxira Events',
    description: 'Branded giveaways for exhibition visitors and partners, and award plaques for speakers and sponsors, designed, printed, packed and delivered in Saudi Arabia.',
    h1: 'Promotional giveaways and awards for exhibitions and events',
    kicker: 'Giveaways and awards',
    lead: 'A good giveaway stays on a visitor’s desk long after the show and keeps your brand in view. We help you choose gifts that suit your audience and budget, brand them, and make award plaques for speakers, sponsors and staff.',
    blocks: [
      {
        h: 'Types of promotional gifts',
        p: ['The right gift depends on who it is for and what it should do:'],
        list: [
          'High-volume items for stand visitors, such as pens, notebooks, tote bags, water bottles and keyrings.',
          'Gifts for key clients and partners, such as desk sets, tech accessories and custom gift boxes.',
          'Event essentials, such as badges and lanyards, conference bags and branded uniforms for stand staff.',
          'Seasonal and national-day gifts that companies give staff and clients.',
        ],
        after: ['These are common examples; we suggest specific options once we know your audience, quantities and budget.'],
      },
      {
        h: "Questions that help you choose",
        list: [
          "Who receives the gift: a passing visitor, a prospect, or an existing partner?",
          "Will it be used daily, or kept as a memento?",
          "Does it suit your business? A tech gift for a tech company, or a refined desk item for a consultancy, for example.",
          "Is it easy to carry around the show? Visitors walk past many stands and do not want anything heavy.",
          "Does the budget work at the quantity you need without sacrificing quality?",
        ],
      },
      {
        h: "Corporate gifts beyond exhibitions",
        p: ["Gifts are not only for shows. Companies also order them for annual meetings, staff recognition, onboarding new employees, national days and Eid. For these occasions we prepare gifts in your identity with packaging that suits the occasion, and gift cards where needed."],
      },
      {
        h: 'Award plaques and trophies',
        p: ['At conferences and award ceremonies the plaque is part of the picture. We design plaques in acrylic, crystal, timber or metal, or a combination, with the name, logo and citation engraved or printed, and suitable presentation boxes. We check names and titles with your team before production, because a misspelt name cannot be fixed on stage.'],
      },
      {
        h: 'Branding methods',
        p: ['We brand each product with the method that suits it: screen printing, laser engraving, digital print, or embroidery for apparel and bags. We make sure the logo is clear without covering the whole item; an elegant gift with a small logo often gets used more than one crowded with text. We also consider the product colour: a dark logo needs a light version on a dark item, and we show this in the mock-up before production.'],
      },
      {
        h: 'Tying gifts to the stand plan',
        p: ['Giveaways work best as part of the plan for the show: a simple gift for every visitor, a better one for people who leave their details or attend a demo, and something special for key-client meetings. We design display and storage for gifts inside [your stand](@exhibition-stands) and deliver to the venue or your office.'],
      },
      {
        h: 'Timing and what we need',
        p: ['Lead time depends on the product, quantity and branding method, and some custom items take longer to source. Order gifts when you start preparing the stand, not in the final week. We need:'],
        list: [
          'Target audience and quantity per group.',
          'Approximate budget per item or for the whole order.',
          'Logo in vector format and brand colours.',
          'Names and citations for any plaques.',
          'Delivery date and address.',
        ],
        after: ['For award events, we can also handle the [stage and backdrop](@conference-stages) and [photography](@media-production).'],
      },
    ],
    faq: [
      { q: 'Can we see the branded item before production?', a: 'We send a digital mock-up of your logo on the product for approval, and a physical sample when the product and timeline allow.' },
      { q: 'Can we order giveaways without a stand?', a: 'Yes. Promotional gifts and awards can be ordered on their own for any event or occasion.' },
      { q: 'Is there a minimum quantity?', a: 'It varies by product and branding method. Tell us the quantity you need and we will suggest suitable products.' },
      { q: 'Do you pack and deliver?', a: 'Yes. We pack gifts and plaques appropriately and deliver to the event venue or your office.' },
      { q: "Can each gift be personalised with a name?", a: "On many products, yes, for example laser-engraved names on pens, plaques or boxes. It needs an approved list of names and extra time." },
      { q: "Do you supply uniforms for stand staff?", a: "Yes. We supply shirts, caps and similar items printed or embroidered with your logo; we need the quantity per size and the delivery date." },
    ],
  },

  'media-production': {
    name: 'Photography & media production',
    teaser: 'Event photography and video, corporate and documentary films, and screen content.',
    title: 'Event Photography & Media Production | Oxira Events',
    description: 'Photography and video for exhibitions and conferences, corporate and documentary films, and content for stand and stage screens in Saudi Arabia.',
    h1: 'Event photography and media production',
    kicker: 'Media production',
    lead: 'An event ends in days, but its photos and films are used for months on your website, social channels and presentations. We film and photograph your event and produce corporate films and screen content, so your presence looks its best.',
    blocks: [
      {
        h: 'What we offer',
        list: [
          'Photography of the stand, stage, guests and sessions.',
          'Event video with a short edited highlight afterwards.',
          'Short clips sized for social media.',
          'Corporate and product films.',
          'Documentary films for projects and initiatives.',
          'Content for LED screens on stands or behind stages: video, motion graphics and slides.',
          'Photos of the finished stand before visitors arrive, for your portfolio.',
        ],
      },
      {
        h: 'Before the event: screen content',
        p: ['Stand and stage screens need content made at their real proportions. We design to the actual screen size and set the length and pace of each loop so it reads in seconds from the aisle without relying on sound, because show floors are loud. When screens are part of a [lighting, sound and LED screens](@lighting-sound-led-screens) package, we align content with the spec from the start.'],
      },
      {
        h: 'During the event',
        p: ['Before the event we agree a clear shot list with you: the full stand, products, official visits, speakers, awards and the audience. We mark the key moments in the programme so nothing like the opening or a VIP visit is missed. At conferences we position cameras so they do not block the audience’s view. The photographer works with your stand team, so they know who the key guests are and when presentations start, and do not miss a moment that matters to you.'],
      },
      {
        h: "Tips for better photos of your stand",
        list: [
          "Shoot the stand just before visitors arrive, with lighting on and the floor clean.",
          "Plan for crowd shots at peak times; they show the energy of your presence.",
          "Keep the logo visible in guest photos without turning every frame into an advert.",
          "Agree in advance who approves photos for publishing, especially for official visits.",
          "Film short interviews with your team or clients, with their consent; they are among the most reused content after an event.",
        ],
      },
      {
        h: "Covering multi-session conferences",
        p: ["At conferences we can record speeches in full for later publishing or the organiser’s archive, taking audio straight from the venue sound system for better clarity than a camera microphone. We also cover the audience, side sessions and the accompanying exhibition, so your communications team has enough material for reports and posts, and we name files by session and speaker so they are easy to find."],
      },
      {
        h: 'After the event',
        p: ['We deliver a colour-corrected selection of photos, a highlight video and short clips for posting. A quick selection for posting during the event itself can be arranged if agreed in advance. The material stays useful for your portfolio, reports and the design of your next show.'],
      },
      {
        h: 'Corporate and documentary films',
        p: ['Beyond exhibitions, we produce corporate and product films and project documentaries. A film goes through concept and script, filming, editing with voice-over and music, then review and delivery. We prepare cut-downs in different lengths and formats for your website, shows and social media.'],
      },
      {
        h: 'What we need from you',
        list: [
          'Event type, venue and duration.',
          'The moments and people that matter most.',
          'Where the content will be used: website, social media, internal presentations.',
          'Brand identity and any material you already have.',
          'Any filming permits or rules set by the venue.',
        ],
        after: ['Media can be booked with a [stand build](@exhibition-stands) or [stage production](@conference-stages), or on its own.'],
      },
    ],
    faq: [
      { q: 'Will you photograph a stand someone else built?', a: 'Yes. Photography and media production can be booked on their own for any stand or event.' },
      { q: 'When do we receive the photos and video?', a: 'We agree delivery in the quote based on the coverage, and can arrange a quick selection of photos during the event for posting.' },
      { q: 'Do you produce content in Arabic and English?', a: 'Yes. On-screen text and titles can be in the language you need, or in both.' },
      { q: 'Do we need a permit to film at the show?', a: 'Some venues and shows require the crew to be registered or approved in advance, and we help you prepare what the venue asks for.' },
      { q: "Can you prepare a clip for posting on the day?", a: "Yes, if agreed in advance. We can prepare a short clip or a selection of photos for posting during the event days." },
    ],
  },

  'exhibition-stands-riyadh': {
    name: 'Riyadh',
    teaser: 'We are based in Riyadh, close to the city’s main exhibition centres and their schedules.',
    title: 'Exhibition Stand Builders in Riyadh | Oxira Events',
    description: 'Exhibition stand design and build by a Riyadh-based team, at RICEC, Riyadh Front Exhibition & Conference Center and the Malham exhibition centre.',
    h1: 'Exhibition stand design and build in Riyadh',
    kicker: 'Riyadh',
    lead: 'We are based in Riyadh, where most of the Kingdom’s major exhibitions take place. That puts our design team, workshop and installation crew close to the halls, working with the city’s venues and their schedules season after season.',
    blocks: [
      {
        h: 'Riyadh’s main exhibition centres',
        p: ['Riyadh’s shows are spread across several venues, each with its own spaces, access and build-up rules:'],
        list: [
          'Riyadh International Convention & Exhibition Center (RICEC): inside the city, home to trade shows such as Saudi Agriculture, Saudi Build and Saudi Elenex.',
          'Riyadh Front Exhibition & Conference Center (RFECC): near the King Khalid International Airport road, hosting shows such as Automechanika Riyadh, Beautyworld Saudi Arabia and the Hotel & Hospitality Expo.',
          'Riyadh Exhibition and Convention Center, Malham: north of Riyadh, hosting major events such as LEAP, Cityscape Global, Black Hat MEA and the Global Health Exhibition.',
        ],
        after: ['Show names, dates and venues change from year to year, so we always work from the organiser’s exhibitor manual. Our [upcoming shows calendar](#calendar) on the home page links to each show’s official site.'],
      },
      {
        h: 'What a Riyadh-based team means for you',
        list: [
          'Design and sample reviews face to face, at your office or ours.',
          'Fabrication in our workshop and a short run to the hall, instead of shipping from another city.',
          'Easier follow-up on changes or extra pieces during build-up.',
          'You can [book a call or a visit to our office](#book) in Al Sulaymaniyah on Al Urubah Road.',
        ],
      },
      {
        h: 'Build-up logistics in Riyadh',
        p: [
          'Riyadh’s venues run shows back to back through the season, and build-up windows are short and tightly scheduled. Organisers usually ask for contractor registration and stand drawings well before move-in, and set strict truck access times and working hours in the hall. We plan fabrication so pieces arrive as finished as possible, leaving assembly, finishing and electrical connections for the hall, with time to test screens and lighting before handover.',
          'Malham sits outside the city to the north, so we plan transport and crew timings there more carefully than for venues inside Riyadh.',
        ],
      },
      {
        h: 'Seasons and planning ahead',
        p: ['Riyadh’s show season is busiest through autumn, winter and spring, and several major shows can fall in the same weeks, which stretches workshops, crews and screen equipment. Contact us as soon as your space is booked. You can also [subscribe to alerts for your sector](#calendar) and get a reminder two months and three weeks before each show.'],
      },
      {
        h: 'Our services for Riyadh shows and events',
        p: ['Alongside [stand design and build](@exhibition-stands), we produce [conference stages](@conference-stages) in Riyadh hotels and venues and provide [lighting, sound and LED screens](@lighting-sound-led-screens), [printing and acrylic](@printing-acrylic), [giveaways and awards](@promotional-giveaways) and [photography and media](@media-production). If you also exhibit elsewhere, we serve [Jeddah](@exhibition-stands-jeddah) and the [Eastern Province](@exhibition-stands-eastern-province).'],
      },
    ],
    faq: [
      { q: 'Where is your office in Riyadh?', a: '426 Al Sulaymaniyah, Al Urubah Rd., Riyadh. You can book an office visit or a consultation call from our home page.' },
      { q: 'Do you work at all of Riyadh’s exhibition centres?', a: 'We design and build stands at exhibition and convention centres and hotel venues across Riyadh, following each show’s exhibitor manual.' },
      { q: 'How early should I contact you before a Riyadh show?', a: 'As soon as your space is booked. In peak season many shows overlap, and starting early gives you more design time and wider choice of materials and equipment.' },
      { q: 'Can you help us find upcoming shows in our sector?', a: 'Yes. The calendar on our site lists the main upcoming shows in Saudi Arabia by sector with links to their official sites, and you can subscribe to alerts for your sector.' },
      { q: "Do you set up conferences and events in Riyadh hotels?", a: "Yes. We provide stages, backdrops, lighting, sound and screens for conferences and launches in Riyadh hotel and conference venues, and coordinate build times with the venue." },
    ],
  },

  'exhibition-stands-jeddah': {
    name: 'Jeddah',
    teaser: 'Stands for Jeddah shows, with transport and installation planned so the stand arrives on time.',
    title: 'Exhibition Stand Builders in Jeddah | Oxira Events',
    description: 'Exhibition stand design and build in Jeddah for shows such as Foodex Saudi and Jeddah Construct: 3D design, fabrication, transport and on-site installation.',
    h1: 'Exhibition stand design and build in Jeddah',
    kicker: 'Jeddah',
    lead: 'Jeddah is the Kingdom’s gateway on the Red Sea and a major trading hub for food, retail, construction and logistics. We design and fabricate stands for Jeddah shows and plan transport and installation so the stand reaches the hall ready, on schedule.',
    blocks: [
      {
        h: 'Shows and venues in Jeddah',
        p: [
          'Jeddah hosts trade shows that draw exhibitors from inside and outside the Kingdom, including Foodex Saudi for food and beverage and Jeddah Construct for construction, both at the Jeddah International Exhibition & Convention Center (JIECC). The city also holds large events at venues such as the Jeddah Superdome, plus forums and launches in hotel and conference venues.',
          'Upcoming Jeddah dates are in the [shows calendar](#calendar) on our home page.',
        ],
      },
      {
        h: 'Building in another city: how we plan it',
        p: [
          'Delivering a stand in Jeddah from a Riyadh-based team takes different planning from a local show. We design the stand to be built in modules that travel and assemble quickly, and keep a detailed packing list for every piece so nothing is missing in the hall. The schedule includes road transport between the two cities, and our installation crew stays on site until handover.',
          'Where it makes more sense to source some items in Jeddah itself, such as rental furniture or some print, we say so in the quote so you know where every line comes from.',
        ],
      },
      {
        h: 'What Jeddah shows need',
        p: ['Food and beverage is strongly represented at Jeddah shows, and those stands often need display fridges, tasting areas and stock storage, with finishes that are easy to clean. We plan visitor flow around tasting areas and the position of power and water where the show provides them. Building-materials stands depend on showing samples at full size, so we design walls and fixtures that carry the weight and light the samples properly.'],
      },
      {
        h: "Transport and packing",
        p: ["The distance between Riyadh and Jeddah means the stand spends many hours on the road before it is built. So we wrap painted surfaces, acrylic and print carefully, number every piece in build order, and load the truck so the first pieces needed come off first. We carry spares of the parts most likely to be damaged, so work in the hall never stops over a single piece."],
      },
      {
        h: 'Schedule and planning',
        p: ['Because fabrication happens before transport, we need design sign-off well ahead of the show. Contact us as soon as your space is booked and send the exhibitor manual and move-in times, so we can build a schedule backwards from opening day: approval, fabrication, transport, installation.'],
      },
      {
        h: 'What we need from you',
        list: [
          'Show name, stand number and hall plan.',
          'Stand size and number of open sides.',
          'Products and how they will be displayed, plus any cooling or special power needs.',
          'Brand assets and print content.',
          'Your on-site contact during build-up.',
        ],
      },
      {
        h: 'More for your Jeddah events',
        p: ['For your Jeddah show we also provide [printing and acrylic](@printing-acrylic), [giveaways](@promotional-giveaways) for stand visitors, [event photography](@media-production) and [conference stages](@conference-stages) in hotels and venues. We also work with companies from outside the Kingdom exhibiting in Jeddah, including [Egyptian companies](@exhibition-stands-egypt).'],
      },
    ],
    faq: [
      { q: 'Do you have a team in Jeddah?', a: 'Our team is based in Riyadh. We send our installation crew to Jeddah to build the stand on site and stay until handover, and we arrange breakdown after close.' },
      { q: 'Does a Jeddah stand cost more than one in Riyadh?', a: 'Transport and crew accommodation may be added, and we show them as separate lines in the quote.' },
      { q: 'Do you design stands for food shows?', a: 'Yes, planning for display, cooling, tasting areas, storage and easy cleaning, within what the show allows.' },
      { q: 'When should I contact you for a Jeddah show?', a: 'As soon as your space is booked, because the schedule includes transport between the cities on top of design and fabrication.' },
    ],
  },

  'exhibition-stands-eastern-province': {
    name: 'Dammam & Eastern Province',
    teaser: 'Stands for energy and industrial shows and conferences in Dhahran, Dammam and Al Khobar.',
    title: 'Exhibition Stands in Dammam & Dhahran | Oxira Events',
    description: 'Exhibition stand design and build in Dammam, Al Khobar and Dhahran for energy and industrial shows: 3D design, fabrication, screens, lighting and installation.',
    h1: 'Exhibition stands in Dammam and the Eastern Province',
    kicker: 'Eastern Province',
    lead: 'The Eastern Province is the centre of the Kingdom’s energy and petrochemical industry, and its shows and conferences mostly speak to a technical, specialist audience. We design stands that present industrial products and technical solutions clearly, and build them at shows in Dhahran, Dammam and Al Khobar.',
    blocks: [
      {
        h: 'Exhibition and conference venues in the region',
        p: ['Dhahran Expo is one of the region’s main exhibition centres and has hosted major energy-sector conferences and exhibitions, including the International Petroleum Technology Conference, IPTC 2020. Dammam and Al Khobar also hold shows and conferences in hotel and conference venues, alongside company events at corporate campuses and in industrial cities such as Jubail.'],
      },
      {
        h: 'From our energy-sector work',
        p: ['Our [portfolio](#work) includes the Saudi Aramco stand at IPTC 2020, an example of a large energy stand that relies on LED walls and architectural lighting to present technical content to a big audience.'],
      },
      {
        h: 'Designing for energy and industry',
        p: [
          'Visitors at energy and industrial shows are often engineers or procurement leads looking for something specific. So we design the stand to answer quickly: what the company does, for which sector, and what sets it apart. We use screens for projects and diagrams, make space for equipment and samples at their real weight and size, add a quiet meeting area for technical discussion, and include storage for literature.',
          'Safety rules at these shows are usually strict, from fire-rated materials to personal protective equipment for build crews, and we work to whatever the organiser sets.',
        ],
      },
      {
        h: 'Logistics between Riyadh and the Eastern Province',
        p: ['We fabricate the stand in our workshop, then truck it to the venue, timing the run to the organiser’s move-in window. Large pieces are designed to travel as modules and assemble on site, and our installation crew stays through handover and returns for breakdown after close. Transport and crew accommodation appear as separate lines in the quote.'],
      },
      {
        h: 'Corporate conferences and events',
        p: ['Many companies in the region run internal conferences, safety and recognition events and supplier days. For these we provide [stages and backdrops](@conference-stages), [lighting, sound and screens](@lighting-sound-led-screens), [award plaques](@promotional-giveaways) and [photography](@media-production).'],
      },
      {
        h: 'What we need from you',
        list: [
          'Show or conference name, venue and hall plan.',
          'Stand size, and the equipment or samples to be shown with weights and dimensions.',
          'The technical content you want on screen.',
          'Safety requirements from the organiser or site.',
          'Move-in and breakdown times.',
        ],
        after: ['For companies in the region exhibiting in neighbouring Qatar, see [exhibition stands in Qatar](@exhibition-stands-qatar).'],
      },
    ],
    faq: [
      { q: 'Do you build stands in Dhahran, Dammam and Al Khobar?', a: 'Yes. We design and fabricate the stand in our workshop, transport it to the venue, and our crew handles installation and breakdown.' },
      { q: 'Can heavy equipment go on the stand?', a: 'Yes, with planning. We need equipment weights and dimensions to design the floor and plinths, and we follow load limits and the organiser’s rules for bringing equipment in.' },
      { q: 'Do you set up events at company sites?', a: 'Yes. We provide stages, backdrops, lighting and sound for events at company premises after reviewing the space and its safety requirements.' },
      { q: 'How is transport to the Eastern Province priced?', a: 'It depends on stand size, number of loads and how long the crew stays, and we show it as separate lines in the quote.' },
      { q: "Do you design stands for technical conferences with an exhibition?", a: "Yes. We design for a conference audience of engineers and decision-makers, with screens for technical content and space for short meetings between sessions." },
    ],
  },

  'exhibition-stands-uae': {
    name: 'UAE: Dubai & Abu Dhabi',
    teaser: 'For UAE companies at Saudi shows, and Saudi companies exhibiting in Dubai and Abu Dhabi.',
    title: 'Exhibition Stands for Dubai & Abu Dhabi | Oxira Events',
    description: 'Stand design for companies exhibiting in Dubai and Abu Dhabi, and complete stands in Riyadh, Jeddah and Dammam for UAE companies, with no stand to ship.',
    h1: 'Exhibition stand design for the UAE: Dubai and Abu Dhabi',
    kicker: 'United Arab Emirates',
    lead: 'The UAE is one of the region’s largest exhibition markets, and many companies exhibit in Dubai, Abu Dhabi and Riyadh in the same year. We work in both directions: UAE and Gulf companies exhibiting at Saudi shows, and companies that need a stand in the UAE designed and supervised by our team.',
    blocks: [
      {
        h: 'Exhibition venues in the UAE',
        list: [
          'Dubai World Trade Centre (DWTC): in central Dubai on Sheikh Zayed Road, hosting a large number of international trade shows through the year.',
          'Dubai Exhibition Centre at Expo City Dubai: one of the emirate’s newest exhibition venues, on the former Expo 2020 Dubai site.',
          'ADNEC Abu Dhabi: the capital’s main exhibition centre, home to major shows including ADIPEC for the energy sector.',
          'Expo Centre Sharjah: hosting trade and consumer shows in Sharjah.',
        ],
      },
      {
        h: 'For UAE companies exhibiting in Saudi Arabia',
        p: [
          'If your company is in Dubai or Abu Dhabi and exhibiting in Riyadh, Jeddah or Dammam, we are your team on the ground in the Kingdom. We take the brief and run design meetings remotely, send 3D designs for approval, then fabricate and build the stand in the hall with no need to ship a structure from the UAE. Your team arrives to a finished stand, screens running and graphics in place.',
          'We explain the Saudi show requirements from the start: build-up times, the exhibitor manual, and how to order power and services from the organiser. Our [shows calendar](#calendar) lists the main upcoming exhibitions in the Kingdom.',
        ],
      },
      {
        h: 'For Saudi companies exhibiting in the UAE',
        p: ['If you are a Saudi company exhibiting in Dubai or Abu Dhabi, we can design the stand in the same identity you use at home, so your brand looks consistent in both markets. We agree the right delivery route for each project: fabricating some elements and print with us and shipping them, or building with a contractor registered with the venue where the organiser requires it, with our team supervising design and detail. We confirm scope and feasibility for each project before committing to any date.'],
      },
      {
        h: 'UAE venue requirements',
        p: ['Each UAE venue has an exhibitor and contractor manual covering design approval, contractor registration, stand heights, safety materials and move-in times. We start every project from that manual and prepare the drawings and documents needed to approve the stand.'],
      },
      {
        h: 'Timing',
        p: ['Cross-border projects need extra time for shipping, customs clearance and approvals. Contact us as soon as your participation is confirmed and send the exhibitor manual and hall plan, so we can build a realistic schedule back from opening day.'],
      },
      {
        h: 'What we need from you',
        list: [
          'Show name, city and venue.',
          'Stand size and hall plan.',
          'The organiser’s exhibitor and contractor manual.',
          'Brand assets and any previous stand designs whose look you want to keep.',
          'Preferred language (Arabic or English) and your on-site contact.',
        ],
        after: ['For other Gulf shows see [exhibition stands in Qatar](@exhibition-stands-qatar), and [exhibition stand design and build](@exhibition-stands) for full service details.'],
      },
    ],
    faq: [
      { q: 'Do you build stands in Dubai and Abu Dhabi?', a: 'We assess each UAE project individually and propose the right delivery route, either shipping elements we make or building with a venue-registered contractor under our supervision, and confirm it in the quote.' },
      { q: 'We are a UAE company exhibiting in Riyadh. How do we start?', a: 'Send us the show, stand size and brand assets through the quote form or WhatsApp, and we will set up a video meeting to start the design.' },
      { q: 'Can the whole project be managed remotely?', a: 'Yes. Meetings and approvals can run over video, email and WhatsApp, and you can book a video call from our site.' },
      { q: 'Do we need to ship our stand from the UAE to Saudi Arabia?', a: 'Not necessarily. We can build a stand in the Kingdom in the same identity, which is usually simpler than shipping an existing structure across the border.' },
    ],
  },

  'exhibition-stands-qatar': {
    name: 'Qatar & Doha',
    teaser: 'For Qatari companies at Saudi shows, and for conferences and exhibitions in Doha.',
    title: 'Exhibition Stand Design for Qatar & Doha | Oxira Events',
    description: 'Exhibition and conference stands in Doha at QNCC and the Doha Exhibition and Convention Center, plus complete stands for Qatari companies at Saudi shows.',
    h1: 'Exhibition stand design for Qatar and Doha',
    kicker: 'Qatar',
    lead: 'Doha has become an important destination for international conferences and exhibitions, and Qatar is close to the Kingdom in both distance and trade. We serve Qatari companies exhibiting at Saudi shows, and companies that need a stand in Doha designed and supervised by our team.',
    blocks: [
      {
        h: 'Exhibition and conference venues in Qatar',
        list: [
          'Qatar National Convention Centre (QNCC): in Education City, Doha, hosting international conferences and their accompanying exhibitions.',
          'Doha Exhibition and Convention Center (DECC): in West Bay, hosting a range of trade and consumer shows.',
        ],
        after: ['Many events also take place in Doha’s major hotels, especially conferences, forums and launches.'],
      },
      {
        h: 'Stands at international conferences',
        p: ['Much of Doha’s calendar is international conferences with an exhibition alongside, and a stand there has a different job from one at a large trade show: fewer visitors, but senior decision-makers with little time between sessions. So we design conference stands with a clear reception point, a small meeting area and a screen that delivers the core message in seconds, rather than filling the space with product. Where useful we add a [stage or presentation platform](@conference-stages) for side sessions.'],
      },
      {
        h: 'For Qatari companies exhibiting in Saudi Arabia',
        p: ['If you are exhibiting from Doha at a show in Riyadh, Jeddah or Dammam, we handle the entire stand inside the Kingdom: remote design and approval, fabrication, print, screens, installation in the hall and breakdown after close. We stay in touch through build-up and the show days by WhatsApp or phone, so your team arrives to a finished stand.'],
      },
      {
        h: 'For shows in Doha',
        p: [
          'For clients who need a stand in Doha, we design it and prepare the drawings and documents to the exhibitor manual, then agree the best delivery route with you: fabricating elements and print with us and shipping them, or building with a local contractor registered with the venue under our supervision. We set this out clearly in the quote after studying the project.',
          'Stand elements can travel by road between the Kingdom and Qatar through the Salwa border crossing, with customs time built into the schedule. The [Eastern Province](@exhibition-stands-eastern-province)’s proximity to the border makes this a practical route for large pieces.',
        ],
      },
      {
        h: 'What we need from you',
        list: [
          'Show or conference name, venue and dates.',
          'Stand size, hall plan and exhibitor manual.',
          'Your goal: meetings with decision-makers, product display or a launch.',
          'Brand assets and the content you want to show.',
          'Move-in and breakdown times, and your on-site contact.',
        ],
      },
    ],
    faq: [
      { q: 'Do you build stands in Doha?', a: 'We assess each Qatar project individually and propose the right route, shipping elements we make or building with a local contractor under our supervision, and confirm the scope in the quote.' },
      { q: 'We are a Qatari company exhibiting in Riyadh. Do we need to arrive early?', a: 'No. We handle design and approval remotely and fabricate and build the stand in the hall; your team can arrive before opening to take it over.' },
      { q: 'How do communication and approvals work?', a: 'Through video meetings, email and WhatsApp, with 3D designs sent for approval before fabrication.' },
      { q: 'Do you design conference stands, not just exhibition stands?', a: 'Yes. We design conference stands for short visits by decision-makers, with a reception point, meeting space and a screen for the key message.' },
      { q: "Can the same design work in Doha and Riyadh?", a: "Yes. One stand identity can be adapted to each show’s space and rules, so your brand looks consistent in both markets." },
    ],
  },

  'exhibition-stands-egypt': {
    name: 'Egypt',
    teaser: 'For Egyptian companies exhibiting in Saudi Arabia, and for shows in Cairo.',
    title: 'Exhibition Stands for Egyptian Companies | Oxira Events',
    description: 'Complete exhibition stands in Riyadh, Jeddah and Dammam for Egyptian companies, with no need to ship a stand from Egypt, and project studies for shows in Cairo.',
    h1: 'Exhibition stands for Egyptian companies in Saudi Arabia and Egypt',
    kicker: 'Egypt',
    lead: 'Saudi Arabia is one of the most important markets for Egyptian companies, and its trade shows are a direct way to meet buyers and distributors. We handle your stand inside the Kingdom from start to finish, so you fly in from Cairo or Alexandria to a stand that is ready.',
    blocks: [
      {
        h: 'Why build the stand inside the Kingdom?',
        p: ['Shipping a complete stand from Egypt to Saudi Arabia means freight and clearance costs, extra time, and the risk of damage or late arrival for move-in. Building inside the Kingdom means the stand is made close to the hall, installed by a crew that works with the venues and their schedules all the time, and any detail can be adjusted on site. You only ship your products and samples.'],
      },
      {
        h: 'How we work with Egyptian companies',
        list: [
          'A first meeting by video or WhatsApp to understand your products and goals for the show.',
          'A 3D design sent for approval, with rounds of revisions until sign-off.',
          'A clearly itemised quote showing what the stand includes and what the organiser provides.',
          'Fabrication, print and installation in the hall, and an agreed time for your team to take over the stand.',
          'Support during the show, then breakdown and a clear plot.',
        ],
      },
      {
        h: 'Saudi shows that suit Egyptian sectors',
        p: ['Many Egyptian companies exhibit at Saudi shows in sectors such as food and beverage, building materials and finishes, engineering industries, and furniture and interiors. Shows you will find in our [calendar](#calendar) include Foodex Saudi in Jeddah, and Saudi Build, Big 5 Construct Saudi and INDEX Saudi Arabia in Riyadh. Always check dates on the organisers’ official sites, and see our [Riyadh](@exhibition-stands-riyadh) and [Jeddah](@exhibition-stands-jeddah) pages for what the shows there are like.'],
      },
      {
        h: 'National pavilions and group participation',
        p: ['Egyptian companies sometimes exhibit within a national pavilion or one run by an export body or chamber of commerce, where the structure is standard. In that case we fit out your company’s space inside it: graphics and print, display units, screens and [promotional giveaways](@promotional-giveaways), within the pavilion’s rules.'],
      },
      {
        h: 'Shows in Egypt',
        p: ['In Egypt most major shows take place at the Egypt International Exhibition Center in New Cairo and the Cairo International Convention Center in Nasr City. For Saudi or Gulf companies exhibiting in Cairo, we assess each project individually, propose the right delivery route and set out our scope precisely in the quote before any commitment.'],
      },
      {
        h: 'What we need from you',
        list: [
          'Show name, stand number and size.',
          'The products and samples you will show, and how you will ship them if you are sending them yourself.',
          'Brand assets in Arabic and English.',
          'How many people will staff the stand, and your meeting and storage needs.',
          'A WhatsApp number for quick contact with the person running the participation.',
        ],
      },
    ],
    faq: [
      { q: 'Do we need to ship our stand from Egypt?', a: 'No. We design, fabricate and build the stand inside the Kingdom. You only need to ship your products and samples.' },
      { q: 'Can we follow the project entirely from Egypt?', a: 'Yes. Meetings and approvals run over video, WhatsApp and email, and we send 3D designs for approval before fabrication.' },
      { q: 'Can you fit out our space inside a national pavilion?', a: 'Yes. We prepare your graphics, display units, screens and print inside the national pavilion, within its rules.' },
      { q: 'Do you build stands in Cairo?', a: 'We assess Cairo projects individually and set out the delivery route and our scope in the quote before any commitment.' },
      { q: "Can you help us choose the right Saudi show for our sector?", a: "The calendar on our site lists the main upcoming shows in the Kingdom by sector with official links, and we can talk through your options on a consultation call before you book space." },
    ],
  },
};

const hub: HubCopy = {
  name: 'Services',
  teaser: '',
  title: 'Exhibition & Conference Services | Oxira Events',
  description: 'Oxira Events services: exhibition stands, conference stages, lighting and LED screens, printing and acrylic, giveaways and media in Saudi Arabia and the Gulf.',
  h1: 'Exhibition and conference services',
  kicker: 'Services',
  lead: 'From your plot on the floor plan to the last lit panel on the stand, and from the conference stage to the photos that outlast it: these are our services, and the cities and markets we work in.',
  servicesTitle: 'Our services',
  servicesLead: 'Each service can be ordered on its own or as part of a complete project run by one team.',
  regionsTitle: 'Where we work',
  regionsLead: 'We are based in Riyadh and serve shows across the Kingdom, plus Gulf and Egyptian companies exhibiting there.',
  other: ['If you are exhibiting in Kuwait, Bahrain or Oman, send us the details; we assess each request individually and tell you what we can offer before any commitment.'],
};

export const en = { pages, hub };
