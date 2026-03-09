import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* Background gradient */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-background via-background to-secondary/40"></div>

      {/* Glow effects */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-accent/30 blur-[160px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-[140px] rounded-full -z-10"></div>

      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
          Have a project in mind?
          <br />
          Let's build something great together.
        </h2>

        <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
          Tell me about your project and I'll get back to you to discuss how we can bring it to life.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

          <Button className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 h-auto text-base shadow-lg">
            Start a Project
          </Button>

          <Button
            variant="outline"
            className="rounded-full border-border hover:bg-secondary text-foreground px-8 py-3 h-auto text-base"
          >
            Chat on WhatsApp
          </Button>

        </div>

      </div>
    </section>
  )
}
