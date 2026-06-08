import type { Metadata } from "next";
import { Anton, Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { CartProvider } from "@/lib/cart-context";
import { SiteHeader } from "@/components/site-header";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-sans" });
const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "JBL Store — Som que move você",
  description:
    "Loja oficial de caixas de som, fones de ouvido e equipamentos de festa JBL.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={cn(manrope.variable, anton.variable)}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <CartProvider>
          <SiteHeader />
          <main>{children}</main>
          <footer className="mt-16 border-t py-8 text-center text-sm text-muted-foreground">
            JBL Store · Projeto de demonstração · {new Date().getFullYear()}
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
