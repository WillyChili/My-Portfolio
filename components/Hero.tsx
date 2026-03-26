"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const move = (e: MouseEvent) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
      glow.style.opacity = "1";
    };

    const leave = () => { if (glow) glow.style.opacity = "0"; };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <>
      {/* Mouse glow */}
      <div
        ref={glowRef}
        style={{
          position: "fixed",
          width: "340px",
          height: "340px",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 0,
          opacity: 0,
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 35%, transparent 70%)",
          transition: "opacity 0.3s ease",
        }}
      />

      <main
        style={{
          height: "100dvh",
          display: "grid",
          gridTemplateRows: "1fr auto",
          padding: "clamp(1.5rem, 4vw, 3rem)",
          position: "relative",
          zIndex: 1,
          background: `
            radial-gradient(ellipse at 8% 50%, rgba(140, 120, 255, 0.07) 0%, transparent 55%),
            #171717
          `,
        }}
      >
        {/* Center: copy */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: "fadeIn 1.2s ease both",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "48px",
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              color: "#E8E5E0",
              textAlign: "center",
              userSelect: "none",
            }}
          >
            I care about the details no one notices<br />
            but everyone feels.
          </h2>
        </div>

        {/* Bottom row */}
        <footer
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
            animation: "fadeIn 1.2s ease 0.4s both",
            margin: "0 calc(clamp(1.5rem, 4vw, 3rem) * -1)",
            padding: "1rem clamp(1.5rem, 4vw, 3rem)",
            background: "rgba(0,0,0,0.25)",
          }}
        >
          <span style={{ fontFamily: "var(--font-pixel)", fontSize: "0.7rem", letterSpacing: "0.08em", color: "#B0ADA8" }}>
            Product Designer
          </span>

          <span style={{ fontFamily: "var(--font-pixel)", fontSize: "0.7rem", letterSpacing: "0.08em", color: "#B0ADA8" }}>
            Buenos Aires, AR
          </span>

          <a
            href="https://x.com/_ChiliWilly"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#B0ADA8",
              display: "flex",
              alignItems: "center",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#E8E5E0")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#B0ADA8")}
            aria-label="X (Twitter)"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </footer>
      </main>
    </>
  );
}
