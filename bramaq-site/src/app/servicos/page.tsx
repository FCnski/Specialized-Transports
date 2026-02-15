import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Servicos() {
  return (
    <main className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">Nossos Serviços</h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Transporte de Cargas</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Caçambas, bitrens, carretas...</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Terraplanagem</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Escavação, aterro, nivelamento...</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
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