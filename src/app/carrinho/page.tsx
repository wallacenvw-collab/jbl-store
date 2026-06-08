"use client"

import Link from "next/link"
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react"

import { useCart } from "@/lib/cart-context"
import { formatPrice } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function CartPage() {
  const { items, updateQuantity, removeItem, clear, totalItems, totalPrice } =
    useCart()

  if (items.length === 0) {
    return (
      <div className="container flex flex-col items-center justify-center py-24 text-center">
        <ShoppingCart className="h-12 w-12 text-muted-foreground" />
        <h1 className="mt-4 text-2xl font-bold">Seu carrinho está vazio</h1>
        <p className="mt-2 text-muted-foreground">
          Que tal conhecer nossos produtos?
        </p>
        <Button asChild className="mt-6">
          <Link href="/">Ver produtos</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container py-10">
      <h1 className="text-2xl font-bold tracking-tight">
        Carrinho ({totalItems})
      </h1>

      <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="space-y-4">
          {items.map(({ product, quantity }) => (
            <Card key={product.slug}>
              <CardContent className="flex items-center gap-4 p-4">
                <div
                  className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${product.color}`}
                >
                  <span className="text-sm font-black text-white/90">JBL</span>
                </div>

                <div className="min-w-0 flex-1">
                  <Link
                    href={`/produtos/${product.slug}`}
                    className="font-medium hover:text-primary"
                  >
                    {product.name}
                  </Link>
                  <p className="text-sm text-muted-foreground">
                    {formatPrice(product.price)}
                  </p>

                  <div className="mt-2 flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() =>
                        updateQuantity(product.slug, quantity - 1)
                      }
                      aria-label="Diminuir quantidade"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center text-sm">{quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() =>
                        updateQuantity(product.slug, quantity + 1)
                      }
                      aria-label="Aumentar quantidade"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <span className="font-semibold">
                    {formatPrice(product.price * quantity)}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-muted-foreground hover:text-destructive"
                    onClick={() => removeItem(product.slug)}
                    aria-label="Remover item"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground"
            onClick={clear}
          >
            Esvaziar carrinho
          </Button>
        </div>

        <Card className="h-fit">
          <CardContent className="p-6">
            <h2 className="font-semibold">Resumo do pedido</h2>
            <Separator className="my-4" />
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span>{formatPrice(totalPrice)}</span>
            </div>
            <div className="mt-2 flex justify-between text-sm">
              <span className="text-muted-foreground">Frete</span>
              <span className="text-primary">Grátis</span>
            </div>
            <Separator className="my-4" />
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>{formatPrice(totalPrice)}</span>
            </div>
            <Button className="mt-6 w-full" size="lg">
              Finalizar compra
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
