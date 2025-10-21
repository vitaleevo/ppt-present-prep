import { Badge } from "@/components/ui/badge";
import { PresentationPackage } from "@/data/presentationPackages";

interface PackageHeroProps {
  package: PresentationPackage;
}

export const PackageHero = ({ package: pkg }: PackageHeroProps) => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/src/assets/corp-hero-bg.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {pkg.recommended && (
            <Badge className="mb-4 bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold">
              ⭐ Recomendado
            </Badge>
          )}
          
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            Pacote {pkg.name}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-2">
            {pkg.subtitle}
          </p>
          
          <p className="text-lg text-gray-300 mb-8 italic">
            {pkg.tagline}
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 inline-block mb-6">
            <p className="text-sm text-gray-200 mb-2">Investimento</p>
            <p className="text-5xl font-bold mb-2">{pkg.price}</p>
            <p className="text-sm text-gray-300">
              Slide extra: {pkg.extraSlidePrice}/slide
            </p>
          </div>
          
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            {pkg.shortDescription}
          </p>
        </div>
      </div>
    </section>
  );
};
