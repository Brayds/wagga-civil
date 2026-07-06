import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site, services } from "@/content/site";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { GroundLine } from "../components/GroundLine";
import { JsonLd } from "../components/JsonLd";

export const metadata: Metadata = pageMetadata({
  title: "Services | Civil, Earthworks, Drainage, Plumbing & Gas",
  description:
    "Civil and earthworks services across Wagga Wagga and the Riverina: detailed excavation, bulk earthworks, road construction, trenching, dam construction, site clearing, plumbing and gas.",
  path: "/services",
});

export default function ServicesHub() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />

      <section className="page-hero">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Services</span>
          </div>
          <h1>Everything from the first cut to the final connection.</h1>
          <p className="intro">
            {site.shortName} covers the full civil and earthworks scope across the
            Riverina, plus the plumbing and gas side from Joll&apos;s. One team, one
            point of contact, from site clearing to certified pads and drainage.
          </p>
        </div>
      </section>

      <GroundLine />

      <section className="sec-pad">
        <div className="wrap">
          <div className="hub-grid">
            {services.map((s, i) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="hub-card rv">
                <div className="frame">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                  />
                </div>
                <div className="body">
                  <div className="num">S–{String(i + 1).padStart(2, "0")}</div>
                  <h3>{s.title}</h3>
                  <p>{s.summary}</p>
                  <span className="go">Explore →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT band reused */}
      <section className="contact" id="contact">
        <div className="wrap">
          <div className="k mono rv">Get a quote</div>
          <h2 className="rv">Not sure which one you need? Just tell us the job.</h2>
          <div className="contact-grid">
            {site.contacts.map((c) => (
              <a key={c.tel} className="ccard rv" href={`tel:${c.tel}`}>
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
