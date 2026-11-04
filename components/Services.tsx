import Image from "next/image";
import { whatsappLink } from "@/lib/site";
import Reveal from "./motion/Reveal";
import Tilt from "./motion/Tilt";

type Service = {
  title: string;
  text: string;
  tags: string[];
  cta: string;
  image: string;
  alt: string;
};

const services: Service[] = [
  {
    title: "Cámaras de seguridad",
    text: "Sistemas CCTV con acceso desde el celular, grabación continua y alertas de movimiento.",
    tags: ["2–8 MP", "Visión nocturna", "NVR/DVR"],
    cta: "Cotizar cámaras",
    image: "/images/camaras-cctv.jpg",
    alt: "Cámara de seguridad instalada al aire libre entre vegetación",
  },
  {
    title: "Alarmas, cercos y accesos",
    text: "Alarmas con aviso al celular, cercos eléctricos, timbres con cámara y cerraduras inteligentes.",
    tags: ["Sensores", "Energizador", "Control de acceso"],
    cta: "Cotizar seguridad",
    image: "/images/camaras-poste.jpg",
    alt: "Cámara de seguridad montada en un poste contra el cielo",
  },
  {
    title: "Paneles solares",
    text: "Sistemas fotovoltaicos a medida de tu consumo para casas, negocios y áreas comunes.",
    tags: ["On-grid / híbrido", "kWp a medida", "Inversor"],
    cta: "Calcular mi ahorro",
    image: "/images/solar-instalador.jpg",
    alt: "Técnico instalando paneles solares sobre un tejado",
  },
  {
    title: "Domótica",
    text: "Luces, cortinas, climatización y cerraduras controladas desde una app o por voz.",
    tags: ["Wi-Fi / Zigbee", "Escenas", "Voz"],
    cta: "Cotizar domótica",
    image: "/images/domotica.jpg",
    alt: "Persona controlando una casa inteligente desde una tableta",
  },
  {
    title: "Instalaciones eléctricas",
    text: "Instalaciones nuevas, ampliaciones, tableros, puntos de luz, mantenimiento y corrección de fallas.",
    tags: ["110 / 220 V", "Tableros", "Puesta a tierra"],
    cta: "Cotizar electricidad",
    image: "/images/tablero-electrico.jpg",
    alt: "Electricista revisando un tablero eléctrico con multímetro",
  },
  {
    title: "Redes, cableado y servidores",
    text: "Cableado estructurado, racks, Wi-Fi empresarial, servidores y respaldo de información.",
    tags: ["Cat6 / fibra", "Racks", "Wi-Fi 6"],
    cta: "Cotizar redes",
    image: "/images/cableado-red.jpg",
    alt: "Bastidor de servidores con cableado de red organizado",
  },
  {
    title: "Computadoras e impresoras",
    text: "Reparación y mantenimiento de laptops, PCs e impresoras. Cambio a SSD, piezas y venta de equipos.",
    tags: ["Diagnóstico", "SSD / RAM", "Venta"],
    cta: "Cotizar reparación",
    image: "/images/tecnico-red.jpg",
    alt: "Técnico trabajando en equipos de red con herramientas",
  },
  {
    title: "Mantenimiento y soporte",
    text: "Planes preventivos para cámaras, paneles, redes, alumbrado y equipos.",
    tags: ["Preventivo", "Soporte", "Alumbrado"],
    cta: "Ver planes",
    image: "/images/tecnico-instalando.jpg",
    alt: "Técnico instalando cableado con casco de seguridad",
  },
];

export default function Services() {
  return (
    <section id="servicios" aria-labelledby="services-title" className="section">
      <div className="container-wide">
        <Reveal>
          <p className="eyebrow">Servicios</p>
          <h2 id="services-title" className="h-display mt-4 max-w-[780px] text-4xl md:text-[56px]">
            Todo lo técnico, con un solo proveedor
          </h2>
          <p className="mt-6 max-w-[680px] text-lg leading-relaxed text-[var(--color-muted)]">
            Evitas coordinar con tres técnicos distintos: diseñamos la solución completa y respondemos por toda la
            instalación.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.08} className="h-full">
              <Tilt className="h-full">
                <article className="card group flex h-full flex-col overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-t-[22px]">
                    <Image
                      src={s.image}
                      alt={s.alt}
                      fill
                      loading="lazy"
                      sizes="(min-width:1280px) 290px, (min-width:640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-semibold">{s.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-muted)]">{s.text}</p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {s.tags.map((t) => (
                        <li key={t} className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-xs text-white/75">
                          {t}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={whatsappLink(`Hola IntegralTech, quiero información sobre: ${s.title}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring mt-auto pt-6 font-semibold text-[#00c6ff] hover:underline"
                    >
                      {s.cta} →
                    </a>
                  </div>
                </article>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
