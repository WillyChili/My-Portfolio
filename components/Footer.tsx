"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="px-6 py-10"
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--surface)",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span
            className="font-display font-semibold"
            style={{ color: "var(--text)", fontSize: "16px" }}
          >
            <span style={{ color: "var(--accent)" }}>*</span> Tu Nombre
          </span>
          <span style={{ color: "var(--border)" }}>·</span>
          <span className="font-mono text-xs" style={{ color: "var(--muted)", fontSize: "16px" }}>
            Portfolio {year}
          </span>
        </div>

        <p
          className="font-mono text-xs"
          style={{ color: "var(--muted)", fontSize: "16px", letterSpacing: "0.05em" }}
        >
          Diseñado & construido con{" "}
          <span style={{ color: "var(--accent)" }}>♥</span>{" "}
          usando Next.js + Tailwind
        </p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-9 h-9 flex items-center justify-center rounded-full transition-all duration-300"
          style={{
            border: "1px solid var(--border)",
            color: "var(--muted)",
            background: "transparent",
            cursor: "pointer",
          }}
          aria-label="Volver arriba"
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.borderColor = "var(--accent)";
            el.style.color = "var(--accent)";
            el.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.borderColor = "var(--border)";
            el.style.color = "var(--muted)";
            el.style.transform = "translateY(0)";
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
      </div>
    </footer>
  );
}
