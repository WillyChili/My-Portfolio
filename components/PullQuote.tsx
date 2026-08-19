"use client";
import { useState } from "react";

/**
 * Italic pull-quote block used inside case-study "text" sections.
 * Neutral by default; on hover, the border and background pick up
 * a soft tint of the project's accent color.
 */
export default function PullQuote({
  quote,
  accentColor,
}: {
  quote: string;
  accentColor: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        marginTop: "clamp(1.5rem, 2.5vw, 2rem)",
        padding: "clamp(1.25rem, 2vw, 1.75rem) clamp(1.5rem, 2.5vw, 2rem)",
        borderLeft: `3px solid ${hovered ? `${accentColor}80` : "rgba(232,229,224,0.18)"}`,
        background: hovered
          ? `linear-gradient(135deg, ${accentColor}14 0%, transparent 100%)`
          : "transparent",
        transition: "border-color 0.3s ease, background 0.3s ease",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-sans), sans-serif",
          fontSize: "clamp(1.125rem, 1.75vw, 1.375rem)",
          fontStyle: "italic",
          lineHeight: 1.5,
          letterSpacing: "-0.01em",
          color: "#E8E5E0",
        }}
      >
        {quote}
      </p>
    </div>
  );
}
