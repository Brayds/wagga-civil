import type { Metadata } from "next";
import "./globals.css";
import { archivo, plexMono } from "./fonts";
import { site } from "@/content/site";
import { themeCss } from "@/content/theme";
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
        {/* The palette, straight from content/theme.ts. Rendered here rather
            than declared in globals.css so there is exactly one source of
            truth for colour: the stylesheet only ever reads var(--…), and
            app/manifest.ts reads the same object. */}
        <style dangerouslySetInnerHTML={{ __html: themeCss() }} />

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
        {/* Key-event tracking: one listener for every phone and email link on
            the site, so links on new pages are covered automatically. Sends
            'phone_call' (with who was called) and 'email_click' to Analytics.
            Nothing visible changes and the link still opens as normal. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
var names=${JSON.stringify(
              Object.fromEntries(site.contacts.map((c) => [c.tel, c.name]))
            )};
document.addEventListener('click',function(e){
var a=e.target&&e.target.closest&&e.target.closest('a[href^="tel:"],a[href^="mailto:"]');
if(!a||typeof gtag!=='function')return;
var href=a.getAttribute('href');var page=location.pathname;
if(href.indexOf('tel:')===0){var tel=href.slice(4);
gtag('event','phone_call',{contact_name:names[tel]||'Other',phone_number:tel,page_path:page,transport_type:'beacon'});}
else{gtag('event','email_click',{email_address:href.slice(7),page_path:page,transport_type:'beacon'});}
},true);
})();`,
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
