import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PVR Concrete Gallery | Images, Videos & Brochures",
  description:
    "Explore PVR Concrete images, videos, plant operations, quality testing and company brochures.",
};

export default function GalleryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}