import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            BRAMAQ Transportes & Terraplanagem
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            Soluções completas em transporte de cargas e movimentação de terra com qualidade e segurança.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contato">Solicitar Orçamento</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/servicos">Conheça Nossos Serviços</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Outras seções você pode adicionar depois */}
    </main>
  );
}