import { Metadata } from 'next'
import { Star, MessageSquare, TrendingUp, Target, Zap, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'

export const metadata: Metadata = {
  title: 'Review Campaign Services | Reputation Shield LLC',
  description: 'Run strategic review campaigns that generate authentic positive reviews and funnel them to your website. Build trust and credibility with automated review generation.',
}

export default function ReviewManagementPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-primary/5 to-transparent" />
          <div className="floating-orb" style={{ top: '10%', right: '5%' }} />
          <div className="floating-orb" style={{ top: '60%', left: '10%' }} />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-block px-4 py-2 glass-card rounded-full mb-4">
                <span className="text-sm font-medium text-secondary flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  Review Campaign Services
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-balance">
                Generate Authentic Reviews{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  That Drive Business Growth
                </span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                Run strategic review campaigns that automatically collect positive reviews from satisfied customers and funnel them directly to your website and review platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all">
                  <Link href="/contact">Launch Your Campaign</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="glass-card hover:bg-muted/50">
                  <Link href="#features">See How It Works</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">
                Automated Review{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Campaign System
                </span>
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Everything you need to generate and showcase positive reviews at scale.
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

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">
                How Our Review{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Campaigns Work
                </span>
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Our proven 4-step process for generating authentic positive reviews.
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
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto glass-card p-12 text-center space-y-6 rounded-3xl">
              <h2 className="text-3xl md:text-5xl font-bold">
                Ready to Launch Your{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Review Campaign?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                Start generating authentic positive reviews that build trust and drive new customers to your business. No contracts required.
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all">
                <Link href="/contact">Get Started Today</Link>
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
    icon: Target,
    title: 'Targeted Campaign Launch',
    description: 'Launch strategic review campaigns targeting your happiest customers at the optimal moment after service completion.',
  },
  {
    icon: Zap,
    title: 'Automated Review Requests',
    description: 'Automatically send personalized review requests via SMS and email to customers when they\'re most satisfied.',
  },
  {
    icon: Star,
    title: 'Multi-Platform Funneling',
    description: 'Funnel positive reviews to your website, Google Business Profile, Facebook, and other platforms where customers search.',
  },
  {
    icon: MessageSquare,
    title: 'Review Widget Integration',
    description: 'Display your best reviews prominently on your website with our customizable review widget.',
  },
  {
    icon: BarChart3,
    title: 'Campaign Analytics',
    description: 'Track campaign performance, review generation rates, and conversion metrics with detailed dashboards.',
  },
  {
    icon: TrendingUp,
    title: 'Continuous Optimization',
    description: 'We continuously optimize your campaigns based on response rates and customer behavior patterns.',
  },
]

const process = [
  {
    title: 'Campaign Setup',
    description: 'We configure your review campaign targeting strategy and automated request workflows.',
  },
  {
    title: 'Launch & Request',
    description: 'Automated personalized requests go out to satisfied customers via their preferred channel.',
  },
  {
    title: 'Funnel Reviews',
    description: 'Positive reviews are automatically funneled to your website and key review platforms.',
  },
  {
    title: 'Showcase & Convert',
    description: 'Reviews are prominently displayed on your site, building trust and driving conversions.',
  },
]
