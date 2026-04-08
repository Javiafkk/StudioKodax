import Link from "next/link";

const faqs = [
  {
    question: "No tengo web todavía, ¿por dónde empiezo?",
    answer:
      "Lo habitual es una breve llamada o mensaje: me cuentas qué vendes, a quién te diriges y qué te gustaría que hiciera un visitante (llamarte, rellenar un formulario, reservar…). Con eso te propongo alcance realista, tecnología adecuada y una cifra cerrada o un rango claro. No hace falta que tengas el texto perfecto; lo afinamos en el proceso.",
  },
  {
    question: "Ya tengo web pero casi no recibo consultas, ¿qué puede estar fallando?",
    answer:
      "Suele ser una mezcla de cosas: poca visibilidad en Google, web lenta o incómoda en el móvil, mensaje confuso o formularios que la gente no termina. No siempre hace falta tirar todo: a veces priorizar velocidad, SEO técnico y claridad en la página de servicio cambia mucho. En auditoría reviso eso con prioridades (qué tocar primero) y te digo qué puedes hacer tú, qué haría yo y en qué orden.",
  },
  {
    question: "¿Trabajas con negocios en toda España?",
    answer:
      "Sí. El trabajo es remoto (reuniones por videollamada y seguimiento por escrito). Lo importante es que tengas claro tu cliente ideal y tu zona o ámbito de negocio para que el mensaje y el SEO tengan sentido.",
  },
  {
    question: "¿Qué significa el SEO técnico que comentas?",
    answer:
      "Me refiero a que Google pueda rastrear e indexar bien tu sitio, que cargue rápido, que el móvil funcione bien y que las URLs, títulos y estructura ayuden a entender de qué va cada página. Eso es base para aparecer cuando la gente busca lo que ofreces. No prometo posiciones fijas: depende de tu sector, competencia y constancia.",
  },
  {
    question: "¿Me garantizas salir en la primera página de Google?",
    answer:
      "No. Nadie serio debería garantizar posiciones: Google cambia reglas y hay competencia que no controlamos. Lo que sí puedo es dejar la web en buen estado técnico, con contenido claro y un plan de mejora medible, para que tengas más opciones de que te encuentren y te contacten.",
  },
  {
    question: "¿Cuánto puede tardar un proyecto de web nueva?",
    answer:
      "Depende de páginas, contenidos (si los tienes listos o hay que extraerlos), integraciones y revisiones. Te doy calendario orientativo al cerrar alcance.",
  },
  {
    question: "¿Cómo pido presupuesto o la auditoría?",
    answer:
      "Desde la página de contacto o el formulario: indica si quieres web nueva o mejorar la actual, tu URL si ya tienes sitio y qué te gustaría mejorar en los próximos meses. Respondo con siguientes pasos y, si encaja, propuesta o enlace para concretar.",
  },
] as const;

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export function FaqSection() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section
        aria-labelledby="faq-heading"
        className="border-t border-border bg-muted/20 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-3xl">
          <h2
            id="faq-heading"
            className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          >
            Preguntas frecuentes
          </h2>
          <p className="mt-3 text-center text-sm text-muted-foreground sm:text-base">
            Respuestas directas sobre web nueva, mejorar un sitio que no funciona
            y SEO técnico en España — sin promesas vacías.
          </p>
          <div className="mt-10 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-lg border border-border bg-background shadow-sm motion-safe:transition-shadow open:shadow-md"
              >
                <summary className="cursor-pointer list-none px-4 py-3.5 pr-10 text-left text-sm font-semibold text-foreground sm:text-base [&::-webkit-details-marker]:hidden">
                  <span className="block">{faq.question}</span>
                </summary>
                <div className="border-t border-border px-4 py-3 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-muted-foreground">
            ¿No ves tu duda?{" "}
            <Link
              href="/contacto"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              Escríbeme en contacto
            </Link>{" "}
            y lo vemos.
          </p>
        </div>
      </section>
    </>
  );
}
