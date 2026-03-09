import Link from "next/link"
import { Linkedin, Instagram, Mail, MessageCircle } from "lucide-react"

const navigationLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
]

const socialLinks = [
  { icon: Mail, href: "mailto:tuemail@email.com", label: "Email" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: MessageCircle, href: "https://wa.me/", label: "WhatsApp" },
]

export function Footer() {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border/50">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand Column */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">AC</span>
              </div>
              <span className="font-semibold text-foreground">Agustin Curti</span>
            </Link>

            <p className="text-sm text-muted-foreground mb-6">
              Digital designer & developer crafting modern digital experiences.
              Based in Buenos Aires, Argentina 🇦🇷 — working globally.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Connect</h4>

            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>

            {/* Language selector */}
            <div className="text-sm text-muted-foreground">
              <span className="cursor-pointer hover:text-foreground transition-colors">ES</span>
              {" | "}
              <span className="cursor-pointer hover:text-foreground transition-colors">EN</span>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex justify-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Agustin Curti. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}
