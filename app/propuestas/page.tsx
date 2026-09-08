"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { DocumentoPropuesta } from "@/components/propuesta/documento"
import {
  type Propuesta,
  PROPUESTA_VACIA,
  encodePropuesta,
  money,
  totalPrecios,
} from "@/lib/propuesta"

// ⚠️ Clave simple de acceso. No es seguridad real (el código viaja al navegador),
// solo evita que alguien entre por casualidad. Cambiala por la que quieras.
const CLAVE = "curti2026"

const LS_KEY = "ac_propuestas_v1"

type Guardadas = Record<string, Propuesta>

// ⚠️ Estos van FUERA del componente a propósito.
// Si se definen adentro, React los recrea en cada tecla y los inputs pierden el foco.
const inp =
  "w-full bg-secondary border border-border rounded-lg px-3 py-2 text-sm text-foreground outline-none focus:border-accent"
const lbl = "block text-xs text-muted-foreground mb-1.5"

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-border bg-card p-5">
      <h2 className="text-sm font-semibold text-accent uppercase tracking-wide mb-4">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  )
}

export default function PropuestasPage() {
  const [ok, setOk] = useState(false)
  const [pass, setPass] = useState("")
  const [p, setP] = useState<Propuesta>(PROPUESTA_VACIA)
  const [guardadas, setGuardadas] = useState<Guardadas>({})
  const [preview, setPreview] = useState(false)
  const [msg, setMsg] = useState("")

  useEffect(() => {
    if (sessionStorage.getItem("ac_prop_ok") === "1") setOk(true)
  }, [])

  useEffect(() => {
    if (!ok) return
    try {
      const raw = localStorage.getItem(LS_KEY)
      if (raw) setGuardadas(JSON.parse(raw))
    } catch {}
  }, [ok])

  const flash = (t: string) => { setMsg(t); setTimeout(() => setMsg(""), 2500) }

  const persistir = (g: Guardadas) => {
    setGuardadas(g)
    try { localStorage.setItem(LS_KEY, JSON.stringify(g)) } catch { flash("No se pudo guardar") }
  }

  const guardar = () => {
    const nombre = p.cliente.trim()
    if (!nombre) return flash("Poné un nombre de cliente primero")
    persistir({ ...guardadas, [nombre]: p })
    flash("Guardada")
  }

  const cargar = (k: string) => { setP(guardadas[k]); flash(`Cargada: ${k}`) }

  const borrar = (k: string) => {
    const g = { ...guardadas }
    delete g[k]
    persistir(g)
    flash("Borrada")
  }

  const copiarLink = async () => {
    const url = `${window.location.origin}/propuesta?d=${encodePropuesta(p)}`
    try {
      await navigator.clipboard.writeText(url)
      flash("Link copiado al portapapeles")
    } catch {
      window.prompt("Copiá el link:", url)
    }
  }

  const exportar = () => {
    const blob = new Blob([JSON.stringify(guardadas, null, 2)], { type: "application/json" })
    const a = document.createElement("a")
    a.href = URL.createObjectURL(blob)
    a.download = `propuestas-backup-${Date.now()}.json`
    a.click()
  }

  const importar = (f: File) => {
    const r = new FileReader()
    r.onload = (e) => {
      try {
        const data = JSON.parse(String(e.target?.result)) as Guardadas
        persistir({ ...guardadas, ...data })
        flash("Importadas")
      } catch { flash("Archivo inválido") }
    }
    r.readAsText(f)
  }

  // ── login ──
  if (!ok) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <h1 className="text-2xl font-bold text-foreground mb-2">Propuestas</h1>
          <p className="text-sm text-muted-foreground mb-6">Área privada.</p>
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (pass === CLAVE) { sessionStorage.setItem("ac_prop_ok", "1"); setOk(true) }
                else flash("Clave incorrecta")
              }
            }}
            placeholder="Clave"
            className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-foreground outline-none focus:border-accent mb-3"
          />
          <button
            onClick={() => {
              if (pass === CLAVE) { sessionStorage.setItem("ac_prop_ok", "1"); setOk(true) }
              else flash("Clave incorrecta")
            }}
            className="w-full rounded-full bg-accent text-accent-foreground py-3 text-sm font-semibold hover:bg-accent/90 transition-colors"
          >
            Entrar
          </button>
          {msg && <p className="text-sm text-red-400 mt-3 text-center">{msg}</p>}
          <Link href="/" className="block text-center text-xs text-muted-foreground mt-6 hover:text-foreground">
            ← Volver al inicio
          </Link>
        </div>
      </main>
    )
  }

  // ── vista previa a pantalla completa ──
  if (preview) {
    return (
      <main className="min-h-screen bg-background">
        <div className="sticky top-0 z-10 bg-background/90 backdrop-blur border-b border-border px-6 py-3 flex gap-3 justify-between items-center print:hidden">
          <button onClick={() => setPreview(false)} className="text-sm text-muted-foreground hover:text-foreground">
            ← Volver al editor
          </button>
          <div className="flex gap-2">
            <button onClick={copiarLink} className="rounded-full border border-border px-4 py-2 text-xs text-foreground hover:bg-secondary">
              Copiar link
            </button>
            <button onClick={() => window.print()} className="rounded-full bg-accent text-accent-foreground px-4 py-2 text-xs font-semibold">
              Imprimir / PDF
            </button>
          </div>
        </div>
        <DocumentoPropuesta p={p} />
      </main>
    )
  }

  // helpers de UI
  const set = (k: keyof Propuesta, v: unknown) => setP({ ...p, [k]: v })
  const lista = <T,>(k: keyof Propuesta, vacio: T) => ({
    add: () => set(k, [...(p[k] as T[]), vacio]),
    del: (i: number) => set(k, (p[k] as T[]).filter((_, j) => j !== i)),
    upd: (i: number, v: T) => set(k, (p[k] as T[]).map((x, j) => (j === i ? v : x))),
  })

  const bullets = (k: "queEsBullets" | "incluido" | "noIncluido" | "proximosPasos", titulo: string) => {
    const L = lista<string>(k, "")
    return (
      <div>
        <label className={lbl}>{titulo}</label>
        {(p[k] as string[]).map((t, i) => (
          <div key={i} className="flex gap-2 mb-2">
            <input className={inp} value={t} onChange={(e) => L.upd(i, e.target.value)} />
            <button onClick={() => L.del(i)} className="px-3 rounded-lg border border-border text-muted-foreground hover:text-red-400 text-sm">×</button>
          </div>
        ))}
        <button onClick={L.add} className="text-xs text-accent hover:underline">+ agregar</button>
      </div>
    )
  }

  const Lm = lista<{ titulo: string; texto: string }>("modulos", { titulo: "", texto: "" })
  const Lt = lista<{ a: string; b: string; c: string }>("tecnologia", { a: "", b: "", c: "" })
  const Lf = lista<{ fase: string; nombre: string; incluye: string; duracion: string }>("fases", { fase: "", nombre: "", incluye: "", duracion: "" })
  const Lp = lista<{ concepto: string; valor: number }>("precios", { concepto: "", valor: 0 })
  const Li = lista<{ a: string; b: string }>("infraestructura", { a: "", b: "" })
  const Lc = lista<{ momento: string; pct: number }>("cuotas", { momento: "", pct: 0 })

  return (
    <main className="min-h-screen bg-background px-4 sm:px-6 py-8">
      <div className="max-w-3xl mx-auto">

        <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Generador de propuestas</h1>
            <p className="text-sm text-muted-foreground">Cargá los datos y generá el link para el cliente.</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <button onClick={guardar} className="rounded-full border border-border px-4 py-2 text-xs text-foreground hover:bg-secondary">Guardar</button>
            <button onClick={() => setPreview(true)} className="rounded-full bg-accent text-accent-foreground px-4 py-2 text-xs font-semibold">Vista previa</button>
          </div>
        </div>

        {msg && <p className="mb-4 text-sm text-accent">{msg}</p>}

        {/* Guardadas */}
        {Object.keys(guardadas).length > 0 && (
          <div className="mb-6 rounded-2xl border border-border bg-card p-4">
            <p className="text-xs text-muted-foreground mb-3">Propuestas guardadas</p>
            <div className="flex flex-wrap gap-2">
              {Object.keys(guardadas).map((k) => (
                <span key={k} className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs">
                  <button onClick={() => cargar(k)} className="text-foreground hover:text-accent">{k}</button>
                  <button onClick={() => borrar(k)} className="text-muted-foreground hover:text-red-400">×</button>
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="space-y-5">

          <Card title="Encabezado">
            <div><label className={lbl}>Cliente / Proyecto</label><input className={inp} value={p.cliente} onChange={(e) => set("cliente", e.target.value)} placeholder="Geolaboro" /></div>
            <div><label className={lbl}>Subtítulo</label><input className={inp} value={p.subtitulo} onChange={(e) => set("subtitulo", e.target.value)} placeholder="Plataforma digital geolocalizada..." /></div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div><label className={lbl}>Fecha</label><input className={inp} value={p.fecha} onChange={(e) => set("fecha", e.target.value)} /></div>
              <div><label className={lbl}>Validez</label><input className={inp} value={p.validez} onChange={(e) => set("validez", e.target.value)} /></div>
            </div>
          </Card>

          <Card title="¿Qué es?">
            <div><label className={lbl}>Descripción</label><textarea className={`${inp} min-h-[120px]`} value={p.queEs} onChange={(e) => set("queEs", e.target.value)} /></div>
            {bullets("queEsBullets", "Puntos destacados")}
          </Card>

          <Card title="Módulos y funcionalidades">
            {p.modulos.map((m, i) => (
              <div key={i} className="rounded-xl border border-border p-3 space-y-2">
                <div className="flex gap-2">
                  <input className={inp} placeholder="Título del módulo" value={m.titulo} onChange={(e) => Lm.upd(i, { ...m, titulo: e.target.value })} />
                  <button onClick={() => Lm.del(i)} className="px-3 rounded-lg border border-border text-muted-foreground hover:text-red-400">×</button>
                </div>
                <textarea className={`${inp} min-h-[70px]`} placeholder="Descripción" value={m.texto} onChange={(e) => Lm.upd(i, { ...m, texto: e.target.value })} />
              </div>
            ))}
            <button onClick={Lm.add} className="text-xs text-accent hover:underline">+ agregar módulo</button>
          </Card>

          <Card title="Tecnología">
            {p.tecnologia.map((t, i) => (
              <div key={i} className="flex gap-2">
                <input className={inp} placeholder="Componente" value={t.a} onChange={(e) => Lt.upd(i, { ...t, a: e.target.value })} />
                <input className={inp} placeholder="Tecnología" value={t.b} onChange={(e) => Lt.upd(i, { ...t, b: e.target.value })} />
                <input className={inp} placeholder="Para qué sirve" value={t.c} onChange={(e) => Lt.upd(i, { ...t, c: e.target.value })} />
                <button onClick={() => Lt.del(i)} className="px-3 rounded-lg border border-border text-muted-foreground hover:text-red-400">×</button>
              </div>
            ))}
            <button onClick={Lt.add} className="text-xs text-accent hover:underline">+ agregar fila</button>
            <div><label className={lbl}>Nota</label><textarea className={inp} value={p.tecnologiaNota} onChange={(e) => set("tecnologiaNota", e.target.value)} /></div>
          </Card>

          <Card title="Fases">
            <div><label className={lbl}>Intro</label><textarea className={inp} value={p.fasesNota} onChange={(e) => set("fasesNota", e.target.value)} /></div>
            {p.fases.map((f, i) => (
              <div key={i} className="rounded-xl border border-border p-3 space-y-2">
                <div className="flex gap-2">
                  <input className={`${inp} max-w-[110px]`} placeholder="Fase 1" value={f.fase} onChange={(e) => Lf.upd(i, { ...f, fase: e.target.value })} />
                  <input className={inp} placeholder="Nombre" value={f.nombre} onChange={(e) => Lf.upd(i, { ...f, nombre: e.target.value })} />
                  <input className={`${inp} max-w-[110px]`} placeholder="4 meses" value={f.duracion} onChange={(e) => Lf.upd(i, { ...f, duracion: e.target.value })} />
                  <button onClick={() => Lf.del(i)} className="px-3 rounded-lg border border-border text-muted-foreground hover:text-red-400">×</button>
                </div>
                <textarea className={`${inp} min-h-[70px]`} placeholder="Qué incluye" value={f.incluye} onChange={(e) => Lf.upd(i, { ...f, incluye: e.target.value })} />
              </div>
            ))}
            <button onClick={Lf.add} className="text-xs text-accent hover:underline">+ agregar fase</button>
          </Card>

          <Card title="Inversión">
            {p.precios.map((it, i) => (
              <div key={i} className="flex gap-2">
                <input className={inp} placeholder="Concepto" value={it.concepto} onChange={(e) => Lp.upd(i, { ...it, concepto: e.target.value })} />
                <input className={`${inp} max-w-[150px]`} type="number" placeholder="0" value={it.valor || ""} onChange={(e) => Lp.upd(i, { ...it, valor: Number(e.target.value) })} />
                <button onClick={() => Lp.del(i)} className="px-3 rounded-lg border border-border text-muted-foreground hover:text-red-400">×</button>
              </div>
            ))}
            <button onClick={Lp.add} className="text-xs text-accent hover:underline">+ agregar ítem</button>
            <p className="text-sm text-foreground pt-2 border-t border-border">
              Total: <span className="text-accent font-bold text-lg">{money(totalPrecios(p))}</span>
            </p>
          </Card>

          <Card title="Infraestructura (cliente)">
            {p.infraestructura.map((it, i) => (
              <div key={i} className="flex gap-2">
                <input className={inp} placeholder="Servicio" value={it.a} onChange={(e) => Li.upd(i, { ...it, a: e.target.value })} />
                <input className={`${inp} max-w-[180px]`} placeholder="$ 101.000 / mes" value={it.b} onChange={(e) => Li.upd(i, { ...it, b: e.target.value })} />
                <button onClick={() => Li.del(i)} className="px-3 rounded-lg border border-border text-muted-foreground hover:text-red-400">×</button>
              </div>
            ))}
            <button onClick={Li.add} className="text-xs text-accent hover:underline">+ agregar servicio</button>
            <div><label className={lbl}>Nota</label><textarea className={inp} value={p.infraNota} onChange={(e) => set("infraNota", e.target.value)} /></div>
          </Card>

          <Card title="Condiciones de pago">
            <div><label className={lbl}>Intro</label><textarea className={inp} value={p.pagosNota} onChange={(e) => set("pagosNota", e.target.value)} /></div>
            {p.cuotas.map((c, i) => (
              <div key={i} className="flex gap-2 items-center">
                <input className={inp} placeholder="Momento" value={c.momento} onChange={(e) => Lc.upd(i, { ...c, momento: e.target.value })} />
                <input className={`${inp} max-w-[80px]`} type="number" placeholder="%" value={c.pct || ""} onChange={(e) => Lc.upd(i, { ...c, pct: Number(e.target.value) })} />
                <span className="text-xs text-muted-foreground whitespace-nowrap min-w-[100px] text-right tabular-nums">
                  {money(Math.round((totalPrecios(p) * c.pct) / 100))}
                </span>
                <button onClick={() => Lc.del(i)} className="px-3 rounded-lg border border-border text-muted-foreground hover:text-red-400">×</button>
              </div>
            ))}
            <button onClick={Lc.add} className="text-xs text-accent hover:underline">+ agregar cuota</button>
            <p className="text-xs text-muted-foreground">
              Suma de porcentajes: {p.cuotas.reduce((s, c) => s + (Number(c.pct) || 0), 0)}%
            </p>
          </Card>

          <Card title="Alcance">
            {bullets("incluido", "Incluido")}
            {bullets("noIncluido", "No incluido")}
          </Card>

          <Card title="Próximos pasos y cierre">
            {bullets("proximosPasos", "Pasos")}
            <div><label className={lbl}>Texto de cierre</label><textarea className={inp} value={p.cierre} onChange={(e) => set("cierre", e.target.value)} /></div>
          </Card>

        </div>

        {/* Acciones */}
        <div className="mt-8 flex flex-wrap gap-3">
          <button onClick={() => setPreview(true)} className="rounded-full bg-accent text-accent-foreground px-6 py-3 text-sm font-semibold hover:bg-accent/90">
            Vista previa
          </button>
          <button onClick={copiarLink} className="rounded-full border border-accent/40 text-accent px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
            Copiar link para el cliente
          </button>
          <button onClick={guardar} className="rounded-full border border-border px-6 py-3 text-sm text-foreground hover:bg-secondary">
            Guardar
          </button>
          <button onClick={() => setP(PROPUESTA_VACIA)} className="rounded-full border border-border px-6 py-3 text-sm text-muted-foreground hover:bg-secondary">
            Nueva
          </button>
        </div>

        {/* Backup */}
        <div className="mt-8 pt-6 border-t border-border flex flex-wrap gap-3 items-center">
          <p className="text-xs text-muted-foreground mr-2">Respaldo:</p>
          <button onClick={exportar} className="text-xs text-accent hover:underline">Exportar todas</button>
          <label className="text-xs text-accent hover:underline cursor-pointer">
            Importar
            <input type="file" accept="application/json" className="hidden" onChange={(e) => e.target.files?.[0] && importar(e.target.files[0])} />
          </label>
          <Link href="/" className="text-xs text-muted-foreground hover:text-foreground ml-auto">← Inicio</Link>
        </div>

      </div>
    </main>
  )
}
