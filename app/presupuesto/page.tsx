"use client"

import { useState } from "react"
import Link from "next/link"
import { useI18n } from "@/lib/i18n"

// ⚠️ Reemplazá con tu Access Key de web3forms.com
const WEB3FORMS_KEY = "3b30ba10-6225-42a6-9039-468d92e71268"

type Lang = "es" | "en"

const T = {
  es: {
    back: "← Volver al inicio",
    title: "Pidamos tu presupuesto",
    subtitle: "Contame sobre tu proyecto. Cuanto más claro, mejor puedo ayudarte. Toma 2 minutos.",
    step: "Paso",
    of: "de",
    // paso 1
    q1: "¿Qué tipo de proyecto necesitás?",
    projectTypes: [
      "Sitio web institucional",
      "Tienda online / e-commerce",
      "Landing page",
      "Web app / sistema a medida",
      "Rediseño de un sitio existente",
    ],
    // paso 2
    q2: "¿Tenés un presupuesto aproximado en mente?",
    budgets: [
      "Todavía no lo sé",
      "Hasta $300.000",
      "$300.000 – $600.000",
      "$600.000 – $1.000.000",
      "Más de $1.000.000",
    ],
    q3: "¿Para cuándo lo necesitás?",
    deadlines: ["Lo antes posible", "En 1 mes", "En 2-3 meses", "Sin apuro / explorando"],
    // paso 3
    q4: "¿Ya tenés dominio y hosting?",
    domain: ["Sí, los dos", "Solo dominio", "Ninguno / no sé qué es", "Necesito ayuda con eso"],
    q5: "¿Tenés identidad de marca (logo, colores)?",
    brand: ["Sí, tengo todo", "Tengo logo pero nada más", "No tengo nada aún", "Quiero rehacerla"],
    // paso 4
    q6: "Datos de contacto",
    name: "Tu nombre",
    email: "Tu email",
    phone: "WhatsApp (opcional)",
    q7: "Contame más sobre tu proyecto (opcional)",
    detailPh: "Qué hacés, qué necesitás, sitios de referencia que te gusten, lo que quieras sumar...",
    refs: "Sitios de referencia que te gusten (opcional)",
    refsPh: "Pegá links de webs que te gusten",
    // nav
    next: "Siguiente",
    prev: "Atrás",
    send: "Enviar solicitud",
    sending: "Enviando...",
    // validación
    pickOne: "Elegí una opción para continuar",
    fillContact: "Completá tu nombre y email",
    // éxito
    successTitle: "¡Recibido! 🎉",
    successBody: "Gracias por tu mensaje. Te voy a responder a la brevedad para conversar sobre tu proyecto.",
    successBack: "Volver al inicio",
    errorMsg: "Hubo un error al enviar. Probá de nuevo o escribime por WhatsApp.",
  },
  en: {
    back: "← Back to home",
    title: "Let's get your quote",
    subtitle: "Tell me about your project. The clearer, the better I can help. Takes 2 minutes.",
    step: "Step",
    of: "of",
    q1: "What type of project do you need?",
    projectTypes: [
      "Business website",
      "Online store / e-commerce",
      "Landing page",
      "Web app / custom system",
      "Redesign of an existing site",
    ],
    q2: "Do you have an approximate budget in mind?",
    budgets: [
      "Not sure yet",
      "Up to USD 300",
      "USD 300 – 600",
      "USD 600 – 1,000",
      "Over USD 1,000",
    ],
    q3: "When do you need it?",
    deadlines: ["As soon as possible", "In 1 month", "In 2-3 months", "No rush / exploring"],
    q4: "Do you already have a domain and hosting?",
    domain: ["Yes, both", "Domain only", "Neither / not sure", "I need help with that"],
    q5: "Do you have brand identity (logo, colors)?",
    brand: ["Yes, I have it all", "Logo only", "Nothing yet", "I want to redo it"],
    q6: "Contact details",
    name: "Your name",
    email: "Your email",
    phone: "WhatsApp (optional)",
    q7: "Tell me more about your project (optional)",
    detailPh: "What you do, what you need, reference sites you like, anything you'd like to add...",
    refs: "Reference sites you like (optional)",
    refsPh: "Paste links of websites you like",
    next: "Next",
    prev: "Back",
    send: "Send request",
    sending: "Sending...",
    pickOne: "Pick an option to continue",
    fillContact: "Fill in your name and email",
    successTitle: "Got it! 🎉",
    successBody: "Thanks for your message. I'll get back to you shortly to discuss your project.",
    successBack: "Back to home",
    errorMsg: "There was an error sending. Try again or message me on WhatsApp.",
  },
}

