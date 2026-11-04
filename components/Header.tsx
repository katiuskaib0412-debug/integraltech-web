import Logo from "./Logo";
import { whatsappLink } from "@/lib/site";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#blog", label: "Blog" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Navegación principal"
        className="container-wide flex h-[104px] items-center justify-between gap-6"
      >
        <Logo />

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="focus-ring text-[15px] font-medium text-white/90 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={whatsappLink("Hola INTEGRALTECH, quiero solicitar una cotización.")}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary focus-ring hidden text-[15px] md:inline-block"
        >
          Solicitar cotización
        </a>

        {/* Menú móvil sin JavaScript */}
        <details className="group relative md:hidden">
          <summary
            aria-label="Abrir menú"
            className="focus-ring flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-lg bg-white/10 backdrop-blur"
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
            </ul>
          </div>
        </details>
      </nav>
    </header>
  );
}
