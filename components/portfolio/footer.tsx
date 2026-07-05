"use client"

import Link from "next/link"
import { Linkedin, Instagram, Mail, MessageCircle } from "lucide-react"
import { useI18n, waLink, CONTACT } from "@/lib/i18n"

export function Footer() {
  const { t, lang } = useI18n()

  const socialLinks = [
    { icon: Mail, href: `mailto:${CONTACT.email}`, label: "Email", external: false },
    { icon: Linkedin, href: CONTACT.linkedin, label: "LinkedIn", external: true },
    { icon: Instagram, href: CONTACT.instagram, label: "Instagram", external: true },
    { icon: MessageCircle, href: waLink(lang), label: "WhatsApp", external: true },
  ]

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
              {t.footer.brandDesc}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">{t.footer.navTitle}</h4>
            <ul className="space-y-3">
              {t.footer.nav.map((link) => (
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
            <h4 className="text-sm font-semibold text-foreground mb-4">{t.footer.connectTitle}</h4>

            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.external ? "_blank" : undefined}
                  rel={social.external ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex justify-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Agustin Curti. {t.footer.rights}
          </p>
        </div>

      </div>
    </footer>
  )
}
