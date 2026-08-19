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

      <a
        href="mailto:charly.chaves@coderhouse.com"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.6rem",
          fontFamily: "var(--font-sans), sans-serif",
          fontSize: "16px",
          fontWeight: 500,
          color: "#171717",
          background: accentColor,
          textDecoration: "none",
          borderRadius: "8px",
          padding: "0.9rem 1.75rem",
          marginTop: "0.75rem",
          boxShadow: `0 0 0 0 ${accentColor}00`,
          transition: "transform 0.2s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.2s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.2s ease",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.transform = "translateY(-2px)";
          el.style.boxShadow = `0 8px 24px -8px ${accentColor}80`;
          el.style.opacity = "0.92";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.transform = "translateY(0)";
          el.style.boxShadow = `0 0 0 0 ${accentColor}00`;
          el.style.opacity = "1";
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
