import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-ink text-neutral-300">
      <div className="chevron-rule" />
      <div className="mx-auto grid max-w-[1120px] gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold text-white">{site.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-neutral-400">
            {site.tagline}. Family-owned, over a decade of local experience.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-hi">
            Get in touch
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            {site.contacts.map((c) => (
              <li key={c.phone}>
                <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="hover:text-white">
                  <span className="text-white">{c.name}</span> — {c.phone}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li className="text-neutral-400">
              {site.address.street}, {site.address.suburb}
              <br />
              {site.address.city} {site.address.state} {site.address.postcode}
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-hi">
            Service areas
          </p>
          <p className="mt-3 text-sm leading-7 text-neutral-400">
            {site.serviceAreas.join(" · ")}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1120px] px-6 py-6 text-xs text-neutral-500">
          © {site.name}. Serving Wagga Wagga and the Riverina.
        </div>
      </div>
    </footer>
  );
}
