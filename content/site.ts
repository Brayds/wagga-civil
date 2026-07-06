// Central business info + services. One edit here updates the header, footer,
// contact page, and structured data everywhere. This is the file to change first.
//
// TODO (confirm with client): phone, email, and address are placeholders taken
// from the two old businesses. Replace with the merged Wagga Civil and Earthworks
// details before launch.

export const site = {
  name: "Wagga Civil and Earthworks",
  shortName: "Wagga Civil",
  tagline: "Civil, earthworks, plumbing and gas across the Riverina",
  description:
    "Wagga Civil and Earthworks delivers civil construction, detailed excavation, bulk earthworks, road construction, plumbing and gas across Wagga Wagga and the Riverina. Over a decade of local experience, one trusted team.",

  // TODO: confirm the merged business contact details
  phone: "0428 148 726", // placeholder (Prospec) — confirm merged number
  email: "admin@prospecearthworks.com.au", // placeholder — confirm merged inbox
  address: {
    street: "21 Matilda Crescent", // placeholder (Prospec) — confirm
    suburb: "Gumly Gumly",
    city: "Wagga Wagga",
    state: "NSW",
    postcode: "2652",
    country: "AU",
  },

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

  social: {
    // TODO: confirm which socials carry over to the merged brand
  },
} as const;

export type Service = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  keywords: string[];
};

// Merged service list: Prospec's six civil/earthworks services + Joll's plumbing & gas.
export const services: Service[] = [
  {
    slug: "detailed-excavation",
    title: "Detailed Excavation",
    summary:
      "Precision excavation for footings, foundations and detailed site preparation. Accurate cuts and levels for residential, commercial and infrastructure projects, with minimal disruption to surrounding areas.",
    image: "/images/service-detailed-excavation.jpg",
    keywords: ["excavation wagga wagga", "detailed excavation riverina"],
  },
  {
    slug: "bulk-earthworks",
    title: "Bulk Earthworks",
    summary:
      "Large-scale earthmoving, land reshaping and material relocation to prepare sites for construction. Efficient cut, fill and compaction for roadworks, subdivisions and industrial projects.",
    image: "/images/service-bulk-earthworks.jpg",
    keywords: ["bulk earthworks wagga", "earthmoving riverina"],
  },
  {
    slug: "road-construction",
    title: "Road Construction",
    summary:
      "Complete roadworks from earthmoving to final surfacing. Grading, drainage, base preparation and sealing for durable roads on residential, commercial and infrastructure projects.",
    image: "/images/service-road-construction.jpg",
    keywords: ["road construction wagga", "civil roadworks riverina"],
  },
  {
    slug: "trenching",
    title: "Plumbing & Electrical Trenching",
    summary:
      "Accurate trenching for plumbing and electrical installations at any depth or width. Safe, precise underground utility work that protects existing infrastructure and meets safety standards.",
    image: "/images/service-trenching.jpg",
    keywords: ["trenching wagga wagga", "utility trenching riverina"],
  },
  {
    slug: "dam-construction",
    title: "Dam Construction",
    summary:
      "Expert dam building, including excavation, compaction and sealing for water storage, irrigation and environmental management. Durable, reliable solutions tailored to your land conditions.",
    image: "/images/service-dam-construction.jpg",
    keywords: ["dam construction riverina", "farm dam wagga"],
  },
  {
    slug: "site-clearing",
    title: "Site Clearing",
    summary:
      "Vegetation removal, debris disposal and land preparation for new developments. Efficient clearing of trees, rocks and excess material, leaving the site ready for the next phase.",
    image: "/images/service-site-clearing.jpg",
    keywords: ["site clearing wagga", "land clearing riverina"],
  },
  {
    slug: "plumbing-and-gas",
    title: "Plumbing & Gas",
    summary:
      "Domestic and commercial plumbing and gas. Repairs, hot water systems, gas fitting, blocked drains, new installs and maintenance. Reliable, safe workmanship for homes and businesses.",
    image: "/images/service-plumbing-gas.jpg",
    keywords: ["plumber wagga wagga", "gas fitting riverina"],
  },
];

// Equipment fleet, carried over from Joll's — a real differentiator worth showing.
export const fleet: string[] = [
  "3.5 tonne excavator",
  "14 tonne excavator",
  "Compact track loader",
  "3 tonne twin drum roller",
  "5000L water truck",
];
