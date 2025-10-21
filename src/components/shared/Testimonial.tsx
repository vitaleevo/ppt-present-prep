import { Card, CardContent } from "@/components/ui/card";
import { Section, SectionTitle } from "@/components/ui/section";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "A Vitaleevo transformou completamente a nossa presença online. O site ficou perfeito e as vendas aumentaram significativamente.",
    author: "Carlos Silva",
    role: "CEO, TechStart Angola",
    company: "TechStart"
  },
  {
    quote: "Profissionais excepcionais! A apresentação que criaram para o nosso pitch de investimento foi decisiva para conseguirmos o financiamento.",
    author: "Ana Ferreira",
    role: "Fundadora, SaudePlus",
    company: "SaudePlus"
  },
  {
    quote: "A gestão de redes sociais da Vitaleevo triplicou o nosso engajamento. Finalmente temos uma presença digital consistente e profissional.",
    author: "João Santos",
    role: "Diretor de Marketing, ModaOnline",
    company: "ModaOnline AO"
  }
];

export const Testimonial = () => {
  return (
    <Section>
      <div className="container mx-auto px-4">
        <SectionTitle>O Que Dizem Nossos Clientes</SectionTitle>
        
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <CardContent className="pt-8">
                <Quote className="h-8 w-8 text-primary mb-4 opacity-50" />
                <p className="text-sm md:text-base mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};
