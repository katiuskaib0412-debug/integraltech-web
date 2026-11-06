"use client";

import { useMemo, useState } from "react";
import { SITE, whatsappLink } from "@/lib/site";

/*
 * Calculadora de referencia (no es una cotización). Supuestos:
 * - Producción: 4,2 kWh por día por cada kWp instalado en Guayaquil (promedio anual).
 * - Cobertura objetivo: 85 % del consumo.
 * - Tarifa: 0,0923 USD/kWh (calibrada con el ejemplo de la web: 5,5 kWp ≈ $64/mes).
 * - Inversión: entre 750 y 1.200 USD por kWp (ejemplo de la web: $4.125 – $6.600 para 5,5 kWp).
 * Ajustar estos valores con datos reales antes de publicar.
 */
const KWH_PER_KWP_DAY = 4.2;
const DAYS = 30;
const COVERAGE = 0.85;
const TARIFF = 0.0923;
const COST_MIN_PER_KWP = 750;
const COST_MAX_PER_KWP = 1200;
const STEPS = [80, 150, 300, 450, 600];

const usd = (n: number) =>
  new Intl.NumberFormat("es-EC", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

export default function SolarCalculator() {
  const [bill, setBill] = useState(150);

  const r = useMemo(() => {
    const kwh = bill / TARIFF;
    const target = kwh * COVERAGE;
    const kwp = Math.max(0.5, Math.round((target / (KWH_PER_KWP_DAY * DAYS)) * 2) / 2);
    const production = kwp * KWH_PER_KWP_DAY * DAYS;
    const monthly = Math.min(production, target) * TARIFF;
    const invMin = kwp * COST_MIN_PER_KWP;
    const invMax = kwp * COST_MAX_PER_KWP;
    const payMin = invMin / (monthly * 12);
    const payMax = invMax / (monthly * 12);
    return { kwp, monthly, yearly: monthly * 12, invMin, invMax, payMin, payMax };
  }, [bill]);

  const message = `Hola IntegralTech, mi planilla de luz es de ${usd(bill)}/mes. Quiero mi cálculo solar.`;

  return (
    <section id="solar" aria-labelledby="solar-title" className="section">
      <div className="container-wide grid items-start gap-16 lg:grid-cols-2">
        <div>
          <p className="eyebrow">Calculadora de ahorro solar · Guayaquil</p>
          <h2 id="solar-title" className="h-display title-section mt-4">
            ¿Cuánto puedes ahorrar con paneles solares?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[var(--color-muted)]">
            Mueve la barra con el valor de tu planilla de luz mensual. Calculamos con la producción solar de Guayaquil y
            precios de mercado en Ecuador.
          </p>

          <div className="card mt-10 p-8">
            <div className="flex items-baseline justify-between">
              <label htmlFor="bill" className="font-semibold">Tu planilla de luz al mes</label>
              <output htmlFor="bill" className="h-display text-3xl text-gradient">{usd(bill)}</output>
            </div>
            <input
              id="bill"
              type="range"
              min={STEPS[0]}
              max={STEPS[STEPS.length - 1]}
              step={5}
              value={bill}
              onChange={(e) => setBill(Number(e.target.value))}
              className="mt-6 w-full accent-[#0a84ff]"
            />
            <div className="mt-2 flex justify-between text-sm text-[var(--color-muted)]">
              {STEPS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setBill(s)}
                  className="focus-ring tap justify-center rounded px-1 hover:text-fg"
                >
                  {usd(s)}
                </button>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-[var(--color-muted)]">
              Estimación referencial para un sistema conectado a la red que cubre cerca del 85 % de tu consumo. El
              dimensionamiento exacto lo hacemos en la inspección gratis.
            </p>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <Stat label="Sistema sugerido" value={`${r.kwp.toFixed(1).replace(".", ",")} kWp`} sub={`≈ ${Math.ceil(r.kwp / 0.55)} paneles de 550 W`} />
            <Stat label="Ahorro estimado" value={`${usd(r.monthly)} / mes`} sub={`${usd(r.yearly)} al año`} />
          </div>
          <div className="card p-8">
            <p className="eyebrow">Inversión estimada</p>
            <p className="h-display mt-3 text-3xl">{usd(r.invMin)} – {usd(r.invMax)}</p>
            <p className="mt-1 text-sm text-[var(--color-muted)]">Equipos e instalación</p>
            <div className="my-6 h-px bg-line" />
            <p className="eyebrow">Recuperas la inversión en</p>
            <p className="h-display mt-3 text-3xl">
              {Math.floor(r.payMin)} – {Math.ceil(r.payMax)} años
            </p>
            <p className="mt-1 text-sm text-[var(--color-muted)]">Luego, ahorro el resto de su vida útil</p>
            <a
              href={whatsappLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary focus-ring mt-8 block text-center"
            >
              Enviar mi cálculo por WhatsApp
            </a>
            <p className="mt-3 text-center text-xs text-[var(--color-muted)]">
              Línea directa: {SITE.whatsappDisplay}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            <Mini big="≈ 4,2 kWh" text="por día produce cada kWp instalado en Guayaquil, en promedio anual." />
            <Mini big="25 a 30 años" text="de vida útil de un sistema fotovoltaico bien instalado." />
            <Mini big="Excedentes" text="La energía que no usas se inyecta a la red y queda como crédito." />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="card p-8">
      <p className="eyebrow">{label}</p>
      <p className="h-display mt-3 text-3xl">{value}</p>
      <p className="mt-1 text-sm text-[var(--color-muted)]">{sub}</p>
    </div>
  );
}

function Mini({ big, text }: { big: string; text: string }) {
  return (
    <div className="card p-6">
      <p className="font-semibold text-link">{big}</p>
      <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{text}</p>
    </div>
  );
}
