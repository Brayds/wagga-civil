// Central business info + services. One edit here updates the header, footer,
// homepage, every service page, the sitemap and the structured data. This is the
// file to change first.
//
// Business facts below are the confirmed merged Wagga Civil and Earthworks
// details (Joll's Plumbing & Excavation + Prospec Earthworks). If a licence/insurance line is
// ever added to the footer, confirm the exact numbers with the client first.

export const site = {
  name: "Wagga Civil and Earthworks",
  shortName: "Wagga Civil",
  tagline: "Civil construction and earthworks across the Riverina",
  description:
    "Wagga Civil and Earthworks delivers civil construction, detailed excavation, bulk earthworks, road construction and drainage across Wagga Wagga and the Riverina. Over a decade of local experience, one trusted team.",

  domain: "waggacivil.com.au",
  url: "https://waggacivil.com.au",
  email: "admin@waggacivil.com.au",

  // Two named contacts for the merged business.
  contacts: [
    { name: "Ethan", phone: "0423 655 537", tel: "+61423655537" },
    { name: "Angus", phone: "0412 345 678", tel: "+61412345678" },
  ],

  // Client asked to show the location as just "Wagga Wagga" — no street
  // address, no Gumly Gumly suburb. Kept city/state/postcode for the LocalBusiness
  // schema (postcode 2650 = Wagga Wagga).
  address: {
    city: "Wagga Wagga",
    state: "NSW",
    postcode: "2650",
    country: "AU",
  },

  // Approx geo for the Wagga Wagga base (LocalBusiness schema).
  geo: { lat: -35.1236, lng: 147.4211 },

  hours: "Mon–Sat",

  serviceAreas: [
    "Wagga Wagga",
    "Junee",
    "Coolamon",
    "Griffith",
    "Cootamundra",
    "Temora",
    "Tumut",
    "Narrandera",
  ],

  // The heritage the brand is built on — two names the region already trusts.
  heritage: ["Joll's Plumbing & Excavation", "Prospec Earthworks"],

  social: {
    // TODO: confirm which socials carry over to the merged brand
  },
} as const;

// Three proof points used on the homepage "why" band.
export const differentiators = [
  {
    key: "local",
    label: "Local",
    title: "A decade in Riverina dirt",
    body:
      "We know the local ground: the red clay, the fall of a Wagga block, the council specs. No learning your site on your budget.",
  },
  {
    key: "trusted",
    label: "Trusted",
    title: "Two names you already know",
    body:
      "Joll's Plumbing & Excavation and Prospec Earthworks, merged into one crew. The same operators the region has used for years, now under one roof.",
  },
  {
    key: "precise",
    label: "Precise",
    title: "Surveyed and GPS-guided",
    body:
      "Trimble machine control on the excavators. Pads and grades come in on spec, first pass, ready to certify.",
  },
] as const;

export type Service = {
  slug: string;
  title: string;
  // Short label for tight spots (nav, cards) when the full title is long.
  shortTitle?: string;
  // One-line summary used on cards and the services hub.
  summary: string;
  // Card / hub thumbnail.
  image: string;
  // Large image for the service page hero.
  heroImage: string;
  keywords: string[];
  // SEO overrides. Fall back to generated values when absent.
  metaTitle: string;
  metaDescription: string;
  // Service page: opening line, then body paragraphs, then a scope checklist.
  intro: string;
  body: string[];
  includes: string[];
  related: string[];
};

