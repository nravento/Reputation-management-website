import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Shield, Handshake, DollarSign } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Reputation Shield LLC",
  description:
    "Learn about Reputation Shield LLC and how we help home service businesses get found by their local community through fast web development and local SEO.",
  openGraph: {
    title: "About Us - Reputation Shield LLC",
    description:
      "Helping home service businesses dominate their local market with 72-hour website delivery and local SEO expertise.",
  },
}

const values = [
  {
    icon: Shield,
    title: "Protection First",
    description: "Your online reputation and security are our top priorities. We build secure, protected websites and defend your digital presence against threats.",
  },
  {
    icon: Handshake,
    title: "Long Term Partnership",
    description: "We're not just a vendor—we're your partner in growth. We build lasting relationships and provide ongoing support as your business evolves.",
  },
  {
    icon: DollarSign,
    title: "Delivering Real Value",
    description: "No unnecessary upsells or bundled services you don't need. We focus on what truly matters: getting you found by local customers at a fair price.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Helping Home Service Businesses Get Found Locally
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed text-pretty">
                Reputation Shield LLC specializes in fast, secure website development and local SEO for home service businesses nationwide. We help you dominate your local market in just 72 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-24 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Story</h2>
              <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Home service businesses like yours (plumbers, electricians, HVAC professionals, landscapers, and more) need a strong online presence to connect with local customers and thrive. That's why I founded Reputation Shield LLC. I identified a clear gap in the market: many web designers and larger marketing agencies often bundle in unnecessary services, which drives up costs without adding real value. We focus solely on what you truly need: a secure, high-quality website paired with targeted local SEO to ensure you're visible to customers in your service area.
                </p>
                <p>
                  We understand that time is money in your industry. That's why we deliver professionally designed, secure websites in just 72 hours. We never cut corners; each site is optimized for local search, focusing on the specific cities, counties, and zip codes where your potential clients are looking. By avoiding those extraneous upsells, we're able to provide these essential services at a fraction of the cost charged by bigger agencies.
                </p>
                <p>
                  Our streamlined approach is designed to boost your business's visibility in local search results, helping you connect with more customers in your service area who need your services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-24 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <Card key={value.title} className="border-border/50 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                        <value.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-24 md:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
                To help home service businesses across the nation get found by their local community through fast, secure website development and targeted local SEO strategies.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
