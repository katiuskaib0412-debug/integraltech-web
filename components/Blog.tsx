const posts = [
  {
    title: "Señales de que tu computadora necesita reparación",
    date: "[FECHA]",
    slug: "senales-computadora-reparacion",
  },
  {
    title: "Cómo proteger tu negocio de amenazas digitales",
    date: "[FECHA]",
    slug: "proteger-negocio-amenazas",
  },
  {
    title: "Qué considerar al instalar una alarma contra robo e incendio",
    date: "[FECHA]",
    slug: "alarma-robo-incendio",
  },
];

export default function Blog() {
  return (
    <section
      id="blog"
      aria-labelledby="blog-title"
      className="section bg-[#0d0d0d]"
    >
      <div className="container-wide">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 id="blog-title" className="h-display max-w-[720px] text-4xl md:text-[52px]">
            Blog de tecnología: consejos y novedades
          </h2>
          <a href="#blog" className="btn-primary focus-ring">
            Ver todas las publicaciones
          </a>
        </div>

        <ul className="mt-16 grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <li key={p.slug}>
              <article className="card h-full overflow-hidden">
                <div
                  role="img"
                  aria-label={`Imagen de la publicación: ${p.title} (placeholder)`}
                  className="h-[285px] bg-[radial-gradient(circle_at_50%_30%,#1d3a6e_0%,#1a1a1a_75%)]"
                />
                <div className="p-8">
                  <time className="text-sm text-[var(--color-muted)]">{p.date}</time>
                  <h3 className="mt-3 text-xl font-semibold leading-snug">{p.title}</h3>
                  <a
                    href={`#blog-${p.slug}`}
                    className="focus-ring mt-6 inline-block font-semibold text-[#4fa3ff] hover:underline"
                  >
                    Leer más →
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
