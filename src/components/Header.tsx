// components/Header.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";  // ← esse aqui depende do shadcn funcionar

export function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo com link para home */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-40 md:h-12 md:w-48">  {/* ajuste tamanho conforme seu logo */}
            <Image
              src="/media/bramaqLogo.png"  // ou .svg
              alt="BRAMAQ Transportes Especiais e Terraplanagem - Logo"
              fill
              className="object-contain"  // mantém proporção sem distorcer
              priority  // carrega rápido no header
            />
          </div>
          {/* Opcional: texto ao lado se o logo não tiver o nome completo */}
          {/* <span className="font-bold text-xl hidden md:block">BRAMAQ</span> */}
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
          {/* Botão WhatsApp com número do seu logo */}
          <Button asChild variant="default" size="sm">
            <a 
              href="https://wa.me/5547999340968?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20transporte%20especial" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <span className="hidden sm:inline">WhatsApp</span>
              <span>(47) 9 9934-0968</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}