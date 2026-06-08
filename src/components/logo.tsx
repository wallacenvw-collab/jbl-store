import { cn } from "@/lib/utils"

/**
 * Logotipo tipográfico da JBL Store.
 * "JBL" com o B em vermelho (primary) e "STORE" abaixo, espaçado.
 * Escala junto com o `font-size` aplicado (use text-2xl, text-6xl, etc.).
 */
export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex flex-col items-center font-display uppercase leading-[0.85]",
        className
      )}
      aria-label="JBL Store"
    >
      <span className="tracking-tight">
        J<span className="text-primary">B</span>L
      </span>
      {/* padding-left compensa o tracking final para manter "STORE" centralizado */}
      <span className="pl-[0.3em] text-[0.3em] tracking-[0.3em]">Store</span>
    </span>
  )
}
