"use client";
import { useState } from "react";
import EchoCaseStudyCover from "@/components/echo-mockups/EchoCaseStudyCover";

/**
 * Dribbble/Behance-style project thumbnail for the home page grid:
 * a floating browser (or phone) mockup on a soft, accent-tinted glow
 * background, instead of a flat edge-to-edge screenshot or a bare
 * gradient + label placeholder.
 *
 * - "echo" reuses the same animated shader + 3D phone mockup
 *   (EchoCaseStudyCover) built for its case-study hero, so the home
 *   thumbnail and the drilldown cover match exactly. The caption
 *   ("Speak your mind.") is hidden here since the card already shows
 *   its own title next to the thumbnail.
 * - Projects with a real screenshot (tins-derm) show it inset in a
 *   mac-style browser frame.
 * - Projects without one yet fall back to a small abstract UI sketch
 *   (still inside the browser frame) tinted with the project's own
 *   accent color, so the thumbnail always reads as "a product",
 *   never as empty space.
 */
export default function ProjectThumbnail({
  slug,
  title,
  accentColor,
  coverImage,
}: {
  slug: string;
  title: string;
  accentColor: string;
  coverImage?: string;
}) {
  if (slug === "echo") {
    return (
      <div
        style={{
          borderRadius: "12px",
          overflow: "hidden",
          aspectRatio: "16 / 9",
          background: "#0A0A0A",
          transform: "scale(0.8)",
        }}
      >
        <EchoCaseStudyCover caption={false} />
      </div>
    );
  }

  return (
    <div
      style={{
        position: "relative",
        borderRadius: "12px",
        overflow: "hidden",
        aspectRatio: "16 / 9",
        background: "#17160F",
        transform: "scale(0.8)",
      }}
    >
      <GlowBackground accentColor={accentColor} />
      <BrowserMockup slug={slug} title={title} accentColor={accentColor} coverImage={coverImage} />
    </div>
  );
}

function GlowBackground({ accentColor }: { accentColor: string }) {
  return (
    <div style={{ position: "absolute", inset: 0 }}>
      <div
        style={{
          position: "absolute",
          width: "75%",
          height: "150%",
          left: "-15%",
          top: "-25%",
          borderRadius: "50%",
          background: `radial-gradient(ellipse, ${accentColor}3D 0%, ${accentColor}12 40%, transparent 70%)`,
          filter: "blur(24px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(232,229,224,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(232,229,224,0.025) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage: "radial-gradient(ellipse at 32% 30%, black 0%, transparent 78%)",
          WebkitMaskImage: "radial-gradient(ellipse at 32% 30%, black 0%, transparent 78%)",
        }}
      />
    </div>
  );
}

const DOMAINS: Record<string, string> = {
  "tins-derm": "tinsderm.com",
  "onboarding-redesign": "app.traditum.com",
  "analytics-dashboard": "app.concntric.com",
  "design-system": "coderhouse.com/system",
};

