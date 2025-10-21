import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Section, SectionTitle } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { getServiceBySlug, getCategoryBySlug } from "@/data/servicesData";
import { Check, Clock, MessageCircle, ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const ServiceDetail = () => {
  const { categorySlug, serviceSlug } = useParams();
  const service = getServiceBySlug(serviceSlug || "");
  const category = getCategoryBySlug(categorySlug || "");

  if (!service || !category) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <Section>
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Serviço não encontrado</h1>
            <Button asChild>
              <Link to="/servicos">Voltar aos Serviços</Link>
            </Button>
          </div>
        </Section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <Breadcrumbs items={[
        { label: "Serviços", href: "/servicos" },
        { label: category.category, href: `/servicos/${categorySlug}` },
        { label: service.name }
      ]} />
      
      {/* Hero */}
      <Section className="bg-[image:var(--gradient-primary)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {service.name}
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-3xl md:text-4xl font-bold">
                {service.price}
              </div>
              <Button 
                size="lg" 
                variant="secondary"
                className="gap-2"
                onClick={() => window.open("https://wa.me/244935348327", "_blank")}
              >
                <MessageCircle className="h-5 w-5" />
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* O que está incluído */}
      <Section>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle>O Que Está Incluído</SectionTitle>
            
            <div className="grid md:grid-cols-2 gap-4 mt-8">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 mt-8 p-4 bg-muted/50 rounded-lg">
              <Clock className="h-5 w-5 text-primary flex-shrink-0" />
              <div>
                <p className="font-semibold">Prazo de Entrega</p>
                <p className="text-sm text-muted-foreground">{service.deliveryTime}</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Por que escolher */}
      <Section className="bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle>Por Que Escolher Este Serviço?</SectionTitle>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {service.whyChoose.map((reason, idx) => (
                <Card key={idx}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">{idx + 1}</span>
                      </div>
                      <p className="text-muted-foreground">{reason}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Justificativa de preço */}
      <Section>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle>Por Que Este Investimento Vale a Pena?</SectionTitle>
            
            <Card className="mt-8">
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed">
                  {service.whyThisPrice}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Processo de trabalho */}
      <Section className="bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <SectionTitle>Como Trabalhamos</SectionTitle>
            
            <div className="space-y-6 mt-8">
              {service.process.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-[image:var(--gradient-primary)] text-white flex items-center justify-center flex-shrink-0 font-bold">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold mb-1">Etapa {idx + 1}</p>
                    <p className="text-muted-foreground">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTAs Finais */}
      <Section>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-[image:var(--gradient-primary)] text-white border-0">
              <CardContent className="pt-8 text-center">
                <h2 className="text-3xl font-bold mb-4">
                  Pronto para Começar?
                </h2>
                <p className="text-lg opacity-90 mb-8">
                  Entre em contacto agora e transforme o seu projeto em realidade
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    variant="secondary"
                    className="gap-2"
                    onClick={() => window.open("https://wa.me/244935348327", "_blank")}
                  >
                    <MessageCircle className="h-5 w-5" />
                    Falar no WhatsApp
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20"
                    asChild
                  >
                    <Link to="/contactos">
                      Ver Outros Contactos
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Separator className="my-12" />

            {/* Outros serviços */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">
                Outros Serviços de {category.category}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {category.services
                  .filter(s => s.slug !== service.slug)
                  .slice(0, 2)
                  .map(relatedService => (
                    <Card key={relatedService.slug} className="hover:shadow-lg transition-shadow">
                      <CardContent className="pt-6">
                        <h4 className="font-bold text-lg mb-2">{relatedService.name}</h4>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {relatedService.shortDescription}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-primary">{relatedService.price}</span>
                          <Button asChild variant="ghost" size="sm" className="gap-2">
                            <Link to={`/servicos/${categorySlug}/${relatedService.slug}`}>
                              Ver Detalhes
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServiceDetail;
