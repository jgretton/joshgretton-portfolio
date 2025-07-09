import { SEOData } from "@/types";

// utils/generateJsonLd.ts
export const generateJsonLd = (seo: SEOData) => {
  return {
    "@context": "https://schema.org",
    "@type": seo.schema.type,
    name: seo.schema.name,
    description: seo.schema.description,
    url: seo.schema.url,
    applicationCategory: seo.schema.applicationCategory,
    operatingSystem: seo.schema.operatingSystem,
    datePublished: seo.schema.datePublished,
    screenshot: seo.schema.screenshot,
    featureList: seo.schema.features,
    audience: {
      "@type": "Audience",
      audienceType: seo.schema.audience,
    },
    creator: {
      "@type": "Person",
      name: seo.author,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
  };
};
