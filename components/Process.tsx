"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "./motion/Reveal";

const steps = [
  { n: "01", title: "Nos escribes", text: "Cuéntanos por WhatsApp qué necesitas y dónde. Te respondemos rápido." },
  { n: "02", title: "Inspección gratis", text: "Visitamos el lugar, medimos y definimos la solución adecuada, sin costo ni compromiso." },
  { n: "03", title: "Propuesta clara", text: "Recibes la cotización detallada con equipos, materiales, mano de obra y tiempos." },
  { n: "04", title: "Instalación impecable", text: "Instalamos, probamos contigo y te enseñamos a usar todo. Seguimos disponibles para soporte." },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  // La línea de tiempo se dibuja según el progreso del scroll
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="proceso" aria-labelledby="process-title" className="section">
      <div className="container-wide">
        <Reveal>
          <p className="eyebrow">Cómo trabajamos</p>
          <h2 id="process-title" className="h-display title-section mt-4 max-w-[780px]">
            De tu primer mensaje a la instalación funcionando
          </h2>
        </Reveal>

        <div ref={ref} className="relative mt-16 md:pl-0">
          {/* Línea base y línea animada */}
          <div aria-hidden="true" className="absolute left-[27px] top-0 h-full w-px bg-line md:left-1/2" />
          <motion.div
            aria-hidden="true"
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-[27px] top-0 h-full w-px bg-gradient-to-b from-[var(--g1)] via-[var(--g2)] to-[var(--g3)] md:left-1/2"
          />

          <ol className="space-y-12">
            {steps.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <li key={s.n} className="relative grid md:grid-cols-2 md:gap-12">
                  {/* Nodo */}
                  <span
                    aria-hidden="true"
                    className="absolute left-[14px] top-6 flex h-7 w-7 items-center justify-center rounded-full bg-canvas ring-2 ring-[var(--g2)] shadow-[0_0_16px_color-mix(in_oklab,var(--g2)_55%,transparent)] md:left-1/2 md:-translate-x-1/2"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-[var(--g2)]" />
                  </span>
                  <div className={`pl-16 md:pl-0 ${left ? "md:col-start-1 md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}`}>
                    <Reveal variant={left ? "left" : "up"}>
                      <div className="card p-8">
                        <span className="text-sm font-bold text-gradient">PASO {s.n}</span>
                        <h3 className="mt-3 text-2xl font-semibold">{s.title}</h3>
                        <p className="mt-3 leading-relaxed text-[var(--color-muted)]">{s.text}</p>
                      </div>
                    </Reveal>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
