"use client"

import type { Propuesta } from "@/lib/propuesta"
import { money, totalPrecios } from "@/lib/propuesta"

function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 527.3 532.41" className={`${className} text-accent`} fill="currentColor" aria-hidden="true">
      <path d="M219.12,407.56c-4.55-21.23-3.14-36.63-3.13-36.77l3.69-36.94-75.88,139.45h-41.15L306.4,122.5l46.38,76.35,2.73,4.46,5.13-1c.08-.01,7.83-1.49,22.98-1.49s27.38,3.01,27.5,3.03l17.18,4.29L307.88,0,0,532.41l175.31-1.81,52.66-86.63,2.18-3.63-1.94-3.75c-.05-.09-4.92-9.61-9.08-29.04Z" />
      <path d="M469.94,402.95h-5.22s-1.49,5.01-1.49,5.01c-.19.63-19.25,62.72-70.38,66.67-24.06,1.87-46.66-4.31-67.17-18.34-23.33-15.96-36.98-42.52-38.44-74.8-1.58-34.91,11.75-71.22,32.43-88.3,29.09-24.03,65.22-21.55,75.79-20.18l39.5,70.77,69.59-2.11-65.71-116.12-.82-.75c-2.17-1.98-23.11-19.06-89.64-9.08-67.96,10.19-99.99,72.8-101.32,75.46v.03c-.77,1.54-18.65,38.11-18.65,73.14,0,86.34,37.68,126.97,69.29,145.85,25.84,15.44,54.83,21.23,81.16,21.23s51.58-6.19,66.71-14.34c65.68-35.37,79.54-102.94,80.1-105.8l1.63-8.34h-57.36Z" />
    </svg>
  )
}

function Seccion({ n, titulo, children }: { n: number; titulo: string; children: React.ReactNode }) {
  return (
    <section className="prop-seccion mt-14">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5 flex items-baseline gap-3">
        <span className="text-accent text-lg font-semibold tabular-nums">{String(n).padStart(2, "0")}</span>
        {titulo}
      </h2>
      {children}
    </section>
  )
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.filter(Boolean).map((t, i) => (
        <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
          <span className="text-accent mt-1.5 shrink-0">▪</span>
          <span>{t}</span>
        </li>
      ))}
    </ul>
  )
}

