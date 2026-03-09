import { Header } from "@/components/portfolio/header"
import { Hero } from "@/components/portfolio/hero"
import { Logos } from "@/components/portfolio/logos"
import { Work } from "@/components/portfolio/work"
import { Services } from "@/components/portfolio/services"
import { Process } from "@/components/portfolio/process"
import { Stats } from "@/components/portfolio/stats"
import { Technologies } from "@/components/portfolio/technologies"
import { CTA } from "@/components/portfolio/cta"
import { Footer } from "@/components/portfolio/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Logos />
      <Work />
      <Services />
      <Process />
      <Stats />
      <Technologies />
      <CTA />
      <Footer />
    </main>
  )
}
