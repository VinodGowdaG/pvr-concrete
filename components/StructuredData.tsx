export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "PVR Concrete",
    url: "https://www.pvrconcrete.com",
    logo: "https://www.pvrconcrete.com/logo/pvr-concrete-logo.png",
    image: "https://www.pvrconcrete.com/hero/pvr-hero.jpg",
    description:
      "PVR Concrete provides Ready Mix Concrete solutions for residential, commercial, industrial and infrastructure projects in Bengaluru, Karnataka.",
    telephone: "+918880552225",
    email: "pvrconcreteblr@gmail.com",

    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Sy No. 20, Vaderamanchenahalli, H, Konasandra, Kallabalu (P), Jigani",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560106",
      addressCountry: "IN",
    },

    areaServed: {
      "@type": "City",
      name: "Bengaluru",
    },

    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+918880552225",
      contactType: "customer service",
      email: "pvrconcreteblr@gmail.com",
      availableLanguage: ["English", "Kannada"],
    },

    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}