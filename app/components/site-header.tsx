import Link from "next/link";
import { site } from "@/content/site";

const nav = [
  { href: "/#services", label: "Services" },
  { href: "/#fleet", label: "Fleet" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-concrete/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-display text-lg font-bold uppercase tracking-tight text-ink">
            Wagga Civil
          </span>
          <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand">
            and Earthworks
          </span>
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-warm transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href="/#contact"
          className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-black"
        >
          Get a quote
        </a>
      </div>
    </header>
  );
}
