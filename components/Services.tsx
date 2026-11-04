import Image from "next/image";
import { whatsappLink } from "@/lib/site";

type Service = {
  title: string;
  text: string;
  tags: string[];
  cta: string;
  image?: string;
};

const services: Service[] = [
  {
    title: "Cámaras de seguridad",
    text: "Sistemas CCTV con acceso desde el celular, grabación continua y alertas de movimiento.",
    tags: ["2–8 MP", "Visión nocturna", "NVR/DVR"],
    cta: "Cotizar cámaras",
    image: "/images/camaras-celular.webp",
  },
  {
    title: "Alarmas, cercos y accesos",
    text: "Alarmas con aviso al celular, cercos eléctricos, timbres con cámara y cerraduras inteligentes.",
    tags: ["Sensores", "Energizador", "Control de acceso"],
    cta: "Cotizar seguridad",
    image: "/images/alarmas-timbre-cerradura.webp",
  },
  {
    title: "Paneles solares",
    text: "Sistemas fotovoltaicos a medida de tu consumo para casas, negocios y áreas comunes.",
    tags: ["On-grid / híbrido", "kWp a medida", "Inversor"],
    cta: "Calcular mi ahorro",
    image: "/images/solar-techo-teja.webp",
  },
  {
    title: "Domótica",
    text: "Luces, cortinas, climatización y cerraduras controladas desde una app o por voz.",
    tags: ["Wi-Fi / Zigbee", "Escenas", "Voz"],
    cta: "Cotizar domótica",
    image: "/images/domotica-panel-pared.webp",
  },
  {
    title: "Instalaciones eléctricas",
    text: "Instalaciones nuevas, ampliaciones, tableros, puntos de luz, mantenimiento y corrección de fallas.",
    tags: ["110 / 220 V", "Tableros", "Puesta a tierra"],
    cta: "Cotizar electricidad",
    image: "/images/electricidad-tablero.webp",
  },
  {
    title: "Redes, cableado y servidores",
    text: "Cableado estructurado, racks, Wi-Fi empresarial, servidores y respaldo de información.",
    tags: ["Cat6 / fibra", "Racks", "Wi-Fi 6"],
    cta: "Cotizar redes",
    image: "/images/redes-rack.webp",
  },
  {
    title: "Computadoras e impresoras",
    text: "Reparación y mantenimiento de laptops, PCs e impresoras. Cambio a SSD, piezas y venta de equipos.",
    tags: ["Diagnóstico", "SSD / RAM", "Venta"],
    cta: "Cotizar reparación",
  },
  {
    title: "Mantenimiento y soporte",
    text: "Planes preventivos para cámaras, paneles, redes, alumbrado y equipos.",
    tags: ["Preventivo", "Soporte", "Alumbrado"],
    cta: "Ver planes",
    image: "/images/mantenimiento-alumbrado.webp",
  },
];

export default function Services() {
  return (
    <section id="servicios" aria-labelledby="services-title" className="section">
      <div className="container-wide">
        <p className="eyebrow">Servicios</p>
        <h2 id="services-title" className="h-display mt-4 max-w-[760px] text-4xl md:text-[52px]">
          Todo lo técnico, con un solo proveedor
        </h2>
        <p className="mt-6 max-w-[680px] text-lg leading-relaxed text-[var(--color-muted)]">
          Evitas coordinar con tres técnicos distintos: diseñamos la solución completa y respondemos por toda la instalación.
        </p>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((s) => (
            <li key={s.title} className="card flex flex-col overflow-hidden">
              {s.image ? (
                <div className="relative aspect-[4/3]">
                  <Image src={s.image} alt={s.title} fill sizes="(min-width:1280px) 290px, (min-width:640px) 50vw, 100vw" className="object-cover" />
                </div>
              ) : (
                <div aria-hidden="true" className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-[#0a84ff]/30 to-[#00c6ff]/10">
                  <span className="text-5xl font-bold text-white/70">PC</span>
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--color-muted)]">{s.text}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <li key={t} className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/75">{t}</li>
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
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
