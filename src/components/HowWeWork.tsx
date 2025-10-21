import { Section, SectionTitle } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import howWeWorkBg from "@/assets/how-we-work-bg.jpg";

const steps = [
  {
    number: "01",
    title: "Briefing rápido",
    description: "Alinhamos objetivos e recolhemos materiais"
  },
  {
    number: "02",
    title: "Design",
    description: "Criamos os slides de acordo com o pacote escolhido"
  },
  {
    number: "03",
    title: "Revisões",
    description: "Aplicamos as alterações (conforme o pacote)"
  },
  {
    number: "04",
    title: "Entrega final",
    description: ".pptx editável + PDF, tudo organizado"
  }
];

export const HowWeWork = () => {
  return (
    <Section className="relative bg-accent/20 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${howWeWorkBg})` }}></div>
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle>Como Trabalhamos</SectionTitle>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-12">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="p-6 relative overflow-hidden group hover:shadow-[var(--shadow-elegant)] transition-all"
            >
              <div className="absolute top-0 right-0 text-8xl font-bold opacity-5 text-primary -mr-4 -mt-4 group-hover:opacity-10 transition-opacity">
                {step.number}
              </div>
              <div className="relative z-10">
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-[image:var(--gradient-primary)] mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};
