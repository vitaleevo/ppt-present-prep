import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Section, SectionTitle } from "@/components/ui/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CallToAction } from "@/components/shared/CallToAction";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { servicesData } from "@/data/servicesData";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Servicos = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Breadcrumbs items={[{ label: "Serviços" }]} />
      
      <Section>
        <div className="container mx-auto px-4">
          <SectionTitle>Nossos Serviços</SectionTitle>
          <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            Soluções completas para todas as necessidades do seu negócio. Da estratégia digital à infraestrutura física.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((category) => {
              const Icon = category.icon;
              return (
                <Card key={category.slug} className="hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardHeader>
                    <div className="h-14 w-14 rounded-lg bg-[image:var(--gradient-primary)] flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl">{category.category}</CardTitle>
                    <CardDescription className="text-base">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-6">
                      {category.services.slice(0, 3).map((service) => (
                        <div key={service.slug} className="flex items-center text-sm text-muted-foreground">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></div>
                          {service.name}
                        </div>
                      ))}
                      {category.services.length > 3 && (
                        <div className="text-sm text-muted-foreground">
                          +{category.services.length - 3} serviços
                        </div>
                      )}
                    </div>
                    <Button asChild className="w-full gap-2">
                      <Link to={`/servicos/${category.slug}`}>
                        Ver Todos os Serviços
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </Section>

      <Section className="bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Não Encontrou o que Procura?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Temos capacidade para desenvolver soluções personalizadas. Entre em contacto e vamos conversar sobre as necessidades específicas do seu projeto.
            </p>
            <Button size="lg" onClick={() => window.open("https://wa.me/244935348327", "_blank")}>
              Falar com Especialista
            </Button>
          </div>
        </div>
      </Section>

      <CallToAction />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Servicos;
