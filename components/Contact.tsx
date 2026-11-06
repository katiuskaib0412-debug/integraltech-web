import Image from "next/image";
import { SITE, whatsappLink } from "@/lib/site";
import ContactForm from "./ContactForm";
import Reveal from "./motion/Reveal";

export default function Contact() {
  return (
    <section id="contacto" aria-labelledby="contact-title" className="section overflow-hidden">
      <Image
        src="/images/edificio-noche.jpg"
        alt=""
        fill
        loading="lazy"
        sizes="100vw"
        className="-z-10 object-cover opacity-15 dark:opacity-25"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-canvas via-canvas/75 to-canvas" />

      <div className="container-wide grid gap-16 lg:grid-cols-[1fr_1.1fr]">
        <Reveal variant="left">
          <p className="eyebrow">Cobertura y contacto</p>
          <h2 id="contact-title" className="h-display title-section mt-4">
            Agenda tu inspección gratis en Guayaquil y alrededores
          </h2>
          <p className="mt-6 max-w-[520px] text-lg leading-relaxed text-[var(--color-muted)]">
            Vamos a tu casa, tu negocio o tu urbanización para revisar el espacio y proponerte la mejor solución.
          </p>

          <ul className="mt-8 flex flex-wrap gap-2">
            {SITE.cities.map((c) => (
              <li key={c} className="rounded-full border border-line bg-fg/[0.04] px-4 py-2 text-[15px] text-fg/85 backdrop-blur">
                {c}
              </li>
            ))}
          </ul>

          <div className="card mt-10 p-8">
            <p className="eyebrow">Teléfono / WhatsApp</p>
            <a href={`tel:+${SITE.whatsappNumber}`} className="focus-ring h-display mt-3 flex min-h-11 items-center text-[clamp(1.9rem,7vw,2.25rem)] hover:text-link">
              {SITE.whatsappDisplay}
            </a>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={whatsappLink("Hola IntegralTech, quiero agendar una inspección gratis.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary focus-ring w-full sm:w-auto"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal variant="zoom" delay={0.15}>
          <p className="h-display text-2xl">Pide tu inspección gratis</p>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
