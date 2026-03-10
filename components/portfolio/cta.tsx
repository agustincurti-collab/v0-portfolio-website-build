import { Button } from "@/components/ui/button";

export function CTA() {
return ( <section className="relative overflow-hidden py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-900/30 via-background to-blue-900/30">


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

      <Button className="h-auto rounded-full bg-accent px-8 py-3 text-base text-accent-foreground shadow-2xl hover:bg-accent/90 transition-all duration-300">
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
