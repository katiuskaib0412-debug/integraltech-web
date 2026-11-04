import Logo from "./Logo";
import { SITE } from "@/lib/site";

const nav = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#blog", label: "Blog" },
  { href: "#contacto", label: "Contacto" },
];

const legal = [
  { href: "#privacidad", label: "Política de privacidad" },
  { href: "#terminos", label: "Términos y condiciones" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[#0d0d0d] pt-20 pb-10">
      <div className="container-wide grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-6 max-w-[360px] leading-relaxed text-[var(--color-muted)]">
            Tecnología, telecomunicaciones y seguridad electrónica para hogares y
            empresas en {SITE.city.split(",")[0]}.
          </p>
          <p className="mt-4 text-sm text-[var(--color-muted)]">{SITE.legalName}</p>
        </div>

        <nav aria-label="Enlaces del sitio">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em]">Navegación</h2>
          <ul className="mt-5 space-y-3">
            {nav.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="focus-ring text-[var(--color-muted)] hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em]">Contacto</h2>
          <ul className="mt-5 space-y-3 text-[var(--color-muted)]">
            <li>{SITE.address}</li>
            <li>{SITE.city}</li>
            <li>
              <a className="focus-ring hover:text-white" href={`tel:+${SITE.whatsappNumber}`}>
                {SITE.whatsappDisplay}
              </a>
            </li>
            <li>{SITE.email}</li>
            <li>{SITE.social}</li>
          </ul>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {legal.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="focus-ring text-[var(--color-muted)] hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-wide mt-16 border-t border-[var(--color-border)] pt-8 text-sm text-[var(--color-muted)]">
        © {new Date().getFullYear()} {SITE.legalName}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
