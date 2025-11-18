"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Globe, Code, ArrowRight } from 'lucide-react'
import { motion } from "framer-motion"
import Link from "next/link"

const services = [
  {
    icon: Code,
    title: "Website Creation",
    description:
      "Lightning-fast, secure websites built specifically for home service businesses. Delivered in 72 hours with mobile-responsive design, fast loading speeds, and SEO optimization built in from day one.",
    number: "01"
  },
  {
    icon: Globe,
    title: "Local SEO",
    description:
      "Dominate your local market with targeted SEO strategies. We optimize for the specific cities, counties, and zip codes where your customers are searching, ensuring your business shows up first.",
    number: "02"
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-background relative" aria-labelledby="services-heading">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 border-b border-white/10 pb-12"
        >
          <h2 id="services-heading" className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            Core Services
          </h2>
        </motion.div>

        <div className="space-y-0 border-t border-white/10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group border-b border-white/10 hover:bg-white/[0.02] transition-all duration-500"
            >
              <Link href="/services" className="block py-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="flex items-start gap-8 flex-1">
                    <span className="text-sm font-mono text-white/30 pt-2">{service.number}</span>
                    <div className="flex-1">
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:translate-x-2 transition-transform duration-500">
                        {service.title}
                      </h3>
                      <p className="text-white/50 max-w-2xl leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-end">
                    <div className="w-12 h-12 border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                      <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
