import Link from "next/link";
import { site } from "@/content/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-lg font-bold tracking-tight text-neutral-900">
            {site.shortName}
          </span>
          <span className="text-[11px] font-medium uppercase tracking-wider text-amber-600">
            and Earthworks
          </span>
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href="/#contact"
          className="rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-neutral-950 transition-colors hover:bg-amber-400"
        >
          Get a quote
        </a>
      </div>
    </header>
  );
}
