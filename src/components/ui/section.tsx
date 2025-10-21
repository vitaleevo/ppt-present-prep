import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className, id }: SectionProps) => {
  return (
    <section id={id} className={cn("py-8 md:py-16 lg:py-24", className)}>
      {children}
    </section>
  );
};

export const SectionTitle = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <h2 className={cn("text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 md:mb-4 px-4", className)}>
      {children}
    </h2>
  );
};

export const SectionSubtitle = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <p className={cn("text-base md:text-lg lg:text-xl text-muted-foreground text-center mb-8 md:mb-12 max-w-3xl mx-auto px-4", className)}>
      {children}
    </p>
  );
};
