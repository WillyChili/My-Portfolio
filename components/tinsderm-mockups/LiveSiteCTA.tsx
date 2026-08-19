"use client";

export default function LiveSiteCTA({
  href,
  screenshot,
  accentColor,
}: {
  href: string;
  screenshot: string;
  accentColor: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "block",
        textDecoration: "none",
        borderRadius: "16px",
        overflow: "hidden",
        border: `1px solid ${accentColor}33`,
        background: "#1F1E1C",
        position: "relative",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = `${accentColor}88`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = `${accentColor}33`;
      }}
    >
      {/* Browser chrome */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "10px 12px",
          background: "#26221D",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {["#E8867A", "#E8C77A", "#8FCF9B"].map((c) => (
          <span
            key={c}
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: c,
              opacity: 0.8,
              flexShrink: 0,
            }}
          />
        ))}
        <span
          style={{
            marginLeft: "8px",
            flex: 1,
            fontFamily: "var(--font-sans), sans-serif",
            fontSize: "11px",
            color: "rgba(232,229,224,0.4)",
            background: "rgba(255,255,255,0.04)",
            borderRadius: "4px",
            padding: "3px 10px",
          }}
        >
          willychili.github.io/Tins-Derm
        </span>
      </div>

      {/* Screenshot */}
      <div style={{ position: "relative" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={screenshot}
          alt="TINS DERM live site preview"
          style={{ width: "100%", display: "block", opacity: 0.9 }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(15,15,14,0.85) 0%, rgba(15,15,14,0.15) 45%, rgba(15,15,14,0) 70%)",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            padding: "clamp(1.25rem, 3vw, 2rem)",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
              color: "#E8E5E0",
              fontWeight: 400,
            }}
          >
            See the finished site, live
          </span>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "var(--font-pixel)",
              fontSize: "13px",
              letterSpacing: "0.06em",
              color: "#171717",
              background: accentColor,
              borderRadius: "8px",
              padding: "10px 18px",
              whiteSpace: "nowrap",
            }}
          >
            View live site ↗
          </span>
        </div>
      </div>
    </a>
  );
}
