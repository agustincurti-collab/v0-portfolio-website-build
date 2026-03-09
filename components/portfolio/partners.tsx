import Image from "next/image"

const platforms = [
  {
    name: "Shopify",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/shopify/shopify-original.svg",
  },
  {
    name: "WordPress",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
  {
    name: "Tiendanube",
    logo: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/logo-nuvemshop-f78db50e0c.svg",
  },
  {
    name: "WooCommerce",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg",
  },
  {
    name: "Webflow",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webflow/webflow-original.svg",
  },
  {
    name: "Vercel",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
]

export function Partners() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-3">
            Integraciones
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Plataformas y Tecnologias
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-10">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="group flex flex-col items-center justify-center p-6 rounded-xl bg-background/50 border border-border/50 hover:border-border hover:bg-background transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative w-12 h-12 mb-3 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                <Image
                  src={platform.logo}
                  alt={`${platform.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {platform.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
