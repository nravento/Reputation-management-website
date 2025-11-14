import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Reputation Shield LLC",
  description:
    "Get in touch with Reputation Shield LLC for a free consultation. Let's discuss how we can protect and enhance your online reputation.",
  openGraph: {
    title: "Contact Us - Reputation Shield LLC",
    description: "Schedule your free consultation with our reputation management experts.",
  },
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-24 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Let's Talk</h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed text-pretty">
                Schedule your free consultation and discover how Reputation Shield LLC can protect and enhance your
                online presence. We typically respond within 24 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <ContactSection />

        {/* Additional Info Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">What Happens Next?</h2>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div>
                  <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary font-bold flex items-center justify-center mx-auto mb-4 text-xl">
                    1
                  </div>
                  <h3 className="font-semibold mb-2">We Review</h3>
                  <p className="text-sm text-muted-foreground">
                    Our team reviews your information and current online presence
                  </p>
                </div>
                <div>
                  <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary font-bold flex items-center justify-center mx-auto mb-4 text-xl">
                    2
                  </div>
                  <h3 className="font-semibold mb-2">We Connect</h3>
                  <p className="text-sm text-muted-foreground">
                    Schedule a call to discuss your goals and challenges
                  </p>
                </div>
                <div>
                  <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary font-bold flex items-center justify-center mx-auto mb-4 text-xl">
                    3
                  </div>
                  <h3 className="font-semibold mb-2">We Strategize</h3>
                  <p className="text-sm text-muted-foreground">
                    Create a custom plan tailored to your reputation needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
