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
              <svg viewBox="0 0 527.3 532.41" className="w-14 h-14 p-1.5 text-accent" fill="currentColor" aria-hidden="true">
                <path d="M219.12,407.56c-4.55-21.23-3.14-36.63-3.13-36.77l3.69-36.94-75.88,139.45h-41.15L306.4,122.5l46.38,76.35,2.73,4.46,5.13-1c.08-.01,7.83-1.49,22.98-1.49s27.38,3.01,27.5,3.03l17.18,4.29L307.88,0,0,532.41l175.31-1.81,52.66-86.63,2.18-3.63-1.94-3.75c-.05-.09-4.92-9.61-9.08-29.04Z"/>
                <path d="M469.94,402.95h-5.22s-1.49,5.01-1.49,5.01c-.19.63-19.25,62.72-70.38,66.67-24.06,1.87-46.66-4.31-67.17-18.34-23.33-15.96-36.98-42.52-38.44-74.8-1.58-34.91,11.75-71.22,32.43-88.3,29.09-24.03,65.22-21.55,75.79-20.18l39.5,70.77,69.59-2.11-65.71-116.12-.82-.75c-2.17-1.98-23.11-19.06-89.64-9.08-67.96,10.19-99.99,72.8-101.32,75.46v.03c-.77,1.54-18.65,38.11-18.65,73.14,0,86.34,37.68,126.97,69.29,145.85,25.84,15.44,54.83,21.23,81.16,21.23s51.58-6.19,66.71-14.34c65.68-35.37,79.54-102.94,80.1-105.8l1.63-8.34h-57.36Z"/>
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
