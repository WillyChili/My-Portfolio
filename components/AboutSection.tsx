"use client";

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        background: "#171717",
        padding: "40px clamp(1.5rem, 6vw, 5rem)",
        position: "relative",
      }}
    >
      {/* Section header */}
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          marginBottom: "clamp(3rem, 6vw, 5rem)",
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
          About
        </span>
      </div>

      {/* Content grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(3rem, 6vw, 6rem)",
          alignItems: "start",
          maxWidth: "1100px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Left: bio */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <h2
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              color: "#E8E5E0",
            }}
          >
            I design experiences that feel obvious, after someone else built the hard version.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "17px",
              lineHeight: 1.75,
              color: "#7A7773",
            }}
          >
            I&apos;m a Product Designer based in Buenos Aires. I&apos;ve worked across education,
            fintech, and SaaS, always focused on the gap between what a product
            does and how people actually experience it.
          </p>
          <p
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "17px",
              lineHeight: 1.75,
              color: "#7A7773",
            }}
          >
            I work best at the intersection of research and craft: understanding
            the problem deeply, then making it look inevitable.
          </p>
        </div>

        {/* Right: details */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {[
            {
              label: "Currently",
              items: ["Product Designer @ Coderhouse", "Available for freelance"],
            },
            {
              label: "Approach",
              items: [
                "Research before pixels",
                "Systems thinking",
                "Outcomes over outputs",
              ],
            },
            {
              label: "Tools",
              items: ["Figma", "Notion", "Framer", "Protopie"],
            },
          ].map(({ label, items }) => (
            <div key={label} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <span
                style={{
                  fontFamily: "var(--font-pixel)",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  color: "#6B6862",
                }}
              >
                {label}
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                {items.map((item) => (
                  <span
                    key={item}
                    style={{
                      fontFamily: "var(--font-sans), sans-serif",
                      fontSize: "15px",
                      color: "#B0ADA8",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
