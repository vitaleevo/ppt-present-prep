import { Section, SectionTitle } from "@/components/ui/section";
import { Card } from "@/components/ui/card";

const comparisons = [
  {
    name: "Essencial",
    points: ["Rápido e direto", "Custo mais baixo", "Sem reescrever textos"]
  },
  {
    name: "Profissional",
    points: ["Redesign completo", "Infográficos simples", "Ótimo custo-benefício"]
  },
  {
    name: "Impacto",
    points: ["Storytelling + animações", "Máxima qualidade", "Impacto garantido"]
  }
];

export const Comparison = () => {
  return (
    <Section className="bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionTitle>Comparação Rápida</SectionTitle>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
          {comparisons.map((item, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-4 text-center bg-clip-text text-transparent bg-[image:var(--gradient-primary)]">
                {item.name}
              </h3>
              <ul className="space-y-3">
                {item.points.map((point, i) => (
                  <li key={i} className="text-center text-sm">
                    <span className="inline-block w-2 h-2 rounded-full bg-secondary mr-2"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};
