"use client"

import * as React from "react"
import { Check, ShoppingCart } from "lucide-react"

import { type Product } from "@/lib/products"
import { useCart } from "@/lib/cart-context"
import { Button, type ButtonProps } from "@/components/ui/button"

type AddToCartButtonProps = ButtonProps & {
  product: Product
}

export function AddToCartButton({
  product,
  className,
  ...props
}: AddToCartButtonProps) {
  const { addItem } = useCart()
  const [added, setAdded] = React.useState(false)

  function handleClick() {
    addItem(product)
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1500)
  }

  return (
    <Button onClick={handleClick} className={className} {...props}>
      {added ? (
        <>
          <Check className="h-4 w-4" /> Adicionado!
        </>
      ) : (
        <>
          <ShoppingCart className="h-4 w-4" /> Adicionar
        </>
      )}
    </Button>
  )
}
