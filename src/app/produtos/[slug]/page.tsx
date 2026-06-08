import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Check } from "lucide-react"

import { getProduct, products, formatPrice } from "@/lib/products"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { AddToCartButton } from "@/components/add-to-cart-button"
import { ProductImage } from "@/components/product-image"

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug)
  if (!product) notFound()

  return (
    <div className="container py-10">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Voltar para a loja
      </Link>

      <div className="mt-6 grid gap-8 lg:grid-cols-2">
        <ProductImage
          product={product}
          className="aspect-square rounded-2xl"
          iconClassName="h-32 w-32"
        />

        <div>
          <div className="flex items-center gap-3">
            <p className="text-sm text-muted-foreground">{product.category}</p>
            {product.badge && <Badge>{product.badge}</Badge>}
          </div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">
            {product.name}
          </h1>
          <p className="mt-4 text-muted-foreground">{product.description}</p>

          <Separator className="my-6" />

          <ul className="space-y-2">
            {product.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm">
                <Check className="h-4 w-4 text-primary" />
                {feature}
              </li>
            ))}
          </ul>

          <Separator className="my-6" />

          <div className="flex items-center justify-between gap-4">
            <span className="text-3xl font-black">
              {formatPrice(product.price)}
            </span>
            <AddToCartButton product={product} size="lg" />
          </div>
        </div>
      </div>
    </div>
  )
}
