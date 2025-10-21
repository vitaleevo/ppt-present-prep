import { Card, CardContent } from "@/components/ui/card";
import { Shield, Check } from "lucide-react";
import { PresentationPackage } from "@/data/presentationPackages";

interface PackageGuaranteesProps {
  guarantees: PresentationPackage['guarantees'];
}

export const PackageGuarantees = ({ guarantees }: PackageGuaranteesProps) => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Garantias e Compromissos</h2>
            <p className="text-lg text-muted-foreground">
              Seu investimento está protegido. Estas são nossas promessas a você.
            </p>
          </div>

          <Card className="border-primary/20">
            <CardContent className="pt-8">
              <div className="grid md:grid-cols-2 gap-4">
                {guarantees.map((guarantee, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-background/50">
                    <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-sm font-medium leading-relaxed">{guarantee}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <p className="text-center text-sm text-muted-foreground mt-6">
            💼 Trabalhamos com contrato formal e nota fiscal para sua segurança
          </p>
        </div>
      </div>
    </section>
  );
};
