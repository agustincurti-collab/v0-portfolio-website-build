"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { DocumentoPropuesta } from "@/components/propuesta/documento"
import { decodePropuesta } from "@/lib/propuesta"

function Contenido() {
  const params = useSearchParams()
  const d = params.get("d")
  const p = d ? decodePropuesta(d) : null

  if (!p) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="text-center max-w-sm">
          <h1 className="text-2xl font-bold text-foreground mb-3">Propuesta no encontrada</h1>
          <p className="text-muted-foreground mb-8 text-sm">
            El enlace parece estar incompleto o vencido. Escribime y te lo reenvío.
          </p>
          <Link
            href="/"
            className="inline-flex rounded-full bg-accent text-accent-foreground px-6 py-3 text-sm font-semibold hover:bg-accent/90 transition-colors"
          >
            Ir al sitio
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Barra de acciones — no se imprime */}
      <div className="sticky top-0 z-10 bg-background/90 backdrop-blur border-b border-border px-6 py-3 flex items-center justify-between print:hidden">
        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          agustincurti.com.ar
        </Link>
        <button
          onClick={() => window.print()}
          className="rounded-full bg-accent text-accent-foreground px-5 py-2 text-xs font-semibold hover:bg-accent/90 transition-colors"
        >
          Descargar PDF
        </button>
      </div>

      <DocumentoPropuesta p={p} />
    </main>
  )
}

export default function PropuestaPublicaPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-background" />}>
      <Contenido />
    </Suspense>
  )
}

