import Link from "next/link";

/** Cuerpo del artículo (React). Mantén una buena jerarquía de títulos para SEO y accesibilidad. */

export function MiWebNoRecibeVisitasArticleBody() {
  return (
    <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
      <p className="text-lg text-foreground/90">
        Es una frustración muy común: lanzas la web, pasan las semanas y casi nadie
        entra. Antes de asumir que &quot;el SEO está roto&quot; o de tirar el diseño,
        conviene separar <strong className="font-medium text-foreground">qué está
        pasando en la realidad</strong>: a veces el sitio ni siquiera está bien
        indexado; otras, la gente sí entra pero no es la audiencia que esperabas.
      </p>

      <h2 className="scroll-mt-24 text-2xl font-bold tracking-tight text-foreground">
        Primero: aclarar &quot;sin visitas&quot;
      </h2>
      <p>
        Muchas personas miran solo el contador del panel del hosting o un widget
        antiguo. Lo más fiable es usar{" "}
        <strong className="font-medium text-foreground">Google Analytics 4</strong>,{" "}
        <strong className="font-medium text-foreground">Search Console</strong> o,
        al menos, logs del servidor con criterio. Si no mides bien, puedes estar
        tomando decisiones sobre datos incompletos.
      </p>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          <span className="text-foreground">Casi cero sesiones</span> en varias
          semanas: suele ser indexación, bloqueos técnicos o un dominio recién
          creado sin señales.
        </li>
        <li>
          <span className="text-foreground">Hay tráfico pero &quot;no son
          clientes&quot;</span>: a menudo es mensaje, oferta o palabras clave que no
          coinciden con la intención de búsqueda.
        </li>
      </ul>

      <h2 className="scroll-mt-24 text-2xl font-bold tracking-tight text-foreground">
        Causas técnicas que suelen pasar desapercibidas
      </h2>
      <p>
        Tu web puede verse bien en tu móvil y aun así estar invisible para Google.
        Algunos puntos que reviso siempre en proyectos que &quot;no reciben
        visitas&quot;:
      </p>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          <strong className="font-medium text-foreground">Indexación:</strong> la
          URL no está en el índice (bloqueo en <code className="rounded bg-muted px-1 text-sm text-foreground">robots.txt</code>, meta{" "}
          <code className="rounded bg-muted px-1 text-sm text-foreground">noindex</code>, errores 404 o redirecciones en cadena).
        </li>
        <li>
          <strong className="font-medium text-foreground">Search Console:</strong>{" "}
          propiedad no verificada o sitemap no enviado: pierdes el diagnóstico
          oficial de cobertura y consultas.
        </li>
        <li>
          <strong className="font-medium text-foreground">Rendimiento y móvil:</strong>{" "}
          un sitio muy lento o con layout roto en smartphones puede hundir la
          experiencia; no es la única causa de &quot;cero visitas&quot;, pero sí de
          pocas conversiones cuando ya hay tráfico.
        </li>
        <li>
          <strong className="font-medium text-foreground">HTTPS y dominio canónico:</strong>{" "}
          mezclar <code className="rounded bg-muted px-1 text-sm text-foreground">www</code> y no-www sin redirección clara puede repartir señales entre dos versiones.
        </li>
      </ul>

      <h2 className="scroll-mt-24 text-2xl font-bold tracking-tight text-foreground">
        Contenido, intención y competencia
      </h2>
      <p>
        Si técnicamente todo está bien pero nadie te encuentra, el siguiente foco es{" "}
        <strong className="font-medium text-foreground">qué busca la gente</strong> y
        si tus páginas responden a eso mejor que la competencia. Una web de servicio
        local con tres párrafos genéricos rara vez va a competir con directorios y
        actores establecidos solo porque &quot;está bonita&quot;.
      </p>
      <p>
        No se trata de rellenar palabras clave: se trata de{" "}
        <strong className="font-medium text-foreground">páginas claras</strong> por
        servicio o problema, títulos honestos y textos que demuestren que entiendes
        al cliente. Eso también alimenta el SEO de forma sostenible.
      </p>

      <h2 className="scroll-mt-24 text-2xl font-bold tracking-tight text-foreground">
        Expectativas realistas
      </h2>
      <p>
        Algunos negocios tienen poca búsqueda directa en Google: el demanda existe,
        pero la gente no la formula como crees. Ahí entran otros canales (boca a
        boca, redes, partnerships). El SEO sigue siendo útil para captar la parte
        que sí busca en Google, pero no sustituye un plan comercial completo.
      </p>

      <h2 className="scroll-mt-24 text-2xl font-bold tracking-tight text-foreground">
        Qué puedes hacer esta semana (orden sugerido)
      </h2>
      <ol className="list-decimal space-y-3 pl-6">
        <li>
          Verificar el sitio en{" "}
          <strong className="font-medium text-foreground">Google Search Console</strong>{" "}
          y revisar cobertura e impresiones.
        </li>
        <li>
          Buscar tu marca y una frase clave principal en Google (modo incógnito) y
          anotar si sales y en qué página.
        </li>
        <li>
          Revisar que la home y las páginas clave tengan título y meta descripción
          útiles (no duplicados vacíos).
        </li>
        <li>
          Confirmar que el formulario o vías de contacto funcionan en móvil (sí,
          entra gente y se va por fricción).
        </li>
      </ol>

      <h2 className="scroll-mt-24 text-2xl font-bold tracking-tight text-foreground">
        ¿Necesitas una segunda opinión técnica?
      </h2>
      <p>
        Si tras lo básico sigues sin ver movimiento o no tienes tiempo de
        priorizar, una{" "}
        <strong className="font-medium text-foreground">auditoría con lista de
        acciones</strong> suele ahorrar meses de pruebas a ciegas. En{" "}
        <Link
          href="/servicios"
          className="font-medium text-foreground underline-offset-4 hover:underline"
        >
          servicios
        </Link>{" "}
        tienes el pack de auditoría; si prefieres hablar antes,{" "}
        <Link
          href="/contacto"
          className="font-medium text-foreground underline-offset-4 hover:underline"
        >
          escríbeme en contacto
        </Link>{" "}
        con tu URL y qué esperabas que pasara en los próximos meses.
      </p>
      <p className="text-sm">
        Este artículo es orientativo y no sustituye un análisis de tu caso concreto.
        Cada sitio tiene historial, CMS y competencia distintos.
      </p>
    </div>
  );
}
