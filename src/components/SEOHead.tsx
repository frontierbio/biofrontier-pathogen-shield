import { Helmet } from "react-helmet-async";

interface Props {
  type: "home" | "about" | "solutions" | "products" | "insights" | "resources" | "contact" | "article";
  title?: string;
  description?: string;
  articleTitle?: string;
  articleDate?: string;
}

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BioFrontier",
  url: "https://biofrontier.co.za",
  logo: "https://biofrontier.co.za/logo.png",
  description: "Non-toxic biosecurity solutions for South African agriculture",
  address: {
    "@type": "PostalAddress",
    addressRegion: "KwaZulu-Natal",
    addressLocality: "Midlands",
    addressCountry: "ZA",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+27-33-000-0000",
    contactType: "sales",
    email: "info@biofrontier.co.za",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What makes BioFrontier products non-toxic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our formulations use biodegradable active ingredients that break down safely after disinfection. No chlorine, formaldehyde, or quaternary ammonium compounds.",
      },
    },
    {
      "@type": "Question",
      name: "Can BioFrontier help with export compliance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our Compliance & Workforce Support division provides biosecurity audits, SOP development, and export-readiness consulting for EU, UK, and Middle Eastern markets.",
      },
    },
    {
      "@type": "Question",
      name: "Do you supply nationally or only in KZN?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "While headquartered in the KZN Midlands, we supply products nationwide and offer remote compliance consulting across South Africa.",
      },
    },
  ],
};

const productSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "BioShield Pro 500",
    description: "Broad-spectrum non-toxic disinfectant for poultry and dairy facilities",
    brand: { "@type": "Brand", name: "BioFrontier" },
    category: "Agricultural Disinfectant",
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "AquaPure FarmGuard",
    description: "Point-of-use water purification system for livestock drinking water",
    brand: { "@type": "Brand", name: "BioFrontier" },
    category: "Water Purification",
  },
];

export default function SEOHead({ type, title, description, articleTitle, articleDate }: Props) {
  const schemas: object[] = [orgSchema];

  if (type === "insights") schemas.push(faqSchema);
  if (type === "products") schemas.push(...productSchemas);

  if (type === "article" && articleTitle) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: articleTitle,
      datePublished: articleDate,
      author: { "@type": "Organization", name: "BioFrontier" },
      publisher: { "@type": "Organization", name: "BioFrontier" },
    });
  }

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
