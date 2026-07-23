"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useI18n, waLink } from "@/lib/i18n"

function Logo({ className = "w-12 h-12 p-1.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 527.3 532.41" className={`${className} text-accent`} fill="currentColor" aria-hidden="true">
      <path d="M219.12,407.56c-4.55-21.23-3.14-36.63-3.13-36.77l3.69-36.94-75.88,139.45h-41.15L306.4,122.5l46.38,76.35,2.73,4.46,5.13-1c.08-.01,7.83-1.49,22.98-1.49s27.38,3.01,27.5,3.03l17.18,4.29L307.88,0,0,532.41l175.31-1.81,52.66-86.63,2.18-3.63-1.94-3.75c-.05-.09-4.92-9.61-9.08-29.04Z"/>
      <path d="M469.94,402.95h-5.22s-1.49,5.01-1.49,5.01c-.19.63-19.25,62.72-70.38,66.67-24.06,1.87-46.66-4.31-67.17-18.34-23.33-15.96-36.98-42.52-38.44-74.8-1.58-34.91,11.75-71.22,32.43-88.3,29.09-24.03,65.22-21.55,75.79-20.18l39.5,70.77,69.59-2.11-65.71-116.12-.82-.75c-2.17-1.98-23.11-19.06-89.64-9.08-67.96,10.19-99.99,72.8-101.32,75.46v.03c-.77,1.54-18.65,38.11-18.65,73.14,0,86.34,37.68,126.97,69.29,145.85,25.84,15.44,54.83,21.23,81.16,21.23s51.58-6.19,66.71-14.34c65.68-35.37,79.54-102.94,80.1-105.8l1.63-8.34h-57.36Z"/>
    </svg>
  )
}

function LangToggle({ className = "", size = "text-sm" }: { className?: string; size?: string }) {
  const { lang, setLang } = useI18n()
  return (
    <div className={`${size} text-muted-foreground flex items-center gap-2 ${className}`}>
      <button
        onClick={() => setLang("es")}
        className={`transition-colors ${lang === "es" ? "text-accent font-semibold" : "hover:text-foreground"}`}
      >
        ES
      </button>
      <span className="opacity-40">|</span>
      <button
        onClick={() => setLang("en")}
        className={`transition-colors ${lang === "en" ? "text-accent font-semibold" : "hover:text-foreground"}`}
      >
        EN
      </button>
    </div>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const { t, lang } = useI18n()

  // Bloquea el scroll del body cuando el overlay está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  // Cierra con la tecla Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false) }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const links = [
    { num: "01", label: t.nav.work, href: "#work" },
    { num: "02", label: t.nav.services, href: "#services" },
    { num: "03", label: t.nav.process, href: "#process" },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
              <Logo />
            </Link>

            {/* Nav desktop */}
            <nav className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <Link key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* Acciones desktop */}
            <div className="hidden md:flex items-center gap-6">
              <LangToggle />
              <Button asChild className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href={waLink(lang)} target="_blank" rel="noopener noreferrer">
                  {t.nav.startProject}
                </a>
              </Button>
            </div>

            {/* Botón hamburguesa → X (animado) */}
            <button
              className="md:hidden relative z-[60] w-10 h-10 flex flex-col items-center justify-center gap-[5px]"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
            >
              <span
                className={`block h-[2px] w-6 bg-foreground transition-all duration-300 ease-out ${
                  open ? "translate-y-[7px] rotate-45 bg-accent" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-6 bg-foreground transition-all duration-200 ${
                  open ? "opacity-0 scale-x-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-[2px] w-6 bg-foreground transition-all duration-300 ease-out ${
                  open ? "-translate-y-[7px] -rotate-45 bg-accent" : ""
                }`}
              />
            </button>

          </div>
        </div>
      </header>

      {/* Overlay fullscreen */}
      <div
        className={`md:hidden fixed inset-0 z-[55] bg-background transition-all duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Glow de fondo */}
        <div className="absolute -top-32 -right-20 w-[420px] h-[420px] bg-lime-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative h-full flex flex-col px-6 pt-28 pb-10">

          {/* Links grandes numerados */}
          <nav className="flex-1 flex flex-col justify-center gap-1">
            {links.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`group flex items-baseline gap-4 py-3 border-b border-border/40 transition-all duration-500 ${
                  open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: open ? `${120 + i * 80}ms` : "0ms" }}
              >
                <span className="text-xs font-semibold text-accent tabular-nums">{l.num}</span>
                <span className="text-4xl font-bold tracking-tight text-foreground group-hover:text-accent group-active:text-accent transition-colors">
                  {l.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Pie del overlay */}
          <div
            className={`flex flex-col gap-5 transition-all duration-500 ${
              open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: open ? "380ms" : "0ms" }}
          >
            <Button asChild className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground w-full h-auto py-4 text-base font-semibold">
              <a href={waLink(lang)} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
                {t.nav.startProject}
              </a>
            </Button>

            <div className="flex items-center justify-between">
              <LangToggle size="text-base" />
              <span className="text-xs text-muted-foreground">San Nicolás, BA</span>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
