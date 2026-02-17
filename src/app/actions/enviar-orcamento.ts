"use server"

import { Resend } from 'resend'
import { z } from 'zod'
import { toast } from 'sonner'  // opcional, mas vamos usar no client

const resend = new Resend(process.env.RESEND_API_KEY)

const orcamentoSchema = z.object({
  nome: z.string().min(2, 'Nome é obrigatório'),
  email: z.string().email('Email inválido'),
  telefone: z.string().min(10, 'Telefone inválido'),
  tipoCarga: z.string().min(1, 'Selecione o tipo de carga'),
  peso: z.string().optional(),
  dimensoes: z.string().optional(),  // ex: "5m x 2.5m x 3m"
  origem: z.string().min(1, 'Origem obrigatória'),
  destino: z.string().min(1, 'Destino obrigatório'),
  dataEstimada: z.string().optional(),
  descricao: z.string().min(10, 'Descreva a carga e necessidades'),
})

export async function enviarOrcamento(prevState: any, formData: FormData) {
  const dadosRaw = {
    nome: formData.get('nome') as string,
    email: formData.get('email') as string,
    telefone: formData.get('telefone') as string,
    tipoCarga: formData.get('tipoCarga') as string,
    peso: formData.get('peso') as string,
    dimensoes: formData.get('dimensoes') as string,
    origem: formData.get('origem') as string,
    destino: formData.get('destino') as string,
    dataEstimada: formData.get('dataEstimada') as string,
    descricao: formData.get('descricao') as string,
  }

  const parsed = orcamentoSchema.safeParse(dadosRaw)
  if (!parsed.success) {
    return { 
      success: false, 
      errors: parsed.error.flatten().fieldErrors 
    }
  }

  try {
   await resend.emails.send({
        from: 'BRAMAQ Orçamentos <orcamento@bramaqtransportes.com.br>',
        to: ['orcamento@bramaqtransportes.com.br'],
        subject: `ORÇAMENTO - ${dadosRaw.nome}`,
        text: `
    Nome: ${dadosRaw.nome}
    Email: ${dadosRaw.email}
    Telefone: ${dadosRaw.telefone}

    Tipo de Carga: ${dadosRaw.tipoCarga}
    Peso estimado: ${dadosRaw.peso || 'Não informado'}
    Dimensões: ${dadosRaw.dimensoes || 'Não informado'}
    Origem: ${dadosRaw.origem}
    Destino: ${dadosRaw.destino}
    Data estimada: ${dadosRaw.dataEstimada || 'Não informado'}

    Descrição:
    ${dadosRaw.descricao}
        `,
        })

    return { success: true }
  } catch (error) {
    console.error(error)
    return { success: false, error: 'Erro ao enviar. Tente novamente.' }
  }
}