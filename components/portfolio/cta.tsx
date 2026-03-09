import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] relative overflow-hidden">
      {/* Subtle glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
          Ready to build the
          <br />
          next big thing?
        </h2>
        <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
          {"Let's collaborate to transform your vision into a digital reality. I'm currently available for select freelance opportunities."}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 h-auto text-base">
            Start a Project
          </Button>
          <Button
            variant="outline"
            className="rounded-full border-slate-500 hover:bg-slate-700 text-white px-8 py-3 h-auto text-base"
          >
            Copy Email
          </Button>
        </div>
      </div>
    </section>
  )
}
