import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/projects";
import type { ProjectSection } from "@/lib/projects";
import ScreensCarousel from "@/components/echo-mockups/ScreensCarousel";
import EchoCover from "@/components/echo-mockups/EchoCover";
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
          {project.slug === "echo" ? (
            <div
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                aspectRatio: "16 / 10",
              }}
            >
              <EchoCover />
            </div>
          ) : (
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
          )}

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

function ChapterEyebrow({
  chapter,
  label,
  accentColor,
  align = "left",
}: {
  chapter?: string;
  label?: string;
  accentColor: string;
  align?: "left" | "center";
}) {
  if (!chapter && !label) return null;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginBottom: "1rem",
        justifyContent: align === "center" ? "center" : "flex-start",
      }}
    >
      {chapter && (
        <span
          style={{
            fontFamily: "var(--font-pixel)",
            fontSize: "13px",
            letterSpacing: "0.08em",
            color: accentColor,
          }}
        >
          {chapter}
        </span>
      )}
      {chapter && label && (
        <span
          style={{
            width: "24px",
            height: "1px",
            background: `${accentColor}66`,
          }}
        />
      )}
      {label && (
        <span
          style={{
            fontFamily: "var(--font-pixel)",
            fontSize: "13px",
            letterSpacing: "0.1em",
            color: "#4A4845",
            textTransform: "uppercase",
          }}
        >
          {label}
        </span>
      )}
    </div>
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
        <ChapterEyebrow
          chapter={section.chapter}
          label={section.chapterLabel}
          accentColor={accentColor}
          align="center"
        />
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

  if (section.type === "process") {
    return (
      <div style={{ maxWidth: CONTENT_MAX }}>
        <ChapterEyebrow chapter={section.chapter} label={section.chapterLabel} accentColor={accentColor} />
        {section.title && (
          <h2
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              color: "#E8E5E0",
              marginBottom: "2rem",
            }}
          >
            {section.title}
          </h2>
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(1.25rem, 2vw, 1.75rem)",
          }}
        >
          {section.steps?.map((step, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "clamp(1.25rem, 2.5vw, 2rem)",
                alignItems: "start",
                paddingLeft: "clamp(0.5rem, 1vw, 1rem)",
                paddingBottom: i < (section.steps?.length ?? 0) - 1 ? "clamp(1.25rem, 2vw, 1.75rem)" : 0,
                borderBottom: i < (section.steps?.length ?? 0) - 1 ? "1px solid rgba(232,229,224,0.06)" : "none",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-pixel)",
                  fontSize: "18px",
                  letterSpacing: "0.08em",
                  color: accentColor,
                  paddingTop: "2px",
                  minWidth: "40px",
                }}
              >
                {step.label}
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-sans), sans-serif",
                    fontSize: "clamp(1.1875rem, 1.5vw, 1.3125rem)",
                    fontWeight: 500,
                    color: "#E8E5E0",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans), sans-serif",
                    fontSize: "clamp(1rem, 1.15vw, 1.0625rem)",
                    lineHeight: 1.75,
                    color: "#9A9691",
                  }}
                >
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (section.type === "tech-stack") {
    return (
      <div style={{ maxWidth: CONTENT_MAX }}>
        <ChapterEyebrow chapter={section.chapter} label={section.chapterLabel} accentColor={accentColor} />
        {section.title && (
          <h2
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              color: "#E8E5E0",
              marginBottom: "2rem",
            }}
          >
            {section.title}
          </h2>
        )}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "1px",
            background: "rgba(232,229,224,0.06)",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          {section.stack?.map(({ name, role, category }) => (
            <div
              key={name}
              style={{
                background: "#171717",
                padding: "clamp(1.25rem, 2vw, 1.75rem)",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-pixel)",
                  fontSize: "13px",
                  letterSpacing: "0.08em",
                  color: accentColor,
                }}
              >
                {category}
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <StackIcon name={name} />
                <span
                  style={{
                    fontFamily: "var(--font-sans), sans-serif",
                    fontSize: "18px",
                    fontWeight: 500,
                    color: "#E8E5E0",
                    letterSpacing: "-0.01em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {name}
                </span>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-sans), sans-serif",
                  fontSize: "15px",
                  lineHeight: 1.5,
                  color: "#9A9691",
                }}
              >
                {role}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (section.type === "text") {
    return (
      <div style={{ maxWidth: CONTENT_MAX }}>
        <ChapterEyebrow chapter={section.chapter} label={section.chapterLabel} accentColor={accentColor} />
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
        {section.pullQuote && (
          <div
            style={{
              marginTop: "clamp(1.5rem, 2.5vw, 2rem)",
              padding: "clamp(1.25rem, 2vw, 1.75rem) clamp(1.5rem, 2.5vw, 2rem)",
              background: `linear-gradient(135deg, ${accentColor}0F 0%, transparent 100%)`,
              borderLeft: `3px solid ${accentColor}`,
              borderRadius: "0 12px 12px 0",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: "clamp(1.125rem, 1.75vw, 1.375rem)",
                fontStyle: "italic",
                lineHeight: 1.5,
                letterSpacing: "-0.01em",
                color: "#E8E5E0",
              }}
            >
              {section.pullQuote}
            </p>
          </div>
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
      <div style={{ maxWidth: CONTENT_MAX }}>
        <ChapterEyebrow chapter={section.chapter} label={section.chapterLabel} accentColor={accentColor} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(2rem, 4vw, 4rem)",
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

const ICON_SIZE = 24;

function StackIcon({ name }: { name: string }) {
  const wrap = (bg: string, children: React.ReactNode) => (
    <span
      style={{
        width: `${ICON_SIZE + 12}px`,
        height: `${ICON_SIZE + 12}px`,
        borderRadius: "8px",
        background: bg,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {children}
    </span>
  );

  switch (name) {
    case "Claude API":
    case "Claude Code":
      return wrap(
        "rgba(217,119,87,0.12)",
        <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24" fill="#D97757" aria-hidden="true">
          <path d="M4.709 15.955l4.72-2.647.079-.23-.079-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.972 2.972 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.42 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.729-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z"/>
        </svg>
      );
    case "Supabase":
      return wrap(
        "rgba(62,207,142,0.12)",
        <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24" fill="#3ECF8E" aria-hidden="true">
          <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.401.562a1.04 1.04 0 0 0 .836 1.66H12v8.959a.396.396 0 0 0 .716.233l9.081-12.261.401-.562a1.04 1.04 0 0 0-.836-1.66z"/>
        </svg>
      );
    case "Railway":
      return wrap(
        "rgba(180,133,255,0.14)",
        <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24" fill="#B485FF" aria-hidden="true">
          <path d="M.933 13.928a12.176 12.176 0 0 0 .215 1.55h16.55v-1.55zm22.134-3.856a12.176 12.176 0 0 0-.215-1.55H1.148a12.176 12.176 0 0 0-.215 1.55zM2.514 17.784A11.977 11.977 0 0 0 12 24a11.977 11.977 0 0 0 9.486-6.216zM21.486 6.216A11.977 11.977 0 0 0 12 0a11.977 11.977 0 0 0-9.486 6.216z"/>
        </svg>
      );
    case "Vercel":
      return wrap(
        "rgba(232,229,224,0.08)",
        <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24" fill="#E8E5E0" aria-hidden="true">
          <path d="M24 22.525H0l12-21.05 12 21.05z"/>
        </svg>
      );
    case "GitHub":
      return wrap(
        "rgba(232,229,224,0.08)",
        <svg width={ICON_SIZE} height={ICON_SIZE} viewBox="0 0 24 24" fill="#E8E5E0" aria-hidden="true">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      );
    default:
      return wrap(
        "rgba(232,229,224,0.06)",
        <span style={{ color: "#4A4845", fontFamily: "var(--font-pixel)", fontSize: "13px" }}>
          {name.charAt(0)}
        </span>
      );
  }
}
