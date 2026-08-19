"use client";
import { useState } from "react";

/**
 * Renders a real image when `src` is provided and loads successfully.
 * Falls back to the existing gradient + label placeholder otherwise,
 * so projects without real photography keep their current look.
 */
export default function CaseStudyImage({
  src,
  alt,
  label,
  accentColor,
  borderRadius = "12px",
  aspectRatio = "16 / 9",
  gradientOpacity = "22",
  labelOpacity = 0.15,
}: {
  src?: string;
  alt: string;
  label: string;
  accentColor: string;
  borderRadius?: string;
  aspectRatio?: string;
  gradientOpacity?: string;
  labelOpacity?: number;
}) {
  const [errored, setErrored] = useState(false);
  const showImage = Boolean(src) && !errored;

  return (
    <div
      style={{
        borderRadius,
        overflow: "hidden",
        aspectRatio,
        background: "#1F1E1C",
        position: "relative",
      }}
    >
      {showImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          onError={() => setErrored(true)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top",
            display: "block",
          }}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: `linear-gradient(135deg, #1F1E1C 0%, ${accentColor}${gradientOpacity} 100%)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "13px",
              color: `rgba(232,229,224,${labelOpacity})`,
              letterSpacing: "0.05em",
            }}
          >
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
