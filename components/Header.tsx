import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#solar", label: "Ahorro solar" },
  { href: "#trabajos", label: "Trabajos" },
  { href: "#proceso", label: "Cómo trabajamos" },
  { href: "#preguntas", label: "Preguntas" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-4">
      <nav
        aria-label="Navegación principal"
        className="glass-nav mx-auto flex h-[var(--nav-h)] max-w-[1200px] items-center justify-between gap-4 rounded-2xl px-4 md:px-6"
      >
        <Logo />

        <ul className="hidden items-center gap-6 xl:flex">
          {links.slice(0, 5).map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="focus-ring tap relative text-[15px] font-medium text-fg/80 transition-colors hover:text-fg after:absolute after:bottom-2 after:left-0 after:h-px after:w-0 after:bg-gradient-to-r after:from-[var(--g1)] after:to-[var(--g2)] after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <a href="#contacto" className="btn-primary focus-ring hidden px-5 text-[15px] md:inline-flex">
            Inspección gratis
          </a>
          <MobileMenu links={links} />
        </div>
      </nav>
    </header>
  );
}
