"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { whatsappLink } from "@/lib/site";

const points = [
  "Trabajos pequeños y proyectos de gran escala, con el mismo cuidado",
  "Instalación impecable: cableado ordenado, limpieza y pruebas contigo",
  "Un solo proveedor para todo, con factura y soporte después de instalar",
];

function CameraIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M3 8a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Z" />
      <path d="m16 10 5-3v10l-5-3" />
    </svg>
  );
}
function SolarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <circle cx="17" cy="6" r="2.5" />
      <path d="M17 1.5v1M21.5 6h-1M19.3 3.7l-.7.7M14.7 3.7l.7.7" />
      <path d="M3 14 6 9h14l-3 5H3Z" />
      <path d="M9 9l-2 5M14 9l-1.5 5" />
    </svg>
  );
}
function WifiIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M2.5 9a14 14 0 0 1 19 0M5.5 12.5a9.5 9.5 0 0 1 13 0M8.5 16a5 5 0 0 1 7 0" />
      <circle cx="12" cy="19.5" r="1" />
    </svg>
  );
}
function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="4.5" y="10.5" width="15" height="10" rx="2" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

const floaters = [
  { Icon: CameraIcon, label: "Cámaras", pos: "top-[12%] right-[6%]", delay: 0 },
  { Icon: SolarIcon, label: "Solar", pos: "top-[48%] right-[2%]", delay: 1.2 },
  { Icon: WifiIcon, label: "Redes", pos: "bottom-[16%] right-[14%]", delay: 2.4 },
  { Icon: LockIcon, label: "Acceso", pos: "top-[30%] right-[28%]", delay: 0.6 },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  // Parallax: la foto se mueve más lento que el scroll
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section
      id="inicio"
      ref={ref}
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-[120px]"
    >
      <motion.div style={{ y: imgY }} className="absolute inset-0 -z-10 h-[125%]">
        <Image
          src="/images/solar-techo.jpg"
          alt="Paneles solares instalados en un techo de Guayaquil"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#05070d] via-[#05070d]/85 to-[#05070d]/30" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#05070d] to-transparent" />

      {/* Iconos flotantes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
        {floaters.map(({ Icon, label, pos, delay }) => (
          <motion.div
            key={label}
            className={`glass-nav absolute ${pos} flex items-center gap-2 rounded-2xl px-4 py-3 text-[#00c6ff]`}
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
          >
            <Icon />
            <span className="text-xs font-semibold tracking-wide text-white/85">{label}</span>
          </motion.div>
        ))}
      </div>

      <div className="container-wide grid items-center gap-12 py-20">
        <motion.div style={{ y: textY }} className="max-w-[760px]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center gap-3"
          >
            <span className="rounded-full bg-gradient-to-r from-[#00c6ff] to-[#8b5cf6] px-3 py-1 text-xs font-bold tracking-wider text-[#05070d]">
              GRATIS
            </span>
            <span className="text-sm text-white/80">Inspección técnica a domicilio y sin compromiso</span>
          </motion.div>

          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="h-display mt-6 text-5xl md:text-[68px]"
          >
            Seguridad, energía y redes instaladas{" "}
            <em className="text-gradient-animated font-bold">por un solo equipo</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-[620px] text-lg leading-relaxed text-[var(--color-muted)]"
          >
            Cámaras, alarmas, paneles solares, domótica, electricidad, cableado estructurado y soporte de computadoras.
            Para tu casa, tu negocio, tu urbanización o tu edificio en Guayaquil y Samborondón.
          </motion.p>

          <ul className="mt-8 space-y-3">
            {points.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="flex gap-3 text-[15px] text-white/85"
              >
                <span aria-hidden="true" className="mt-0.5 text-[#00c6ff]">✓</span>
                {p}
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#contacto" className="btn-primary focus-ring">Agenda tu inspección gratis</a>
            <a href="#solar" className="btn-ghost focus-ring">Calcula tu ahorro solar</a>
            <a
              href={whatsappLink("Hola IntegralTech, necesito asesoría.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost focus-ring"
            >
              WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
