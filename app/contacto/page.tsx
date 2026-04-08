import type { Metadata } from "next";

import { ContactForm } from "@/components/contacto/contact-form";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const contactoDescription =
  "Solicita presupuesto o consulta para tu web en España: proyecto nuevo desde cero o mejora de un sitio que no posiciona ni convierte. Respuesta con siguiente paso claro.";

export const metadata: Metadata = {
  title: "Presupuesto y consulta para tu web",
  description: contactoDescription,
  alternates: { canonical: "/contacto" },
  openGraph: {
    title: `Contacto y presupuesto web | ${SITE_NAME}`,
    description: contactoDescription,
    url: `${SITE_URL}/contacto`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Contacto y presupuesto web | ${SITE_NAME}`,
    description: contactoDescription,
  },
};

export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <header className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Presupuesto y consulta para tu web
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Cuéntame si partimos de cero o si ya tienes web y{" "}
          <strong className="font-medium text-foreground">
            no te está trayendo clientes
          </strong>
          . Indica sector, objetivo (llamadas, formularios, reservas…) y, si
          aplica, la URL. Te respondo con un siguiente paso claro.
        </p>
      </header>

      <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <section aria-labelledby="contact-form-heading">
          <h2 id="contact-form-heading" className="sr-only">
            Formulario de contacto
          </h2>
          <ContactForm />
        </section>
        <aside
          aria-labelledby="contact-aside-heading"
          className="rounded-lg border border-border bg-muted/20 p-6 lg:p-8"
        >
          <h2
            id="contact-aside-heading"
            className="text-lg font-semibold text-foreground"
          >
            Antes de escribir (qué suele importar)
          </h2>
          <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
            <li>
              <strong className="font-medium text-foreground">
                ¿Esto me va a traer clientes?
              </strong>{" "}
              El objetivo es alinear técnica y SEO con cómo te busca tu
              cliente: visibilidad + una web que convenza. Sin promesas mágicas;
              con prioridades claras y medibles.
            </li>
            <li>
              <strong className="font-medium text-foreground">
                ¿Qué necesito contarte?
              </strong>{" "}
              Sector, tipo de cliente ideal, web actual (si la hay) y qué
              consultas o ventas querrías multiplicar en los próximos meses.
            </li>
            <li>
              <strong className="font-medium text-foreground">
                ¿Qué tecnología usas?
              </strong>{" "}
              Trabajo principalmente con Next.js, TypeScript y Tailwind, y SEO
              técnico de principio a fin. Si tu caso es otro stack, lo valoramos
              en el primer contacto.
            </li>
            <li>
              <strong className="font-medium text-foreground">
                ¿Qué recibo si pido la auditoría gratuita?
              </strong>{" "}
              Un primer diagnóstico con foco en lo que más puede estar frenando
              captación (velocidad, indexación, mensaje, conversión) y siguientes
              pasos recomendados.
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
