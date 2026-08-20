"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";

const SCREENS = [
  { src: "/echo/login.jpeg", alt: "Login, echo, tu reflexión personal con IA" },
  { src: "/echo/onboarding-1.jpeg", alt: "Hi, I'm Echo, welcome screen" },
  { src: "/echo/onboarding-2.jpeg", alt: "What should I call you? Personalization" },
  { src: "/echo/onboarding-3.jpeg", alt: "Share. I'm listening, value proposition" },
  { src: "/echo/home-empty.jpeg", alt: "Home, empty state with voice input" },
  { src: "/echo/home-listening.jpeg", alt: "Home, voice recording active" },
  { src: "/echo/home-first-note.jpeg", alt: "Home, first note saved" },
  { src: "/echo/home-notes.jpeg", alt: "Home, notes list with entries" },
  { src: "/echo/echo-summary.jpeg", alt: "Echo, AI-generated daily summary" },
  { src: "/echo/home-select.jpeg", alt: "Home, note selection mode" },
  { src: "/echo/settings.jpeg", alt: "Settings, appearance, language, personality" },
];

const DUPLICATED = [...SCREENS, ...SCREENS];

export default function ScreensCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    // Continuous auto-scroll is purely decorative — for
    // prefers-reduced-motion, skip it entirely rather than slow it down,
    // and let people browse the (non-duplicated) strip manually instead.
    if (reduced) return;

    const track = trackRef.current;
    if (!track) return;

    let animId: number;
    let pos = 0;
    const speed = 0.5;

    const step = () => {
      pos += speed;
      const halfWidth = track.scrollWidth / 2;
      if (pos >= halfWidth) pos = 0;
      track.style.transform = `translateX(-${pos}px)`;
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [reduced]);

  const items = reduced ? SCREENS : DUPLICATED;

  return (
    <div
      style={{
        width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
        overflow: reduced ? "auto" : "hidden",
        WebkitOverflowScrolling: reduced ? "touch" : undefined,
      }}
    >
      <div
        ref={trackRef}
        style={{
          display: "flex",
          gap: "clamp(1rem, 2vw, 1.5rem)",
          padding: reduced
            ? "clamp(2rem, 4vw, 3rem) clamp(1.5rem, 6vw, 5rem)"
            : "clamp(2rem, 4vw, 3rem) 0",
          willChange: reduced ? undefined : "transform",
        }}
      >
        {items.map(({ src, alt }, i) => (
          <div
            key={`${src}-${i}`}
            style={{
              flexShrink: 0,
              width: "260px",
            }}
          >
            <img
              src={src}
              alt={alt}
              style={{
                width: "100%",
                borderRadius: "24px",
                border: "1px solid rgba(255,255,255,0.06)",
                boxShadow: "0 16px 48px rgba(0,0,0,0.4)",
                display: "block",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
