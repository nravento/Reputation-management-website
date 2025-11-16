"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Globe, Star, ArrowRight } from 'lucide-react'
import { motion, useMotionValue, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

const services = [
  {
    icon: Globe,
    title: "Custom Web Development for SEO",
    description:
      "Lightning-fast website development with a focus on local SEO. We build secure, search-optimized sites that help home service businesses rank for their specific cities, counties, and zip codes—delivered in just 72 hours.",
    color: "from-primary to-secondary",
    stats: [
      { label: "Page Speed", value: "95+" },
      { label: "SEO Score", value: "100" },
      { label: "Uptime", value: "99.9%" }
    ]
  },
  {
    icon: Star,
    title: "Review Management & Generation",
    description:
      "Build trust in your local community with strategic review management. We help home service businesses generate authentic reviews, respond professionally, and monitor their reputation across all major platforms.",
    color: "from-secondary to-accent",
    stats: [
      { label: "Review Boost", value: "3x" },
      { label: "Response Time", value: "24hr" },
      { label: "Rating Improve", value: "+0.8" }
    ]
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set((e.clientX - centerX) / rect.width)
    mouseY.set((e.clientY - centerY) / rect.height)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
    >
      <Card className="h-full glass-card hover:shadow-2xl transition-all duration-500 border-2 border-border/50 hover:border-primary/30 group overflow-hidden relative">
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
          aria-hidden="true"
        />
        <CardContent className="p-8 space-y-6 relative">
          <motion.div
            className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg relative`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ transformStyle: "preserve-3d", transform: "translateZ(50px)" }}
            aria-hidden="true"
          >
            <service.icon className="w-10 h-10 text-white" />
            <motion.div
              className="absolute inset-0 bg-white/20 rounded-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
          
          <h3 className="text-2xl font-bold text-balance">{service.title}</h3>
          <p className="text-muted-foreground leading-relaxed text-pretty">{service.description}</p>
          
          <div className="grid grid-cols-3 gap-3 pt-4">
            {service.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -3, scale: 1.05 }}
                className="text-center p-3 rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 backdrop-blur-sm"
              >
                <div className={`text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
            <Button variant="link" asChild className="p-0 h-auto text-primary group/btn">
              <Link href="/services" className="inline-flex items-center gap-2">
                Learn more
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.article>
  )
}

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-gradient-to-b from-background via-muted/20 to-background" aria-labelledby="services-heading">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            id="services-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Our Core Services
            </span>
          </motion.h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Reputation Shield LLC offers two specialized services to protect and enhance your online reputation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
