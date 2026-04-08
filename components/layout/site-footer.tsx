import Link from "next/link";

const legal = [
  { href: "/legal/aviso-legal", label: "Aviso legal" },
  { href: "/legal/privacidad", label: "Privacidad" },
  { href: "/legal/cookies", label: "Cookies" },
] as const;

const sitemap = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/#caso-destacado", label: "Caso destacado" },
  { href: "/#resenas", label: "Reseñas" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-foreground">
              StudioKodax
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Webs y SEO técnico para que te encuentren en Google y más visitas
              acaben en consultas y clientes.
            </p>
          </div>
          <nav aria-labelledby="footer-legal-heading">
            <h2 id="footer-legal-heading" className="text-sm font-semibold">
              Legal
            </h2>
            <ul className="mt-3 space-y-2">
              {legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-labelledby="footer-sitemap-heading">
            <h2 id="footer-sitemap-heading" className="text-sm font-semibold">
              Mapa del sitio
            </h2>
            <ul className="mt-3 space-y-2">
              {sitemap.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-10 border-t border-border pt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} StudioKodax. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
