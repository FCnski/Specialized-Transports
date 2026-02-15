// components/Header.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";  // ← esse aqui depende do shadcn funcionar

export function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-2xl">
          BRAMAQ
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/sobre" className="text-sm font-medium hover:text-primary transition-colors">
            Sobre
          </Link>
          <Link href="/servicos" className="text-sm font-medium hover:text-primary transition-colors">
            Serviços
          </Link>
          <Link href="/contato" className="text-sm font-medium hover:text-primary transition-colors">
            Contato / Orçamento
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild variant="default" size="sm">
            <a href="https://wa.me/5547999999999?text=Olá!%20Gostaria%20de%20um%20orçamento" target="_blank">
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}