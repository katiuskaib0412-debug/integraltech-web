/**
 * Logo demo de INTEGRALTECH: marca "IT" dentro de un hexágono con nodos de
 * conexión (integración de hardware, software y comunicaciones).
 * Reemplazar por el logo oficial cuando esté disponible.
 */
type LogoProps = {
  showWordmark?: boolean;
  className?: string;
};

export default function Logo({ showWordmark = true, className = "" }: LogoProps) {
  return (
    <a
      href="#inicio"
      aria-label="INTEGRALTECH, ir al inicio"
      className={`focus-ring inline-flex items-center gap-3 ${className}`}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 48 48"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id="it-grad" x1="0" y1="0" x2="48" y2="48">
            <stop offset="0" stopColor="#0061fe" />
            <stop offset="1" stopColor="#4fa3ff" />
          </linearGradient>
        </defs>
        <path
          d="M24 3 L43 13.5 V34.5 L24 45 L5 34.5 V13.5 Z"
          fill="url(#it-grad)"
        />
        {/* Nodos de conexión */}
        <g fill="#ffffff" opacity="0.95">
          <circle cx="24" cy="10.5" r="2" />
          <circle cx="36.5" cy="17.5" r="2" />
          <circle cx="36.5" cy="31.5" r="2" />
          <circle cx="24" cy="38.5" r="2" />
          <circle cx="11.5" cy="31.5" r="2" />
          <circle cx="11.5" cy="17.5" r="2" />
        </g>
        <path
          d="M24 10.5 V38.5 M11.5 17.5 L36.5 31.5 M36.5 17.5 L11.5 31.5"
          stroke="#ffffff"
          strokeOpacity="0.35"
          strokeWidth="1"
          fill="none"
        />
        {/* Monograma IT */}
        <text
          x="24"
          y="30"
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
          fontWeight="700"
          fontSize="15"
          fill="#ffffff"
        >
          IT
        </text>
      </svg>
      {showWordmark && (
        <span className="font-display text-lg leading-none tracking-wide">
          INTEGRAL<span className="text-[#4fa3ff]">TECH</span>
        </span>
      )}
    </a>
  );
}
