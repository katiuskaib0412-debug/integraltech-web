"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { whatsappLink } from "@/lib/site";
import Reveal from "./motion/Reveal";
import Tilt from "./motion/Tilt";

const home = {
  title: "Hogares",
  subtitle: "Tu casa segura, eficiente y conectada",
  items: [
    "Cámaras que ves desde el celular, alarma y cerco eléctrico",
    "Paneles solares para bajar la planilla de luz",
    "Luces, cortinas y accesos controlados desde una app",
    "Wi-Fi en toda la casa y arreglo de laptops e impresoras",
  ],
};

const business = {
  title: "Empresas, urbanizaciones y edificios",
  subtitle: "Infraestructura tecnológica para operar sin interrupciones",
  items: [
    "CCTV con grabación centralizada y monitoreo de accesos",
    "Cableado estructurado, racks, servidores y redes",
    "Instalaciones eléctricas y sistemas solares para áreas comunes",
    "Planes de mantenimiento preventivo y soporte técnico",
  ],
};

const scale = [
  { title: "Hogares", text: "Casas y departamentos" },
  { title: "Negocios", text: "Locales, oficinas y consultorios" },
  { title: "Urbanizaciones", text: "Garitas, perímetros, alumbrado y áreas comunes" },
  { title: "Edificios", text: "Redes, CCTV y energía por piso" },
];

export default function Audience() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={ref} id="para-quien" aria-labelledby="audience-title" className="section overflow-hidden">
      {/* Fondo con parallax: ciudad de noche */}
      <motion.div style={{ y: bgY }} className="absolute inset-x-0 -top-[10%] -z-10 h-[120%]">
        <Image
          src="/images/ciudad-noche.jpg"
          alt="Horizonte de Guayaquil de noche"
          fill
          sizes="100vw"
          loading="lazy"
          className="object-cover opacity-30"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#05070d] via-transparent to-[#05070d]" />

      <div className="container-wide">
        <Reveal>
          <p className="eyebrow">Para quién trabajamos</p>
          <h2 id="audience-title" className="h-display mt-4 max-w-[780px] text-4xl md:text-[56px]">
            Necesidades grandes y pequeñas, resueltas con el mismo estándar
          </h2>
          <p className="mt-6 max-w-[680px] text-lg leading-relaxed text-[var(--color-muted)]">
            El mismo equipo técnico diseña, instala y da mantenimiento. Escalamos el proyecto al tamaño que necesites.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {[home, business].map((g, i) => (
            <Reveal key={g.title} delay={i * 0.12} className="h-full">
              <Tilt className="h-full">
                <article className="card flex h-full flex-col p-8 md:p-10">
                  <h3 className="text-2xl font-semibold">{g.title}</h3>
                  <p className="mt-2 text-[var(--color-muted)]">{g.subtitle}</p>
                  <ul className="mt-6 space-y-3">
                    {g.items.map((item) => (
                      <li key={item} className="flex gap-3 text-[15px] text-white/85">
                        <span aria-hidden="true" className="mt-1 text-[#00c6ff]">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsappLink(`Hola IntegralTech, quiero una inspección para ${g.title.toLowerCase()}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring mt-auto inline-block self-start pt-8 font-semibold text-[#00c6ff] hover:underline"
                  >
                    {g.title === "Hogares" ? "Inspección gratis para mi casa →" : "Solicitar propuesta →"}
                  </a>
                </article>
              </Tilt>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {scale.map((s, i) => (
            <Reveal key={s.title} variant="zoom" delay={i * 0.08} className="h-full">
              <div className="card h-full p-6">
                <p className="font-semibold">{s.title}</p>
                <p className="mt-1 text-sm text-[var(--color-muted)]">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
