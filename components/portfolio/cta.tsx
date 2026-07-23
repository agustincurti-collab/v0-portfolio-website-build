"use client"

import { Button } from "@/components/ui/button"
import { useI18n, waLink } from "@/lib/i18n"

export function CTA() {
  const { t, lang } = useI18n()

  return (
    <section className="relative overflow-hidden py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-lime-950/40 via-background to-background">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
          {t.cta.titleA}
          <br />
          {t.cta.titleB}
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
          {t.cta.subtitle}
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild className="h-auto rounded-full bg-accent px-8 py-3 text-base text-accent-foreground shadow-2xl hover:bg-accent/90 transition-all duration-300">
            <a href={waLink(lang)} target="_blank" rel="noopener noreferrer">
              {t.cta.start}
            </a>
          </Button>

          <Button
            asChild
            variant="outline"
            className="h-auto rounded-full border-border px-8 py-3 text-base text-foreground hover:bg-secondary"
          >
            <a href={waLink(lang)} target="_blank" rel="noopener noreferrer">
              {t.cta.whatsapp}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
