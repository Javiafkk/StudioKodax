import type { Metadata } from "next";
import Link from "next/link";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guías prácticas sobre web para negocios en España: tráfico, SEO técnico, rendimiento y qué hacer cuando tu sitio no genera consultas.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <header className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Blog</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Contenido para quien tiene una web (o va a tenerla) y quiere entender qué
          mueve visitas y consultas reales, sin humo.
        </p>
      </header>

      <ul className="mt-14 grid gap-6 sm:grid-cols-2">
        {blogPosts.map((post) => (
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
                <CardDescription>{post.description}</CardDescription>
                <p className="pt-2 text-xs text-muted-foreground">
                  <time dateTime={post.datePublished}>
                    {new Date(post.datePublished + "T12:00:00").toLocaleDateString(
                      "es-ES",
                      {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      },
                    )}
                  </time>
                </p>
              </CardHeader>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}
