import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Shield, Target, Users, Award } from 'lucide-react'
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
    description: "Your online reputation is our top priority. We defend and enhance your digital presence.",
  },
  {
    icon: Target,
    title: "Strategic Approach",
    description: "Data-driven strategies tailored to your specific industry and business goals.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "We work alongside you as partners in building and maintaining your reputation.",
  },
  {
    icon: Award,
    title: "Excellence Delivered",
    description: "Commitment to quality in every web development project and review management campaign.",
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
                  Home service businesses need to be found by their local community to thrive. Reputation Shield LLC was created to give plumbers, electricians, HVAC technicians, landscapers, and other home service professionals the online presence they need to succeed.
                </p>
                <p>
                  We know that time is money. That's why we deliver professionally designed, secure websites in just 72 hours. But speed doesn't mean cutting corners—every site we build is optimized for local SEO, targeting the specific cities, counties, and zip codes where your customers are searching.
                </p>
                <p>
                  Combined with our review management services, we help you build trust in your community and ensure that when someone needs your services, they find you first.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-24 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <Card key={value.title} className="border-border/50 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <value.icon className="w-6 h-6 text-secondary" />
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
