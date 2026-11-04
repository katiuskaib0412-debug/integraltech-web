import { SITE, whatsappLink } from "@/lib/site";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contacto"
      aria-labelledby="contact-title"
      className="section relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,#1d3a6e_0%,#0d0d0d_65%)]"
      />
      <div className="container-wide grid gap-16 lg:grid-cols-2">
        <div>
          <h2 id="contact-title" className="h-display text-4xl md:text-[52px]">
            ¿Necesitas ayuda? ¡Escríbenos ahora!
          </h2>
          <p className="mt-6 max-w-[520px] text-lg leading-relaxed text-[var(--color-muted)]">
            Cuéntanos qué necesitas. Un asesor te responderá lo antes posible para
            cotizar equipos, reparar tu computadora o instalar tu sistema de seguridad.
          </p>

          <a
            href={whatsappLink("Hola INTEGRALTECH, quiero solicitar una cotización.")}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-10 inline-flex items-center gap-3 rounded-lg bg-[#25d366] px-6 py-[18px] font-semibold text-[#0d0d0d] transition-transform hover:-translate-y-0.5"
          >
            Escribir por WhatsApp · {SITE.whatsappDisplay}
          </a>

          <dl className="mt-12 grid gap-6 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-semibold uppercase tracking-[0.14em] text-[#4fa3ff]">Dirección</dt>
              <dd className="mt-2 text-lg">{SITE.address}, {SITE.city}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-[0.14em] text-[#4fa3ff]">Correo</dt>
              <dd className="mt-2 text-lg">{SITE.email}</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-[0.14em] text-[#4fa3ff]">Horario</dt>
              <dd className="mt-2 text-lg">{SITE.hours}</dd>
            </div>
          </dl>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
