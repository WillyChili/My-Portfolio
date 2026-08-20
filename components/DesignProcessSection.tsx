"use client";

import { useEffect, useRef, useState } from "react";
import { FileText } from "lucide-react";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";
import {
  type IconProps,
  MobbinIcon,
  ClaudeIcon,
  FigmaIcon,
  CursorIcon,
} from "@/components/icons/BrandIcons";

const NODES = [
  {
    id: "mobbin",
    label: "Mobbin",
    accent: "#8FA6E8",
    Icon: MobbinIcon,
    caption: "I start in Mobbin, studying how the best products solve the same problem.",
  },
  {
    id: "claude-think",
    label: "Claude",
    accent: "#D97757",
    Icon: ClaudeIcon,
    caption: "Then I think out loud with Claude, turning research into a point of view.",
  },
  {
    id: "cursor-system",
    label: "Cursor",
    accent: "#B0ADA8",
    Icon: CursorIcon,
    caption: "From there, I build a design system in Cursor, the components everything else reuses.",
  },
  {
    id: "figma",
    label: "Figma",
    accent: "#F24E1E",
    Icon: FigmaIcon,
    caption: "That system moves into Figma, documented so it's easy to design with.",
  },
  {
    id: "cursor-product",
    label: "Cursor",
    accent: "#B0ADA8",
    Icon: CursorIcon,
    caption: "Back in Cursor, the design starts behaving like a real product.",
  },
  {
    id: "claude-code",
    label: "Claude Code",
    accent: "#D97757",
    Icon: ClaudeIcon,
    caption: "Claude Code turns it into working HTML, CSS, and JS: fast, testable prototypes.",
  },
  {
    id: "docs",
    label: "Documentation",
    accent: "#8FCF9B",
    Icon: (p: IconProps) => <FileText size={p.size} color={p.color} strokeWidth={1.75} />,
    caption: "Every decision gets written down, so the reasoning outlives the file.",
  },
];

const EASE = "cubic-bezier(0.23, 1, 0.32, 1)";
const DOTS_BG =
  "repeating-linear-gradient(to right, currentColor 0, currentColor 3px, transparent 3px, transparent 11px)";

// Looping "lighting up" cycle: the line grows, holds fully lit, fades out,
// then pauses before repeating — so a visitor who lingers on the section
// gets to watch the sweep happen more than once.
const TOTAL_CYCLE_MS = 6000;
const GROWTH_PCT = 55;
const HOLD_END_PCT = 72;
const FADE_END_PCT = 84;

// The dotted line reveals via clip-path rather than a scaleX transform.
// scaleX stretches the element's own background pattern as it grows,
// which visibly distorts the dot spacing (a "rubber band" artifact).
// clip-path keeps the dot pattern's real pixel positions fixed and just
// uncovers more of it left-to-right, so each dot appears in place — the
// line looks like it's lighting up dot by dot, not being stretched.
const LINE_KEYFRAMES = `
@keyframes dp-line {
  0% { clip-path: inset(0 100% 0 0); opacity: 1; animation-timing-function: linear; }
  ${GROWTH_PCT}% { clip-path: inset(0 0% 0 0); opacity: 1; animation-timing-function: linear; }
  ${HOLD_END_PCT}% { clip-path: inset(0 0% 0 0); opacity: 1; animation-timing-function: linear; }
  ${FADE_END_PCT}% { clip-path: inset(0 0% 0 0); opacity: 0; }
  ${FADE_END_PCT + 0.1}% { clip-path: inset(0 100% 0 0); opacity: 0; }
  100% { clip-path: inset(0 100% 0 0); opacity: 0; }
}`;

function nodeKeyframesCss() {
  return NODES.map((_, i) => {
    const center = (i / (NODES.length - 1)) * GROWTH_PCT;
    const onStart = Math.max(0, center - 2.5);
    const onEnd = Math.min(GROWTH_PCT, center + 2.5);
    return `
@keyframes dp-node-${i} {
  0% { border-color: rgba(232,229,224,0.15); box-shadow: 0 0 16px -2px transparent; }
  ${onStart}% { border-color: rgba(232,229,224,0.15); box-shadow: 0 0 16px -2px transparent; }
  ${onEnd}% { border-color: var(--accent); box-shadow: 0 0 16px -2px var(--accent-glow); }
  ${HOLD_END_PCT}% { border-color: var(--accent); box-shadow: 0 0 16px -2px var(--accent-glow); }
  ${FADE_END_PCT}% { border-color: rgba(232,229,224,0.15); box-shadow: 0 0 16px -2px transparent; }
  100% { border-color: rgba(232,229,224,0.15); box-shadow: 0 0 16px -2px transparent; }
}`;
  }).join("\n");
}

