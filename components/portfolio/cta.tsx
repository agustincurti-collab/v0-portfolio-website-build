import { Button } from "@/components/ui/button";

export function CTA() {
return ( <section className="relative overflow-hidden py-28 px-4 sm:px-6 lg:px-8">

  <div className="absolute inset-0 -z-20 bg-gradient-to-b from-transparent via-accent/10 to-transparent"></div>

  <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-purple-500/20 blur-[160px] -z-10"></div>

  <div className="mx-auto max-w-4xl text-center">

    <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
      Have a project in mind?
      <br />
      Let's build something great together.
    </h2>

    <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
      Tell me about your project and I'll get back to you to discuss how we can bring it to life.
    </p>

    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">

      <Button className="h-auto rounded-full bg-accent px-8 py-3 text-base text-accent-foreground shadow-xl hover:bg-accent/90">
        Start a Project
      </Button>

      <Button
        variant="outline"
        className="h-auto rounded-full border-border px-8 py-3 text-base text-foreground hover:bg-secondary"
      >
        Chat on WhatsApp
      </Button>

    </div>

  </div>
</section>

);
}
