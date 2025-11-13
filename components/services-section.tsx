"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Globe, Star } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: Globe,
    title: "Custom Web Development for SEO",
    description:
      "Strategically designed and developed websites optimized for search engines to establish your authoritative online presence and improve rankings.",
  },
  {
    icon: Star,
    title: "Review Management & Generation",
    description:
      "Comprehensive review management including systematic generation of authentic positive reviews, professional response management, and reputation monitoring across all major review platforms.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background" aria-labelledby="services-heading">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="services-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Our Core Services
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Reputation Shield LLC offers two specialized services to protect and enhance your online reputation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border/50 focus-within:ring-2 focus-within:ring-secondary">
                <CardContent className="p-6 space-y-4">
                  <div
                    className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <service.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
