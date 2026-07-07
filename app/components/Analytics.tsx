import Script from "next/script";

// Google Analytics 4 (gtag.js), loaded via the built-in next/script.
//
// Dormant until NEXT_PUBLIC_GA_ID is set: with no ID this renders nothing, so
// the tag never loads in dev or on branches without the env var. When the
// client sends the Measurement ID (looks like "G-XXXXXXXXXX"), set it in
//   - .env.local   (local dev)
//   - Vercel → Project → Settings → Environment Variables (production)
// and redeploy. No code change needed to switch it on.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export function Analytics() {
  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
