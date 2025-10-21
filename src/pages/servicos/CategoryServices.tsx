import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Section, SectionTitle } from "@/components/ui/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CallToAction } from "@/components/shared/CallToAction";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { getCategoryBySlug } from "@/data/servicesData";
import { ArrowRight } from "lucide-react";

const CategoryServices = () => {
  const { categorySlug } = useParams();
  const category = getCategoryBySlug(categorySlug || "");

  if (!category) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <Section>
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Categoria não encontrada</h1>
            <Button asChild>
              <Link to="/servicos">Voltar aos Serviços</Link>
            </Button>
          </div>
        </Section>
        <Footer />
      </div>
    );
  }

  const Icon = category.icon;

  return (
    <div className="min-h-screen">
      <Navbar />
      <Breadcrumbs items={[
        { label: "Serviços", href: "/servicos" },
        { label: category.category }
      ]} />
      
      <Section className="bg-[image:var(--gradient-primary)]">
        <div className="container mx-auto px-4 text-center text-white">
          <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
            <Icon className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {category.category}
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            {category.description}
          </p>
        </div>
      </Section>

      <Section>
        <div className="container mx-auto px-4">
          <SectionTitle>Nossos Serviços de {category.category}</SectionTitle>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {category.services.map((service) => (
              <Card key={service.slug} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">{service.name}</CardTitle>
                      <div className="text-2xl font-bold bg-clip-text text-transparent bg-[image:var(--gradient-primary)]">
                        {service.price}
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {service.shortDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    <p className="font-semibold text-sm">Inclui:</p>
                    {service.features.slice(0, 5).map((feature, idx) => (
                      <div key={idx} className="flex items-start text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2 mt-1.5 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 5 && (
                      <p className="text-sm text-muted-foreground">
                        +{service.features.length - 5} funcionalidades
                      </p>
                    )}
                  </div>
                  <Button asChild className="w-full gap-2">
                    <Link to={`/servicos/${categorySlug}/${service.slug}`}>
                      Ver Detalhes Completos
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <CallToAction />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CategoryServices;
