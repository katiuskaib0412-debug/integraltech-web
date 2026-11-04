import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Audience from "@/components/Audience";
import Services from "@/components/Services";
import SolarCalculator from "@/components/SolarCalculator";
import Works from "@/components/Works";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatBot from "@/components/ChatBot";

export default function Home() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <Audience />
        <Services />
        <SolarCalculator />
        <Works />
        <Process />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
      <ChatBot />
    </>
  );
}
