import type { Metadata } from "next";
import Link from "next/link";
import { Check, Globe, ScanSearch } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

const serviciosDescription =
  "Creación de páginas web para negocios y autónomos en España y auditoría SEO técnica si tu sitio no genera consultas. Dos packs: web nueva o diagnóstico priorizado.";

export const metadata: Metadata = {
  title: "Diseño web nueva y auditoría SEO técnica",
  description: serviciosDescription,
  alternates: { canonical: "/servicios" },
  openGraph: {
    title: `Diseño web y auditoría SEO | ${SITE_NAME}`,
    description: serviciosDescription,
    url: `${SITE_URL}/servicios`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Diseño web y auditoría SEO | ${SITE_NAME}`,
    description: serviciosDescription,
  },
};

const packs = [
  {
    id: "web",
    badge: "Proyecto completo",
    title: "Creación de tu web",
    description:
      "Sitio hecho para que te entiendan en segundos, confíen y contacten. Rápido en móvil y con base técnica para Google.",
    priceLabel: "Presupuesto a medida",
    priceNote: "Te doy cifra cerrada cuando tengamos claro alcance y páginas.",
    gradient: "from-emerald-500/[0.18] via-teal-500/[0.08] to-background",
    icon: Globe,
    highlights: [
      "Web a medida orientada a conversión",
      "Rendimiento y experiencia en móvil",
      "Base lista para SEO y analítica",
      "Formularios y CTAs claros",
      "Código y entrega documentados",
    ],
  },
  {
    id: "auditoria",
    badge: "Diagnóstico",
    title: "Auditoría web + SEO",
    description:
      "Informe priorizado sobre qué frena tráfico y consultas en tu sitio actual, con pasos concretos para mejorarlo.",
    priceLabel: "Tarifa fija del informe",
    priceNote: "Te indico precio del pack auditoría al contarme tu URL y objetivos.",
    gradient: "from-violet-500/[0.2] via-indigo-500/[0.08] to-background",
    icon: ScanSearch,
    highlights: [
      "Revisión técnica (velocidad, móvil, indexación)",
      "SEO on-page e intención de búsqueda",
      "Recorrido hasta el contacto",
      "Lista priorizada: quick wins primero",
      "Opción de sesión para dudas",
    ],
  },
] as const;

export default function ServiciosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <header className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Tienda de servicios
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Web nueva en España o auditoría de tu sitio actual
        </h1>
        <p className="mt-4 text-muted-foreground">
          Dos productos claros: te construyo la web o audito la que ya tienes.
          Ambos llevan a{" "}
          <strong className="font-medium text-foreground">
            más clientes y consultas desde Internet
          </strong>
          .
        </p>
      </header>

      <ul className="mt-12 grid list-none gap-8 lg:grid-cols-2 lg:gap-10">
        {packs.map((pack) => {
          const Icon = pack.icon;
          return (
            <li key={pack.id} className="h-full">
              <article
                className={cn(
                  "flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm",
                  "motion-safe:transition-shadow motion-safe:duration-300 hover:shadow-lg",
                )}
              >
                <div
                  className={cn(
                    "relative flex aspect-[5/3] items-center justify-center bg-gradient-to-br sm:aspect-[16/10]",
                    pack.gradient,
                  )}
                >
                  <div className="rounded-2xl border border-white/40 bg-background/80 p-6 shadow-sm backdrop-blur-sm">
                    <Icon
                      className="h-14 w-14 text-foreground sm:h-16 sm:w-16"
                      strokeWidth={1.25}
                      aria-hidden
                    />
                  </div>
                  <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground shadow-sm ring-1 ring-border/60">
                    {pack.badge}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    {pack.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {pack.description}
                  </p>

                  <div className="mt-6 rounded-xl border border-border/70 bg-muted/30 px-4 py-3">
                    <p className="text-lg font-semibold text-foreground">
                      {pack.priceLabel}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {pack.priceNote}
                    </p>
                  </div>

                  <h3 className="sr-only">Incluye</h3>
                  <ul className="mt-6 flex flex-1 flex-col gap-2.5">
                    {pack.highlights.map((line) => (
                      <li
                        key={line}
                        className="flex gap-2.5 text-sm leading-snug text-foreground"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                          aria-hidden
                        />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex justify-center">
                    <Button asChild size="lg" className="min-w-[14rem]">
                      <Link href={`/contacto?servicio=${pack.id}`}>
                        Solicitar Información
                      </Link>
                    </Button>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
