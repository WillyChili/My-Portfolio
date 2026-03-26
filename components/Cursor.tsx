"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0, mouseY = 0;
    let curX = 0, curY = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const expand = () => cursor.classList.add("expanded");
    const collapse = () => cursor.classList.remove("expanded");

    // Smooth follow animation
    const animate = () => {
      curX += (mouseX - curX) * 0.12;
      curY += (mouseY - curY) * 0.12;
      cursor.style.left = `${curX}px`;
      cursor.style.top = `${curY}px`;
      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", move);
    document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
      el.addEventListener("mouseenter", expand);
      el.addEventListener("mouseleave", collapse);
    });

    animate();

    return () => {
      document.removeEventListener("mousemove", move);
    };
  }, []);

  // Only show on pointer devices
  return (
    <div
      ref={cursorRef}
      className="cursor hidden md:block"
      aria-hidden="true"
    />
  );
}
