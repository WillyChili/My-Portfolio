"use client";

/**
 * Closing block for a case study: a thank-you note plus a "get in
 * touch" CTA, shown after the last content section and before the
 * footer nav ("← All projects"). Centered, quieter than the home
 * page's ContactSection so it reads as a sign-off, not a duplicate
 * pitch.
 */
export default function ClosingCTA({ accentColor }: { accentColor: string }) {
  return (
    <div
      style={{
        borderTop: "1px solid rgba(232,229,224,0.06)",
        padding: "clamp(4rem, 8vw, 6rem) clamp(1.5rem, 6vw, 5rem)",
        maxWidth: "1000px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: "1.25rem",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-pixel)",
          fontSize: "12px",
          letterSpacing: "0.1em",
          color: accentColor,
          opacity: 0.85,
        }}
      >
        Thanks for reading
      </span>

      <h2
        style={{
          fontFamily: "var(--font-sans), sans-serif",
          fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
          fontWeight: 400,
          lineHeight: 1.2,
          letterSpacing: "-0.02em",
          color: "#E8E5E0",
          maxWidth: "520px",
        }}
      >
        Got a project like this in mind?
      </h2>

      <p
        style={{
          fontFamily: "var(--font-sans), sans-serif",
          fontSize: "16px",
          lineHeight: 1.7,
          color: "#7A7773",
          maxWidth: "440px",
        }}
      >
        I&apos;m always up for a good problem — reach out and let&apos;s talk about it.
      </p>

      <a
        href="mailto:charly.chaves@coderhouse.com"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.75rem",
          fontFamily: "var(--font-sans), sans-serif",
          fontSize: "16px",
          color: "#E8E5E0",
          textDecoration: "none",
          borderBottom: "1px solid rgba(232,229,224,0.2)",
          paddingBottom: "4px",
          marginTop: "0.5rem",
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
        Contact me
        <svg
          width="14"
          height="14"
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
  );
}
