import { SITE_NAME, SITE_URL } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/icon.png`,
      description:
        "Diseño y desarrollo web con SEO técnico en España. Webs nuevas para negocios y profesionales, o mejora de sitios que no generan consultas ni visibilidad en Google.",
      areaServed: {
        "@type": "Country",
        name: "España",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "es-ES",
      description:
        "Crea tu web para tu negocio o mejora la que ya tienes: velocidad, SEO técnico y mensaje claro para captar clientes en España.",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export function SiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
