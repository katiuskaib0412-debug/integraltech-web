"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

type Link = { href: string; label: string };

/**
 * Menú hamburguesa con panel a pantalla completa (móvil y tablet).
 * Se monta en <body> con un portal: el backdrop-filter del navbar
 * atraparía un elemento "fixed" dentro de él.
 */
export default function MobileMenu({ links }: { links: Link[] }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Abrir menú"
        aria-expanded={open}
        aria-controls="menu-movil"
        className="focus-ring flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-fg/5 text-fg xl:hidden"
      >
        <span aria-hidden="true" className="relative block h-0.5 w-5 bg-current before:absolute before:-top-1.5 before:left-0 before:h-0.5 before:w-5 before:bg-current after:absolute after:top-1.5 after:left-0 after:h-0.5 after:w-5 after:bg-current" />
      </button>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                id="menu-movil"
                role="dialog"
                aria-modal="true"
                aria-label="Menú"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[80] flex h-[100dvh] flex-col bg-canvas/95 px-5 pb-8 pt-4 text-fg backdrop-blur-xl xl:hidden"
              >
                <div className="flex h-[72px] items-center justify-between">
                  <span onClick={() => setOpen(false)}>
                    <Logo />
                  </span>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Cerrar menú"
                    className="focus-ring flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-fg/5 text-2xl leading-none"
                  >
                    ×
                  </button>
                </div>

                <nav aria-label="Menú móvil" className="mt-6 flex-1 overflow-y-auto">
                  <ul className="flex flex-col">
                    {links.map((l, i) => (
                      <motion.li
                        key={l.href}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.04 * i + 0.05 }}
                      >
                        <a
                          href={l.href}
                          onClick={() => setOpen(false)}
                          className="focus-ring flex min-h-14 items-center border-b border-line font-display text-2xl font-semibold"
                        >
                          {l.label}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                <div className="mt-6 flex flex-col gap-3">
                  <ThemeToggle withLabel className="w-full justify-center py-3" />
                  <a href="#contacto" onClick={() => setOpen(false)} className="btn-primary focus-ring w-full">
                    Inspección gratis
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
