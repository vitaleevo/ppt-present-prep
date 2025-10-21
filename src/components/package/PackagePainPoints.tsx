import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { PresentationPackage } from "@/data/presentationPackages";

interface PackagePainPointsProps {
  painPoints: PresentationPackage['painPoints'];
}

export const PackagePainPoints = ({ painPoints }: PackagePainPointsProps) => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{painPoints.title}</h2>
            <p className="text-lg text-muted-foreground">
              Reconhece algum destes desafios? Nós temos a solução.
            </p>
          </div>

          <div className="grid gap-6">
            {painPoints.problems.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-[var(--shadow-elegant)] transition-all">
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <div className="bg-destructive/10 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <AlertCircle className="h-5 w-5 text-destructive" />
                      </div>
                      <div>
                        <p className="font-semibold text-destructive mb-2">Problema:</p>
                        <p className="text-muted-foreground">{item.problem}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 md:border-l md:pl-6">
                      <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-primary mb-2">Nossa Solução:</p>
                        <p className="text-foreground">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
