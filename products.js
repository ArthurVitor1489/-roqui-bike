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
    id: "farol-led-1000lm",
    name: "Farol Bike LED 1000 Lúmens Recarregável USB-C IPX6",
    brand: "Linha Rockbros Pro",
    category: "iluminacao",
    categoryLabel: "Iluminação & Segurança",
    price: 139.90,
    compareAtPrice: 229.90,
    rating: 4.9,
    reviewsCount: 342,
    badge: "MAIS VENDIDO",
    badgeType: "hot",
    image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=900&q=80",
    specs: [
      "Potência Real: 1000 Lúmens (Alcance de 200m)",
      "Bateria: 4800mAh (Até 8h de duração) USB-C",
      "Proteção: IPX6 (100% Resistente a chuva forte)",
      "Corpo em Alumínio Aeronáutico CNC (152g)"
    ],
    variantsLabel: "Suporte Incluso",
    variants: ["Suporte Guidão Padrão", "Suporte Central (Estilo GoPro)"],
    hasSizeChart: false,
    checkoutUrl: "", // Cole aqui seu link da Yampi / Mercado Pago se desejar
    supplierReference: "AliExpress - Rockbros RHL1000 / 1000LM"
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
    id: "bretelle-gel-9d-carbon",
    name: "Bretelle Ciclismo Pro Carbon Forro Gel 9D Alta Densidade",
    brand: "RoquiBike Apparel",
    category: "vestuario",
    categoryLabel: "Vestuário & Proteção",
    price: 169.90,
    compareAtPrice: 279.90,
    rating: 4.9,
    reviewsCount: 412,
    badge: "CONFORTO 7H+ PEDAL",
    badgeType: "hot",
    image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=900&q=80",
    specs: [
      "Forro anatômico em Gel 9D respirável (Ideal para pedais de 5h a 8h)",
      "Tecido Lycra Compressão com alças em Mesh ultra ventilado",
      "Barras com fita de silicone italiana (não sobe na perna)",
      "Costura Flatlock anti-atrito + detalhes refletivos 3M"
    ],
    variantsLabel: "Tamanho (BR)",
    variants: ["P", "M", "G", "GG", "3G"],
    hasSizeChart: true,
    checkoutUrl: "",
    supplierReference: "AliExpress - Kemaloce / Darevie Bib Shorts Gel"
  },
  {
    id: "lanterna-traseira-sensor-freio",
    name: "Lanterna Traseira Inteligente LED com Sensor Automático de Freio",
    brand: "Linha Rockbros Q5",
    category: "iluminacao",
    categoryLabel: "Iluminação & Segurança",
    price: 89.90,
    compareAtPrice: 149.90,
    rating: 4.9,
    reviewsCount: 624,
    badge: "FRETE GRÁTIS",
    badgeType: "promo",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=900&q=80",
    specs: [
      "Sensor de Frenagem: Brilho máximo automático ao reduzir a velocidade",
      "Modo Inteligente: Desliga sozinha no claro e liga ao detectar movimento",
      "Bateria USB-C de até 40 horas no modo flash",
      "Inclui suporte para Selim (trilho) e para Canote"
    ],
    variantsLabel: "Fixação",
    variants: ["Kit Completo (Selim + Canote)"],
    hasSizeChart: false,
    checkoutUrl: "",
    supplierReference: "AliExpress - Rockbros Q5 Smart Brake Tail Light"
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
    id: "mini-bomba-eletrica-digital",
    name: "Mini Compressor Portátil Digital 120 PSI para Pneus Speed e MTB",
    brand: "Cycplus / West Biking",
    category: "acessorios",
    categoryLabel: "Manutenção & Bolsas",
    price: 249.90,
    compareAtPrice: 389.90,
    rating: 4.9,
    reviewsCount: 163,
    badge: "NOVIDADE",
    badgeType: "tech",
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=900&q=80",
    specs: [
      "Enche pneu MTB ou Speed (até 120 PSI) em menos de 80 segundos",
      "Desligamento automático ao atingir a pressão programada no visor",
      "Compatível com válvula Presta (bico fino) e Schrader (bico grosso)",
      "Tamanho de bolso: Cabe na camisa de ciclismo ou bolsa de selim"
    ],
    variantsLabel: "Modelo",
    variants: ["Versão 120 PSI com Visor LED"],
    hasSizeChart: false,
    checkoutUrl: "",
    supplierReference: "AliExpress - Cycplus A2 / Tiny Pump Cube"
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
