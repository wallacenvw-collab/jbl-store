# JBL Store

Loja e-commerce de **camisas de futebol tailandesas** — réplicas premium de clubes e seleções do mundo inteiro, com acabamento superior ao das réplicas comuns.

> **Vista o mundo.**

## Stack

- **Next.js 14** (App Router, TypeScript, `src/`)
- **Tailwind CSS v3** + **shadcn/ui** (componentes em estilo React 18 com `forwardRef`)
- **lucide-react** (ícones)
- Carrinho de compras com **React Context** + persistência em `localStorage`

## Identidade visual

- **Cores:** Preto `#0D0F12` · Marfim `#ECE8DF` · Vermelho `#E5342A`
- **Fontes:** Anton (logo/títulos) + Manrope (corpo)
- **Logo:** tipográfico — "JBL" com o B em vermelho, "STORE" abaixo

## Funcionalidades

- Página inicial com hero e grade de camisas
- Página de detalhes do produto (`/produtos/[slug]`, gerada estaticamente)
- Carrinho de compras (`/carrinho`): adicionar, remover, alterar quantidade, resumo do pedido
- Contador de itens no cabeçalho, persistido entre sessões

## Como rodar

```bash
npm install
npm run dev      # http://localhost:3000
```

Outros comandos:

```bash
npm run build    # build de produção
npm run start    # servir o build
npm run lint     # ESLint
```

## Estrutura

```
src/
├── app/
│   ├── layout.tsx               # layout raiz (CartProvider + header)
│   ├── page.tsx                 # home (hero + grade)
│   ├── produtos/[slug]/page.tsx # detalhe do produto
│   └── carrinho/page.tsx        # carrinho
├── components/
│   ├── logo.tsx                 # logotipo tipográfico
│   ├── site-header.tsx          # cabeçalho com contador do carrinho
│   ├── product-card.tsx         # card de produto
│   ├── product-image.tsx        # placeholder (gradiente + ícone de camisa)
│   ├── add-to-cart-button.tsx   # botão "Adicionar"
│   └── ui/                      # componentes shadcn
└── lib/
    ├── products.ts              # catálogo de camisas + helpers
    ├── cart-context.tsx         # estado do carrinho
    └── utils.ts                 # cn()
```

## Próximos passos sugeridos

- Fotos reais das camisas (hoje são placeholders com gradiente + ícone)
- Catálogo dinâmico (CMS ou banco de dados) com filtros por liga/seleção
- Checkout/pagamento (ex.: Stripe ou Mercado Pago)
- Autenticação de usuários e histórico de pedidos
