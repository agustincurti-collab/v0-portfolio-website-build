"use client"

import { useI18n } from "@/lib/i18n"

export function FAQ() {
  const { t } = useI18n()

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.faq.titleA}{" "}
            <span className="bg-gradient-to-r from-lime-400 to-lime-200 bg-clip-text text-transparent">
              {t.faq.titleB}
            </span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.faq.subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {t.faq.items.map((faq, i) => {
            const number = String(i + 1).padStart(2, "0")
            return (
              <details
                key={number}
                className="group rounded-2xl border border-border bg-card/50 px-6 py-5 transition-all"
              >
                <summary className="flex cursor-pointer items-center gap-4 list-none">
                  <span className="text-sm font-semibold text-accent min-w-[40px]">
                    {number}
                  </span>
                  <span className="flex-1 font-medium text-foreground">
                    {faq.question}
                  </span>
                  <span className="text-muted-foreground transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <div className="mt-4 pl-14">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            )
          })}
        </div>
      </div>
    </section>
  )
}
