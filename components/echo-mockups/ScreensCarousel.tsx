"use client";

const SCREENS = [
  { src: "/echo/login.png", alt: "Login — echo, tu reflexión personal con IA" },
  { src: "/echo/onboarding-1.png", alt: "Hi, I'm Echo — welcome screen" },
  { src: "/echo/onboarding-2.png", alt: "What should I call you? — personalization" },
  { src: "/echo/onboarding-3.png", alt: "Share. I'm listening — value proposition" },
  { src: "/echo/home-empty.png", alt: "Home — empty state with voice input" },
  { src: "/echo/home-listening.png", alt: "Home — voice recording active" },
  { src: "/echo/home-first-note.png", alt: "Home — first note saved" },
  { src: "/echo/home-notes.png", alt: "Home — notes list with entries" },
  { src: "/echo/echo-summary.png", alt: "Echo — AI-generated daily summary" },
  { src: "/echo/home-select.png", alt: "Home — note selection mode" },
  { src: "/echo/settings.png", alt: "Settings — appearance, language, personality" },
];

export default function ScreensCarousel() {
  return (
    <div
      style={{
        width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "clamp(1rem, 2vw, 1.5rem)",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          padding: "clamp(2rem, 4vw, 3rem) clamp(2rem, 6vw, 5rem)",
          scrollbarWidth: "none",
        }}
      >
        {SCREENS.map(({ src, alt }) => (
          <div
            key={src}
            style={{
              flexShrink: 0,
              width: "260px",
              scrollSnapAlign: "center",
            }}
          >
            <img
              src={src}
              alt={alt}
              style={{
                width: "100%",
                borderRadius: "24px",
                border: "1px solid rgba(255,255,255,0.06)",
                boxShadow: "0 16px 48px rgba(0,0,0,0.4)",
                display: "block",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
