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
    // pb extra en móvil para que los botones flotantes (WhatsApp y chat) no tapen el contenido final
    <footer className="relative border-t border-line bg-raised/70 pb-28 pt-16 backdrop-blur md:pb-10 md:pt-20">
      <div className="container-wide grid gap-10 md:grid-cols-[1.4fr_1fr_1fr] md:gap-12">
        <div>
          <Logo />
          <p className="mt-6 max-w-[360px] leading-relaxed text-soft">
            Seguridad, energía y redes instaladas por un solo equipo, en {SITE.cities.slice(0, 2).join(" y ")}.
          </p>
          <p className="mt-4 text-sm text-soft">{SITE.legalName}</p>
        </div>

        <nav aria-label="Enlaces del sitio">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em]">Navegación</h2>
          <ul className="mt-3 grid grid-cols-2 gap-x-6 md:grid-cols-1">
            {nav.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="focus-ring tap text-soft hover:text-fg">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em]">Contacto</h2>
          <ul className="mt-3 space-y-1 text-soft">
            <li>
              <a
                className="focus-ring tap hover:text-fg"
                href={whatsappLink("Hola IntegralTech, quiero información.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp {SITE.whatsappDisplay}
              </a>
            </li>
            <li className="py-1">{SITE.email}</li>
            <li className="py-1">{SITE.address}</li>
            <li className="py-1">{SITE.cities.join(" · ")}</li>
            <li className="py-1">{SITE.hours}</li>
          </ul>
        </div>
      </div>

      <div className="container-wide mt-12 border-t border-line pt-8 text-sm text-soft">
        © {new Date().getFullYear()} {SITE.legalName}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
