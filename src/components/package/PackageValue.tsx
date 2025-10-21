import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Clock, TrendingUp, CheckCircle2 } from "lucide-react";
import { PresentationPackage } from "@/data/presentationPackages";

interface PackageValueProps {
  valueProposition: PresentationPackage['valueProposition'];
}

export const PackageValue = ({ valueProposition }: PackageValueProps) => {
  const iconMap: { [key: string]: any } = {
    "Economia de Tempo": Clock,
    "Impressão Profissional": TrendingUp,
    "Reutilização": CheckCircle2,
    "Entrega Rápida": Clock,
  };

  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary text-primary-foreground px-4 py-2">
              <DollarSign className="h-4 w-4 mr-2 inline" />
              Justificativa de Valor
            </Badge>
            <h2 className="text-4xl font-bold mb-4">{valueProposition.title}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Entenda exatamente o que você ganha com este investimento
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {valueProposition.items.map((item, index) => {
              const Icon = iconMap[item.label] || DollarSign;
              return (
                <Card key={index} className="hover:shadow-[var(--shadow-elegant)] transition-all">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-[image:var(--gradient-primary)] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-1">{item.label}</h3>
                        <p className="text-2xl font-bold text-primary mb-2">{item.value}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
