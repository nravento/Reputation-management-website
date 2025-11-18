import { Facebook, Twitter, Linkedin, Instagram, ArrowUpRight } from 'lucide-react'
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 pt-24 pb-12" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 bg-white flex items-center justify-center font-bold text-black text-sm">
                R
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                REPUTATION<span className="font-light text-white/50">SHIELD</span>
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Empowering home service businesses with cutting-edge digital solutions.
            </p>
          </div>

          <nav aria-label="Services">
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/services/website-creation" className="text-white/50 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                  Website Creation
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/services/local-seo" className="text-white/50 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                  Local SEO
                  <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Company">
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-white/50 hover:text-white transition-colors text-sm">About</Link></li>
              <li><Link href="/contact" className="text-white/50 hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </nav>

          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="/privacy" className="text-white/50 hover:text-white transition-colors text-sm">Privacy</Link></li>
              <li><Link href="/terms" className="text-white/50 hover:text-white transition-colors text-sm">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 space-y-8">
          {/* Legal Links Row */}
          <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-white/30">
            <Link href="/" className="hover:text-white/50 transition-colors">Home</Link>
            <span className="text-white/20">|</span>
            <Link href="/privacy" className="hover:text-white/50 transition-colors">Privacy Policy</Link>
            <span className="text-white/20">|</span>
            <Link href="/terms" className="hover:text-white/50 transition-colors">Terms of Service</Link>
          </div>

          {/* FTC Disclaimer */}
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-white/20 text-[11px] leading-relaxed">
              Results may vary depending on many factors. We do not guarantee specific search engine rankings, traffic volumes, or new customer acquisition. Individual results will differ.
            </p>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8">
            <p className="text-white/30 text-xs">
              © {new Date().getFullYear()} Reputation Shield LLC
            </p>
            <p className="text-white/30 text-xs">
              Designed for excellence
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
