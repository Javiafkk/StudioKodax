import { Code2, LineChart, Wrench } from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const items = [
  {
    icon: Code2,
    title: "Desarrollo técnico",
    description:
      "Sitios rápidos y claros, pensados para que un visitante entienda qué ofreces y actúe. Código mantenible, no parches que te frenan dentro de seis meses.",
  },
  {
    icon: LineChart,
    title: "Optimización SEO",
    description:
      "Que Google muestre tus páginas a la gente que busca tu servicio. Técnica + estructura para ganar visibilidad y que esa visibilidad se traduzca en consultas.",
  },
  {
    icon: Wrench,
    title: "Mantenimiento",
    description:
      "Tu web no se queda obsoleta: rendimiento estable, menos sorpresas y mejoras cuando el negocio cambia. Así no pierdes posiciones ni conversiones por desgaste técnico.",
  },
] as const;

export function ServicesPreview() {
  return (
    <section
      aria-labelledby="services-preview-heading"
      className="border-b border-border bg-background"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Qué hago
          </p>
          <h2
            id="services-preview-heading"
            className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          >
            Mi trabajo
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Todo encaja en un objetivo: que tu web aporte{" "}
            <strong className="font-medium text-foreground">
              clientes y consultas
            </strong>
            , no solo visitas anónimas.
          </p>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.title}>
              <Card className="h-full border-border/80 motion-safe:transition-[transform,box-shadow] motion-safe:duration-300 hover:shadow-md motion-safe:hover:-translate-y-1 motion-safe:active:scale-[0.99]">
                <CardHeader>
                  <item.icon
                    className="h-10 w-10 text-foreground"
                    aria-hidden
                  />
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-base">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
