"use client";

export default function Hero() {
  return (
    <main
      style={{
        height: "100dvh",
        display: "grid",
        gridTemplateRows: "1fr auto",
        padding: "clamp(1.5rem, 4vw, 3rem)",
      }}
    >
      {/* Center: name */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          animation: "fadeIn 1.2s ease both",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-serif), serif",
            fontStyle: "italic",
            fontSize: "clamp(3.5rem, 11vw, 10rem)",
            fontWeight: 400,
            lineHeight: 1,
            letterSpacing: "-0.03em",
            color: "#111",
            userSelect: "none",
          }}
        >
          Tu Nombre
        </h1>
      </div>

      {/* Bottom row: role · location · status */}
      <footer
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: "1rem",
          animation: "fadeIn 1.2s ease 0.4s both",
        }}
      >
        <span style={{ fontSize: "0.7rem", letterSpacing: "0.08em", color: "#888" }}>
          Desarrollador & Diseñador
        </span>

        <span style={{ fontSize: "0.7rem", letterSpacing: "0.08em", color: "#888" }}>
          Buenos Aires, AR
        </span>

        <a
          href="mailto:hola@tunombre.com"
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.08em",
            color: "#111",
            textDecoration: "none",
            borderBottom: "1px solid #111",
            paddingBottom: "1px",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.4")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
        >
          hola@tunombre.com
        </a>
      </footer>
    </main>
  );
}
