import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

export const Hero = () => {
  const scrollToPacotes = () => {
    document.getElementById('pacotes')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <img 
            src={logo} 
            alt="Vitaleevo Logo" 
            className="w-48 h-48 md:w-64 md:h-64 object-contain animate-in fade-in zoom-in duration-700"
          />
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-[image:var(--gradient-primary)] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Transforme Suas Apresentações
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            Pacotes de design profissional de slides para a Associação de Bebidas de Angola
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-[image:var(--gradient-primary)] hover:opacity-90 transition-opacity shadow-[var(--shadow-elegant)]"
              onClick={scrollToPacotes}
            >
              Ver Pacotes
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
