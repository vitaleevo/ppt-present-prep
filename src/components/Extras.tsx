import { Section, SectionTitle } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Zap, Globe, FileText, Sparkles } from "lucide-react";

const extras = [
  {
    icon: Zap,
    title: "Entrega urgente (<48h)",
    price: "+40% sobre o total"
  },
  {
    icon: Globe,
    title: "Versão bilingue (PT/EN)",
    price: "+20% sobre o total"
  },
  {
    icon: FileText,
    title: "Template mestre reutilizável",
    price: "+Kz 300.000"
  },
  {
    icon: Sparkles,
    title: "Gráfico/ícone custom adicional",
    price: "+Kz 25.000 (cada)"
  }
];

export const Extras = () => {
  return (
    <Section>
      <div className="container mx-auto px-4">
        <SectionTitle>Extras Opcionais</SectionTitle>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-12">
          {extras.map((extra, index) => {
            const Icon = extra.icon;
            return (
              <Card 
                key={index} 
                className="p-6 text-center hover:shadow-[var(--shadow-elegant)] transition-all hover:-translate-y-1"
              >
                <div className="bg-[image:var(--gradient-secondary)] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-secondary-foreground" />
                </div>
                <h3 className="font-semibold mb-2 text-sm">{extra.title}</h3>
                <p className="text-primary font-bold text-lg">{extra.price}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
