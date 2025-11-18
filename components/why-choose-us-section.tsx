"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Zap, MapPin, Shield, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: "72-Hour Turnaround",
    description:
      "We typically deliver secure, SEO-optimized sites in as little as 72 hours, helping you get online and start reaching local customers faster.",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    icon: MapPin,
    title: "Local SEO Experts",
    description: 
      "Specializing in hyper-local search optimization for home service businesses. We target the specific cities, counties, and zip codes in your service area to help increase your visibility to nearby customers.",
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Secure Websites",
    description:
      "Your website's security matters. We build every site using modern security best practices to help protect your business, your reputation, and your customers.",
    gradient: "from-purple-400 to-pink-500",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description:
      "Our focused strategies are designed to help improve search rankings, increase customer engagement, and strengthen your online reputation—delivering measurable value without unnecessary extras.",
    gradient: "from-green-400 to-emerald-500",
  },
]

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="py-24 md:py-32 bg-background relative overflow-hidden" aria-labelledby="why-choose-us-heading">
      <div className="absolute inset-0 opacity-[0.02]" aria-hidden="true">
        <div
          style={{
            backgroundImage: "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
          className="w-full h-full"
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="why-choose-us-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Why Choose Reputation Shield LLC
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            The difference that sets us apart in reputation management
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="h-full glass-card border-2 border-border/50 hover:border-primary/30 hover:shadow-2xl transition-all duration-300 group overflow-hidden relative">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  aria-hidden="true"
                />
                <CardContent className="p-6 flex gap-4 relative">
                  <motion.div
                    className="flex-shrink-0"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg`}
                      aria-hidden="true"
                    >
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                  </motion.div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
