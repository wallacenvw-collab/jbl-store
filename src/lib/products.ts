export type Product = {
  slug: string
  name: string
  category: string
  price: number
  description: string
  features: string[]
  badge?: string
  color: string // tailwind gradient classes for the placeholder image
}

export const products: Product[] = [
  {
    slug: "real-madrid-home-24-25",
    name: "Real Madrid I 24/25",
    category: "Clubes Europeus",
    price: 169.9,
    description:
      "Camisa titular do Real Madrid temporada 24/25. Réplica tailandesa premium com acabamento idêntico ao modelo torcedor oficial.",
    features: [
      "Tecido dry-fit respirável",
      "Escudo e patrocínios em alto relevo",
      "Numeração no estilo oficial",
      "Modelagem torcedor (fan version)",
    ],
    badge: "Mais vendido",
    color: "from-violet-500 to-indigo-700",
  },
  {
    slug: "barcelona-away-24-25",
    name: "Barcelona II 24/25",
    category: "Clubes Europeus",
    price: 169.9,
    description:
      "Camisa reserva do Barcelona 24/25. Cores vivas, costura reforçada e toque premium muito acima das réplicas comuns.",
    features: [
      "Tecido dry-fit respirável",
      "Detalhes e escudo termocolados",
      "Gola e punhos acabados",
      "Modelagem torcedor (fan version)",
    ],
    color: "from-blue-800 to-rose-700",
  },
  {
    slug: "brasil-home-24-25",
    name: "Brasil I 24/25 — Seleção",
    category: "Seleções",
    price: 159.9,
    description:
      "A amarelinha titular da Seleção Brasileira. O verde e amarelo que move o país, com acabamento de primeira.",
    features: [
      "Tecido dry-fit respirável",
      "CBF e estrelas bordadas",
      "Numeração no estilo oficial",
      "Modelagem torcedor (fan version)",
    ],
    badge: "Top de linha",
    color: "from-yellow-400 to-green-600",
  },
  {
    slug: "argentina-home-24-25",
    name: "Argentina I 24/25 — Seleção",
    category: "Seleções",
    price: 159.9,
    description:
      "Camisa titular da Argentina com as três estrelas de campeã mundial. Listras albicelestes em tecido premium.",
    features: [
      "Tecido dry-fit respirável",
      "Três estrelas de campeã",
      "Escudo da AFA bordado",
      "Modelagem torcedor (fan version)",
    ],
    color: "from-sky-400 to-blue-500",
  },
  {
    slug: "manchester-city-home-24-25",
    name: "Manchester City I 24/25",
    category: "Clubes Europeus",
    price: 169.9,
    description:
      "Camisa titular do Manchester City 24/25 em azul celeste clássico. Acabamento superior ao das réplicas de mercado.",
    features: [
      "Tecido dry-fit respirável",
      "Escudo e patrocínios em alto relevo",
      "Numeração no estilo oficial",
      "Modelagem torcedor (fan version)",
    ],
    color: "from-sky-400 to-sky-600",
  },
  {
    slug: "flamengo-home-24-25",
    name: "Flamengo I 24/25",
    category: "Clubes Brasileiros",
    price: 159.9,
    description:
      "O manto rubro-negro do Flamengo. Listras vermelhas e pretas com a qualidade tailandesa premium da JBL Store.",
    features: [
      "Tecido dry-fit respirável",
      "Escudo e patrocínios termocolados",
      "Numeração no estilo oficial",
      "Modelagem torcedor (fan version)",
    ],
    badge: "Novo",
    color: "from-red-700 to-zinc-900",
  },
  {
    slug: "psg-home-24-25",
    name: "PSG I 24/25",
    category: "Clubes Europeus",
    price: 169.9,
    description:
      "Camisa titular do Paris Saint-Germain com a icônica faixa central Hechter. Elegância parisiense em tecido premium.",
    features: [
      "Tecido dry-fit respirável",
      "Faixa central clássica Hechter",
      "Escudo e patrocínios em alto relevo",
      "Modelagem torcedor (fan version)",
    ],
    color: "from-blue-900 to-rose-600",
  },
  {
    slug: "brasil-retro-1970",
    name: "Brasil Retrô 1970",
    category: "Retrô",
    price: 189.9,
    description:
      "A lendária amarelinha tricampeã de 1970. Modelo retrô em homenagem ao time mais bonito de todos os tempos.",
    features: [
      "Tecido com toque vintage",
      "Escudo bordado da época",
      "Gola careca clássica",
      "Edição colecionador",
    ],
    badge: "Edição retrô",
    color: "from-amber-400 to-green-700",
  },
]

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function formatPrice(value: number): string {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}
