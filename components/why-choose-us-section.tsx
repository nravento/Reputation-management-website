"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Wrench, FileText, CheckCircle2 } from "lucide-react"

const features = [
  {
    icon: Wrench,
    title: "Custom Solutions",
    description:
      "Tailored strategies designed specifically for your industry, challenges, and goals—never cookie-cutter approaches.",
  },
  {
    icon: FileText,
    title: "Transparent Reporting",
    description: "Detailed monthly reports showing rankings, review growth, sentiment analysis, and ROI metrics.",
  },
  {
    icon: CheckCircle2,
    title: "White-Hat Techniques",
    description:
      "Ethical, sustainable strategies that comply with search engine guidelines and build long-term success.",
  },
]

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="py-24 md:py-32 bg-background" aria-labelledby="why-choose-us-heading">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="why-choose-us-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Why Choose Reputation Shield LLC
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            The difference that sets us apart in reputation management
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 hover:shadow-lg transition-shadow focus-within:ring-2 focus-within:ring-secondary">
                <CardContent className="p-6 flex gap-4">
                  <div className="flex-shrink-0">
                    <div
                      className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <feature.icon className="w-6 h-6 text-secondary" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
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
