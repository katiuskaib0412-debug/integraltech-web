"use client";

import { useEffect, useRef, useState } from "react";
import { SITE, whatsappLink } from "@/lib/site";
import { sendLead } from "@/lib/leads";

type Msg = { from: "bot" | "user"; text: string };

type Option = { label: string; key: string };

const MENU: Option[] = [
  { label: "Solicitar cotización", key: "cotizacion" },
  { label: "Servicios", key: "servicios" },
  { label: "Seguridad electrónica", key: "seguridad" },
  { label: "Reparación", key: "reparacion" },
  { label: "Hablar con un asesor", key: "asesor" },
];

const ANSWERS: Record<string, { text: string; options?: Option[]; link?: boolean }> = {
  inicio: {
    text: `¡Hola! Soy el asistente de ${SITE.name}. ¿En qué te podemos ayudar?`,
    options: MENU,
  },
  cotizacion: {
    text: "Con gusto. Para cotizar, indícanos qué necesitas (equipos, telecomunicaciones, sistema TI o seguridad) y tu ciudad. Te contactaremos por WhatsApp.",
    link: true,
  },
  servicios: {
    text: "Ofrecemos: venta de computadoras y periféricos, equipos de telecomunicaciones, diseño de sistemas TI, seguridad electrónica (alarmas contra robo e incendio) y reparación y mantenimiento.",
    options: MENU,
  },
  seguridad: {
    text: "Instalamos, mantenemos y supervisamos de forma remota alarmas contra robo e incendio. ¿Quieres una revisión para tu hogar o negocio?",
    link: true,
  },
  reparacion: {
    text: "Reparamos computadoras, servidores, impresoras, pantallas, proyectores, escáneres, módems y almacenamiento. Cuéntanos el problema y el modelo del equipo.",
    link: true,
  },
  asesor: {
    text: `Puedes escribirnos directamente al ${SITE.whatsappDisplay} y te atendemos lo antes posible.`,
    link: true,
  },
  fallback: {
    text: "No estoy seguro de haber entendido. Elige una opción o escríbenos por WhatsApp para atención personalizada.",
    options: MENU,
    link: true,
  },
};

function resolveKey(input: string): string {
  const t = input.toLowerCase();
  if (/cotiz|precio|presupuesto/.test(t)) return "cotizacion";
  if (/servic/.test(t)) return "servicios";
  if (/alarma|seguridad|c[aá]mara/.test(t)) return "seguridad";
  if (/repar|falla|no enciende|lent|pantalla|impresora/.test(t)) return "reparacion";
  if (/asesor|humano|persona|whats/.test(t)) return "asesor";
  if (/hola|buenas|inicio|menu|menú/.test(t)) return "inicio";
  return "fallback";
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([]);
  const [options, setOptions] = useState<Option[]>(MENU);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [typing, setTyping] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  // Saludo inicial al abrir por primera vez
  useEffect(() => {
    if (open && messages.length === 0) {
      reply("inicio");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

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
          aria-label="Chat de asistencia INTEGRALTECH"
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
                  m.from === "bot"
                    ? "bg-white/[0.06] text-white"
                    : "ml-auto bg-[#0061fe] text-white"
                }`}
              >
                {m.text}
              </div>
            ))}
            {typing && (
              <div className="w-fit rounded-2xl bg-white/[0.06] px-4 py-3 text-sm text-[var(--color-muted)]" aria-label="Escribiendo">
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
                    className="focus-ring rounded-full border border-[#0061fe]/50 px-4 py-2 text-sm text-white hover:bg-[#0061fe]/20"
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            )}
            {showWhatsApp && (
              <a
                href={whatsappLink("Hola INTEGRALTECH, vengo desde el chat del sitio web.")}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring mt-2 block rounded-lg bg-[#25d366] px-4 py-3 text-center font-semibold text-[#0d0d0d]"
              >
                Continuar en WhatsApp
              </a>
            )}
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2 border-t border-[var(--color-border)] p-4">
            <label htmlFor="chat-input" className="sr-only">
              Escribe tu mensaje
            </label>
            <input
              id="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu mensaje…"
              autoComplete="off"
              className="focus-ring min-w-0 flex-1 rounded-lg border border-[var(--color-border)] bg-[#0d0d0d] px-4 py-3 text-[15px] placeholder:text-white/40"
            />
            <button type="submit" className="btn-primary focus-ring px-5 py-3 text-sm">
              Enviar
            </button>
          </form>
        </section>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="chat-panel"
        className="focus-ring flex h-14 items-center gap-2 rounded-full bg-[#0061fe] px-5 font-semibold text-white shadow-[0_10px_30px_rgba(0,97,254,0.4)] transition-transform hover:scale-105"
      >
        <span aria-hidden="true">💬</span>
        {open ? "Cerrar" : "Chat"}
      </button>
    </div>
  );
}
