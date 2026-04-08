export function PainSolutionSection() {
  return (
    <section
      aria-labelledby="pain-solution-heading"
      className="border-b border-border bg-muted/50"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            El problema
          </p>
          <h2
            id="pain-solution-heading"
            className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          >
            Si nadie te encuentra o se va antes de escribirte no hay negocio
          </h2>
          <p className="mt-4 text-muted-foreground sm:text-lg">
            Muchas webs fallan en lo invisible: indexación, velocidad, datos
            estructurados y una experiencia que frustra en el móvil. El resultado
            es siempre el mismo:{" "}
            <strong className="font-medium text-foreground">
              menos visitas cualificadas y menos consultas
            </strong>
            , aunque el diseño sea bonito. El trabajo técnico sirve para que{" "}
            <strong className="font-medium text-foreground">
              te encuentren quienes ya están buscando lo que ofreces
            </strong>{" "}
            y para que, una vez dentro, les cueste menos dar el paso: llamar,
            escribir o pedir presupuesto.
          </p>
        </div>
      </div>
    </section>
  );
}
