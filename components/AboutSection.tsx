"use client";

import { Footprints, Clapperboard, Coffee, MountainSnow } from "lucide-react";
import { IconBallFootball, IconGolf } from "@tabler/icons-react";

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

const HOBBY_ICONS: Record<string, React.ComponentType<IconProps>> = {
  Football: fromTabler(IconBallFootball),
  Hiking: Footprints,
  Movies: Clapperboard,
  Golf: fromTabler(IconGolf),
  "Coffee shops": Coffee,
  Snowboard: MountainSnow,
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
          position: "relative",
          zIndex: 1,
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
          <span
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "15px",
              lineHeight: 1.5,
              color: "#7A7773",
            }}
          >
            Buenos Aires, <span style={{ color: "#E8E5E0" }}>Argentina</span>
          </span>
          <p
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "17px",
              lineHeight: 1.75,
              color: "#7A7773",
            }}
          >
            I&apos;m a <span style={{ color: "#E8E5E0" }}>Product Designer</span> based in Buenos Aires, always focused on
            the gap between what a product does and how people actually
            experience it.
          </p>
        </div>

        {/* Right: details */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {[
            {
              label: "Hobbies",
              items: ["Football", "Hiking", "Movies", "Golf", "Coffee shops", "Snowboard"],
            },
          ].map(({ label, items }) => (
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
                  const Icon = HOBBY_ICONS[item];
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
    </section>
  );
}
