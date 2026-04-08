export type ReviewSlide = {
  id: string;
  authorName: string;
  authorSubtitle?: string;
  /** Por defecto `google`. */
  source?: "google" | "whatsapp";
  timeAgo?: string;
  rating?: number;
  localGuide?: boolean;
  text: string;
};

export const reviewSlides: ReviewSlide[] = [
  {
    id: "1",
    source: "google",
    authorName: "María Rodríguez",
    timeAgo: "Hace 3 meses",
    rating: 5,
    text:
      "Lo que noté no fue solo que subieran las visitas de la web, fue que empezaron a llegar más clientes interesados en mis servicios. La web pasó a ser un canal de captación, no un folleto digital.",
  },
  {
    id: "wa-1",
    source: "whatsapp",
    authorName: "Laura G.",
    authorSubtitle: "Cliente",
    text:
      "Hola, te escribo para decirte que la landing nueva va muy bien: ya nos están llegando leads por el formulario. Gracias por el trabajo y la paciencia con los textos.",
  },
  {
    id: "2",
    source: "google",
    authorName: "Carlos Méndez",
    timeAgo: "Hace 5 semanas",
    rating: 5,
    text:
      "Teníamos una web antigua que no posicionaba. Tras la nueva base técnica y el SEO, empezamos a recibir consultas desde Google sin depender solo del boca a boca.",
  },
  {
    id: "3",
    source: "google",
    authorName: "Ana Ruiz",
    timeAgo: "Hace 1 mes",
    rating: 5,
    text:
      "Me importaba la velocidad y que se viera bien en móvil. El resultado es que la gente se queda, entiende el servicio y rellena el formulario: eso es lo que quería.",
  },
];
