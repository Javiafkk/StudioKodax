"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type RevealOnViewProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Aparición suave al entrar en el viewport. Respeta prefers-reduced-motion.
 * Usa solo opacity/transform (adecuado para rendimiento en móvil).
 */
export function RevealOnView({ children, className }: RevealOnViewProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [shown, setShown] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -5% 0px", threshold: 0.06 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn(className)}>
      <div
        className={cn(
          "motion-safe:transition-[transform,opacity] motion-safe:duration-700 motion-safe:ease-out",
          shown
            ? "translate-y-0 opacity-100"
            : "translate-y-6 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
        )}
      >
        {children}
      </div>
    </div>
  );
}
