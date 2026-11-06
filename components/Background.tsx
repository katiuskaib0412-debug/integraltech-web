"use client";

import { useEffect, useRef } from "react";

/**
 * Fondo animado: red de nodos conectados (capa fija, detrás del contenido).
 * - Se pausa cuando la pestaña no está visible.
 * - Con prefers-reduced-motion dibuja un único fotograma estático.
 */
export default function Background() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;
    const COUNT = isMobile ? 26 : 56;
    const LINK = isMobile ? 120 : 160;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let raf = 0;

    type Node = { x: number; y: number; vx: number; vy: number };
    let nodes: Node[] = [];

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      nodes = Array.from({ length: COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }));
    };

    const draw = () => {
      // Colores según el tema activo: cian brillante en oscuro, azul suave en claro
      const dark = document.documentElement.classList.contains("dark");
      const rgb = dark ? "0, 198, 255" : "10, 111, 214";
      const lineAlpha = dark ? 0.16 : 0.1;
      const dotAlpha = dark ? 0.6 : 0.35;
      ctx.clearRect(0, 0, w, h);
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK) {
            ctx.strokeStyle = `rgba(${rgb}, ${lineAlpha * (1 - d / LINK)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        ctx.fillStyle = `rgba(${rgb}, ${dotAlpha})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = () => {
      draw();
      raf = requestAnimationFrame(loop);
    };

    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden && !reduce) raf = requestAnimationFrame(loop);
    };

    resize();
    if (reduce) {
      draw();
    } else {
      raf = requestAnimationFrame(loop);
    }
    // Con movimiento reducido, redibuja el fotograma estático al cambiar de tema
    const onTheme = () => {
      if (reduce) draw();
    };
    window.addEventListener("resize", resize);
    window.addEventListener("themechange", onTheme);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("themechange", onTheme);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(10,132,255,0.18),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.12),transparent_50%)] opacity-50 dark:opacity-100" />
      <div className="circuit-grid absolute inset-0 opacity-70" />
      <canvas ref={ref} className="absolute inset-0 opacity-80" />
    </div>
  );
}
