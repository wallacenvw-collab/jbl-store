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
    slug: "jbl-flip-6",
    name: "JBL Flip 6",
    category: "Caixas Portáteis",
    price: 699.9,
    description:
      "Som potente e nítido em um corpo à prova d'água. Leve para qualquer lugar e curta até 12 horas de música.",
    features: [
      "À prova d'água e poeira (IP67)",
      "Até 12h de reprodução",
      "Bluetooth 5.1",
      "Tecnologia JBL PartyBoost",
    ],
    badge: "Mais vendido",
    color: "from-orange-400 to-red-500",
  },
  {
    slug: "jbl-charge-5",
    name: "JBL Charge 5",
    category: "Caixas Portáteis",
    price: 1099.9,
    description:
      "Graves profundos, bateria que dura o dia todo e ainda carrega seus dispositivos via USB.",
    features: [
      "Até 20h de reprodução",
      "Powerbank integrado",
      "À prova d'água (IP67)",
      "Radiadores de graves duplos",
    ],
    color: "from-blue-500 to-indigo-600",
  },
  {
    slug: "jbl-tune-770nc",
    name: "JBL Tune 770NC",
    category: "Fones de Ouvido",
    price: 899.9,
    description:
      "Headphone over-ear com cancelamento de ruído adaptativo e até 70 horas de bateria.",
    features: [
      "Cancelamento de ruído adaptativo",
      "Até 70h de bateria",
      "JBL Pure Bass Sound",
      "Conexão multiponto",
    ],
    badge: "Novo",
    color: "from-slate-700 to-slate-900",
  },
  {
    slug: "jbl-live-pro-2",
    name: "JBL Live Pro 2",
    category: "Fones de Ouvido",
    price: 749.9,
    description:
      "Fones true wireless com cancelamento de ruído verdadeiro e chamadas cristalinas.",
    features: [
      "True Adaptive Noise Cancelling",
      "6 microfones para chamadas",
      "Até 40h com o estojo",
      "Resistente a água (IPX5)",
    ],
    color: "from-emerald-400 to-teal-600",
  },
  {
    slug: "jbl-partybox-110",
    name: "JBL PartyBox 110",
    category: "Festa",
    price: 2799.9,
    description:
      "160W de potência com show de luzes sincronizado. A trilha sonora perfeita para qualquer festa.",
    features: [
      "160W RMS de potência",
      "Show de luzes dinâmico",
      "Entradas para microfone e guitarra",
      "Bateria de até 12h",
    ],
    badge: "Top de linha",
    color: "from-fuchsia-500 to-purple-700",
  },
  {
    slug: "jbl-go-4",
    name: "JBL Go 4",
    category: "Caixas Portáteis",
    price: 299.9,
    description:
      "Ultraportátil e cheia de atitude. O som JBL que cabe no bolso por um preço imbatível.",
    features: [
      "Até 7h de reprodução",
      "À prova d'água e poeira (IP67)",
      "JBL Pro Sound",
      "Design compacto com alça",
    ],
    color: "from-amber-400 to-orange-500",
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
