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
            <img src="/logo-ac.svg" alt="Agustin Curti" className="w-8 h-8" style={{ filter: "brightness(0) saturate(100%) invert(42%) sepia(93%) saturate(1352%) hue-rotate(258deg) brightness(89%) contrast(101%)" }} />
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
