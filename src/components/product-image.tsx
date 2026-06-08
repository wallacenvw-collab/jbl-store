import { Shirt } from "lucide-react"

import { type Product } from "@/lib/products"
import { cn } from "@/lib/utils"

type ProductImageProps = {
  product: Product
  className?: string
  iconClassName?: string
}

/**
 * Placeholder visual do produto: um gradiente temático do time com um
 * ícone de camisa. Substituir por fotos reais quando o catálogo evoluir.
 */
export function ProductImage({
  product,
  className,
  iconClassName,
}: ProductImageProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-gradient-to-br",
        product.color,
        className
      )}
    >
      <Shirt className={cn("text-white/90", iconClassName)} strokeWidth={1.5} />
    </div>
  )
}
