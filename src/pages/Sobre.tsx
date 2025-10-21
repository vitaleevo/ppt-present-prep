import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Section, SectionTitle } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { CallToAction } from "@/components/shared/CallToAction";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { Target, Eye, Heart, Award, Users, Zap } from "lucide-react";
import aboutHeroBg from "@/assets/about-hero-bg.jpg";

const Sobre = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Breadcrumbs items={[{ label: "Sobre" }]} />
      
      <Section className="relative bg-[image:var(--gradient-primary)] text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${aboutHeroBg})` }}></div>
        <div className="absolute inset-0 bg-primary/75 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre a Vitaleevo</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            Somos uma agência digital angolana especializada em transformar negócios através de soluções criativas, estratégicas e tecnológicas.
          </p>
        </div>
      </Section>

      <Section className="bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
              <p className="text-muted-foreground mb-4">
                A Vitaleevo nasceu da visão de democratizar o acesso a serviços digitais de qualidade em Angola. Começámos como uma pequena equipa apaixonada por design e tecnologia, e crescemos para nos tornarmos um parceiro estratégico de dezenas de empresas angolanas.
              </p>
              <p className="text-muted-foreground mb-4">
                Hoje, oferecemos uma gama completa de serviços que vão desde marketing digital e design criativo até desenvolvimento web e infraestrutura tecnológica. Cada projeto é tratado com dedicação e profissionalismo, porque acreditamos que o sucesso dos nossos clientes é o nosso sucesso.
              </p>
              <p className="text-muted-foreground">
                Trabalhamos com empresas de todos os tamanhos - desde startups empreendedoras até grandes corporações - sempre com o mesmo compromisso: entregar resultados que fazem a diferença.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100+</div>
                  <p className="text-sm text-muted-foreground">Projetos Entregues</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <p className="text-sm text-muted-foreground">Clientes Felizes</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">8</div>
                  <p className="text-sm text-muted-foreground">Áreas de Atuação</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <p className="text-sm text-muted-foreground">Suporte</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Missão</h3>
                <p className="text-muted-foreground">
                  Capacitar empresas angolanas com soluções digitais e criativas de excelência, impulsionando o seu crescimento e competitividade no mercado.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Visão</h3>
                <p className="text-muted-foreground">
                  Ser a agência digital de referência em Angola, reconhecida pela qualidade, inovação e resultados que entregamos aos nossos clientes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Valores</h3>
                <p className="text-muted-foreground">
                  Excelência, transparência, compromisso com resultados, inovação constante e foco total na satisfação do cliente.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Section className="bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionTitle>Nossos Diferenciais</SectionTitle>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card>
              <CardContent className="pt-6">
                <Award className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-bold mb-2">Qualidade Garantida</h3>
                <p className="text-sm text-muted-foreground">
                  Cada projeto passa por rigoroso controlo de qualidade antes da entrega. Nosso compromisso é com a excelência.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-bold mb-2">Equipa Especializada</h3>
                <p className="text-sm text-muted-foreground">
                  Profissionais experientes em cada área, sempre atualizados com as últimas tendências e tecnologias do mercado.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Zap className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-bold mb-2">Agilidade e Eficiência</h3>
                <p className="text-sm text-muted-foreground">
                  Processos otimizados que garantem entregas rápidas sem comprometer a qualidade. Seu tempo é valioso.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <CallToAction 
        title="Vamos Trabalhar Juntos?"
        description="Entre em contacto e descubra como a Vitaleevo pode transformar o seu negócio"
      />
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Sobre;
