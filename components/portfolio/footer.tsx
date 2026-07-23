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
              <svg viewBox="0 0 505.72 509.79" className="w-12 h-12 text-accent" fill="currentColor" aria-hidden="true">
                <path d="M0,509.79L294.8,0l105.05,181.6s-13.03-3.26-29.32-3.26-24.43,1.63-24.43,1.63l-52.93-87.14L76.55,465.82h58.63l60.26-110.75s-1.63,16.29,3.26,39.09c4.49,20.95,9.77,30.95,9.77,30.95l-50.49,83.07-157.99,1.63Z"/>
                <path d="M240.24,279.33s30.95-61.89,96.09-71.66c65.15-9.77,83.88,7.33,83.88,7.33l59.45,105.05-53.75,1.63-39.09-70.04s-47.23-9.77-84.69,21.17c-40.2,33.21-55.38,131.93,6.51,174.27,26.68,18.26,52.77,21.01,71.66,19.54,56.69-4.39,76.55-71.66,76.55-71.66h48.86s-13.03,66.78-76.55,100.98c-51.06,27.5-206.85,27.69-206.85-146.59,0-33.8,17.92-70.04,17.92-70.04Z"/>
              </svg>
              <span className="font-semibold text-foreground">Agustin Curti</span>
            </Link>

            <p className="text-sm text-muted-foreground mb-6">
              {t.footer.brandDesc}
              <svg viewBox="0 0 900 600" className="inline-block w-4 h-auto rounded-[2px] ml-1.5 align-[-2px]" aria-label="Argentina">
                <rect width="900" height="600" fill="#74acdf"/>
                <rect y="200" width="900" height="200" fill="#fff"/>
                <circle cx="450" cy="300" r="45" fill="#f6b40e" stroke="#85340a" strokeWidth="4"/>
              </svg>
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
