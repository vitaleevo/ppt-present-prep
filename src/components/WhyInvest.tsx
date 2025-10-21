import { Section, SectionTitle } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Users, Clock } from "lucide-react";

const benefits = [
  {
    icon: CheckCircle2,
    title: "Clareza na Comunicação",
    description: "Quem assiste entende melhor e mais rápido. Sem confusão, direto ao ponto."
  },
  {
    icon: Users,
    title: "Imagem Profissional",
    description: "Passa uma boa imagem para parceiros, clientes e investidores."
  },
  {
    icon: Clock,
    title: "Poupa Tempo",
    description: "A equipa não precisa de se preocupar com design — fica tudo pronto para usar."
  }
];

export const WhyInvest = () => {
  return (
    <Section className="bg-accent/30">
      <div className="container mx-auto px-4">
        <SectionTitle>Por que ter slides bem feitos?</SectionTitle>
        
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
