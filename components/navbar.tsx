"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Shield } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#why-choose-us", label: "Why Choose Us" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setIsOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-xl font-bold focus:outline-none focus:ring-2 focus:ring-secondary rounded-lg px-2 py-1"
            aria-label="Reputation Shield LLC - Home"
          >
            <Shield className={`w-6 h-6 ${scrolled ? "text-secondary" : "text-primary-foreground"}`} />
            <span className={scrolled ? "text-foreground" : "text-primary-foreground"}>
              Reputation Shield<span className="hidden sm:inline"> LLC</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium transition-colors hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary rounded px-2 py-1 ${
                  scrolled
                    ? "text-foreground/80 hover:text-foreground"
                    : "text-primary-foreground/90 hover:text-primary-foreground"
                }`}
                aria-label={`Navigate to ${link.label} section`}
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("#contact")}
              size="sm"
              variant={scrolled ? "default" : "secondary"}
              className="focus:ring-2 focus:ring-secondary"
              aria-label="Get started with free consultation"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary ${
              scrolled ? "text-foreground" : "text-primary-foreground"
            }`}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background border-t border-border overflow-hidden"
            role="menu"
          >
            <div className="container mx-auto px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left px-4 py-2 text-foreground/80 hover:text-foreground hover:bg-muted rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-secondary"
                  role="menuitem"
                  aria-label={`Navigate to ${link.label} section`}
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("#contact")}
                className="w-full focus:ring-2 focus:ring-secondary"
                role="menuitem"
                aria-label="Get started with free consultation"
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
