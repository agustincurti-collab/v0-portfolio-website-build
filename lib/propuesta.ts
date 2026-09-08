// Sistema de propuestas — tipos, datos y utilidades

export type Fila2 = { a: string; b: string }
export type Fila3 = { a: string; b: string; c: string }
export type Fase = { fase: string; nombre: string; incluye: string; duracion: string }
export type ItemPrecio = { concepto: string; valor: number }
export type Cuota = { momento: string; pct: number }
export type Modulo = { titulo: string; texto: string }

export type Propuesta = {
  // encabezado
  cliente: string
  subtitulo: string
  fecha: string
  validez: string
  moneda: string
  // secciones
  queEs: string
  queEsBullets: string[]
  modulos: Modulo[]
  tecnologia: Fila3[]
  tecnologiaNota: string
  fases: Fase[]
  fasesNota: string
  precios: ItemPrecio[]
  infraestructura: Fila2[]
  infraNota: string
  cuotas: Cuota[]
  pagosNota: string
  incluido: string[]
  noIncluido: string[]
  proximosPasos: string[]
  cierre: string
}

export const PROPUESTA_VACIA: Propuesta = {
  cliente: "",
  subtitulo: "",
  fecha: new Date().toLocaleDateString("es-AR", { month: "long", year: "numeric" }),
  validez: "30 días a partir de la fecha de emisión",
  moneda: "Todos los valores están expresados en pesos argentinos (ARS).",
  queEs: "",
  queEsBullets: [],
  modulos: [],
  tecnologia: [],
  tecnologiaNota: "",
  fases: [],
  fasesNota: "",
  precios: [],
  infraestructura: [],
  infraNota: "",
  cuotas: [
    { momento: "Al inicio del proyecto (anticipo para comenzar)", pct: 30 },
    { momento: "Al completar la Fase 1", pct: 30 },
    { momento: "Al completar la Fase 2", pct: 20 },
    { momento: "Entrega final", pct: 20 },
  ],
  pagosNota:
    "El proyecto se abona por etapas según avance de desarrollo. No se exige el pago total por adelantado. Cada cuota se factura al momento de su correspondiente hito.",
  incluido: [
    "Diseño y maquetación completa de todas las pantallas (mobile-first).",
    "Desarrollo frontend y backend de los módulos descritos.",
    "Configuración del servidor de hosting (instalación inicial).",
    "Tres meses de soporte técnico post-lanzamiento.",
  ],
  noIncluido: [
    "Costo mensual de infraestructura (hosting, dominio) — a cargo del cliente.",
    "Creación de contenido editorial o textos.",
    "Fotografía profesional o producción de material visual.",
  ],
  proximosPasos: [
    "Reunión de inicio para revisar y validar el alcance completo.",
    "Firma de acuerdo de trabajo y confidencialidad.",
    "Primer pago para dar inicio al diseño y la arquitectura.",
    "Primera entrega de wireframes para aprobación antes de codificar.",
  ],
  cierre: "Esta propuesta tiene validez de 30 días calendario a partir de la fecha de emisión.",
}

// ── utilidades ──

export const money = (n: number) =>
  "$ " + (n || 0).toLocaleString("es-AR", { maximumFractionDigits: 0 })

export const totalPrecios = (p: Propuesta) =>
  p.precios.reduce((s, i) => s + (Number(i.valor) || 0), 0)

// Codificación para el link compartible (soporta UTF-8)
export function encodePropuesta(p: Propuesta): string {
  const json = JSON.stringify(p)
  const bytes = new TextEncoder().encode(json)
  let bin = ""
  bytes.forEach((b) => (bin += String.fromCharCode(b)))
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
}

export function decodePropuesta(s: string): Propuesta | null {
  try {
    const b64 = s.replace(/-/g, "+").replace(/_/g, "/")
    const bin = atob(b64)
    const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0))
    const json = new TextDecoder().decode(bytes)
    return JSON.parse(json) as Propuesta
  } catch {
    return null
  }
}

