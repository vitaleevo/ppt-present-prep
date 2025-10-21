import { Card, CardContent } from "@/components/ui/card";
import { 
  Palette, FileText, Type, Layout, RefreshCw, Download,
  Layers, BarChart3, Sparkles, FolderOpen, Package as PackageIcon,
  BookOpen, TrendingUp, CheckCheck, Monitor, Award, Globe
} from "lucide-react";
import { PresentationPackage } from "@/data/presentationPackages";

interface PackageFeaturesProps {
  features: PresentationPackage['features'];
}

const iconMap: Record<string, any> = {
  Palette, FileText, Type, Layout, RefreshCw, Download,
  Layers, BarChart3, Sparkles, FolderOpen, Package: PackageIcon,
  BookOpen, TrendingUp, CheckCheck, Monitor, Award, Globe
};

export const PackageFeatures = ({ features }: PackageFeaturesProps) => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">O Que Está Incluído</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tudo o que você precisa para uma apresentação de impacto
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Sparkles;
            
            return (
              <Card key={index} className="hover-scale">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
