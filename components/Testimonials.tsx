// Testimonios de ejemplo: marcados como [EJEMPLO] hasta reemplazar con clientes reales.
const testimonials = [
  {
    name: "[EJEMPLO] Cliente hogar",
    role: "Usuario particular",
    quote:
      "Recuperaron los archivos de mi computadora que creía perdidos. Explicaron todo con paciencia.",
  },
  {
    name: "[EJEMPLO] Gerente pyme",
    role: "Empresa de servicios",
    quote:
      "Integraron nuestras computadoras, la red y el sistema de alarma. Ahora todo se supervisa desde un solo lugar.",
  },
  {
    name: "[EJEMPLO] Administrador",
    role: "Oficina comercial",
    quote:
      "Nos atendieron rápido cuando falló la impresora de red. Hoy tenemos mantenimiento preventivo.",
  },
];

export default function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="section">
      <div className="container-wide">
        <h2 id="testimonials-title" className="h-display text-4xl md:text-[52px]">
          Lo que dicen nuestros clientes
        </h2>

        <ul className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.name} className="card flex flex-col p-8">
              <p className="flex-1 text-lg leading-relaxed">“{t.quote}”</p>
              <div className="mt-8 border-t border-[var(--color-border)] pt-6">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-[var(--color-muted)]">{t.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
