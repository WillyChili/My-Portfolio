"use client";

const skills = [
  "React", "·", "Next.js", "·", "TypeScript", "·", "Node.js", "·",
  "Tailwind CSS", "·", "PostgreSQL", "·", "Figma", "·", "Docker", "·",
  "GraphQL", "·", "Git", "·", "UX Design", "·", "REST APIs", "·",
];

export default function Marquee() {
  const doubled = [...skills, ...skills];

  return (
    <div
      className="py-5 overflow-hidden"
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        background: "var(--surface)",
      }}
    >
      <div className="marquee-container">
        <div className="marquee-track">
          {doubled.map((skill, i) => (
            <span
              key={i}
              className="font-mono text-sm px-4"
              style={{
                color: skill === "·" ? "var(--accent)" : "var(--muted)",
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                whiteSpace: "nowrap",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
