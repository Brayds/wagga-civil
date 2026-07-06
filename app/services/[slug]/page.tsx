import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { site, services, serviceBySlug } from "@/content/site";
import { pageMetadata, serviceJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { GroundLine } from "../../components/GroundLine";
import { JsonLd } from "../../components/JsonLd";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    image: service.heroImage,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();

  const index = services.findIndex((s) => s.slug === slug);
  const related = service.related
    .map((r) => serviceBySlug(r))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <JsonLd
        data={[
          serviceJsonLd(service),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${service.slug}` },
          ]),
        ]}
      />

      {/* HERO */}
      <section className="wrap svc-hero">
        <div>
          <div className="crumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/services">Services</Link>
            <span>/</span>
            <span>S–{String(index + 1).padStart(2, "0")}</span>
          </div>
          <h1>{service.title}</h1>
          <p className="intro">{service.intro}</p>
          <div className="cta-row" style={{ marginTop: 28 }}>
            <a className="btn primary" href={`tel:${site.contacts[0].tel}`}>
              Get a quote →
            </a>
            <Link className="btn ghost" href="/services">
              All services
            </Link>
          </div>
        </div>
        <figure className="svc-hero-art">
          <div className="frame">
            <Image
              src={service.heroImage}
              alt={`${service.title} — Wagga Civil and Earthworks`}
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              priority
            />
          </div>
        </figure>
      </section>

      <GroundLine />

      {/* BODY */}
      <section className="sec-pad">
        <div className="wrap svc-body">
          <div className="prose">
            {service.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p style={{ color: "var(--stone)", fontSize: "1rem" }}>
              Serving {site.serviceAreas.slice(0, -1).join(", ")} and {site.serviceAreas.at(-1)}.
            </p>
          </div>
          <aside className="scope">
            <h3>Typical scope</h3>
            <ul>
              {service.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a className="btn primary" href={`tel:${site.contacts[0].tel}`} style={{ width: "100%", justifyContent: "center" }}>
              Call {site.contacts[0].name} →
            </a>
          </aside>
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="sec-pad" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="sec-head">
              <div>
                <div className="k mono">Related</div>
                <h2>Often on the same job.</h2>
              </div>
            </div>
            <div className="related-grid">
              {related.map((r) => {
                const ri = services.findIndex((s) => s.slug === r.slug);
                return (
                  <Link key={r.slug} href={`/services/${r.slug}`} className="related-card">
                    <span className="rn">S–{String(ri + 1).padStart(2, "0")}</span>
                    <h3>{r.title}</h3>
                    <p>{r.summary}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CONTACT */}
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
