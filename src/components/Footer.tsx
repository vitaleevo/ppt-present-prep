import logo from "@/assets/logo.jpg";
import { Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contato" className="bg-muted/50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <img src={logo} alt="Vitaleevo" className="w-32 h-32 object-contain" />
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Conectando Possibilidades
            </p>
          </div>
          
          <div className="flex flex-col gap-4 text-center md:text-right">
            <h3 className="text-lg font-bold">Entre em Contato</h3>
            <div className="flex items-center gap-2 justify-center md:justify-end">
              <Mail className="w-5 h-5 text-primary" />
              <a href="mailto:contato@vitaleevo.ao" className="hover:text-primary transition-colors">
                contato@vitaleevo.ao
              </a>
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-end">
              <Phone className="w-5 h-5 text-primary" />
              <a href="tel:+244" className="hover:text-primary transition-colors">
                +244 XXX XXX XXX
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Vitaleevo Comércio e Serviços. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
