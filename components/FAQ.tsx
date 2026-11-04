import { whatsappLink } from "@/lib/site";

// Solo se publica la respuesta que aparece en integraltech.com.ec.
// Las demás preguntas abren WhatsApp hasta que se redacten sus respuestas.
const groups = [
  {
    title: "Inspección y trabajos",
    items: [
      {
        q: "¿La inspección técnica tiene costo?",
        a: "No. La inspección es gratis y sin compromiso. Vamos al lugar, revisamos el espacio, medimos y te enviamos una propuesta clara con equipos, materiales, mano de obra y tiempos.",
      },
      { q: "¿Hacen trabajos pequeños o solo proyectos grandes?" },
      { q: "¿Cómo cuidan mi casa durante la instalación?" },
      { q: "¿Puedo ver mis cámaras desde el celular?" },
      { q: "¿Trabajan con urbanizaciones y administradores de edificios?" },
      { q: "¿Emiten factura?" },
    ],
  },
  {
    title: "Paneles solares",
    items: [
      { q: "¿Cuánto puedo ahorrar con paneles solares en Guayaquil?" },
      { q: "¿Cuánto cuesta un sistema solar y en cuánto tiempo se recupera?" },
      { q: "¿Qué pasa con la energía que produzco y no uso?" },
      { q: "¿Funcionan en días nublados?" },
      { q: "¿Conviene para empresas?" },
    ],
  },
];

export default function FAQ() {
  return (
    <section id="preguntas" aria-labelledby="faq-title" className="section">
      <div className="container-wide grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2 id="faq-title" className="h-display mt-4 text-4xl md:text-[52px]">Lo que más nos preguntan</h2>
          <p className="mt-6 text-[var(--color-muted)]">
            Datos de referencia: producción solar de Guayaquil según profileSOLAR; costos y retorno según Diario Expreso
            (2024, 2025); normativa según Resolución ARCONEL-005/24.
          </p>
        </div>

        <div className="space-y-10">
          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-[#00c6ff]">{g.title}</h3>
              <ul className="mt-4 divide-y divide-white/10 border-y border-white/10">
                {g.items.map((item) => (
                  <li key={item.q}>
                    {"a" in item ? (
                      <details className="group py-5">
                        <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                          {item.q}
                          <span aria-hidden="true" className="text-[#00c6ff] transition-transform group-open:rotate-45">+</span>
                        </summary>
                        <p className="mt-4 leading-relaxed text-[var(--color-muted)]">{item.a}</p>
                      </details>
                    ) : (
                      <div className="flex items-center justify-between gap-4 py-5">
                        <span className="font-semibold">{item.q}</span>
                        <a
                          href={whatsappLink(`Hola IntegralTech, tengo una pregunta: ${item.q}`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="focus-ring shrink-0 text-sm font-semibold text-[#00c6ff] hover:underline"
                        >
                          Preguntar →
                        </a>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
