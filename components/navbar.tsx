"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Shield, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { 
    href: "/services", 
    label: "Services",
    submenu: [
      { href: "/services/local-seo", label: "Local SEO" },
      { href: "/services/review-management", label: "Review Management" },
      { href: "/services/website-creation", label: "Website Creation" },
    ]
  },
  { href: "/contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const pathname = usePathname()
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current)
      }
    }
  }, [])

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  const handleMouseEnter = (href: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setHoveredItem(href)
  }

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setHoveredItem(null)
    }, 400)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card shadow-lg py-2" : "bg-background/60 backdrop-blur-sm shadow-sm py-3"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-18">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold focus:outline-none focus:ring-2 focus:ring-secondary rounded-lg px-2 py-1"
              aria-label="Reputation Shield LLC - Home"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Shield className="w-6 h-6 text-secondary" />
              </motion.div>
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Reputation Shield<span className="hidden sm:inline"> LLC</span>
              </span>
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => handleMouseEnter(link.href)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-all hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary rounded px-3 py-2 flex items-center gap-1 ${
                    isActive(link.href)
                      ? "text-secondary font-semibold"
                      : "text-foreground/80 hover:text-foreground"
                  }`}
                  aria-label={`Navigate to ${link.label}`}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                  {link.submenu && (
                    <motion.div
                      animate={{ rotate: hoveredItem === link.href ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  )}
                </Link>
                
                {link.submenu && hoveredItem === link.href && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-56 glass-card rounded-xl shadow-xl overflow-hidden"
                    onMouseEnter={() => handleMouseEnter(link.href)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {link.submenu.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-3 text-sm hover:bg-primary/10 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="sm"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-md hover:shadow-lg transition-all"
              >
                <Link href="/contact" aria-label="Get started with free consultation">
                  Get Started
                </Link>
              </Button>
            </motion.div>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-foreground glass-card"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-card border-t border-border/50 overflow-hidden"
            role="menu"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block w-full text-left px-4 py-3 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-secondary ${
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
                  {link.submenu && (
                    <div className="ml-4 mt-1 space-y-1">
                      {link.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-2 text-sm text-foreground/70 hover:text-foreground hover:bg-muted rounded-lg transition-all"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <Button asChild className="w-full bg-gradient-to-r from-primary to-secondary" role="menuitem">
                  <Link href="/contact" onClick={() => setIsOpen(false)} aria-label="Get started with free consultation">
                    Get Started
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
