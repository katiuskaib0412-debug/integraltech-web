export default function Stats() {
  return (
    <section aria-labelledby="stats-title" className="section pt-0">
      <div className="container-wide grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <div className="card p-10">
          <h2 id="stats-title" className="text-sm font-semibold uppercase tracking-[0.18em] text-[#4fa3ff]">
            Cifras
          </h2>
          <p className="h-display mt-6 text-[72px] leading-none">98%</p>
          <p className="mt-4 text-lg text-[var(--color-muted)]">
            de clientes recomiendan el servicio [EJEMPLO – reemplazar con cifra real]
          </p>
        </div>

        <a
          href="#blog"
          className="card focus-ring group flex flex-col justify-between bg-[linear-gradient(135deg,#0061fe_0%,#0d0d0d_85%)] p-10 transition-transform hover:-translate-y-1"
        >
          <div>
            <h3 className="h-display text-3xl">Historias de nuestros clientes</h3>
            <p className="mt-4 max-w-[480px] text-lg text-white/85">
              Conoce cómo resolvemos necesidades de tecnología y seguridad para
              negocios y hogares de Guayaquil.
            </p>
          </div>
          <span className="mt-10 font-semibold group-hover:underline">Leer más →</span>
        </a>
      </div>
    </section>
  );
}
