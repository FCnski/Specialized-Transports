import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Sobre() {
  return (
    <main className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Sobre a BRAMAQ</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Nossa História</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <p className="text-muted-foreground">
              Fundada em Joinville, a BRAMAQ Transportes e Terraplanagem atua há mais de 10 anos no mercado de transporte e terraplanagem, oferecendo soluções eficientes para nossos clientes.
            </p><Image
              src="/media/3eixoVazia.jpeg"
              alt="Três eixos vazia"
              width={500}
              height={300}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Missão</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <p className="text-muted-foreground">
              Fornecer serviços de transporte e terraplanagem com qualidade, segurança e pontualidade.
            </p>
            <Image
              src="/media/donoEMotora.jpeg"
              alt="Dono e motora"
              width={500}
              height={300}
            />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}