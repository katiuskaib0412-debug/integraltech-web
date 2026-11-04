import { SITE } from "@/lib/site";

export type Lead = {
  origen: "formulario" | "chatbot";
  nombre?: string;
  telefono?: string;
  email?: string;
  servicio?: string;
  mensaje?: string;
};

/**
 * Envía un lead al Google Apps Script (que escribe en Google Sheets).
 * Usa text/plain + no-cors para evitar el preflight CORS de Apps Script:
 * no se puede leer la respuesta, pero la petición llega al script.
 */
export async function sendLead(lead: Lead): Promise<boolean> {
  if (!SITE.leadEndpoint || SITE.leadEndpoint.includes("PEGAR_URL")) {
    console.warn("Lead no enviado: configura SITE.leadEndpoint en lib/site.ts");
    return false;
  }
  try {
    await fetch(SITE.leadEndpoint, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ ...lead, fecha: new Date().toISOString() }),
    });
    return true;
  } catch {
    return false;
  }
}
