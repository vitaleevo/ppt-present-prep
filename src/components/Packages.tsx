import { Section, SectionTitle, SectionSubtitle } from "@/components/ui/section";
import { PackageCard } from "./PackageCard";

const packages = [
  {
    name: "Essencial",
    subtitle: "Layout Clean",
    price: "Kz 212.000",
    description: "Ideal para reuniões internas e apresentações rápidas",
    features: [
      "Padronização visual completa",
      "Capa e slide de encerramento",
      "Tipografia e cores da marca",
      "Ajustes ligeiros de layout",
      "1 rodada de revisões",
      "Entrega: .pptx + PDF"
    ],
    extraSlide: "Kz 12.000/slide",
    recommended: false
  },
  {
    name: "Profissional",
    subtitle: "Redesign Pro",
    price: "Kz 450.000",
    description: "Ideal para empresas e associações",
    features: [
      "Redesign slide a slide",
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
    price: "Kz 920.000",
    description: "Ideal para pitch de patrocínio e lançamentos",
    features: [
      "Storytelling (refino dos textos)",
      "Infográficos custom",
      "Animações leves e transições",
      "3 rodadas de revisões",
      "Versões 16:9 e PDF impressão",
      "Máxima qualidade e impacto"
    ],
    extraSlide: "Kz 70.000/slide",
    recommended: false
  }
];

export const Packages = () => {
  return (
    <Section id="pacotes">
      <div className="container mx-auto px-4">
        <SectionTitle>Nossos Pacotes</SectionTitle>
        <SectionSubtitle>
          Transforme 11 slides em uma apresentação clara, bonita e fácil de entender
        </SectionSubtitle>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <PackageCard
              key={index}
              name={pkg.name}
              price={pkg.price}
              description={pkg.description}
              features={pkg.features}
              extraSlide={pkg.extraSlide}
              recommended={pkg.recommended}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};
