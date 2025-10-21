import { Card, CardContent } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { PresentationPackage } from "@/data/presentationPackages";

interface PackageCostBreakdownProps {
  costBreakdown: PresentationPackage['costBreakdown'];
  whatYouSave: PresentationPackage['whatYouSave'];
  packagePrice: string;
}

export const PackageCostBreakdown = ({ costBreakdown, whatYouSave, packagePrice }: PackageCostBreakdownProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Transparência Total: O Que Está Incluído</h2>
            <p className="text-lg text-muted-foreground">
              Veja item por item o valor real que você recebe
            </p>
          </div>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="space-y-4">
                {costBreakdown.map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center justify-between py-3 border-b border-border/50 last:border-0 ${
                      !item.included ? 'font-bold text-lg pt-6' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {item.included ? (
                        <Check className="h-5 w-5 text-primary shrink-0" />
                      ) : (
                        <div className="h-5 w-5" />
                      )}
                      <span className={item.included ? '' : 'text-primary'}>
                        {item.item}
                      </span>
                    </div>
                    <span className={`font-semibold ${item.included ? '' : 'text-primary text-xl'}`}>
                      {item.estimatedMarketValue}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="pt-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-3">{whatYouSave.title}</h3>
                <p className="text-lg mb-4">{whatYouSave.description}</p>
                <div className="inline-flex items-center gap-4 bg-background/50 backdrop-blur-sm px-6 py-3 rounded-lg">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">Preço Individual</p>
                    <p className="text-2xl font-bold line-through text-muted-foreground">
                      {costBreakdown[costBreakdown.length - 1].estimatedMarketValue}
                    </p>
                  </div>
                  <div className="text-3xl font-bold text-primary">→</div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">Preço do Pacote</p>
                    <p className="text-3xl font-bold text-primary">{packagePrice}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm font-semibold text-primary">
                  ✨ {whatYouSave.comparison}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
