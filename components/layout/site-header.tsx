import Link from "next/link";
import { Menu, Rocket } from "lucide-react";

import { MobileNavDetails } from "@/components/layout/mobile-nav-details";
import { cn } from "@/lib/utils";

const headerNavBtnBase =
  "inline-flex items-center justify-center rounded-lg border px-3 py-1.5 text-sm font-medium transition-[color,background-color,border-color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const headerNavBtnSecondary =
  "border-border/60 bg-muted/25 text-muted-foreground hover:border-border hover:bg-muted/55 hover:text-foreground";

/** Acento discreto para Contacto (misma escala que el resto). */
const headerNavBtnCta =
  "border-primary/35 bg-primary/[0.07] text-foreground hover:border-primary/50 hover:bg-primary/[0.12] hover:text-foreground";

const navMain = [
  { href: "/servicios", label: "Servicios" },
  { href: "/#caso-destacado", label: "Caso destacado" },
  { href: "/#resenas", label: "Reseñas" },
  { href: "/blog", label: "Blog" },
] as const;

/** Móvil: enlaces dentro del menú hamburguesa (Servicios va aparte, centrado). */
const navMobileMenu = [
  { href: "/#caso-destacado", label: "Caso destacado" },
  { href: "/#resenas", label: "Reseñas" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
] as const;

function HeaderRocketSweep() {
  return (
    <div
      className="pointer-events-none relative h-[2px] w-full shrink-0 overflow-hidden bg-border/55"
      aria-hidden
    >
      <div className="motion-safe:animate-header-rocket-sweep motion-reduce:hidden absolute top-0 flex h-full w-36 items-center">
        <div
          className="h-full flex-1 bg-gradient-to-r from-transparent via-primary/25 to-orange-500/45"
          style={{
            maskImage: "linear-gradient(90deg, transparent, black 35%, black)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, black 35%, black)",
          }}
        />
        <div className="flex h-full shrink-0 items-center pl-0.5 pr-px">
          <Rocket
            className="h-3.5 w-3.5 shrink-0 rotate-90 text-primary drop-shadow-[0_0_6px_hsl(var(--primary)/0.45)] sm:h-4 sm:w-4"
            strokeWidth={2}
            aria-hidden
          />
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto grid h-14 max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-4 sm:h-16 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="justify-self-start text-sm font-semibold tracking-tight text-foreground sm:text-base"
        >
          StudioKodax
        </Link>
        <div className="flex justify-center justify-self-center">
          <nav
            aria-label="Principal"
            className="hidden md:block"
          >
            <ul className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
              {navMain.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(headerNavBtnBase, headerNavBtnSecondary)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link
            href="/servicios"
            className={cn(
              headerNavBtnBase,
              headerNavBtnSecondary,
              "md:hidden",
            )}
          >
            Servicios
          </Link>
        </div>
        <div className="flex items-center justify-end gap-4 sm:gap-6">
          <nav aria-label="Contacto" className="hidden md:block">
            <Link
              href="/contacto"
              className={cn(headerNavBtnBase, headerNavBtnCta)}
            >
              Contacto
            </Link>
          </nav>
          <MobileNav />
        </div>
      </div>
      <HeaderRocketSweep />
    </header>
  );
}

function MobileNav() {
  return (
    <nav aria-label="Principal móvil" className="md:hidden">
      <MobileNavDetails>
        <summary
          className={cn(
            headerNavBtnBase,
            headerNavBtnSecondary,
            "flex h-10 w-10 cursor-pointer list-none items-center justify-center p-0 [&::-webkit-details-marker]:hidden",
          )}
          aria-label="Abrir menú de navegación"
        >
          <Menu className="h-5 w-5 shrink-0" aria-hidden />
        </summary>
        <ul className="absolute right-0 z-[100] mt-2 min-w-[12rem] space-y-1 rounded-lg border border-border bg-popover p-2 text-popover-foreground shadow-xl ring-1 ring-black/5">
          {navMobileMenu.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  headerNavBtnBase,
                  "w-full justify-start py-2",
                  item.href === "/contacto"
                    ? headerNavBtnCta
                    : headerNavBtnSecondary,
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </MobileNavDetails>
    </nav>
  );
}
