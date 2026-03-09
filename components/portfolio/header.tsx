"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-sm">AC</span>
            </div>
            <span className="font-semibold text-foreground">Agustin Curti</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Work
            </Link>
            <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Services
            </Link>
            <Link href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Process
            </Link>
            <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search projects..."
                className="pl-9 pr-4 py-2 text-sm bg-secondary rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-accent/50 w-40 text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <Button className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground">
              {"Let's Talk"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
              <Link href="#work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Work
              </Link>
              <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Services
              </Link>
              <Link href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Process
              </Link>
              <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Button className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground w-full mt-2">
                {"Start a Project"}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
