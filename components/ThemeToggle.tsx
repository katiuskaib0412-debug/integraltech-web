"use client";

import { useEffect } from "react";

/** Aplica el tema, lo guarda (opcional) y activa la transición de 300 ms. */
function applyTheme(dark: boolean, persist: boolean) {
  const root = document.documentElement;
  root.classList.add("theme-transition");
  root.classList.toggle("dark", dark);
  root.style.colorScheme = dark ? "dark" : "light";
  if (persist) {
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      /* almacenamiento no disponible */
    }
  }
  window.setTimeout(() => root.classList.remove("theme-transition"), 320);
  window.dispatchEvent(new Event("themechange"));
}

/**
 * Botón sol/luna. El icono se decide con CSS (clase .dark en <html>),
 * así no hay desajuste de hidratación ni parpadeo.
 */
export default function ThemeToggle({ className = "", withLabel = false }: { className?: string; withLabel?: boolean }) {
  // Si el usuario no eligió tema, seguir los cambios del sistema
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e: MediaQueryListEvent) => {
      let stored: string | null = null;
      try {
        stored = localStorage.getItem("theme");
      } catch {
        /* ignorar */
      }
      if (!stored) applyTheme(e.matches, false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <button
      type="button"
      onClick={() => applyTheme(!document.documentElement.classList.contains("dark"), true)}
      aria-label="Cambiar entre modo claro y oscuro"
      title="Cambiar tema"
      className={`focus-ring inline-flex min-h-11 min-w-11 items-center justify-center gap-3 rounded-xl border border-line bg-fg/5 px-3 text-fg transition-colors hover:bg-fg/10 ${className}`}
    >
      {/* Luna: visible en modo claro */}
      <svg viewBox="0 0 24 24" className="h-5 w-5 dark:hidden" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z" />
      </svg>
      {/* Sol: visible en modo oscuro */}
      <svg viewBox="0 0 24 24" className="hidden h-5 w-5 dark:block" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
      {withLabel && (
        <span className="text-base font-medium">
          <span className="dark:hidden">Modo oscuro</span>
          <span className="hidden dark:inline">Modo claro</span>
        </span>
      )}
    </button>
  );
}
