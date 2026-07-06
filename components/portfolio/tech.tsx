"use client"

import { useI18n } from "@/lib/i18n"

const tech = [
  { name: "React", logo: "/logos/react.svg" },
  { name: "Next.js", logo: "/logos/nextjs.svg" },
  { name: "TypeScript", logo: "/logos/typescript.svg" },
  { name: "Tailwind", logo: "/logos/tailwind.svg" },
  { name: "Node.js", logo: "/logos/nodejs.svg" },
  { name: "PostgreSQL", logo: "/logos/postgresql.svg" },
  { name: "Prisma", logo: "/logos/prisma.svg" },
  { name: "Supabase", logo: "/logos/supabase.svg" },
  { name: "WordPress", logo: "/logos/wordpress.svg" },
  { name: "WooCommerce", logo: "/logos/woocommerce.svg" },
  { name: "Tienda Nube", logo: "/logos/tiendanube.svg" },
  { name: "Shopify", logo: "/logos/shopify.svg" },
  { name: "Vercel", logo: "/logos/vercel.svg" },
  { name: "AWS", logo: "/logos/aws.svg" },
  { name: "Figma", logo: "/logos/figma.svg" },
  { name: "Framer", logo: "/logos/framer.svg" },
]

export function Tech() {
  const { t } = useI18n()

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-sm text-muted-foreground mb-12 tracking-widest">
          {t.tech.title}
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-12 items-center justify-items-center">
          {tech.map((item) => (
            <div
              key={item.name}
              className="opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-110"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="h-14 w-auto brightness-0 invert opacity-80 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
