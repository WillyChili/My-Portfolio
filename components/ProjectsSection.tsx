"use client";
import Link from "next/link";
import { projects } from "@/lib/projects";
import CaseStudyImage from "@/components/CaseStudyImage";
import AmbientGrid from "@/components/AmbientGrid";

export default function ProjectsSection() {
  return (
    <section
      id="work"
      style={{
        background: "#171717",
        padding: "clamp(5rem, 10vw, 9rem) clamp(1.5rem, 6vw, 5rem)",
        position: "relative",
      }}
    >
      <AmbientGrid />

      {/* Section header */}
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          marginBottom: "clamp(2.5rem, 5vw, 4rem)",
          borderBottom: "1px solid rgba(232,229,224,0.08)",
          paddingBottom: "1.25rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-pixel)",
            fontSize: "13px",
            letterSpacing: "0.1em",
            color: "#B0ADA8",
          }}
        >
          Selected Work
        </span>
        <span
          style={{
            fontFamily: "var(--font-pixel)",
            fontSize: "13px",
            letterSpacing: "0.08em",
            color: "#6B6862",
          }}
        >
          {projects.length} projects
        </span>
      </div>

      {/* Project list */}
      <div style={{ display: "flex", flexDirection: "column", gap: "2px", position: "relative", zIndex: 1 }}>
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <Link
      href={`/work/${project.slug}`}
      style={{ textDecoration: "none", display: "block" }}
    >
      <article
        className="project-card"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(1.5rem, 4vw, 4rem)",
          alignItems: "center",
          padding: "clamp(1.5rem, 3vw, 2.5rem) 0",
          borderBottom: "1px solid rgba(232,229,224,0.06)",
          cursor: "pointer",
          transition: "opacity 0.25s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.opacity = "0.7";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.opacity = "1";
        }}
      >
        {/* Left: text */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {/* Number + company */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span
              style={{
                fontFamily: "var(--font-pixel)",
                fontSize: "11px",
                letterSpacing: "0.1em",
                color: "#6B6862",
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span
              style={{
                fontFamily: "var(--font-pixel)",
                fontSize: "11px",
                letterSpacing: "0.1em",
                color: project.accentColor,
                opacity: 0.85,
              }}
            >
              {project.company} · {project.year}
            </span>
          </div>

          {/* Title */}
          <h3
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              color: "#E8E5E0",
              lineHeight: 1.2,
            }}
          >
            {project.title}
          </h3>

          {/* Summary */}
          <p
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "15px",
              lineHeight: 1.65,
              color: "#7A7773",
              maxWidth: "38ch",
            }}
          >
            {project.summary}
          </p>

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "var(--font-pixel)",
                  fontSize: "10px",
                  letterSpacing: "0.08em",
                  color: "#7A7773",
                  border: "1px solid rgba(122,119,115,0.3)",
                  borderRadius: "4px",
                  padding: "3px 8px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right: cover image */}
        <CaseStudyImage
          src={project.coverImage}
          alt={project.title}
          label={project.title}
          accentColor={project.accentColor}
        />
      </article>
    </Link>
  );
}
