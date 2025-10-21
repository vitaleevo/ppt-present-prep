import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PresentationPackage } from "@/data/presentationPackages";

interface PackageFAQProps {
  faq: PresentationPackage['faq'];
  packageName: string;
}

export const PackageFAQ = ({ faq, packageName }: PackageFAQProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Perguntas Frequentes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Respostas sobre o Pacote {packageName}
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faq.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
