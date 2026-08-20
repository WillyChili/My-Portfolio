"use client";
import { useState } from "react";
import Link from "next/link";
import { projects } from "@/lib/projects";
import ProjectThumbnail from "@/components/ProjectThumbnail";

export default function ProjectsSection() {
  return (
    <section
      id="work"
      style={{
        background: "#171717",
        padding: "40px clamp(1.5rem, 6vw, 5rem)",
        position: "relative",
      }}
    >
      {/* Capped at 1200px so content doesn't stretch edge-to-edge on very
          wide viewports, matching the other sections below the Hero. Not
          centered — stays flush with the section's left padding. */}
      <div style={{ maxWidth: "1200px", position: "relative", zIndex: 1 }}>
        {/* Section header */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            marginBottom: "clamp(2.5rem, 5vw, 4rem)",
            borderBottom: "1px solid rgba(232,229,224,0.08)",
            paddingBottom: "1.25rem",
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
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          {projects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={i}
              isLast={i === projects.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  isLast,
}: {
  project: (typeof projects)[number];
  index: number;
  isLast: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const accent = project.accentColor;

  return (
    <Link
      href={`/work/${project.slug}`}
      style={{ textDecoration: "none", display: "block" }}
    >
      <article
        className="project-card"
        style={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: "400px 1fr",
          gap: "64px",
          alignItems: "center",
          padding: "clamp(1.5rem, 3vw, 2.5rem) 0",
          paddingLeft: "clamp(1.5rem, 3vw, 2.5rem)",
          marginLeft: "calc(-1 * clamp(1.5rem, 3vw, 2.5rem))",
          borderBottom: isLast
            ? "none"
            : `1px solid ${hovered ? `${accent}40` : "rgba(232,229,224,0.06)"}`,
          cursor: "pointer",
          transition: "border-color 0.35s ease",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Accent bar, signals "this is the one you're about to open" */}
        <span
          style={{
            position: "absolute",
            left: 0,
            top: "12%",
            bottom: "12%",
            width: "2px",
            background: accent,
            opacity: hovered ? 1 : 0,
            transform: hovered ? "scaleY(1)" : "scaleY(0.4)",
            transformOrigin: "center",
            transition: "opacity 0.3s ease, transform 0.35s cubic-bezier(0.23,1,0.32,1)",
          }}
        />

        {/* Left: text */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {/* Number + company */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span
              style={{
                fontFamily: "var(--font-pixel)",
                fontSize: "11px",
                letterSpacing: "0.1em",
                color: hovered ? accent : "#6B6862",
                transition: "color 0.3s ease",
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span
              style={{
                fontFamily: "var(--font-pixel)",
                fontSize: "11px",
                letterSpacing: "0.1em",
                color: accent,
                opacity: hovered ? 1 : 0.85,
                transition: "opacity 0.3s ease",
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
              color: hovered ? "#FFFFFF" : "#E8E5E0",
              lineHeight: 1.2,
              transition: "color 0.3s ease",
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
              color: "#B0ADA8",
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
                  color: hovered ? "#B0ADA8" : "#7A7773",
                  border: `1px solid ${hovered ? `${accent}55` : "rgba(122,119,115,0.3)"}`,
                  borderRadius: "4px",
                  padding: "3px 8px",
                  transition: "color 0.3s ease, border-color 0.3s ease",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right: cover thumbnail */}
        <ProjectThumbnail
          slug={project.slug}
          title={project.title}
          accentColor={project.accentColor}
          coverImage={project.coverImage}
        />
      </article>
    </Link>
  );
}
