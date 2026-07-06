// The signature device: a hand-drawn ink "ground line" — the horizon from the
// client's sketch — that threads through the page as the section divider,
// dipping into a cut and rising into a fill. Colour comes from `currentColor`
// so it can render ink-blue on paper or hi-vis on the dark bands.
export function GroundLine({ className = "" }: { className?: string }) {
  const d =
    "M0,30 C120,30 160,12 300,14 C430,16 470,40 620,40 C760,40 800,8 960,20 C1120,32 1160,30 1300,26 C1420,22 1460,34 1600,32";
  return (
    <div className={`ground ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1600 46" preserveAspectRatio="none">
        <path d={d} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <path d={d} fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" transform="translate(0,4)" opacity="0.4" />
      </svg>
    </div>
  );
}
