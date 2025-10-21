import { Section, SectionTitle } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Users, Clock } from "lucide-react";

const benefits = [
  {
    icon: CheckCircle2,
    title: "Clareza e Compreensão",
    description: "Ajuda quem assiste a entender rápido — menos texto confuso, mais clareza."
  },
  {
    icon: Users,
    title: "Profissionalismo",
    description: "Transmite profissionalismo da Associação diante de parceiros e investidores."
  },
  {
    icon: Clock,
    title: "Economia de Tempo",
    description: "Economiza tempo da equipa — já fica tudo alinhado e pronto para uso."
  }
];

export const WhyInvest = () => {
  return (
    <Section className="bg-accent/30">
      <div className="container mx-auto px-4">
        <SectionTitle>Por que investir numa boa apresentação?</SectionTitle>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index} 
                className="p-8 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1 border-2"
              >
                <div className="bg-[image:var(--gradient-primary)] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
