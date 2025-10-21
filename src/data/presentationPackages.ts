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
  valueProposition: {
    title: string;
    items: Array<{
      label: string;
      value: string;
      description: string;
    }>;
  };
  costBreakdown: Array<{
    item: string;
    estimatedMarketValue: string;
    included: boolean;
  }>;
  whatYouSave: {
    title: string;
    description: string;
    comparison: string;
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
      "Pare de perder tempo tentando formatar slides no PowerPoint. Enquanto você se concentra no seu negócio, nossa equipe transforma seu conteúdo em uma apresentação visualmente coerente e profissional.",
      "Com o Essencial, você recebe padronização completa de cores, tipografia e layout, garantindo que sua mensagem seja comunicada de forma clara e profissional. É o investimento inteligente para quem valoriza tempo e resultados."
    ],
    idealFor: [
      "Reuniões internas e apresentações de equipa",
      "Reports mensais e trimestrais",
      "Apresentações rápidas para stakeholders",
      "Documentação corporativa básica",
      "Propostas comerciais simples"
    ],
    valueProposition: {
      title: "Por que Kz 212.000 é um investimento inteligente?",
      items: [
        {
          label: "Economia de Tempo",
          value: "15-20 horas",
          description: "Tempo que você economiza ao não ter que formatar slides manualmente. Se seu tempo vale Kz 15.000/hora, isso representa Kz 225.000-300.000 em valor."
        },
        {
          label: "Impressão Profissional",
          value: "Inestimável",
          description: "Uma apresentação mal formatada pode custar-lhe contratos e credibilidade. A primeira impressão conta."
        },
        {
          label: "Reutilização",
          value: "Uso ilimitado",
          description: "Recebe o arquivo editável para adaptar e reutilizar quantas vezes precisar, amortizando o investimento ao longo do tempo."
        },
        {
          label: "Entrega Rápida",
          value: "5-7 dias",
          description: "Prazo profissional que permite planejar com antecedência sem comprometer a qualidade."
        }
      ]
    },
    costBreakdown: [
      { item: "Análise e briefing inicial", estimatedMarketValue: "Kz 30.000", included: true },
      { item: "Padronização visual completa", estimatedMarketValue: "Kz 80.000", included: true },
      { item: "Capa e encerramento personalizados", estimatedMarketValue: "Kz 40.000", included: true },
      { item: "Ajustes de layout profissionais", estimatedMarketValue: "Kz 50.000", included: true },
      { item: "Rodada de revisões", estimatedMarketValue: "Kz 25.000", included: true },
      { item: "Entrega em múltiplos formatos", estimatedMarketValue: "Kz 15.000", included: true },
      { item: "Total se contratado separadamente", estimatedMarketValue: "Kz 240.000", included: false }
    ],
    whatYouSave: {
      title: "Economia Real",
      description: "Se contratar cada serviço separadamente, pagaria pelo menos Kz 240.000. Com o Pacote Essencial, economiza Kz 28.000 e ainda garante coerência visual em todo o projeto.",
      comparison: "Você economiza 12% e garante qualidade consistente"
    },
    painPoints: {
      title: "Problemas que Resolvemos",
      problems: [
        {
          problem: "Slides desformatados que fazem você parecer pouco profissional",
          solution: "Padronização visual completa que transmite seriedade e atenção aos detalhes"
        },
        {
          problem: "Horas perdidas tentando alinhar textos e imagens no PowerPoint",
          solution: "Nossa equipe faz todo o trabalho técnico enquanto você foca no conteúdo"
        },
        {
          problem: "Apresentações que não seguem a identidade visual da sua empresa",
          solution: "Aplicação consistente das cores, fontes e estilo da sua marca"
        },
        {
          problem: "Incerteza sobre como organizar visualmente a informação",
          solution: "Hierarquia visual clara que guia o olhar e facilita a compreensão"
        }
      ]
    },
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
    testimonials: [
      {
        quote: "Precisava urgentemente padronizar 15 slides para uma reunião com investidores. A Vitaleevo entregou em 5 dias e a apresentação ficou impecável. Valeu cada kwanza!",
        author: "Ricardo Mendes",
        role: "CEO",
        company: "StartupTech Angola",
        result: "Investimento aprovado na primeira reunião"
      },
      {
        quote: "Sempre perdia horas formatando os reports mensais. Com o Pacote Essencial, economizo tempo valioso e os slides ficam sempre profissionais.",
        author: "Mariana Costa",
        role: "Gerente de Projetos",
        company: "Consultoria Estratégica",
        result: "Economia de 20h mensais"
      }
    ],
    guarantees: [
      "Entrega no prazo ou seu dinheiro de volta",
      "1 rodada de revisões incluída sem custos extras",
      "Arquivos 100% editáveis para você adaptar quando precisar",
      "Suporte técnico pós-entrega para dúvidas sobre os arquivos"
    ],
    faq: [
      {
        question: "Por que não fazer eu mesmo no PowerPoint?",
        answer: "Pode fazer, mas vai gastar 15-20 horas e o resultado dificilmente terá a mesma qualidade profissional. Se seu tempo vale Kz 15.000/hora, está pagando Kz 225.000-300.000 em tempo. Com o Essencial, economiza tempo, dinheiro e garante qualidade."
      },
      {
        question: "Este pacote inclui reescrita de textos?",
        answer: "Não, o Pacote Essencial foca em layout e design visual. Trabalhamos com o conteúdo que você fornece, fazendo apenas ajustes ligeiros de formatação para melhor legibilidade."
      },
      {
        question: "Posso adicionar mais slides depois?",
        answer: "Sim! Slides extras custam apenas Kz 12.000 por slide e seguem automaticamente o mesmo padrão visual da apresentação, garantindo coerência total."
      },
      {
        question: "E se eu não gostar do resultado?",
        answer: "Oferecemos 1 rodada completa de revisões incluída. Na prática, 98% dos nossos clientes ficam satisfeitos já na primeira versão, mas garantimos que faremos ajustes até você aprovar."
      },
      {
        question: "Quanto tempo leva a entrega?",
        answer: "5-7 dias úteis. Se precisar com urgência, consulte-nos sobre a possibilidade de entrega expressa (pode haver custo adicional)."
      },
      {
        question: "Recebo o arquivo editável?",
        answer: "Sim! Você recebe tanto o .pptx totalmente editável quanto o PDF para distribuição. Pode reutilizar e adaptar quantas vezes quiser."
      },
      {
        question: "Qual a diferença para o Pacote Profissional?",
        answer: "O Profissional inclui redesign completo slide a slide (não apenas formatação), 3-4 infográficos personalizados, 2 rodadas de revisão e assets organizados. É para quem precisa de um nível superior de personalização e impacto visual."
      },
      {
        question: "Funciona para qualquer setor?",
        answer: "Sim! Já criamos apresentações para empresas de tecnologia, consultoria, saúde, educação, comércio e muitos outros setores. O design se adapta ao seu negócio."
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
      "Ideal para empresas e profissionais que precisam transmitir credibilidade e impactar sua audiência. Este pacote inclui infográficos personalizados que transformam dados complexos em visualizações claras e atraentes.",
      "Com duas rodadas completas de revisão, garantimos que cada detalhe esteja alinhado com suas expectativas e objetivos de comunicação. É a escolha perfeita para quem busca excelência sem excesso."
    ],
    idealFor: [
      "Apresentações comerciais para clientes e investidores",
      "Propostas de parceria e patrocínio",
      "Apresentações institucionais e corporativas",
      "Eventos, conferências e webinars",
      "Pitch decks para captação de recursos"
    ],
    valueProposition: {
      title: "Por que Kz 450.000 é o investimento ideal para quem precisa de impacto?",
      items: [
        {
          label: "Redesign Profissional",
          value: "Slide a slide completo",
          description: "Cada slide é recriado do zero com design profissional, garantindo impacto visual e comunicação clara."
        },
        {
          label: "Infográficos Personalizados",
          value: "3-4 visualizações",
          description: "Transformamos dados e conceitos complexos em visualizações claras e atrativas que facilitam a compreensão."
        },
        {
          label: "2 Rodadas de Revisão",
          value: "Ajustes detalhados",
          description: "Duas rodadas completas de ajustes para garantir que tudo esteja perfeito."
        },
        {
          label: "Assets Organizados",
          value: "Todos os recursos",
          description: "Todos os recursos visuais fornecidos de forma organizada para facilitar edições futuras."
        }
      ]
    },
    costBreakdown: [
      { item: "Briefing detalhado", estimatedMarketValue: "Kz 50.000", included: true },
      { item: "Conceito visual", estimatedMarketValue: "Kz 60.000", included: true },
      { item: "Redesign completo", estimatedMarketValue: "Kz 180.000", included: true },
      { item: "Infográficos personalizados", estimatedMarketValue: "Kz 80.000", included: true },
      { item: "2 rodadas de revisão", estimatedMarketValue: "Kz 40.000", included: true },
      { item: "Arquivos editáveis completos", estimatedMarketValue: "Kz 30.000", included: true },
      { item: "Total se contratado separadamente", estimatedMarketValue: "Kz 450.000", included: false }
    ],
    whatYouSave: {
      title: "Economia de Tempo e Qualidade",
      description: "Com o Pacote Profissional, você ganha 2 rodadas de revisão, infográficos personalizados e assets organizados, tudo isso em um único investimento. Isso representa um valor total de Kz 450.000, que é o mesmo valor que você pagaria se contratasse cada serviço separadamente.",
      comparison: "Você economiza tempo e garante qualidade superior"
    },
    painPoints: {
      title: "Problemas que Resolvemos",
      problems: [
        {
          problem: "Apresentações que parecem desorganizadas ou sem foco",
          solution: "Redesign completo com foco em hierarquia visual e impacto emocional"
        },
        {
          problem: "Dados complexos que não são facilmente compreensíveis",
          solution: "Infográficos personalizados que transformam dados em visualizações claras"
        },
        {
          problem: "Falta de consistência entre os slides",
          solution: "Padronização visual e estruturação clara de conteúdo"
        },
        {
          problem: "Falta de tempo para revisar e ajustar",
          solution: "2 rodadas completas de revisão com feedback contínuo"
        }
      ]
    },
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
    testimonials: [
      {
        quote: "Com o Pacote Profissional, transformamos nossa apresentação de resultados em uma ferramenta poderosa. Os infográficos e a estrutura clara fizeram a diferença. Recebemos feedback positivo de todos os nossos clientes.",
        author: "Ana Silva",
        role: "Diretora de Marketing",
        company: "Inovação Angola",
        result: "Aumento de 30% na conversão de leads"
      },
      {
        quote: "O conceito visual e os infográficos foram o diferencial. Agora, nossos clientes não apenas entendem os dados, mas se sentem engajados. O investimento foi totalmente justificado.",
        author: "Carlos Mendes",
        role: "CEO",
        company: "TechSolutions",
        result: "Aprovação de um novo contrato de Kz 2M"
      }
    ],
    guarantees: [
      "Entrega no prazo ou seu dinheiro de volta",
      "2 rodadas de revisões incluídas",
      "Infográficos personalizados com foco em clareza",
      "Suporte técnico pós-entrega para dúvidas"
    ],
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
      "Este pacote vai além do visual: refinamos sua narrativa, estruturamos seu conteúdo para máximo impacto e criamos infográficos premium que transformam dados complexos em histórias visuais claras. Animações sutis e transições profissionais mantêm sua audiência engajada do início ao fim.",
      "Ideal para pitches de investimento, keynotes em grandes eventos, lançamentos de produtos importantes ou qualquer momento onde o sucesso da sua apresentação pode definir o futuro de um projeto ou parceria."
    ],
    idealFor: [
      "Pitch de investimento para fundos e investidores",
      "Keynote em conferências e eventos importantes",
      "Lançamento de produtos ou serviços estratégicos",
      "Apresentações para grandes patrocinadores",
      "Propostas de alto valor para clientes premium"
    ],
    valueProposition: {
      title: "Por que Kz 920.000 é o investimento estratégico para momentos decisivos?",
      items: [
        {
          label: "Storytelling Estratégico",
          value: "Narrativa refinada",
          description: "Refinamos seus textos e estruturamos a narrativa para máxima persuasão e impacto emocional."
        },
        {
          label: "Infográficos Premium",
          value: "Visualizações únicas",
          description: "Visualizações de dados complexas transformadas em infográficos únicos e profissionais."
        },
        {
          label: "Animações Profissionais",
          value: "Engajamento total",
          description: "Animações leves e transições profissionais que mantêm o público engajado sem distrair."
        },
        {
          label: "3 Rodadas de Revisão",
          value: "Perfeição absoluta",
          description: "Três rodadas completas de refinamento para garantir perfeição absoluta."
        },
        {
          label: "Versões Múltiplas",
          value: "Otimização total",
          description: "Entrega em 16:9 para projeção e PDF otimizado para impressão profissional."
        }
      ]
    },
    costBreakdown: [
      { item: "Consultoria estratégica", estimatedMarketValue: "Kz 100.000", included: true },
      { item: "Desenvolvimento da narrativa", estimatedMarketValue: "Kz 120.000", included: true },
      { item: "Conceito visual premium", estimatedMarketValue: "Kz 150.000", included: true },
      { item: "Produção de alto nível", estimatedMarketValue: "Kz 300.000", included: true },
      { item: "3 rodadas de revisão", estimatedMarketValue: "Kz 100.000", included: true },
      { item: "Landing page bónus", estimatedMarketValue: "Kz 150.000", included: true },
      { item: "Total se contratado separadamente", estimatedMarketValue: "Kz 920.000", included: false }
    ],
    whatYouSave: {
      title: "Economia Estratégica",
      description: "Com o Pacote Impacto, você ganha storytelling refinado, infográficos premium, animações e 3 rodadas de revisão. Isso representa um valor total de Kz 920.000, que é o mesmo valor que você pagaria se contratasse cada serviço separadamente.",
      comparison: "Você economiza tempo e garante sucesso em momentos decisivos"
    },
    painPoints: {
      title: "Problemas que Resolvemos",
      problems: [
        {
          problem: "Apresentações que não conseguem engajar a audiência",
          solution: "Storytelling refinado com foco em emoção e impacto emocional"
        },
        {
          problem: "Dados complexos que não são facilmente compreensíveis",
          solution: "Infográficos premium que transformam dados em histórias visuais claras"
        },
        {
          problem: "Falta de tempo para revisar e ajustar",
          solution: "3 rodadas completas de revisão com feedback contínuo"
        },
        {
          problem: "Falta de recursos para criar apresentações de alto nível",
          solution: "Todos os recursos profissionais incluídos em um único pacote"
        }
      ]
    },
    features: [
      {
        title: "Storytelling Estratégico",
        description: "Refinamos seus textos e estruturamos a narrativa para máxima persuasão e impacto emocional.",
        icon: "BookOpen"
      },
      {
        title: "Infográficos Premium Personalizados",
        description: "Visualizações de dados complexas transformadas em infográficos únicos e profissionais.",
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
        "Infográficos premium únicos e profissionais",
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
    testimonials: [
      {
        quote: "O Pitch de Investimento foi um sucesso. O storytelling refinado e os infográficos premium transformaram nossa apresentação. Recebemos o investimento de Kz 5M.",
        author: "Luisa Santos",
        role: "Diretora de Investimentos",
        company: "Inovação Angola",
        result: "Aprovação de Kz 5M em investimento"
      },
      {
        quote: "O conceito visual e a narrativa foram o diferencial. Nossos investidores não apenas entenderam os dados, mas se sentiram engajados. O resultado foi um aumento de 50% na conversão.",
        author: "Ricardo Mendes",
        role: "CEO",
        company: "StartupTech Angola",
        result: "Aumento de 50% na conversão de leads"
      }
    ],
    guarantees: [
      "Entrega no prazo ou seu dinheiro de volta",
      "3 rodadas de revisões incluídas",
      "Infográficos premium com foco em impacto",
      "Suporte técnico pós-entrega para dúvidas"
    ],
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
