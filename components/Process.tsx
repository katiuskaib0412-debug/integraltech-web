const steps = [
  { n: "01", title: "Nos escribes", text: "Cuéntanos por WhatsApp qué necesitas y dónde. Te respondemos rápido." },
  { n: "02", title: "Inspección gratis", text: "Visitamos el lugar, medimos y definimos la solución adecuada, sin costo ni compromiso." },
  { n: "03", title: "Propuesta clara", text: "Recibes la cotización detallada con equipos, materiales, mano de obra y tiempos." },
  { n: "04", title: "Instalación impecable", text: "Instalamos, probamos contigo y te enseñamos a usar todo. Seguimos disponibles para soporte." },
];

export default function Process() {
  return (
    <section id="proceso" aria-labelledby="process-title" className="section bg-[#0c1424]">
      <div className="container-wide">
        <p className="eyebrow">Cómo trabajamos</p>
        <h2 id="process-title" className="h-display mt-4 max-w-[760px] text-4xl md:text-[52px]">
          De tu primer mensaje a la instalación funcionando
        </h2>

        <ol className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="card p-8">
              <span className="text-sm font-bold text-gradient">PASO {s.n}</span>
              <h3 className="mt-4 text-2xl font-semibold">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-[var(--color-muted)]">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
