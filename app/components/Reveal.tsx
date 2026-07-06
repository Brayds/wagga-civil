"use client";

import { useEffect } from "react";

// Progressive-enhancement reveal. Content ships visible; this adds `reveal-ready`
// to <html> (which is what arms the opacity:0 start state in CSS) and then reveals
// each `.rv` as it scrolls in. If JS never runs, nothing is ever hidden.
export function Reveal() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("reveal-ready");

    const els = Array.from(document.querySelectorAll<HTMLElement>(".rv"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i % 7, 6) * 55}ms`;
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return null;
}
