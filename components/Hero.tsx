import Image from "next/image";
import { whatsappLink } from "@/lib/site";

const points = [
  "Trabajos pequeños y proyectos de gran escala, con el mismo cuidado",
  "Instalación impecable: cableado ordenado, limpieza y pruebas contigo",
  "Un solo proveedor para todo, con factura y soporte después de instalar",
];

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative flex min-h-[860px] items-center overflow-hidden pt-[80px]">
      <Image
        src="/images/hero-paneles-solares.webp"
        alt="Técnicos de IntegralTech instalando paneles solares en el techo de una casa"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[center_30%]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0a0f1a] via-[#0a0f1a]/85 to-[#0a0f1a]/35" />

      <div className="container-wide grid gap-12 py-20 lg:grid-cols-[1.2fr_1fr]">
        <div className="max-w-[720px]">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#00c6ff] px-3 py-1 text-xs font-bold tracking-wider text-[#0a0f1a]">GRATIS</span>
            <span className="text-sm text-white/80">Inspección técnica a domicilio y sin compromiso</span>
          </div>

          <h1 id="hero-title" className="h-display mt-6 text-5xl md:text-[64px]">
            Seguridad, energía y redes instaladas{" "}
            <em className="text-gradient font-bold">por un solo equipo</em>
          </h1>

          <p className="mt-6 max-w-[620px] text-lg leading-relaxed text-[var(--color-muted)]">
            Cámaras, alarmas, paneles solares, domótica, electricidad, cableado estructurado y soporte de computadoras.
            Para tu casa, tu negocio, tu urbanización o tu edificio en Guayaquil y Samborondón.
          </p>

          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex gap-3 text-[15px] text-white/85">
                <span aria-hidden="true" className="mt-1 text-[#00c6ff]">✓</span>
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contacto" className="btn-primary focus-ring">Agenda tu inspección gratis</a>
            <a href="#solar" className="btn-ghost focus-ring">Calcula tu ahorro solar</a>
          </div>
        </div>

        <aside aria-label="Contacto rápido" className="card hidden self-end p-8 backdrop-blur lg:block">
          <p className="eyebrow">Paneles solares</p>
          <p className="h-display mt-3 text-3xl">Hasta 25–30 años de energía propia</p>
          <div className="my-6 h-px bg-white/10" />
          <p className="eyebrow">Inspección técnica</p>
          <p className="mt-3 text-[var(--color-muted)]">Vamos, medimos y te cotizamos sin costo.</p>
          <a
            href={whatsappLink("Hola IntegralTech, quiero agendar una inspección gratis.")}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-6 inline-block font-semibold text-[#00c6ff] hover:underline"
          >
            Agenda por WhatsApp →
          </a>
        </aside>
      </div>
    </section>
  );
}
