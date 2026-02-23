"use client";

import { useEffect, useRef, useState } from "react";

export default function Eye() {
  const eyeRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!eyeRef.current) return;
      const rect = eyeRef.current.getBoundingClientRect();
      const eyeCenterX = rect.left + rect.width / 2;
      const eyeCenterY = rect.top + rect.height / 2;

      const dx = e.clientX - eyeCenterX;
      const dy = e.clientY - eyeCenterY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      const maxOffset = 15;
      const scale = Math.min(distance / 300, 1);
      const x = (dx / (distance || 1)) * maxOffset * scale;
      const y = (dy / (distance || 1)) * maxOffset * scale;

      setOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
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
          className="eye-iris"
          style={{ transform: `translate(calc(-50% + ${offset.x}px), calc(-50% + ${offset.y}px))` }}
        >
          {/* Spinning overlay */}
          <div className="eye-iris-spin" />
          {/* Pupil */}
          <div
            className="eye-pupil"
            style={{ transform: `translate(calc(-50% + ${offset.x * 0.3}px), calc(-50% + ${offset.y * 0.3}px))` }}
          />
        </div>
        {/* Specular highlight */}
        <div className="eye-specular" />
      </div>
    </div>
  );
}
