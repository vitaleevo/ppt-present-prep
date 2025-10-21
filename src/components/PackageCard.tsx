import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PackageCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  extraSlide: string;
  recommended?: boolean;
}

export const PackageCard = ({ 
  name, 
  price, 
  description, 
  features, 
  extraSlide,
  recommended = false 
}: PackageCardProps) => {
  return (
    <Card 
      className={cn(
        "relative p-8 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-2",
        recommended && "border-primary border-2 shadow-[var(--shadow-elegant)]"
      )}
    >
      {recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[image:var(--gradient-secondary)] text-secondary-foreground px-6 py-1 rounded-full text-sm font-semibold">
          Recomendado
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <div className="text-4xl font-bold bg-clip-text text-transparent bg-[image:var(--gradient-primary)]">
          {price}
        </div>
      </div>
      
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="text-center text-sm text-muted-foreground mb-6">
        Slide extra: <span className="font-semibold text-foreground">{extraSlide}</span>
      </div>
      
      <Button 
        className={cn(
          "w-full",
          recommended 
            ? "bg-[image:var(--gradient-primary)] hover:opacity-90" 
            : "bg-[image:var(--gradient-secondary)] hover:opacity-90"
        )}
        size="lg"
      >
        Escolher Pacote
      </Button>
    </Card>
  );
};
