"use client";

import { useEffect, useRef } from "react";

const SCREENS = [
  {
    src: "/mock/cover-tinsderm.png",
    alt: "TINS DERM, hero section, 'Nurture your glow'",
    path: "tinsderm.com",
    kind: "browser" as const,
  },
  {
    src: "/mock/tinsderm-services.png",
    alt: "TINS DERM, services grid with line-icon treatment cards",
    path: "tinsderm.com/#services",
    kind: "browser" as const,
  },
  {
    src: "/mock/tinsderm-results.png",
    alt: "TINS DERM, before/after real results gallery",
    path: "tinsderm.com/#results",
    kind: "browser" as const,
  },
  {
    src: "/mock/tinsderm-testimonials.png",
    alt: "TINS DERM, patient testimonials carousel",
    path: "tinsderm.com/#testimonials",
    kind: "browser" as const,
  },
  {
    src: "/mock/tinsderm-mobile.png",
    alt: "TINS DERM, mobile hero, responsive layout",
    path: "",
    kind: "phone" as const,
  },
];

const DUPLICATED = [...SCREENS, ...SCREENS];

function BrowserChrome({ path }: { path: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        padding: "10px 12px",
        background: "#26221D",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {["#E8867A", "#E8C77A", "#8FCF9B"].map((c) => (
        <span
          key={c}
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: c,
            opacity: 0.8,
            flexShrink: 0,
          }}
        />
      ))}
      <span
        style={{
          marginLeft: "8px",
          flex: 1,
          fontFamily: "var(--font-sans), sans-serif",
          fontSize: "10px",
          color: "rgba(232,229,224,0.35)",
          background: "rgba(255,255,255,0.04)",
          borderRadius: "4px",
          padding: "3px 10px",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {path}
      </span>
    </div>
  );
}

export default function BrowserCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
        overflow: "hidden",
      }}
    >
      <div
        ref={trackRef}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "clamp(1.25rem, 2.5vw, 2rem)",
          padding: "clamp(1rem, 2vw, 1.5rem) clamp(2rem, 6vw, 5rem)",
          willChange: "transform",
        }}
      >
        {DUPLICATED.map(({ src, alt, path, kind }, i) => (
          <div
            key={`${src}-${i}`}
            style={{
              flexShrink: 0,
              width: kind === "phone" ? "220px" : "420px",
            }}
          >
            <div
              style={{
                borderRadius: kind === "phone" ? "28px" : "10px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.06)",
                boxShadow: "0 16px 48px rgba(0,0,0,0.4)",
                background: "#1F1E1C",
              }}
            >
              {kind === "browser" && <BrowserChrome path={path} />}
              <img
                src={src}
                alt={alt}
                style={{
                  width: "100%",
                  display: "block",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
