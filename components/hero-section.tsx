"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, ShieldCheck } from 'lucide-react'
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"

export function HeroSection() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const xSpring = useSpring(mouseX, springConfig)
  const ySpring = useSpring(mouseY, springConfig)

  const rotateX = useTransform(ySpring, [-0.5, 0.5], [5, -5])
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [-5, 5])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.querySelector('#hero-section')?.getBoundingClientRect()
      if (rect) {
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        mouseX.set((e.clientX - centerX) / rect.width)
        mouseY.set((e.clientY - centerY) / rect.height)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent_70%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center space-y-12"
        >
          <h1 id="hero-heading" className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-balance leading-[0.95]">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="block text-white"
            >
              Local SEO &
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="block text-white/40"
            >
              Website Solutions
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl md:text-2xl text-white/50 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Tailored for Home Service Businesses
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Button
              asChild
              size="lg"
              className="group bg-white text-black hover:bg-white/90 text-base px-10 h-14 font-medium transition-all duration-300"
            >
              <Link href="/contact" aria-label="Get free consultation">
                Start Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base px-10 h-14 border-white/20 text-white hover:bg-white/5 font-medium backdrop-blur-sm transition-all duration-300"
            >
              <Link href="/services" aria-label="View our services">
                View Services
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-0 max-w-3xl mx-auto pt-20 border-t border-white/10"
          >
            <div className="group p-10 border-r border-white/10 hover:bg-white/[0.02] transition-all duration-500">
              <div className="text-5xl font-bold text-white mb-3">72</div>
              <div className="text-sm text-white/40 uppercase tracking-wider">Hour Delivery</div>
            </div>
            <div className="group p-10 hover:bg-white/[0.02] transition-all duration-500">
              <div className="text-5xl font-bold text-white mb-3">24</div>
              <div className="text-sm text-white/40 uppercase tracking-wider">Support Response</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[1px] h-16 bg-gradient-to-b from-white/0 via-white/30 to-white/0"
        />
      </div>
    </section>
  )
}

function StatCard({ number, unit, label, delay }: { number: string; unit: string; label: string; delay: number }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (hasAnimated || isNaN(Number(number))) return

    const target = Number(number)
    const duration = 2000
    const steps = 60
    const increment = target / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
        setHasAnimated(true)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [number, hasAnimated])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="glass-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all group"
    >
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
          {isNaN(Number(number)) ? number : count}
          <span className="text-2xl md:text-3xl ml-1">{unit}</span>
        </div>
        {label && (
          <div className="text-sm text-muted-foreground font-medium">{label}</div>
        )}
      </div>
    </motion.div>
  )
}
