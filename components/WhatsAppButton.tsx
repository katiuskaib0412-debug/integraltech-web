import { SITE, whatsappLink } from "@/lib/site";

/** Botón flotante de WhatsApp (esquina inferior izquierda). */
export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Hola INTEGRALTECH, quiero más información.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Escribir por WhatsApp al ${SITE.whatsappDisplay}`}
      className="focus-ring fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] shadow-[0_10px_30px_rgba(37,211,102,0.35)] transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true" focusable="false">
        <path
          fill="#0d0d0d"
          d="M16.04 3C9.04 3 3.36 8.67 3.36 15.67c0 2.24.59 4.43 1.7 6.36L3 29l7.13-1.87a12.6 12.6 0 0 0 5.9 1.5h.01c7 0 12.68-5.67 12.68-12.67A12.66 12.66 0 0 0 16.04 3Zm0 23.2h-.01a10.5 10.5 0 0 1-5.36-1.47l-.38-.23-4.23 1.11 1.13-4.12-.25-.42a10.5 10.5 0 0 1-1.62-5.6c0-5.8 4.72-10.52 10.53-10.52 2.81 0 5.45 1.1 7.44 3.08a10.46 10.46 0 0 1 3.08 7.44c0 5.8-4.72 10.52-10.53 10.52Zm5.77-7.88c-.32-.16-1.88-.93-2.17-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.19.21-.37.24-.69.08-.32-.16-1.34-.49-2.56-1.57-.95-.84-1.59-1.88-1.78-2.2-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65s1.14 3.08 1.3 3.29c.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.88-.77 2.14-1.51.27-.74.27-1.37.19-1.51-.08-.13-.29-.21-.61-.37Z"
        />
      </svg>
      <span className="sr-only">WhatsApp</span>
    </a>
  );
}
