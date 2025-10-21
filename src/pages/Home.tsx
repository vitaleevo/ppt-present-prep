import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/Footer";
import { Section, SectionTitle } from "@/components/ui/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/data/servicesData";
import { Stats } from "@/components/shared/Stats";
import { Testimonial } from "@/components/shared/Testimonial";
import { CallToAction } from "@/components/shared/CallToAction";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      <Section>
        <div className="container mx-auto px-4">
          <SectionTitle>Nossos Serviços</SectionTitle>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Soluções completas para transformar a presença digital e física do seu negócio
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((category) => {
              const Icon = category.icon;
              return (
                <Card key={category.slug} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{category.category}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="ghost" className="gap-2">
                      <Link to={`/servicos/${category.slug}`}>
                        Ver Serviços
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

      <Stats />
      <Testimonial />
      <CallToAction />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Home;
