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
    "Wagga Civil and Earthworks is the merger of Joll's Plumbing and Prospec Earthworks — two trusted Riverina names, one local crew, over a decade on the ground in Wagga Wagga.",
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
            {site.heritage[1]} — the earthmoving and the wet trades under one roof,
            run by the same people the region has trusted for years.
          </p>
        </div>
      </section>

      <GroundLine />

      <section className="sec-pad">
        <div className="wrap svc-body">
          <div className="prose">
            <p>
              For more than a decade, Prospec Earthworks shaped Riverina ground and
              Joll&apos;s Plumbing kept the water and gas running. Bringing them
              together means one call for the whole job: clear the block, move the
              dirt, cut the trenches, lay the drainage and connect it — without
              juggling separate contractors who blame each other when something
              doesn&apos;t line up.
            </p>
            <p>
              We&apos;re local, and it matters. We know how a Wagga block drains,
              how the red clay behaves wet and dry, and what the council wants to
              see. That knowledge is the difference between a pad that certifies
              first go and one that gets sent back.
            </p>
            <p>
              Our excavators run Trimble GPS machine control, so levels and grades
              come in on spec instead of being chased by hand. The fleet is owned
              and operated in-house, not dry-hired, so we control the quality of
              the work from the first cut to the last pass of the roller.
            </p>
            <p>
              Big enough to take on subdivision civil works and commercial pads.
              Small enough that the person who quotes the job is the one running the
              machine, and the phone gets answered.
            </p>
          </div>
          <aside className="scope">
            <h3>The short version</h3>
            <ul>
              <li>Merger of {site.heritage.join(" + ")}</li>
              <li>10+ years local to the Riverina</li>
              <li>Owned fleet, GPS machine control</li>
              <li>Civil, earthworks, drainage, plumbing &amp; gas</li>
              <li>Based at {site.address.suburb}, Wagga Wagga</li>
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
              <span>Gumly Gumly yard</span>
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
