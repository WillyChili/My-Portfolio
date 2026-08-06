"use client";

export default function ContactSection() {
  return (
    <section
      id="contact"
      style={{
        background: "#171717",
        padding: "clamp(5rem, 10vw, 9rem) clamp(1.5rem, 6vw, 5rem)",
        paddingBottom: "calc(clamp(5rem, 10vw, 9rem) + 5rem)",
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
          Contact
        </span>
      </div>

      {/* CTA */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "clamp(2rem, 4vw, 3rem)",
          maxWidth: "640px",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-sans), sans-serif",
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            fontWeight: 400,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: "#E8E5E0",
          }}
        >
          Let&apos;s build something worth using.
        </h2>

        <p
          style={{
            fontFamily: "var(--font-sans), sans-serif",
            fontSize: "17px",
            lineHeight: 1.75,
            color: "#7A7773",
            maxWidth: "480px",
          }}
        >
          Whether it&apos;s a new product, a redesign, or just an interesting
          problem — I&apos;m always open to a conversation.
        </p>

        <a
          href="mailto:charly.chaves@coderhouse.com"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.75rem",
            fontFamily: "var(--font-sans), sans-serif",
            fontSize: "17px",
            color: "#E8E5E0",
            textDecoration: "none",
            borderBottom: "1px solid rgba(232,229,224,0.2)",
            paddingBottom: "4px",
            width: "fit-content",
            transition: "border-color 0.2s, color 0.2s",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.color = "#fff";
            el.style.borderColor = "rgba(232,229,224,0.6)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.color = "#E8E5E0";
            el.style.borderColor = "rgba(232,229,224,0.2)";
          }}
        >
          charly.chaves@coderhouse.com
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </a>
      </div>
    </section>
  );
}
