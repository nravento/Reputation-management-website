export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Reputation Shield LLC",
    url: "https://reputationshield.com",
    logo: "https://reputationshield.com/logo.png",
    description:
      "Reputation Shield LLC specializes in custom web development for SEO and review management & generation to protect and enhance online reputation.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "8520 Allison Pointe Blvd Ste 223",
      addressLocality: "Indianapolis",
      addressRegion: "IN",
      postalCode: "46250",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "Contact@Reputationshieldllc.com",
    },
    sameAs: [
      "https://www.facebook.com/reputationshield",
      "https://www.twitter.com/reputationshield",
      "https://www.linkedin.com/company/reputationshield",
      "https://www.instagram.com/reputationshield",
    ],
  }

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Reputation Management",
    provider: {
      "@type": "Organization",
      name: "Reputation Shield LLC",
    },
    areaServed: "US",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Reputation Management Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Web Development for SEO",
            description:
              "Strategically designed and developed websites optimized for search engines to establish authoritative online presence and improve rankings.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Review Management & Generation",
            description:
              "Comprehensive review management including systematic generation of authentic positive reviews, professional response management, and reputation monitoring across all major review platforms.",
          },
        },
      ],
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
    </>
  )
}
