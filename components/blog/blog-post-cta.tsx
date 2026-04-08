import Link from "next/link";

import { Button } from "@/components/ui/button";

export function BlogPostCta() {
  return (
    <aside
      className="mt-12 rounded-xl border border-border bg-gradient-to-b from-muted/50 to-muted/20 p-6 sm:p-8"
      aria-labelledby="blog-post-cta-heading"
    >
      <h2
        id="blog-post-cta-heading"
        className="text-xl font-semibold tracking-tight text-foreground"
      >
        ¿Quieres que mire tu caso concreto?
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
        Los artículos sirven para encuadrar el problema; la decisión de qué tocar
        primero depende de tu URL, tu sector y tus objetivos. Si me escribes con
        eso, te respondo con el siguiente paso honesto —auditoría, proyecto nuevo o
        simplemente una orientación si no encaja.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button asChild size="lg" className="w-full sm:w-auto">
          <Link href="/contacto">Escribirme</Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
          <Link href="/servicios">Ver servicios y packs</Link>
        </Button>
      </div>
    </aside>
  );
}
