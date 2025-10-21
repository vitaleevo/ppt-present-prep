import { Card, CardContent } from "@/components/ui/card";
import { PresentationPackage } from "@/data/presentationPackages";
import { ArrowRight, Clock } from "lucide-react";

interface PackageProcessProps {
  process: PresentationPackage['process'];
  estimatedDays: string;
}

export const PackageProcess = ({ process, estimatedDays }: PackageProcessProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Como Trabalhamos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Processo transparente e colaborativo para garantir resultados excepcionais
          </p>
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
            <Clock className="h-4 w-4" />
            <span className="font-semibold">Prazo estimado: {estimatedDays}</span>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {process.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex gap-6 mb-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shrink-0">
                    {step.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="w-0.5 h-full bg-primary/20 mt-2" />
                  )}
                </div>
                
                <Card className="flex-1 mb-4">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-xl">{step.title}</h3>
                      <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
              
              {index < process.length - 1 && (
                <div className="flex justify-center mb-4">
                  <ArrowRight className="h-5 w-5 text-primary/50" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
