import { Section, SectionTitle } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import nextStepsBg from "@/assets/next-steps-bg.jpg";

const steps = [
  "Escolha o pacote que faz mais sentido para a vossa apresentação",
  "Envie o logo, cores da marca e o conteúdo (textos e números)",
  "Marcamos uma conversa rápida e começamos o trabalho"
];

export const NextSteps = () => {
  return (
    <Section className="relative bg-[image:var(--gradient-hero)] text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${nextStepsBg})` }}></div>
      <div className="absolute inset-0 bg-primary/75 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle className="text-primary-foreground">Próximos Passos</SectionTitle>
        
        <Card className="max-w-3xl mx-auto mt-12 p-8 bg-background/95 backdrop-blur">
          <ol className="space-y-6">
            {steps.map((step, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="bg-[image:var(--gradient-primary)] text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-1">
                  {index + 1}
                </div>
                <p className="text-lg pt-1">{step}</p>
              </li>
            ))}
          </ol>
          
          <div className="text-center mt-8">
            <Button 
              size="lg" 
              className="bg-[image:var(--gradient-primary)] hover:opacity-90 text-lg px-8"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Começar Agora <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </Card>
      </div>
    </Section>
  );
};
