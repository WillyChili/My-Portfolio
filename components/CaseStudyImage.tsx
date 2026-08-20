"use client";
import { useEffect, useRef, useState } from "react";

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
  const imgRef = useRef<HTMLImageElement>(null);
  const showImage = Boolean(src) && !errored;

  useEffect(() => {
    // The <img> is server-rendered with its final `src`, so a 404 can fire
    // its native `error` event before React hydrates and attaches
    // `onError` below — that early error is lost and the broken-image
    // icon sticks around forever. Catching it here on mount (via
    // `complete && naturalWidth === 0`, the standard signal for "this
    // image failed to load") closes that gap for placeholder paths.
    if (imgRef.current?.complete && imgRef.current.naturalWidth === 0) {
      setErrored(true);
    }
  }, [src]);

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
          ref={imgRef}
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
