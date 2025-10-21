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
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Megaphone, Palette, Globe, Shield, Zap } from "lucide-react";

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaAction?: () => void;
  backgroundImage: string;
  icon: React.ReactNode;
  highlights: string[];
}

export const Hero = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const plugin = useRef(
    Autoplay({ delay: 7000, stopOnInteraction: true })
  );

  const heroSlides: HeroSlide[] = [
    {
      id: 1,
      title: "Conectando Possibilidades",
      subtitle: "através da Comunicação Visual",
      description: "Transformamos ideias em apresentações que inspiram, convencem e geram resultados. Design estratégico para empresas que querem comunicar com excelência em Angola.",
      ctaText: "Ver Serviços",
      ctaLink: "#servicos",
      secondaryCtaText: "Falar Conosco",
      secondaryCtaAction: () => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' }),
      backgroundImage: heroSlide1,
      icon: <Zap className="w-16 h-16" />,
      highlights: ["Design Estratégico", "Resultados Garantidos", "Excelência em Angola"]
    },
    {
      id: 2,
      title: "Impulsione seu Negócio Online",
      subtitle: "Marketing Digital que Gera Resultados",
      description: "Tráfego pago, gestão de redes sociais e estratégias digitais que transformam visibilidade em vendas. Alcance seu público-alvo com precisão.",
      ctaText: "Ver Marketing Digital",
      ctaLink: "/servicos/marketing-digital",
      backgroundImage: heroSlide2,
      icon: <Megaphone className="w-16 h-16" />,
      highlights: ["Tráfego Pago", "Redes Sociais", "Campanhas Estratégicas"]
    },
    {
      id: 3,
      title: "Design que Comunica Excelência",
      subtitle: "Criatividade & Identidade Visual",
      description: "De logotipos impactantes a apresentações corporativas sofisticadas. Criamos identidades visuais memoráveis que elevam sua marca.",
      ctaText: "Conhecer Portfólio",
      ctaLink: "/portfolio",
      secondaryCtaText: "Ver Serviços",
      secondaryCtaAction: () => navigate("/servicos/design-criativo"),
      backgroundImage: heroSlide3,
      icon: <Palette className="w-16 h-16" />,
      highlights: ["Identidade Visual", "Apresentações Corporativas", "Design Profissional"]
    },
    {
      id: 4,
      title: "Presença Digital Profissional",
      subtitle: "Web & Desenvolvimento",
      description: "Websites modernos, landing pages otimizadas e sistemas personalizados. Sua empresa online com tecnologia de ponta e design responsivo.",
      ctaText: "Criar Meu Site",
      ctaLink: "/servicos/web-desenvolvimento",
      backgroundImage: heroSlide4,
      icon: <Globe className="w-16 h-16" />,
      highlights: ["Sites Modernos", "Landing Pages", "Sistemas Personalizados"]
    },
    {
      id: 5,
      title: "Proteja Seu Patrimônio",
      subtitle: "Segurança & Biometria",
      description: "Sistemas de câmeras CCTV, biometria e controle de acesso. Tecnologia de ponta para garantir a segurança do seu negócio 24/7.",
      ctaText: "Solicitar Orçamento",
      ctaLink: "/servicos/seguranca-biometria",
      backgroundImage: heroSlide1,
      icon: <Shield className="w-16 h-16" />,
      highlights: ["CCTV Profissional", "Biometria", "Controle de Acesso"]
    }
  ];

  const handleCtaClick = (link: string) => {
    if (link.startsWith('#')) {
      document.getElementById(link.substring(1))?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(link);
    }
  };

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full absolute inset-0"
        opts={{
          loop: true,
        }}
        onMouseEnter={() => plugin.current.stop()}
        onMouseLeave={() => plugin.current.play()}
        setApi={(api) => {
          if (!api) return;
          api.on("select", () => {
            setCurrentSlide(api.selectedScrollSnap());
          });
        }}
      >
        <CarouselContent>
          {heroSlides.map((slide, index) => (
            <CarouselItem key={slide.id} className="min-w-full">
              <div className="relative min-h-[90vh] flex items-center justify-center">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-1000" 
                  style={{ backgroundImage: `url(${slide.backgroundImage})` }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/85 to-background/90 backdrop-blur-sm"></div>
                
                {/* Content */}
                <div className="container mx-auto px-4 relative z-10">
                  <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
                    {/* Icon or Logo */}
                    {index === 0 ? (
                      <img 
                        src={logo} 
                        alt="Vitaleevo" 
                        className="w-32 h-32 md:w-48 md:h-48 object-contain animate-in fade-in zoom-in duration-700"
                      />
                    ) : (
                      <div className="text-primary animate-in fade-in zoom-in duration-700">
                        {slide.icon}
                      </div>
                    )}
                    
                    {/* Title */}
                    <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-clip-text text-transparent bg-[image:var(--gradient-primary)] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 max-w-5xl">
                      {slide.title}
                    </h1>
                    
                    {/* Subtitle */}
                    <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground/90 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 max-w-4xl">
                      {slide.subtitle}
                    </p>
                    
                    {/* Description */}
                    <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                      {slide.description}
                    </p>
                    
                    {/* Highlights */}
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
                      {slide.highlights.map((highlight, idx) => (
                        <div 
                          key={idx}
                          className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm md:text-base text-foreground/80 backdrop-blur-sm"
                        >
                          {highlight}
                        </div>
                      ))}
                    </div>
                    
                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
                      <Button 
                        size="lg" 
                        className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 bg-[image:var(--gradient-primary)] hover:opacity-90 transition-opacity shadow-[var(--shadow-elegant)]"
                        onClick={() => handleCtaClick(slide.ctaLink)}
                      >
                        {slide.ctaText}
                      </Button>
                      {slide.secondaryCtaText && (
                        <Button 
                          size="lg" 
                          variant="outline" 
                          className="text-base md:text-lg px-6 md:px-8 py-5 md:py-6 border-2 border-primary hover:bg-accent"
                          onClick={slide.secondaryCtaAction}
                        >
                          {slide.secondaryCtaText}
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation Arrows */}
        <CarouselPrevious className="left-4 md:left-8 bg-background/50 backdrop-blur-sm hover:bg-background/80 border-primary/20" />
        <CarouselNext className="right-4 md:right-8 bg-background/50 backdrop-blur-sm hover:bg-background/80 border-primary/20" />
      </Carousel>
      
      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-primary w-8 md:w-12' 
                : 'bg-primary/30 hover:bg-primary/50'
            }`}
            onClick={() => {
              const api = plugin.current;
              if (api) {
                // Note: We'd need to access carousel API to scroll to specific slide
                // For now, this is a visual indicator
              }
            }}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
