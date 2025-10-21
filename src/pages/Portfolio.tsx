import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Section, SectionTitle } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CallToAction } from "@/components/shared/CallToAction";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { portfolioData, categories } from "@/data/portfolioData";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = selectedCategory === "all" 
    ? portfolioData 
    : portfolioData.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Breadcrumbs items={[{ label: "Portfolio" }]} />
      
      <Section>
        <div className="container mx-auto px-4">
          <SectionTitle>Nosso Portfolio</SectionTitle>
          <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            Conheça alguns dos projetos que desenvolvemos para nossos clientes
          </p>

          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.value)}
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Grid de Projetos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="pt-4">
                  <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {project.client && (
                    <div className="text-xs text-muted-foreground">
                      Cliente: {project.client} • {project.year}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Nenhum projeto encontrado nesta categoria.
              </p>
            </div>
          )}
        </div>
      </Section>

      <CallToAction 
        title="Quer Ver o Seu Projeto Aqui?"
        description="Entre em contacto e vamos criar algo incrível juntos"
      />
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Portfolio;
