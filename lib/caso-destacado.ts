export type CasoMetrica = { label: string; value: string };

/**
 * Caso destacado de la home: piensa en el visitante como alguien que no domina SEO.
 * Orden mental: 1) qué le pasaba al negocio, 2) qué hiciste, 3) qué ganó en clientes/consultas.
 * Sustituye cifras y nombres por los reales cuando los tengas.
 */
export const casoDestacado = {
  title: "De pocas visitas a clientes estables desde Google",
  client: "Empresa B2B · Servicios",
  imageSrc: "/casos/caso-destacado.webp",
  imageAlt: "Captura o imagen del proyecto destacado",
  metrics: [
    {
      label: "Consultas desde la web",
      value: "De casi ninguna a un flujo mensual",
    },
    {
      label: "Objetivo en búsqueda",
      value: "Mejor posición para lo que realmente vende",
    },
    {
      label: "Negocio",
      value: "Más mensajes y clientes con intención de compra",
    },
  ] as [CasoMetrica, CasoMetrica, CasoMetrica],
  problem:
    "La web no aparecía cuando sus clientes ideales buscaban : la competencia salía antes, la página tardaba y no dejaba claro el siguiente paso. Resultado: poca gente cualificada llegaba por el canal orgánico.",
  technicalSolution:
    "Ordenamos la web para Google y para la persona que busca: URLs claras, datos estructurados para que entienda el producto, y una carga rápida en móvil. Menos fricción técnica y un recorrido obvio hacia el contacto o el formulario.",
  resultsSummary:
    "En los meses siguientes aumentaron las visitas desde búsqueda y, sobre todo, más personas pidieron información sin depender solo de anuncios: el canal orgánico pasó a generar oportunidades de venta de forma recurrente.",
  chartBars: [
    { label: "Sesiones orgánicas", before: 40, after: 100 },
    { label: "Páginas indexadas", before: 55, after: 95 },
    { label: "Formularios (orgánico)", before: 30, after: 88 },
  ],
} as const;
