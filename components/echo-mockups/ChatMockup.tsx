export default function ChatMockup() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "375px",
        minWidth: "280px",
        flexShrink: 0,
        aspectRatio: "9 / 16",
        background: "#0A0A0A",
        borderRadius: "32px",
        border: "1px solid rgba(255,255,255,0.08)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        fontFamily: "var(--font-sans), system-ui, sans-serif",
        position: "relative",
        boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
      }}
    >
      {/* Status bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 24px 8px",
          fontSize: "12px",
          color: "#888",
        }}
      >
        <span>9:41</span>
        <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
          <svg width="16" height="12" viewBox="0 0 16 12" fill="#888">
            <rect x="0" y="6" width="3" height="6" rx="1" />
            <rect x="4.5" y="4" width="3" height="8" rx="1" />
            <rect x="9" y="1" width="3" height="11" rx="1" />
            <rect x="13" y="0" width="3" height="12" rx="1" opacity="0.3" />
          </svg>
          <svg width="24" height="12" viewBox="0 0 24 12" fill="none" stroke="#888" strokeWidth="1">
            <rect x="0.5" y="0.5" width="20" height="11" rx="2" />
            <rect x="3" y="3" width="14" height="6" rx="1" fill="#2CD59C" />
            <rect x="21.5" y="3.5" width="2" height="5" rx="1" fill="#888" />
          </svg>
        </div>
      </div>

      {/* Notice bar */}
      <div style={{ padding: "8px 24px" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "4px 12px",
            borderRadius: "20px",
            border: "1px solid rgba(44,213,156,0.3)",
            background: "rgba(44,213,156,0.06)",
            fontSize: "12px",
            color: "#2CD59C",
            fontWeight: 500,
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#2CD59C",
            }}
          />
          Echo knows 47 notes
        </div>
      </div>

      {/* Messages */}
      <div
        style={{
          flex: 1,
          padding: "16px 24px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          overflow: "hidden",
        }}
      >
        {/* Date separator */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
          <span style={{ fontSize: "11px", color: "#555" }}>Today</span>
          <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
        </div>

        {/* User message */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div
            style={{
              maxWidth: "76%",
              background: "rgba(44,213,156,0.1)",
              border: "1px solid rgba(44,213,156,0.15)",
              borderRadius: "18px 18px 4px 18px",
              padding: "12px 16px",
            }}
          >
            <p style={{ fontSize: "14px", color: "#E8E5E0", lineHeight: 1.5 }}>
              I&apos;ve been thinking about why I keep coming back to design systems. What do my notes say about that?
            </p>
          </div>
        </div>

        {/* Echo message */}
        <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
          {/* Avatar */}
          <div
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #2CD59C 0%, #7FFFD4 100%)",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2.5">
              <circle cx="12" cy="12" r="3" />
              <circle cx="12" cy="12" r="8" opacity="0.5" />
            </svg>
          </div>
          <div
            style={{
              maxWidth: "76%",
              background: "#141414",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "18px 18px 18px 4px",
              padding: "12px 16px",
            }}
          >
            <p style={{ fontSize: "14px", color: "#B0ADA8", lineHeight: 1.55 }}>
              You mention systems in 12 of your notes — it&apos;s not just work for you. You wrote on July 18: &quot;the satisfaction of making chaos legible.&quot; That keeps showing up. You&apos;re drawn to structure as a form of care.
            </p>
          </div>
        </div>

        {/* User message 2 */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div
            style={{
              maxWidth: "76%",
              background: "rgba(44,213,156,0.1)",
              border: "1px solid rgba(44,213,156,0.15)",
              borderRadius: "18px 18px 4px 18px",
              padding: "12px 16px",
            }}
          >
            <p style={{ fontSize: "14px", color: "#E8E5E0", lineHeight: 1.5 }}>
              That&apos;s actually really accurate
            </p>
          </div>
        </div>
      </div>

      {/* Input area */}
      <div
        style={{
          padding: "12px 24px 28px",
          borderTop: "1px solid rgba(255,255,255,0.04)",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div
          style={{
            flex: 1,
            background: "#141414",
            borderRadius: "24px",
            border: "1px solid rgba(255,255,255,0.06)",
            padding: "10px 16px",
            fontSize: "14px",
            color: "#555",
          }}
        >
          Say something...
        </div>
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: "#2CD59C",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </div>
      </div>
    </div>
  );
}
