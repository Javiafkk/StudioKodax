import type { Metadata } from "next";

import { FinalCtaSection } from "@/components/home/final-cta-section";
import { HeroSection } from "@/components/home/hero-section";
import { PainSolutionSection } from "@/components/home/pain-solution-section";
import { ServicesPreview } from "@/components/home/services-preview";
import { SocialProofSection } from "@/components/home/social-proof-section";
import { RevealOnView } from "@/components/motion/reveal-on-view";

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "Tu web puede generar clientes: SEO técnico, velocidad y una base sólida. Auditoría gratuita y casos reales.",
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
        <FinalCtaSection />
      </RevealOnView>
    </>
  );
}