// Civil and earthworks service list (from Prospec Earthworks).
export const services: Service[] = [
  {
    slug: "detailed-excavation",
    title: "Detailed Excavation",
    summary:
      "Precise footing, foundation and service excavation to the set-out, with clean batters and accurate levels.",
    image: "/images/work/footing-excavation.jpg",
    heroImage: "/images/work/excavation-dig.jpg",
    keywords: ["excavation wagga wagga", "detailed excavation riverina", "footing excavation wagga"],
    metaTitle: "Detailed Excavation Wagga Wagga | Footings & Site Cuts",
    metaDescription:
      "Detailed excavation in Wagga Wagga and the Riverina — footings, foundations and service trenches cut to the set-out with GPS-accurate levels. Get a quote from Wagga Civil and Earthworks.",
    intro:
      "Accurate cuts for footings, foundations and detailed site preparation, on residential, commercial and civil jobs across the Riverina.",
    body: [
      "Detailed excavation is where a build lives or dies. Get the levels wrong and every trade after you pays for it. We set out to the engineer's drawings, cut to the design levels and leave clean, stable batters your concreter or builder can work off straight away.",
      "Our excavators run Trimble GPS machine control, so depths and grades come in on spec the first time instead of being chased with a level and a shovel. Tight blocks, existing services, close boundaries — we work carefully around what's already there and keep the surrounding ground intact.",
      "From a single house footing to a full commercial pad and services, it's the same crew and the same standard. You get the person running the machine, not a sub you've never met.",
    ],
    includes: [
      "Footings and foundation excavation to set-out",
      "Basement and cut-and-fill site cuts",
      "Service and drainage trenching",
      "GPS-guided levels and batters",
      "Spoil management and cart-away",
    ],
    related: ["bulk-earthworks", "trenching", "site-clearing"],
  },
  {
    slug: "bulk-earthworks",
    title: "Bulk Earthworks",
    summary:
      "Large-scale cut, fill and compaction to shape and level sites for subdivisions, sheds and civil works.",
    image: "/images/work/bulk-pad.jpg",
    heroImage: "/images/work/bulk-pad-2.jpg",
    keywords: ["earthworks wagga wagga", "earthmoving wagga wagga", "bulk earthworks", "earthmovers wagga"],
    metaTitle: "Bulk Earthworks Wagga Wagga | Earthmoving & Site Levelling",
    metaDescription:
      "Bulk earthworks and earthmoving in Wagga Wagga and the Riverina — cut, fill, compaction and site levelling for subdivisions, sheds and civil projects. Owned fleet, GPS control. Get a quote.",
    intro:
      "Moving and shaping ground at scale — cut, fill and compaction to turn a raw block into a build-ready pad.",
    body: [
      "Bulk earthworks is the heavy lifting: stripping topsoil, shifting large volumes of material, filling and compacting in layers, and grading the whole site to design. It's what takes a paddock or an uneven block and makes it a level, stable pad ready for a shed, a house or a subdivision.",
      "We compact to spec and, where the job needs it, provide the levels and coverage for certification. A 14-tonne excavator, a track loader, a twin-drum roller and a water truck are all owned and operated in-house, so we control moisture and compaction properly instead of hoping a dry-hired machine turns up.",
      "Because we're local, we plan around Riverina conditions — the clay, the wet, the dust — and keep the site working rather than bogged.",
    ],
    includes: [
      "Topsoil strip and stockpile",
      "Cut and fill to design levels",
      "Layered fill and compaction",
      "Site grading and pad preparation",
      "Moisture conditioning with water cart",
    ],
    related: ["detailed-excavation", "road-construction", "site-clearing"],
  },
  {
    slug: "road-construction",
    title: "Road Construction",
    summary:
      "Access roads, driveways and hardstands built from the ground up — formation, drainage, base and finish.",
    image: "/images/work/road-base.jpg",
    heroImage: "/images/work/road-base.jpg",
    keywords: ["road construction wagga", "civil roadworks riverina", "driveway construction wagga"],
    metaTitle: "Road Construction Wagga Wagga | Access Roads & Driveways",
    metaDescription:
      "Road and driveway construction in Wagga Wagga and the Riverina — formation, drainage, road base and finishing for rural, residential and commercial access. Built to last on local ground. Get a quote.",
    intro:
      "Roads, driveways and hardstands built to hold up under load and Riverina weather, from formation to finished surface.",
    body: [
      "A road is only as good as what's under it. We build from the formation up: shape and compact the subgrade, get the drainage and falls right so water sheds instead of sitting, then place and compact road base to a proper finish.",
      "Rural access, farm roads, long driveways, commercial hardstands and car parks — the approach is the same, sized to the traffic it'll carry. Getting the drainage right is what stops a road turning to potholes the first wet season, and that's where local knowledge pays off.",
      "We handle the earthworks and the surface in one crew, so there's no gap between who shaped the ground and who finished it.",
    ],
    includes: [
      "Subgrade preparation and compaction",
      "Table drains, culverts and falls",
      "Road base supply, place and compact",
      "Driveways, farm roads and hardstands",
      "Car parks and commercial access",
    ],
    related: ["bulk-earthworks", "detailed-excavation", "dam-construction"],
  },
  {
    slug: "trenching",
    title: "Plumbing & Electrical Trenching",
    shortTitle: "Trenching",
    summary:
      "Safe, accurate trenching for water, sewer, stormwater, power and comms — to depth, backfilled and compacted.",
    image: "/images/work/drainage-headwall.jpg",
    heroImage: "/images/work/drainage-headwall.jpg",
    keywords: ["trenching wagga wagga", "utility trenching riverina", "service trenching wagga"],
    metaTitle: "Trenching Wagga Wagga | Plumbing, Electrical & Service Trenches",
    metaDescription:
      "Service trenching in Wagga Wagga and the Riverina — water, sewer, stormwater, power and comms trenches dug to depth, bedded, backfilled and compacted. Careful work around existing services. Get a quote.",
    intro:
      "Trenching for every underground service, dug to the right depth and width, then backfilled and compacted properly.",
    body: [
      "Whether it's water, sewer, stormwater, power or comms, the trench has to be the right depth, the right width and dug without hitting what's already in the ground. We locate and work around existing services, keep the trench safe, and bed, backfill and compact so nothing settles later.",
      "Because we run the earthworks in-house, trenching is coordinated with the trades that follow — the pipe layer or electrician isn't left waiting or re-digging. We cut clean, accurate trenches ready for your contractor, then backfill and reinstate.",
      "Small residential runs to long civil service trenches, we've got the right machine for the width and the ground.",
    ],
    includes: [
      "Water, sewer and stormwater trenches",
      "Electrical and comms conduit trenches",
      "Service location and safe dig",
      "Pipe and conduit bedding",
      "Backfill, compaction and reinstatement",
    ],
    related: ["detailed-excavation", "road-construction", "site-clearing"],
  },
  {
    slug: "dam-construction",
    title: "Dam Construction",
    summary:
      "Farm and storage dams excavated, keyed and compacted to hold water on Riverina ground.",
    image: "/images/work/dam-batter.jpg",
    heroImage: "/images/work/dam-batter.jpg",
    keywords: ["dam construction riverina", "farm dam wagga", "dam builder wagga wagga"],
    metaTitle: "Dam Construction Wagga Wagga | Farm & Storage Dams",
    metaDescription:
      "Farm and storage dam construction across Wagga Wagga and the Riverina — excavation, keying and clay compaction built to hold water in local conditions. Get a quote from Wagga Civil and Earthworks.",
    intro:
      "Dams built to actually hold water — excavated, keyed into the ground and compacted for your soil and site.",
    body: [
      "A dam that leaks is money in a hole. Building one that holds comes down to reading the ground, keying the wall into stable material and compacting the clay properly in layers rather than just pushing dirt into a bank.",
      "We build farm and storage dams for stock water, irrigation and general storage, shaped and sized to your land and how you'll use it. Local experience matters here — Riverina soils vary block to block, and the right approach on one property is wrong on the next.",
      "From a new dam to reshaping or cleaning out an old one, we've got the machines and the know-how to do it once, properly.",
    ],
    includes: [
      "New farm and storage dams",
      "Wall keying and clay compaction",
      "Spillways and overflow shaping",
      "Existing dam clean-out and enlargement",
      "Stock, irrigation and storage water",
    ],
    related: ["bulk-earthworks", "site-clearing", "road-construction"],
  },
  {
    slug: "site-clearing",
    title: "Site Clearing",
    summary:
      "Trees, scrub, rubbish and old structures cleared and carted, leaving a clean block ready to work.",
    image: "/images/work/site-clearing.jpg",
    heroImage: "/images/work/site-clearing.jpg",
    keywords: ["site clearing wagga", "land clearing riverina", "block clearing wagga wagga"],
    metaTitle: "Site Clearing Wagga Wagga | Land & Block Clearing",
    metaDescription:
      "Site and land clearing in Wagga Wagga and the Riverina — vegetation, scrub, debris and old structures cleared, mulched or carted away, leaving a clean block ready for the next stage. Get a quote.",
    intro:
      "Clearing a block back to clean ground — vegetation, debris and old structures removed and carted, ready for what's next.",
    body: [
      "Before anything gets built, the block has to be cleared. We remove trees, scrub, grass, rubbish and old slabs or structures, then cart it away or mulch it on site, leaving ground that's ready to strip and shape.",
      "For rural blocks, new builds and development sites, we clear efficiently and tidily, keeping what you want kept and only taking what needs to go. Because we do the earthworks too, clearing rolls straight into the topsoil strip and site prep without a second mobilisation.",
      "It's the unglamorous first step, and doing it cleanly saves time and money on everything that follows.",
    ],
    includes: [
      "Tree, scrub and vegetation removal",
      "Debris, rubbish and slab demolition removal",
      "Mulching or cart-away of cleared material",
      "Rural block and development clearing",
      "Straight into topsoil strip and site prep",
    ],
    related: ["bulk-earthworks", "detailed-excavation", "dam-construction"],
  },
];

// Equipment fleet, owned and operated in-house — a real differentiator worth showing.
export type FleetItem = { name: string; note: string };
export const fleet: FleetItem[] = [
  { name: "3.5 tonne excavator", note: "Tight access & detail" },
  { name: "14 tonne excavator", note: "Bulk work, GPS control" },
  { name: "Compact track loader", note: "Cart, level & clear" },
  { name: "3 tonne twin-drum roller", note: "Compaction" },
  { name: "5,000L water truck", note: "Dust & moisture" },
];

export function serviceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
