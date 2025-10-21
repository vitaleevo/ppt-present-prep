import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Section, SectionTitle } from "@/components/ui/section";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CallToAction } from "@/components/shared/CallToAction";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { blogPosts, blogCategories } from "@/data/blogData";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import blogHeroBg from "@/assets/blog-hero-bg.jpg";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredPosts = selectedCategory === "Todos"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Breadcrumbs items={[{ label: "Blog" }]} />
      
      <Section className="relative bg-[image:var(--gradient-primary)] text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${blogHeroBg})` }}></div>
        <div className="absolute inset-0 bg-primary/75 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog Vitaleevo</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            Dicas, tendências e insights sobre marketing digital, design, tecnologia e negócios
          </p>
        </div>
      </Section>

      <Section>
        <div className="container mx-auto px-4">
          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {blogCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Grid de Artigos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString('pt-PT', { 
                        day: '2-digit', 
                        month: 'long', 
                        year: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <Badge variant="secondary" className="w-fit mb-2">
                    {post.category}
                  </Badge>
                  <h3 className="font-bold text-lg line-clamp-2 mb-2">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <Button asChild variant="ghost" className="gap-2 px-0">
                    <Link to={`/blog/${post.slug}`}>
                      Ler Artigo
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Nenhum artigo encontrado nesta categoria.
              </p>
            </div>
          )}
        </div>
      </Section>

      <CallToAction 
        title="Quer Estar Sempre Atualizado?"
        description="Siga-nos nas redes sociais e não perca nenhuma dica valiosa"
      />
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;
