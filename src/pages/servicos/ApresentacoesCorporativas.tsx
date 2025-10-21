import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { useNavigate } from "react-router-dom";
import { Comparison } from "@/components/Comparison";
import { Extras } from "@/components/Extras";
import { HowWeWork } from "@/components/HowWeWork";
import { WhyInvest } from "@/components/WhyInvest";
import { Terms } from "@/components/Terms";
import { NextSteps } from "@/components/NextSteps";
import { Section, SectionTitle, SectionSubtitle } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, FileText, Palette, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import corpHeroBg from "@/assets/corp-hero-bg.jpg";

// Componente de Card de Pacote específico para esta página
interface PackageCardProps {
  name: string;
  subtitle: string;
  price: string;
  description: string;
  features: string[];
  extraSlide: string;
  recommended?: boolean;
  bonus?: string;
  slug: string;
}

const PackageCard = ({ 
  name, 
  subtitle,
  price, 
  description, 
  features, 
  extraSlide,
  recommended = false,
  bonus,
  slug
}: PackageCardProps) => {
  const navigate = useNavigate();
  return (
    <Card 
      className={cn(
        "relative p-8 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-2",
        recommended && "border-primary border-2 shadow-[var(--shadow-elegant)]"
      )}
    >
      {recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[image:var(--gradient-secondary)] text-secondary-foreground px-6 py-1 rounded-full text-sm font-semibold">
          Recomendado
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-1">{name}</h3>
        <p className="text-sm text-primary/70 font-medium mb-4">{subtitle}</p>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <div className="text-4xl font-bold bg-clip-text text-transparent bg-[image:var(--gradient-primary)]">
          {price}
        </div>
      </div>
      
      <ul className="space-y-4 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      {bonus && (
        <div className="bg-accent/50 rounded-lg p-4 mb-6 border-2 border-primary/20">
          <p className="text-xs font-semibold text-primary mb-2 flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            BÓNUS INCLUÍDO
          </p>
          <p className="text-sm">{bonus}</p>
        </div>
      )}
      
      <div className="text-center text-sm text-muted-foreground mb-6">
        Slide extra: <span className="font-semibold text-foreground">{extraSlide}</span>
      </div>
      
      <Button 
        className={cn(
          "w-full",
          recommended 
            ? "bg-[image:var(--gradient-primary)] hover:opacity-90" 
            : "bg-[image:var(--gradient-secondary)] hover:opacity-90"
        )}
        size="lg"
        onClick={() => navigate(`/servicos/apresentacoes-corporativas/${slug}`)}
      >
        Escolher Pacote
      </Button>
    </Card>
  );
};

// Pacotes específicos para Apresentações Corporativas
const packages = [
  {
    name: "Essencial",
    subtitle: "Layout Clean",
    slug: "essencial",
    price: "Kz 212.000",
    description: "Ideal para reuniões internas e apresentações rápidas",
    features: [
      "Padronização visual completa",
      "Capa e slide de encerramento",
      "Tipografia e cores da marca",
      "Ajustes ligeiros de layout (não reescrevemos textos)",
      "1 rodada de revisões",
      "Entrega: .pptx + PDF"
    ],
    extraSlide: "Kz 12.000/slide",
    recommended: false
  },
  {
    name: "Profissional",
    subtitle: "Redesign Pro",
    slug: "profissional",
    price: "Kz 450.000",
    description: "Recomendado para a Associação de Bebidas",
    features: [
      "Redesign slide a slide completo",
      "3–4 infográficos simples",
      "Ícones e gráficos padronizados",
      "2 rodadas de revisões",
      "Entrega: .pptx editável + PDF",
      "Fontes e assets organizados"
    ],
    extraSlide: "Kz 30.000/slide",
    recommended: true
  },
  {
    name: "Impacto",
    subtitle: "Storytelling + Animação",
    slug: "impacto",
    price: "Kz 920.000",
    description: "Ideal para pitch de patrocínio, keynote e lançamentos",
    features: [
      "Storytelling (refino dos textos)",
      "Infográficos personalizados premium",
      "Animações leves e transições consistentes",
      "3 rodadas de revisões",
      "Versões 16:9 e PDF pronto para impressão",
      "Qualidade máxima e impacto visual"
    ],
    extraSlide: "Kz 70.000/slide",
    recommended: false,
    bonus: "Landing page com todas as informações da associação + domínio e hospedagem de 1 ano + 3 emails corporativos"
  }
];

const ApresentacoesCorporativas = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Breadcrumbs items={[
        { label: "Serviços", href: "/servicos" },
        { label: "Design & Criativo", href: "/servicos/design-criativo" },
        { label: "Apresentações Corporativas" }
      ]} />
      
      <Section className="relative bg-[image:var(--gradient-primary)] text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${corpHeroBg})` }}></div>
        <div className="absolute inset-0 bg-primary/75 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Apresentações Corporativas Profissionais
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            Transforme suas ideias em slides visuais impactantes. 3 pacotes adaptados às suas necessidades e orçamento.
          </p>
        </div>
      </Section>

      {/* O que vamos fazer */}
      <Section>
        <div className="container mx-auto px-4">
          <SectionTitle>O que vamos fazer</SectionTitle>
          <div className="max-w-4xl mx-auto mt-12 grid gap-6">
            <Card className="p-6 flex items-start gap-4 hover:shadow-[var(--shadow-elegant)] transition-all">
              <div className="bg-[image:var(--gradient-primary)] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                <Palette className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Design Visual Impactante</h3>
                <p className="text-muted-foreground">
                  Transformar 11 slides em uma apresentação clara, bonita e fácil de entender.
                </p>
              </div>
            </Card>
            
            <Card className="p-6 flex items-start gap-4 hover:shadow-[var(--shadow-elegant)] transition-all">
              <div className="bg-[image:var(--gradient-secondary)] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Organização e Padronização</h3>
                <p className="text-muted-foreground">
                  Organizar as ideias, padronizar a aparência e destacar o que é mais importante.
                </p>
              </div>
            </Card>
            
            <Card className="p-6 flex items-start gap-4 hover:shadow-[var(--shadow-elegant)] transition-all">
              <div className="bg-accent w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Entrega Completa</h3>
                <p className="text-muted-foreground">
                  Entregar ficheiro .pptx editável + PDF, tudo pronto para usar.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Pacotes */}
      <Section id="pacotes" className="bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionTitle>Os Nossos Pacotes</SectionTitle>
          <SectionSubtitle>
            Escolha o pacote que melhor se adequa às necessidades da sua apresentação
          </SectionSubtitle>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <PackageCard
                key={index}
                name={pkg.name}
                subtitle={pkg.subtitle}
                slug={pkg.slug}
                price={pkg.price}
                description={pkg.description}
                features={pkg.features}
                extraSlide={pkg.extraSlide}
                recommended={pkg.recommended}
                bonus={pkg.bonus}
              />
            ))}
          </div>
        </div>
      </Section>

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
