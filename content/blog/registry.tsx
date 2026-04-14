import type { ComponentType } from "react";

import { CuantoCuestaWebProfesional2026ArticleBody } from "./cuanto-cuesta-web-profesional-2026";
import { MiWebNoRecibeVisitasArticleBody } from "./mi-web-no-recibe-visitas";

export const blogArticleBodies: Record<string, ComponentType> = {
  "cuanto-cuesta-web-profesional-2026": CuantoCuestaWebProfesional2026ArticleBody,
  "mi-web-no-recibe-visitas": MiWebNoRecibeVisitasArticleBody,
};
