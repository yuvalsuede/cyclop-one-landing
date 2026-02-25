"use client";

import { useEffect, useRef } from "react";

export default function Eye() {
  const eyeRef = useRef<HTMLDivElement>(null);
  const irisRef = useRef<HTMLDivElement>(null);
  const pupilRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        if (!eyeRef.current || !irisRef.current || !pupilRef.current) return;

        const rect = eyeRef.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;

        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;

        const maxOffset = 15;
        const scale = Math.min(dist / 300, 1);
        const x = (dx / dist) * maxOffset * scale;
        const y = (dy / dist) * maxOffset * scale;

        irisRef.current.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
        pupilRef.current.style.transform = `translate(calc(-50% + ${x * 0.3}px), calc(-50% + ${y * 0.3}px))`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={eyeRef}
      className="eye-container relative flex items-center justify-center"
      aria-hidden="true"
    >
      {/* Glow ring */}
      <div className="eye-glow-ring" />
      {/* Sclera */}
      <div className="eye-sclera">
        {/* Iris */}
        <div
          ref={irisRef}
          className="eye-iris"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          {/* Spinning overlay */}
          <div className="eye-iris-spin" />
          {/* Pupil */}
          <div
            ref={pupilRef}
            className="eye-pupil"
            style={{ transform: "translate(-50%, -50%)" }}
          />
        </div>
        {/* Specular highlight */}
        <div className="eye-specular" />
      </div>
    </div>
  );
}
