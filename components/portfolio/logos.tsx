import { Cloud, CreditCard, Music, Figma, Box, MessageSquare } from "lucide-react"

const logos = [
  { icon: Cloud, name: "AWS" },
  { icon: CreditCard, name: "Stripe" },
  { icon: Music, name: "Spotify" },
  { icon: Figma, name: "Figma" },
  { icon: Box, name: "Dropbox" },
  { icon: MessageSquare, name: "Slack" },
]

export function Logos() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm text-muted-foreground mb-10 uppercase tracking-wider">
          Trusted by Industry Leaders
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              <logo.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
