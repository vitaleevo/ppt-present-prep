import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { getPackageBySlug } from "@/data/presentationPackages";
import { PackageHero } from "@/components/package/PackageHero";
import { PackageFeatures } from "@/components/package/PackageFeatures";
import { PackageProcess } from "@/components/package/PackageProcess";
import { PackageComparison } from "@/components/package/PackageComparison";
import { PackageFAQ } from "@/components/package/PackageFAQ";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Download, FileText, MessageCircle, Gift } from "lucide-react";

const PackageDetail = () => {
  const { packageSlug } = useParams<{ packageSlug: string }>();
  const navigate = useNavigate();
  const pkg = getPackageBySlug(packageSlug || "");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [packageSlug]);

  if (!pkg) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Pacote não encontrado</h1>
            <Button onClick={() => navigate("/servicos/apresentacoes-corporativas")}>
              Voltar aos Pacotes
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleWhatsApp = () => {
    const message = `Olá! Gostaria de solicitar o *Pacote ${pkg.name}* (${pkg.price}) para apresentações corporativas. Pode me dar mais informações?`;
    window.open(`https://wa.me/244935348327?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <Breadcrumbs
        items={[
          { label: "Serviços", href: "/servicos" },
          { label: "Design & Criativo", href: "/servicos/design-criativo" },
          { label: "Apresentações Corporativas", href: "/servicos/apresentacoes-corporativas" },
          { label: pkg.name }
        ]}
      />

      <PackageHero package={pkg} />

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
                        <span>{item}</span>
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
                      <p className="font-semibold mb-2">Proporção:</p>
                      <p className="text-sm text-muted-foreground ml-4">{pkg.technicalDetails.aspectRatio}</p>
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

      {/* Bonus Section - Only for Impacto */}
      {pkg.bonus && (
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="pt-8">
                  <div className="text-center mb-6">
                    <Badge className="mb-4 bg-primary text-primary-foreground px-4 py-2">
                      <Gift className="h-4 w-4 mr-2 inline" />
                      Bónus Exclusivo
                    </Badge>
                    <h2 className="text-3xl font-bold mb-2">{pkg.bonus.title}</h2>
                    <p className="text-lg text-muted-foreground">{pkg.bonus.value}</p>
                  </div>
                  <p className="text-center text-lg max-w-2xl mx-auto">
                    {pkg.bonus.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      <PackageComparison currentPackage={pkg} />

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
            <h2 className="text-4xl font-bold mb-4">Pronto para Começar?</h2>
            <p className="text-xl mb-2 opacity-90">
              Invista no Pacote {pkg.name}
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
              Prazo de entrega: {pkg.estimatedDays} • {pkg.revisions} {pkg.revisions === 1 ? "rodada" : "rodadas"} de revisões
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PackageDetail;
