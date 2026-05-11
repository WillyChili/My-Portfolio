import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/projects";
import type { ProjectSection } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: `${project.title} — Charly Chaves` };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main style={{ background: "#171717", minHeight: "100dvh" }}>
      {/* Nav */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem clamp(1.5rem, 6vw, 5rem)",
          background: "rgba(23,23,23,0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(232,229,224,0.06)",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-pixel)",
            fontSize: "13px",
            letterSpacing: "0.08em",
            color: "#B0ADA8",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            transition: "color 0.2s",
          }}
        >
          ← Back
        </Link>
        <span
          style={{
            fontFamily: "var(--font-pixel)",
            fontSize: "13px",
            letterSpacing: "0.08em",
            color: "#4A4845",
          }}
        >
          {project.company} · {project.year}
        </span>
      </nav>

      {/* Hero */}
      <header
        style={{
          padding: "clamp(4rem, 8vw, 8rem) clamp(1.5rem, 6vw, 5rem) clamp(3rem, 5vw, 5rem)",
          maxWidth: "900px",
        }}
      >
        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "var(--font-pixel)",
                fontSize: "10px",
                letterSpacing: "0.08em",
                color: project.accentColor,
                border: `1px solid ${project.accentColor}44`,
                borderRadius: "4px",
                padding: "3px 8px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: "var(--font-sans), sans-serif",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 400,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            color: "#E8E5E0",
            marginBottom: "2rem",
          }}
        >
          {project.title}
        </h1>

        {/* Meta strip */}
        <div
          style={{
            display: "flex",
            gap: "clamp(2rem, 4vw, 4rem)",
            borderTop: "1px solid rgba(232,229,224,0.08)",
            paddingTop: "1.5rem",
          }}
        >
          {[
            { label: "Role", value: project.role },
            { label: "Company", value: project.company },
            { label: "Duration", value: project.duration },
            { label: "Year", value: project.year },
          ].map(({ label, value }) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span
                style={{
                  fontFamily: "var(--font-pixel)",
                  fontSize: "10px",
                  letterSpacing: "0.1em",
                  color: "#4A4845",
                }}
              >
                {label}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-sans), sans-serif",
                  fontSize: "14px",
                  color: "#B0ADA8",
                }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>
      </header>

      {/* Cover placeholder */}
      <div
        style={{
          margin: "0 clamp(1.5rem, 6vw, 5rem) clamp(4rem, 8vw, 7rem)",
          borderRadius: "16px",
          overflow: "hidden",
          aspectRatio: "16 / 7",
          background: `linear-gradient(135deg, #1F1E1C 0%, ${project.accentColor}22 100%)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-sans), sans-serif",
            fontSize: "13px",
            color: "rgba(232,229,224,0.15)",
            letterSpacing: "0.05em",
          }}
        >
          Cover image
        </span>
      </div>

      {/* Content sections */}
      <div
        style={{
          padding: "0 clamp(1.5rem, 6vw, 5rem) clamp(6rem, 10vw, 10rem)",
          display: "flex",
          flexDirection: "column",
          gap: "clamp(4rem, 7vw, 7rem)",
        }}
      >
        {project.sections.map((section, i) => (
          <Section key={i} section={section} accentColor={project.accentColor} />
        ))}
      </div>

      {/* Footer nav */}
      <div
        style={{
          borderTop: "1px solid rgba(232,229,224,0.06)",
          padding: "2rem clamp(1.5rem, 6vw, 5rem)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-pixel)",
            fontSize: "13px",
            letterSpacing: "0.08em",
            color: "#B0ADA8",
            textDecoration: "none",
          }}
        >
          ← All projects
        </Link>
        <span
          style={{
            fontFamily: "var(--font-pixel)",
            fontSize: "12px",
            letterSpacing: "0.06em",
            color: "#4A4845",
          }}
        >
          charly chaves
        </span>
      </div>
    </main>
  );
}

function Section({ section, accentColor }: { section: ProjectSection; accentColor: string }) {
  const maxWidth = "760px";

  if (section.type === "text") {
    return (
      <div style={{ maxWidth }}>
        {section.title && (
          <h2
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              color: "#E8E5E0",
              marginBottom: "1.25rem",
            }}
          >
            {section.title}
          </h2>
        )}
        {section.body && (
          <p
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "17px",
              lineHeight: 1.75,
              color: "#7A7773",
            }}
          >
            {section.body}
          </p>
        )}
      </div>
    );
  }

  if (section.type === "metrics") {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "1px",
          background: "rgba(232,229,224,0.06)",
          borderRadius: "12px",
          overflow: "hidden",
          maxWidth,
        }}
      >
        {section.metrics?.map(({ value, label }) => (
          <div
            key={label}
            style={{
              background: "#171717",
              padding: "2rem 1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 300,
                letterSpacing: "-0.03em",
                color: accentColor,
              }}
            >
              {value}
            </span>
            <span
              style={{
                fontFamily: "var(--font-pixel)",
                fontSize: "10px",
                letterSpacing: "0.1em",
                color: "#4A4845",
              }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  if (section.type === "two-col") {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(2rem, 4vw, 4rem)",
          maxWidth,
        }}
      >
        {[section.left, section.right].map((col) =>
          col ? (
            <div key={col.title} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <h3
                style={{
                  fontFamily: "var(--font-sans), sans-serif",
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: "#E8E5E0",
                  letterSpacing: "-0.01em",
                }}
              >
                {col.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans), sans-serif",
                  fontSize: "15px",
                  lineHeight: 1.7,
                  color: "#7A7773",
                }}
              >
                {col.body}
              </p>
            </div>
          ) : null
        )}
      </div>
    );
  }

  if (section.type === "image") {
    return (
      <div>
        {section.title && (
          <p
            style={{
              fontFamily: "var(--font-pixel)",
              fontSize: "11px",
              letterSpacing: "0.1em",
              color: "#4A4845",
              marginBottom: "1rem",
            }}
          >
            {section.title}
          </p>
        )}
        <div
          style={{
            borderRadius: "12px",
            overflow: "hidden",
            aspectRatio: "16 / 9",
            background: `linear-gradient(135deg, #1F1E1C 0%, ${accentColor}22 100%)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "13px",
              color: "rgba(232,229,224,0.15)",
              letterSpacing: "0.05em",
            }}
          >
            {section.imageAlt ?? "Image"}
          </span>
        </div>
      </div>
    );
  }

  return null;
}
