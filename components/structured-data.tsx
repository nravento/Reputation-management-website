export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Reputation Shield LLC",
    url: "https://reputationshield.com",
    logo: "https://reputationshield.com/logo.png",
    description:
      "Reputation Shield LLC specializes in fast website creation and local SEO for home service businesses to help them get found by their local community.",
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
    serviceType: "Web Development and Local SEO",
    provider: {
      "@type": "Organization",
      name: "Reputation Shield LLC",
    },
    areaServed: "US",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Services for Home Service Businesses",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website Creation",
            description:
              "Lightning-fast, secure websites built specifically for home service businesses. Delivered in 72 hours with mobile-responsive design and SEO optimization.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Local SEO",
            description:
              "Targeted local SEO strategies to help home service businesses dominate their local market and get found by customers in their service area.",
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
