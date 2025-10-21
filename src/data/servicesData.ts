import { TrendingUp, Palette, Globe, Shield, Network, Paintbrush } from "lucide-react";

export interface Service {
  name: string;
  slug: string;
  price: string;
  shortDescription: string;
  description: string;
  features: string[];
  whyChoose: string[];
  whyThisPrice: string;
  process: string[];
  deliveryTime: string;
  icon?: any;
}

export interface ServiceCategory {
  category: string;
  slug: string;
  icon: any;
  description: string;
  services: Service[];
}

export const servicesData: ServiceCategory[] = [
  {
    category: "Marketing Digital",
    slug: "marketing-digital",
    icon: TrendingUp,
    description: "Impulsione o seu negócio online com estratégias comprovadas de marketing digital",
    services: [
      {
        name: "Tráfego Pago",
        slug: "trafego-pago",
        price: "Kz 460.000/mês",
        shortDescription: "Gestão profissional de campanhas publicitárias no Google Ads, Facebook Ads e Instagram Ads",
        description: "Aumente suas vendas e visibilidade com campanhas de tráfego pago geridas por especialistas. Criamos, otimizamos e monitoramos suas campanhas para garantir o melhor retorno sobre investimento.",
        features: [
          "Configuração e gestão de campanhas no Google Ads",
          "Campanhas no Facebook e Instagram Ads",
          "Segmentação avançada de público-alvo",
          "Criação de copy persuasivo para anúncios",
          "Design de criativos para as campanhas",
          "Otimização diária das campanhas",
          "Relatórios mensais de desempenho",
          "Testes A/B contínuos",
          "Suporte via WhatsApp"
        ],
        whyChoose: [
          "Equipa especializada com experiência em campanhas para o mercado angolano",
          "Foco em resultados mensuráveis e ROI positivo",
          "Acompanhamento diário e ajustes em tempo real",
          "Transparência total com relatórios detalhados",
          "Estratégias personalizadas para o seu negócio"
        ],
        whyThisPrice: "O investimento inclui gestão profissional dedicada, criação de conteúdos, monitoramento contínuo e otimizações. Este valor garante que suas campanhas sejam geridas por especialistas, maximizando cada kwanza investido em anúncios.",
        process: [
          "Briefing inicial e análise do negócio",
          "Definição de objetivos e KPIs",
          "Criação da estratégia de campanhas",
          "Configuração e lançamento",
          "Monitoramento e otimização diária",
          "Relatórios mensais e reuniões de alinhamento"
        ],
        deliveryTime: "Lançamento em 5-7 dias úteis"
      },
      {
        name: "Gestão de Redes Sociais",
        slug: "gestao-redes-sociais",
        price: "Kz 380.000/mês",
        shortDescription: "Gestão completa das suas redes sociais com conteúdo profissional e estratégia definida",
        description: "Construa uma presença digital forte e engajada. Cuidamos de todo o planeamento, criação de conteúdo e gestão das suas redes sociais para que possa focar no seu negócio.",
        features: [
          "Gestão de Instagram, Facebook e LinkedIn",
          "12-16 posts mensais (3-4 por semana)",
          "Design profissional de todos os posts",
          "Calendário editorial estratégico",
          "Copywriting especializado",
          "Stories semanais",
          "Resposta a comentários e mensagens",
          "Hashtags estratégicas",
          "Análise mensal de métricas",
          "Suporte contínuo"
        ],
        whyChoose: [
          "Conteúdo original e alinhado com a identidade da sua marca",
          "Equipa criativa especializada em design e copy",
          "Crescimento orgânico e autêntico",
          "Comunicação humanizada que gera conexão",
          "Conhecimento profundo do público angolano"
        ],
        whyThisPrice: "Este valor reflete o trabalho de uma equipa completa: estrategista, designer e copywriter. Cada post é pensado estrategicamente para gerar resultados, não apenas ocupar espaço nas redes.",
        process: [
          "Auditoria das redes sociais atuais",
          "Definição de personas e tom de voz",
          "Criação do calendário editorial mensal",
          "Aprovação dos conteúdos",
          "Publicação e gestão diária",
          "Relatório mensal de desempenho"
        ],
        deliveryTime: "Início em 7 dias úteis após briefing"
      }
    ]
  },
  {
    category: "Design & Criativo",
    slug: "design-criativo",
    icon: Palette,
    description: "Soluções criativas que comunicam a essência da sua marca com profissionalismo",
    services: [
      {
        name: "Identidade Visual",
        slug: "identidade-visual",
        price: "Kz 340.000",
        shortDescription: "Logótipo profissional + Manual de marca completo para posicionar o seu negócio",
        description: "Uma identidade visual forte é a base para qualquer negócio que quer ser levado a sério. Criamos logótipos profissionais e manuais de marca completos que garantem consistência em todas as aplicações.",
        features: [
          "Pesquisa de mercado e concorrência",
          "Briefing criativo detalhado",
          "3 propostas iniciais de logótipo",
          "2 rodadas de revisão",
          "Logótipo final em todas as versões (colorido, monocromático, negativo)",
          "Manual de marca completo (20-30 páginas)",
          "Paleta de cores com códigos exatos",
          "Tipografia e aplicações",
          "Arquivos em todos os formatos (AI, PDF, PNG, JPG, SVG)",
          "Mockups de aplicação",
          "Suporte pós-entrega por 30 dias"
        ],
        whyChoose: [
          "Logótipos únicos e registáveis",
          "Processo colaborativo com o cliente",
          "Design que conta a história da sua marca",
          "Manual de marca que facilita a aplicação",
          "Arquivos prontos para qualquer uso (digital ou impresso)"
        ],
        whyThisPrice: "Criação de identidade visual é trabalho estratégico, não apenas estético. O investimento reflete pesquisa, conceituação, criação de múltiplas versões e um manual completo que garante a longevidade da sua marca.",
        process: [
          "Briefing e pesquisa (2-3 dias)",
          "Desenvolvimento de conceitos (5-7 dias)",
          "Apresentação das propostas",
          "Revisões e refinamento (3-5 dias)",
          "Finalização e entrega do manual completo",
          "Handoff de todos os arquivos"
        ],
        deliveryTime: "15-20 dias úteis"
      },
      {
        name: "Apresentações Corporativas",
        slug: "apresentacoes-corporativas",
        price: "A partir de Kz 212.000",
        shortDescription: "Slides profissionais em 3 níveis: Essencial, Profissional e Impacto",
        description: "Transformamos suas ideias em apresentações visuais profissionais. Oferecemos 3 pacotes adaptados às suas necessidades e orçamento.",
        features: [
          "3 pacotes disponíveis (Essencial, Profissional, Impacto)",
          "Design limpo e profissional",
          "Até 30 slides (Essencial) ou ilimitados (Impacto)",
          "Animações e transições",
          "Infográficos personalizados (Profissional e Impacto)",
          "Storytelling visual (Impacto)",
          "Revisões incluídas",
          "Entrega em PowerPoint e PDF"
        ],
        whyChoose: [
          "3 opções para diferentes necessidades e orçamentos",
          "Design que valoriza o seu conteúdo",
          "Rapidez na entrega",
          "Equipa especializada em comunicação visual",
          "Suporte durante todo o processo"
        ],
        whyThisPrice: "Oferecemos flexibilidade de preço para atender desde PMEs até grandes corporações. Cada pacote é estruturado para entregar máximo valor dentro do investimento escolhido.",
        process: [
          "Escolha do pacote ideal",
          "Envio do conteúdo e briefing",
          "Criação do design",
          "Revisões necessárias",
          "Entrega final"
        ],
        deliveryTime: "3-7 dias úteis (varia por pacote)"
      }
    ]
  },
  {
    category: "Web & Desenvolvimento",
    slug: "web-desenvolvimento",
    icon: Globe,
    description: "Websites e sistemas que funcionam perfeitamente e convertem visitantes em clientes",
    services: [
      {
        name: "Landing Page",
        slug: "landing-page",
        price: "Kz 650.000",
        shortDescription: "Página de vendas otimizada para conversão, responsiva e com formulário integrado",
        description: "Landing page profissional focada em conversão. Design estratégico que guia o visitante até a ação desejada, seja cadastro, venda ou contacto.",
        features: [
          "Design responsivo (mobile, tablet, desktop)",
          "Até 5 seções estratégicas",
          "Formulário de contacto/captação integrado",
          "Otimização SEO básica",
          "Integração com Google Analytics",
          "Velocidade de carregamento otimizada",
          "Integração com WhatsApp",
          "Hospedagem gratuita por 1 ano",
          "SSL (HTTPS) incluído",
          "2 revisões de design"
        ],
        whyChoose: [
          "Foco total em conversão e resultados",
          "Design baseado em psicologia de vendas",
          "Código limpo e otimizado",
          "Suporte técnico incluído",
          "Entrega rápida"
        ],
        whyThisPrice: "Landing pages eficazes combinam design estratégico, copywriting persuasivo e desenvolvimento técnico. O investimento garante uma página que realmente converte visitantes em leads ou clientes.",
        process: [
          "Briefing e definição de objetivos",
          "Criação do layout e copy",
          "Aprovação do design",
          "Desenvolvimento e integrações",
          "Testes e ajustes",
          "Lançamento e treinamento"
        ],
        deliveryTime: "10-15 dias úteis"
      },
      {
        name: "Site Institucional",
        slug: "site-institucional",
        price: "Kz 1.100.000",
        shortDescription: "Website completo com até 10 páginas, design profissional e painel administrativo",
        description: "Site institucional completo para apresentar sua empresa com profissionalismo. Múltiplas páginas, design customizado e sistema de gestão de conteúdo.",
        features: [
          "Até 10 páginas (Home, Sobre, Serviços, Portfolio, Blog, Contacto, etc)",
          "Design único e personalizado",
          "100% responsivo",
          "Painel administrativo para edição de conteúdo",
          "Blog integrado",
          "Formulários de contacto",
          "Galeria de imagens/portfolio",
          "Otimização SEO completa",
          "Integração com redes sociais",
          "Google Analytics e Search Console",
          "Hospedagem gratuita por 1 ano",
          "Treinamento para gestão do site",
          "3 revisões de design"
        ],
        whyChoose: [
          "Site completo pronto para crescer com seu negócio",
          "Autonomia para atualizar conteúdos",
          "Design profissional que transmite credibilidade",
          "SEO otimizado para aparecer no Google",
          "Suporte técnico contínuo"
        ],
        whyThisPrice: "Um site institucional é o cartão de visita digital da sua empresa. O investimento cobre design customizado, desenvolvimento técnico, integrações, testes e treinamento para que possa gerir o site com autonomia.",
        process: [
          "Briefing e planeamento da estrutura",
          "Criação do design (2-3 páginas para aprovação)",
          "Desenvolvimento de todas as páginas",
          "Configuração do painel administrativo",
          "Testes completos",
          "Treinamento e lançamento"
        ],
        deliveryTime: "20-30 dias úteis"
      },
      {
        name: "Blog/Portal de Notícias",
        slug: "blog-portal",
        price: "Kz 900.000",
        shortDescription: "Portal de conteúdo com sistema de publicação, categorias e otimização para SEO",
        description: "Plataforma completa para publicação de artigos, notícias ou conteúdo educativo. Sistema fácil de usar com todas as funcionalidades de um blog profissional.",
        features: [
          "Sistema de gestão de artigos",
          "Categorias e tags",
          "Sistema de comentários (opcional)",
          "Busca interna",
          "Newsletter integrada",
          "Área de autor/redator",
          "SEO otimizado para cada artigo",
          "Compartilhamento social",
          "Design responsivo",
          "Painel administrativo completo",
          "Hospedagem por 1 ano"
        ],
        whyChoose: [
          "Plataforma completa e fácil de usar",
          "Otimizado para ranquear no Google",
          "Design profissional e moderno",
          "Publicação ilimitada de artigos",
          "Suporte e treinamento incluídos"
        ],
        whyThisPrice: "Um portal de conteúdo requer funcionalidades específicas para SEO, gestão de múltiplos autores e organização de conteúdo. O valor reflete essas particularidades técnicas.",
        process: [
          "Planeamento da estrutura e categorias",
          "Design das páginas principais",
          "Desenvolvimento do sistema",
          "Configuração e integrações",
          "Testes",
          "Treinamento e lançamento"
        ],
        deliveryTime: "25-35 dias úteis"
      },
      {
        name: "Sistema para Empresas",
        slug: "sistema-empresarial",
        price: "A partir de Kz 2.400.000",
        shortDescription: "Sistemas personalizados (ERP, CRM, gestão interna) desenvolvidos sob medida",
        description: "Desenvolvimento de sistemas empresariais personalizados para otimizar processos internos, gestão de clientes, inventário, vendas e muito mais.",
        features: [
          "Análise completa de requisitos",
          "Sistema desenvolvido sob medida",
          "Painel administrativo robusto",
          "Gestão de usuários e permissões",
          "Relatórios e dashboards",
          "Integrações com outros sistemas",
          "App mobile (orçamento separado)",
          "Treinamento da equipa",
          "Suporte técnico",
          "Manutenção incluída (período a definir)"
        ],
        whyChoose: [
          "Solução 100% adaptada ao seu negócio",
          "Automação de processos manuais",
          "Redução de erros e aumento de eficiência",
          "Escalável conforme o crescimento da empresa",
          "Equipa técnica experiente"
        ],
        whyThisPrice: "Sistemas empresariais são projetos complexos que exigem análise profunda, desenvolvimento customizado, testes extensivos e treinamento. O investimento é proporcional à transformação digital que o sistema proporciona.",
        process: [
          "Reuniões de levantamento de requisitos",
          "Documentação e prototipagem",
          "Desenvolvimento em sprints",
          "Testes e validações",
          "Treinamento da equipa",
          "Deploy e acompanhamento"
        ],
        deliveryTime: "45-90 dias úteis (varia conforme escopo)"
      }
    ]
  },
  {
    category: "Segurança & Biometria",
    slug: "seguranca-biometria",
    icon: Shield,
    description: "Soluções de segurança e controlo de acesso para proteger o seu patrimônio",
    services: [
      {
        name: "Câmeras de Segurança",
        slug: "cameras-seguranca",
        price: "Consultar",
        shortDescription: "Instalação e configuração de sistemas de videovigilância profissionais",
        description: "Proteja o seu negócio ou residência com sistemas de câmeras de segurança de alta qualidade. Instalação profissional e acesso remoto via smartphone.",
        features: [
          "Câmeras HD/Full HD/4K",
          "Gravação contínua ou por detecção de movimento",
          "Acesso remoto via app mobile",
          "Armazenamento local ou em nuvem",
          "Visão noturna",
          "Instalação profissional",
          "Configuração completa do sistema",
          "Treinamento de uso",
          "Garantia dos equipamentos",
          "Suporte técnico"
        ],
        whyChoose: [
          "Equipamentos de qualidade com garantia",
          "Instalação profissional e organizada",
          "Configuração otimizada para suas necessidades",
          "Suporte técnico local",
          "Orçamento transparente sem surpresas"
        ],
        whyThisPrice: "O valor varia conforme o número de câmeras, qualidade de resolução, tipo de armazenamento e complexidade da instalação. Fazemos visita técnica gratuita para orçamento preciso.",
        process: [
          "Visita técnica gratuita",
          "Elaboração do projeto e orçamento",
          "Aprovação do cliente",
          "Aquisição dos equipamentos",
          "Instalação profissional",
          "Configuração e testes",
          "Treinamento e entrega"
        ],
        deliveryTime: "7-15 dias úteis após aprovação"
      },
      {
        name: "Sistemas Biométricos",
        slug: "sistemas-biometricos",
        price: "Consultar",
        shortDescription: "Controlo de acesso e ponto por impressão digital ou reconhecimento facial",
        description: "Modernize o controlo de acesso e ponto dos colaboradores com sistemas biométricos de alta tecnologia. Segurança, praticidade e relatórios automatizados.",
        features: [
          "Equipamentos biométricos (digital ou facial)",
          "Software de gestão de ponto",
          "Relatórios automatizados",
          "Integração com folha de pagamento (opcional)",
          "Controlo de acesso a áreas restritas",
          "Instalação e configuração",
          "Cadastro de utilizadores",
          "Treinamento da equipa",
          "Garantia e suporte"
        ],
        whyChoose: [
          "Eliminação de fraudes no ponto",
          "Relatórios precisos e automáticos",
          "Facilidade de uso para colaboradores",
          "Integração com sistemas existentes",
          "ROI comprovado em médio prazo"
        ],
        whyThisPrice: "O investimento depende do número de colaboradores, quantidade de equipamentos e necessidade de integrações. Fazemos análise gratuita para propor a solução ideal.",
        process: [
          "Reunião para entender necessidades",
          "Proposta técnica e comercial",
          "Aquisição e configuração dos equipamentos",
          "Instalação no local",
          "Cadastro de utilizadores",
          "Treinamento e acompanhamento inicial"
        ],
        deliveryTime: "10-20 dias úteis após aprovação"
      }
    ]
  },
  {
    category: "Redes & Infraestrutura",
    slug: "redes-infraestrutura",
    icon: Network,
    description: "Infraestrutura de rede estável e segura para o seu negócio",
    services: [
      {
        name: "Redes de Computadores",
        slug: "redes-computadores",
        price: "Consultar",
        shortDescription: "Instalação, configuração e manutenção de redes empresariais",
        description: "Rede de computadores estável é fundamental para a produtividade da sua empresa. Oferecemos serviços completos de infraestrutura de rede com equipamentos de qualidade.",
        features: [
          "Projeto de rede estruturada",
          "Instalação de cabeamento estruturado",
          "Configuração de roteadores e switches",
          "Wi-Fi empresarial de alta performance",
          "Configuração de firewall e segurança",
          "VPN para acesso remoto",
          "Servidores de arquivos",
          "Backup automatizado",
          "Manutenção preventiva",
          "Suporte técnico"
        ],
        whyChoose: [
          "Infraestrutura profissional e organizada",
          "Equipamentos de qualidade empresarial",
          "Documentação completa da rede",
          "Segurança e estabilidade garantidas",
          "Suporte técnico especializado"
        ],
        whyThisPrice: "O valor varia conforme o tamanho da empresa, quantidade de pontos de rede, tipo de equipamentos e nível de segurança desejado. Fazemos levantamento gratuito no local.",
        process: [
          "Visita técnica e levantamento",
          "Projeto técnico da rede",
          "Orçamento detalhado",
          "Execução da instalação",
          "Configuração e testes",
          "Documentação e treinamento"
        ],
        deliveryTime: "15-30 dias úteis (conforme escopo)"
      }
    ]
  },
  {
    category: "Branding Físico & Obras",
    slug: "branding-fisico",
    icon: Paintbrush,
    description: "Transformação de espaços físicos para refletir a identidade da sua marca",
    services: [
      {
        name: "Pintura e Remodelação",
        slug: "pintura-remodelacao",
        price: "Consultar",
        shortDescription: "Serviços de pintura profissional e pequenas remodelações de espaços comerciais",
        description: "Renove o visual do seu espaço comercial com serviços profissionais de pintura e remodelação. Primeira impressão conta, e um ambiente bem cuidado transmite profissionalismo.",
        features: [
          "Pintura de interiores e exteriores",
          "Preparação de superfícies",
          "Tintas de qualidade premium",
          "Remodelação de espaços",
          "Gesso e acabamentos",
          "Proteção de móveis e equipamentos",
          "Limpeza pós-obra",
          "Garantia do serviço"
        ],
        whyChoose: [
          "Equipa profissional e pontual",
          "Materiais de qualidade",
          "Trabalho limpo e organizado",
          "Prazos cumpridos",
          "Orçamento transparente"
        ],
        whyThisPrice: "O valor depende da área a pintar, tipo de tinta, estado das paredes e serviços adicionais. Fazemos orçamento gratuito no local.",
        process: [
          "Visita e medição do espaço",
          "Orçamento detalhado",
          "Agendamento da execução",
          "Preparação e pintura",
          "Limpeza e entrega"
        ],
        deliveryTime: "Varia conforme projeto"
      },
      {
        name: "Aplicação de Vinis",
        slug: "aplicacao-vinis",
        price: "Consultar",
        shortDescription: "Adesivação de viaturas, montras, paredes e sinalética interior/exterior",
        description: "Comunique visualmente com vinis de alta qualidade. Ideais para viaturas, montras de lojas, sinalética interna e decoração de espaços.",
        features: [
          "Vinis automotivos de alta durabilidade",
          "Adesivação de montras e vidros",
          "Plotagem de parede",
          "Sinalética interior e exterior",
          "Design incluído (se necessário)",
          "Aplicação profissional sem bolhas",
          "Materiais resistentes a UV",
          "Garantia de aplicação"
        ],
        whyChoose: [
          "Materiais premium de longa duração",
          "Aplicação perfeita sem defeitos",
          "Design alinhado com sua marca",
          "Ótimo custo-benefício para divulgação",
          "Instalação rápida"
        ],
        whyThisPrice: "O preço varia conforme o tamanho, tipo de vinil (simples, recortado, impresso) e complexidade da aplicação. Orçamento gratuito com visita se necessário.",
        process: [
          "Briefing e medições",
          "Criação do design (se necessário)",
          "Aprovação e produção",
          "Preparação da superfície",
          "Aplicação profissional",
          "Inspeção final"
        ],
        deliveryTime: "5-10 dias úteis após aprovação"
      },
      {
        name: "Lonas e Impressões",
        slug: "lonas-impressoes",
        price: "Consultar",
        shortDescription: "Impressão de lonas para eventos, fachadas e publicidade exterior",
        description: "Impressões de grande formato em lona de alta qualidade para fachadas, eventos, stands e publicidade exterior.",
        features: [
          "Lonas de alta resolução",
          "Diversos tamanhos disponíveis",
          "Impressão UV resistente",
          "Acabamentos com ilhós",
          "Design incluído (básico)",
          "Instalação disponível",
          "Materiais duráveis",
          "Entrega rápida"
        ],
        whyChoose: [
          "Qualidade de impressão profissional",
          "Cores vibrantes e duráveis",
          "Opções de tamanho personalizadas",
          "Instalação segura (se contratada)",
          "Preços competitivos"
        ],
        whyThisPrice: "O valor depende do tamanho, quantidade e tipo de acabamento. Fazemos orçamento imediato com as medidas desejadas.",
        process: [
          "Solicitação com medidas",
          "Envio/criação do arte",
          "Aprovação digital",
          "Impressão",
          "Acabamento",
          "Entrega ou instalação"
        ],
        deliveryTime: "3-7 dias úteis"
      }
    ]
  }
];

export const getAllServices = (): Service[] => {
  return servicesData.flatMap(category => category.services);
};

export const getServiceBySlug = (slug: string): Service | undefined => {
  return getAllServices().find(service => service.slug === slug);
};

export const getCategoryBySlug = (slug: string): ServiceCategory | undefined => {
  return servicesData.find(category => category.slug === slug);
};
