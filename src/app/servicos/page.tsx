import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Servicos() {
  return (
    <main className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">Nossos Serviços</h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        {/* Card 1: Transporte de Cargas Indivisíveis */}
        <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-gray-200 rounded-xl">
          <div className="relative h-64 overflow-hidden">  {/* Altura fixa para consistência */}
            <Image
              src="/media/3eixoWEG.jpeg"  // seu upload na pasta public/imagens/
              alt="Transporte especial de gerador indivisível"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority={false}  // lazy por default
            />
            {/* Overlay sutil no hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white font-medium">Cargas acima de 40 toneladas</p>
            </div>
          </div>
          <CardHeader>
            <CardTitle>Transporte Especial</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Especializados em cargas indivisíveis como geradores, turbinas, transformadores e estruturas metálicas pesadas.</p>
          </CardContent>
        </Card>


<Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-gray-200 rounded-xl">
          <div className="relative h-64 overflow-hidden">  {/* Altura fixa para consistência */}
            <Image
              src="/media/2Retro4eixo.jpeg"  // seu upload na pasta public/imagens/
              alt="Transporte especial de gerador indivisível"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority={false}  // lazy por default
            />
            {/* Overlay sutil no hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white font-medium">Equipamento especializado</p>
            </div>
          </div>
          <CardHeader>
            <CardTitle>Serviços de Terraplanagem</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Escavação, aterro, nivelamento...</p>
          </CardContent>
        </Card>

        <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-gray-200 rounded-xl">
          <div className="relative h-64 overflow-hidden">  {/* Altura fixa para consistência */}
            <Image
              src="/media/retorescavadeira.jpeg"  // seu upload na pasta public/imagens/
              alt="Transporte especial de gerador indivisível"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority={false}  // lazy por default
            />
            {/* Overlay sutil no hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white font-medium">Equipamentos de alta performance</p>
            </div>
          </div>
          <CardHeader>
            <CardTitle>Locação de Equipamentos</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Retroescavadeiras, pás carregadeiras...</p>
          </CardContent>
        </Card>
        
      </div>
    </main>
  );
}