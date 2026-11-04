import { whatsappLink } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative flex min-h-[915px] items-center overflow-hidden pt-[104px] md:min-h-[915px]"
    >
      {/* Fondo: placeholder de imagen de equipos/redes con overlay oscuro (reemplazar por foto propia) */}
      <div
        role="img"
        aria-label="Imagen de referencia: equipos y redes de tecnología (reemplazar por fotografía propia)"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_40%,#1d3a6e_0%,#0d0d0d_60%)]"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:48px_48px]"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/80 to-[#0d0d0d]/40" />

      <div className="container-wide grid items-center gap-12 lg:grid-cols-[1.25fr_1fr]">
        <div className="max-w-[760px]">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#4fa3ff]">
            Guayaquil, Ecuador
          </p>
          <h1 id="hero-title" className="h-display text-5xl md:text-[72px]">
            Tecnología integral para hogares y empresas
          </h1>
          <p className="mt-8 max-w-[600px] text-lg leading-relaxed text-[var(--color-muted)] md:text-[20px]">
            Equipos, soporte técnico, redes y seguridad electrónica con atención
            personalizada para que tu tecnología funcione siempre.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a href="#contacto" className="btn-primary focus-ring">
              Solicitar cotización
            </a>
            <a href="#servicios" className="btn-ghost focus-ring">
              Ver servicios
            </a>
            <a
              href={whatsappLink("Hola INTEGRALTECH, necesito asesoría.")}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-[18px] font-semibold text-white transition-colors hover:bg-white/10"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Tarjeta decorativa de servicios rápidos */}
        <aside aria-label="Resumen de servicios" className="card hidden p-8 backdrop-blur lg:block">
          <p className="text-sm text-[var(--color-muted)]">Atención inmediata</p>
          <p className="h-display mt-2 text-3xl">Soporte técnico y mantenimiento</p>
          <ul className="mt-6 space-y-3 text-[15px] text-white/85">
            <li>• Reparación de computadoras y periféricos</li>
            <li>• Redes y equipos de telecomunicaciones</li>
            <li>• Alarmas contra robo e incendio</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
