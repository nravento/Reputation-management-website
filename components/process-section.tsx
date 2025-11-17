"use client"

import { motion } from "framer-motion"
import { Users, FileText, Rocket } from 'lucide-react'

const steps = [
  {
    icon: Users,
    title: "Discovery Meeting",
    description:
      "We meet to discuss your current online presence and identify key opportunities for improvement. Together, we'll outline your goals and determine the best strategy for your business.",
  },
  {
    icon: FileText,
    title: "Form Completion",
    description: "You complete a detailed form to ensure we capture all your requirements and preferences. This ensures your website includes everything that matters most to your business.",
  },
  {
    icon: Rocket,
    title: "Implementation",
    description: "We build your secure, SEO-optimized website and launch your online presence. Within 72 hours, you'll have a professional site ready to attract local customers.",
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
            Our streamlined 3-step process to get your business online fast
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative"
            >
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary to-secondary -translate-x-1/2 z-0"
                  aria-hidden="true"
                />
              )}

              <div className="relative z-10 text-center space-y-4 glass-card p-6 rounded-2xl hover:shadow-xl transition-all duration-300">
                <motion.div
                  className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-lg"
                  aria-label={`Step ${index + 1}`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {index + 1}
                </motion.div>
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
