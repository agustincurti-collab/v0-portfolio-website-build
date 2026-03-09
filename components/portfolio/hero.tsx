import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm text-accent">AVAILABLE FOR NEW PROJECTS</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          <span className="text-foreground">Crafting digital</span>
          <br />
          <span className="text-foreground">experiences </span>
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            that matter.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
          I help forward-thinking companies design and build premium web
          products. Blending aesthetics with functionality to drive growth.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="rounded-full bg-secondary hover:bg-secondary/80 text-foreground px-6 py-3 h-auto">
            View Selected Work
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button variant="outline" className="rounded-full border-border hover:bg-secondary text-foreground px-6 py-3 h-auto">
            Book a Call
          </Button>
        </div>

        {/* Hero Image - Monitor Mockup */}
        <div className="mt-16 relative">
          <div className="bg-secondary rounded-2xl p-4 max-w-4xl mx-auto">
            <div className="bg-card rounded-lg overflow-hidden border border-border">
              {/* Browser Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
              </div>
              {/* Dashboard Content */}
              <div className="p-6 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Chart Area */}
                  <div className="md:col-span-2 bg-card/50 rounded-lg p-4 backdrop-blur">
                    <div className="h-48 flex items-end gap-2">
                      {[40, 65, 45, 80, 55, 70, 50, 90, 60, 75, 85, 95].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-purple-500 to-blue-500 rounded-t"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>
                  {/* Stats Cards */}
                  <div className="space-y-4">
                    <div className="bg-card/50 rounded-lg p-4 backdrop-blur">
                      <div className="text-xs text-muted-foreground mb-1">Revenue</div>
                      <div className="text-2xl font-bold text-foreground">$48.5K</div>
                    </div>
                    <div className="bg-card/50 rounded-lg p-4 backdrop-blur">
                      <div className="text-xs text-muted-foreground mb-1">Growth</div>
                      <div className="text-2xl font-bold text-green-400">+24.8%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
