import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { StructuredData } from "@/components/structured-data"

export default function Home() {
  return (
    <>
      <StructuredData />
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <WhyChooseUsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
