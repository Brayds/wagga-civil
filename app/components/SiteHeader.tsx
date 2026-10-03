"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { site } from "@/content/site";
import { navLinks } from "@/content/pages";

const NAV = navLinks();

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const primary = site.contacts[0];

  return (
    <>
    <header className="site-header">
      <div className="wrap bar">
        <Link href="/" className="brand" aria-label={`${site.name} home`}>
          <Image
            src="/images/logo-wagga-civil.png"
            alt={site.name}
            width={1479}
            height={450}
            priority
            className="brand-logo"
          />
        </Link>

        <nav className="nav">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hdr-contact">
          {[...site.contacts].reverse().map((c) => (
            <a key={c.tel} href={`tel:${c.tel}`}>
              <span className="nm">{c.name}</span> {c.phone}
            </a>
          ))}
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>

        <button
          className="callbtn menutoggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
    </header>

    <div className={`drawer ${open ? "open" : ""}`}>
      {NAV.map((n) => (
        <Link key={n.href} href={n.href} onClick={() => setOpen(false)}>
          {n.label}
        </Link>
      ))}
      <a href={`tel:${primary.tel}`} onClick={() => setOpen(false)}>
        Call {primary.name} →
      </a>
    </div>
    </>
  );
}
