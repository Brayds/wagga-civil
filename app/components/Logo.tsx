// Wordmark mark: a ruled notebook square with an ink ground/plant profile and a
// hi-vis base line. Echoes the sketch (drawn machine on a ground line).
export function LogoMark({ className = "mark" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="36" height="36" style={{ stroke: "var(--pen)" }} strokeWidth="2.2" />
      <path d="M7 27 L15 27 L19 19 L24 27 L33 27" style={{ stroke: "var(--ink)" }} strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" />
      <path d="M7 32 L33 32" style={{ stroke: "var(--hivis)" }} strokeWidth="2.6" strokeLinecap="round" />
      <circle cx="13" cy="12" r="2.2" style={{ fill: "var(--pen)" }} />
    </svg>
  );
}
