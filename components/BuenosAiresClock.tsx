"use client";
import { useEffect, useState } from "react";

function formatBuenosAiresTime(date: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "America/Argentina/Buenos_Aires",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date);
}

/**
 * Live clock showing the current time in Buenos Aires, regardless of the
 * visitor's own timezone. Renders a placeholder until mounted to avoid an
 * SSR/client hydration mismatch, then ticks every second.
 */
export default function BuenosAiresClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    setTime(formatBuenosAiresTime(new Date()));
    const id = setInterval(() => {
      setTime(formatBuenosAiresTime(new Date()));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span
      suppressHydrationWarning
      style={{
        fontFamily: "var(--font-pixel)",
        fontSize: "13px",
        letterSpacing: "0.08em",
        color: "#7A7773",
        fontVariantNumeric: "tabular-nums",
        display: "inline-block",
        minWidth: "60px",
      }}
    >
      {time ?? "--:--:--"}
    </span>
  );
}
