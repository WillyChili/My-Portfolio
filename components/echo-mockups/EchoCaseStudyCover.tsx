"use client";
import { Dithering } from "@paper-design/shaders-react";

/**
 * Case-study hero cover for Echo: a live animated Dithering shader
 * (paper-design) background behind a real 3D phone mockup render.
 * No title/subtitle overlay, the page's own <h1> covers that.
 *
 * Also reused (with `caption={false}`) as the Echo thumbnail on the
 * home page project list, so both places show the same shader + mockup.
 */
export default function EchoCaseStudyCover({ caption = true }: { caption?: boolean }) {
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
        style={{ position: "absolute", left: 0, right: 0, top: "20%", width: "100%", height: "100%" }}
      />

      {/* Short catch line, top-left, one word per line */}
      {caption && (
        <div
          style={{
            position: "absolute",
            left: "6.5%",
            top: "8%",
            fontFamily: "var(--font-sans), sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.4rem, 3.2vw, 2.1rem)",
            letterSpacing: "-0.01em",
            lineHeight: 1.15,
            color: "#FFFFFF",
          }}
        >
          <div>Speak</div>
          <div>your</div>
          <div>mind.</div>
        </div>
      )}

      {/* Phone mockup: real 3D render (login screen), shadow baked into the asset */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/echo/login-mockup-3d.webp"
        alt="Echo, login screen, 3D phone mockup"
        style={{
          position: "absolute",
          right: "2%",
          top: "50%",
          height: "88%",
          width: "auto",
          transform: "translateY(-50%)",
          objectFit: "contain",
        }}
      />

    </div>
  );
}
