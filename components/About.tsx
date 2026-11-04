export default function About() {
  return (
    <section id="nosotros" aria-labelledby="about-title" className="section">
      <div className="container-wide grid items-center gap-16 lg:grid-cols-2">
        <div
          role="img"
          aria-label="Imagen de referencia del equipo técnico (reemplazar por fotografía propia)"
          className="card aspect-[4/3] w-full bg-[radial-gradient(circle_at_30%_30%,#1d3a6e_0%,#121212_70%)] lg:aspect-auto lg:h-[589px]"
        />

        <div>
          <h2 id="about-title" className="h-display text-4xl md:text-[52px]">
            Nosotros
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[var(--color-muted)]">
            INTEGRALTECH S.A.S. es una empresa de tecnología e integración de soluciones
            TI con sede en Guayaquil. Vendemos computadoras, equipos periféricos y
            equipos de telecomunicaciones, y diseñamos sistemas que integran hardware,
            software y comunicaciones.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-[var(--color-muted)]">
            Mantenemos tu tecnología en funcionamiento con soluciones confiables para
            hogares, pymes y empresas, desde la reparación hasta la seguridad electrónica.
          </p>

          <h3 className="mt-12 text-2xl font-semibold">Clientes y socios</h3>
          <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4" aria-label="Logos de clientes">
            {[1, 2, 3, 4].map((n) => (
              <li
                key={n}
                className="flex h-16 items-center justify-center rounded-lg border border-[var(--color-border)] text-xs text-white/50"
              >
                [LOGO CLIENTE {n}]
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
