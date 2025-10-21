import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { getIdentityVisualPackage } from "@/data/identityVisualData";
import { PackageFeatures } from "@/components/package/PackageFeatures";
import { PackageProcess } from "@/components/package/PackageProcess";
import { PackageValue } from "@/components/package/PackageValue";
import { PackagePainPoints } from "@/components/package/PackagePainPoints";
import { PackageTestimonials } from "@/components/package/PackageTestimonials";
import { PackageGuarantees } from "@/components/package/PackageGuarantees";
import { PackageFAQ } from "@/components/package/PackageFAQ";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Download, FileText, MessageCircle, Sparkles } from "lucide-react";

const IdentidadeVisual = () => {
  const navigate = useNavigate();
  const pkg = getIdentityVisualPackage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleWhatsApp = () => {
    const message = `Olá! Gostaria de solicitar o serviço de *Identidade Visual Completa* (${pkg.price}). Pode me dar mais informações?`;
    window.open(`https://wa.me/244935348327?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <Breadcrumbs
        items={[
          { label: "Serviços", href: "/servicos" },
          { label: "Design & Criativo", href: "/servicos/design-criativo" },
          { label: "Identidade Visual" }
        ]}
      />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/src/assets/corp-hero-bg.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 animate-fade-in">
              {pkg.name}
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-2">
              {pkg.subtitle}
            </p>
            
            <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8 italic px-2">
              {pkg.tagline}
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 md:p-6 inline-block mb-4 md:mb-6">
              <p className="text-xs md:text-sm text-gray-200 mb-1 md:mb-2">Investimento</p>
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2">{pkg.price}</p>
            </div>
            
            <p className="text-sm md:text-base lg:text-lg text-gray-200 max-w-2xl mx-auto px-4">
              {pkg.shortDescription}
            </p>
          </div>
        </div>
      </section>

      <PackageValue valueProposition={pkg.valueProposition} />

      <PackagePainPoints painPoints={pkg.painPoints} />

      {/* Overview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Visão Geral</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              {pkg.fullDescription.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            
            <Card className="mt-8">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-xl mb-4">Ideal para:</h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {pkg.idealFor.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary text-primary-foreground px-4 py-2">
                <Sparkles className="h-4 w-4 mr-2 inline" />
                Diferencial Competitivo
              </Badge>
              <h2 className="text-4xl font-bold mb-4">{pkg.whatYouGet.title}</h2>
              <p className="text-lg text-muted-foreground">
                {pkg.whatYouGet.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {pkg.whatYouGet.items.map((item, index) => (
                <Card key={index} className="hover:shadow-[var(--shadow-elegant)] transition-all">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-5 w-5 text-primary" />
                      </div>
                      <p className="text-sm leading-relaxed">{item}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PackageFeatures features={pkg.features} />

      <PackageProcess process={pkg.process} estimatedDays={pkg.estimatedDays} />

      {/* Deliverables & Technical Details */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Download className="h-6 w-6 text-primary" />
                    <h3 className="font-semibold text-xl">O Que Você Recebe</h3>
                  </div>
                  <ul className="space-y-2">
                    {pkg.deliverables.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <FileText className="h-6 w-6 text-primary" />
                    <h3 className="font-semibold text-xl">Detalhes Técnicos</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold mb-2">Formatos de Entrega:</p>
                      <ul className="space-y-1 ml-4">
                        {pkg.technicalDetails.formats.map((format, index) => (
                          <li key={index} className="text-sm text-muted-foreground">• {format}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Manual de Marca:</p>
                      <p className="text-sm text-muted-foreground ml-4">{pkg.technicalDetails.manualPages}</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Assets Incluídos:</p>
                      <ul className="space-y-1 ml-4">
                        {pkg.technicalDetails.assetsIncluded.map((asset, index) => (
                          <li key={index} className="text-sm text-muted-foreground">• {asset}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <PackageTestimonials testimonials={pkg.testimonials} />

      <PackageGuarantees guarantees={pkg.guarantees} />

      {/* Use Cases */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Exemplos de Uso</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {pkg.useCases.map((useCase, index) => (
                <Card key={index} className="hover-scale">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0">
                        {index + 1}
                      </div>
                      <p>{useCase}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PackageFAQ faq={pkg.faq} packageName={pkg.name} />

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Pronto para Construir uma Marca Forte?</h2>
            <p className="text-xl mb-2 opacity-90">
              Invista em {pkg.name}
            </p>
            <p className="text-5xl font-bold mb-8">{pkg.price}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                onClick={handleWhatsApp}
                className="text-lg px-8"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Solicitar via WhatsApp
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/contactos")}
                className="text-lg px-8 bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                Formulário de Contacto
              </Button>
            </div>
            <p className="mt-6 text-sm opacity-75">
              Prazo de entrega: {pkg.estimatedDays} • {pkg.revisions} rodadas de revisões • Suporte pós-entrega incluído
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default IdentidadeVisual;
