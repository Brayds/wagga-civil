// Renders every page defined in content/pages.ts. Static segments (/about,
// /services) take priority over this dynamic one, and dynamicParams=false means
// any address that isn't in that list 404s rather than rendering an empty page.
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site } from "@/content/site";
import { extraPages, pageBySlug } from "@/content/pages";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { GroundLine } from "../components/GroundLine";
import { JsonLd } from "../components/JsonLd";

export const dynamicParams = false;

export function generateStaticParams() {
  return extraPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = pageBySlug(slug);
  if (!page) return {};
  return pageMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/${page.slug}`,
  });
}

export default async function ExtraPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = pageBySlug(slug);
  if (!page) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: page.navLabel, path: `/${page.slug}` },
        ])}
      />

      <section className="page-hero">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>{page.navLabel}</span>
          </div>
          <h1>{page.title}</h1>
          <p className="intro">{page.intro}</p>
        </div>
      </section>

      <GroundLine />

      <section className="sec-pad">
        <div className="wrap">
          <div className="measure">
            {page.sections.map((section, i) => (
              <div key={i}>
                {section.heading ? (
                  <h2 style={{ fontSize: "clamp(1.5rem,3vw,2.1rem)", margin: i === 0 ? "0 0 18px" : "44px 0 18px" }}>
                    {section.heading}
                  </h2>
                ) : null}
                {section.body.map((paragraph, j) => (
                  <p key={j}>{paragraph}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="wrap">
          <div className="k mono">Get a quote</div>
          <h2>Tell us about the job. We&apos;ll come and look at it.</h2>
          <div className="contact-grid">
            {site.contacts.map((c) => (
              <a key={c.tel} className="ccard" href={`tel:${c.tel}`}>
                <span className="who">{c.name}</span>
                <span className="ph">{c.phone}</span>
                <span className="cta">Call or text →</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
