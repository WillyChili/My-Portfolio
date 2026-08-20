"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { usePrefersReducedMotion } from "@/lib/useReducedMotion";

/**
 * Same browser-chrome + screenshot card as LiveSiteCTA (tinsderm-mockups),
 * but the CTA is password-gated: clicking it opens a modal asking for a
 * password instead of navigating directly. Correct password opens the
 * prototype in a new tab.
 *
 * Rendered via a portal to document.body so the modal escapes the
 * containing block that RevealOnScroll's persistent `will-change`
 * creates on its ancestors (position: fixed would otherwise be trapped
 * inside that section instead of covering the viewport).
 */
export default function PrototypeCTA({
  href,
  password,
  screenshot,
  accentColor,
  domain,
  alt,
}: {
  href: string;
  password: string;
  screenshot: string;
  accentColor: string;
  domain: string;
  alt: string;
}) {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => setMounted(true), []);

  const openModal = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpen(true);
    // Two-step mount so the entrance transition has a starting state to
    // animate from instead of jumping straight to visible.
    requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
  };

  const closeModal = () => {
    setVisible(false);
    closeTimeout.current = setTimeout(() => {
      setOpen(false);
      setValue("");
      setError(false);
    }, reduced ? 0 : 220);
  };

  useEffect(() => {
    if (!open) return;
    const focusDelay = setTimeout(() => inputRef.current?.focus(), reduced ? 0 : 240);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
        return;
      }
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'input, button, [href], [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(focusDelay);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value === password) {
      window.open(href, "_blank", "noopener,noreferrer");
      closeModal();
    } else {
      setError(true);
      // Let the browser's password manager offer to save even on a wrong
      // guess without stealing focus from the retry.
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        style={{
          display: "block",
          width: "100%",
          textAlign: "left",
          font: "inherit",
          appearance: "none",
          padding: 0,
          margin: 0,
          cursor: "pointer",
          borderRadius: "16px",
          overflow: "hidden",
          border: `1px solid ${accentColor}33`,
          background: "#1F1E1C",
          position: "relative",
          transition: "border-color 200ms ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = `${accentColor}88`;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = `${accentColor}33`;
        }}
      >
        {/* Browser chrome */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "10px 12px",
            background: "#26221D",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {["#E8867A", "#E8C77A", "#8FCF9B"].map((c) => (
            <span
              key={c}
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: c,
                opacity: 0.8,
                flexShrink: 0,
              }}
            />
          ))}
          <span
            style={{
              marginLeft: "8px",
              flex: 1,
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: "11px",
              color: "rgba(232,229,224,0.4)",
              background: "rgba(255,255,255,0.04)",
              borderRadius: "4px",
              padding: "3px 10px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <LockIcon size={10} />
            {domain}
          </span>
        </div>

        {/* Screenshot */}
        <div style={{ position: "relative" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={screenshot}
            alt={alt}
            style={{ width: "100%", display: "block", opacity: 0.9 }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(15,15,14,0.85) 0%, rgba(15,15,14,0.15) 45%, rgba(15,15,14,0) 70%)",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              padding: "clamp(1.25rem, 3vw, 2rem)",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                color: "#E8E5E0",
                fontWeight: 400,
              }}
            >
              See the working prototype
            </span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: "var(--font-pixel)",
                fontSize: "13px",
                letterSpacing: "0.06em",
                color: "#171717",
                background: accentColor,
                borderRadius: "8px",
                padding: "10px 18px",
                whiteSpace: "nowrap",
              }}
            >
              Explore prototype ↗
            </span>
          </div>
        </div>
      </button>

      {mounted &&
        open &&
        createPortal(
          <div
            role="presentation"
            onMouseDown={closeModal}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 300,
              background: "rgba(10, 10, 9, 0.72)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1.5rem",
              opacity: visible ? 1 : 0,
              transition: reduced ? "opacity 0.15s ease" : "opacity 0.25s cubic-bezier(0.23, 1, 0.32, 1)",
            }}
          >
            <div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="prototype-password-title"
              aria-describedby="prototype-password-copy"
              onMouseDown={(e) => e.stopPropagation()}
              style={{
                width: "min(380px, 100%)",
                background: "#1B1A18",
                border: "1px solid rgba(232,229,224,0.1)",
                borderRadius: "16px",
                padding: "1.75rem",
                opacity: visible ? 1 : 0,
                transform: reduced ? "none" : visible ? "scale(1)" : "scale(0.96)",
                transition: reduced
                  ? "opacity 0.15s ease"
                  : "transform 0.28s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.28s cubic-bezier(0.23, 1, 0.32, 1)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "0.6rem",
                }}
              >
                <LockIcon size={13} color={accentColor} />
                <p
                  id="prototype-password-title"
                  style={{
                    fontFamily: "var(--font-pixel)",
                    fontSize: "12px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: accentColor,
                  }}
                >
                  Password protected
                </p>
              </div>
              <p
                id="prototype-password-copy"
                style={{
                  fontFamily: "var(--font-sans), sans-serif",
                  fontSize: "14px",
                  lineHeight: 1.55,
                  color: "#8A8781",
                  marginBottom: "1.25rem",
                }}
              >
                This prototype is shared privately. Enter the password to open it in a new tab.
              </p>

              <form onSubmit={handleSubmit}>
                <input
                  ref={inputRef}
                  type="password"
                  autoComplete="off"
                  value={value}
                  onChange={(e) => {
                    setValue(e.target.value);
                    if (error) setError(false);
                  }}
                  placeholder="Password"
                  aria-invalid={error}
                  style={{
                    width: "100%",
                    boxSizing: "border-box",
                    fontFamily: "var(--font-sans), sans-serif",
                    fontSize: "15px",
                    color: "#E8E5E0",
                    background: "rgba(255,255,255,0.04)",
                    border: `1px solid ${error ? "#E8867A" : "rgba(232,229,224,0.15)"}`,
                    borderRadius: "8px",
                    padding: "0.7rem 0.9rem",
                    outline: "none",
                    transition: "border-color 0.2s ease",
                  }}
                />
                <div
                  role="status"
                  aria-live="polite"
                  style={{
                    minHeight: "20px",
                    marginTop: "0.5rem",
                  }}
                >
                  {error && (
                    <p
                      style={{
                        fontFamily: "var(--font-sans), sans-serif",
                        fontSize: "13px",
                        color: "#E8867A",
                        margin: 0,
                      }}
                    >
                      Incorrect password. Try again.
                    </p>
                  )}
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    marginTop: "0.75rem",
                  }}
                >
                  <button
                    type="button"
                    onClick={closeModal}
                    style={{
                      flex: 1,
                      fontFamily: "var(--font-sans), sans-serif",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#B0ADA8",
                      background: "transparent",
                      border: "1px solid rgba(232,229,224,0.15)",
                      borderRadius: "8px",
                      padding: "0.7rem 1rem",
                      cursor: "pointer",
                      transition: "border-color 0.2s ease, color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(232,229,224,0.35)";
                      (e.currentTarget as HTMLElement).style.color = "#E8E5E0";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(232,229,224,0.15)";
                      (e.currentTarget as HTMLElement).style.color = "#B0ADA8";
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    style={{
                      flex: 1,
                      fontFamily: "var(--font-sans), sans-serif",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#171717",
                      background: accentColor,
                      border: "none",
                      borderRadius: "8px",
                      padding: "0.7rem 1rem",
                      cursor: "pointer",
                      transition: "opacity 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.opacity = "0.88";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.opacity = "1";
                    }}
                  >
                    Unlock
                  </button>
                </div>
              </form>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

function LockIcon({ size = 12, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0 }}
    >
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
