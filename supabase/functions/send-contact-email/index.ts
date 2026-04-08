const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}
import { z } from 'https://deno.land/x/zod@v3.22.4/mod.ts'

const GATEWAY_URL = 'https://connector-gateway.lovable.dev/resend'

const BodySchema = z.object({
  name: z.string().min(1).max(100),
  company: z.string().max(100).optional().default(''),
  email: z.string().email().max(255),
  phone: z.string().min(1).max(20),
  activity: z.string().max(150).optional().default(''),
  need: z.string().min(1).max(200),
  existing_site: z.string().max(100).optional().default(''),
  goals: z.array(z.string()).optional().default([]),
  materials: z.string().max(100).optional().default(''),
  description: z.string().min(1).max(500),
})

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY')
  if (!LOVABLE_API_KEY) {
    return new Response(JSON.stringify({ error: 'LOVABLE_API_KEY not configured' }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
  if (!RESEND_API_KEY) {
    return new Response(JSON.stringify({ error: 'RESEND_API_KEY not configured' }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  try {
    const parsed = BodySchema.safeParse(await req.json())
    if (!parsed.success) {
      return new Response(JSON.stringify({ error: parsed.error.flatten().fieldErrors }), {
        status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const d = parsed.data
    const goalsText = d.goals.length > 0 ? d.goals.join(', ') : 'Nessuno selezionato'

    const html = `
      <h2>Nuova richiesta dal sito Delegate</h2>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Nome</td><td style="padding:8px;border-bottom:1px solid #eee">${escapeHtml(d.name)}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Azienda</td><td style="padding:8px;border-bottom:1px solid #eee">${escapeHtml(d.company)}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Email</td><td style="padding:8px;border-bottom:1px solid #eee">${escapeHtml(d.email)}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Telefono</td><td style="padding:8px;border-bottom:1px solid #eee">${escapeHtml(d.phone)}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Attività</td><td style="padding:8px;border-bottom:1px solid #eee">${escapeHtml(d.activity)}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Bisogno</td><td style="padding:8px;border-bottom:1px solid #eee">${escapeHtml(d.need)}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Sito esistente</td><td style="padding:8px;border-bottom:1px solid #eee">${escapeHtml(d.existing_site)}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Obiettivi</td><td style="padding:8px;border-bottom:1px solid #eee">${escapeHtml(goalsText)}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Materiali</td><td style="padding:8px;border-bottom:1px solid #eee">${escapeHtml(d.materials)}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">Descrizione</td><td style="padding:8px">${escapeHtml(d.description)}</td></tr>
      </table>
    `

    const response = await fetch(`${GATEWAY_URL}/emails`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'X-Connection-Api-Key': RESEND_API_KEY,
      },
      body: JSON.stringify({
        from: 'Delegate Sito <onboarding@resend.dev>',
        to: ['info@delegateitalia.com'],
        subject: `Nuova richiesta: ${d.name} — ${d.need}`,
        html,
        reply_to: d.email,
      }),
    })

    const data = await response.json()
    if (!response.ok) {
      throw new Error(`Resend API failed [${response.status}]: ${JSON.stringify(data)}`)
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (error: unknown) {
    console.error('Error sending email:', error)
    const msg = error instanceof Error ? error.message : 'Unknown error'
    return new Response(JSON.stringify({ error: msg }), {
      status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})

function escapeHtml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}