function BrowserMockup({
  slug,
  title,
  accentColor,
  coverImage,
}: {
  slug: string;
  title: string;
  accentColor: string;
  coverImage?: string;
}) {
  const [errored, setErrored] = useState(false);
  const showImage = Boolean(coverImage) && !errored;

  return (
    <div
      style={{
        position: "absolute",
        left: "9%",
        right: "-7%",
        top: "13%",
        bottom: "-9%",
        borderRadius: "10px",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 24px 60px -12px rgba(0,0,0,0.55)",
        transform: "rotate(-1.5deg)",
        background: "#1F1E1C",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Browser chrome */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          padding: "7px 10px",
          background: "#26221D",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          flexShrink: 0,
        }}
      >
        {["#E8867A", "#E8C77A", "#8FCF9B"].map((c) => (
          <span
            key={c}
            style={{ width: "6px", height: "6px", borderRadius: "50%", background: c, opacity: 0.8, flexShrink: 0 }}
          />
        ))}
        <span
          style={{
            marginLeft: "6px",
            flex: 1,
            fontFamily: "var(--font-sans), sans-serif",
            fontSize: "9px",
            color: "rgba(232,229,224,0.35)",
            background: "rgba(255,255,255,0.04)",
            borderRadius: "4px",
            padding: "2px 8px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {DOMAINS[slug] ?? title}
        </span>
      </div>

      {/* Content */}
      <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
        {showImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={coverImage}
            alt={`${title} preview`}
            onError={() => setErrored(true)}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
          />
        ) : (
          <AbstractUI slug={slug} accentColor={accentColor} />
        )}
      </div>
    </div>
  );
}

function AbstractUI({ slug, accentColor }: { slug: string; accentColor: string }) {
  if (slug === "onboarding-redesign") return <OnboardingAbstract accentColor={accentColor} />;
  if (slug === "analytics-dashboard") return <DashboardAbstract accentColor={accentColor} />;
  if (slug === "design-system") return <DesignSystemAbstract accentColor={accentColor} />;
  return <div style={{ width: "100%", height: "100%", background: "#161512" }} />;
}

function OnboardingAbstract({ accentColor }: { accentColor: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#161512",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "8%",
      }}
    >
      <div
        style={{
          width: "68%",
          background: "#1F1E1C",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "10px",
          padding: "9% 8%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10%",
        }}
      >
        <div style={{ width: "36%", height: "7%", borderRadius: "999px", background: `${accentColor}66` }} />
        <div style={{ display: "flex", flexDirection: "column", gap: "8%", width: "100%" }}>
          <div style={{ width: "100%", height: "9%", borderRadius: "4px", background: "rgba(232,229,224,0.08)" }} />
          <div style={{ width: "78%", height: "9%", borderRadius: "4px", background: "rgba(232,229,224,0.08)" }} />
        </div>
        <div style={{ display: "flex", gap: "6px" }}>
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: i === 0 ? accentColor : "rgba(232,229,224,0.15)",
              }}
            />
          ))}
        </div>
        <div style={{ width: "58%", height: "13%", borderRadius: "6px", background: accentColor, opacity: 0.85 }} />
      </div>
    </div>
  );
}

function DashboardAbstract({ accentColor }: { accentColor: string }) {
  const bars = [40, 65, 30, 80, 55, 70, 45];
  return (
    <div style={{ width: "100%", height: "100%", background: "#161512", display: "flex" }}>
      <div
        style={{
          width: "18%",
          background: "#1B1A17",
          borderRight: "1px solid rgba(255,255,255,0.05)",
          padding: "10% 8%",
          display: "flex",
          flexDirection: "column",
          gap: "12%",
        }}
      >
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            style={{
              width: "100%",
              height: "8%",
              borderRadius: "3px",
              background: i === 0 ? `${accentColor}66` : "rgba(232,229,224,0.08)",
            }}
          />
        ))}
      </div>
      <div style={{ flex: 1, padding: "8%", display: "flex", flexDirection: "column", gap: "8%" }}>
        <div style={{ display: "flex", gap: "6%" }}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{ flex: 1, height: "22%", borderRadius: "6px", background: "#1F1E1C", border: "1px solid rgba(255,255,255,0.06)" }}
            />
          ))}
        </div>
        <div style={{ flex: 1, display: "flex", alignItems: "flex-end", gap: "6%" }}>
          {bars.map((h, i) => (
            <div
              key={i}
              style={{ flex: 1, height: `${h}%`, borderRadius: "3px 3px 0 0", background: `${accentColor}${i % 2 === 0 ? "AA" : "55"}` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function DesignSystemAbstract({ accentColor }: { accentColor: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#161512",
        padding: "10%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "8%",
      }}
    >
      {Array.from({ length: 6 }).map((_, i) => {
        const active = i === 2 || i === 4;
        return (
          <div
            key={i}
            style={{
              borderRadius: "8px",
              background: active ? `${accentColor}33` : "#1F1E1C",
              border: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "40%",
                height: "18%",
                borderRadius: "3px",
                background: active ? accentColor : "rgba(232,229,224,0.15)",
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
