export interface PresentationPackage {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  tagline: string;
  price: string;
  priceNumeric: number;
  extraSlidePrice: string;
  extraSlidePriceNumeric: number;
  shortDescription: string;
  fullDescription: string[];
  idealFor: string[];
  features: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
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
    aspectRatio: string;
    assetsIncluded: string[];
  };
  useCases: string[];
  comparison: {
    advantages: string[];
    limitations: string[];
  };
  bonus?: {
    title: string;
    description: string;
    value: string;
  };
  recommended: boolean;
  faq: Array<{
    question: string;
    answer: string;
  }>;
}

export const presentationPackages: PresentationPackage[] = [
  {
    id: "essencial",
    slug: "essencial",
    name: "Essencial",
    subtitle: "Layout Clean",
    tagline: "Profissionalismo sem complicação",
    price: "Kz 212.000",
    priceNumeric: 212000,
    extraSlidePrice: "Kz 12.000",
    extraSlidePriceNumeric: 12000,
    shortDescription: "Ideal para reuniões internas e apresentações rápidas",
    fullDescription: [
      "O Pacote Essencial é a solução perfeita para quem precisa de uma apresentação profissional sem complicações. Focamos em criar um layout limpo e padronizado que transmite profissionalismo em cada slide.",
      "Este pacote é ideal para apresentações internas, reports mensais, reuniões de equipa ou qualquer situação onde você precisa de clareza visual sem investir em designs complexos.",
      "Com o Essencial, você recebe padronização completa de cores, tipografia e layout, garantindo que sua mensagem seja comunicada de forma clara e profissional."
    ],
    idealFor: [
      "Reuniões internas e apresentações de equipa",
      "Reports mensais e trimestrais",
      "Apresentações rápidas para stakeholders",
      "Documentação corporativa básica",
      "Propostas comerciais simples"
    ],
    features: [
      {
        title: "Padronização Visual Completa",
        description: "Aplicamos a identidade da sua marca de forma consistente em todos os slides, incluindo cores, tipografia e elementos visuais.",
        icon: "Palette"
      },
      {
        title: "Capa e Slide de Encerramento",
        description: "Designs personalizados para abertura e encerramento que causam boa impressão desde o primeiro até o último slide.",
        icon: "FileText"
      },
      {
        title: "Tipografia e Cores da Marca",
        description: "Implementação precisa das cores e fontes da sua empresa, garantindo consistência com sua identidade visual.",
        icon: "Type"
      },
      {
        title: "Ajustes de Layout",
        description: "Reorganizamos o conteúdo existente para melhor fluxo visual, sem reescrever textos.",
        icon: "Layout"
      },
      {
        title: "1 Rodada de Revisões",
        description: "Uma rodada completa de ajustes para garantir que tudo esteja perfeito antes da entrega final.",
        icon: "RefreshCw"
      },
      {
        title: "Entrega Multi-formato",
        description: "Receba sua apresentação em formato editável (.pptx) e PDF para impressão ou distribuição.",
        icon: "Download"
      }
    ],
    process: [
      {
        step: 1,
        title: "Briefing Inicial",
        description: "Recebemos seu conteúdo e entendemos suas necessidades específicas",
        duration: "1 dia"
      },
      {
        step: 2,
        title: "Aplicação da Identidade",
        description: "Padronizamos cores, fontes e elementos visuais conforme sua marca",
        duration: "2-3 dias"
      },
      {
        step: 3,
        title: "Ajustes de Layout",
        description: "Reorganizamos o conteúdo para melhor hierarquia e fluxo visual",
        duration: "1-2 dias"
      },
      {
        step: 4,
        title: "Revisão e Entrega",
        description: "Você revisa, solicitamos ajustes e entregamos os arquivos finais",
        duration: "1-2 dias"
      }
    ],
    deliverables: [
      "Apresentação em formato .pptx editável",
      "Versão em PDF para distribuição",
      "Capa e slide de encerramento personalizados",
      "Guia básico de cores e tipografia aplicadas"
    ],
    revisions: 1,
    estimatedDays: "5-7 dias úteis",
    technicalDetails: {
      formats: [".pptx (PowerPoint editável)", "PDF (impressão/distribuição)"],
      aspectRatio: "16:9 (padrão para projeção)",
      assetsIncluded: ["Paleta de cores aplicada", "Fontes utilizadas (quando permitido)"]
    },
    useCases: [
      "Report mensal para a diretoria",
      "Apresentação de resultados trimestrais",
      "Proposta comercial básica",
      "Reunião de alinhamento de equipa",
      "Documentação de processos internos"
    ],
    comparison: {
      advantages: [
        "Melhor custo-benefício para necessidades básicas",
        "Entrega rápida (5-7 dias)",
        "Formato editável para ajustes futuros",
        "Padronização profissional garantida"
      ],
      limitations: [
        "Não inclui criação de infográficos",
        "Apenas 1 rodada de revisões",
        "Não reescrevemos ou refinamos textos",
        "Sem animações ou transições personalizadas"
      ]
    },
    recommended: false,
    faq: [
      {
        question: "Este pacote inclui reescrita de textos?",
        answer: "Não, o Pacote Essencial foca em layout e design visual. Trabalhamos com o conteúdo que você fornece, fazendo apenas ajustes ligeiros de formatação."
      },
      {
        question: "Posso adicionar mais slides depois?",
        answer: "Sim! Slides extras custam Kz 12.000 por slide e seguem o mesmo padrão visual da apresentação."
      },
      {
        question: "Quanto tempo leva a entrega?",
        answer: "O prazo típico é de 5-7 dias úteis, mas pode variar conforme o volume de slides e complexidade do conteúdo."
      },
      {
        question: "Recebo o arquivo editável?",
        answer: "Sim, você recebe tanto o .pptx editável quanto o PDF para distribuição."
      },
      {
        question: "Qual a diferença para o Pacote Profissional?",
        answer: "O Profissional inclui redesign completo slide a slide, infográficos, mais rodadas de revisão e maior nível de personalização visual."
      }
    ]
  },
  {
    id: "profissional",
    slug: "profissional",
    name: "Profissional",
    subtitle: "Redesign Pro",
    tagline: "Equilíbrio perfeito entre qualidade e valor",
    price: "Kz 450.000",
    priceNumeric: 450000,
    extraSlidePrice: "Kz 30.000",
    extraSlidePriceNumeric: 30000,
    shortDescription: "Perfeito para quem precisa impressionar clientes e parceiros com design profissional",
    fullDescription: [
      "O Pacote Profissional é nossa opção mais equilibrada, oferecendo um redesign completo que transforma sua apresentação em uma ferramenta de comunicação poderosa. Cada slide é recriado do zero com atenção aos detalhes visuais e hierarquia de informação.",
      "Ideal para empresas e profissionais que precisam transmitir credibilidade e impactar sua audiência. Este pacote inclui infográficos personalizados que transformam dados complexos em visualizações claras e memoráveis.",
      "Com duas rodadas completas de revisão, garantimos que cada detalhe esteja alinhado com suas expectativas e objetivos de comunicação. É a escolha perfeita para quem busca excelência sem excesso."
    ],
    idealFor: [
      "Apresentações comerciais para clientes e investidores",
      "Propostas de parceria e patrocínio",
      "Apresentações institucionais e corporativas",
      "Eventos, conferências e webinars",
      "Pitch decks para captação de recursos"
    ],
    features: [
      {
        title: "Redesign Slide a Slide Completo",
        description: "Cada slide é recriado do zero com design profissional, garantindo impacto visual e comunicação clara.",
        icon: "Layers"
      },
      {
        title: "3-4 Infográficos Simples",
        description: "Transformamos dados e conceitos complexos em visualizações claras e atrativas que facilitam a compreensão.",
        icon: "BarChart3"
      },
      {
        title: "Ícones e Gráficos Padronizados",
        description: "Biblioteca personalizada de ícones e gráficos alinhados com sua identidade visual.",
        icon: "Sparkles"
      },
      {
        title: "2 Rodadas de Revisões",
        description: "Duas rodadas completas de ajustes para garantir que tudo esteja perfeito.",
        icon: "RefreshCw"
      },
      {
        title: "Arquivos Editáveis Completos",
        description: "Receba .pptx totalmente editável e PDF de alta qualidade, com todos os assets organizados.",
        icon: "FolderOpen"
      },
      {
        title: "Fontes e Assets Organizados",
        description: "Todos os recursos visuais fornecidos de forma organizada para facilitar edições futuras.",
        icon: "Package"
      }
    ],
    process: [
      {
        step: 1,
        title: "Briefing Detalhado",
        description: "Reunião para entender objetivos, público-alvo e mensagem-chave",
        duration: "1 dia"
      },
      {
        step: 2,
        title: "Conceito Visual",
        description: "Criamos direção visual e aprovamos estilo antes de prosseguir",
        duration: "2-3 dias"
      },
      {
        step: 3,
        title: "Redesign Completo",
        description: "Recriação slide a slide com infográficos e elementos visuais",
        duration: "5-7 dias"
      },
      {
        step: 4,
        title: "Primeira Revisão",
        description: "Você analisa e solicitamos a primeira rodada de ajustes",
        duration: "2-3 dias"
      },
      {
        step: 5,
        title: "Ajustes Finais",
        description: "Segunda rodada de revisões e entrega dos arquivos finais",
        duration: "2 dias"
      }
    ],
    deliverables: [
      "Apresentação completa em .pptx editável",
      "PDF de alta qualidade para impressão",
      "3-4 infográficos personalizados",
      "Biblioteca de ícones utilizados",
      "Pasta com todos os assets organizados",
      "Guia de estilo visual aplicado"
    ],
    revisions: 2,
    estimatedDays: "12-15 dias úteis",
    technicalDetails: {
      formats: [".pptx (PowerPoint editável)", "PDF HD (impressão profissional)"],
      aspectRatio: "16:9 (padrão, outras sob consulta)",
      assetsIncluded: [
        "Biblioteca de ícones personalizados",
        "Infográficos em formato editável",
        "Paleta de cores completa",
        "Fontes utilizadas (quando licença permitir)"
      ]
    },
    useCases: [
      "Apresentação de resultados e relatórios estratégicos",
      "Proposta comercial para grandes contas",
      "Pitch para investidores ou parceiros",
      "Apresentação em eventos e conferências",
      "Lançamento de produtos ou serviços"
    ],
    comparison: {
      advantages: [
        "Redesign completo com qualidade profissional",
        "Infográficos que facilitam compreensão de dados",
        "2 rodadas de revisão para ajustes detalhados",
        "Assets organizados para edições futuras",
        "Melhor custo-benefício para apresentações importantes"
      ],
      limitations: [
        "Não inclui animações complexas",
        "Storytelling não incluído (apenas no Impacto)",
        "Infográficos são simples (premium apenas no Impacto)",
        "Uma única proporção de slide (16:9)"
      ]
    },
    recommended: true,
    faq: [
      {
        question: "Para que tipo de apresentação este pacote é ideal?",
        answer: "Este pacote é perfeito para apresentações comerciais, propostas de parceria, eventos corporativos e qualquer situação onde você precisa causar uma excelente impressão profissional."
      },
      {
        question: "Quantos infográficos estão incluídos?",
        answer: "Estão incluídos 3-4 infográficos simples. Se precisar de mais ou de infográficos premium com animações, recomendamos o Pacote Impacto."
      },
      {
        question: "Posso solicitar alterações depois das 2 revisões?",
        answer: "Sim, mas alterações adicionais serão cobradas à parte. Por isso, recomendamos que você forneça feedback detalhado em cada rodada de revisão."
      }
    ]
  },
  {
    id: "impacto",
    slug: "impacto",
    name: "Impacto",
    subtitle: "Storytelling + Animação",
    tagline: "Excelência máxima para momentos decisivos",
    price: "Kz 920.000",
    priceNumeric: 920000,
    extraSlidePrice: "Kz 70.000",
    extraSlidePriceNumeric: 70000,
    shortDescription: "Ideal para pitch de patrocínio, keynote e lançamentos",
    fullDescription: [
      "O Pacote Impacto é nossa solução premium, projetada para os momentos mais importantes da sua organização. Combinamos design excepcional com storytelling estratégico, criando apresentações que não apenas informam, mas inspiram e convencem.",
      "Este pacote vai além do visual: refinamos sua narrativa, estruturamos seu conteúdo para máximo impacto e criamos infográficos premium que transformam dados complexos em histórias visuais memoráveis. Animações sutis e transições profissionais mantêm sua audiência engajada do início ao fim.",
      "Ideal para pitches de investimento, keynotes em grandes eventos, lançamentos de produtos importantes ou qualquer momento onde o sucesso da sua apresentação pode definir o futuro de um projeto ou parceria."
    ],
    idealFor: [
      "Pitch de investimento para fundos e investidores",
      "Keynote em conferências e eventos importantes",
      "Lançamento de produtos ou serviços estratégicos",
      "Apresentações para grandes patrocinadores",
      "Propostas de alto valor para clientes premium"
    ],
    features: [
      {
        title: "Storytelling Estratégico",
        description: "Refinamos seus textos e estruturamos a narrativa para máxima persuasão e impacto emocional.",
        icon: "BookOpen"
      },
      {
        title: "Infográficos Premium Personalizados",
        description: "Visualizações de dados complexas transformadas em infográficos únicos e memoráveis.",
        icon: "TrendingUp"
      },
      {
        title: "Animações e Transições",
        description: "Animações leves e transições profissionais que mantêm o público engajado sem distrair.",
        icon: "Sparkles"
      },
      {
        title: "3 Rodadas de Revisões",
        description: "Três rodadas completas de refinamento para garantir perfeição absoluta.",
        icon: "CheckCheck"
      },
      {
        title: "Versões Múltiplas",
        description: "Entrega em 16:9 para projeção e PDF otimizado para impressão profissional.",
        icon: "Monitor"
      },
      {
        title: "Qualidade Máxima",
        description: "Atenção aos mínimos detalhes, tipografia premium e composições visuais de alto impacto.",
        icon: "Award"
      },
      {
        title: "Landing Page Incluída",
        description: "Bónus especial: landing page completa com informações da sua organização + domínio + hospedagem + emails.",
        icon: "Globe"
      }
    ],
    process: [
      {
        step: 1,
        title: "Consultoria Estratégica",
        description: "Reunião profunda para entender objetivos, audiência e contexto estratégico",
        duration: "1-2 dias"
      },
      {
        step: 2,
        title: "Desenvolvimento da Narrativa",
        description: "Estruturamos o storytelling e refinamos mensagens-chave",
        duration: "3-4 dias"
      },
      {
        step: 3,
        title: "Conceito Visual Premium",
        description: "Criamos direção visual única e aprovamos antes de prosseguir",
        duration: "3-4 dias"
      },
      {
        step: 4,
        title: "Produção de Alto Nível",
        description: "Design slide a slide, infográficos premium e animações",
        duration: "7-10 dias"
      },
      {
        step: 5,
        title: "Ciclo de Refinamento",
        description: "Três rodadas de revisões para perfeição absoluta",
        duration: "4-6 dias"
      },
      {
        step: 6,
        title: "Landing Page Bónus",
        description: "Desenvolvimento da landing page com domínio e emails corporativos",
        duration: "5-7 dias"
      }
    ],
    deliverables: [
      "Apresentação premium em .pptx com animações",
      "PDF de alta resolução otimizado para impressão",
      "Infográficos premium em formato editável",
      "Biblioteca completa de assets visuais",
      "Versão 16:9 para projeção",
      "Landing page responsiva completa",
      "Domínio personalizado (1 ano incluído)",
      "Hospedagem web (1 ano incluída)",
      "3 contas de email corporativo",
      "Guia de estilo e brand guidelines aplicados"
    ],
    revisions: 3,
    estimatedDays: "20-25 dias úteis",
    technicalDetails: {
      formats: [
        ".pptx com animações (PowerPoint)",
        "PDF ultra HD (impressão profissional)",
        "Versões 16:9 otimizadas"
      ],
      aspectRatio: "16:9 (padrão), outras proporções sob consulta",
      assetsIncluded: [
        "Infográficos premium em vetor editável",
        "Biblioteca completa de ícones personalizados",
        "Animações e transições profissionais",
        "Paleta de cores expandida",
        "Tipografia premium licenciada",
        "Todos os assets em pasta organizada"
      ]
    },
    useCases: [
      "Pitch de patrocínio para grandes marcas",
      "Keynote em conferência internacional",
      "Lançamento de produto estratégico",
      "Apresentação para board de investidores",
      "Proposta de parceria de alto valor"
    ],
    comparison: {
      advantages: [
        "Storytelling refinado para máxima persuasão",
        "Infográficos premium únicos e memoráveis",
        "Animações profissionais que engajam",
        "3 rodadas de revisão para perfeição",
        "Bónus: Landing page + domínio + emails",
        "Qualidade máxima em cada detalhe",
        "Ideal para momentos decisivos"
      ],
      limitations: [
        "Investimento mais elevado",
        "Prazo de produção mais longo (20-25 dias)",
        "Requer maior envolvimento no processo de briefing"
      ]
    },
    bonus: {
      title: "Landing Page Premium Incluída",
      description: "Como bónus especial, você recebe uma landing page completa e responsiva com todas as informações da sua organização, incluindo domínio personalizado, hospedagem profissional por 1 ano e 3 contas de email corporativo.",
      value: "Valor do bónus: ~Kz 350.000"
    },
    recommended: false,
    faq: [
      {
        question: "O que torna este pacote diferente dos outros?",
        answer: "O Impacto vai além do design: inclui storytelling estratégico (refinamos seus textos), infográficos premium únicos, animações profissionais e o bónus exclusivo da landing page completa."
      },
      {
        question: "O que está incluído no bónus da landing page?",
        answer: "Landing page responsiva completa, domínio personalizado (.ao ou .com), hospedagem web por 1 ano e 3 contas de email corporativo (exemplo@suaempresa.ao)."
      },
      {
        question: "Vocês reescrevem os textos da apresentação?",
        answer: "Sim! No Pacote Impacto, refinamos e reestruturamos seus textos para máximo impacto, clareza e persuasão."
      },
      {
        question: "As animações funcionam em qualquer PowerPoint?",
        answer: "Sim, usamos animações nativas do PowerPoint que funcionam em todas as versões recentes (2016+) e também exportamos em PDF sem animações para impressão."
      },
      {
        question: "Quanto tempo de antecedência devo solicitar?",
        answer: "Recomendamos pelo menos 4-5 semanas antes da data que precisa, para garantir tempo adequado para o processo completo de produção e refinamento."
      },
      {
        question: "Posso usar a landing page depois do primeiro ano?",
        answer: "Sim! Após o primeiro ano, você pode renovar a hospedagem e domínio por valores acessíveis, e a landing page é sua para sempre."
      }
    ]
  }
];

export const getPackageBySlug = (slug: string): PresentationPackage | undefined => {
  return presentationPackages.find(pkg => pkg.slug === slug);
};
