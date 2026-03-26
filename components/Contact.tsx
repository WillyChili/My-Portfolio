"use client";

import { useEffect, useRef, useState } from "react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/tunombre",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/tunombre",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com/tunombre",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal, .reveal-left").forEach((el) => {
              el.classList.add("visible");
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate sending - replace with your actual form handler
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setFormState({ name: "", email: "", message: "" });
  };

  const inputStyle = {
    background: "var(--bg)",
    border: "1px solid var(--border)",
    color: "var(--text)",
    borderRadius: "12px",
    padding: "14px 18px",
    width: "100%",
    fontFamily: "var(--font-body)",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-32 px-6 relative overflow-hidden"
    >
      {/* Section number */}
      <div
        className="absolute left-[-1rem] bottom-0 font-display font-black leading-none pointer-events-none select-none"
        style={{
          fontSize: "clamp(120px, 18vw, 280px)",
          color: "transparent",
          WebkitTextStroke: "1px var(--border)",
          opacity: 0.3,
          letterSpacing: "-0.05em",
        }}
      >
        04
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16 reveal">
          <span
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: "var(--accent)", letterSpacing: "0.2em" }}
          >
            [ 04 ]
          </span>
          <div className="diagonal-line flex-1" />
          <span
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: "var(--muted)", letterSpacing: "0.2em" }}
          >
            Contacto
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <h2
              className="font-display font-bold mb-6 reveal"
              style={{
                fontSize: "clamp(2rem, 5vw, 4rem)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Hablemos de tu{" "}
              <span className="italic" style={{ color: "var(--accent)" }}>
                próximo proyecto
              </span>
              .
            </h2>

            <p
              className="reveal delay-2 mb-10"
              style={{ color: "var(--muted)", maxWidth: "420px", lineHeight: 1.8 }}
            >
              Estoy disponible para proyectos freelance, colaboraciones y posiciones
              a tiempo completo. Si tienes una idea, cuéntamela.
            </p>

            {/* Email */}
            <a
              href="mailto:hola@tunombre.com"
              className="reveal delay-3 block font-display font-semibold hover-underline mb-10"
              style={{
                fontSize: "clamp(1.2rem, 3vw, 2rem)",
                color: "var(--text)",
                textDecoration: "none",
              }}
            >
              hola@tunombre.com
            </a>

            {/* Socials */}
            <div className="reveal delay-4 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 flex items-center justify-center rounded-full transition-all duration-300"
                  style={{
                    border: "1px solid var(--border)",
                    color: "var(--muted)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "var(--accent)";
                    el.style.color = "var(--accent)";
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "var(--border)";
                    el.style.color = "var(--muted)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal-left delay-2">
            {sent ? (
              <div
                className="h-full flex flex-col items-center justify-center text-center p-12 rounded-2xl"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ background: "var(--accent)", color: "var(--bg)" }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3
                  className="font-display font-bold text-2xl mb-3"
                  style={{ color: "var(--text)" }}
                >
                  ¡Mensaje enviado!
                </h3>
                <p style={{ color: "var(--muted)" }}>
                  Te responderé lo antes posible. Gracias por escribir.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 font-mono text-sm hover-underline"
                  style={{ color: "var(--accent)", background: "none", border: "none", cursor: "pointer", fontSize: "0.8rem" }}
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 p-8 rounded-2xl"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <div>
                  <label
                    className="font-mono text-xs block mb-2"
                    style={{ color: "var(--muted)", fontSize: "0.7rem", letterSpacing: "0.1em" }}
                  >
                    NOMBRE
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                  />
                </div>

                <div>
                  <label
                    className="font-mono text-xs block mb-2"
                    style={{ color: "var(--muted)", fontSize: "0.7rem", letterSpacing: "0.1em" }}
                  >
                    EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="tu@email.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                  />
                </div>

                <div>
                  <label
                    className="font-mono text-xs block mb-2"
                    style={{ color: "var(--muted)", fontSize: "0.7rem", letterSpacing: "0.1em" }}
                  >
                    MENSAJE
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Cuéntame sobre tu proyecto..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full font-mono text-sm py-4 rounded-xl transition-all duration-300"
                  style={{
                    background: sending ? "var(--border)" : "var(--accent)",
                    color: "var(--bg)",
                    border: "none",
                    cursor: sending ? "not-allowed" : "pointer",
                    fontSize: "0.8rem",
                    letterSpacing: "0.1em",
                    fontWeight: 500,
                  }}
                >
                  {sending ? "Enviando..." : "Enviar mensaje →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
