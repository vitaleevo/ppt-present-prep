export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  image: string;
  tags: string[];
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "5 Dicas para Criar Apresentações que Convencem Investidores",
    slug: "dicas-apresentacoes-investidores",
    excerpt: "Descubra as estratégias essenciais para criar slides que captam atenção e geram resultados em reuniões de investimento.",
    content: `
# 5 Dicas para Criar Apresentações que Convencem Investidores

Criar uma apresentação que convence investidores vai muito além de slides bonitos. É preciso estrutura, clareza e capacidade de contar uma história convincente.

## 1. Comece com o Problema

Investidores precisam entender rapidamente qual problema você está resolvendo. Dedique os primeiros slides para contextualizar a dor do mercado de forma clara e com dados reais.

## 2. Mostre a Solução de Forma Visual

Use infográficos, mockups e demonstrações visuais. Uma imagem vale mais que mil palavras, especialmente quando o tempo é limitado.

## 3. Apresente o Mercado e a Oportunidade

Números concretos sobre o tamanho do mercado, crescimento projetado e sua fatia realista são fundamentais para credibilidade.

## 4. Equipa e Execução

Investidores investem em pessoas. Mostre porque sua equipa é a certa para executar essa visão.

## 5. Financeiro Realista

Projeções otimistas demais afastam investidores. Seja realista, mostre seus números e como chegou neles.

## Conclusão

Uma boa apresentação é aquela que conta uma história coerente, com dados sólidos e visual profissional. Se precisa de ajuda, a Vitaleevo está aqui para transformar suas ideias em slides impactantes.
    `,
    category: "Design",
    author: "Equipa Vitaleevo",
    date: "2024-01-15",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=600&fit=crop",
    tags: ["Apresentações", "Investidores", "Design"],
    readTime: "5 min"
  },
  {
    id: "2",
    title: "Marketing Digital em Angola: Tendências para 2024",
    slug: "marketing-digital-angola-2024",
    excerpt: "O mercado digital angolano está em crescimento. Veja as principais tendências e como sua empresa pode aproveitar.",
    content: `
# Marketing Digital em Angola: Tendências para 2024

O mercado digital em Angola está a experimentar um crescimento exponencial. Cada vez mais empresas reconhecem a importância de marcar presença online.

## 1. Crescimento do E-commerce Local

O comércio electrónico está a ganhar força, com mais angolanos a comprar online. Empresas que investem em lojas virtuais estão a ver resultados significativos.

## 2. Vídeo Marketing Dominante

Conteúdo em vídeo, especialmente stories e reels, gera muito mais engajamento que posts estáticos. É o formato do momento.

## 3. WhatsApp Business como Canal Principal

Em Angola, o WhatsApp não é apenas comunicação pessoal - é ferramenta de vendas. Empresas que dominam o WhatsApp Business têm vantagem competitiva.

## 4. Influenciadores Locais

Parcerias com micro e macro influenciadores angolanos geram resultados autênticos e conexão real com o público.

## 5. Tráfego Pago mais Acessível

Com a democratização das plataformas de anúncios, PMEs conseguem competir com grandes marcas investindo estrategicamente.

## Conclusão

2024 é o ano para sua empresa investir seriamente em marketing digital. A Vitaleevo pode ajudar a criar uma estratégia vencedora.
    `,
    category: "Marketing",
    author: "Equipa Vitaleevo",
    date: "2024-01-10",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    tags: ["Marketing Digital", "Angola", "Tendências"],
    readTime: "6 min"
  },
  {
    id: "3",
    title: "Porque o Seu Negócio Precisa de um Site Institucional",
    slug: "importancia-site-institucional",
    excerpt: "Um site profissional é mais que presença online - é credibilidade, vendas e crescimento. Entenda porquê.",
    content: `
# Porque o Seu Negócio Precisa de um Site Institucional

Muitas empresas angolanas ainda resistem a investir num site próprio, confiando apenas em redes sociais. Mas isso é um erro estratégico.

## Credibilidade Profissional

Um site institucional transmite seriedade e profissionalismo. Clientes pesquisam online antes de comprar, e a ausência de website pode custar negócios.

## Controlo Total da Comunicação

Nas redes sociais, você está sujeito a algoritmos e políticas de plataformas. Seu site é seu território, onde você controla a experiência do usuário.

## SEO e Descoberta no Google

Sites bem feitos aparecem nas pesquisas do Google quando potenciais clientes procuram pelos seus serviços. Redes sociais não têm esse alcance orgânico.

## Central de Conversão

Seu site é o hub central onde todas as ações de marketing convergem: tráfego pago, redes sociais, email marketing. É onde acontece a conversão.

## Disponibilidade 24/7

Seu site trabalha para você mesmo quando está a dormir. Apresenta a empresa, esclarece dúvidas e capta leads automaticamente.

## Conclusão

Em 2024, não ter site institucional é perder oportunidades de negócio diariamente. A Vitaleevo cria sites profissionais que geram resultados reais.
    `,
    category: "Tecnologia",
    author: "Equipa Vitaleevo",
    date: "2024-01-05",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&h=600&fit=crop",
    tags: ["Website", "Negócios", "Digital"],
    readTime: "7 min"
  }
];

export const blogCategories = [
  "Todos",
  "Marketing",
  "Design",
  "Tecnologia",
  "Dicas"
];