export default function DesignProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="process"
      style={{
        background: "#171717",
        padding: "40px clamp(1.5rem, 6vw, 5rem)",
        position: "relative",
      }}
    >
      {/* Capped at 1200px and centered so content doesn't stretch
          edge-to-edge on very wide viewports, matching the other sections
          below the Hero. */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Section header */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            marginBottom: "clamp(3rem, 6vw, 5rem)",
            borderBottom: "1px solid rgba(232,229,224,0.08)",
            paddingBottom: "1.25rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-pixel)",
              fontSize: "13px",
              letterSpacing: "0.1em",
              color: "#B0ADA8",
            }}
          >
            Design Process
          </span>
        </div>

        {/* Intro */}
        <h2
          style={{
            fontFamily: "var(--font-sans), sans-serif",
            fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
            fontWeight: 400,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            color: "#E8E5E0",
            maxWidth: "720px",
            marginBottom: "clamp(3.5rem, 6vw, 5.5rem)",
          }}
        >
          Tools change fast.<br />The process adapts faster.
        </h2>

        {!reduced && <style>{LINE_KEYFRAMES + nodeKeyframesCss()}</style>}

        {/* Timeline */}
        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${NODES.length}, minmax(120px, 1fr))`,
            gridTemplateRows: "auto auto auto auto",
            columnGap: "clamp(0.5rem, 2vw, 1.5rem)",
            overflowX: "auto",
          }}
        >
          {NODES.map(({ id, caption }, i) => (
          <div
            key={`top-${id}`}
            style={{
              gridColumn: i + 1,
              gridRow: 1,
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            {i % 2 === 0 && (
              <p
                style={{
                  fontFamily: "var(--font-sans), sans-serif",
                  fontSize: "13.5px",
                  lineHeight: 1.5,
                  color: "#7A7773",
                  paddingBottom: "0.75rem",
                }}
              >
                {caption}
              </p>
            )}
          </div>
        ))}

        {/* Dot track row: base (dim, always on) + animated bright overlay,
            centered exactly on the icon row's own height so the line meets
            the nodes at their vertical middle, independent of the label
            row below. */}
        <div
          style={{
            gridColumn: `1 / -1`,
            gridRow: 2,
            position: "relative",
            height: "44px",
          }}
        >
          <div
            aria-hidden
            style={{
              position: "absolute",
              left: "24px",
              right: "24px",
              top: "50%",
              height: "2px",
              transform: "translateY(-50%)",
              color: "rgba(232, 229, 224, 0.15)",
              backgroundImage: DOTS_BG,
            }}
          />
          <div
            aria-hidden
            style={{
              position: "absolute",
              left: "24px",
              right: "24px",
              top: "50%",
              height: "2px",
              transform: "translateY(-50%)",
              color: "#E8E5E0",
              backgroundImage: DOTS_BG,
              ...(reduced
                ? {
                    clipPath: visible ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
                    transition: "opacity 0.6s ease, clip-path 0.6s ease",
                    opacity: visible ? 1 : 0,
                  }
                : {
                    clipPath: "inset(0 100% 0 0)",
                    opacity: visible ? 1 : 0,
                    animationName: visible ? "dp-line" : "none",
                    animationDuration: `${TOTAL_CYCLE_MS}ms`,
                    animationIterationCount: "infinite",
                    animationTimingFunction: EASE,
                  }),
            }}
          />

          <div
            style={{
              position: "relative",
              display: "grid",
              gridTemplateColumns: `repeat(${NODES.length}, minmax(120px, 1fr))`,
              height: "100%",
            }}
          >
            {NODES.map(({ id, label, accent, Icon }, i) => {
              return (
                <div
                  key={id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                  }}
                >
                  <div
                    title={label}
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      background: "#1F1E1C",
                      borderStyle: "solid",
                      borderWidth: "1px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      ["--accent" as string]: accent,
                      ["--accent-glow" as string]: `${accent}66`,
                      ...(reduced
                        ? {
                            borderColor: visible ? accent : "rgba(232,229,224,0.15)",
                            boxShadow: visible ? `0 0 16px -2px ${accent}66` : "none",
                            transition: `border-color 0.4s ease, box-shadow 0.4s ease`,
                          }
                        : {
                            borderColor: "rgba(232,229,224,0.15)",
                            boxShadow: "0 0 16px -2px transparent",
                            animationName: visible ? `dp-node-${i}` : "none",
                            animationDuration: `${TOTAL_CYCLE_MS}ms`,
                            animationIterationCount: "infinite",
                            animationTimingFunction: EASE,
                          }),
                    }}
                  >
                    <Icon size={19} color="#E8E5E0" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Label row, directly under the icons */}
        <div
          style={{
            gridColumn: `1 / -1`,
            gridRow: 3,
            display: "grid",
            gridTemplateColumns: `repeat(${NODES.length}, minmax(120px, 1fr))`,
            marginTop: "0.6rem",
          }}
        >
          {NODES.map(({ id, label }) => (
            <div key={id} style={{ display: "flex", justifyContent: "center" }}>
              <span
                style={{
                  fontFamily: "var(--font-pixel)",
                  fontSize: "10px",
                  letterSpacing: "0.06em",
                  color: "#6B6862",
                  whiteSpace: "nowrap",
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        {NODES.map(({ id, caption }, i) => (
          <div
            key={`bottom-${id}`}
            style={{
              gridColumn: i + 1,
              gridRow: 4,
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            {i % 2 === 1 && (
              <p
                style={{
                  fontFamily: "var(--font-sans), sans-serif",
                  fontSize: "13.5px",
                  lineHeight: 1.5,
                  color: "#7A7773",
                  paddingTop: "1.1rem",
                }}
              >
                {caption}
              </p>
            )}
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