function Logo() {
  return (
    <svg viewBox="0 0 527.3 532.41" className="w-10 h-10 p-1 text-accent" fill="currentColor" aria-hidden="true">
      <path d="M219.12,407.56c-4.55-21.23-3.14-36.63-3.13-36.77l3.69-36.94-75.88,139.45h-41.15L306.4,122.5l46.38,76.35,2.73,4.46,5.13-1c.08-.01,7.83-1.49,22.98-1.49s27.38,3.01,27.5,3.03l17.18,4.29L307.88,0,0,532.41l175.31-1.81,52.66-86.63,2.18-3.63-1.94-3.75c-.05-.09-4.92-9.61-9.08-29.04Z"/>
      <path d="M469.94,402.95h-5.22s-1.49,5.01-1.49,5.01c-.19.63-19.25,62.72-70.38,66.67-24.06,1.87-46.66-4.31-67.17-18.34-23.33-15.96-36.98-42.52-38.44-74.8-1.58-34.91,11.75-71.22,32.43-88.3,29.09-24.03,65.22-21.55,75.79-20.18l39.5,70.77,69.59-2.11-65.71-116.12-.82-.75c-2.17-1.98-23.11-19.06-89.64-9.08-67.96,10.19-99.99,72.8-101.32,75.46v.03c-.77,1.54-18.65,38.11-18.65,73.14,0,86.34,37.68,126.97,69.29,145.85,25.84,15.44,54.83,21.23,81.16,21.23s51.58-6.19,66.71-14.34c65.68-35.37,79.54-102.94,80.1-105.8l1.63-8.34h-57.36Z"/>
    </svg>
  )
}

