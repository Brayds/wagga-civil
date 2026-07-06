import Image from "next/image";
import { site, services, fleet } from "@/content/site";

export default function Home() {
  return (
    <>
      {/* Hero — split: copy left, machine render right (Direction C) */}
      <section className="bg-concrete">
        <div className="mx-auto grid max-w-[1120px] items-center gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              Wagga Wagga &amp; the Riverina
            </p>
            <h1 className="mt-4 text-4xl font-bold text-ink sm:text-5xl">
              Big civil jobs. Small enough to care.
            </h1>
            <p className="mt-5 max-w-md text-lg leading-8 text-warm">
              Family-owned earthworks, civil construction and plumbing across the
              Riverina — over a decade of it, done properly. No job too big or small.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-full bg-brand px-6 py-3 text-base font-semibold text-ink transition-colors hover:bg-brand-hi"
              >
                Get a free quote
              </a>
              <a
                href="#services"
                className="rounded-full border border-ink/25 px-6 py-3 text-base font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
              >
                Our services
              </a>
            </div>
          </div>

          {/*
            Hero machine block. TODO: swap /images/hero-earthworks.jpg for the
            client-supplied 3D machine render on a transparent background
            (/images/hero-machine.png) — it will sit on this charcoal block.
          */}
          <div className="overflow-hidden rounded-2xl bg-ink shadow-xl">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/hero-earthworks.jpg"
                alt="Wagga Civil and Earthworks machinery on a Riverina site"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
            </div>
            <div className="chevron-rule" />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-ink">
        <div className="mx-auto flex max-w-[1120px] flex-wrap items-center gap-x-6 gap-y-2 px-6 py-4 text-sm font-medium text-neutral-300">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-hi">
            Trusted for
          </span>
          <span>Excavation</span>
          <span>Bulk earthworks</span>
          <span>Road construction</span>
          <span>Dams</span>
          <span>Site clearing</span>
          <span>Plumbing &amp; gas</span>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-[1120px] px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            What we do
          </p>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
            Earthworks and civil, plus plumbing &amp; gas
          </h2>
          <p className="mt-4 text-lg leading-8 text-warm">
            Delivered with precision, safety and local know-how — from a 14-tonne
            excavation job to a blocked drain.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.slug}
              className="group overflow-hidden rounded-xl border border-black/10 bg-white transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-warm">{service.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Fleet */}
      <section id="fleet" className="bg-concrete py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Our fleet
          </p>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">
            The gear to get it done
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-warm">
            Modern, well-maintained machinery for jobs of every size across the
            Riverina.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {fleet.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-black/10 bg-white px-5 py-6 text-center font-display text-sm font-semibold text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-brand">
        <div className="mx-auto flex max-w-[1120px] flex-col items-start justify-between gap-6 px-6 py-16 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">
              Planning a project? Let&apos;s talk.
            </h2>
            <p className="mt-2 text-ink/80">
              Free quotes across Wagga Wagga and the Riverina. No job too big or small.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {site.contacts.map((c) => (
              <a
                key={c.phone}
                href={`tel:${c.phone.replace(/\s/g, "")}`}
                className="rounded-full bg-ink px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-black"
              >
                {c.name} · {c.phone}
              </a>
            ))}
            <a
              href={`mailto:${site.email}`}
              className="rounded-full border border-ink/40 px-6 py-3 text-base font-semibold text-ink transition-colors hover:bg-white/30"
            >
              Email us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