export function DocumentoPropuesta({ p }: { p: Propuesta }) {
  const total = totalPrecios(p)
  let n = 0

  return (
    <article className="prop-doc max-w-3xl mx-auto px-6 py-12 md:py-16">
      {/* Portada */}
      <header className="border-b border-border pb-10">
        <div className="flex items-center gap-3 mb-10">
          <Logo className="w-11 h-11" />
          <div>
            <p className="font-semibold text-foreground leading-tight">Agustin Curti</p>
            <p className="text-xs text-muted-foreground">Diseño y Desarrollo Web</p>
          </div>
        </div>

        <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase mb-3">Propuesta comercial</p>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-3">
          {p.cliente || "Nombre del cliente"}
        </h1>
        {p.subtitulo && <p className="text-lg text-muted-foreground mb-8">{p.subtitulo}</p>}

        <dl className="grid sm:grid-cols-3 gap-x-6 gap-y-3 text-sm mt-8">
          <div>
            <dt className="text-muted-foreground text-xs uppercase tracking-wide mb-1">Fecha</dt>
            <dd className="text-foreground">{p.fecha}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground text-xs uppercase tracking-wide mb-1">Válido hasta</dt>
            <dd className="text-foreground">{p.validez}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground text-xs uppercase tracking-wide mb-1">Preparado por</dt>
            <dd className="text-foreground">Agustín · Diseño y Desarrollo Web</dd>
          </div>
        </dl>
      </header>

      {/* 1. Qué es */}
      {(p.queEs || p.queEsBullets.length > 0) && (
        <Seccion n={++n} titulo={`¿Qué es ${p.cliente || "el proyecto"}?`}>
          {p.queEs && <p className="text-muted-foreground leading-relaxed mb-5 whitespace-pre-line">{p.queEs}</p>}
          {p.queEsBullets.length > 0 && <Bullets items={p.queEsBullets} />}
        </Seccion>
      )}

      {/* 2. Módulos */}
      {p.modulos.length > 0 && (
        <Seccion n={++n} titulo="Módulos y funcionalidades">
          <div className="space-y-6">
            {p.modulos.filter((m) => m.titulo || m.texto).map((m, i) => (
              <div key={i} className="border-l-2 border-accent/30 pl-5">
                <h3 className="font-semibold text-foreground mb-1.5">{m.titulo}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{m.texto}</p>
              </div>
            ))}
          </div>
        </Seccion>
      )}

      {/* 3. Tecnología */}
      {p.tecnologia.length > 0 && (
        <Seccion n={++n} titulo="Tecnología e infraestructura">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 pr-4 text-xs uppercase tracking-wide text-accent font-semibold">Componente</th>
                  <th className="text-left py-3 pr-4 text-xs uppercase tracking-wide text-accent font-semibold">Tecnología</th>
                  <th className="text-left py-3 text-xs uppercase tracking-wide text-accent font-semibold">Para qué sirve</th>
                </tr>
              </thead>
              <tbody>
                {p.tecnologia.filter((t) => t.a).map((t, i) => (
                  <tr key={i} className="border-b border-border/50">
                    <td className="py-3 pr-4 text-foreground font-medium align-top">{t.a}</td>
                    <td className="py-3 pr-4 text-muted-foreground align-top">{t.b}</td>
                    <td className="py-3 text-muted-foreground align-top">{t.c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {p.tecnologiaNota && <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{p.tecnologiaNota}</p>}
        </Seccion>
      )}

      {/* 4. Fases */}
      {p.fases.length > 0 && (
        <Seccion n={++n} titulo="Plan de trabajo y tiempos">
          {p.fasesNota && <p className="text-muted-foreground leading-relaxed mb-6">{p.fasesNota}</p>}
          <div className="space-y-4">
            {p.fases.filter((f) => f.nombre || f.fase).map((f, i) => (
              <div key={i} className="rounded-xl border border-border p-5">
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <h3 className="font-semibold text-foreground">
                    <span className="text-accent mr-2">{f.fase}</span>
                    {f.nombre}
                  </h3>
                  <span className="text-sm text-accent whitespace-nowrap font-medium">{f.duracion}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.incluye}</p>
              </div>
            ))}
          </div>
        </Seccion>
      )}

      {/* 5. Inversión */}
      {p.precios.length > 0 && (
        <Seccion n={++n} titulo="Inversión">
          <p className="text-sm text-muted-foreground mb-5">{p.moneda}</p>
          <table className="w-full text-sm border-collapse">
            <tbody>
              {p.precios.filter((i) => i.concepto).map((it, i) => (
                <tr key={i} className="border-b border-border/50">
                  <td className="py-3.5 pr-4 text-muted-foreground leading-relaxed">{it.concepto}</td>
                  <td className="py-3.5 text-right text-foreground font-medium whitespace-nowrap tabular-nums">
                    {money(it.valor)}
                  </td>
                </tr>
              ))}
              <tr className="border-t-2 border-accent">
                <td className="py-4 pr-4 font-bold text-foreground uppercase text-xs tracking-wide">Total del proyecto</td>
                <td className="py-4 text-right text-2xl font-extrabold text-accent whitespace-nowrap tabular-nums">
                  {money(total)}
                </td>
              </tr>
            </tbody>
          </table>

          {p.infraestructura.length > 0 && (
            <div className="mt-10">
              <h3 className="font-semibold text-foreground mb-4">Infraestructura (a cargo del cliente)</h3>
              <table className="w-full text-sm border-collapse">
                <tbody>
                  {p.infraestructura.filter((i) => i.a).map((it, i) => (
                    <tr key={i} className="border-b border-border/50">
                      <td className="py-3 pr-4 text-muted-foreground">{it.a}</td>
                      <td className="py-3 text-right text-foreground whitespace-nowrap">{it.b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {p.infraNota && <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{p.infraNota}</p>}
            </div>
          )}
        </Seccion>
      )}

      {/* 6. Condiciones de pago */}
      {p.cuotas.length > 0 && total > 0 && (
        <Seccion n={++n} titulo="Condiciones de pago">
          {p.pagosNota && <p className="text-muted-foreground leading-relaxed mb-6">{p.pagosNota}</p>}
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 pr-4 text-xs uppercase tracking-wide text-accent font-semibold">Cuota</th>
                <th className="text-left py-3 pr-4 text-xs uppercase tracking-wide text-accent font-semibold">Momento</th>
                <th className="text-right py-3 pr-4 text-xs uppercase tracking-wide text-accent font-semibold">%</th>
                <th className="text-right py-3 text-xs uppercase tracking-wide text-accent font-semibold">Monto</th>
              </tr>
            </thead>
            <tbody>
              {p.cuotas.filter((c) => c.momento).map((c, i) => (
                <tr key={i} className="border-b border-border/50">
                  <td className="py-3.5 pr-4 text-foreground font-medium whitespace-nowrap">{i + 1}° pago</td>
                  <td className="py-3.5 pr-4 text-muted-foreground">{c.momento}</td>
                  <td className="py-3.5 pr-4 text-right text-muted-foreground tabular-nums">{c.pct}%</td>
                  <td className="py-3.5 text-right text-foreground font-medium whitespace-nowrap tabular-nums">
                    {money(Math.round((total * c.pct) / 100))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Seccion>
      )}

      {/* 7. Alcance */}
      {(p.incluido.length > 0 || p.noIncluido.length > 0) && (
        <Seccion n={++n} titulo="Alcance del proyecto">
          {p.incluido.length > 0 && (
            <div className="mb-8">
              <h3 className="font-semibold text-foreground mb-4">Incluido en la propuesta</h3>
              <Bullets items={p.incluido} />
            </div>
          )}
          {p.noIncluido.length > 0 && (
            <div>
              <h3 className="font-semibold text-foreground mb-4">No incluido</h3>
              <ul className="space-y-2.5">
                {p.noIncluido.filter(Boolean).map((t, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                    <span className="mt-1.5 shrink-0 opacity-40">▪</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Seccion>
      )}

      {/* 8. Próximos pasos */}
      {p.proximosPasos.length > 0 && (
        <Seccion n={++n} titulo="Próximos pasos">
          <ol className="space-y-3">
            {p.proximosPasos.filter(Boolean).map((t, i) => (
              <li key={i} className="flex gap-4 text-muted-foreground leading-relaxed">
                <span className="text-accent font-semibold tabular-nums shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <span>{t}</span>
              </li>
            ))}
          </ol>
        </Seccion>
      )}

      {/* Cierre */}
      <footer className="mt-16 pt-8 border-t border-border">
        {p.cierre && <p className="text-sm text-muted-foreground mb-6">{p.cierre}</p>}
        <div className="flex items-center gap-3">
          <Logo className="w-9 h-9" />
          <div className="text-sm">
            <p className="font-semibold text-foreground">Agustin Curti</p>
            <p className="text-muted-foreground">agustincurti.com.ar · San Nicolás, Argentina</p>
          </div>
        </div>
      </footer>
    </article>
  )
}

