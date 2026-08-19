"use client";
import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";

/**
 * A quieter sibling of the dot-grid spotlight in Hero.tsx: same
 * technique (two stacked dot grids, a cursor-following CSS mask
 * revealing the brighter layer), tuned way down so it reads as
 * ambient texture rather than a focal effect — meant to be dropped
 * into section backgrounds that shouldn't compete with the content
 * on top of them.
 *
 * Drop this as the first child of a `position: relative` container;
 * give the content that follows `position: relative, zIndex: 1` so
 * it stacks above these layers (zIndex 0).
 */
export default function AmbientGrid() {
  const brightGridRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const container = brightGridRef.current?.parentElement;
    if (!container) return;

    let rafId: number;
    let targetX = -9999;
    let targetY = -9999;
    let currentX = targetX;
    let currentY = targetY;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    };

    const animate = () => {
      currentX = lerp(currentX, targetX, 0.06);
      currentY = lerp(currentY, targetY, 0.06);
      if (brightGridRef.current) {
        const mask = `radial-gradient(220px circle at ${currentX}px ${currentY}px, black 0%, transparent 100%)`;
        (brightGridRef.current.style as CSSStyleDeclaration & { webkitMaskImage: string }).webkitMaskImage = mask;
        brightGridRef.current.style.maskImage = mask;
      }
      rafId = requestAnimationFrame(animate);
    };

    container.addEventListener("mousemove", handleMouseMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [reduced]);

  return (
    <>
      {/* Base dot grid — faint, always present */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          backgroundImage: "radial-gradient(circle, rgba(232, 229, 224, 0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Bright dot grid — softly revealed near cursor, skipped entirely under reduced motion */}
      {!reduced && (
        <div
          ref={brightGridRef}
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 0,
            backgroundImage: "radial-gradient(circle, rgba(232, 229, 224, 0.28) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "none",
            WebkitMaskImage: "none",
          }}
        />
      )}
    </>
  );
}
