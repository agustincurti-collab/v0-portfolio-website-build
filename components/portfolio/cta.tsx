import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">

      {/* Gradient background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-background via-background to-purple-500/10" />

      {/* Glow lights */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-purple-500/20 blur-[200px] rounded-full -z-10" />
      <div className="absolute bottom-[-150px] right-[-150px] w-[500px] h-[500px] bg-blue-500/20 blur-[180px] rounded-full -z-10" />

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

          <Button className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 h-auto text-base shadow-xl">
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
