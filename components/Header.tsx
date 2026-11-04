import Logo from "./Logo";
import { whatsappLink } from "@/lib/site";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#solar", label: "Ahorro solar" },
  { href: "#trabajos", label: "Trabajos" },
  { href: "#proceso", label: "Cómo trabajamos" },
  { href: "#preguntas", label: "Preguntas" },
];

export default function Header() {
  return (
    <header
      id="inicio"
      className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0a0f1a]/75 backdrop-blur-md"
    >
      <nav aria-label="Navegación principal" className="container-wide flex h-[80px] items-center justify-between gap-6">
        <Logo />

        <ul className="hidden items-center gap-8 xl:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="focus-ring text-[15px] font-medium text-white/85 transition-colors hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contacto" className="btn-primary focus-ring hidden px-5 py-3 text-[15px] md:inline-block">
          Inspección gratis
        </a>

        {/* Menú móvil sin JavaScript */}
        <details className="group relative xl:hidden">
          <summary
            aria-label="Abrir menú"
            className="focus-ring flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-lg bg-white/10"
          >
            <span className="block h-0.5 w-5 bg-white shadow-[0_-6px_0_#fff,0_6px_0_#fff]" />
          </summary>
          <div className="card absolute right-0 top-14 w-64 p-4">
            <ul className="flex flex-col gap-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="focus-ring block py-1 text-white/90">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={whatsappLink("Hola, quiero agendar una inspección gratis.")} className="btn-primary focus-ring mt-2 block text-center">
                  Inspección gratis
                </a>
              </li>
            </ul>
          </div>
        </details>
      </nav>
    </header>
  );
}
