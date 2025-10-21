import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, TrendingUp } from "lucide-react";
import { PresentationPackage } from "@/data/presentationPackages";

interface PackageTestimonialsProps {
  testimonials: PresentationPackage['testimonials'];
}

export const PackageTestimonials = ({ testimonials }: PackageTestimonialsProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Resultados Reais de Clientes Reais</h2>
            <p className="text-lg text-muted-foreground">
              Veja como este pacote transformou a comunicação de outras empresas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative hover:shadow-[var(--shadow-elegant)] transition-all">
                <CardContent className="pt-8">
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />
                  <p className="text-base mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold text-lg">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20 flex items-center gap-1 shrink-0">
                      <TrendingUp className="h-3 w-3" />
                      <span className="text-xs font-semibold">Resultado</span>
                    </Badge>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm font-semibold text-primary">
                      📈 {testimonial.result}
                    </p>
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
