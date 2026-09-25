import { businessData } from "@/config/businessData";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: businessData.name,
    url: businessData.url,
    areaServed: businessData.areaServed,
    ...(businessData.telephone && { telephone: businessData.telephone }),
    ...(businessData.email && { email: businessData.email }),
    ...(businessData.taxID && { taxID: businessData.taxID }),
    ...(businessData.vatID && { vatID: businessData.vatID }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
