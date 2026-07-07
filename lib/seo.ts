import type { Metadata } from "next";
import { site, services, type Service } from "@/content/site";

export const SITE_URL = site.url;

// One place that builds page metadata: title, description, canonical, Open Graph.
// Canonicals are relative and composed against metadataBase in the root layout.
export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string; // e.g. "/services/bulk-earthworks" or "/"
  image?: string;
}): Metadata {
  const { title, description, path, image } = opts;
  const canonical = path;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${path === "/" ? "" : path}`,
      siteName: site.name,
      locale: "en_AU",
      type: "website",
      ...(image ? { images: [{ url: image }] } : {}),
    },
  };
}

// ---- Structured data (schema.org) ----

const fullAddress = {
  "@type": "PostalAddress",
  addressLocality: site.address.city,
  addressRegion: site.address.state,
  postalCode: site.address.postcode,
  addressCountry: site.address.country,
};

// LocalBusiness: the anchor entity. Lives on the homepage. Enumerates the
// service area and the contact numbers so Google can associate the NAP.
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${SITE_URL}/#business`,
    name: site.name,
    alternateName: site.shortName,
    url: SITE_URL,
    email: site.email,
    telephone: site.contacts[0].tel,
    description: site.description,
    address: fullAddress,
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    areaServed: site.serviceAreas.map((a) => ({
      "@type": "City",
      name: `${a}, NSW`,
    })),
    openingHours: "Mo-Sa",
    contactPoint: site.contacts.map((c) => ({
      "@type": "ContactPoint",
      name: c.name,
      telephone: c.tel,
      contactType: "sales",
      areaServed: "AU",
    })),
    knowsAbout: services.map((s) => s.title),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: site.name,
    publisher: { "@id": `${SITE_URL}/#business` },
  };
}

// Service schema for each spoke page, tied back to the business + area.
export function serviceJsonLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/${service.slug}/#service`,
    name: service.title,
    serviceType: service.title,
    description: service.metaDescription,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: site.serviceAreas.map((a) => ({ "@type": "City", name: `${a}, NSW` })),
    url: `${SITE_URL}/services/${service.slug}`,
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === "/" ? "" : item.path}`,
    })),
  };
}
