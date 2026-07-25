import type { MetadataRoute } from "next";
import { services } from "@/content/site";
import { extraPages } from "@/content/pages";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
  ];
  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));
  // Anything added to content/pages.ts lands here without a code change.
  const addedPages: MetadataRoute.Sitemap = extraPages.map((p) => ({
    url: `${SITE_URL}/${p.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.5,
  }));
  return [...staticPages, ...servicePages, ...addedPages];
}
