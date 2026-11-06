"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { whatsappLink } from "@/lib/site";
import Reveal from "./motion/Reveal";

type Service = { title: string; text: string; image: string; alt: string; cta: string };

const services: Service[] = [
  {
    title: "Cámaras de seguridad",
    text: "Sistemas CCTV con acceso desde el celular, grabación continua y alertas de movimiento.",
    image: "/images/camaras-cctv.jpg",
    alt: "Cámara de seguridad instalada al aire libre",
    cta: "Cotizar cámaras",
  },
  {
    title: "Alarmas, cercos y accesos",
    text: "Alarmas con aviso al celular, cercos eléctricos, timbres con cámara y cerraduras inteligentes.",
    image: "/images/camaras-poste.jpg",
    alt: "Equipo de vigilancia montado en un poste exterior",
    cta: "Cotizar seguridad",
  },
  {
    title: "Paneles solares",
    text: "Sistemas fotovoltaicos a medida de tu consumo para casas, negocios y áreas comunes.",
    image: "/images/solar-instalador.jpg",
    alt: "Técnico instalando paneles solares sobre un tejado",
    cta: "Calcular mi ahorro",
  },
  {
    title: "Domótica",
    text: "Luces, cortinas, climatización y cerraduras controladas desde una app o por voz.",
    image: "/images/domotica.jpg",
    alt: "Persona controlando una casa inteligente desde una tableta",
    cta: "Cotizar domótica",
  },
  {
    title: "Electricidad",
    text: "Instalaciones nuevas, ampliaciones, tableros, puntos de luz, mantenimiento y corrección de fallas.",
    image: "/images/tablero-electrico.jpg",
    alt: "Electricista revisando un tablero eléctrico con multímetro",
    cta: "Cotizar electricidad",
  },
  {
    title: "Cableado estructurado",
    text: "Cableado estructurado, racks, Wi-Fi empresarial, servidores y respaldo de información.",
    image: "/images/cableado-red.jpg",
    alt: "Rack de servidores con cableado de red organizado",
    cta: "Cotizar redes",
  },
  {
    title: "Soporte de computadoras",
    text: "Reparación y mantenimiento de laptops, PCs e impresoras. Cambio a SSD, piezas y venta de equipos.",
    image: "/images/tecnico-red.jpg",
    alt: "Técnico trabajando en equipos con herramientas",
    cta: "Cotizar reparación",
  },
];

const pad = (n: number) => String(n).padStart(2, "0");

function CardBody({ s, i }: { s: Service; i: number }) {
  return (
    <div className="grid gap-5 p-5 sm:p-7 md:h-full md:grid-cols-[1fr_1.15fr] md:gap-8 md:p-9">
      <div className="flex flex-col">
        <span className="inline-flex w-fit items-center rounded-full border border-line bg-fg/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-soft">
          Servicio
        </span>
        <span aria-hidden="true" className="h-display text-gradient mt-3 text-[clamp(3.25rem,11vw,6.5rem)] leading-none">
          {pad(i + 1)}
        </span>
        <h3 className="h-display mt-3 text-[clamp(1.5rem,3.6vw,2.25rem)]">{s.title}</h3>
        <p className="mt-3 max-w-[440px] text-base leading-relaxed text-soft">{s.text}</p>
        <a
          href={whatsappLink(`Hola IntegralTech, quiero información sobre: ${s.title}.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring tap mt-auto w-fit pt-4 font-semibold text-link hover:underline"
        >
          {s.cta} →
        </a>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl md:aspect-auto md:h-full">
        <Image
          src={s.image}
          alt={s.alt}
          fill
          loading="lazy"
          sizes="(min-width: 1024px) 560px, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}

/** Tarjeta apilada: escala y desenfoque leve cuando queda atrás. */
function FolderCard({
  s,
  i,
  total,
  progress,
  withBlur,
}: {
  s: Service;
  i: number;
  total: number;
  progress: MotionValue<number>;
  withBlur: boolean;
}) {
  const behind = total - 1 - i;
  const scale = useTransform(progress, [i / total, 1], [1, 1 - behind * 0.035]);
  const blurPx = useTransform(progress, [(i + 1) / total, 1], [0, Math.min(behind * 0.6, 3)]);
  const filter = useTransform(blurPx, (v) => `blur(${v.toFixed(2)}px)`);

  return (
    <li
      className="sticky pb-[6vh] md:pb-[10vh]"
      style={{ top: `calc(var(--stack-top) + ${i} * var(--stack-step))` }}
    >
      <motion.article
        style={{ scale, filter: withBlur ? filter : undefined, transformOrigin: "top center" }}
        className="card-folder overflow-hidden md:h-[460px]"
      >
        <CardBody s={s} i={i} />
      </motion.article>
    </li>
  );
}

export default function Services() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start start", "end end"] });
  // Se leen tras montar para que el HTML del servidor y del cliente coincidan
  const [reduce, setReduce] = useState(false);
  // El desenfoque solo en pantallas medianas o grandes (más liviano en móvil)
  const [withBlur, setWithBlur] = useState(false);

  useEffect(() => {
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => {
      setReduce(rm.matches);
      setWithBlur(mq.matches);
    };
    update();
    rm.addEventListener("change", update);
    mq.addEventListener("change", update);
    return () => {
      rm.removeEventListener("change", update);
      mq.removeEventListener("change", update);
    };
  }, []);

  return (
    <section id="servicios" aria-labelledby="services-title" className="section">
      <div className="container-wide">
        <Reveal>
          <p className="eyebrow">Servicios</p>
          <h2 id="services-title" className="h-display title-section mt-4 max-w-[780px]">
            Todo lo técnico, con un solo proveedor
          </h2>
          <p className="mt-5 max-w-[680px] text-base leading-relaxed text-soft md:text-lg">
            Evitas coordinar con tres técnicos distintos: diseñamos la solución completa y respondemos por toda la
            instalación.
          </p>
        </Reveal>

        {reduce ? (
          // Movimiento reducido: lista normal, sin apilado
          <ol className="mt-12 space-y-6">
            {services.map((s, i) => (
              <li key={s.title}>
                <article className="card-folder overflow-hidden md:h-[460px]">
                  <CardBody s={s} i={i} />
                </article>
              </li>
            ))}
          </ol>
        ) : (
          <ol
            ref={listRef}
            className="relative mt-12 [--stack-step:10px] [--stack-top:calc(var(--nav-h)+28px)] md:[--stack-step:20px] md:[--stack-top:calc(var(--nav-h)+40px)]"
          >
            {services.map((s, i) => (
              <FolderCard
                key={s.title}
                s={s}
                i={i}
                total={services.length}
                progress={scrollYProgress}
                withBlur={withBlur}
              />
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}
