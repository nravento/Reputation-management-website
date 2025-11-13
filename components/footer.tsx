import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground" role="contentinfo">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Reputation Shield LLC</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Custom web development for SEO and review management to control your online reputation.
            </p>
          </div>

          <nav aria-label="Services">
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a
                  href="#services"
                  className="hover:text-primary-foreground transition-colors focus:outline-none focus:underline"
                >
                  Custom Web Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-primary-foreground transition-colors focus:outline-none focus:underline"
                >
                  SEO Optimization
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-primary-foreground transition-colors focus:outline-none focus:underline"
                >
                  Review Management
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-primary-foreground transition-colors focus:outline-none focus:underline"
                >
                  Review Generation
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Company">
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a
                  href="#"
                  className="hover:text-primary-foreground transition-colors focus:outline-none focus:underline"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-foreground transition-colors focus:outline-none focus:underline"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-foreground transition-colors focus:outline-none focus:underline"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-primary-foreground transition-colors focus:outline-none focus:underline"
                >
                  Careers
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3" role="group" aria-label="Social media links">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-primary-foreground"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-primary-foreground"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-primary-foreground"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-primary-foreground"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Reputation Shield LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
