import type { Metadata } from "next";
import Link from "next/link";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos sobre desarrollo web, SEO técnico, Core Web Vitals y rendimiento con Next.js.",
};

const placeholders = [
  {
    slug: "ejemplo-core-web-vitals",
    title: "[Artículo] Core Web Vitals en proyectos Next.js",
    excerpt:
      "Marcador de posición: introduce aquí un resumen del post sobre LCP, INP y CLS.",
  },
  {
    slug: "ejemplo-schema-markup",
    title: "[Artículo] Schema.org sin romper el bundle",
    excerpt:
      "Marcador: JSON-LD, validación y patrones recomendados en el App Router.",
  },
] as const;

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <header className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Blog</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Contenido técnico para quienes quieren medir, no solo publicar.
        </p>
      </header>

      <ul className="mt-14 grid gap-6 sm:grid-cols-2">
        {placeholders.map((post) => (
          <li key={post.slug}>
            <Card className="h-full transition-shadow hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:underline"
                  >
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription>{post.excerpt}</CardDescription>
              </CardHeader>
            </Card>
          </li>
        ))}
      </ul>
      <p className="mt-10 text-center text-sm text-muted-foreground">
        Las rutas <code className="rounded bg-muted px-1 py-0.5 text-xs">/blog/[slug]</code>{" "}
        puedes añadirlas cuando tengas el modelo de contenido (MDX, CMS, etc.).
      </p>
    </div>
  );
}
