import Link from "next/link"

import { type Product, formatPrice } from "@/lib/products"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AddToCartButton } from "@/components/add-to-cart-button"

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="flex flex-col overflow-hidden transition-shadow hover:shadow-md">
      <Link href={`/produtos/${product.slug}`}>
        <div
          className={`flex aspect-square items-center justify-center bg-gradient-to-br ${product.color}`}
        >
          <span className="text-4xl font-black tracking-tight text-white/90">
            JBL
          </span>
        </div>
      </Link>
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-xs text-muted-foreground">{product.category}</p>
            <CardTitle className="mt-1">
              <Link
                href={`/produtos/${product.slug}`}
                className="hover:text-primary"
              >
                {product.name}
              </Link>
            </CardTitle>
          </div>
          {product.badge && <Badge>{product.badge}</Badge>}
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="line-clamp-2 text-sm text-muted-foreground">
          {product.description}
        </p>
      </CardContent>
      <CardFooter className="flex items-center justify-between gap-2 pt-0">
        <span className="text-lg font-bold">{formatPrice(product.price)}</span>
        <AddToCartButton product={product} size="sm" />
      </CardFooter>
    </Card>
  )
}
