import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Providers from "@/components/Providers";
import Background from "@/components/Background";
import "./globals.css";

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-space",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://integraltech.com.ec";
const TITLE = "IntegralTech | Seguridad, energía y redes en Guayaquil";
const DESCRIPTION =
  "Cámaras, alarmas, paneles solares, domótica, electricidad, cableado estructurado y soporte de computadoras para casas, negocios, urbanizaciones y edificios en Guayaquil y Samborondón. Inspección gratis.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s | IntegralTech" },
  description: DESCRIPTION,
  keywords: [
    "cámaras de seguridad Guayaquil",
    "alarmas Guayaquil",
    "paneles solares Guayaquil",
    "domótica Ecuador",
    "cableado estructurado Guayaquil",
    "soporte computadoras Guayaquil",
    "IntegralTech",
  ],
  applicationName: "IntegralTech",
  authors: [{ name: "INTEGRALTECH S.A.S." }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: SITE_URL,
    siteName: "IntegralTech",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/images/solar-techo.jpg", width: 1400, height: 933, alt: "Paneles solares en un techo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/solar-techo.jpg"],
  },
  icons: { icon: "/logo.png", apple: "/logo.png" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f7fb" },
    { media: "(prefers-color-scheme: dark)", color: "#05070d" },
  ],
  width: "device-width",
  initialScale: 1,
};

// Se ejecuta antes de pintar: aplica el tema guardado o el del sistema (sin parpadeo).
const themeScript = `(function(){try{var s=localStorage.getItem('theme');var d=s?s==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;var r=document.documentElement;r.classList.toggle('dark',d);r.style.colorScheme=d?'dark':'light';}catch(e){}})();`;

// Datos estructurados (SEO local) para buscadores.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "IntegralTech",
  legalName: "INTEGRALTECH S.A.S.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/images/solar-techo.jpg`,
  description: DESCRIPTION,
  telephone: "+593987730345",
  address: { "@type": "PostalAddress", addressLocality: "Guayaquil", addressRegion: "Guayas", addressCountry: "EC" },
  areaServed: ["Guayaquil", "Samborondón", "Durán", "Daule"],
  makesOffer: [
    "Cámaras de seguridad",
    "Alarmas, cercos y accesos",
    "Paneles solares",
    "Domótica",
    "Instalaciones eléctricas",
    "Redes y cableado estructurado",
    "Reparación de computadoras e impresoras",
    "Mantenimiento y soporte",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-EC" className={`${space.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          <Background />
          <div className="relative z-10">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
