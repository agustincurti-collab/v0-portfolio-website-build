import { Header } from "@/components/portfolio/header"
import { Hero } from "@/components/portfolio/hero"
import { Tech } from "@/components/portfolio/tech"
import { Work } from "@/components/portfolio/work"
import { Services } from "@/components/portfolio/services"
import { Process } from "@/components/portfolio/process"
import { Stats } from "@/components/portfolio/stats"
import { FAQ } from "@/components/portfolio/faq"
import { CTA } from "@/components/portfolio/cta"
import { Footer } from "@/components/portfolio/footer"
import { WhatsAppFloat } from "@/components/portfolio/whatsapp-float"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Tech />
      <Work />
      <Services />
      <Process />
      <Stats />
      <FAQ />
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
