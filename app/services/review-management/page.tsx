import { Metadata } from 'next'
import { Star, MessageSquare, TrendingUp, Shield, Bell, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Review Management Services | Reputation Shield LLC',
  description: 'Build a stellar online reputation with our comprehensive review management services. Generate more positive reviews and respond professionally to all feedback.',
}

export default function ReviewManagementPage() {
  return (
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
                Review Management
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-balance">
              Turn Reviews Into Your{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Competitive Advantage
              </span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Build a stellar online reputation with automated review generation, professional response management, and comprehensive monitoring across all platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all">
                <Link href="/contact">Get Started Today</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="glass-card hover:bg-muted/50">
                <Link href="#features">See How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Complete Review{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Management Solution
              </span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Everything you need to build and protect your online reputation.
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
              How It{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Our proven process for building a 5-star reputation.
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
              Ready to Build a{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                5-Star Reputation?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Start generating more positive reviews and watch your business grow. Get started today with no long-term contracts.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all">
              <Link href="/contact">Start Your Free Trial</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

const stats = [
  { value: '3.5x', label: 'More Reviews on Average' },
  { value: '92%', label: 'Positive Response Rate' },
  { value: '24/7', label: 'Review Monitoring' },
]

const features = [
  {
    icon: Star,
    title: 'Automated Review Requests',
    description: 'Automatically send review requests to happy customers at the perfect time via SMS and email.',
  },
  {
    icon: MessageSquare,
    title: 'Professional Responses',
    description: 'We craft and post professional responses to all reviews, turning negatives into positives.',
  },
  {
    icon: Bell,
    title: 'Real-Time Alerts',
    description: 'Get instant notifications when new reviews are posted so you can respond quickly.',
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Track your review volume, ratings, and sentiment over time with detailed dashboards.',
  },
  {
    icon: Shield,
    title: 'Reputation Protection',
    description: 'Monitor and address negative feedback before it damages your reputation.',
  },
  {
    icon: TrendingUp,
    title: 'Review Generation Campaigns',
    description: 'Run targeted campaigns to boost your review count and improve your average rating.',
  },
]

const process = [
  {
    title: 'Setup & Integration',
    description: 'We connect all your review platforms and set up automated workflows.',
  },
  {
    title: 'Generate Reviews',
    description: 'Automated requests go out to satisfied customers after every job.',
  },
  {
    title: 'Monitor & Respond',
    description: 'We monitor all reviews 24/7 and craft professional responses.',
  },
  {
    title: 'Grow Your Reputation',
    description: 'Watch your ratings improve and new customers roll in.',
  },
]
