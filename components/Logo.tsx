import Image from "next/image";
import { SITE } from "@/lib/site";

/** Logo oficial de IntegralTech (public/logo.png). */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <a
      href="#inicio"
      aria-label={`${SITE.name}, ir al inicio`}
      className={`focus-ring inline-flex min-h-11 items-center gap-3 ${className}`}
    >
      <Image src="/logo.png" alt={SITE.name} width={36} height={36} priority />
      <span className="font-display text-xl font-semibold tracking-tight">{SITE.name}</span>
    </a>
  );
}
