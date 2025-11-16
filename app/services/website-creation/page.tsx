import { Metadata } from 'next'
import { Globe, Smartphone, Zap, Shield, Code, Paintbrush } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Website Creation Services | Reputation Shield LLC',
  description: 'Get a modern, mobile-optimized website that converts visitors into customers. Custom-designed for home service businesses.',
}

export default function WebsiteCreationPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent" />
        <div className="floating-orb" style={{ top: '15%', left: '10%' }} />
        <div className="floating-orb" style={{ top: '50%', right: '5%' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-2 glass-card rounded-full mb-4">
              <span className="text-sm font-medium text-secondary flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Website Creation
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-balance">
              Websites That{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Convert Visitors Into Customers
              </span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Get a stunning, mobile-optimized website designed specifically for home service businesses. Fast, professional, and built to generate leads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all">
                <Link href="/contact">Get Your Free Design Mockup</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="glass-card hover:bg-muted/50">
                <Link href="#features">See What's Included</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Everything You Need{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                To Succeed Online
              </span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Modern websites built with the latest technology and best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="interactive-card group p-6 space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              What's{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Included
              </span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Everything you need for a professional online presence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {included.map((item, index) => (
              <div
                key={index}
                className="glass-card p-6 space-y-3 hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Simple{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              From concept to launch in as little as 2 weeks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="glass-card p-6 space-y-4 hover:shadow-xl transition-all h-full">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xl font-bold shadow-lg">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto glass-card p-12 text-center space-y-6 rounded-3xl">
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to Launch Your{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                New Website?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Get a free design mockup and see how we can transform your online presence.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all">
              <Link href="/contact">Request Your Free Mockup</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

const features = [
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Fully responsive websites that look perfect on all devices, from phones to desktops.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized for speed with modern technology. Fast sites rank higher and convert better.',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Built with security best practices and hosted on enterprise-grade infrastructure.',
  },
  {
    icon: Code,
    title: 'SEO Optimized',
    description: 'Built from the ground up with SEO best practices to help you rank higher in search.',
  },
  {
    icon: Paintbrush,
    title: 'Custom Design',
    description: 'Unique designs tailored to your brand, not generic templates that look like everyone else.',
  },
  {
    icon: Globe,
    title: 'Easy to Update',
    description: 'Simple content management system so you can make updates without needing a developer.',
  },
]

const included = [
  {
    icon: Globe,
    title: 'Custom Domain Setup',
    description: 'We help you choose and set up the perfect domain name for your business.',
  },
  {
    icon: Paintbrush,
    title: 'Professional Design',
    description: 'Custom design that matches your brand and appeals to your target customers.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Optimization',
    description: 'Looks perfect on phones, tablets, and desktops with responsive design.',
  },
  {
    icon: Zap,
    title: 'Contact Forms',
    description: 'Lead capture forms that send inquiries directly to your email.',
  },
  {
    icon: Shield,
    title: 'SSL Certificate',
    description: 'Secure HTTPS encryption to protect your visitors and boost SEO.',
  },
  {
    icon: Code,
    title: 'SEO Foundation',
    description: 'Proper meta tags, structured data, and technical SEO setup.',
  },
  {
    icon: Globe,
    title: 'Google Business Integration',
    description: 'Connected to your Google Business Profile for better local visibility.',
  },
  {
    icon: Paintbrush,
    title: 'Image Optimization',
    description: 'All images optimized for fast loading without sacrificing quality.',
  },
]

const process = [
  {
    title: 'Discovery Call',
    description: 'We learn about your business, goals, and what you need from your website.',
  },
  {
    title: 'Design & Review',
    description: 'We create a custom design mockup for your review and feedback.',
  },
  {
    title: 'Build & Test',
    description: 'We build your site, add content, and test everything thoroughly.',
  },
  {
    title: 'Launch & Support',
    description: 'We launch your site and provide training and ongoing support.',
  },
]
