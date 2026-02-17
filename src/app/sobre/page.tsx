import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Sobre() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero/Intro Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-blue-950 to-blue-800 text-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
            Sobre a BRAMAQ
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
            Com anos de experiência em Joinville e região, somos referência em transportes especiais de cargas indivisíveis e serviços de terraplanagem. Qualidade, segurança e compromisso são nossos pilares.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
            {/* Card 1: Nossa História */}
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-gray-200 rounded-2xl">
              <div className="relative h-64 md:h-80 overflow-hidden">
                <Image
                  src="/media/3eixoVazia.jpeg"  // ← sua primeira foto aqui
                  alt="Equipe BRAMAQ - Nossa história"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardHeader className="pt-6">
                <CardTitle className="text-2xl md:text-3xl">Nossa História</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 text-base leading-relaxed">
                <p>
                  Fundada em Joinville, a BRAMAQ nasceu da paixão por desafios logísticos e pela necessidade de soluções confiáveis no transporte de cargas indivisíveis e equipamentos pesados.
                </p>
                <p className="mt-4">
                  Ao longo dos anos, crescemos investindo em frota moderna, equipe qualificada e processos rigorosos de segurança — sempre com foco no cliente e na entrega dentro do prazo.
                </p>
                <p className="mt-4 font-medium">
                  Hoje somos referência em transportes especiais e terraplanagem na região Norte de Santa Catarina e Sul do Brasil.
                </p>
              </CardContent>
            </Card>

            {/* Card 2: Missão */}
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-gray-200 rounded-2xl">
              <div className="relative h-64 md:h-80 overflow-hidden">
                <Image
                  src="/media/donoEMotora.jpeg"  // ← sua segunda foto aqui
                  alt="Missão BRAMAQ - Compromisso com qualidade e segurança"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardHeader className="pt-6">
                <CardTitle className="text-2xl md:text-3xl">Nossa Missão</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 text-base leading-relaxed">
                <p>
                  Fornecer serviços de transporte especial e terraplanagem com excelência, priorizando a segurança das cargas, das pessoas e do meio ambiente.
                </p>
                <p className="mt-4">
                  Atuamos com ética, pontualidade e inovação constante, garantindo soluções personalizadas que superem as expectativas dos nossos clientes.
                </p>
                <p className="mt-4 font-medium">
                  Construímos parcerias duradouras baseadas em confiança e resultados reais.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}