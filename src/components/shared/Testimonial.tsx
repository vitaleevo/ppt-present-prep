import { Card, CardContent } from "@/components/ui/card";
import { Section, SectionTitle } from "@/components/ui/section";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "A Vitaleevo transformou nossa apresentação em uma ferramenta de vendas. Fechamos 3 novos contratos logo após usar o material criado por eles!",
    author: "Carlos Mendes",
    role: "Diretor Comercial",
    company: "Empresa de Tecnologia"
  },
  {
    quote: "O profissionalismo deles é impressionante. Nossa apresentação para investidores ficou tão boa que conseguimos o financiamento que precisávamos.",
    author: "Ana Ferreira",
    role: "CEO & Fundadora",
    company: "Startup de Saúde"
  },
  {
    quote: "Finalmente uma equipa que entende que apresentações não são só bonitas, mas precisam comunicar e converter. O resultado superou todas as expectativas!",
    author: "João Santos",
    role: "Gestor de Marketing",
    company: "Agência Digital"
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
