"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import Reveal from "./motion/Reveal";

// Cifras de ejemplo: no son datos reales. Reemplazar con las cifras verdaderas de IntegralTech.
const stats = [
  { to: 150, suffix: "+", label: "Proyectos instalados" },
  { to: 90, suffix: "+", label: "Clientes atendidos" },
  { to: 2, suffix: " años", label: "De garantía en instalación" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVal(to);
      return;
    }
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref} className="h-display text-5xl tabular-nums md:text-6xl">
      {val}
      <span className="text-gradient">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section aria-label="Cifras de IntegralTech" className="relative pb-10">
      <div className="container-wide">
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} variant="zoom" delay={i * 0.1}>
              <div className="card flex h-full flex-col items-start gap-3 p-8">
                <Counter to={s.to} suffix={s.suffix} />
                <p className="text-[var(--color-muted)]">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-soft">[EJEMPLO – reemplazar con cifras reales]</p>
      </div>
    </section>
  );
}
