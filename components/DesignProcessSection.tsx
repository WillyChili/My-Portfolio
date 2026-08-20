"use client";

import { useEffect, useRef, useState } from "react";
import { FileText } from "lucide-react";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";

type IconProps = { size?: number; color?: string };

// Mobbin's real logomark: a transparent-background raster (their brand
// assets aren't distributed as an npm/vector package), inverted from
// black to the site's off-white so it reads consistently with the
// vector brand icons below instead of clashing as a stray black glyph
// on the dark badge.
function MobbinIcon({ size = 20 }: IconProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/mobbin.png"
      alt=""
      width={size}
      height={size}
      style={{ filter: "invert(1)", display: "block" }}
    />
  );
}

function ClaudeIcon({ size = 20, color = "#E8E5E0" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z" />
    </svg>
  );
}

function FigmaIcon({ size = 20, color = "#E8E5E0" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" />
    </svg>
  );
}

function CursorIcon({ size = 20, color = "#E8E5E0" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M11.503.131 1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0M2.657 6.338h18.55c.263 0 .43.287.297.515L12.23 22.918c-.062.107-.229.064-.229-.06V12.335a.59.59 0 0 0-.295-.51l-9.11-5.257c-.109-.063-.064-.23.061-.23" />
    </svg>
  );
}

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
      {/* Section header */}
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          marginBottom: "clamp(3rem, 6vw, 5rem)",
          borderBottom: "1px solid rgba(232,229,224,0.08)",
          paddingBottom: "1.25rem",
          position: "relative",
          zIndex: 1,
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
          position: "relative",
          zIndex: 1,
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
          maxWidth: "1200px",
          margin: "0 auto",
          overflowX: "auto",
          position: "relative",
          zIndex: 1,
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
    </section>
  );
}
