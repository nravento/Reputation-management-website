"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import { motion } from "framer-motion"
import Link from "next/link"

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary text-primary-foreground"
      aria-labelledby="hero-heading"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" aria-hidden="true" />

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center space-y-8"
        >
          <h1 id="hero-heading" className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            Protect Your Online Reputation with Reputation Shield LLC
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto text-pretty">
            Custom web development for SEO and comprehensive review management to help businesses control their online
            presence and build trust
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="group text-base px-8 focus:ring-2 focus:ring-secondary focus:ring-offset-2"
            >
              <Link href="/contact" aria-label="Get free consultation">
                Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base px-8 bg-transparent border-primary-foreground/30 hover:bg-primary-foreground/10 text-primary-foreground focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2"
            >
              <Link href="/services" aria-label="View our services">
                View Our Services
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="currentColor"
            className="text-background"
          />
        </svg>
      </div>
    </section>
  )
}
