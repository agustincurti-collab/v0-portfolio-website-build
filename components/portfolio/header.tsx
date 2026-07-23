"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n, waLink } from "@/lib/i18n"

function LangToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useI18n()
  return (
    <div className={`text-sm text-muted-foreground flex items-center gap-2 ${className}`}>
      <button
        onClick={() => setLang("es")}
        className={`transition-colors ${lang === "es" ? "text-foreground font-semibold" : "hover:text-foreground"}`}
      >
        ES
      </button>
      <span>|</span>
      <button
        onClick={() => setLang("en")}
        className={`transition-colors ${lang === "en" ? "text-foreground font-semibold" : "hover:text-foreground"}`}
      >
        EN
      </button>
    </div>
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t, lang } = useI18n()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <svg viewBox="0 0 505.72 509.79" className="w-12 h-12 text-accent" fill="currentColor" aria-hidden="true">
              <path d="M0,509.79L294.8,0l105.05,181.6s-13.03-3.26-29.32-3.26-24.43,1.63-24.43,1.63l-52.93-87.14L76.55,465.82h58.63l60.26-110.75s-1.63,16.29,3.26,39.09c4.49,20.95,9.77,30.95,9.77,30.95l-50.49,83.07-157.99,1.63Z"/>
              <path d="M240.24,279.33s30.95-61.89,96.09-71.66c65.15-9.77,83.88,7.33,83.88,7.33l59.45,105.05-53.75,1.63-39.09-70.04s-47.23-9.77-84.69,21.17c-40.2,33.21-55.38,131.93,6.51,174.27,26.68,18.26,52.77,21.01,71.66,19.54,56.69-4.39,76.55-71.66,76.55-71.66h48.86s-13.03,66.78-76.55,100.98c-51.06,27.5-206.85,27.69-206.85-146.59,0-33.8,17.92-70.04,17.92-70.04Z"/>
            </svg>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.nav.work}
            </Link>

            <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.nav.services}
            </Link>

            <Link href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.nav.process}
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-6">

            <LangToggle />

            {/* CTA */}
            <Button asChild className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href={waLink(lang)} target="_blank" rel="noopener noreferrer">
                {t.nav.startProject}
              </a>
            </Button>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>

        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">

            <nav className="flex flex-col gap-4">

              <Link href="#work" onClick={() => setMobileMenuOpen(false)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t.nav.work}
              </Link>

              <Link href="#services" onClick={() => setMobileMenuOpen(false)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t.nav.services}
              </Link>

              <Link href="#process" onClick={() => setMobileMenuOpen(false)} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {t.nav.process}
              </Link>

              <LangToggle className="pt-2" />

              <Button asChild className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground w-full mt-2">
                <a href={waLink(lang)} target="_blank" rel="noopener noreferrer">
                  {t.nav.startProject}
                </a>
              </Button>

            </nav>

          </div>
        )}
      </div>
    </header>
  )
}
