"use client"

import { motion } from "framer-motion"
import { Search, Lightbulb, Rocket, LineChart } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Discovery & Analysis",
    description:
      "Comprehensive audit of your online presence, identifying reputation issues and opportunities for improvement.",
  },
  {
    icon: Lightbulb,
    title: "Strategy Development",
    description: "Custom action plan tailored to your specific needs, goals, and industry requirements.",
  },
  {
    icon: Rocket,
    title: "Implementation",
    description: "Execute strategies including content creation, SEO optimization, and reputation building campaigns.",
  },
  {
    icon: LineChart,
    title: "Ongoing Management",
    description: "Continuous monitoring, optimization, and reporting to maintain and improve your online reputation.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-24 md:py-32 bg-muted/30" aria-labelledby="process-heading">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="process-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our proven 4-step process to transform your online reputation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-border -translate-x-1/2 z-0"
                  aria-hidden="true"
                />
              )}

              <div className="relative z-10 text-center space-y-4">
                <div
                  className="w-20 h-20 mx-auto rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-lg"
                  aria-label={`Step ${index + 1}`}
                >
                  {index + 1}
                </div>
                <div
                  className="w-12 h-12 mx-auto rounded-lg bg-secondary/10 flex items-center justify-center -mt-2"
                  aria-hidden="true"
                >
                  <step.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
