"use client";

import { Footprints, Clapperboard, Coffee, MountainSnow } from "lucide-react";
import { IconBallFootball, IconGolf } from "@tabler/icons-react";
import {
  MobbinIcon,
  ClaudeIcon,
  FigmaIcon,
  CursorIcon,
  FigJamIcon,
  PaperIcon,
  V0Icon,
} from "@/components/icons/BrandIcons";

type IconProps = { size?: number; strokeWidth?: number; color?: string };

// Wraps a Tabler icon (which uses a `stroke` prop) so it accepts the same
// { size, strokeWidth, color } interface as the Lucide icons above.
function fromTabler(
  Icon: React.ComponentType<{ size?: number; stroke?: number; color?: string }>
): React.ComponentType<IconProps> {
  return function TablerIcon({ size, strokeWidth, color }: IconProps) {
    return <Icon size={size} stroke={strokeWidth} color={color} />;
  };
}

// Wraps a brand icon (Mobbin/Claude/Figma/Cursor, which only take
// { size, color }) so it accepts the same interface as the icons above.
function fromBrand(
  Icon: React.ComponentType<{ size?: number; color?: string }>
): React.ComponentType<IconProps> {
  return function BrandIconWrapped({ size, color }: IconProps) {
    return <Icon size={size} color={color} />;
  };
}

const HOBBY_ICONS: Record<string, React.ComponentType<IconProps>> = {
  Football: fromTabler(IconBallFootball),
  Hiking: Footprints,
  Movies: Clapperboard,
  Golf: fromTabler(IconGolf),
  "Coffee shops": Coffee,
  Snowboard: MountainSnow,
};

const TOOLKIT_ICONS: Record<string, React.ComponentType<IconProps>> = {
  Figma: fromBrand(FigmaIcon),
  FigJam: fromBrand(FigJamIcon),
  Cursor: fromBrand(CursorIcon),
  Claude: fromBrand(ClaudeIcon),
  Mobbin: fromBrand(MobbinIcon),
  Paper: fromBrand(PaperIcon),
  v0: fromBrand(V0Icon),
};

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        background: "#171717",
        padding: "40px clamp(1.5rem, 6vw, 5rem)",
        position: "relative",
      }}
    >
      {/* Capped at 1200px so content doesn't stretch edge-to-edge on very
          wide viewports, matching the other sections below the Hero. Not
          centered — stays flush with the section's left padding. */}
      <div style={{ maxWidth: "1200px", position: "relative", zIndex: 1 }}>
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
            About
          </span>
        </div>

        {/* Content grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(3rem, 6vw, 6rem)",
            alignItems: "start",
            maxWidth: "1100px",
          }}
        >
          {/* Left: bio */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2
              style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 400,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                color: "#E8E5E0",
              }}
            >
              The best interface is the one no one has to think about.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: "17px",
                lineHeight: 1.75,
                color: "#7A7773",
              }}
            >
              I&apos;m a <span style={{ color: "#E8E5E0" }}>Product Designer</span> based in{" "}
              <span style={{ color: "#E8E5E0" }}>Buenos Aires, Argentina</span>, always focused on
              the gap between what a product does and how people actually
              experience it.
            </p>
          </div>

          {/* Right: details */}
          <div style={{ display: "flex", flexDirection: "row", gap: "clamp(2rem, 4vw, 3.5rem)" }}>
            {[
              {
                label: "Toolkit",
                items: ["Figma", "FigJam", "Cursor", "Claude", "Mobbin", "Paper", "v0"],
                icons: TOOLKIT_ICONS,
              },
              {
                label: "Hobbies",
                items: ["Football", "Hiking", "Movies", "Golf", "Coffee shops", "Snowboard"],
                icons: HOBBY_ICONS,
              },
            ].map(({ label, items, icons }) => (
              <div key={label} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <span
                  style={{
                    fontFamily: "var(--font-pixel)",
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    color: "#6B6862",
                  }}
                >
                  {label}
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  {items.map((item) => {
                    const Icon = icons[item];
                    return (
                      <div
                        key={item}
                        style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}
                      >
                        {Icon && <Icon size={16} strokeWidth={1.5} color="#7A7773" />}
                        <span
                          style={{
                            fontFamily: "var(--font-sans), sans-serif",
                            fontSize: "15px",
                            color: "#B0ADA8",
                          }}
                        >
                          {item}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
