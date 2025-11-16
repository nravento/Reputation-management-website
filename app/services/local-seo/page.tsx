import { Metadata } from 'next'
import { Search, MapPin, TrendingUp, Star, Users, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'

export const metadata: Metadata = {
  title: 'Local SEO Services | Reputation Shield LLC',
  description: 'Dominate local search results and attract more customers in your area with our proven local SEO strategies for home service businesses.',
}

export default function LocalSEOPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent" />
          <div className="floating-orb" style={{ top: '10%', left: '5%' }} />
          <div className="floating-orb" style={{ top: '60%', right: '10%' }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-block px-4 py-2 glass-card rounded-full mb-4">
                <span className="text-sm font-medium text-secondary flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Local SEO Solutions
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-balance">
                Get Found by{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Local Customers
                </span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                Dominate local search results and attract more customers in your area with our proven SEO strategies designed specifically for home service businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all">
                  <Link href="/contact">Get Your Free SEO Audit</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="glass-card hover:bg-muted/50">
                  <Link href="#benefits">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">
                Local SEO That{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Drives Results
                </span>
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                We optimize your online presence to ensure customers find you first when searching for services in your area.
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

        {/* Benefits */}
        <section id="benefits" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">
                Why Local SEO{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Matters
                </span>
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Local customers are actively searching for your services right now. Make sure they find you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="glass-card p-8 space-y-4 hover:shadow-xl transition-all"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-lg">
                    <benefit.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold">{benefit.title}</h3>
                  <p className="text-muted-foreground text-pretty">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto glass-card p-12 text-center space-y-6 rounded-3xl">
              <h2 className="text-3xl md:text-5xl font-bold">
                Ready to{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Dominate Local Search?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                Get a free SEO audit and discover how we can help your business get found by more local customers.
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all">
                <Link href="/contact">Schedule Your Free Audit</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

const features = [
  {
    icon: Search,
    title: 'Google Business Profile Optimization',
    description: 'We optimize your Google Business Profile to maximize visibility in local search results and Google Maps.',
  },
  {
    icon: MapPin,
    title: 'Local Citations & Listings',
    description: 'Build consistent business listings across major directories to strengthen your local search presence.',
  },
  {
    icon: TrendingUp,
    title: 'Keyword Research & Strategy',
    description: 'Target the right local keywords that your customers are actually searching for in your area.',
  },
  {
    icon: Star,
    title: 'Review Generation',
    description: 'Implement systems to generate more positive reviews and improve your star ratings across platforms.',
  },
  {
    icon: Users,
    title: 'Local Link Building',
    description: 'Build authoritative local backlinks that boost your credibility and search rankings.',
  },
  {
    icon: BarChart3,
    title: 'Performance Tracking',
    description: 'Monitor your rankings, traffic, and leads with detailed monthly reports and analytics.',
  },
]

const benefits = [
  {
    icon: TrendingUp,
    title: 'Increase Local Visibility',
    description: 'Show up at the top of search results when customers in your area search for your services. More visibility means more calls and more jobs.',
  },
  {
    icon: Users,
    title: 'Attract Ready-to-Buy Customers',
    description: 'Local searchers have high intent. They need your services now. Capture them at the perfect moment with optimized local presence.',
  },
  {
    icon: BarChart3,
    title: 'Outrank Your Competition',
    description: 'Stand out from competitors in your area. We help you dominate the local search landscape in your service area.',
  },
  {
    icon: Star,
    title: 'Build Trust & Credibility',
    description: 'A strong local SEO presence with positive reviews builds trust before customers even contact you.',
  },
]
