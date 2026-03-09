import { Palette, Code, Target, Check } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centric interfaces that are intuitive, accessible, and visually stunning. I focus on creating seamless experiences.",
    features: [
      "Wireframing & Prototyping",
      "Design Systems",
      "Mobile App Design",
    ],
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Clean, semantic, and performant code. I build websites that are fast, responsive, and SEO-friendly.",
    features: [
      "React / Next.js",
      "Tailwind CSS",
      "Headless CMS Integration",
    ],
  },
  {
    icon: Target,
    title: "Brand Strategy",
    description: "Defining your brand's voice and visual identity to stand out in a crowded market and connect with your audience.",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Art Direction",
    ],
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-accent uppercase tracking-wider mb-4 block">
            SERVICES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Expertise & Specialization
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Design and development services focused on building
high-performance websites and digital products
that help businesses grow online.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card rounded-2xl p-8 border border-border hover:border-accent/50 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-6 h-6 text-foreground group-hover:text-accent transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-accent" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
