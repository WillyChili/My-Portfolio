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
        background: "linear-gradient(135deg, #0A0A0A 0%, #0D1512 50%, #0A0A0A 100%)",
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

      {/* Phone mockup, same treatment as cover-thumbnail.webp / EchoCover */}
      <div
        style={{
          position: "absolute",
          right: "6%",
          top: "50%",
          height: "92%",
          aspectRatio: "9.35 / 20.24",
          transform: "translateY(-50%) rotate(-4deg)",
          filter:
            "drop-shadow(0 40px 60px rgba(0,0,0,0.6)) drop-shadow(0 20px 30px rgba(0,0,0,0.4))",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "14%",
            background: "linear-gradient(145deg, #2a2a2c 0%, #1a1a1c 40%, #0a0a0c 100%)",
            padding: "3.5%",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: "1.8%",
              borderRadius: "12%",
              background: "#000",
              overflow: "hidden",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/echo/home-notes.jpeg"
              alt="Echo, daily notes screen"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            {/* Screen glare */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(115deg, rgba(255,255,255,0.06) 0%, transparent 30%, transparent 70%, rgba(255,255,255,0.03) 100%)",
                pointerEvents: "none",
              }}
            />
          </div>
        </div>
      </div>

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
