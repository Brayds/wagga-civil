// Google Analytics 4 (gtag.js), emitted as RAW <script> tags rather than
// next/script. Reason: Google Search Console's "Google Analytics" ownership
// verification fetches the raw homepage HTML (no JS execution) and requires the
// full gtag snippet in <head>. next/script (any strategy) streams the inline
// gtag('config') call through React's client hydration payload in <body>, which
// the verifier can't see. React 19 hoists plain <script> elements into <head>
// during SSR, so raw tags put the whole snippet where Google looks. Verified by
// inspecting the prerendered index.html (see git history / checkpoint notes).
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
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <script
        id="ga-init"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`,
        }}
      />
    </>
  );
}
