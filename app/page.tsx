import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site, services, fleet, differentiators } from "@/content/site";
import { GroundLine } from "./components/GroundLine";

export const metadata: Metadata = {
  title: {
    absolute: `${site.name} | Civil, Earthworks & Plumbing, Wagga Wagga`,
  },
  description: site.description,
  alternates: { canonical: "/" },
};

// Recent-work proof grid. Rows share an aspect ratio so they sit even.
const work = [
  { src: "/images/work/slab-formwork.jpg", col: "c6", ar: "ar43", t: "Commercial slab & civil", loc: "Riverina" },
  { src: "/images/work/drainage-headwall.jpg", col: "c6", ar: "ar43", t: "Stormwater & headwall", loc: "Wagga Wagga" },
  { src: "/images/work/machine-kobelco.jpg", col: "c4", ar: "ar45", t: "14t Kobelco", loc: "Site prep" },
  { src: "/images/work/survey-trimble.jpg", col: "c4", ar: "ar45", t: "GPS set-out", loc: "Trimble" },
  { src: "/images/work/retaining-wall.jpg", col: "c4", ar: "ar45", t: "Rock retaining wall", loc: "Gumly Gumly" },
  { src: "/images/work/bulk-pad.jpg", col: "c6", ar: "ar43", t: "Bulk earthworks pad", loc: "Junee" },
  { src: "/images/work/road-base.jpg", col: "c6", ar: "ar43", t: "Road base & access", loc: "Coolamon" },
];

export default function Home() {
  const [ethan, angus] = site.contacts;
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow mono rv">Wagga Wagga · The Riverina</div>
            <h1 className="rv">
              Big civil jobs.
              <br />
              <span className="l2">Small enough to care.</span>
            </h1>
            <p className="lead rv">
              Civil construction, bulk earthworks, drainage, roads, plumbing and
              gas across Wagga Wagga and the Riverina. Two trusted local trades,
              now one team on the ground.
            </p>
            <div className="cta-row rv">
              <a className="btn primary" href="#contact">
                Get a quote →
              </a>
              <Link className="btn ghost" href="/services">
                What we do
              </Link>
            </div>
          </div>
          <figure className="hero-art rv">
            <Image
              src="/images/hero-sketch.jpg"
              alt="Ink sketch of a Kobelco excavator on a Riverina worksite"
              width={1800}
              height={1800}
              priority
              sizes="(max-width: 900px) 100vw, 46vw"
            />
            <figcaption className="mono">Kobelco SK85 · in the field</figcaption>
          </figure>
        </div>
        <GroundLine />
      </section>

      {/* TRUST */}
      <div className="trust">
        <div className="wrap">
          <span className="mono">Est. in Riverina dirt</span>
          <span className="mono">10+ years on the ground</span>
          <span className="mono">GPS machine control</span>
          <span className="mono">Joll&apos;s + Prospec, one crew</span>
        </div>
      </div>

      {/* SERVICES INDEX */}
      <section className="sec-pad" id="services">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <div className="k mono">What we do</div>
              <h2>From a single house pad to full subdivision civil works.</h2>
            </div>
            <p>
              Earthworks, drainage and the wet trades, run by the people actually
              operating the machines. One team, start to finish.
            </p>
          </div>
          <div className="svc rv">
            {services.map((s, i) => (
              <Link key={s.slug} href={`/services/${s.slug}`}>
                <span className="num">S–{String(i + 1).padStart(2, "0")}</span>
                <span className="t">{s.title}</span>
                <span className="arw">→ Read</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="sec-pad" id="work" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <div className="k mono">Recent work · field record</div>
              <h2>Real jobs, real ground.</h2>
            </div>
            <p>
              Stormwater, headwalls, road base, detailed set-out and machine-graded
              pads for builders, developers and civil projects across the region.
            </p>
          </div>
          <div className="work-grid">
            {work.map((w) => (
              <figure key={w.src} className={`rec ${w.col} rv`}>
                <div className={`frame ${w.ar}`}>
                  <Image
                    src={w.src}
                    alt={`${w.t}, ${w.loc}`}
                    fill
                    sizes={w.col === "c6" ? "(max-width: 900px) 100vw, 50vw" : "(max-width: 900px) 100vw, 33vw"}
                  />
                </div>
                <figcaption className="cap mono">
                  <b>{w.t}</b>
                  <span>{w.loc}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="band-ink why" id="about-teaser">
        <div className="wrap rv">
          <div className="k mono">Why Wagga Civil</div>
          <h2>The gear of a big civil outfit. The number that actually answers.</h2>
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
          <GroundLine />
        </div>
      </section>

      {/* FLEET */}
      <section className="sec-pad" id="fleet">
        <div className="wrap">
          <div className="sec-head rv">
            <div>
              <div className="k mono">Plant &amp; fleet</div>
              <h2>What turns up on site.</h2>
            </div>
            <p>Owned and operated, not sub-hired. If the job needs more, we bring more.</p>
          </div>
          <div className="fleet-list rv">
            {fleet.map((f, i) => (
              <div key={f.name} className="row">
                <span className="fi">{String(i + 1).padStart(2, "0")}</span>
                <span className="fn">{f.name}</span>
                <span className="fs">{f.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="sec-pad" style={{ paddingTop: 0 }}>
        <div className="wrap areas rv">
          <div>
            <div className="k mono" style={{ marginBottom: 14 }}>
              Service area
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem,3.4vw,2.6rem)", margin: "0 0 16px" }}>
              Across Wagga Wagga and the wider Riverina.
            </h2>
            <p style={{ color: "var(--stone)", maxWidth: "38ch" }}>
              Based at Gumly Gumly, on the ground from Griffith to Tumut. If
              you&apos;re in the region, we can get to you.
            </p>
          </div>
          <div className="chips">
            {site.serviceAreas.map((a, i) => (
              <span key={a} className={i === 0 ? "hq" : ""}>
                {i === 0 ? `◈ ${a}` : a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="wrap">
          <div className="k mono rv">Get a quote</div>
          <h2 className="rv">Tell us about the job. We&apos;ll come and look at it.</h2>
          <div className="contact-grid">
            {[ethan, angus].map((c) => (
              <a key={c.tel} className="ccard rv" href={`tel:${c.tel}`}>
                <span className="who">{c.name}</span>
                <span className="ph">{c.phone}</span>
                <span className="cta">Call or text →</span>
              </a>
            ))}
          </div>
          <div className="cmeta">
            <a href={`mailto:${site.email}`}>✉ {site.email}</a>
            <span>
              ◈ {site.address.street}, {site.address.suburb} {site.address.state}{" "}
              {site.address.postcode}
            </span>
            <span>{site.hours} · Riverina wide</span>
          </div>
        </div>
      </section>
    </>
  );
}
