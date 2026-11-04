import Image from "next/image";

const works = [
  { title: "Inversor solar", src: "/images/solar-inversor.webp" },
  { title: "Tablero y domótica", src: "/images/domotica-tablero-empotrado.webp" },
  { title: "Estructura solar", src: "/images/solar-estructura-techo.webp" },
  { title: "Cableado eléctrico", src: "/images/electricidad-cableado.webp" },
  { title: "Cortinas motorizadas", src: "/images/cortinas-motorizadas.webp" },
  { title: "Iluminación exterior", src: "/images/iluminacion-exterior.webp" },
];

export default function Works() {
  return (
    <section id="trabajos" aria-labelledby="works-title" className="section">
      <div className="container-wide">
        <p className="eyebrow">Trabajos</p>
        <h2 id="works-title" className="h-display mt-4 max-w-[760px] text-4xl md:text-[52px]">
          Instalaciones limpias, ordenadas y probadas
        </h2>
        <p className="mt-6 max-w-[680px] text-lg leading-relaxed text-[var(--color-muted)]">
          Equipo uniformado, con equipo de seguridad y herramienta profesional. Dejamos todo funcionando y te explicamos
          cómo usarlo.
        </p>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((w) => (
            <li key={w.src} className="card group overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={w.src}
                  alt={`${w.title} realizado por IntegralTech`}
                  fill
                  sizes="(min-width:1024px) 380px, (min-width:640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="p-5 font-semibold">{w.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
