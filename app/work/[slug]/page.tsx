import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/projects";
import type { ProjectSection } from "@/lib/projects";
import ScreensCarousel from "@/components/echo-mockups/ScreensCarousel";
import BrowserCarousel from "@/components/tinsderm-mockups/BrowserCarousel";
import LiveSiteCTA from "@/components/tinsderm-mockups/LiveSiteCTA";
import CaseStudyImage from "@/components/CaseStudyImage";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: `${project.title} — Charly Chaves` };
}

const CONTENT_MAX = "820px";

const MOCKUP_MAP: Record<string, React.ReactNode> = {
  "all-screens": <ScreensCarousel />,
  "tinsderm-screens": <BrowserCarousel />,
  "tinsderm-live": (
    <div style={{ maxWidth: CONTENT_MAX }}>
      <LiveSiteCTA
        href="https://willychili.github.io/Tins-Derm/"
        screenshot="/mock/cover-tinsderm.png"
        accentColor="#B8965A"
      />
    </div>
  ),
};

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
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
          height: "52px",
          background: "rgba(17, 17, 17, 0.8)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(232,229,224,0.06)",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-pixel)",
            fontSize: "14px",
            letterSpacing: "0.08em",
            color: "#B0ADA8",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          ← Back
        </Link>
        <span
          style={{
            fontFamily: "var(--font-pixel)",
            fontSize: "14px",
            letterSpacing: "0.08em",
            color: "#4A4845",
          }}
        >
          {project.company} · {project.year}
        </span>
      </nav>

      {/* Hero header */}
      <header
        style={{
          padding:
            "clamp(3rem, 6vw, 6rem) clamp(1.5rem, 6vw, 5rem) clamp(2rem, 4vw, 3rem)",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {/* Tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "1.5rem",
          }}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "var(--font-pixel)",
                fontSize: "12px",
                letterSpacing: "0.06em",
                color: project.accentColor,
                border: `1px solid ${project.accentColor}44`,
                borderRadius: "6px",
                padding: "4px 10px",
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
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
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
            flexWrap: "wrap",
          }}
        >
          {[
            { label: "Role", value: project.role },
            { label: "Company", value: project.company },
            { label: "Duration", value: project.duration },
            { label: "Year", value: project.year },
          ].map(({ label, value }) => (
            <div
              key={label}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "6px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-pixel)",
                  fontSize: "12px",
                  letterSpacing: "0.08em",
                  color: "#4A4845",
                }}
              >
                {label}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-sans), sans-serif",
                  fontSize: "16px",
                  color: "#B0ADA8",
                }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>
      </header>

      {/* Cover + highlight side by side */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "0 clamp(1.5rem, 6vw, 5rem)",
          marginBottom: "clamp(3rem, 5vw, 5rem)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: project.sections[0]?.type === "highlight"
              ? "1fr minmax(0, 340px)"
              : "1fr",
            gap: "clamp(1.5rem, 3vw, 2.5rem)",
            alignItems: "center",
          }}
        >
          <CaseStudyImage
            src={project.coverImage}
            alt={`${project.title} cover`}
            label="Cover image"
            accentColor={project.accentColor}
            borderRadius="16px"
            aspectRatio="16 / 10"
            gradientOpacity="18"
            labelOpacity={0.12}
          />

          {project.sections[0]?.type === "highlight" && (
            <div
              style={{
                borderLeft: `3px solid ${project.accentColor}`,
                paddingLeft: "clamp(1.25rem, 2vw, 2rem)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sans), sans-serif",
                  fontSize: "clamp(1.25rem, 2vw, 1.625rem)",
                  fontWeight: 400,
                  fontStyle: "italic",
                  lineHeight: 1.45,
                  letterSpacing: "-0.01em",
                  color: "#E8E5E0",
                }}
              >
                {project.sections[0].quote}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Content sections */}
      <div
        style={{
          padding:
            "clamp(2rem, 4vw, 3rem) clamp(1.5rem, 6vw, 5rem) clamp(6rem, 10vw, 10rem)",
          maxWidth: "1000px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "clamp(3.5rem, 6vw, 5.5rem)",
        }}
      >
        {project.sections
          .filter((section, i) => !(i === 0 && section.type === "highlight"))
          .map((section, i) => (
          <Section
            key={i}
            section={section}
            accentColor={project.accentColor}
          />
        ))}
      </div>

      {/* Footer nav */}
      <div
        style={{
          borderTop: "1px solid rgba(232,229,224,0.06)",
          padding: "2rem clamp(1.5rem, 6vw, 5rem)",
          maxWidth: "1000px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-pixel)",
            fontSize: "14px",
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
            fontSize: "13px",
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

function Section({
  section,
  accentColor,
}: {
  section: ProjectSection;
  accentColor: string;
}) {
  if (section.type === "highlight") {
    return (
      <div
        style={{
          maxWidth: CONTENT_MAX,
          borderLeft: `3px solid ${accentColor}`,
          paddingLeft: "clamp(1.5rem, 3vw, 2.5rem)",
          margin: "clamp(1rem, 2vw, 2rem) 0",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-sans), sans-serif",
            fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
            fontWeight: 400,
            fontStyle: "italic",
            lineHeight: 1.45,
            letterSpacing: "-0.01em",
            color: "#E8E5E0",
          }}
        >
          {section.quote}
        </p>
      </div>
    );
  }

  if (section.type === "timeline") {
    return (
      <div style={{ maxWidth: CONTENT_MAX }}>
        {section.title && (
          <h2
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              color: "#E8E5E0",
              marginBottom: "0.75rem",
            }}
          >
            {section.title}
          </h2>
        )}
        {section.body && (
          <p
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "clamp(1rem, 1.25vw, 1.125rem)",
              lineHeight: 1.8,
              color: "#9A9691",
              marginBottom: "clamp(2rem, 3vw, 2.5rem)",
              maxWidth: "65ch",
            }}
          >
            {section.body}
          </p>
        )}
        <ol
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {section.phases?.map((phase, i) => (
            <li
              key={phase.number}
              style={{
                display: "grid",
                gridTemplateColumns: "56px 1fr",
                gap: "clamp(1rem, 2vw, 1.75rem)",
                padding: "clamp(1.25rem, 2vw, 1.5rem) 0",
                borderTop:
                  i === 0 ? "1px solid rgba(232,229,224,0.08)" : "none",
                borderBottom: "1px solid rgba(232,229,224,0.08)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-pixel)",
                  fontSize: "13px",
                  letterSpacing: "0.06em",
                  color: accentColor,
                  opacity: 0.85,
                  paddingTop: "2px",
                }}
              >
                {phase.number}
              </span>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.4rem",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-sans), sans-serif",
                    fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
                    fontWeight: 500,
                    color: "#E8E5E0",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {phase.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans), sans-serif",
                    fontSize: "clamp(0.9375rem, 1.1vw, 1rem)",
                    lineHeight: 1.7,
                    color: "#9A9691",
                  }}
                >
                  {phase.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  if (section.type === "mockup-row") {
    return (
      <div>
        {section.title && (
          <p
            style={{
              fontFamily: "var(--font-pixel)",
              fontSize: "13px",
              letterSpacing: "0.08em",
              color: "#4A4845",
              marginBottom: "1rem",
              textAlign: "center",
            }}
          >
            {section.title}
          </p>
        )}
        {section.mockupId && MOCKUP_MAP[section.mockupId]}
      </div>
    );
  }

  if (section.type === "text") {
    return (
      <div style={{ maxWidth: CONTENT_MAX }}>
        {section.title && (
          <h2
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              color: "#E8E5E0",
              marginBottom: "1rem",
            }}
          >
            {section.title}
          </h2>
        )}
        {section.body && (
          <p
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "clamp(1rem, 1.25vw, 1.125rem)",
              lineHeight: 1.8,
              color: "#9A9691",
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
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "1px",
          background: "rgba(232,229,224,0.06)",
          borderRadius: "16px",
          overflow: "hidden",
          maxWidth: CONTENT_MAX,
        }}
      >
        {section.metrics?.map(({ value, label }) => (
          <div
            key={label}
            style={{
              background: "#171717",
              padding: "clamp(1.5rem, 3vw, 2.5rem) clamp(1.25rem, 2vw, 2rem)",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: "clamp(2rem, 3vw, 2.75rem)",
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
                fontSize: "12px",
                letterSpacing: "0.08em",
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
          maxWidth: CONTENT_MAX,
        }}
      >
        {[section.left, section.right].map((col) =>
          col ? (
            <div
              key={col.title}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-sans), sans-serif",
                  fontSize: "clamp(1.125rem, 1.5vw, 1.25rem)",
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
                  fontSize: "clamp(0.9375rem, 1.1vw, 1rem)",
                  lineHeight: 1.75,
                  color: "#9A9691",
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
              fontSize: "13px",
              letterSpacing: "0.08em",
              color: "#4A4845",
              marginBottom: "1rem",
            }}
          >
            {section.title}
          </p>
        )}
        <CaseStudyImage
          src={section.image}
          alt={section.imageAlt ?? "Image"}
          label={section.imageAlt ?? "Image"}
          accentColor={accentColor}
          borderRadius="16px"
          aspectRatio="16 / 9"
          gradientOpacity="18"
          labelOpacity={0.12}
        />
      </div>
    );
  }

  return null;
}
