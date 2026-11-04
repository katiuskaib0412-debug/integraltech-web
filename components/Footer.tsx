import Logo from "./Logo";
import { SITE, whatsappLink } from "@/lib/site";

const nav = [
  { href: "#servicios", label: "Servicios" },
  { href: "#solar", label: "Ahorro solar" },
  { href: "#trabajos", label: "Trabajos" },
  { href: "#proceso", label: "Cómo trabajamos" },
  { href: "#preguntas", label: "Preguntas" },
  { href: "#contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070b14] pt-20 pb-10">
      <div className="container-wide grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-6 max-w-[360px] leading-relaxed text-[var(--color-muted)]">
            Seguridad, energía y redes instaladas por un solo equipo, en {SITE.cities.slice(0, 2).join(" y ")}.
          </p>
          <p className="mt-4 text-sm text-[var(--color-muted)]">{SITE.legalName}</p>
        </div>

        <nav aria-label="Enlaces del sitio">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em]">Navegación</h2>
          <ul className="mt-5 space-y-3">
            {nav.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="focus-ring text-[var(--color-muted)] hover:text-white">{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em]">Contacto</h2>
          <ul className="mt-5 space-y-3 text-[var(--color-muted)]">
            <li>
              <a className="focus-ring hover:text-white" href={whatsappLink("Hola IntegralTech, quiero información.")} target="_blank" rel="noopener noreferrer">
                WhatsApp {SITE.whatsappDisplay}
              </a>
            </li>
            <li>{SITE.email}</li>
            <li>{SITE.address}</li>
            <li>{SITE.cities.join(" · ")}</li>
            <li>{SITE.hours}</li>
          </ul>
        </div>
      </div>

      <div className="container-wide mt-16 border-t border-white/10 pt-8 text-sm text-[var(--color-muted)]">
        © {new Date().getFullYear()} {SITE.legalName}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
