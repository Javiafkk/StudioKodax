import Link from "next/link";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-border bg-gradient-to-b from-muted/50 to-background px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:px-8 lg:pb-24 lg:pt-12"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <div className="absolute -left-[25%] top-[-35%] h-[min(70vw,28rem)] w-[min(70vw,28rem)] rounded-full bg-primary/[0.08] blur-3xl motion-safe:animate-hero-blob" />
        <div className="absolute -right-[20%] bottom-[-25%] h-[min(55vw,22rem)] w-[min(55vw,22rem)] rounded-full bg-muted-foreground/[0.07] blur-3xl motion-safe:animate-hero-blob-slow" />
      </div>
      <div className="relative mx-auto max-w-3xl text-center motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700 motion-safe:fill-mode-both">
        <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
          StudioKodax · Desarrollo web orientado a negocio
        </p>
        <h1
          id="hero-heading"
          className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
        >
          Una web hecha para traerte clientes, no solo para verse bien
        </h1>
        <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
          La gente te busca en Google; si tu sitio tarda, no se entiende o no
          transmite confianza, pierdes consultas antes de hablar con ellos. Yo
          combino <strong className="font-medium text-foreground">SEO técnico</strong>,{" "}
          <strong className="font-medium text-foreground">velocidad</strong> y un
          desarrollo serio para que{" "}
          <strong className="font-medium text-foreground">
            más visitas se conviertan en llamadas, formularios y oportunidades
          </strong>
          .
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/contacto">Solicitar información</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/#caso-destacado">Ver caso destacado</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
