import { Section } from "@/components/ui/section";

const stats = [
  { value: "100+", label: "Projetos Entregues" },
  { value: "50+", label: "Clientes Satisfeitos" },
  { value: "8", label: "Serviços Especializados" },
  { value: "24/7", label: "Suporte Disponível" },
];

export const Stats = () => {
  return (
    <Section className="bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-[image:var(--gradient-primary)] mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
