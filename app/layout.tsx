import type { Metadata } from "next";
import "./globals.css";
import { archivo, plexMono } from "./fonts";
import { site } from "@/content/site";
import { SITE_URL, localBusinessJsonLd, websiteJsonLd } from "@/lib/seo";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { JsonLd } from "./components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name} | Civil, Earthworks & Drainage, Wagga Wagga`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: site.name,
    description: site.description,
    url: SITE_URL,
    siteName: site.name,
    locale: "en_AU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-AU"
      data-scroll-behavior="smooth"
      className={`${archivo.variable} ${plexMono.variable}`}
    >
      <head>
        {/* Google Analytics (gtag.js) — full snippet hardcoded in <head>.
            Google Search Console's "Google Analytics" ownership verification
            fetches the raw HTML (no JS) and needs BOTH the loader AND the
            gtag('config') line literally in <head>. next/script and React
            script-hoisting both leave the inline config in <body>, which fails
            verification, so we render raw <script> tags directly in <head>. */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Z73C61SZ33"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-Z73C61SZ33');`,
          }}
        />
      </head>
      <body>
        <JsonLd data={[localBusinessJsonLd(), websiteJsonLd()]} />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
