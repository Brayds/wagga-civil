import Image from "next/image";
import { site, services, fleet } from "@/content/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-neutral-950 text-white">
        <Image
          src="/images/hero-earthworks.jpg"
          alt="Excavator working on a Riverina earthworks site"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-28 sm:px-6 sm:py-36">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-500">
            Wagga Wagga &amp; the Riverina
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Civil, earthworks, plumbing &amp; gas — one trusted local team.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-200">
            {site.name} brings together over a decade of civil construction and
            excavation with expert plumbing and gas. From detailed excavation and
            road construction to hot water and blocked drains, no job is too big or
            small.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="rounded-full bg-amber-500 px-6 py-3 text-base font-semibold text-neutral-950 transition-colors hover:bg-amber-400"
            >
              Call {site.phone}
            </a>
            <a
              href="#services"
              className="rounded-full border border-white/25 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              Our services
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
            What we do
          </h2>
          <p className="mt-4 text-lg leading-8 text-neutral-600">
            Earthworks and civil construction alongside domestic and commercial
            plumbing and gas — delivered with precision, safety and local know-how.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.slug}
              className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-neutral-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  {service.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Fleet */}
      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900">
            Our fleet
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-600">
            Modern, well-maintained machinery for jobs of every size across the
            Riverina.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {fleet.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-neutral-200 bg-white px-5 py-6 text-center text-sm font-medium text-neutral-800"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-500">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-16 sm:flex-row sm:items-center sm:px-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
              Planning a project? Let&apos;s talk.
            </h2>
            <p className="mt-2 text-neutral-900">
              Free quotes across Wagga Wagga and the Riverina. No job too big or
              small.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="rounded-full bg-neutral-950 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-neutral-800"
            >
              Call {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="rounded-full border border-neutral-950/30 px-6 py-3 text-base font-semibold text-neutral-950 transition-colors hover:bg-white/30"
            >
              Email us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
