"use client"

import { useState, useEffect } from "react"
import { Search, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
]

const HEADER_OFFSET = 80

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.slice(1)
    const targetElement = document.getElementById(targetId)
    
    if (targetElement) {
      const targetPosition = targetElement.offsetTop - HEADER_OFFSET
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      })
    }
    
    setMobileMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      // Detect active section
      const sections = navItems.map((item) => item.href.slice(1))
      const scrollPosition = window.scrollY + HEADER_OFFSET + 20

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          return
        }
      }
      setActiveSection("")
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-lg shadow-black/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
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
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`text-sm transition-colors cursor-pointer ${
                  activeSection === item.href.slice(1)
                    ? "text-accent font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </a>
            ))}
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
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`text-sm transition-colors cursor-pointer ${
                    activeSection === item.href.slice(1)
                      ? "text-accent font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <Button className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground w-full mt-2">
                {"Let's Talk"}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
