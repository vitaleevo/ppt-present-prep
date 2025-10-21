import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PresentationPackage, presentationPackages } from "@/data/presentationPackages";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface PackageComparisonProps {
  currentPackage: PresentationPackage;
}

export const PackageComparison = ({ currentPackage }: PackageComparisonProps) => {
  const navigate = useNavigate();
  
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Compare com Outros Pacotes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja como o Pacote {currentPackage.name} se compara às outras opções
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-green-600 flex items-center gap-2">
                <Check className="h-5 w-5" />
                Vantagens deste Pacote
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {currentPackage.comparison.advantages.map((advantage, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span>{advantage}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-amber-600 flex items-center gap-2">
                <X className="h-5 w-5" />
                Limitações deste Pacote
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {currentPackage.comparison.limitations.map((limitation, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <X className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                    <span>{limitation}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6">Explore Outros Pacotes</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {presentationPackages
              .filter(pkg => pkg.id !== currentPackage.id)
              .map(pkg => (
                <Button
                  key={pkg.id}
                  variant={pkg.recommended ? "default" : "outline"}
                  size="lg"
                  onClick={() => navigate(`/servicos/apresentacoes-corporativas/${pkg.slug}`)}
                >
                  {pkg.recommended && "⭐ "}
                  Ver Pacote {pkg.name}
                </Button>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
