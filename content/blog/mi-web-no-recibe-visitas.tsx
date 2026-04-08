import Link from "next/link";

/** Artículo orientado a SEO y a conversión: marco profesional, no tutorial DIY. */

export function MiWebNoRecibeVisitasArticleBody() {
  return (
    <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
      <p className="text-lg text-foreground/90">
        Que una web casi no reciba visitas es un síntoma frecuente, no una
        sentencia. En muchos proyectos que reviso, el titular &quot;no entra
        nadie&quot; esconde cosas distintas: a veces el sitio apenas está en el
        índice de Google; otras, hay tráfico pero no encaja con lo que el negocio
        necesita vender. Este texto no es un manual para arreglarlo solo: es el{" "}
        <strong className="font-medium text-foreground">
          marco en el que trabajo
        </strong>{" "}
        cuando alguien me pide priorizar qué hacer.
      </p>

      <h2 className="scroll-mt-24 text-2xl font-bold tracking-tight text-foreground">
        Por qué importa acotar el problema antes de actuar
      </h2>
      <p>
        Sin medición mínimamente fiable, es fácil invertir en rediseño o anuncios
        sin tocar la causa. En un encargo profesional lo primero es alinear{" "}
        <strong className="font-medium text-foreground">qué entiendes por
        &quot;visitas&quot;</strong> (sesiones, consultas en Google, leads) y{" "}
        <strong className="font-medium text-foreground">qué esperabas en plazo
        realista</strong>. A partir de ahí se decide si el cuello de botella es
        técnico, de contenido o de encaje con la demanda real del mercado.
      </p>

      <h2 className="scroll-mt-24 text-2xl font-bold tracking-tight text-foreground">
        Tres frentes que suelo evaluar
      </h2>
      <p>
        No siempre hace falta tocar los tres; el valor está en el orden y en no
        dispersarse.
      </p>
      <ul className="list-disc space-y-3 pl-6">
        <li>
          <span className="font-medium text-foreground">Base técnica e
          indexación.</span>{" "}
          Comprobar que Google puede rastrear e indexar lo importante, que no hay
          bloqueos accidentales (<code className="rounded bg-muted px-1 text-sm">robots</code>,{" "}
          <code className="rounded bg-muted px-1 text-sm">noindex</code>, cadenas de
          redirección) y que el dominio canónico está claro. Sin eso, el mejor texto
          del mundo no sirve de mucho.
        </li>
        <li>
          <span className="font-medium text-foreground">Intención y mensaje.</span>{" "}
          Si el sitio ya aparece para algo pero no convierte, suele ser un tema de
          páginas poco claras, propuesta débil o búsquedas que no coinciden con lo que
          ofreces. Ahí el trabajo es alinear contenido con cómo te busca tu cliente,
          no rellenar palabras clave.
        </li>
        <li>
          <span className="font-medium text-foreground">Contexto del negocio.</span>{" "}
          En algunos sectores la demanda en buscador es limitada o muy competida; el
          SEO sigue siendo pieza del puzzle, pero no sustituye canal, precio ni
          reputación. Eso también forma parte de una lectura honesta.
        </li>
      </ul>

      <h2 className="scroll-mt-24 text-2xl font-bold tracking-tight text-foreground">
        Cómo encaja con lo que ofrezco en StudioKodax
      </h2>
      <p>
        Si necesitas un{" "}
        <strong className="font-medium text-foreground">informe priorizado</strong>{" "}
        sobre tu sitio actual, el pack de{" "}
        <Link
          href="/servicios"
          className="font-medium text-foreground underline-offset-4 hover:underline"
        >
          auditoría web y SEO
        </Link>{" "}
        está pensado para eso: qué está frenando visibilidad o consultas y en qué
        orden lo abordaría. Si el camino es una{" "}
        <strong className="font-medium text-foreground">web nueva</strong>, el otro
        pack cubre el desarrollo con base técnica y mensaje orientado a contacto.
      </p>
      <p>
        En ambos casos el primer paso suele ser una conversación breve y, si encaja,
        propuesta cerrada o alcance claro —sin prometer posiciones en Google.
      </p>

      <p className="border-l-2 border-primary/40 pl-4 text-sm italic text-muted-foreground">
        Este artículo resume un enfoque profesional; no sustituye el análisis de tu
        dominio, tu historial ni tu competencia concreta.
      </p>
    </div>
  );
}
