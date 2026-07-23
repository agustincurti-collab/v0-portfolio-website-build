"use client"

import { ArrowRight } from "lucide-react"
import { useI18n } from "@/lib/i18n"

// Placeholders — reemplazar con proyectos reales (PetCare, Punto Proteína, MenuKit...)
const projects = [
  {
    key: "p1",
    tags: ["WEB DEVELOPMENT", "SAAS", "NEXT.JS"],
    ai: false,
  },
  {
    key: "p2",
    tags: ["E-COMMERCE", "AI TECH", "AUTOMATION"],
    ai: true,
  },
  {
    key: "p3",
    tags: ["PRODUCT DESIGN", "WEB APP", "PROTOTYPING"],
    ai: false,
  },
]

export function Work() {
  const { t } = useI18n()

  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              {t.work.title}
            </h2>
            <p className="text-muted-foreground max-w-lg">
              {t.work.subtitle}
            </p>
          </div>
          <a
            href="#work"
            className="flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors group"
          >
            {t.work.viewAll}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.key} className="group">
              <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-300">
                {/* Image / Mock */}
                <div className="relative overflow-hidden bg-gradient-to-br from-lime-950/40 via-background to-lime-900/10 p-6">
                  <div className="aspect-video bg-secondary/50 rounded-lg flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full p-4">
                      <div className="bg-card/80 rounded-lg h-full p-4 border border-border/50">
                        <div className="h-full flex flex-col gap-2">
                          <div className="flex gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full bg-red-400" />
                            <div className="w-2 h-2 rounded-full bg-yellow-400" />
                            <div className="w-2 h-2 rounded-full bg-green-400" />
                          </div>
                          <div className="flex-1 flex items-end gap-1">
                            {[30, 50, 40, 70, 60, 80, 55, 90].map((h, i) => (
                              <div
                                key={i}
                                className="flex-1 bg-gradient-to-t from-lime-500 to-lime-300 rounded-t group-hover:from-lime-400 group-hover:to-lime-200 transition-colors"
                                style={{ height: `${h}%` }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {project.ai && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-accent/20 rounded-full border border-accent/30">
                      <span className="text-xs text-accent font-medium">AI Tech</span>
                    </div>
                  )}
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                      {t.work.soon}
                    </h3>
                    <span className="w-2 h-2 rounded-full bg-accent/60 animate-pulse" />
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    {t.work.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={tag} className="text-xs text-muted-foreground">
                        {tag} {i < project.tags.length - 1 && "•"}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
