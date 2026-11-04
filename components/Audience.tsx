import { whatsappLink } from "@/lib/site";

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
  return (
    <section aria-labelledby="audience-title" className="section">
      <div className="container-wide">
        <p className="eyebrow">Para quién trabajamos</p>
        <h2 id="audience-title" className="h-display mt-4 max-w-[760px] text-4xl md:text-[52px]">
          Necesidades grandes y pequeñas, resueltas con el mismo estándar
        </h2>
        <p className="mt-6 max-w-[680px] text-lg leading-relaxed text-[var(--color-muted)]">
          El mismo equipo técnico diseña, instala y da mantenimiento. Escalamos el proyecto al tamaño que necesites.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {[home, business].map((g) => (
            <article key={g.title} className="card flex flex-col p-8 md:p-10">
              <h3 className="text-2xl font-semibold">{g.title}</h3>
              <p className="mt-2 text-[var(--color-muted)]">{g.subtitle}</p>
              <ul className="mt-6 space-y-3">
                {g.items.map((i) => (
                  <li key={i} className="flex gap-3 text-[15px] text-white/85">
                    <span aria-hidden="true" className="mt-1 text-[#00c6ff]">✓</span>
                    {i}
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
          ))}
        </div>

        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {scale.map((s) => (
            <li key={s.title} className="card p-6">
              <p className="font-semibold">{s.title}</p>
              <p className="mt-1 text-sm text-[var(--color-muted)]">{s.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
