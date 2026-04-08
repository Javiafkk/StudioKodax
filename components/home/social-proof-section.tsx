import Image from "next/image";
import Link from "next/link";

import { ReviewsVerticalCarousel } from "@/components/home/reviews-vertical-carousel";
import { reviewSlides } from "@/lib/reviews-data";
import { MetricChart } from "@/components/casos/metric-chart";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { casoDestacado } from "@/lib/caso-destacado";

export function SocialProofSection() {
  return (
    <section
      id="caso-destacado"
      aria-labelledby="social-proof-heading"
      className="scroll-mt-20 border-b border-border bg-muted/35"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Prueba y resultados
        </p>
        <h2
          id="social-proof-heading"
          className="mt-3 text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
        >
          Lo que cuenta es el impacto en tu negocio
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          Métricas de tráfico y posicionamiento son el medio; el fin es{" "}
          <strong className="font-medium text-foreground">
            más oportunidades reales de venta o contratación
          </strong>
          .
        </p>
        <div className="mt-12 flex flex-col gap-10">
          <article className="mx-auto w-full max-w-xl">
            <Card className="h-full overflow-hidden border-border/80 bg-card shadow-sm pt-0">
              <div className="relative h-56 w-full bg-muted sm:h-64">
                <Image
                  src={casoDestacado.imageSrc}
                  alt={casoDestacado.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 576px) 100vw, 576px"
                />
              </div>
              <CardHeader className="space-y-1 p-4 sm:p-5">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                  Caso destacado
                </p>
                <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                  {casoDestacado.client}
                </p>
                <CardTitle className="text-lg leading-snug sm:text-xl">
                  {casoDestacado.title}
                </CardTitle>
                <ul className="mt-3 grid list-none gap-1.5 p-0 sm:grid-cols-3 sm:gap-2">
                  {casoDestacado.metrics.map((m) => (
                    <li
                      key={m.label}
                      className="rounded-md bg-primary/5 px-2.5 py-1.5 text-xs font-semibold text-foreground"
                    >
                      <span className="block text-[10px] font-normal text-muted-foreground">
                        {m.label}
                      </span>
                      {m.value}
                    </li>
                  ))}
                </ul>
              </CardHeader>
              <CardContent className="space-y-4 p-4 pt-0 sm:p-5 sm:pt-0">
                <div>
                  <h3 className="text-xs font-semibold text-foreground">
                    Problema
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {casoDestacado.problem}
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-foreground">
                    Solución técnica
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {casoDestacado.technicalSolution}
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-foreground">
                    Resultados
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {casoDestacado.resultsSummary}
                  </p>
                </div>
                <MetricChart
                  compact
                  title="Antes / después (indicativo)"
                  rows={[...casoDestacado.chartBars]}
                />
                <Button asChild size="sm" className="w-full sm:w-auto">
                  <Link href="/contacto">Quiero más información</Link>
                </Button>
              </CardContent>
            </Card>
          </article>
          <div
            id="resenas"
            className="scroll-mt-20"
            aria-labelledby="resenas-heading"
          >
            <p
              id="resenas-heading"
              className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
            >
              Reseñas
            </p>
            <ReviewsVerticalCarousel
              className="mt-4"
              reviews={reviewSlides}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
