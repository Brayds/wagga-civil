import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-neutral-800 bg-neutral-950 text-neutral-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold text-white">{site.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-neutral-400">
            {site.tagline}. Family-owned, over a decade of local experience.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-500">
            Get in touch
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-white">
                {site.phone}
              </a>
            </li>
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
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-500">
            Service areas
          </p>
          <p className="mt-3 text-sm leading-7 text-neutral-400">
            {site.serviceAreas.join(" · ")}
          </p>
        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-neutral-500 sm:px-6">
          © {site.name}. Serving Wagga Wagga and the Riverina.
        </div>
      </div>
    </footer>
  );
}
