"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Work", id: "work" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export default function NavBar() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const observers = NAV_LINKS.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        padding: "0 clamp(1.5rem, 4vw, 3rem)",
        height: "52px",
        background: "rgba(17, 17, 17, 0.8)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(232, 229, 224, 0.06)",
      }}
    >
      {/* Logo */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
          display: "flex",
          alignItems: "center",
          justifySelf: "start",
        }}
      >
        <Image
          src="/avatar.jpg"
          alt="Charly Chaves"
          width={30}
          height={30}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            display: "block",
          }}
          priority
        />
      </button>

      {/* Links */}
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        {NAV_LINKS.map(({ label, id }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              fontFamily: "var(--font-pixel)",
              fontSize: "14px",
              letterSpacing: "0.08em",
              color: active === id ? "#E8E5E0" : "#7A7773",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => {
              if (active !== id)
                (e.currentTarget as HTMLButtonElement).style.color = "#B0ADA8";
            }}
            onMouseLeave={(e) => {
              if (active !== id)
                (e.currentTarget as HTMLButtonElement).style.color = "#7A7773";
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}
