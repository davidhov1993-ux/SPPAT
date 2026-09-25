import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Badkamerrenovatie & Tegelwerk Bespreken | SPPAT",
  description: "Bespreek uw badkamer- of tegelproject met SPPAT. Stuur uw wensen, foto’s en afmetingen en geef ons een eerste beeld van het project.",
  alternates: { canonical: "https://www.sppat.nl/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
