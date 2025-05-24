// Dados dos 9 posts automáticos do blog Espaço Oliver Beauty

const blogPosts = [
  {
    title: 'Tendências de Nail Design 2025: Luxo e Sofisticação',
    slug: 'tendencias-nail-design-2025',
    content: `Descubra as principais tendências de nail design para 2025, com foco em luxo, sofisticação e inovação. As unhas ganham destaque com acabamentos metalizados, nail arts minimalistas e formatos diferenciados. Aposte em cores clássicas e detalhes em dourado para um visual elegante.

---

[Agende seu horário e venha experimentar as tendências de 2025!](https://wa.me/5511956184727?text=Olá,%20quero%20agendar%20minhas%20unhas%20com%20as%20novas%20tendências%202025%20no%20Espaço%20Oliver%20Beauty)
`,
    image_url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
    tags: ['tendências', 'nail design', '2025', 'luxo'],
    published: true,
    excerpt: 'Descubra o que estará em alta nas unhas em 2025: luxo, sofisticação e inovação no design.'
  },
  {
    title: 'Alongamento em Fibra: A Escolha das Mulheres de Sucesso',
    slug: 'alongamento-fibra-mulheres-sucesso',
    content: `O alongamento em fibra de vidro se tornou o queridinho das mulheres que buscam praticidade e beleza. Com acabamento natural e alta durabilidade, é ideal para quem quer unhas impecáveis todos os dias.

---

[Garanta seu alongamento de fibra com as melhores profissionais!](https://wa.me/5511956184727?text=Olá,%20quero%20agendar%20alongamento%20em%20fibra%20no%20Espaço%20Oliver%20Beauty)
`,
    image_url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    tags: ['alongamento', 'fibra', 'unhas', 'sucesso'],
    published: true,
    excerpt: 'Alongamento em fibra: praticidade, beleza e sucesso para suas unhas.'
  },
  {
    title: 'Spa dos Pés: Relaxamento e Elegância em Barueri',
    slug: 'spa-dos-pes-barueri',
    content: `O Spa dos Pés é a escolha perfeita para quem busca relaxamento e cuidado completo. Em Barueri, oferecemos um ambiente exclusivo, produtos de alta qualidade e técnicas inovadoras para renovar seus pés.

---

[Agende seu Spa dos Pés e viva essa experiência!](https://wa.me/5511956184727?text=Olá,%20quero%20agendar%20meu%20Spa%20dos%20Pés%20no%20Espaço%20Oliver%20Beauty)
`,
    image_url: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92',
    tags: ['spa dos pés', 'relaxamento', 'barueri'],
    published: true,
    excerpt: 'Conheça o Spa dos Pés e descubra um novo nível de relaxamento e elegância.'
  },
  {
    title: 'Como Escolher a Esmalteria Perfeita para Clientes Exigentes',
    slug: 'como-escolher-esmalteria-perfeita',
    content: `Clientes exigentes buscam qualidade, atendimento personalizado e ambiente sofisticado. Veja dicas para escolher a esmalteria perfeita e garantir sempre o melhor resultado para suas unhas.

---

[Agende uma visita e surpreenda-se com nosso atendimento!](https://wa.me/5511956184727?text=Olá,%20quero%20conhecer%20o%20Espaço%20Oliver%20Beauty)
`,
    image_url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
    tags: ['esmalteria', 'dicas', 'clientes exigentes'],
    published: true,
    excerpt: 'Saiba como escolher a esmalteria ideal para quem não abre mão da excelência.'
  },
  {
    title: 'Manicure de Luxo: 5 Motivos para Investir nas Unhas',
    slug: 'manicure-luxo-5-motivos',
    content: `Investir em uma manicure de luxo é investir em autoestima, saúde e imagem pessoal. Descubra 5 motivos para apostar em serviços premium e transformar suas unhas em verdadeiras joias.

---

[Invista em você! Agende sua manicure de luxo.](https://wa.me/5511956184727?text=Olá,%20quero%20agendar%20uma%20manicure%20de%20luxo%20no%20Espaço%20Oliver%20Beauty)
`,
    image_url: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2',
    tags: ['manicure', 'luxo', 'motivos'],
    published: true,
    excerpt: 'Veja por que a manicure de luxo é tendência entre mulheres que valorizam o melhor.'
  },
  {
    title: 'Unhas Perfeitas para Eventos: Dicas para Ocasiões Especiais',
    slug: 'unhas-perfeitas-eventos',
    content: `Eventos especiais pedem unhas impecáveis. Veja dicas de cores, formatos e cuidados para arrasar em festas, casamentos e celebrações.

---

[Agende um horário e prepare-se para brilhar!](https://wa.me/5511956184727?text=Olá,%20quero%20agendar%20minhas%20unhas%20para%20evento%20no%20Espaço%20Oliver%20Beauty)
`,
    image_url: 'https://images.unsplash.com/photo-1464983953574-0892a716854b',
    tags: ['eventos', 'unhas', 'dicas'],
    published: true,
    excerpt: 'Dicas essenciais para ter unhas perfeitas em qualquer ocasião especial.'
  },
  {
    title: 'O que Torna o Espaço Oliver Beauty Único e Exclusivo',
    slug: 'espaco-oliver-beauty-unico',
    content: `Conheça os diferenciais que fazem do Espaço Oliver Beauty uma esmalteria única: atendimento personalizado, ambiente sofisticado, profissionais experientes e serviços exclusivos.

---

[Venha viver essa experiência exclusiva!](https://wa.me/5511956184727?text=Olá,%20quero%20viver%20a%20experiência%20Espaço%20Oliver%20Beauty)
`,
    image_url: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
    tags: ['exclusivo', 'oliver beauty', 'diferenciais'],
    published: true,
    excerpt: 'Descubra por que o Espaço Oliver Beauty é referência em exclusividade e qualidade.'
  },
  {
    title: 'Cuidados com Unhas no Verão: Proteção e Estilo',
    slug: 'cuidados-unhas-verao',
    content: `No verão, as unhas exigem cuidados especiais para manter a beleza e a saúde. Veja dicas de proteção, hidratação e tendências de cores para a estação mais quente do ano.

---

[Agende seu horário e mantenha suas unhas lindas no verão!](https://wa.me/5511956184727?text=Olá,%20quero%20cuidar%20das%20minhas%20unhas%20no%20verão%20no%20Espaço%20Oliver%20Beauty)
`,
    image_url: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
    tags: ['verão', 'cuidados', 'unhas'],
    published: true,
    excerpt: 'Proteja e destaque suas unhas durante o verão com nossas dicas.'
  },
  {
    title: 'Por que Vale Investir em Serviços de Beleza Premium',
    slug: 'vale-investir-beleza-premium',
    content: `Serviços de beleza premium oferecem resultados superiores, mais segurança e uma experiência diferenciada. Descubra por que vale a pena investir em qualidade e exclusividade para sua beleza.

---

[Invista em beleza premium! Agende agora.](https://wa.me/5511956184727?text=Olá,%20quero%20investir%20em%20serviços%20de%20beleza%20premium%20no%20Espaço%20Oliver%20Beauty)
`,
    image_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    tags: ['premium', 'beleza', 'investimento'],
    published: true,
    excerpt: 'Veja os benefícios e diferenciais de escolher serviços de beleza premium.'
  }
];

module.exports = blogPosts;
