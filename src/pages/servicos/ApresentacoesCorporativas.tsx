import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { Packages } from "@/components/Packages";
import { Comparison } from "@/components/Comparison";
import { Extras } from "@/components/Extras";
import { HowWeWork } from "@/components/HowWeWork";
import { WhyInvest } from "@/components/WhyInvest";
import { Terms } from "@/components/Terms";
import { NextSteps } from "@/components/NextSteps";
import { Section } from "@/components/ui/section";

const ApresentacoesCorporativas = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Breadcrumbs items={[
        { label: "Serviços", href: "/servicos" },
        { label: "Design & Criativo", href: "/servicos/design-criativo" },
        { label: "Apresentações Corporativas" }
      ]} />
      
      <Section className="bg-[image:var(--gradient-primary)]">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Apresentações Corporativas Profissionais
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            Transforme suas ideias em slides visuais impactantes. 3 pacotes adaptados às suas necessidades e orçamento.
          </p>
        </div>
      </Section>

      <Packages />
      <Comparison />
      <WhyInvest />
      <Extras />
      <HowWeWork />
      <Terms />
      <NextSteps />
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ApresentacoesCorporativas;
