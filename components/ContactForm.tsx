"use client";

import { useState } from "react";
import { sendLead } from "@/lib/leads";
import { whatsappLink } from "@/lib/site";

const services = [
  "Cámaras de seguridad",
  "Alarma / cerco eléctrico / accesos",
  "Paneles solares",
  "Domótica",
  "Instalación eléctrica",
  "Redes, cableado o servidores",
  "Reparación de computadoras / impresoras",
  "Mantenimiento",
  "Varios servicios",
];

const places = ["Casa", "Negocio", "Urbanización", "Edificio"];

const field =
  "focus-ring mt-2 w-full rounded-[10px] border border-[var(--color-border)] bg-[#0a0f1a] px-4 py-3 text-[15px] placeholder:text-white/40";

export default function ContactForm() {
  const [sending, setSending] = useState(false);
  const [note, setNote] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = {
      nombre: String(fd.get("nombre") ?? ""),
      servicio: String(fd.get("servicio") ?? ""),
      lugar: String(fd.get("lugar") ?? ""),
      sector: String(fd.get("sector") ?? ""),
      mensaje: String(fd.get("mensaje") ?? ""),
    };

    const text =
      `Hola IntegralTech, soy ${data.nombre}.\n` +
      `Servicio: ${data.servicio}\n` +
      `Lugar: ${data.lugar}\n` +
      `Sector: ${data.sector}\n` +
      `${data.mensaje}`;

    // Se abre WhatsApp de inmediato (dentro del gesto del usuario) y luego se guarda el lead.
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    setSending(true);
    void sendLead({ origen: "formulario", ...data, email: undefined, telefono: undefined }).finally(() => {
      setSending(false);
      setNote("Listo. Se abrió WhatsApp con tu solicitud para enviarla.");
      form.reset();
    });
  }

  return (
    <form onSubmit={handleSubmit} className="card mt-6 grid gap-5 p-8 md:p-10" aria-label="Pide tu inspección gratis">
      <div>
        <label htmlFor="nombre" className="text-sm font-semibold">Nombre *</label>
        <input id="nombre" name="nombre" required autoComplete="name" className={field} placeholder="Tu nombre" />
      </div>
      <div>
        <label htmlFor="servicio" className="text-sm font-semibold">Servicio</label>
        <select id="servicio" name="servicio" defaultValue="" className={field}>
          <option value="" disabled>Selecciona un servicio</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <fieldset>
        <legend className="text-sm font-semibold">¿Para dónde es?</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {places.map((p, i) => (
            <label key={p} className="cursor-pointer">
              <input type="radio" name="lugar" value={p} defaultChecked={i === 0} className="peer sr-only" />
              <span className="focus-ring block rounded-full border border-white/20 px-4 py-2 text-sm peer-checked:border-[#00c6ff] peer-checked:bg-[#0a84ff]/20 peer-focus-visible:outline-2 peer-focus-visible:outline-[#00c6ff]">
                {p}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <div>
        <label htmlFor="sector" className="text-sm font-semibold">Sector</label>
        <input id="sector" name="sector" className={field} placeholder="Ej.: Urdesa, Samborondón, Vía a la Costa" />
      </div>
      <div>
        <label htmlFor="mensaje" className="text-sm font-semibold">Cuéntanos un poco más</label>
        <textarea id="mensaje" name="mensaje" rows={4} className={field} placeholder="Qué necesitas y cuándo te gustaría la inspección" />
      </div>

      <button type="submit" disabled={sending} className="btn-primary focus-ring disabled:opacity-60">
        Enviar por WhatsApp
      </button>
      <p role="status" aria-live="polite" className="text-sm text-[var(--color-muted)]">
        {note || "Inspección técnica sin costo y sin compromiso."}
      </p>
    </form>
  );
}
