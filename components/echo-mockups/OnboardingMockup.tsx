export default function OnboardingMockup() {
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

      {/* Center content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 32px",
          gap: "32px",
        }}
      >
        {/* Echo logo / icon */}
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, rgba(44,213,156,0.15) 0%, rgba(127,255,212,0.08) 100%)",
            border: "1px solid rgba(44,213,156,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#2CD59C" strokeWidth="1.5">
            <circle cx="12" cy="12" r="3" />
            <circle cx="12" cy="12" r="7" opacity="0.6" />
            <circle cx="12" cy="12" r="11" opacity="0.3" />
          </svg>
        </div>

        <div style={{ textAlign: "center" }}>
          <h1
            style={{
              fontSize: "28px",
              fontWeight: 600,
              color: "#E8E5E0",
              letterSpacing: "-0.02em",
              marginBottom: "12px",
            }}
          >
            Choose your language
          </h1>
          <p style={{ fontSize: "15px", color: "#666", lineHeight: 1.5 }}>
            You can change this later in settings.
          </p>
        </div>

        {/* Language options */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%" }}>
          <div
            style={{
              background: "#141414",
              border: "2px solid rgba(44,213,156,0.4)",
              borderRadius: "16px",
              padding: "18px 20px",
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <span style={{ fontSize: "24px" }}>🇺🇸</span>
            <div>
              <p style={{ fontSize: "16px", fontWeight: 500, color: "#E8E5E0" }}>English</p>
              <p style={{ fontSize: "13px", color: "#666" }}>Notes, voice & Echo in English</p>
            </div>
            <div
              style={{
                marginLeft: "auto",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                background: "#2CD59C",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="3">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </div>

          <div
            style={{
              background: "#141414",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "16px",
              padding: "18px 20px",
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <span style={{ fontSize: "24px" }}>🇦🇷</span>
            <div>
              <p style={{ fontSize: "16px", fontWeight: 500, color: "#E8E5E0" }}>Español</p>
              <p style={{ fontSize: "13px", color: "#666" }}>Notas, voz y Echo en español</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div style={{ padding: "0 32px 36px" }}>
        <button
          style={{
            width: "100%",
            padding: "16px",
            borderRadius: "16px",
            border: "none",
            background: "#E8E5E0",
            color: "#0A0A0A",
            fontSize: "16px",
            fontWeight: 600,
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          Continue
        </button>

        {/* Step indicator */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "6px",
            marginTop: "20px",
          }}
        >
          <div style={{ width: "20px", height: "4px", borderRadius: "2px", background: "#2CD59C" }} />
          <div style={{ width: "8px", height: "4px", borderRadius: "2px", background: "#333" }} />
          <div style={{ width: "8px", height: "4px", borderRadius: "2px", background: "#333" }} />
          <div style={{ width: "8px", height: "4px", borderRadius: "2px", background: "#333" }} />
        </div>
      </div>
    </div>
  );
}
