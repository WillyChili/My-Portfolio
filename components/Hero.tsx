"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const brightGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let rafId: number;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      currentX = lerp(currentX, targetX, 0.08);
      currentY = lerp(currentY, targetY, 0.08);
      if (brightGridRef.current) {
        const mask = `radial-gradient(180px circle at ${currentX}px ${currentY}px, black 0%, transparent 100%)`;
        (brightGridRef.current.style as CSSStyleDeclaration & { webkitMaskImage: string }).webkitMaskImage = mask;
        brightGridRef.current.style.maskImage = mask;
      }
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <main
      style={{
        height: "100dvh",
        display: "grid",
        gridTemplateRows: "1fr auto auto",
        rowGap: "clamp(1.5rem, 4vw, 3rem)",
        padding: "clamp(1.5rem, 4vw, 3rem)",
        position: "relative",
        overflow: "hidden",
        background: "#171717",
      }}
    >
      {/* Base dot grid — always dim */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          backgroundImage: `radial-gradient(circle, rgba(232, 229, 224, 0.1) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Bright dot grid — revealed near cursor */}
      <div
        ref={brightGridRef}
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 1,
          backgroundImage: `radial-gradient(circle, rgba(232, 229, 224, 0.65) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          maskImage: "none",
          WebkitMaskImage: "none",
        }}
      />

      {/* Center: copy */}
      <div
        style={{
          gridRow: "1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          animation: "fadeIn 1.2s ease both",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}>
          <span style={{
            fontFamily: "var(--font-pixel)",
            fontSize: "16px",
            letterSpacing: "0.06em",
            color: "#B0ADA8",
            userSelect: "none",
          }}>
            charly chaves
          </span>
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
            Always curious. Thinking about<br />
            the person on the other end.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: 1.6,
              letterSpacing: "0em",
              color: "#C4C0BA",
              textAlign: "center",
              maxWidth: "640px",
              userSelect: "none",
            }}
          >
            The ordinary moments are the ones that matter most.<br />
            I make sure they feel that way.
          </p>
        </div>
      </div>

      {/* Companies strip */}
      <div
        style={{
          gridRow: "2",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "clamp(1rem, 2.5vw, 2rem)",
          animation: "fadeIn 1.2s ease 0.6s both",
          position: "relative",
          top: "-3rem",
          zIndex: 2,
        }}
      >
        {[
          { src: "/upwork.png", alt: "Upwork", href: "https://www.upwork.com/freelancers/~010a617462fe6d7f5e", width: "160px", height: "72px", marginRight: "0", invertOnHover: false },
          { src: "/traditum.png", alt: "Traditum", href: "https://institucional.traditum.com/", width: "280px", height: "72px", marginRight: "0", invertOnHover: false },
          { src: "/concntric.svg", alt: "ConCntric", href: "https://concntric.com/", width: "179px", height: "46px", marginRight: "2rem", invertOnHover: false },
          { src: "/coderhouse.png", alt: "Coderhouse", href: "https://www.coderhouse.com/ar/", width: "280px", height: "72px", marginRight: "0", invertOnHover: false },
        ].map(({ src, alt, href, width, height, marginRight, invertOnHover }) => (
          <a
            key={alt}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight, display: "flex" }}
          >
            <img
              src={src}
              alt={alt}
              style={{
                width,
                height,
                objectFit: "contain",
                mixBlendMode: "screen",
                opacity: 0.45,
                filter: "grayscale(1)",
                transition: "opacity 0.3s, filter 0.3s, mix-blend-mode 0s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.opacity = "1";
                el.style.filter = invertOnHover ? "invert(1)" : "none";
                (el.style as CSSStyleDeclaration & { mixBlendMode: string }).mixBlendMode = "normal";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.opacity = "0.45";
                el.style.filter = "grayscale(1)";
                (el.style as CSSStyleDeclaration & { mixBlendMode: string }).mixBlendMode = "screen";
              }}
            />
          </a>
        ))}
      </div>

      {/* Bottom row */}
      <footer
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
          gridRow: "3",
          animation: "fadeIn 1.2s ease 0.4s both",
          margin: "0 calc(clamp(1.5rem, 4vw, 3rem) * -1)",
          padding: "1rem clamp(1.5rem, 4vw, 3rem)",
          background: "#111111",
          position: "relative",
          zIndex: 2,
        }}
      >
        <span style={{ fontFamily: "var(--font-pixel)", fontSize: "13px", letterSpacing: "0.08em", color: "#B0ADA8" }}>
          Product Designer
        </span>

        <span style={{ fontFamily: "var(--font-pixel)", fontSize: "13px", letterSpacing: "0.08em", color: "#B0ADA8" }}>
          Buenos Aires, AR
        </span>

        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {(
            [
              { href: "https://www.linkedin.com/in/charly-chaves/", label: "LinkedIn" },
              { href: "https://github.com/WillyChili", label: "GitHub" },
              { href: "https://www.instagram.com/charly_chaves/", label: "Instagram" },
              { href: "https://x.com/_ChiliWilly", label: "X" },
            ] as { href: string; label: string }[]
          ).map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              style={{
                color: "#B0ADA8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                border: "1px solid rgba(176, 173, 168, 0.2)",
                borderRadius: "8px",
                transition: "color 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = "#E8E5E0";
                el.style.borderColor = "rgba(232, 229, 224, 0.4)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = "#B0ADA8";
                el.style.borderColor = "rgba(176, 173, 168, 0.2)";
              }}
            >
              {label === "LinkedIn" && (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
              )}
              {label === "GitHub" && (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              )}
              {label === "Instagram" && (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              )}
              {label === "X" && (
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              )}
            </a>
          ))}
        </div>
      </footer>
    </main>
  );
}
