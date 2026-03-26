"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Staggered text reveal on load
    const letters = titleRef.current?.querySelectorAll(".letter");
    letters?.forEach((el, i) => {
      (el as HTMLElement).style.animationDelay = `${i * 0.04}s`;
      el.classList.add("animate-fade-up");
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end pb-20 px-6 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          opacity: 0.3,
        }}
      />

      {/* Big background number */}
      <div
        className="absolute right-[-2rem] top-1/2 -translate-y-1/2 font-display font-black leading-none pointer-events-none select-none"
        style={{
          fontSize: "clamp(180px, 25vw, 380px)",
          color: "transparent",
          WebkitTextStroke: "1px var(--border)",
          opacity: 0.4,
          letterSpacing: "-0.05em",
        }}
      >
        01
      </div>

      {/* Accent dot */}
      <div
        className="absolute top-32 left-6 w-3 h-3 rounded-full"
        style={{ background: "var(--accent)" }}
      />

      {/* Status badge */}
      <div
        className="absolute top-32 left-12 font-mono text-xs flex items-center gap-2"
        style={{ color: "var(--muted)", fontSize: "0.7rem", marginLeft: "2rem" }}
      >
        <span
          className="w-2 h-2 rounded-full"
          style={{ background: "#22C55E", animation: "pulse 2s infinite" }}
        />
        Disponible para proyectos
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Label */}
        <p
          className="font-mono text-sm mb-8 tracking-widest uppercase"
          style={{ color: "var(--accent)", letterSpacing: "0.25em", fontSize: "0.7rem" }}
        >
          [ Desarrollador & Diseñador ]
        </p>

        {/* Hero title */}
        <h1
          ref={titleRef}
          className="font-display font-bold leading-none mb-8"
          style={{
            fontSize: "clamp(3rem, 10vw, 9rem)",
            letterSpacing: "-0.03em",
            lineHeight: 0.92,
          }}
        >
          <span className="block overflow-hidden">
            <span
              className="block"
              style={{
                animation: "fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.1s both",
              }}
            >
              Creo cosas
            </span>
          </span>
          <span className="block overflow-hidden">
            <span
              className="block italic"
              style={{
                animation: "fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.2s both",
                color: "var(--accent)",
              }}
            >
              digitales
            </span>
          </span>
          <span className="block overflow-hidden">
            <span
              className="block"
              style={{
                animation: "fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.3s both",
              }}
            >
              que importan.
            </span>
          </span>
        </h1>

        {/* Bottom row */}
        <div
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mt-12"
          style={{ animation: "fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.5s both" }}
        >
          <p
            className="font-body max-w-md text-lg leading-relaxed"
            style={{ color: "var(--muted)", fontWeight: 300 }}
          >
            Construyo interfaces con atención obsesiva al detalle.
            Código limpio, diseño intencional, resultados memorables.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#projects"
              className="group flex items-center gap-3 font-mono text-sm tracking-wide px-6 py-3 rounded-full transition-all duration-300"
              style={{
                border: "1px solid var(--accent)",
                color: "var(--accent)",
                fontSize: "0.8rem",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = "var(--accent)";
                el.style.color = "var(--bg)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = "transparent";
                el.style.color = "var(--accent)";
              }}
            >
              Ver proyectos
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <a
              href="#contact"
              className="font-mono text-sm hover-underline"
              style={{ color: "var(--muted)", fontSize: "0.8rem" }}
            >
              Hablemos →
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{
          color: "var(--muted)",
          animation: "fadeIn 1s ease 1.2s both",
        }}
      >
        <span className="font-mono text-xs tracking-widest uppercase" style={{ fontSize: "0.6rem" }}>
          Scroll
        </span>
        <div
          className="w-px h-12"
          style={{
            background: "linear-gradient(to bottom, var(--muted), transparent)",
            animation: "pulse 2s ease infinite",
          }}
        />
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
