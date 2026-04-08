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
    slug: "mi-web-no-recibe-visitas",
    title: "Mi web no recibe visitas: causas habituales y qué hacer",
    description:
      "Si tu página casi no tiene tráfico, no siempre el problema es el diseño. Repasamos indexación, Google, contenido y expectativas realistas antes de invertir en más publicidad.",
    datePublished: "2026-04-07",
  },
];

export function getPostBySlug(slug: string): BlogPostMeta | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
