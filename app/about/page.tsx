import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site, differentiators } from "@/content/site";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { GroundLine } from "../components/GroundLine";
import { JsonLd } from "../components/JsonLd";

export const metadata: Metadata = pageMetadata({
  title: "About | Local Civil & Earthworks, Wagga Wagga",
  description:
    "Wagga Civil and Earthworks is the merger of Joll's Plumbing & Excavation and Prospec Earthworks — two trusted Riverina names, one local crew, over a decade on the ground in Wagga Wagga.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      <section className="page-hero">
        <div className="wrap">
          <div className="crumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>About</span>
          </div>
          <h1>Two Riverina names you already know, now one crew.</h1>
          <p className="intro">
            Wagga Civil and Earthworks is the merger of {site.heritage[0]} and{" "}
            {site.heritage[1]} — two trusted local names under one roof, run by the
            same people the region has trusted for years.
          </p>
        </div>
      </section>

      <GroundLine />

      <section className="sec-pad">
        <div className="wrap svc-body">
          <div className="prose">
            <p>
              Wagga Civil &amp; Earthworks brings together the experience and
              reputation of two locally owned businesses, Prospec Earthworks and
              Joll&apos;s Plumbing &amp; Excavation. By combining our people,
              equipment and expertise, we&apos;ve created a business capable of
              delivering complete earthmoving and civil construction solutions
              across the Riverina.
            </p>
            <p>
              From residential site cuts and rural earthworks to commercial
              developments, subdivisions and large scale civil projects, we have
              the experience, equipment and capability to deliver every project
              safely, efficiently and to the highest standard.
            </p>
            <p>
              As a locally owned and operated business, we understand the
              Riverina&apos;s unique conditions. We know how local soils behave,
              how sites drain and what councils expect. That local knowledge helps
              us plan smarter, work more efficiently and deliver quality results
              from the ground up.
            </p>
            <p>
              Our modern fleet includes excavators, bulldozers, graders, skid-steer
              loaders, rollers, trucks and water carts, with Trimble GPS machine
              control technology delivering accurate levels, precise grading and
              efficient earthworks. Our entire fleet is owned and operated in-house,
              not dry-hired, giving us complete control over quality, scheduling and
              workmanship from the first cut to the final trim.
            </p>
            <p>
              Whether it&apos;s bulk earthworks, site preparation, road
              construction, drainage, subdivisions, commercial developments or
              rural projects, our experienced operators take pride in delivering
              work that&apos;s built to last.
            </p>
            <p>
              Big enough to deliver subdivision civil works, commercial developments
              and large scale earthworks. Small enough that the person who quotes
              your job is the one overseeing it, and when you call, the phone gets
              answered.
            </p>
          </div>
          <aside className="scope">
            <h3>The short version</h3>
            <ul>
              <li>Merger of {site.heritage.join(" + ")}</li>
              <li>10+ years local to the Riverina</li>
              <li>Owned fleet, GPS machine control</li>
              <li>Civil, earthworks, drainage &amp; road construction</li>
              <li>Based in Wagga Wagga</li>
            </ul>
            <Link className="btn primary" href="/services" style={{ width: "100%", justifyContent: "center" }}>
              See the services →
            </Link>
          </aside>
        </div>
      </section>

      {/* proof band */}
      <section className="band-ink">
        <div className="wrap">
          <div className="k mono">How we work</div>
          <h2 className="why" style={{ fontSize: "clamp(1.8rem,3.4vw,2.7rem)", maxWidth: "24ch", margin: "14px 0 46px", color: "var(--paper-tint)" }}>
            The gear of a big civil outfit. The number that actually answers.
          </h2>
          <div className="why-cols">
            {differentiators.map((d, i) => (
              <div key={d.key}>
                <div className="n">
                  {String(i + 1).padStart(2, "0")} / {d.label}
                </div>
                <h3>{d.title}</h3>
                <p>{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* machine portrait */}
      <section className="sec-pad">
        <div className="wrap">
          <figure className="svc-hero-art" style={{ maxWidth: 720, margin: "0 auto" }}>
            <div className="frame">
              <Image
                src="/images/work/machine-yard.jpg"
                alt="Wagga Civil and Earthworks Kobelco excavator in the yard"
                fill
                sizes="(max-width: 900px) 100vw, 720px"
              />
            </div>
            <figcaption className="cap mono" style={{ display: "flex", justifyContent: "space-between", padding: "10px 2px 0" }}>
              <b>14t Kobelco</b>
              <span>Wagga Wagga yard</span>
            </figcaption>
          </figure>
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
