import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-raleway",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "INTEGRALTECH | Tecnología integral en Guayaquil",
  description:
    "Venta de equipos, telecomunicaciones, sistemas TI, seguridad electrónica y reparación de computadoras en Guayaquil, Ecuador.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-EC" className={`${raleway.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
