import { whatsappLink } from "@/lib/site";

const services = [
  {
    title: "Venta de equipos y periféricos",
    text: "Computadoras, impresoras, escáneres, pantallas y proyectores para hogar y empresa.",
  },
  {
    title: "Telecomunicaciones",
    text: "Celulares, partes y piezas, además de módems y equipos de comunicación.",
  },
  {
    title: "Diseño de sistemas TI",
    text: "Planificamos sistemas que integran hardware, software y tecnología de comunicaciones.",
  },
  {
    title: "Seguridad electrónica",
    text: "Instalación, mantenimiento y supervisión remota de alarmas contra robo e incendio.",
  },
  {
    title: "Reparación y mantenimiento",
    text: "Servicio para computadoras, servidores, almacenamiento y periféricos, con soporte preventivo.",
  },
];

export default function Services() {
  return (
    <section id="servicios" aria-labelledby="services-title" className="section">
      <div className="container-wide">
        <div className="max-w-[760px]">
          <h2 id="services-title" className="h-display text-4xl md:text-[52px]">
            Servicios integrales de tecnología y seguridad
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[var(--color-muted)]">
            Un solo equipo para equipos, instalación, reparación y seguridad. Te
            asesoramos según las necesidades de tu hogar o negocio.
          </p>
        </div>

        <ul className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <li key={s.title} className="card flex flex-col p-8">
              <div
                aria-hidden="true"
                className="mb-8 flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-[#0061fe]/15 text-lg font-bold text-[#4fa3ff]"
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-2xl font-semibold">{s.title}</h3>
              <p className="mt-4 flex-1 text-[var(--color-muted)]">{s.text}</p>
              <a
                href={whatsappLink(`Hola, me interesa el servicio: ${s.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring mt-8 inline-flex items-center gap-2 font-semibold text-[#4fa3ff] hover:underline"
              >
                Consultar por WhatsApp <span aria-hidden="true">→</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
