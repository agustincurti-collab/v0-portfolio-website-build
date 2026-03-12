import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
return ( <section className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">


  {/* Background Glow */}
  <div className="absolute inset-0 -z-20 bg-gradient-to-b from-purple-900/30 via-background to-blue-900/30"></div>
  <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-500/20 blur-[180px] rounded-full -z-10"></div>

  <div className="max-w-7xl mx-auto text-center">

    {/* Availability Badge */}
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 mb-8 backdrop-blur transition-all duration-300 hover:scale-105">
      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
      <span className="text-sm text-accent">AVAILABLE FOR NEW PROJECTS</span>
    </div>

    {/* Main Heading */}
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
      <span className="text-foreground">
        Premium websites and e-commerce
      </span>
      <br />
      <span className="text-foreground">experiences </span>
      <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
        for growing brands.
      </span>
    </h1>

    {/* Subtitle */}
    <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
      I design and develop modern digital products that combine
      strategy, design and technology to help businesses grow online.
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

      <Button className="rounded-full bg-secondary hover:bg-secondary/80 text-foreground px-6 py-3 h-auto transition-all duration-300 hover:scale-[1.04] shadow-xl">
        View Selected Work
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>

      <Button
        variant="outline"
        className="rounded-full border-border hover:bg-secondary text-foreground px-6 py-3 h-auto transition-all duration-300 hover:scale-[1.04]"
      >
        Start a Project
      </Button>

    </div>
</section>
)
}
