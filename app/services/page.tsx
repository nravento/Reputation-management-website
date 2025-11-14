import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, Star, Check } from 'lucide-react'
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services - Reputation Shield LLC",
  description:
    "Explore our custom web development for SEO and comprehensive review management & generation services. Protect and enhance your online reputation.",
  openGraph: {
    title: "Our Services - Reputation Shield LLC",
    description:
      "Custom web development for SEO and review management services to protect your online reputation.",
  },
}

const webDevFeatures = [
  "SEO-optimized website architecture",
  "Mobile-responsive design",
  "Fast loading speeds for better rankings",
  "Strategic content placement",
  "Schema markup implementation",
  "Technical SEO best practices",
]

const reviewMgmtFeatures = [
  "Systematic positive review generation",
  "Professional review response management",
  "Multi-platform reputation monitoring",
  "Sentiment analysis and reporting",
  "Review funnel optimization",
  "Crisis management support",
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Comprehensive Reputation Management Services
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed text-pretty">
                Two specialized services designed to protect and enhance your online presence
              </p>
            </div>
          </div>
        </section>

        {/* Services Detail Section */}
        <section className="py-24 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-16">
              {/* Custom Web Development */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-16 h-16 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
                    <Globe className="w-8 h-8 text-secondary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Custom Web Development for SEO</h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Strategically designed and developed websites optimized for search engines to establish your
                    authoritative online presence and improve rankings.
                  </p>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    We build websites that not only look great but are engineered to rank well in search results. Every
                    line of code, every design decision, and every content placement is made with SEO in mind, helping
                    you dominate search results for your brand and industry.
                  </p>
                  <Button asChild size="lg">
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
                <Card className="border-border/50">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-6">What's Included:</h3>
                    <ul className="space-y-3">
                      {webDevFeatures.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Review Management */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <Card className="border-border/50 order-2 lg:order-1">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-6">What's Included:</h3>
                    <ul className="space-y-3">
                      {reviewMgmtFeatures.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <div className="order-1 lg:order-2">
                  <div className="w-16 h-16 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
                    <Star className="w-8 h-8 text-secondary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Review Management & Generation</h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Comprehensive review management including systematic generation of authentic positive reviews,
                    professional response management, and reputation monitoring across all major review platforms.
                  </p>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Reviews are the new word-of-mouth. We help you systematically generate genuine positive reviews from
                    satisfied customers while professionally managing and responding to all feedback across Google,
                    Yelp, Facebook, and more.
                  </p>
                  <Button asChild size="lg">
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Protect Your Reputation?</h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed text-pretty">
                Let's discuss which services are right for your business. Schedule your free consultation today.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Schedule Free Consultation</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