export default function PresupuestoPage() {
  const { lang } = useI18n()
  const t = T[lang as Lang] ?? T.es

  const [step, setStep] = useState(1)
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle")
  const [err, setErr] = useState("")
  const TOTAL = 4

  const [data, setData] = useState({
    projectType: "",
    budget: "",
    deadline: "",
    domain: "",
    brand: "",
    name: "",
    email: "",
    phone: "",
    detail: "",
    refs: "",
  })

  const set = (k: string, v: string) => setData((d) => ({ ...d, [k]: v }))

  const canNext = () => {
    if (step === 1) return !!data.projectType
    if (step === 2) return !!data.budget && !!data.deadline
    if (step === 3) return !!data.domain && !!data.brand
    return true
  }

  const next = () => {
    if (!canNext()) { setErr(t.pickOne); return }
    setErr(""); setStep((s) => Math.min(s + 1, TOTAL))
  }
  const prev = () => { setErr(""); setStep((s) => Math.max(s - 1, 1)) }

  const submit = async () => {
    if (!data.name || !data.email) { setErr(t.fillContact); return }
    setStatus("sending"); setErr("")
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Nuevo presupuesto: ${data.projectType} — ${data.name}`,
          from_name: "Portfolio · Formulario de presupuesto",
          "Tipo de proyecto": data.projectType,
          "Presupuesto": data.budget,
          "Plazo": data.deadline,
          "Dominio/Hosting": data.domain,
          "Identidad de marca": data.brand,
          "Nombre": data.name,
          "Email": data.email,
          "WhatsApp": data.phone || "—",
          "Detalle": data.detail || "—",
          "Referencias": data.refs || "—",
        }),
      })
      const json = await res.json()
      if (json.success) setStatus("ok")
      else { setStatus("error"); setErr(t.errorMsg) }
    } catch {
      setStatus("error"); setErr(t.errorMsg)
    }
  }

  // pantalla de éxito
  if (status === "ok") {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="max-w-md text-center">
          <div className="flex justify-center mb-6"><Logo /></div>
          <h1 className="text-3xl font-bold text-foreground mb-4">{t.successTitle}</h1>
          <p className="text-muted-foreground mb-8">{t.successBody}</p>
          <Link href="/" className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3 text-sm font-semibold hover:bg-accent/90 transition-colors">
            {t.successBack}
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background px-4 sm:px-6 py-10">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="flex items-center gap-2">
            <Logo />
            <span className="font-semibold text-foreground">Agustin Curti</span>
          </Link>
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {t.back}
          </Link>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{t.title}</h1>
        <p className="text-muted-foreground mb-8">{t.subtitle}</p>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-muted-foreground">{t.step} {step} {t.of} {TOTAL}</span>
            <span className="text-xs text-accent">{Math.round((step / TOTAL) * 100)}%</span>
          </div>
          <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
            <div className="h-full bg-accent transition-all duration-500 rounded-full" style={{ width: `${(step / TOTAL) * 100}%` }} />
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-8">

          {step === 1 && (
            <Question label={t.q1}>
              <Options options={t.projectTypes} value={data.projectType} onPick={(v) => set("projectType", v)} />
            </Question>
          )}

          {step === 2 && (
            <>
              <Question label={t.q2}>
                <Options options={t.budgets} value={data.budget} onPick={(v) => set("budget", v)} />
              </Question>
              <Question label={t.q3}>
                <Options options={t.deadlines} value={data.deadline} onPick={(v) => set("deadline", v)} />
              </Question>
            </>
          )}

          {step === 3 && (
            <>
              <Question label={t.q4}>
                <Options options={t.domain} value={data.domain} onPick={(v) => set("domain", v)} />
              </Question>
              <Question label={t.q5}>
                <Options options={t.brand} value={data.brand} onPick={(v) => set("brand", v)} />
              </Question>
            </>
          )}

          {step === 4 && (
            <>
              <Question label={t.q6}>
                <div className="space-y-3">
                  <input className="field" placeholder={t.name} value={data.name} onChange={(e) => set("name", e.target.value)} />
                  <input className="field" type="email" placeholder={t.email} value={data.email} onChange={(e) => set("email", e.target.value)} />
                  <input className="field" placeholder={t.phone} value={data.phone} onChange={(e) => set("phone", e.target.value)} />
                </div>
              </Question>
              <Question label={t.q7}>
                <textarea className="field min-h-[110px]" placeholder={t.detailPh} value={data.detail} onChange={(e) => set("detail", e.target.value)} />
              </Question>
              <Question label={t.refs}>
                <textarea className="field min-h-[70px]" placeholder={t.refsPh} value={data.refs} onChange={(e) => set("refs", e.target.value)} />
              </Question>
            </>
          )}
        </div>

        {/* Error */}
        {err && <p className="mt-6 text-sm text-red-400">{err}</p>}

        {/* Nav */}
        <div className="mt-10 flex items-center justify-between gap-4">
          {step > 1 ? (
            <button onClick={prev} className="rounded-full border border-border px-6 py-3 text-sm text-foreground hover:bg-secondary transition-colors">
              {t.prev}
            </button>
          ) : <span />}

          {step < TOTAL ? (
            <button onClick={next} className="rounded-full bg-accent text-accent-foreground px-8 py-3 text-sm font-semibold hover:bg-accent/90 transition-colors">
              {t.next}
            </button>
          ) : (
            <button onClick={submit} disabled={status === "sending"} className="rounded-full bg-accent text-accent-foreground px-8 py-3 text-sm font-semibold hover:bg-accent/90 transition-colors disabled:opacity-50">
              {status === "sending" ? t.sending : t.send}
            </button>
          )}
        </div>

      </div>

      <style jsx>{`
        .field {
          width: 100%;
          background: var(--secondary);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 13px 16px;
          color: var(--foreground);
          font-size: 15px;
          outline: none;
          transition: border-color .15s;
        }
        .field:focus { border-color: var(--accent); }
        .field::placeholder { color: var(--muted-foreground); }
      `}</style>
    </main>
  )
}

function Question({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-foreground mb-4">{label}</h2>
      {children}
    </div>
  )
}

function Options({ options, value, onPick }: { options: string[]; value: string; onPick: (v: string) => void }) {
  return (
    <div className="grid gap-3">
      {options.map((o) => (
        <button
          key={o}
          onClick={() => onPick(o)}
          className={`text-left rounded-xl border px-5 py-4 text-sm transition-all ${
            value === o
              ? "border-accent bg-accent/10 text-foreground"
              : "border-border bg-card text-muted-foreground hover:border-accent/40 hover:text-foreground"
          }`}
        >
          <span className="flex items-center gap-3">
            <span className={`w-4 h-4 rounded-full border flex-shrink-0 flex items-center justify-center ${value === o ? "border-accent" : "border-muted-foreground/40"}`}>
              {value === o && <span className="w-2 h-2 rounded-full bg-accent" />}
            </span>
            {o}
          </span>
        </button>
      ))}
    </div>
  )
}
