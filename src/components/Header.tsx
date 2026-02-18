"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"  // ← add this import
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()  // gets current URL path

  const navLinks = [
    { href: "/", label: "Início" },          // added home for completeness
    { href: "/sobre", label: "Sobre" },
    { href: "/servicos", label: "Serviços" },
    { href: "/contato", label: "Orçamento" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto flex h-16 md:h-20 items-center justify-between pl-4 md:pl-6 lg:pl-8 pr-2 md:pr-3 lg:pr-4 max-w-7xl">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <div className="relative h-10 w-48 md:h-12 md:w-56">
            <Image
              src="/media/bramaqLogo.png"
              alt="BRAMAQ Transportes Especiais e Terraplanagem"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav + Actions */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <nav className="flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-medium transition-colors relative py-2 ${
                    isActive
                      ? "text-foreground font-semibold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-5 lg:gap-6">
            {/* Social icons */}
            <div className="flex gap-4 lg:gap-5">
              <a
                href="https://www.instagram.com/bramaq_transportes/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-pink-600 transition-colors"
                aria-label="Instagram BRAMAQ"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/p/Bramaq-Transportes-Especiais-e-Terraplenagem-100044318516753/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-blue-600 transition-colors"
                aria-label="Facebook BRAMAQ"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>

            <Button asChild size="default" className="bg-green-600 hover:bg-green-700 px-5 lg:px-6">
              <a
                href="https://wa.me/55479999340968?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20transporte%20especial"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[85vw] max-w-sm bg-background border-l border-border p-0">
          {/* Header with Logo + Close button */}
          <div className="flex items-center justify-between p-6 border-b">
            <Link href="/" onClick={() => setOpen(false)}>
              <div className="relative h-12 w-64">
                <Image
                  src="/logo-bramaq.png"
                  alt="BRAMAQ Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            {/* Close button already handled by Sheet, but we can style it if needed */}
          </div>

          {/* Main Navigation */}
          <nav className="flex flex-col gap-2 p-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href))

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center px-4 py-4 text-lg font-medium rounded-lg transition-all ${
                    isActive
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Social & Contact Section */}
          <div className="mt-auto p-6 border-t">
            <h4 className="text-sm font-medium text-muted-foreground mb-4 text-center">
              Conecte-se conosco
            </h4>

            <div className="flex justify-center gap-8 mb-6">
              <a
                href="https://www.instagram.com/bramaq_transportes/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-pink-600 transition-colors"
                aria-label="Instagram BRAMAQ"
              >
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              <a
                href="https://www.facebook.com/p/Bramaq-Transportes-Especiais-e-Terraplenagem-100044318516753/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-blue-600 transition-colors"
                aria-label="Facebook BRAMAQ"
              >
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>

            {/* WhatsApp big button */}
            <Button asChild size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white">
              <a
                href="https://wa.me/55479999340968?text=Olá!%20Gostaria%20de%20um%20orçamento%20para%20transporte%20especial"
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar no WhatsApp Agora
              </a>
            </Button>
          </div>
        </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}