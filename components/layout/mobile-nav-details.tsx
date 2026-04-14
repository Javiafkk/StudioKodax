"use client";

import { useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

/** Cierra el <details> del menú hamburguesa al elegir un enlace interno (misma app). */
export function MobileNavDetails({ children }: Props) {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  function handleClick(event: React.MouseEvent<HTMLDetailsElement>) {
    const details = detailsRef.current;
    if (!details?.open) return;

    const anchor = (event.target as HTMLElement | null)?.closest("a");
    if (!anchor) return;

    const href = anchor.getAttribute("href");
    if (!href || !href.startsWith("/") || href.startsWith("//")) return;

    details.open = false;
  }

  return (
    <details
      ref={detailsRef}
      className="group relative"
      onClick={handleClick}
    >
      {children}
    </details>
  );
}
