import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Section } from "@/components/ui/section";

interface CallToActionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonAction?: () => void;
  secondaryButtonText?: string;
  secondaryButtonAction?: () => void;
}

export const CallToAction = ({
  title = "Pronto para Começar?",
  description = "Entre em contacto connosco e descubra como podemos ajudar o seu negócio a crescer",
  primaryButtonText = "Falar no WhatsApp",
  primaryButtonAction,
  secondaryButtonText = "Ver Serviços",
  secondaryButtonAction,
}: CallToActionProps) => {
  const handlePrimaryClick = () => {
    if (primaryButtonAction) {
      primaryButtonAction();
    } else {
      window.open("https://wa.me/244935348327", "_blank");
    }
  };

  const handleSecondaryClick = () => {
    if (secondaryButtonAction) {
      secondaryButtonAction();
    } else {
      window.location.href = "/servicos";
    }
  };

  return (
    <Section className="bg-[image:var(--gradient-primary)]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 px-2">
            {title}
          </h2>
          <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 opacity-90 px-2">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <Button
              onClick={handlePrimaryClick}
              size="lg"
              variant="secondary"
              className="gap-2 w-full sm:w-auto text-sm md:text-base"
            >
              <MessageCircle className="h-4 w-4 md:h-5 md:w-5" />
              {primaryButtonText}
            </Button>
            <Button
              onClick={handleSecondaryClick}
              size="lg"
              variant="outline"
              className="gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20 w-full sm:w-auto text-sm md:text-base"
            >
              {secondaryButtonText}
              <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};
