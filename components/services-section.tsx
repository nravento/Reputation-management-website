"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Globe, Star, ArrowRight } from 'lucide-react'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    icon: Globe,
    title: "Custom Web Development for SEO",
    description:
      "Strategically designed and developed websites optimized for search engines to establish your authoritative online presence and improve rankings.",
    color: "from-primary to-secondary",
  },
  {
    icon: Star,
    title: "Review Management & Generation",
    description:
      "Comprehensive review management including systematic generation of authentic positive reviews, professional response management, and reputation monitoring across all major review platforms.",
    color: "from-secondary to-accent",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/30" aria-labelledby="services-heading">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="services-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Our Core Services
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Reputation Shield LLC offers two specialized services to protect and enhance your online reputation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 border-border/50 hover:border-primary/30 bg-card group overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} aria-hidden="true" />
                <CardContent className="p-8 space-y-6 relative">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}
                    aria-hidden="true"
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-balance">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">{service.description}</p>
                  <Button variant="link" asChild className="p-0 h-auto text-primary group/btn">
                    <Link href="/services" className="inline-flex items-center gap-2">
                      Learn more
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
