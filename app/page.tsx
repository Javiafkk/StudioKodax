import type { Metadata } from "next";

import { FaqSection } from "@/components/home/faq-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { HeroSection } from "@/components/home/hero-section";
import { PainSolutionSection } from "@/components/home/pain-solution-section";
import { ServicesPreview } from "@/components/home/services-preview";
import { SocialProofSection } from "@/components/home/social-proof-section";
import { RevealOnView } from "@/components/motion/reveal-on-view";

export const metadata: Metadata = {
  title: {
    absolute: "Diseño web para negocios en España | StudioKodax",
  },
  description:
    "Webs nuevas para negocios y autónomos en España, o mejora de tu web si no vende ni posiciona. SEO técnico, velocidad y más consultas desde Google.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <RevealOnView>
        <PainSolutionSection />
      </RevealOnView>
      <RevealOnView>
        <ServicesPreview />
      </RevealOnView>
      <RevealOnView>
        <SocialProofSection />
      </RevealOnView>
      <RevealOnView>
        <FaqSection />
      </RevealOnView>
      <RevealOnView>
        <FinalCtaSection />
      </RevealOnView>
    </>
  );
}
