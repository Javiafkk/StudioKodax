import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BlogPostingJsonLd } from "@/components/blog/blog-posting-json-ld";
import { blogArticleBodies } from "@/content/blog/registry";
import { getPostBySlug, blogPosts } from "@/lib/blog";
import { SITE_NAME, SITE_URL } from "@/lib/site";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Entrada no encontrada" };

  const url = `${SITE_URL}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url,
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified ?? post.datePublished,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const Body = blogArticleBodies[post.slug];
  if (!Body) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <BlogPostingJsonLd
        slug={post.slug}
        headline={post.title}
        description={post.description}
        datePublished={post.datePublished}
        dateModified={post.dateModified}
      />
      <Link
        href="/blog"
        className="text-sm text-muted-foreground hover:text-foreground"
      >
        ← Volver al blog
      </Link>
      <header className="mt-8 border-b border-border pb-8">
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {SITE_NAME} · Blog
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Publicado el{" "}
          <time dateTime={post.datePublished}>
            {new Date(post.datePublished + "T12:00:00").toLocaleDateString("es-ES", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
        </p>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          {post.description}
        </p>
      </header>
      <div className="pt-10">
        <Body />
      </div>
    </article>
  );
}
