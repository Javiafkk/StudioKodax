import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const posts: Record<string, { title: string }> = {
  "ejemplo-core-web-vitals": {
    title: "[Artículo] Core Web Vitals en proyectos Next.js",
  },
  "ejemplo-schema-markup": {
    title: "[Artículo] Schema.org sin romper el bundle",
  },
};

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = posts[params.slug];
  if (!post) return { title: "Entrada no encontrada" };
  return {
    title: post.title,
    description: "Artículo del blog — sustituye por extracto real.",
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = posts[params.slug];
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <Link
        href="/blog"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        ← Volver al blog
      </Link>
      <header className="mt-8">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-6 text-muted-foreground leading-relaxed">
          [Contenido MDX o CMS — Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Añade aquí tu cuerpo de artículo con buena semántica:
          h2, listas, imágenes con alt, etc.]
        </p>
      </header>
    </article>
  );
}
