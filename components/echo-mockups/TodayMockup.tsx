export default function TodayMockup() {
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

      {/* Header */}
      <div style={{ padding: "16px 24px 12px" }}>
        <p style={{ fontSize: "14px", color: "#666", marginBottom: "2px" }}>Tuesday, Aug 5</p>
        <h1 style={{ fontSize: "26px", fontWeight: 600, color: "#E8E5E0", letterSpacing: "-0.02em" }}>
          Hey, Charly
        </h1>
      </div>

      {/* Textarea */}
      <div style={{ padding: "0 24px", marginBottom: "12px" }}>
        <div
          style={{
            background: "#141414",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,0.06)",
            padding: "16px",
            minHeight: "88px",
            position: "relative",
          }}
        >
          <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.5 }}>
            What&apos;s on your mind today...
          </p>
          <div
            style={{
              position: "absolute",
              bottom: "12px",
              right: "12px",
              display: "flex",
              gap: "8px",
            }}
          >
            <span
              style={{
                fontSize: "11px",
                color: "#2CD59C",
                background: "rgba(44,213,156,0.1)",
                border: "1px solid rgba(44,213,156,0.2)",
                borderRadius: "8px",
                padding: "4px 10px",
              }}
            >
              🎙 EN
            </span>
          </div>
        </div>
      </div>

      {/* Mic button */}
      <div style={{ display: "flex", justifyContent: "center", padding: "8px 0 16px" }}>
        <div
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background: "rgba(44,213,156,0.1)",
            border: "2px solid rgba(44,213,156,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2CD59C" strokeWidth="2" strokeLinecap="round">
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" y1="19" x2="12" y2="23" />
            <line x1="8" y1="23" x2="16" y2="23" />
          </svg>
        </div>
      </div>

      {/* Notes header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 24px 12px",
          borderTop: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#E8E5E0" }}>Today&apos;s Notes</h2>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      </div>

      {/* Note cards */}
      <div style={{ padding: "0 24px", display: "flex", flexDirection: "column", gap: "8px", flex: 1, overflow: "hidden" }}>
        {[
          { time: "2:30 PM", text: "Had a great conversation with the team about the new onboarding flow. Need to push on the micro-copy..." },
          { time: "10:15 AM", text: "Morning thoughts: feeling more focused this week. The daily writing habit is finally sticking." },
          { time: "8:02 AM", text: "Woke up thinking about that design system problem. What if we used semantic tokens..." },
        ].map(({ time, text }, i) => (
          <div
            key={i}
            style={{
              background: "#141414",
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,0.04)",
              padding: "14px 16px",
            }}
          >
            <p style={{ fontSize: "11px", color: "#555", marginBottom: "6px" }}>{time}</p>
            <p
              style={{
                fontSize: "14px",
                color: "#999",
                lineHeight: 1.45,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {text}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom nav hint */}
      <div style={{ padding: "12px 0 24px", display: "flex", justifyContent: "center" }}>
        <div style={{ width: "134px", height: "5px", background: "#333", borderRadius: "3px" }} />
      </div>
    </div>
  );
}
