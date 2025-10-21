import { Section, SectionTitle } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Calendar, Wallet, AlertCircle } from "lucide-react";

const terms = [
  {
    icon: Calendar,
    title: "Prazos",
    description: "3–7 dias úteis (varia conforme o pacote e agenda)"
  },
  {
    icon: Wallet,
    title: "Pagamento",
    description: "50% no início e 50% na entrega (transferência/ref.)"
  },
  {
    icon: AlertCircle,
    title: "Alterações",
    description: "Alterações fora de escopo são orçadas à parte"
  }
];

export const Terms = () => {
  return (
    <Section>
      <div className="container mx-auto px-4">
        <SectionTitle>Prazos e Condições</SectionTitle>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
          {terms.map((term, index) => {
            const Icon = term.icon;
            return (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="bg-accent w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{term.title}</h3>
                <p className="text-sm text-muted-foreground">{term.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
