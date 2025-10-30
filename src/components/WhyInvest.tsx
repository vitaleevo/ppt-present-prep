import { Section, SectionTitle } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Users, Clock } from "lucide-react";
import whyInvestBg from "@/assets/why-invest-bg.jpg";

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
    <Section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${whyInvestBg})` }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle>Por que ter slides bem feitos?</SectionTitle>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index} 
                className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg rounded-2xl bg-card"
              >
                <div className="bg-primary w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
