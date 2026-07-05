"use client"

import { useI18n } from "@/lib/i18n"

export function Stats() {
  const { t } = useI18n()

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {t.stats.items.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
