// Datos del negocio, tomados de integraltech.com.ec. Cambiar aquí actualiza todo el sitio.
export const SITE = {
  name: "IntegralTech",
  legalName: "INTEGRALTECH S.A.S.",
  cities: ["Guayaquil", "Samborondón", "Vía a la Costa", "Daule · La Aurora", "Durán"],
  // Formato internacional para wa.me (sin + ni espacios ni 0 inicial).
  whatsappNumber: "593987730345",
  whatsappDisplay: "098 773 0345",
  email: "[CORREO]",
  address: "[DIRECCIÓN]",
  hours: "[HORARIO DE ATENCIÓN]",
  // URL de la Web App de Google Apps Script (termina en /exec). Ver INSTRUCCIONES.md.
  leadEndpoint: "PEGAR_URL_APPS_SCRIPT_AQUI",
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${SITE.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
