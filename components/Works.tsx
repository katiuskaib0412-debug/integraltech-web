"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Reveal from "./motion/Reveal";
import Tilt from "./motion/Tilt";

const works = [
  { title: "Instalación solar", src: "/images/solar-techo.jpg", alt: "Filas de paneles solares sobre un techo" },
  { title: "Cámaras CCTV", src: "/images/camaras-cctv.jpg", alt: "Cámara CCTV instalada en exteriores" },
  { title: "Domótica", src: "/images/domotica.jpg", alt: "Control de una casa inteligente desde una tableta" },
  { title: "Cableado estructurado", src: "/images/cableado-cables.jpg", alt: "Cableado de red organizado en bandejas" },
  { title: "Tablero eléctrico", src: "/images/tablero-electrico.jpg", alt: "Revisión de un tablero eléctrico" },
  { title: "Redes y servidores", src: "/images/cableado-red.jpg", alt: "Rack de servidores con cableado" },
];

export default function Works() {
  const [active, setActive] = useState<number | null>(null);

  // Teclado: Esc cierra, flechas navegan
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => (i === null ? 0 : (i + 1) % works.length));
      if (e.key === "ArrowLeft") setActive((i) => (i === null ? 0 : (i - 1 + works.length) % works.length));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  const current = active !== null ? works[active] : null;

  return (
    <section id="trabajos" aria-labelledby="works-title" className="section">
      <div className="container-wide">
        <Reveal>
          <p className="eyebrow">Trabajos</p>
          <h2 id="works-title" className="h-display mt-4 max-w-[780px] text-4xl md:text-[56px]">
            Instalaciones limpias, ordenadas y probadas
          </h2>
          <p className="mt-6 max-w-[680px] text-lg leading-relaxed text-[var(--color-muted)]">
            Equipo uniformado, con equipo de seguridad y herramienta profesional. Dejamos todo funcionando y te explicamos
            cómo usarlo.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((w, i) => (
            <li key={w.src}>
              <Reveal delay={(i % 3) * 0.08} className="h-full">
                <Tilt className="h-full">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Ver ampliada: ${w.title}`}
                    className="card focus-ring group block w-full overflow-hidden text-left"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-t-[22px]">
                      <Image
                        src={w.src}
                        alt={w.alt}
                        fill
                        loading="lazy"
                        sizes="(min-width:1024px) 380px, (min-width:640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                    </div>
                    <p className="p-5 font-semibold">{w.title}</p>
                  </button>
                </Tilt>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <div className="card relative w-full max-w-4xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-[16/10]">
              <Image src={current.src} alt={current.alt} fill sizes="(min-width:1024px) 900px, 100vw" className="object-cover" />
            </div>
            <div className="flex items-center justify-between gap-4 p-5">
              <p className="font-semibold">{current.title}</p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setActive((i) => ((i ?? 0) - 1 + works.length) % works.length)}
                  aria-label="Anterior"
                  className="focus-ring rounded-xl border border-white/15 px-4 py-2 hover:bg-white/10"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => setActive((i) => ((i ?? 0) + 1) % works.length)}
                  aria-label="Siguiente"
                  className="focus-ring rounded-xl border border-white/15 px-4 py-2 hover:bg-white/10"
                >
                  →
                </button>
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="btn-primary focus-ring px-4 py-2"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
