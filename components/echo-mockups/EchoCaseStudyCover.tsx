"use client";
import { Dithering } from "@paper-design/shaders-react";

/**
 * Case-study hero cover for Echo. Same phone mockup + title/subtitle
 * treatment as the static cover-thumbnail.webp, but with a live
 * animated Dithering shader (paper-design) as the background instead
 * of the baked paper-grain texture, since this slot doesn't need to be
 * a static image.
 */
export default function EchoCaseStudyCover() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        background:
          "radial-gradient(ellipse 65% 55% at 82% 12%, rgba(24,36,30,0.55) 0%, transparent 62%), " +
          "radial-gradient(ellipse 75% 65% at 10% 90%, rgba(4,4,4,0.65) 0%, transparent 68%), " +
          "radial-gradient(ellipse 55% 45% at 45% 45%, rgba(14,22,19,0.4) 0%, transparent 72%), " +
          "linear-gradient(135deg, #0A0A0A 0%, #0D1512 50%, #08100C 100%)",
        overflow: "hidden",
      }}
    >
      <Dithering
        speed={1.78}
        shape="wave"
        type="2x2"
        size={2.7}
        scale={0.31}
        colorBack="#00000000"
        colorFront="#2CD59C"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      />

      {/* Phone mockup: real 3D render (login screen), shadow baked into the asset */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/echo/login-mockup-3d.webp"
        alt="Echo, login screen, 3D phone mockup"
        style={{
          position: "absolute",
          right: "-2%",
          top: "50%",
          height: "88%",
          width: "auto",
          transform: "translateY(-50%)",
          objectFit: "contain",
        }}
      />

      {/* Scrim so the title stays legible over the shader */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at 6% 8%, rgba(0,0,0,0.6) 0%, transparent 55%)",
          pointerEvents: "none",
        }}
      />

      {/* Title + subtitle, max 2 levels of text */}
      <div style={{ position: "absolute", left: "6.5%", top: "8%" }}>
        <div
          style={{
            fontFamily: "var(--font-sans), sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            letterSpacing: "-0.02em",
            color: "#F3F1EC",
            lineHeight: 1,
          }}
        >
          Echo
        </div>
        <div
          style={{
            fontFamily: "var(--font-pixel), monospace",
            fontWeight: 700,
            fontSize: "clamp(0.7rem, 1.2vw, 0.95rem)",
            letterSpacing: "0.1em",
            color: "#2CD59C",
            marginTop: "0.5rem",
          }}
        >
          AI JOURNALING APP
        </div>
      </div>
    </div>
  );
}
