"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const DISMISS_KEY = "studiokodax-whatsapp-popup-dismissed";

function whatsappHref(): string | null {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_PHONE;
  if (!raw) return null;
  const digits = raw.replace(/\D/g, "");
  if (!digits) return null;
  return `https://wa.me/${digits}`;
}

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
      />
    </svg>
  );
}

export function WhatsAppFloat() {
  const [href] = useState<string | null>(() => whatsappHref());
  const [bubbleOpen, setBubbleOpen] = useState(false);

  useEffect(() => {
    if (!href) return;
    try {
      setBubbleOpen(!localStorage.getItem(DISMISS_KEY));
    } catch {
      setBubbleOpen(true);
    }
  }, [href]);

  if (!href) return null;

  const dismiss = () => {
    try {
      localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* ignore */
    }
    setBubbleOpen(false);
  };

  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 z-[60] flex max-w-[calc(100vw-2rem)] flex-col-reverse items-end gap-2",
        "sm:bottom-6 sm:right-6 sm:flex-row sm:items-end sm:gap-3",
      )}
    >
      {bubbleOpen ? (
        <div
          className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-300 motion-safe:fill-mode-both relative w-[min(17.5rem,calc(100vw-4.5rem))] rounded-xl border border-border bg-background/95 p-3 pr-9 text-left shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/85 sm:w-[17.5rem]"
          role="dialog"
          aria-labelledby="whatsapp-float-title"
        >
          <button
            type="button"
            onClick={dismiss}
            className="absolute right-2 top-2 rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Cerrar aviso de WhatsApp"
          >
            <span className="block text-lg leading-none" aria-hidden>
              ×
            </span>
          </button>
          <p
            id="whatsapp-float-title"
            className="text-sm font-medium leading-snug text-foreground"
          >
            ¿Hablamos por WhatsApp?
          </p>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            Respuesta habitual en horario laboral. Cuéntame en qué estás y te
            oriento sin compromiso.
          </p>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-[#25D366] underline-offset-4 hover:underline"
          >
            Abrir chat
            <WhatsAppGlyph className="h-4 w-4" />
          </a>
        </div>
      ) : null}

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md ring-2 ring-background transition-transform duration-200 hover:scale-105 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        )}
        aria-label="Escribir por WhatsApp (se abre en una pestaña nueva)"
      >
        <WhatsAppGlyph className="h-8 w-8" />
      </a>
    </div>
  );
}
