"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Shield } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
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
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold focus:outline-none focus:ring-2 focus:ring-secondary rounded-lg px-2 py-1"
            aria-label="Reputation Shield LLC - Home"
          >
            <Shield className={`w-6 h-6 ${scrolled ? "text-secondary" : "text-primary-foreground"}`} />
            <span className={scrolled ? "text-foreground" : "text-primary-foreground"}>
              Reputation Shield<span className="hidden sm:inline"> LLC</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary rounded px-2 py-1 ${
                  isActive(link.href)
                    ? scrolled
                      ? "text-secondary"
                      : "text-primary-foreground font-semibold"
                    : scrolled
                      ? "text-foreground/80 hover:text-foreground"
                      : "text-primary-foreground/90 hover:text-primary-foreground"
                }`}
                aria-label={`Navigate to ${link.label}`}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              size="sm"
              variant={scrolled ? "default" : "secondary"}
              className="focus:ring-2 focus:ring-secondary"
            >
              <Link href="/contact" aria-label="Get started with free consultation">
                Get Started
              </Link>
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
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-secondary ${
                    isActive(link.href)
                      ? "text-secondary font-semibold bg-secondary/10"
                      : "text-foreground/80 hover:text-foreground hover:bg-muted"
                  }`}
                  role="menuitem"
                  aria-label={`Navigate to ${link.label}`}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="w-full focus:ring-2 focus:ring-secondary" role="menuitem">
                <Link href="/contact" onClick={() => setIsOpen(false)} aria-label="Get started with free consultation">
                  Get Started
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
