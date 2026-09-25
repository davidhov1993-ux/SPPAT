import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";


const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Complete Badkamerrenovaties & Professioneel Tegelwerk | SPPAT",
  description: "SPPAT realiseert complete badkamerrenovaties en professioneel tegelwerk in heel Nederland. 35 jaar ervaring, van voorbereiding en techniek tot nauwkeurige afwerking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-inter bg-[#F7F7F5] text-[#1A1A1A]">
        <Header />
        <Breadcrumbs />
        <div id="main-content" className="flex-grow">{children}</div>
        

        <LocalBusinessSchema />
        <Footer />
      </body>
    </html>
  );
}
