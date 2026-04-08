import Link from "next/link";

import { Button } from "@/components/ui/button";

export function FinalCtaSection() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="bg-primary px-4 py-20 text-primary-foreground sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
          Siguiente paso
        </p>
        <h2
          id="final-cta-heading"
          className="mt-3 text-2xl font-bold sm:text-3xl"
        >
          ¿Quieres que tu web empiece a generar más clientes?
        </h2>
        <p className="mt-4 text-primary-foreground/90">
          Envíame tu situación: sector, web actual y qué tipo de consultas o
          ventas te gustaría aumentar. Te devuelvo un primer análisis claro:
          qué está frenando captación y qué haría primero.
        </p>
        <Button
          asChild
          size="lg"
          variant="secondary"
          className="mt-8"
        >
          <Link href="/contacto">Ir a contacto</Link>
        </Button>
      </div>
    </section>
  );
}
