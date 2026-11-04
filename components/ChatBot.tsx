"use client";

import { useEffect, useRef, useState } from "react";
import { SITE, whatsappLink } from "@/lib/site";
import { sendLead } from "@/lib/leads";

type Msg = { from: "bot" | "user"; text: string };
type Option = { label: string; key: string };

const MENU: Option[] = [
  { label: "Inspección gratis", key: "inspeccion" },
  { label: "Paneles solares", key: "solar" },
  { label: "Cámaras y alarmas", key: "seguridad" },
  { label: "Domótica", key: "domotica" },
  { label: "Computadoras", key: "computadoras" },
  { label: "Hablar con un asesor", key: "asesor" },
];

const ANSWERS: Record<string, { text: string; options?: Option[]; link?: boolean }> = {
  inicio: {
    text: `¡Hola! Soy el asistente de ${SITE.name}. Instalamos cámaras, alarmas, paneles solares, domótica, electricidad y redes en ${SITE.cities[0]} y ${SITE.cities[1]}. ¿En qué te ayudamos?`,
    options: MENU,
  },
  inspeccion: {
    text: "La inspección técnica es gratis y sin compromiso. Vamos a tu casa, tu negocio o tu urbanización, medimos y te enviamos una propuesta con equipos, materiales, mano de obra y tiempos.",
    link: true,
  },
  solar: {
    text: "Con paneles solares puedes bajar tu planilla de luz. Usa la calculadora de la sección «Ahorro solar» o escribe el valor de tu planilla y te damos una estimación. La inspección confirma el tamaño exacto del sistema.",
    link: true,
    options: MENU,
  },
  seguridad: {
    text: "Instalamos cámaras con acceso desde el celular, alarmas con aviso al celular, cercos eléctricos, timbres con cámara y cerraduras inteligentes.",
    link: true,
    options: MENU,
  },
  domotica: {
    text: "Controlamos luces, cortinas, climatización y cerraduras desde una app o por voz.",
    link: true,
    options: MENU,
  },
  computadoras: {
    text: "Reparamos y damos mantenimiento a laptops, PCs e impresoras: diagnóstico, cambio a SSD, piezas y venta de equipos.",
    link: true,
    options: MENU,
  },
  asesor: {
    text: `Escríbenos directamente al ${SITE.whatsappDisplay} y te atendemos lo antes posible.`,
    link: true,
  },
  fallback: {
    text: "No estoy seguro de haber entendido. Elige una opción o escríbenos por WhatsApp para una atención personalizada.",
    options: MENU,
    link: true,
  },
};

function resolveKey(input: string): string {
  const t = input.toLowerCase();
  if (/inspecci|gratis|visita|cotiz|presupuesto|precio/.test(t)) return "inspeccion";
  if (/solar|panel|planilla|ahorro|luz/.test(t)) return "solar";
  if (/c[aá]mara|alarma|cerco|seguridad|timbre|acceso/.test(t)) return "seguridad";
  if (/dom[oó]tica|cortina|inteligente|luces/.test(t)) return "domotica";
  if (/repar|laptop|computador|impresora|ssd|pantalla/.test(t)) return "computadoras";
  if (/asesor|humano|persona|whats/.test(t)) return "asesor";
  if (/hola|buenas|inicio|menu|menú/.test(t)) return "inicio";
  return "fallback";
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([]);
  const [options, setOptions] = useState<Option[]>([]);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [typing, setTyping] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const greeted = useRef(false);

  function reply(key: string, userText?: string) {
    if (userText) setMessages((m) => [...m, { from: "user", text: userText }]);
    setTyping(true);
    setOptions([]);
    const answer = ANSWERS[key] ?? ANSWERS.fallback;
    window.setTimeout(() => {
      setMessages((m) => [...m, { from: "bot", text: answer.text }]);
      setOptions(answer.options ?? []);
      setShowWhatsApp(Boolean(answer.link));
      setTyping(false);
    }, 450);
  }

  // Saludo la primera vez que se abre el chat
  useEffect(() => {
    if (open && !greeted.current) {
      greeted.current = true;
      reply("inicio");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setInput("");
    void sendLead({ origen: "chatbot", mensaje: text });
    reply(resolveKey(text), text);
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-4">
      {open && (
        <section
          id="chat-panel"
          aria-label="Chat de asistencia IntegralTech"
          className="card flex h-[480px] w-[min(360px,calc(100vw-48px))] flex-col overflow-hidden shadow-2xl"
        >
          <header className="flex items-center justify-between border-b border-[var(--color-border)] px-5 py-4">
            <div>
              <p className="font-semibold">Asistente {SITE.name}</p>
              <p className="text-xs text-[var(--color-muted)]">Respuesta inmediata</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar chat"
              className="focus-ring flex h-9 w-9 items-center justify-center rounded-lg hover:bg-white/10"
            >
              ✕
            </button>
          </header>

          <div ref={listRef} role="log" aria-live="polite" className="flex-1 space-y-3 overflow-y-auto p-5">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-[15px] leading-relaxed ${
                  m.from === "bot" ? "bg-white/[0.07] text-white" : "ml-auto bg-[#0a84ff] text-white"
                }`}
              >
                {m.text}
              </div>
            ))}
            {typing && (
              <div className="w-fit rounded-2xl bg-white/[0.07] px-4 py-3 text-sm text-[var(--color-muted)]" aria-label="Escribiendo">
                • • •
              </div>
            )}
            {options.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {options.map((o) => (
                  <button
                    key={o.key}
                    type="button"
                    onClick={() => reply(o.key, o.label)}
                    className="focus-ring rounded-full border border-[#0a84ff]/60 px-4 py-2 text-sm text-white hover:bg-[#0a84ff]/20"
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            )}
            {showWhatsApp && (
              <a
                href={whatsappLink("Hola IntegralTech, vengo desde el chat del sitio web.")}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring mt-2 block rounded-[10px] bg-[#25d366] px-4 py-3 text-center font-semibold text-[#0a0f1a]"
              >
                Continuar en WhatsApp
              </a>
            )}
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2 border-t border-[var(--color-border)] p-4">
            <label htmlFor="chat-input" className="sr-only">Escribe tu mensaje</label>
            <input
              id="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu mensaje…"
              autoComplete="off"
              className="focus-ring min-w-0 flex-1 rounded-[10px] border border-[var(--color-border)] bg-[#0a0f1a] px-4 py-3 text-[15px] placeholder:text-white/40"
            />
            <button type="submit" className="btn-primary focus-ring px-5 py-3 text-sm">Enviar</button>
          </form>
        </section>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="chat-panel"
        className="focus-ring flex h-14 items-center gap-2 rounded-full bg-gradient-to-r from-[#0a84ff] to-[#00c6ff] px-5 font-semibold text-white shadow-[0_10px_30px_rgba(10,132,255,0.4)] transition-transform hover:scale-105"
      >
        <span aria-hidden="true">💬</span>
        {open ? "Cerrar" : "Chat"}
      </button>
    </div>
  );
}
