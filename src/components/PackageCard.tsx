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
        "relative p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0 bg-card shadow-lg rounded-2xl",
        recommended && "ring-2 ring-primary shadow-2xl"
      )}
    >
      {recommended && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-5 py-1.5 rounded-full text-xs font-semibold shadow-md">
          Recomendado
        </div>
      )}
      
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-1">{name}</h3>
        <p className="text-muted-foreground text-sm mb-6">{description}</p>
        <div className="text-4xl font-bold text-foreground mb-1">
          {price}
        </div>
        <div className="text-sm text-muted-foreground">
          Slide extra: <span className="font-semibold text-foreground">{extraSlide}</span>
        </div>
      </div>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-sm text-foreground/90">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        className={cn(
          "w-full rounded-xl font-semibold shadow-md hover:shadow-lg transition-all",
          recommended && "bg-primary hover:bg-primary/90"
        )}
        size="lg"
        variant={recommended ? "default" : "secondary"}
      >
        Escolher Pacote
      </Button>
    </Card>
  );
};
