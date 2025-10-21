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
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handlePrimaryClick}
              size="lg"
              variant="secondary"
              className="gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              {primaryButtonText}
            </Button>
            <Button
              onClick={handleSecondaryClick}
              size="lg"
              variant="outline"
              className="gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20"
            >
              {secondaryButtonText}
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};
