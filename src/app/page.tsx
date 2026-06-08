import { products } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { Logo } from "@/components/logo"

export default function Home() {
  return (
    <div className="container py-10">
      {/* Hero */}
      <section className="overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-950 via-zinc-900 to-red-700 px-8 py-16 text-[#ECE8DF] sm:px-16 sm:py-24">
        <div className="max-w-2xl">
          <Logo className="mb-6 text-3xl text-[#ECE8DF]" />
          <h1 className="font-display text-5xl uppercase leading-[0.95] tracking-tight sm:text-7xl">
            Vista o mundo.
          </h1>
          <p className="mt-5 max-w-lg text-lg text-[#ECE8DF]/80">
            Camisas tailandesas premium de clubes e seleções do mundo inteiro.
            Acabamento superior, catálogo sem igual. Frete para todo o Brasil.
          </p>
          <Button asChild size="lg" className="mt-8">
            <a href="#produtos">Ver camisas</a>
          </Button>
        </div>
      </section>

      {/* Produtos */}
      <section id="produtos" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold tracking-tight">Nossas camisas</h2>
        <p className="mt-1 text-muted-foreground">
          {products.length} modelos disponíveis · Tailandesa Premium
        </p>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}
