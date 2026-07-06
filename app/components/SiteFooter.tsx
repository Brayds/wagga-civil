import Link from "next/link";
import { site, services } from "@/content/site";

export function SiteFooter() {
  const { address } = site;
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="cols">
          <div>
            <h4>Wagga Civil &amp; Earthworks</h4>
            <p>
              Civil construction, earthworks, drainage, plumbing and gas across
              Wagga Wagga and the Riverina. Built from {site.heritage.join(" and ")}.
            </p>
            <p>
              {address.street}, {address.suburb}
              <br />
              {address.city} {address.state} {address.postcode}
            </p>
          </div>

          <div>
            <h4>Services</h4>
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}>
                {s.shortTitle ?? s.title}
              </Link>
            ))}
          </div>

          <div>
            <h4>Get in touch</h4>
            {site.contacts.map((c) => (
              <a key={c.tel} href={`tel:${c.tel}`}>
                {c.name} · {c.phone}
              </a>
            ))}
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <p>{site.hours}, Riverina wide</p>
          </div>
        </div>

        <div className="fine">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>Wagga Wagga · Junee · Coolamon · Griffith · Temora</span>
          <span>{site.domain}</span>
        </div>
      </div>
    </footer>
  );
}
