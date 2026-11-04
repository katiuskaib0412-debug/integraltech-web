const reasons = [
  {
    title: "Atención personalizada",
    text: "Revisamos cada caso con calma para recomendar lo que realmente necesitas, sin cargos innecesarios.",
  },
  {
    title: "Integración de equipos y software",
    text: "Hacemos que hardware, software y comunicaciones trabajen juntos en un mismo sistema.",
  },
  {
    title: "Supervisión remota de seguridad",
    text: "Monitoreamos tus sistemas de alarma de forma remota para reaccionar a tiempo.",
  },
];

export default function Reasons() {
  return (
    <section
      id="por-que-nosotros"
      aria-labelledby="reasons-title"
      className="section bg-[#121212]"
    >
      <div className="container-wide">
        <h2 id="reasons-title" className="h-display text-4xl md:text-[52px]">
          Por qué confiar en INTEGRALTECH
        </h2>
        <p className="mt-6 max-w-[720px] text-lg leading-relaxed text-[var(--color-muted)]">
          Soporte técnico, mantenimiento preventivo y soluciones de tecnología para
          hogares y empresas en Guayaquil, con un trato cercano.
        </p>

        <ul className="mt-16 grid gap-6 md:grid-cols-3">
          {reasons.map((r) => (
            <li key={r.title} className="card p-8">
              <div aria-hidden="true" className="mb-6 h-14 w-14 rounded-full bg-[#0061fe]/20 ring-1 ring-[#0061fe]/40" />
              <h3 className="text-2xl font-semibold">{r.title}</h3>
              <p className="mt-4 text-[var(--color-muted)]">{r.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
