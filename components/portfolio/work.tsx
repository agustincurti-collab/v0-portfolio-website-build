"use client"

import { useState } from "react"
import { ArrowUpRight, ChevronDown } from "lucide-react"
import { useI18n } from "@/lib/i18n"

type Project = {
  slug: string
  name: string
  img: string
  url: string
  cat: "web" | "ecommerce" | "webapp"
  desc: { es: string; en: string }
}

const projects: Project[] = [
  {
    slug: "petcare",
    name: "PetCare",
    img: "/work/petcare.webp",
    url: "https://www.petcare.com.ar",
    cat: "webapp",
    desc: {
      es: "Obra social para mascotas. Plataforma de afiliación con red de prestadores y panel de gestión.",
      en: "Health coverage for pets. Membership platform with a provider network and management dashboard.",
    },
  },
  {
    slug: "guaynot",
    name: "Guaynot!",
    img: "/work/guaynot.webp",
    url: "https://www.guaynot.com.ar",
    cat: "web",
    desc: {
      es: "Agencia de recursos humanos enfocada en marca empleadora e impacto positivo.",
      en: "HR agency focused on employer branding and positive impact.",
    },
  },
  {
    slug: "empatia",
    name: "Empatía",
    img: "/work/empatia.webp",
    url: "https://www.empatia.org.ar",
    cat: "web",
    desc: {
      es: "Asociación sin fines de lucro. Sitio para sumar voluntarios y canalizar donaciones.",
      en: "Non-profit association. Site to recruit volunteers and channel donations.",
    },
  },
  {
    slug: "keller",
    name: "Guitarras Keller",
    img: "/work/keller.webp",
    url: "https://guitarraskeller.com",
    cat: "ecommerce",
    desc: {
      es: "Luthier de San Nicolás. Tienda online de guitarras artesanales, hechas una por una, que cruzan el mundo.",
      en: "Luthier from San Nicolás. Online store for handcrafted guitars, made one by one, shipping worldwide.",
    },
  },
  {
    slug: "ara",
    name: "Estudio ARA",
    img: "/work/ara.webp",
    url: "https://www.estudioara.com",
    cat: "web",
    desc: {
      es: "Estudio de arquitectura. Portfolio de obras con foco en espacios comerciales y residenciales.",
      en: "Architecture studio. Portfolio of works focused on commercial and residential spaces.",
    },
  },
  {
    slug: "verdelima",
    name: "Verde Lima",
    img: "/work/verdelima.webp",
    url: "https://www.verdelima.com.ar",
    cat: "ecommerce",
    desc: {
      es: "Diseño de objetos a medida. Tienda online con catálogo por colecciones.",
      en: "Custom-designed objects. Online store with a collection-based catalog.",
    },
  },
  {
    slug: "coco",
    name: "Cocó",
    img: "/work/coco.webp",
    url: "https://www.cocoindumentariadeportiva.com.ar",
    cat: "ecommerce",
    desc: {
      es: "Indumentaria deportiva de industria argentina.",
      en: "Argentine-made sportswear.",
    },
  },
  {
    slug: "pura",
    name: "Pura Viajes",
    img: "/work/pura.webp",
    url: "https://www.puraviajes.com",
    cat: "web",
    desc: {
      es: "Empresa de turismo. Sitio de destinos y experiencias con viajes a medida.",
      en: "Travel company. Destinations and experiences site with custom trips.",
    },
  },
  {
    slug: "hotel-patios",
    name: "Hotel Patios",
    img: "/work/hotel-patios.webp",
    url: "https://hotel-3.vercel.app/",
    cat: "web",
    desc: {
      es: "Hotel boutique en La Cumbre, Córdoba. Sitio de reservas con habitaciones, eventos y servicios.",
      en: "Boutique hotel in La Cumbre, Córdoba. Booking site with rooms, events and services.",
    },
  },
]

export function Work() {
  const { t, lang } = useI18n()
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? projects : projects.slice(0, 4)

  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            {t.work.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            {t.work.subtitle}
          </p>
        </div>

        {/* Grilla 2 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {visible.map((p) => (
            <a
              key={p.slug}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              {/* Imagen con hover */}
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card aspect-[16/10]">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />

                {/* Overlay al hover */}
                <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                  <span className="flex items-center justify-center w-14 h-14 rounded-full bg-accent text-accent-foreground">
                    <ArrowUpRight className="w-6 h-6" />
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {t.work.visit}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {p.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                  </span>
                </div>
              </div>

              {/* Info debajo */}
              <div className="pt-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {p.desc[lang]}
                  </p>
                </div>
                <span className="shrink-0 mt-1 text-[11px] font-medium tracking-wide uppercase text-accent border border-accent/30 rounded-full px-3 py-1 whitespace-nowrap">
                  {t.work.cat[p.cat]}
                </span>
              </div>
            </a>
          ))}
        </div>

        {!showAll && projects.length > 4 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll(true)}
              className="group inline-flex items-center gap-2 rounded-full border border-accent/40 bg-transparent px-6 py-3 text-sm font-medium text-accent transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
            >
              {t.work.viewAll}
              <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </button>
          </div>
        )}

      </div>
    </section>
  )
}
