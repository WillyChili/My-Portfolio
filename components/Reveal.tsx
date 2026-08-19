"use client";
import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";

/**
 * Fades + lifts its children into place the first time they scroll
 * into view, matching the entrance treatment Hero already uses on
 * load. Fires once via IntersectionObserver, same technique NavBar
 * uses to track the active section.
 */
export default function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible || reduced ? "translateY(0)" : "translateY(14px)",
        transition: `opacity 0.5s ease-out ${delay}s, transform 0.5s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
