import Image from "next/image";

// Round logo badge that sits beside the phone cards in the contact band.
// The artwork has a black ground, so it blends into the band's ink background.
export function ContactBadge() {
  return (
    <Image
      className="contact-badge"
      src="/images/logo-badge.webp"
      alt="Wagga Civil and Earthworks"
      width={220}
      height={220}
    />
  );
}
