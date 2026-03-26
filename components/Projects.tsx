"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    id: "01",
    title: "E-Commerce Platform",
    category: "Full Stack",
    description:
      "Plataforma de comercio electrónico completa con carrito en tiempo real, pagos integrados y panel de administración. Construida con Next.js, Stripe y PostgreSQL.",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind"],
    year: "2024",
    link: "#",
    color: "var(--accent)",
  },
  {
    id: "02",
    title: "Design System",
    category: "Frontend",
    description:
      "Sistema de diseño modular con más de 40 componentes reutilizables, documentación interactiva y soporte completo para temas dinámicos.",
    tech: ["React", "Storybook", "TypeScript", "CSS Modules"],
    year: "2024",
    link: "#",
    color: "var(--accent-2)",
  },
  {
    id: "03",
    title: "Real-time Dashboard",
    category: "Data / UX",
    description:
      "Dashboard analítico con datos en tiempo real, visualizaciones interactivas y alertas configurables para equipos de operaciones.",
    tech: ["React", "D3.js", "WebSockets", "Node.js", "Redis"],
    year: "2023",
    link: "#",
    color: "var(--accent)",
  },
  {
    id: "04",
    title: "Mobile App — iOS & Android",
    category: "Mobile",
    description:
      "Aplicación móvil multiplataforma con autenticación biométrica, notificaciones push y sincronización offline-first.",
    tech: ["React Native", "Expo", "Firebase", "TypeScript"],
    year: "2023",
    link: "#",
    color: "var(--accent-2)",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

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
      { threshold: 0.05 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-32 px-6 relative overflow-hidden"
      style={{ background: "var(--surface)" }}
    >
      {/* Section number */}
      <div
        className="absolute right-[-1rem] top-0 font-display font-black leading-none pointer-events-none select-none"
        style={{
          fontSize: "clamp(120px, 18vw, 280px)",
          color: "transparent",
          WebkitTextStroke: "1px var(--border)",
          opacity: 0.3,
          letterSpacing: "-0.05em",
        }}
      >
        03
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16 reveal">
          <span
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: "var(--accent)", letterSpacing: "0.2em" }}
          >
            [ 03 ]
          </span>
          <div className="diagonal-line flex-1" />
          <span
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: "var(--muted)", letterSpacing: "0.2em" }}
          >
            Proyectos
          </span>
        </div>

        <h2
          className="font-display font-bold mb-16 reveal"
          style={{
            fontSize: "clamp(2rem, 5vw, 4rem)",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          Trabajo{" "}
          <span className="italic" style={{ color: "var(--accent)" }}>
            selecto
          </span>
          .
        </h2>

        {/* Projects list */}
        <div className="space-y-0">
          {projects.map((project, i) => (
            <a
              key={project.id}
              href={project.link}
              className={`reveal delay-${i + 1}`}
              style={{ textDecoration: "none" }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className="group py-8 transition-all duration-300 cursor-pointer"
                style={{
                  borderTop: "1px solid var(--border)",
                  paddingLeft: hoveredId === project.id ? "1.5rem" : "0",
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  {/* Left */}
                  <div className="flex items-start gap-6">
                    {/* Number */}
                    <span
                      className="font-mono font-medium shrink-0"
                      style={{
                        color:
                          hoveredId === project.id ? project.color : "var(--border)",
                        fontSize: "0.8rem",
                        transition: "color 0.3s ease",
                        paddingTop: "4px",
                      }}
                    >
                      {project.id}
                    </span>

                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3
                          className="font-display font-semibold"
                          style={{
                            fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
                            letterSpacing: "-0.02em",
                            color: "var(--text)",
                            transition: "color 0.3s ease",
                          }}
                        >
                          {project.title}
                        </h3>
                        <span
                          className="font-mono text-xs px-2 py-1 rounded-full hidden md:inline-flex"
                          style={{
                            border: "1px solid var(--border)",
                            color: "var(--muted)",
                            fontSize: "0.65rem",
                          }}
                        >
                          {project.category}
                        </span>
                      </div>

                      <p
                        className="text-sm max-w-md leading-relaxed"
                        style={{ color: "var(--muted)" }}
                      >
                        {project.description}
                      </p>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-xs px-2 py-0.5 rounded"
                            style={{
                              background: "var(--bg)",
                              color: "var(--muted)",
                              fontSize: "0.65rem",
                              border: "1px solid var(--border)",
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="flex items-center gap-6 shrink-0">
                    <span
                      className="font-mono text-sm"
                      style={{ color: "var(--muted)", fontSize: "0.75rem" }}
                    >
                      {project.year}
                    </span>

                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{
                        border: `1px solid ${hoveredId === project.id ? project.color : "var(--border)"}`,
                        color: hoveredId === project.id ? project.color : "var(--muted)",
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        style={{
                          transform:
                            hoveredId === project.id
                              ? "rotate(-45deg)"
                              : "rotate(0deg)",
                          transition: "transform 0.3s ease",
                        }}
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}

          {/* Last border */}
          <div
            style={{ borderTop: "1px solid var(--border)", paddingTop: "0" }}
          />
        </div>

        {/* CTA */}
        <div className="mt-12 reveal delay-5">
          <a
            href="#"
            className="inline-flex items-center gap-2 font-mono text-sm hover-underline"
            style={{ color: "var(--muted)", fontSize: "0.8rem" }}
          >
            Ver todos los proyectos
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
