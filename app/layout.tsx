import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import { SiteJsonLd } from "@/components/seo/site-json-ld";
import { SITE_NAME, SITE_URL } from "@/lib/site";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const defaultDescription =
  "Diseño y desarrollo web en España: webs nuevas para tu negocio o mejora de la que ya tienes si no te genera consultas. SEO técnico, velocidad y mensaje orientado a clientes.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} · Crear o mejorar tu web para negocios en España`,
    template: `%s · ${SITE_NAME}`,
  },
  description: defaultDescription,
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: SITE_NAME,
    url: SITE_URL,
    description: defaultDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <SiteJsonLd />
        <a
          href="#contenido-principal"
          className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:m-0 focus:inline-block focus:h-auto focus:w-auto focus:overflow-visible focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground focus:shadow-lg"
        >
          Saltar al contenido
        </a>
        <SiteHeader />
        <main id="contenido-principal" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
