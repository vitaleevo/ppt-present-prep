export interface IdentityVisualPackage {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  tagline: string;
  price: string;
  priceNumeric: number;
  shortDescription: string;
  fullDescription: string[];
  idealFor: string[];
  features: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  valueProposition: {
    title: string;
    items: Array<{
      label: string;
      value: string;
      description: string;
    }>;
  };
  painPoints: {
    title: string;
    problems: Array<{
      problem: string;
      solution: string;
    }>;
  };
  process: Array<{
    step: number;
    title: string;
    description: string;
    duration: string;
  }>;
  deliverables: string[];
  revisions: number;
  estimatedDays: string;
  technicalDetails: {
    formats: string[];
    manualPages: string;
    assetsIncluded: string[];
  };
  useCases: string[];
  whatYouGet: {
    title: string;
    description: string;
    items: string[];
  };
  testimonials: Array<{
    quote: string;
    author: string;
    role: string;
    company: string;
    result: string;
  }>;
  guarantees: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
}

export const identityVisualPackage: IdentityVisualPackage = {
  id: "identidade-visual-completa",
  slug: "identidade-visual",
  name: "Identidade Visual Completa",
  subtitle: "Logótipo + Manual de Marca",
  tagline: "A base profissional que seu negócio merece",
  price: "Kz 340.000",
  priceNumeric: 340000,
  shortDescription: "Logótipo profissional + Manual de marca completo para posicionar o seu negócio",
  fullDescription: [
    "Sua marca é a primeira impressão que seu negócio causa. Uma identidade visual forte não é apenas um logótipo bonito - é a fundação estratégica que comunica quem você é, o que faz e porque as pessoas devem escolher você.",
    "Criamos identidades visuais completas que funcionam em todos os contextos: desde o cartão de visita até redes sociais, da fachada da loja até apresentações corporativas. Cada detalhe é pensado para transmitir profissionalismo e construir reconhecimento.",
    "Com nosso Manual de Marca completo, você nunca mais ficará perdido sobre como aplicar sua identidade. Tudo documentado, organizado e pronto para usar."
  ],
  idealFor: [
    "Negócios novos que precisam de identidade profissional desde o início",
    "Empresas estabelecidas que querem rebranding completo",
    "Startups que precisam de credibilidade para captar investimento",
    "Profissionais liberais que querem se destacar no mercado",
    "Empresas que cresceram e precisam padronizar sua comunicação visual"
  ],
  valueProposition: {
    title: "Por que Kz 340.000 é um investimento estratégico para sua marca?",
    items: [
      {
        label: "Diferenciação no Mercado",
        value: "Destaque-se",
        description: "Em mercados competitivos, uma identidade visual profissional faz você ser notado e lembrado. É o que separa negócios sérios de amadores."
      },
      {
        label: "Credibilidade Instantânea",
        value: "Confiança desde o primeiro olhar",
        description: "Uma marca bem desenvolvida transmite profissionalismo e gera confiança imediata com clientes, parceiros e investidores."
      },
      {
        label: "Economia a Longo Prazo",
        value: "Investimento único",
        description: "Com um manual completo, você evita gastos recorrentes com designers para cada nova aplicação. Tudo já está documentado e pronto para usar."
      },
      {
        label: "Consistência Garantida",
        value: "Padronização total",
        description: "Todos os fornecedores, designers e equipes internas terão as mesmas diretrizes, garantindo que sua marca seja sempre reconhecível."
      }
    ]
  },
  painPoints: {
    title: "Problemas que Resolvemos",
    problems: [
      {
        problem: "Logótipo amador ou genérico que não transmite profissionalismo",
        solution: "Criação de logótipo único, estratégico e registrável que reflete a essência do seu negócio"
      },
      {
        problem: "Cada material tem cores e tipografia diferentes, criando confusão visual",
        solution: "Manual de marca completo com paleta de cores, tipografia e todas as aplicações padronizadas"
      },
      {
        problem: "Fornecedores entregam materiais que não seguem seu padrão visual",
        solution: "Manual técnico com especificações exatas que qualquer designer ou gráfica pode seguir"
      },
      {
        problem: "Perdendo tempo e dinheiro explicando como usar a marca para cada novo projeto",
        solution: "Todas as diretrizes documentadas em um manual profissional que responde todas as dúvidas"
      },
      {
        problem: "Marca não funciona bem em todos os contextos (digital, impresso, pequeno, grande)",
        solution: "Múltiplas versões do logótipo otimizadas para cada aplicação e contexto de uso"
      }
    ]
  },
  features: [
    {
      title: "Pesquisa e Estratégia",
      description: "Análise profunda do seu mercado, concorrentes e público-alvo para criar uma identidade que se destaca.",
      icon: "Search"
    },
    {
      title: "3 Propostas Criativas",
      description: "Você escolhe entre 3 conceitos diferentes de logótipo, cada um com sua própria estratégia visual.",
      icon: "Lightbulb"
    },
    {
      title: "Logótipo em Todas as Versões",
      description: "Versões colorida, monocromática, negativo, horizontal, vertical e simplificada para qualquer aplicação.",
      icon: "Layers"
    },
    {
      title: "Manual de Marca Completo",
      description: "20-30 páginas detalhando cores, tipografia, aplicações corretas e incorretas, e exemplos práticos.",
      icon: "BookOpen"
    },
    {
      title: "Paleta de Cores Profissional",
      description: "Cores primárias e secundárias com códigos exatos para RGB, CMYK, Pantone e HEX.",
      icon: "Palette"
    },
    {
      title: "Tipografia Definida",
      description: "Fontes primárias e secundárias especificadas com exemplos de uso em títulos, textos e aplicações.",
      icon: "Type"
    },
    {
      title: "Mockups de Aplicação",
      description: "Visualizações realistas do logótipo em cartões de visita, fachadas, redes sociais e outros materiais.",
      icon: "Monitor"
    },
    {
      title: "Arquivos em Todos os Formatos",
      description: "AI (editável), PDF, PNG transparente, JPG, SVG - tudo o que você precisa para qualquer uso.",
      icon: "Download"
    },
    {
      title: "2 Rodadas de Revisão",
      description: "Duas rodadas completas de ajustes para garantir que tudo esteja perfeito.",
      icon: "RefreshCw"
    },
    {
      title: "Suporte Pós-Entrega",
      description: "30 dias de suporte para dúvidas sobre aplicação e uso dos arquivos.",
      icon: "LifeBuoy"
    }
  ],
  process: [
    {
      step: 1,
      title: "Briefing Estratégico",
      description: "Reunião para entender seu negócio, valores, público e objetivos da marca",
      duration: "1-2 dias"
    },
    {
      step: 2,
      title: "Pesquisa e Análise",
      description: "Estudo de mercado, concorrentes e tendências visuais do setor",
      duration: "2-3 dias"
    },
    {
      step: 3,
      title: "Desenvolvimento de Conceitos",
      description: "Criação de 3 propostas diferentes de logótipo com suas estratégias",
      duration: "5-7 dias"
    },
    {
      step: 4,
      title: "Apresentação e Escolha",
      description: "Você analisa os 3 conceitos e escolhe o caminho a seguir",
      duration: "1-2 dias"
    },
    {
      step: 5,
      title: "Refinamento",
      description: "Desenvolvimento completo do conceito escolhido com 2 rodadas de revisão",
      duration: "3-5 dias"
    },
    {
      step: 6,
      title: "Criação do Manual",
      description: "Desenvolvimento do manual de marca com todas as aplicações e diretrizes",
      duration: "3-4 dias"
    },
    {
      step: 7,
      title: "Entrega Final",
      description: "Entrega de todos os arquivos, manual e suporte inicial",
      duration: "1 dia"
    }
  ],
  deliverables: [
    "Logótipo final em 6+ versões (colorido, monocromático, negativo, etc.)",
    "Manual de marca completo (20-30 páginas em PDF)",
    "Arquivos editáveis em AI (Adobe Illustrator)",
    "Arquivos em PDF de alta qualidade",
    "PNG transparente em várias resoluções",
    "JPG em alta e baixa resolução",
    "SVG para web",
    "Paleta de cores com códigos exatos (RGB, CMYK, Pantone, HEX)",
    "Especificações de tipografia",
    "Mockups de aplicação",
    "Guia de uso e aplicações",
    "30 dias de suporte pós-entrega"
  ],
  revisions: 2,
  estimatedDays: "15-20 dias úteis",
  technicalDetails: {
    formats: [
      "AI (Adobe Illustrator - editável)",
      "PDF (alta qualidade)",
      "PNG (transparente, várias resoluções)",
      "JPG (alta e baixa resolução)",
      "SVG (vetorial para web)"
    ],
    manualPages: "20-30 páginas",
    assetsIncluded: [
      "Todas as versões do logótipo",
      "Paleta de cores completa",
      "Tipografia especificada",
      "Mockups de aplicação",
      "Guia de uso do dia a dia",
      "Exemplos de aplicações corretas e incorretas"
    ]
  },
  useCases: [
    "Lançamento de novo negócio com identidade profissional",
    "Rebranding completo de empresa estabelecida",
    "Padronização visual para crescimento do negócio",
    "Preparação para captação de investimento",
    "Expansão para novos mercados ou produtos"
  ],
  whatYouGet: {
    title: "O Que Separa Nosso Trabalho de um Logótipo Comum",
    description: "Não criamos apenas um símbolo bonito. Desenvolvemos um sistema visual completo que funciona em todos os contextos e cresce com seu negócio.",
    items: [
      "Estratégia antes da criação: entendemos seu negócio antes de desenhar qualquer linha",
      "Pesquisa de mercado: sua marca é desenvolvida considerando o contexto competitivo",
      "Múltiplas versões: funciona em qualquer tamanho, cor de fundo ou aplicação",
      "Manual profissional: qualquer pessoa pode aplicar sua marca corretamente",
      "Arquivos preparados: prontos para impressão, web, redes sociais e qualquer outro uso",
      "Escalabilidade: a identidade cresce com seu negócio sem perder consistência"
    ]
  },
  testimonials: [
    {
      quote: "Antes da Vitaleevo, nossa marca parecia amadora. Depois da identidade visual completa, conseguimos atrair clientes maiores e até fechar uma parceria com uma empresa internacional. O investimento se pagou em 2 meses.",
      author: "Pedro Augusto",
      role: "Fundador",
      company: "TechStart Angola",
      result: "Aumento de 150% em contratos fechados"
    },
    {
      quote: "O manual de marca foi um divisor de águas. Agora qualquer fornecedor consegue criar materiais que seguem nosso padrão. Economizamos horas de briefing e retrabalho a cada novo projeto.",
      author: "Sofia Mendes",
      role: "Diretora de Marketing",
      company: "Grupo Empresarial MM",
      result: "Economia de 30h mensais em gestão de fornecedores"
    },
    {
      quote: "Precisávamos de uma identidade visual forte para captar investimento. A Vitaleevo entregou uma marca que transmite exatamente a credibilidade e inovação que queríamos. Conseguimos Kz 8M em funding.",
      author: "Ricardo Ferreira",
      role: "CEO",
      company: "HealthTech Luanda",
      result: "Captação de Kz 8M em investimento"
    }
  ],
  guarantees: [
    "Logótipo 100% original e registrável",
    "2 rodadas de revisões incluídas sem custos extras",
    "Manual de marca profissional e completo",
    "Todos os arquivos em formatos universais",
    "30 dias de suporte pós-entrega",
    "Garantia de satisfação ou refazemos até aprovar"
  ],
  faq: [
    {
      question: "Por que não fazer um logótipo por Kz 20.000 no Fiverr?",
      answer: "Você pode fazer, mas receberá um símbolo genérico sem estratégia, pesquisa ou adaptação ao seu mercado. Não terá manual de marca, versões adequadas para diferentes usos, nem garantia de originalidade. Nossa identidade visual é um investimento estratégico, não apenas um desenho."
    },
    {
      question: "Posso registar o logótipo criado?",
      answer: "Sim! Todos os nossos logótipos são 100% originais e criados para serem registráveis. Não usamos templates ou elementos de banco de imagens. Você recebe todos os direitos sobre a identidade criada."
    },
    {
      question: "O que está incluído no Manual de Marca?",
      answer: "O manual tem 20-30 páginas e inclui: todas as versões do logótipo, paleta de cores com códigos exatos, tipografia especificada, área de respiro, tamanhos mínimos, aplicações corretas e incorretas, mockups, e guia de uso para materiais digitais e impressos."
    },
    {
      question: "Recebo os arquivos editáveis?",
      answer: "Sim! Você recebe o arquivo fonte em Adobe Illustrator (AI) completamente editável, além de PDF, PNG transparente, JPG e SVG. Tudo pronto para qualquer uso que precisar."
    },
    {
      question: "E se eu não gostar de nenhuma das 3 propostas?",
      answer: "Isso é raro porque nosso briefing estratégico é muito completo. Mas se acontecer, fazemos uma nova rodada de conceitos sem custo adicional. Garantimos que você sairá satisfeito com sua nova identidade."
    },
    {
      question: "Quanto tempo leva?",
      answer: "15-20 dias úteis do briefing inicial até a entrega final. Se precisar com urgência, consulte-nos sobre a possibilidade de entrega expressa (pode haver custo adicional)."
    },
    {
      question: "Vocês fazem só o logótipo sem o manual?",
      answer: "Não recomendamos. O manual de marca é essencial para garantir que sua identidade seja aplicada corretamente ao longo do tempo. Sem ele, você gastará muito mais com retrabalho e perderá consistência visual. É parte integral do serviço."
    },
    {
      question: "Posso usar a identidade visual em qualquer tipo de material?",
      answer: "Sim! A identidade é criada para funcionar em todos os contextos: digital (site, redes sociais, apps), impresso (cartões, flyers, banners), sinalização (fachadas, veículos), uniformes, embalagens e qualquer outra aplicação."
    },
    {
      question: "O preço inclui aplicação em outros materiais?",
      answer: "O serviço de Identidade Visual inclui o logótipo, manual de marca e mockups de exemplo. Se precisar de design de materiais específicos (cartões de visita, papelaria, etc.), isso é um serviço adicional que podemos orçar separadamente."
    },
    {
      question: "Vocês dão suporte depois da entrega?",
      answer: "Sim! Incluímos 30 dias de suporte pós-entrega para dúvidas sobre como aplicar a identidade e usar os arquivos. Se precisar de suporte contínuo depois disso, podemos conversar sobre uma retenção mensal."
    }
  ]
};

export const getIdentityVisualPackage = (): IdentityVisualPackage => {
  return identityVisualPackage;
};
