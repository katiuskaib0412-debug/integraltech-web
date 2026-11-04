// Datos de contacto centralizados. Cambiar aquí actualiza WhatsApp, chat y footer.
export const SITE = {
  name: "INTEGRALTECH",
  legalName: "INTEGRALTECH S.A.S.",
  city: "Guayaquil, Guayas, Ecuador",
  // Formato internacional para wa.me: sin "+", sin espacios y sin el 0 inicial local.
  whatsappNumber: "593987730345",
  whatsappDisplay: "+593 98 773 0345",
  email: "[CORREO]",
  address: "[DIRECCIÓN]",
  social: "[REDES SOCIALES]",
  hours: "[HORARIO DE ATENCIÓN]",
  // URL de la Web App de Google Apps Script (termina en /exec). Ver INSTRUCCIONES.md.
  leadEndpoint: "PEGAR_URL_APPS_SCRIPT_AQUI",
} as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${SITE.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
