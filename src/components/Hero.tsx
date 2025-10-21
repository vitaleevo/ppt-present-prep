import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export const Hero = () => {
  const scrollToServicos = () => {
    document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
  };

  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );

  const slides = [heroSlide1, heroSlide2, heroSlide3, heroSlide4];

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Carousel Background */}
      <Carousel
        plugins={[plugin.current]}
        className="absolute inset-0"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="min-w-full">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-1000" 
                style={{ backgroundImage: `url(${slide})` }}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background/90 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <img 
            src={logo} 
            alt="Vitaleevo - Conectando Possibilidades através da Comunicação Visual" 
            className="w-48 h-48 md:w-64 md:h-64 object-contain animate-in fade-in zoom-in duration-700"
          />
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-[image:var(--gradient-primary)] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Conectando Possibilidades através da Comunicação Visual
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            Transformamos ideias em apresentações que inspiram, convencem e geram resultados. Design estratégico para empresas que querem comunicar com excelência em Angola.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-[image:var(--gradient-primary)] hover:opacity-90 transition-opacity shadow-[var(--shadow-elegant)]"
              onClick={scrollToServicos}
            >
              Ver Serviços
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-2 border-primary hover:bg-accent"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Falar Conosco
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
