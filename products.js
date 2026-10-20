// ============================================================================
// CONFIGURAÇÃO DA SUA LOJA DE DROPSHIPPING (EDITE AQUI SEUS DADOS E PRODUTOS)
// ============================================================================

const STORE_CONFIG = {
  storeName: "RoquiBike",
  whatsappNumber: "5511999999999", // Coloque seu número com DDD (apenas números)
  pixDiscountPercent: 10,          // % de desconto no PIX
  maxInstallments: 12,             // Parcelamento máximo exibido
  freeShippingMin: 149.90,         // Valor mínimo para frete grátis (0 = sempre grátis)
  pixKey: "contato@roquibike.com.br" // Chave PIX caso use o checkout direto do site
};

// ============================================================================
// LISTA DE PRODUTOS CAMPEÕES DE DROPSHIPPING (CICLISMO)
// Dica: Troque "checkoutUrl" pelo seu link do Mercado Pago, Yampi ou Cartpanda.
// Se deixar "checkoutUrl" vazio (""), o site finaliza pelo Checkout Próprio/WhatsApp!
// ============================================================================

const PRODUCTS = [
  {
    id: "freio-hidraulico-shimano-m4100-mt420",
    name: "Freio a Disco Hidráulico Shimano BL-M4100 + Pinça BR-MT420 4 Pistões MTB",
    brand: "Shimano Deore Series",
    category: "acessorios",
    categoryLabel: "Peças & Performance",
    price: 389.90,
    compareAtPrice: 479.90,
    rating: 4.9,
    reviewsCount: 188,
    badge: "4 PISTÕES • SHIMANO",
    badgeType: "hot",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S76bcbfe747c848f383ccce681cc4b97fE.jpg",
    specs: [
      "Pinça Shimano BR-MT420 de 4 Pistões (90% mais força de frenagem que 2 pistões)",
      "Manete Ergonômico Shimano BL-M4100 com tecnologia I-SPEC EV",
      "Sistema sangrado de fábrica com óleo mineral Shimano (Pronto para instalar)",
      "Pastilhas de Resina D03S inclusas • Vendido por lado (Dianteiro ou Traseiro)"
    ],
    variantsLabel: "Escolha o Lado / Comprimento da Mangueira",
    variants: [
      "Dianteiro Esquerdo (850mm)",
      "Traseiro Direito (1600mm)",
      "Traseiro Direito (1650mm)",
      "Traseiro Direito (1700mm)"
    ],
    hasSizeChart: false,
    checkoutUrl: "",
    supplierUrl: "https://pt.aliexpress.com/item/1005010078208915.html",
    supplierReference: "AliExpress ID: 1005010078208915 (Shimano BL-M4100 BR-MT420)"
  },
  {
    id: "disco-rotor-shimano-rt86-rt76-rt66",
    name: "Disco Rotor de Freio Shimano Deore XT SM-RT86 / SLX RT76 / RT66 (6 Parafusos)",
    brand: "Shimano XT / SLX Series",
    category: "acessorios",
    categoryLabel: "Peças & Performance",
    price: 189.90,
    compareAtPrice: 269.90,
    rating: 4.9,
    reviewsCount: 753,
    badge: "ICE-TECH • SHIMANO",
    badgeType: "tech",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sf29dba80fdd54b48a2b75c323c221ba8V.jpg",
    specs: [
      "Fixação padrão Internacional de 6 Parafusos (Acompanha parafusos Torx e travas)",
      "Dissipação térmica avançada para frenagens longas em MTB, Enduro e Downhill",
      "Compatível com pastilhas de Resina (Orgânica) e Metal (Sinterizada)",
      "Disponível nos diâmetros 160mm, 180mm e 203mm (Linhas RT66, RT76 e XT RT86)"
    ],
    variantsLabel: "Modelo e Diâmetro do Disco",
    variants: [
      "SM-RT66 • 160mm",
      "SM-RT66 • 180mm",
      "SM-RT76 SLX • 180mm",
      "SM-RT86 XT Ice-Tech • 160mm",
      "SM-RT86 XT Ice-Tech • 180mm",
      "SM-RT86 XT Ice-Tech • 203mm"
    ],
    hasSizeChart: false,
    checkoutUrl: "",
    supplierUrl: "https://pt.aliexpress.com/item/32510071652.html",
    supplierReference: "AliExpress ID: 32510071652 (Shimano SM-RT86 / RT76 / RT66)"
  },
  {
    id: "pneu-maxxis-aspen-29-kevlar-tubeless",
    name: "Pneu MTB Maxxis Aspen ST 29x2.25 / 29x2.10 Kevlar Dobrável Tubeless Ready XC",
    brand: "Maxxis Pro Racing",
    category: "acessorios",
    categoryLabel: "Peças & Performance",
    price: 349.90,
    compareAtPrice: 449.90,
    rating: 4.9,
    reviewsCount: 1971,
    badge: "+1.900 VENDIDOS",
    badgeType: "hot",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S9fc91e97f81147c29d74621b2187b4c2J.jpg",
    specs: [
      "Estrutura Dobrável em Kevlar (Aramida) ultra leve para Cross-Country (XC)",
      "Tecnologia EXO Protection nas laterais (alta resistência a cortes e furos)",
      "Compatível com sistema Tubeless Ready (Sem câmara / Selante) ou Câmara",
      "Cravos de perfil baixo para máxima velocidade de rolagem e grip em curvas"
    ],
    variantsLabel: "Medida e Modelo",
    variants: [
      "29x2.10 • Kevlar Padrão",
      "29x2.25 • EXO Tubeless Ready (Preto)",
      "29x2.25 • EXO Tubeless (Banda Marrom)",
      "29x2.25 • Aspen ST Fast XC"
    ],
    hasSizeChart: false,
    checkoutUrl: "",
    supplierUrl: "https://pt.aliexpress.com/item/1005005896095673.html",
    supplierReference: "AliExpress ID: 1005005896095673 (Maxxis Aspen 29x2.25 / 2.10)"
  },
  {
    id: "ciclocomputador-gps-igpsport-bsc200",
    name: "Ciclocomputador GPS iGPSPORT BSC200 Navegação por Rota ANT+ Bluetooth 5.0",
    brand: "iGPSPORT Oficial",
    category: "tecnologia",
    categoryLabel: "GPS & Tecnologia",
    price: 429.90,
    compareAtPrice: 549.90,
    rating: 4.9,
    reviewsCount: 25157,
    badge: "+25 MIL VENDIDOS",
    badgeType: "tech",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sa5737f026545431fa00ab845c5d566a8Q.jpg",
    specs: [
      "Navegação de Rota curva a curva na tela + Sincronização automática com Strava",
      "Tela LCD antirreflexo de 2.6\" com mais de 140 dados configuráveis pelo App",
      "Conexão Bluetooth 5.0 e ANT+ (Suporta Potenciômetro, Cadência, Cinta Cardíaca e Câmbio Eletrônico)",
      "Bateria de longa duração (até 30h de pedal) com carregamento rápido USB-C e proteção IPX7"
    ],
    variantsLabel: "Escolha o Kit",
    variants: [
      "BSC200 + Suporte Padrão",
      "BSC200 + Capa Silicone + Película",
      "BSC200 + Suporte Alongado Frontal M80"
    ],
    hasSizeChart: false,
    checkoutUrl: "",
    supplierUrl: "https://pt.aliexpress.com/item/1005013265974404.html",
    supplierReference: "AliExpress ID: 1005013265974404 (iGPSPORT BSC200)"
  },
  {
    id: "farol-led-offbondage-1000lm",
    name: "Farol Bike LED OFFBONDAGE 1000 Lúmens + Power Bank USB-C Alumínio",
    brand: "OFFBONDAGE Oficial",
    category: "iluminacao",
    categoryLabel: "Iluminação & Segurança",
    price: 139.90,
    compareAtPrice: 219.90,
    rating: 4.9,
    reviewsCount: 3420,
    badge: "1000 LÚMENS + POWER BANK",
    badgeType: "hot",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S8f34d618f7d04f03a99869fa1db3f37ar.jpg",
    specs: [
      "Potência Real de 1000 Lúmens com facho amplo anti-ofuscamento (Alcance de 200m+)",
      "Função Power Bank 2 em 1: Bateria de 4800mAh recarrega celular ou GPS via USB",
      "Corpo em Liga de Alumínio Aeronáutico dissipador de calor + Proteção IPX5 contra chuva",
      "5 Modos de Iluminação + Suporte de guidão engate rápido 360° incluso"
    ],
    variantsLabel: "Versão / Suporte",
    variants: [
      "1000 Lúmens (4800mAh) + Suporte Guidão",
      "1000 Lúmens + Suporte Duplo (Guidão + GoPro)"
    ],
    hasSizeChart: false,
    checkoutUrl: "",
    supplierUrl: "https://pt.aliexpress.com/item/1005005937076593.html",
    supplierReference: "AliExpress ID: 1005005937076593 (OFFBONDAGE 1000LM HR3-1000)"
  },
  {
    id: "bretelle-ciclismo-darevie-2-pro",
    name: "Bretelle Ciclismo Masculino DAREVIE 2.0 PRO Seamless Forro 7h+ Pedal",
    brand: "DAREVIE Oficial",
    category: "vestuario",
    categoryLabel: "Vestuário & Proteção",
    price: 249.90,
    compareAtPrice: 349.90,
    rating: 4.9,
    reviewsCount: 9498,
    badge: "+9.400 VENDIDOS",
    badgeType: "hot",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sc7de74c57fc8420d9a223da6923b46e2u.jpg",
    specs: [
      "Versão 2.0 PRO Seamless: Corte a laser sem costura nas alças e barras (zero atrito)",
      "Forro Anatômico Multi-Densidade DAREVIE Pro projetado para pedais longos de 6h a 8h+",
      "Tecido Lycra 4-Way Stretch de alta compressão muscular e respirabilidade",
      "Acompanha Tabela de Medidas oficial (P ao 3G)"
    ],
    variantsLabel: "Tamanho (Padrão BR / Asiático)",
    variants: [
      "P (S) • 55-65kg",
      "M (M) • 65-75kg",
      "G (L) • 75-85kg",
      "GG (XL) • 85-95kg",
      "3G (XXL) • 95-108kg"
    ],
    hasSizeChart: true,
    checkoutUrl: "",
    supplierUrl: "https://pt.aliexpress.com/item/1005006613541893.html",
    supplierReference: "AliExpress ID: 1005006613541893 (DAREVIE 2.0 PRO Bib Shorts)"
  },
  {
    id: "lanterna-traseira-tosuod-smart-ipx6",
    name: "Lanterna Traseira Inteligente TOSUOD LED USB-C 400mAh IPX6 Sensor de Freio",
    brand: "TOSUOD Pro Light",
    category: "iluminacao",
    categoryLabel: "Iluminação & Segurança",
    price: 89.90,
    compareAtPrice: 149.90,
    rating: 4.9,
    reviewsCount: 284,
    badge: "DETECÇÃO INTELIGENTE",
    badgeType: "promo",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sb5ec01a0086a458898c649ace1853c091.jpg",
    specs: [
      "Detecção Inteligente de Frenagem: Acende em brilho máximo automaticamente ao frear",
      "Bateria de 400mAh recarregável via USB Tipo-C (5 modos de iluminação de alto brilho)",
      "Blindagem IPX6 à prova d'água e lama para pedais em qualquer clima",
      "Acompanha suporte duplo (Instalação nos trilhos do Selim ou no Canote)"
    ],
    variantsLabel: "Fixação Inclusa",
    variants: [
      "Suporte de Selim (Trilho)",
      "Suporte de Canote",
      "Kit Duplo (Selim + Canote)"
    ],
    hasSizeChart: false,
    checkoutUrl: "",
    supplierUrl: "https://pt.aliexpress.com/item/1005010552095486.html",
    supplierReference: "AliExpress ID: 1005010552095486 (TOSUOD Smart Tail Light 400mAh)"
  },
  {
    id: "lanterna-traseira-rockbros-inteligente-aluminio",
    name: "Lanterna Traseira Rockbros Inteligente Sensor de Freio em Alumínio CNC USB-C",
    brand: "Rockbros Oficial",
    category: "iluminacao",
    categoryLabel: "Iluminação & Segurança",
    price: 119.90,
    compareAtPrice: 179.90,
    rating: 4.9,
    reviewsCount: 18242,
    badge: "+18 MIL VENDIDOS",
    badgeType: "hot",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S83df1a4376584b0686f6fbe0d8a98655h.jpg",
    specs: [
      "Corpo usinado em Alumínio CNC de alta resistência a impactos",
      "Sensor de Aceleração/Frenagem: Brilho máximo contínuo ao desacelerar",
      "Modo Auto Sleep / Wake: Desliga após 30s parada e religa ao menor movimento",
      "Bateria USB Tipo-C com autonomia de até 35 horas no modo pulsante"
    ],
    variantsLabel: "Modelo do Suporte",
    variants: [
      "Suporte Trilho de Selim",
      "Suporte Abraçadeira Canote",
      "Kit Completo (Selim + Canote)"
    ],
    hasSizeChart: false,
    checkoutUrl: "",
    supplierUrl: "https://pt.aliexpress.com/item/1005007966963944.html",
    supplierReference: "AliExpress ID: 1005007966963944 (Rockbros Smart Tail Light CNC)"
  },
  {
    id: "ciclocomputador-geoid-cc600-tela-colorida",
    name: "Ciclocomputador GPS GEOID CC600 Tela Colorida 2.4\" ANT+ Bluetooth Strava",
    brand: "GEOID / Magene Ecosystem",
    category: "tecnologia",
    categoryLabel: "GPS & Tecnologia",
    price: 369.90,
    compareAtPrice: 489.90,
    rating: 4.9,
    reviewsCount: 890,
    badge: "TELA COLORIDA",
    badgeType: "tech",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S93727a5577604e70b816a504ced40ec1T.jpg",
    specs: [
      "Tela Colorida HD de 2.4 polegadas com ajuste automático de contraste no sol",
      "Sincronização instantânea com Strava, TrainingPeaks e App GEOID",
      "Conexão Dual Bluetooth 5.0 + ANT+ (Cadência, Velocidade, Frequência Cardíaca e Potência)",
      "Bateria de até 22 horas de pedal contínuo com GPS ativo + Proteção IPX7"
    ],
    variantsLabel: "Kit de Acessórios",
    variants: [
      "Aparelho CC600 + Suporte Guidão",
      "CC600 + Capa Protetora de Silicone",
      "CC600 + Suporte Frontal Aero Avançado"
    ],
    hasSizeChart: false,
    checkoutUrl: "",
    supplierUrl: "https://pt.aliexpress.com/item/1005008527431343.html",
    supplierReference: "AliExpress ID: 1005008527431343 (GEOID CC600 Color Screen)"
  },
  {
    id: "pedal-clip-mtb-racework-spd",
    name: "Pedal Clip MTB RACEWORK com Rolamentos Selados (Compatível Shimano SPD)",
    brand: "RACEWORK Pro Cycling",
    category: "acessorios",
    categoryLabel: "Peças & Performance",
    price: 179.90,
    compareAtPrice: 259.90,
    rating: 4.8,
    reviewsCount: 642,
    badge: "INCLUI TACOS SPD",
    badgeType: "hot",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S65395386746c4a05b5b81aca4cce21c5z.jpg",
    specs: [
      "Sistema de encaixe duplo padrão Shimano SPD (Acompanha par de tacos + parafusos)",
      "2 Rolamentos selados DU de alta durabilidade com vedação total contra poeira e lama",
      "Corpo em Liga de Alumínio CNC ultra resistente com eixo em Aço Cromo-Molibdênio",
      "Ajuste micrométrico de tensão da mola para engate e desengate fácil e seguro"
    ],
    variantsLabel: "Cor dos Detalhes",
    variants: [
      "Preto Stealth (Eixo Prata)",
      "Preto com Detalhe Dourado",
      "Preto com Detalhe Vermelho"
    ],
    hasSizeChart: false,
    checkoutUrl: "",
    supplierUrl: "https://pt.aliexpress.com/item/1005007345198652.html",
    supplierReference: "AliExpress ID: 1005007345198652 (RACEWORK MTB SPD Pedals)"
  },
  {
    id: "mini-bomba-ar-eletrica-100psi-portatil",
    name: "Mini Bomba de Ar Elétrica Portátil Recarregável 100 PSI USB-C para Bike",
    brand: "TinyAir Pro Lab",
    category: "acessorios",
    categoryLabel: "Manutenção & Ferramentas",
    price: 179.90,
    compareAtPrice: 269.90,
    rating: 4.9,
    reviewsCount: 10113,
    badge: "+10 MIL VENDIDOS",
    badgeType: "tech",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/S1f27b5e0186f4f20888f7655ce168cefP.jpg",
    specs: [
      "Pressão Máxima de 100 PSI: Enche 2 a 3 pneus vazios de Speed ou MTB com uma única carga",
      "Ultracompacta (Tamanho de bolso): Apenas 130g, cabe no bolso da camisa de ciclismo",
      "Bico inteligente duplo compatível com válvulas Presta (bico fino) e Schrader (bico grosso)",
      "Bateria de lítio recarregável via USB Tipo-C de carregamento rápido em 40 minutos"
    ],
    variantsLabel: "Kit de Acessórios",
    variants: [
      "Mini Bomba + Cabo USB-C + Bicos Presta/Schrader",
      "Kit Completo com Capa Térmica de Silicone"
    ],
    hasSizeChart: false,
    checkoutUrl: "",
    supplierUrl: "https://pt.aliexpress.com/item/1005010298862051.html",
    supplierReference: "AliExpress ID: 1005010298862051 (Electric Bike Pump 100PSI)"
  },
  {
    id: "mini-bomba-eletrica-rockbros-100psi-cnc",
    name: "Mini Bomba Elétrica Rockbros Oficial 100 PSI Alumínio CNC USB-C",
    brand: "Rockbros Oficial",
    category: "acessorios",
    categoryLabel: "Manutenção & Ferramentas",
    price: 259.90,
    compareAtPrice: 359.90,
    rating: 4.9,
    reviewsCount: 448,
    badge: "ROCKBROS ORIGINAL",
    badgeType: "hot",
    image: "https://ae-pic-a1.aliexpress-media.com/kf/Sa8bed5cd341a43058975f7685491b354k.jpg",
    specs: [
      "Original Rockbros: Construção premium em Alumínio Aeroespacial CNC",
      "Pressão Real de até 100 PSI com bico duplo inteligente (Presta FV e Schrader AV)",
      "Motor brushless ultra potente com dissipação térmica aprimorada",
      "Acompanha capa de silicone protetora térmica, bico extensor e cabo USB-C"
    ],
    variantsLabel: "Versão Rockbros",
    variants: [
      "Rockbros 100 PSI + Capa Silicone Térmica",
      "Rockbros 100 PSI + Kit Completo Mangueira Flexível"
    ],
    hasSizeChart: false,
    checkoutUrl: "",
    supplierUrl: "https://pt.aliexpress.com/item/1005006894238389.html",
    supplierReference: "AliExpress ID: 1005006894238389 (Rockbros Electric Pump 100PSI)"
  },
  {
    id: "gps-ciclocomputador-xoss",
    name: "Ciclocomputador GPS Wireless Bluetooth ANT+ (Sincroniza Strava)",
    brand: "XOSS / iGPSPORT Series",
    category: "tecnologia",
    categoryLabel: "GPS & Tecnologia",
    price: 219.90,
    compareAtPrice: 349.90,
    rating: 4.9,
    reviewsCount: 518,
    badge: "COMPATÍVEL STRAVA",
    badgeType: "tech",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80",
    specs: [
      "Conexão: GPS + GLONASS + Galileo de alta precisão",
      "Sincronização direta com App e Strava via Bluetooth",
      "Suporte a sensores ANT+ (Cadência, Velocidade e Cinta Cardíaca)",
      "Bateria para até 25 horas de pedal contínuo + IPX7"
    ],
    variantsLabel: "Kit",
    variants: ["Apenas GPS + Suporte", "GPS + Suporte Alongado Frontal"],
    hasSizeChart: false,
    checkoutUrl: "",
    supplierReference: "AliExpress - XOSS G+ Gen2"
  },
  {
    id: "oculos-fotocromatico-uv400",
    name: "Óculos Ciclismo Fotocromático Polarizado UV400 Ultra Leve",
    brand: "Kapvoe Pro Vision",
    category: "vestuario",
    categoryLabel: "Vestuário & Proteção",
    price: 129.90,
    compareAtPrice: 219.90,
    rating: 4.8,
    reviewsCount: 289,
    badge: "LENTE INTELIGENTE",
    badgeType: "new",
    image: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=900&q=80",
    specs: [
      "Lente Fotocromática: Transparente à noite / Escurece no sol",
      "Proteção UV400 completa contra raios UVA e UVB",
      "Armação TR90 flexível ultra leve (Apenas 28g)",
      "Acompanha estojo rígido + suporte para lente de grau"
    ],
    variantsLabel: "Cor da Armação",
    variants: ["Preto Carbono / Vermelho", "Branco Aero / Neon", "Preto Fosco Stealth"],
    hasSizeChart: false,
    checkoutUrl: "",
    supplierReference: "AliExpress - Kapvoe Photochromic"
  },
  {
    id: "camisa-ciclismo-aero-pro",
    name: "Camisa Ciclismo Aero Pro Dry-Fit UV50+ Zíper Inteiro",
    brand: "RoquiBike Apparel",
    category: "vestuario",
    categoryLabel: "Vestuário & Proteção",
    price: 119.90,
    compareAtPrice: 189.90,
    rating: 4.8,
    reviewsCount: 195,
    badge: "PROTEÇÃO UV50+",
    badgeType: "new",
    image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=900&q=80",
    specs: [
      "Tecido Microfibra Poliéster + Elastano de secagem ultra rápida",
      "3 Bolsos traseiros reforçados + 1 bolso impermeável com zíper",
      "Zíper frontal inteligente YKK com trava semiautomática",
      "Proteção Solar FPU 50+ certificada"
    ],
    variantsLabel: "Tamanho (BR)",
    variants: ["P", "M", "G", "GG", "3G"],
    hasSizeChart: true,
    checkoutUrl: "",
    supplierReference: "AliExpress - YKYWBIKE / Spexcel Aero Jersey"
  },
  {
    id: "bolsa-quadro-impermeavel",
    name: "Bolsa de Quadro Impermeável Carbon com Visor Touch 6.8\"",
    brand: "West Biking Pro",
    category: "acessorios",
    categoryLabel: "Manutenção & Bolsas",
    price: 97.90,
    compareAtPrice: 159.90,
    rating: 4.7,
    reviewsCount: 274,
    badge: "100% IMPERMEÁVEL",
    badgeType: "promo",
    image: "https://images.unsplash.com/photo-1505705694340-019e1e335916?auto=format&fit=crop&w=900&q=80",
    specs: [
      "Visor TPU de alta sensibilidade para usar GPS/Strava no celular",
      "Capacidade de 1.8L para chaves, câmara reserva, CO2 e géis",
      "Zíper duplo selado à prova d'água + aba quebra-sol",
      "Fixação em 3 pontos com velcro emborrachado que não risca o quadro"
    ],
    variantsLabel: "Tamanho",
    variants: ["Universal (Celulares até 6.8 polegadas)"],
    hasSizeChart: false,
    checkoutUrl: "",
    supplierReference: "AliExpress - West Biking Waterproof Frame Bag"
  }
];
