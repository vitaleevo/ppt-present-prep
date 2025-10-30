import { Badge } from "@/components/ui/badge";
import { PresentationPackage } from "@/data/presentationPackages";

interface PackageHeroProps {
  package: PresentationPackage;
}

export const PackageHero = ({ package: pkg }: PackageHeroProps) => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-20">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/src/assets/corp-hero-bg.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-background/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 text-center">
            {pkg.recommended && (
              <Badge className="mb-4 bg-primary text-primary-foreground px-5 py-2 text-sm font-semibold rounded-full">
                ⭐ Recomendado
              </Badge>
            )}
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in text-foreground">
              Pacote {pkg.name}
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/80 mb-2 font-medium">
              {pkg.subtitle}
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 italic">
              {pkg.tagline}
            </p>
            
            <div className="bg-accent rounded-2xl p-8 inline-block mb-6 shadow-lg">
              <p className="text-sm text-muted-foreground mb-2 font-medium">Investimento</p>
              <p className="text-5xl font-bold mb-2 text-foreground">{pkg.price}</p>
              <p className="text-sm text-muted-foreground">
                Slide extra: <span className="font-semibold text-foreground">{pkg.extraSlidePrice}/slide</span>
              </p>
            </div>
            
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              {pkg.shortDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
