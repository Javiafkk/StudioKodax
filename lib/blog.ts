/**
 * Metadatos del blog. Para una entrada nueva:
 * 1. Añade el objeto aquí (slug único).
 * 2. Crea `content/blog/<slug>.tsx` con el componente del cuerpo.
 * 3. Regístralo en `content/blog/registry.tsx`.
 */

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  /** ISO 8601 fecha (YYYY-MM-DD) */
  datePublished: string;
  dateModified?: string;
};

/** Listado del blog (orden: más reciente primero). */
export const blogPosts: BlogPostMeta[] = [
  {
    slug: "cuanto-cuesta-web-profesional-2026",
    title:
      "¿Cuánto cuesta una web profesional en 2026? Guía de precios y qué incluye",
    description:
      "¿Buscas cuánto cuesta una web en 2026? Descubre los precios reales en España para landings, webs corporativas y e-commerce. Evita errores y descubre qué debe incluir una web profesional para ser rentable.",
    datePublished: "2026-04-14",
  },
  {
    slug: "mi-web-no-recibe-visitas",
    title: "Mi web no recibe visitas: cómo lo abordo como profesional",
    description:
      "Si tu página casi no tiene tráfico, el diagnóstico importa más que el rediseño a ciegas. Marco técnico, intención de búsqueda y contexto del negocio —y cómo te puedo ayudar desde StudioKodax.",
    datePublished: "2026-04-07",
    dateModified: "2026-04-08",
  },
];

export function getPostBySlug(slug: string): BlogPostMeta | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
