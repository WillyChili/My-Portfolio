"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";

export type TocEntry = {
  id: string;
  number: string;
  label: string;
};

/**
 * Sticky "glossary" of chapters for the case-study template. Lives to the
 * left of the reading column on wide viewports only (rendered conditionally
 * by the page, hidden below the xl breakpoint) and tracks scroll position
 * with an IntersectionObserver so the current chapter lights up as the
 * reader passes it, the same way the page's own ChapterEyebrow numbers do
 * inline in the content.
 */
export default function CaseStudyToc({
  entries,
  accentColor,
}: {
  entries: TocEntry[];
  accentColor: string;
}) {
  const [activeId, setActiveId] = useState<string | null>(entries[0]?.id ?? null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const els = entries
      .map((entry) => document.getElementById(entry.id))
      .filter((el): el is HTMLElement => !!el);
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (observed) => {
        const visible = observed.filter((o) => o.isIntersecting);
        if (visible.length === 0) return;
        const topMost = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b
        );
        setActiveId(topMost.target.id);
      },
      // A band near the top of the viewport: a chapter "becomes current"
      // once it reaches that band, not the instant it enters the screen.
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [entries]);

  const handleClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
    if (typeof window !== "undefined" && window.history?.replaceState) {
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <nav
      aria-label="Chapters"
      style={{
        position: "sticky",
        top: "84px",
        maxHeight: "calc(100vh - 120px)",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "2px",
        // Full-bleed mockup carousels (PlatformCarousel, ScreensCarousel,
        // BrowserCarousel) escape their grid track with a negative margin
        // and pass directly underneath this sidebar as the page scrolls.
        // A solid, blurred backing (same frosted-glass treatment as the
        // top nav) keeps chapter labels legible instead of sitting bare on
        // top of a carousel screenshot, and the z-index makes sure this
        // stacking context (RevealOnScroll leaves `will-change` on
        // indefinitely, which promotes later sections above it) wins.
        background: "rgba(23, 23, 23, 0.86)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderRadius: "10px",
        padding: "10px 8px",
        margin: "-10px -8px",
        zIndex: 2,
      }}
    >
      {entries.map((entry) => (
        <TocItem
          key={entry.id}
          entry={entry}
          isActive={entry.id === activeId}
          accentColor={accentColor}
          onClick={handleClick(entry.id)}
        />
      ))}
    </nav>
  );
}

function TocItem({
  entry,
  isActive,
  accentColor,
  onClick,
}: {
  entry: TocEntry;
  isActive: boolean;
  accentColor: string;
  onClick: (e: React.MouseEvent) => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={`#${entry.id}`}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "baseline",
        gap: "10px",
        padding: "8px 0 8px 14px",
        borderLeft: `2px solid ${isActive ? accentColor : "rgba(232,229,224,0.08)"}`,
        textDecoration: "none",
        transition: "border-color 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-pixel)",
          fontSize: "11px",
          letterSpacing: "0.06em",
          color: isActive ? accentColor : "#6B6862",
          transition: "color 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
          flexShrink: 0,
        }}
      >
        {entry.number}
      </span>
      <span
        style={{
          fontFamily: "var(--font-sans), sans-serif",
          fontSize: "13px",
          lineHeight: 1.35,
          color: isActive || hovered ? "#E8E5E0" : "#8A8781",
          transition: "color 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
        }}
      >
        {entry.label}
      </span>
    </a>
  );
}
