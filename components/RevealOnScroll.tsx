"use client";

import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";

/**
 * Fades + lifts its children in once they scroll into view, using the
 * same ease-out curve as the home page Hero's entrance (fadeIn in
 * globals.css) so a case-study page reads as a continuation of that
 * same "appearing" language instead of a different motion system.
 *
 * One-shot: once revealed, it unobserves and stays visible, so
 * scrolling back up and down doesn't re-trigger the animation on
 * content people are actively reading.
 */
export default function RevealOnScroll({
  children,
  delay = 0,
  id,
}: {
  children: React.ReactNode;
  delay?: number;
  id?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      id={id}
      style={{
        opacity: visible ? 1 : 0,
        transform: reduced ? "none" : visible ? "translateY(0)" : "translateY(22px)",
        transition: reduced
          ? "opacity 0.5s ease"
          : `opacity 0.7s cubic-bezier(0.23, 1, 0.32, 1) ${delay}ms, transform 0.7s cubic-bezier(0.23, 1, 0.32, 1) ${delay}ms`,
        willChange: reduced ? undefined : "opacity, transform",
        scrollMarginTop: id ? "84px" : undefined,
      }}
    >
      {children}
    </div>
  );
}
