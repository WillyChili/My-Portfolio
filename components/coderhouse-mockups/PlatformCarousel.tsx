"use client";

import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";

const ACCENT = "#E8734A";

const SCREENS = [
  {
    src: "/coderhouse/campus-home.png",
    alt: "Student campus, home dashboard with active courses",
    path: "campus / mis cursos",
  },
  {
    src: "/coderhouse/syllabus.png",
    alt: "Redesigned syllabus with module progress and improved reading experience",
    path: "campus / temario",
  },
  {
    src: "/coderhouse/ticher-chat.png",
    alt: "Ticher, the AI tutor, answering a question inside the student campus",
    path: "campus / ticher",
  },
  {
    src: "/coderhouse/catalog.png",
    alt: "Course catalog with live workshops and on-demand tracks",
    path: "campus / catálogo",
  },
  {
    src: "/coderhouse/job-search.png",
    alt: "Ticher-powered job search matching student profile to open roles",
    path: "campus / bolsa laboral",
  },
  {
    src: "/coderhouse/community.png",
    alt: "Student forum with course discussions and community stats",
    path: "campus / foro",
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

// Screens are real product screenshots, but keep a graceful fallback: if an
// asset is ever missing, fall back to the same gradient + label treatment
// CaseStudyImage uses elsewhere instead of a broken-image icon.
function ScreenImage({ src, alt }: { src: string; alt: string }) {
  const [errored, setErrored] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Same hydration race as CaseStudyImage: a server-rendered <img> whose
    // placeholder `src` 404s can fire its native `error` event before
    // React attaches `onError` on the client, so that failure has to be
    // caught here too via `complete && naturalWidth === 0`.
    if (imgRef.current?.complete && imgRef.current.naturalWidth === 0) {
      setErrored(true);
    }
  }, [src]);

  if (errored) {
    return (
      <div
        style={{
          width: "100%",
          aspectRatio: "16 / 10",
          background: `linear-gradient(135deg, #1F1E1C 0%, ${ACCENT}22 100%)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-sans), sans-serif",
            fontSize: "13px",
            color: "rgba(232,229,224,0.15)",
            letterSpacing: "0.05em",
            textAlign: "center",
          }}
        >
          {alt}
        </span>
      </div>
    );
  }

  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      onError={() => setErrored(true)}
      style={{
        width: "100%",
        display: "block",
      }}
    />
  );
}

export default function PlatformCarousel() {
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
          alignItems: "center",
          gap: "clamp(1.25rem, 2.5vw, 2rem)",
          padding: "clamp(1rem, 2vw, 1.5rem) clamp(2rem, 6vw, 5rem)",
          willChange: reduced ? undefined : "transform",
        }}
      >
        {items.map(({ src, alt, path }, i) => (
          <div
            key={`${src}-${i}`}
            style={{
              flexShrink: 0,
              width: "420px",
            }}
          >
            <div
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.06)",
                boxShadow: "0 16px 48px rgba(0,0,0,0.4)",
                background: "#1F1E1C",
              }}
            >
              <BrowserChrome path={path} />
              <ScreenImage src={src} alt={alt} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
