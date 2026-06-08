import { products } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"

export default function Home() {
  return (
    <div className="container py-10">
      {/* Hero */}
      <section className="overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-orange-600 px-8 py-16 text-white sm:px-16 sm:py-24">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-300">
            JBL Store
          </p>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
            Som que move você.
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Caixas portáteis, fones de ouvido e equipamentos de festa com a
            qualidade lendária JBL. Frete grátis em todo o Brasil.
          </p>
          <Button asChild size="lg" className="mt-8">
            <a href="#produtos">Ver produtos</a>
          </Button>
        </div>
      </section>

      {/* Produtos */}
      <section id="produtos" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold tracking-tight">Nossos produtos</h2>
        <p className="mt-1 text-muted-foreground">
          {products.length} produtos disponíveis
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
