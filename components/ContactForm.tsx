"use client";

import { useState } from "react";
import { sendLead } from "@/lib/leads";

const services = [
  "Venta de equipos y periféricos",
  "Telecomunicaciones",
  "Diseño de sistemas TI",
  "Seguridad electrónica",
  "Reparación y mantenimiento",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setStatus("sending");
    const ok = await sendLead({
      origen: "formulario",
      nombre: String(fd.get("nombre") ?? ""),
      telefono: String(fd.get("telefono") ?? ""),
      email: String(fd.get("email") ?? ""),
      servicio: String(fd.get("servicio") ?? ""),
      mensaje: String(fd.get("mensaje") ?? ""),
    });
    if (ok) {
      e.currentTarget.reset();
      setStatus("ok");
    } else {
      setStatus("error");
    }
  }

  const field =
    "focus-ring mt-2 w-full rounded-lg border border-[var(--color-border)] bg-[#0d0d0d] px-4 py-3 text-[15px] placeholder:text-white/40";

  return (
    <form onSubmit={handleSubmit} className="card grid gap-5 p-8 md:p-10" aria-label="Solicitar cotización">
      <div>
        <label htmlFor="nombre" className="text-sm font-semibold">Nombre *</label>
        <input id="nombre" name="nombre" required autoComplete="name" className={field} placeholder="Tu nombre" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="telefono" className="text-sm font-semibold">Teléfono / WhatsApp *</label>
          <input id="telefono" name="telefono" required type="tel" autoComplete="tel" className={field} placeholder="09xxxxxxxx" />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-semibold">Correo</label>
          <input id="email" name="email" type="email" autoComplete="email" className={field} placeholder="correo@ejemplo.com" />
        </div>
      </div>
      <div>
        <label htmlFor="servicio" className="text-sm font-semibold">Servicio de interés</label>
        <select id="servicio" name="servicio" className={field} defaultValue="">
          <option value="" disabled>Selecciona un servicio</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="mensaje" className="text-sm font-semibold">Mensaje</label>
        <textarea id="mensaje" name="mensaje" rows={4} className={field} placeholder="Cuéntanos qué necesitas" />
      </div>

      <button type="submit" disabled={status === "sending"} className="btn-primary focus-ring disabled:opacity-60">
        {status === "sending" ? "Enviando…" : "Solicitar cotización"}
      </button>

      <p role="status" aria-live="polite" className="text-sm text-[var(--color-muted)]">
        {status === "ok" && "¡Gracias! Recibimos tu solicitud y te contactaremos pronto."}
        {status === "error" && "No pudimos enviar tu solicitud. Intenta de nuevo o escríbenos por WhatsApp."}
      </p>
    </form>
  );
}
