import { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ArrowUpRight, Calendar, Clock } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog - Reputation Shield LLC',
  description: 'Expert insights on local SEO, website creation, and digital marketing strategies for home service businesses.',
}

const blogPosts = [
  {
    id: 1,
    title: 'Why Local SEO is Critical for Home Service Businesses',
    excerpt: 'Discover how local search optimization can help your plumbing, HVAC, or electrical business connect with nearby customers actively searching for your services.',
    category: 'Local SEO',
    date: '2025-01-15',
    readTime: '5 min read',
    slug: 'why-local-seo-matters',
    featured: true,
  },
  {
    id: 2,
    title: 'The Essential Elements of a High-Converting Service Business Website',
    excerpt: 'Learn the key components every home service website needs to turn visitors into customers, from clear CTAs to mobile optimization.',
    category: 'Website Creation',
    date: '2025-01-12',
    readTime: '7 min read',
    slug: 'essential-elements-service-website',
    featured: true,
  },
  {
    id: 3,
    title: 'Google Business Profile Optimization: A Complete Guide',
    excerpt: 'Master the art of optimizing your Google Business Profile to improve local visibility and attract more customers in your service area.',
    category: 'Local SEO',
    date: '2025-01-08',
    readTime: '6 min read',
    slug: 'google-business-profile-guide',
    featured: false,
  },
  {
    id: 4,
    title: 'How Fast Website Loading Speed Impacts Your Business',
    excerpt: 'Understand why page speed matters for user experience, search rankings, and conversion rates—and how to improve it.',
    category: 'Website Creation',
    date: '2025-01-05',
    readTime: '4 min read',
    slug: 'website-speed-impact',
    featured: false,
  },
  {
    id: 5,
    title: 'Local Citation Building: What You Need to Know',
    excerpt: 'Explore how consistent business listings across directories can strengthen your local SEO and help customers find you.',
    category: 'Local SEO',
    date: '2025-01-02',
    readTime: '5 min read',
    slug: 'local-citation-building',
    featured: false,
  },
  {
    id: 6,
    title: 'Mobile-First Design: Why It Matters for Home Services',
    excerpt: 'With most local searches happening on mobile, learn why responsive design is no longer optional for service businesses.',
    category: 'Website Creation',
    date: '2024-12-28',
    readTime: '6 min read',
    slug: 'mobile-first-design',
    featured: false,
  },
]

const categories = ['All', 'Local SEO', 'Website Creation', 'Digital Marketing']

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured)
  const otherPosts = blogPosts.filter(post => post.id !== featuredPost?.id)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-white/5 border border-white/10 text-white/80 text-xs uppercase tracking-wider font-medium">
              Knowledge Base
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tight">
              Insights &<br />Resources
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed">
              Expert guidance on local SEO, website creation, and digital strategies designed to help home service businesses grow their online presence.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="pb-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-white/5 border border-white/10 p-8 md:p-12 lg:p-16 hover:bg-white/[0.07] transition-all duration-500 group">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-white text-black text-xs font-medium uppercase tracking-wider">
                  Featured
                </span>
                <span className="text-white/50 text-sm">{featuredPost.category}</span>
              </div>
              
              <Link href={`/blog/${featuredPost.slug}`} className="block">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight group-hover:text-white/90 transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6 text-white/50 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-white group-hover:gap-4 transition-all">
                    <span className="text-sm font-medium">Read More</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex gap-4 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all text-sm font-medium uppercase tracking-wider whitespace-nowrap"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-32 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="bg-white/5 border border-white/10 p-8 hover:bg-white/[0.07] transition-all duration-500 group"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-white/50 text-xs uppercase tracking-wider font-medium">
                      {post.category}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-white/70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight group-hover:text-white/90 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-white/60 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-6 text-white/50 text-sm pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
