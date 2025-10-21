import logo from "@/assets/logo.png";
import { Mail, Phone, MapPin, Globe, Facebook, Instagram, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contato" className="bg-muted/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Coluna 1 - Identidade */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img src={logo} alt="Vitaleevo - Conectando Possibilidades" className="w-32 h-32 object-contain" />
            <div className="flex items-start gap-2 text-sm text-muted-foreground text-center md:text-left">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p>Rua da Dona Xepa</p>
                <p>Luanda, Angola</p>
              </div>
            </div>
          </div>
          
          {/* Coluna 2 - Contatos */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h3 className="text-lg font-bold">Entre em Contato</h3>
            
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <Mail className="w-5 h-5 text-primary flex-shrink-0" />
              <a 
                href="mailto:negociosvitaleevo@gmail.com" 
                className="hover:text-primary transition-colors text-sm break-all"
              >
                negociosvitaleevo@gmail.com
              </a>
            </div>
            
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 justify-center md:justify-start flex-wrap">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="tel:+244935348327" 
                  className="hover:text-primary transition-colors"
                >
                  +244 935 348 327
                </a>
                <a
                  href="https://wa.me/244935348327"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[#25D366] hover:opacity-80 transition-opacity"
                  aria-label="Falar conosco no WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-xs">(WhatsApp)</span>
                </a>
              </div>
              
              <div className="flex items-center gap-2 justify-center md:justify-start flex-wrap">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="tel:+244959822513" 
                  className="hover:text-primary transition-colors"
                >
                  +244 959 822 513
                </a>
                <a
                  href="https://wa.me/244959822513"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[#25D366] hover:opacity-80 transition-opacity"
                  aria-label="Falar conosco no WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-xs">(WhatsApp)</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Coluna 3 - Online */}
          <div className="flex flex-col gap-4 text-center md:text-right">
            <h3 className="text-lg font-bold">Encontre-nos Online</h3>
            
            <div className="flex items-center gap-2 justify-center md:justify-end">
              <Globe className="w-5 h-5 text-primary" />
              <a 
                href="https://vitaleevo.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                vitaleevo.com
              </a>
            </div>
            
            <div className="flex items-center gap-2 justify-center md:justify-end">
              <Facebook className="w-5 h-5 text-primary" />
              <a 
                href="https://www.facebook.com/vitaleevo" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Visite nossa página no Facebook"
              >
                Facebook
              </a>
            </div>
            
            <div className="flex items-center gap-2 justify-center md:justify-end">
              <Instagram className="w-5 h-5 text-primary" />
              <a 
                href="https://www.instagram.com/vitaleevo/" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Visite nosso perfil no Instagram"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
            <a href="/politica-privacidade" className="hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <span className="hidden md:inline">•</span>
            <a href="/termos-uso" className="hover:text-primary transition-colors">
              Termos e Condições
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} Vitaleevo Comércio e Serviços. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
