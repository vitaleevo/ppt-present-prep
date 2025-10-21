export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  client?: string;
  year: string;
}

export const portfolioData: Project[] = [
  {
    id: "1",
    title: "Apresentação Corporativa - TechStart",
    category: "design-criativo",
    description: "Apresentação de 45 slides para pitch de investimento de startup tecnológica",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["Apresentações", "Corporativo", "Design"],
    client: "TechStart Angola",
    year: "2024"
  },
  {
    id: "2",
    title: "Site Institucional - Clínica SaudePlus",
    category: "web-desenvolvimento",
    description: "Website completo com agendamento online e área do paciente",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
    tags: ["Website", "Saúde", "Desenvolvimento"],
    client: "SaudePlus",
    year: "2024"
  },
  {
    id: "3",
    title: "Identidade Visual - RestauranteCasa",
    category: "design-criativo",
    description: "Logótipo, manual de marca e aplicações para restaurante premium",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&h=600&fit=crop",
    tags: ["Branding", "Identidade Visual", "Restauração"],
    client: "Casa Restaurant",
    year: "2024"
  },
  {
    id: "4",
    title: "Campanha de Tráfego Pago - E-commerce Moda",
    category: "marketing-digital",
    description: "Campanha que gerou 300% de aumento em vendas online",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["Marketing", "Tráfego Pago", "E-commerce"],
    client: "ModaOnline AO",
    year: "2024"
  },
  {
    id: "5",
    title: "Landing Page - Imobiliária Premium",
    category: "web-desenvolvimento",
    description: "Landing page de alta conversão para lançamento de condomínio",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["Landing Page", "Imobiliária", "Conversão"],
    client: "Premium Imóveis",
    year: "2023"
  },
  {
    id: "6",
    title: "Gestão de Redes Sociais - Academia Fitness",
    category: "marketing-digital",
    description: "Crescimento de 250% no engajamento em 6 meses",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
    tags: ["Redes Sociais", "Fitness", "Marketing"],
    client: "FitLife Academia",
    year: "2023"
  }
];

export const categories = [
  { value: "all", label: "Todos" },
  { value: "marketing-digital", label: "Marketing Digital" },
  { value: "design-criativo", label: "Design & Criativo" },
  { value: "web-desenvolvimento", label: "Web & Desenvolvimento" },
  { value: "seguranca-biometria", label: "Segurança & Biometria" },
];
