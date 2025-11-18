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
    <section id="process" className="py-32 bg-[#050505] relative" aria-labelledby="process-heading">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="sticky top-32 h-fit">
            <h2 id="process-heading" className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
              How It Works
            </h2>
            <p className="text-xl text-white/50 font-light leading-relaxed max-w-md">
              A streamlined process designed for efficiency and results.
            </p>
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-12 border-l border-white/10 group"
              >
                <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-white group-hover:scale-150 transition-transform duration-300" />
                <span className="text-sm font-mono text-white/30 mb-4 block">0{index + 1}</span>
                <h3 className="text-3xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-lg text-white/50 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
