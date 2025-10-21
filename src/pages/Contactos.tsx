import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Section, SectionTitle } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, MessageCircle, Globe, Facebook, Instagram } from "lucide-react";

const Contactos = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    // Criar mensagem para WhatsApp
    const whatsappMessage = `*Nova mensagem do site*\n\n*Nome:* ${formData.name}\n*Email:* ${formData.email}\n*Telefone:* ${formData.phone || 'Não informado'}\n*Assunto:* ${formData.subject || 'Não especificado'}\n\n*Mensagem:*\n${formData.message}`;
    
    const whatsappUrl = `https://wa.me/244935348327?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será redirecionado para continuar a conversa no WhatsApp.",
    });

    // Limpar formulário
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Breadcrumbs items={[{ label: "Contactos" }]} />
      
      <Section>
        <div className="container mx-auto px-4">
          <SectionTitle>Entre em Contacto</SectionTitle>
          <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            Estamos prontos para ouvir suas ideias e transformá-las em realidade. Escolha a forma de contacto que preferir.
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulário */}
            <Card>
              <CardHeader>
                <CardTitle>Envie uma Mensagem</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nome Completo *</Label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Telefone</Label>
                    <Input 
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+244 XXX XXX XXX"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Assunto</Label>
                    <Input 
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Sobre o que quer falar?"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Conte-nos sobre o seu projeto..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full gap-2">
                    <MessageCircle className="h-4 w-4" />
                    Enviar via WhatsApp
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Informações de Contacto */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Informações de Contacto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Endereço</p>
                      <p className="text-sm text-muted-foreground">
                        Rua da Dona Xepa, Luanda, Angola
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a 
                        href="mailto:negociosvitaleevo@gmail.com"
                        className="text-sm text-primary hover:underline"
                      >
                        negociosvitaleevo@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Telefones</p>
                      <div className="space-y-1">
                        <a 
                          href="tel:+244935348327"
                          className="text-sm text-primary hover:underline block"
                        >
                          +244 935 348 327
                        </a>
                        <a 
                          href="tel:+244959822513"
                          className="text-sm text-primary hover:underline block"
                        >
                          +244 959 822 513
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Horário de Atendimento</p>
                      <p className="text-sm text-muted-foreground">
                        Segunda a Sexta: 8h - 18h<br />
                        Sábado: 9h - 13h
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Redes Sociais</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <a 
                      href="https://vitaleevo.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
                    >
                      <Globe className="h-5 w-5" />
                      vitaleevo.com
                    </a>
                    <a 
                      href="https://facebook.com/vitaleevo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                      @vitaleevo
                    </a>
                    <a 
                      href="https://instagram.com/vitaleevo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                      @vitaleevo
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[image:var(--gradient-primary)] text-white border-0">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-2">Atendimento Rápido via WhatsApp</h3>
                  <p className="text-sm mb-4 opacity-90">
                    Precisa de uma resposta rápida? Fale diretamente connosco pelo WhatsApp!
                  </p>
                  <Button 
                    variant="secondary"
                    className="w-full gap-2"
                    onClick={() => window.open("https://wa.me/244935348327", "_blank")}
                  >
                    <MessageCircle className="h-4 w-4" />
                    Abrir WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      {/* Mapa */}
      <Section className="bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionTitle>Nossa Localização</SectionTitle>
          <div className="mt-8 rounded-lg overflow-hidden shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.7944444444444!2d13.2344!3d-8.8383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNTAnMTcuOSJTIDEzwrAxNCcwMy44IkU!5e0!3m2!1spt-PT!2sao!4v1234567890123!5m2!1spt-PT!2sao"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Vitaleevo"
            />
          </div>
        </div>
      </Section>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contactos;
