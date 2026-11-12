import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pvrconcrete.com"),

  title: {
    default: "PVR Concrete | Ready Mix Concrete in Bengaluru",
    template: "%s | PVR Concrete",
  },

  description:
    "PVR Concrete provides Ready Mix Concrete solutions for residential, commercial, industrial and infrastructure projects in Bengaluru, Karnataka.",

  keywords: [
  "PVR Concrete",
  "Ready Mix Concrete Bangalore",
  "Ready Mix Concrete Bengaluru",
  "RMC Company in Bangalore",
  "RMC Supplier in Bengaluru",
  "Ready Mixed Concrete Supplier",
  "RMC Plant in Bangalore",
  "Concrete Batching Plant Bengaluru",
  "Ready Mix Concrete Jigani",
  "RMC Plant Jigani",
  "Ready Mix Concrete Kumbalgodu",
  "RMC Plant Kumbalgodu",
  "Concrete Supplier Bangalore",
  "M20 Ready Mix Concrete",
  "M25 Ready Mix Concrete",
  "M30 Ready Mix Concrete",
  "Commercial Construction Concrete Supplier",
  "Residential Construction Concrete Supplier",
  "Industrial Construction Concrete Supplier",
  "Bulk Ready Mix Concrete Supply",
  "Concrete Delivery Bangalore",
  "Ready Mix Concrete Karnataka",
],

  authors: [{ name: "PVR Concrete" }],
  creator: "PVR Concrete",
  publisher: "PVR Concrete",


  icons: {
    icon: [
      {
        url: "/pvr-favicon.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    apple: [
      {
        url: "/pvr-favicon.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
  },


  alternates: {
    canonical: "https://www.pvrconcrete.com",
  },

  openGraph: {
    title: "PVR Concrete | Ready Mix Concrete in Bengaluru",
    description:
      "Ready Mix Concrete solutions for construction projects across Bengaluru and Karnataka.",
    url: "https://www.pvrconcrete.com",
    siteName: "PVR Concrete",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/hero/pvr-construction-hero1.png",
        width: 1200,
        height: 630,
        alt: "PVR Concrete Ready Mix Concrete",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "PVR Concrete | Ready Mix Concrete in Bengaluru",
    description:
      "Ready Mix Concrete solutions for construction projects across Bengaluru and Karnataka.",
    images: ["/hero/pvr-construction-hero1.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StructuredData />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}