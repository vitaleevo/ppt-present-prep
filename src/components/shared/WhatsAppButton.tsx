import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhatsAppButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/244935348327", "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 h-12 w-12 md:h-14 md:w-14 rounded-full shadow-lg hover:scale-110 transition-transform z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white"
      aria-label="Contactar via WhatsApp"
    >
      <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
    </Button>
  );
};
