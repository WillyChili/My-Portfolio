"use client";
import Link from "next/link";
import { useState } from "react";

export default function BackLink() {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href="/"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "var(--font-pixel)",
        fontSize: "14px",
        letterSpacing: "0.08em",
        color: hovered ? "#E8E5E0" : "#B0ADA8",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        transition: "color 0.2s ease",
      }}
    >
      <span
        style={{
          display: "inline-block",
          transform: hovered ? "translateX(-2px)" : "translateX(0)",
          transition: "transform 0.2s ease",
        }}
      >
        ←
      </span>
      Back
    </Link>
  );
}
