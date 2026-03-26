"use client";

import { useEffect, useRef } from "react";

const stats = [
  { value: "3+", label: "Años de experiencia" },
  { value: "20+", label: "Proyectos completados" },
  { value: "10+", label: "Clientes satisfechos" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal, .reveal-left").forEach((el) => {
              el.classList.add("visible");
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 px-6 relative overflow-hidden"
    >
      {/* Section number background */}
      <div
        className="absolute left-[-1rem] top-0 font-display font-black leading-none pointer-events-none select-none"
        style={{
          fontSize: "clamp(120px, 18vw, 280px)",
          color: "transparent",
          WebkitTextStroke: "1px var(--border)",
          opacity: 0.3,
          top: "2rem",
          letterSpacing: "-0.05em",
        }}
      >
        02
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16 reveal">
          <span
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: "var(--accent)", letterSpacing: "0.2em" }}
          >
            [ 02 ]
          </span>
          <div className="diagonal-line flex-1" />
          <span
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: "var(--muted)", letterSpacing: "0.2em" }}
          >
            Sobre mí
          </span>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div>
            <h2
              className="font-display font-bold mb-8 reveal"
              style={{
                fontSize: "clamp(2rem, 5vw, 4rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Construyo el futuro,{" "}
              <span className="italic" style={{ color: "var(--accent)" }}>
                línea por línea
              </span>
              .
            </h2>

            <div
              className="space-y-5 reveal delay-2"
              style={{ color: "var(--muted)", lineHeight: 1.8 }}
            >
              <p>
                Soy un desarrollador full-stack con un ojo para el diseño y
                una pasión por crear experiencias digitales que no solo funcionan,
                sino que deleitan a quienes las usan.
              </p>
              <p>
                Mi enfoque combina ingeniería sólida con pensamiento de diseño:
                cada decisión técnica tiene en cuenta la experiencia final del usuario.
                Creo que el mejor código es aquel que nadie nota porque todo simplemente{" "}
                <em style={{ color: "var(--text)" }}>funciona</em>.
              </p>
              <p>
                Cuando no estoy construyendo cosas en la web, estoy aprendiendo
                algo nuevo, explorando diseño gráfico, o tomando demasiado café.
              </p>
            </div>

            {/* Skills tags */}
            <div className="flex flex-wrap gap-2 mt-8 reveal delay-3">
              {[
                "React / Next.js",
                "TypeScript",
                "Node.js",
                "PostgreSQL",
                "Figma",
                "Docker",
              ].map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-xs px-3 py-1.5 rounded-full"
                  style={{
                    border: "1px solid var(--border)",
                    color: "var(--muted)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.05em",
                    transition: "all 0.2s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "var(--accent)";
                    el.style.color = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "var(--border)";
                    el.style.color = "var(--muted)";
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Stats + Visual */}
          <div className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 reveal-left delay-2">
              {stats.map((stat) => (
                <div
                  key={stat.value}
                  className="p-5 rounded-2xl text-center"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <p
                    className="font-display font-bold"
                    style={{ fontSize: "2.5rem", color: "var(--accent)", lineHeight: 1 }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="font-mono text-xs mt-2"
                    style={{ color: "var(--muted)", fontSize: "0.65rem", lineHeight: 1.4 }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Visual card */}
            <div
              className="rounded-2xl p-8 relative overflow-hidden reveal-left delay-3"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                minHeight: "220px",
              }}
            >
              {/* Decorative accent */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-20"
                style={{ background: "var(--accent)" }}
              />

              <p
                className="font-mono text-xs mb-4"
                style={{ color: "var(--accent)", letterSpacing: "0.15em" }}
              >
                // mi_filosofia.ts
              </p>

              <div
                className="font-mono text-sm leading-relaxed"
                style={{ color: "var(--muted)", fontSize: "0.8rem" }}
              >
                <span style={{ color: "var(--accent-2)" }}>const</span>{" "}
                <span style={{ color: "var(--text)" }}>enfoque</span> = {"{"}
                <br />
                &nbsp;&nbsp;diseño:{" "}
                <span style={{ color: "var(--accent)" }}>&apos;intencional&apos;</span>,
                <br />
                &nbsp;&nbsp;código:{" "}
                <span style={{ color: "var(--accent)" }}>&apos;limpio&apos;</span>,
                <br />
                &nbsp;&nbsp;impacto:{" "}
                <span style={{ color: "var(--accent)" }}>&apos;real&apos;</span>,
                <br />
                {"}"};
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
