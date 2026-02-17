"use client"

import { useActionState } from 'react'
import { enviarOrcamento } from '@/app/actions/enviar-orcamento'  // ajuste o path
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"  // adicione esse componente se não tiver: npx shadcn@latest add select
import { toast } from "sonner"
import { useEffect } from 'react'

export default function Orcamento() {
  const [state, formAction, isPending] = useActionState(enviarOrcamento, { success: false, errors: {} })

  useEffect(() => {
  if (state.success) {
    toast.success("Orçamento enviado com sucesso!", { description: "Entraremos em contato em breve." })
    // reset form aqui se quiser (use ref ou state)
  } else if (state.errors && Object.keys(state.errors).length > 0) {
    toast.error("Verifique os campos", { description: "Alguns campos estão inválidos ou faltando." })
  } else if (state.error) {
    toast.error("Erro ao enviar", { description: state.error })
  }
}, [state])

  return (
    <main className="container mx-auto py-12 px-4 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-8">Solicite um Orçamento Gratuito</h1>
      <p className="text-center text-lg text-muted-foreground mb-12">
        Transporte Especial de Cargas Indivisíveis, Máquinas Pesadas e Equipamentos como Geradores, Turbinas e Transformadores.
      </p>

      <Card>
        <CardHeader>
          <CardTitle>Preencha os dados da sua carga</CardTitle>
          <CardDescription>Informações precisas ajudam a entregar um orçamento rápido e assertivo.</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="nome">Nome *</Label>
                <Input id="nome" name="nome" required />
                {state.errors?.nome && <p className="text-red-500 text-sm">{state.errors.nome[0]}</p>}
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input id="email" name="email" type="email" required />
                {state.errors?.email && <p className="text-red-500 text-sm">{state.errors.email[0]}</p>}
              </div>

              <div>
                <Label htmlFor="telefone">Telefone/WhatsApp *</Label>
                <Input id="telefone" name="telefone" required />
                {state.errors?.telefone && <p className="text-red-500 text-sm">{state.errors.telefone[0]}</p>}
              </div>

              <div>
                <Label htmlFor="tipoCarga">Tipo de Carga *</Label>
                <Select name="tipoCarga" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gerador">Gerador</SelectItem>
                    <SelectItem value="turbina">Turbina</SelectItem>
                    <SelectItem value="transformador">Transformador</SelectItem>
                    <SelectItem value="maquina-pesada">Máquina Pesada (escavadeira, trator, etc.)</SelectItem>
                    <SelectItem value="estrutura-metalica">Estrutura Metálica</SelectItem>
                    <SelectItem value="outro">Outro (especifique na descrição)</SelectItem>
                  </SelectContent>
                </Select>
                {state.errors?.tipoCarga && <p className="text-red-500 text-sm">{state.errors.tipoCarga[0]}</p>}
              </div>

              <div>
                <Label htmlFor="peso">Peso Estimado (toneladas)</Label>
                <Input id="peso" name="peso" placeholder="Ex: 45" />
                {state.errors?.peso && (
                    <p className="text-red-500 text-sm mt-1">{state.errors.peso[0]}</p>
                )}
              </div>

              <div>
                <Label htmlFor="dimensoes">Dimensões Aproximadas (C x L x A)</Label>
                <Input id="dimensoes" name="dimensoes" placeholder="Ex: 8m x 3m x 4m" />
                {state.errors?.dimensoes && (
                    <p className="text-red-500 text-sm mt-1">{state.errors.dimensoes[0]}</p>
                )}
              </div>

              <div>
                <Label htmlFor="origem">Origem (Cidade/Estado) *</Label>
                <Input id="origem" name="origem" required placeholder="Ex: Joinville - SC" />
                {state.errors?.origem && <p className="text-red-500 text-sm">{state.errors.origem[0]}</p>}
              </div>

              <div>
                <Label htmlFor="destino">Destino (Cidade/Estado) *</Label>
                <Input id="destino" name="destino" required placeholder="Ex: São Paulo - SP" />
                {state.errors?.destino && <p className="text-red-500 text-sm">{state.errors.destino[0]}</p>}
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="dataEstimada">Data Estimada para Transporte</Label>
                <Input id="dataEstimada" name="dataEstimada" type="date" />
                {state.errors?.dataEstimada && (
                    <p className="text-red-500 text-sm mt-1">{state.errors.dataEstimada[0]}</p>
                )}
              </div>

              <div className='justifyflex gap-5 justify-center md:justify-start md:col-span-2'>
                <Label htmlFor="descricao">Descrição da Carga e Necessidades *</Label>
                <Textarea 
                    id="descricao" 
                    name="descricao" 
                    rows={5} 
                    placeholder="Detalhes como: precisa de escolta? Veículo especial? Horários restritos? Outras exigências..."
                    required 
                />
                {state.errors?.descricao && (
                    <p className="text-red-500 text-sm mt-1">{state.errors.descricao[0]}</p>
                )}
                </div>
            </div>

            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Enviando..." : "Solicitar Orçamento"}
            </Button>
          </form>
        </CardContent>
      </Card>

      <p className="text-center mt-8 text-sm text-muted-foreground">
        Ou entre em contato direto pelo WhatsApp: (47) 9 9934-0968
      </p>
    </main>
  )
}