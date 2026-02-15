import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Sobre() {
  return (
    <main className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Sobre a BRAMAQ</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Nossa História</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Fundada em Joinville, a BRAMAQ Transportes e Terraplanagem atua há mais de X anos no mercado de...
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Missão</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Fornecer serviços de transporte e terraplanagem com qualidade, segurança e pontualidade.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}