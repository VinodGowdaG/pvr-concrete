import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About PVR Concrete | 12+ Years of Experience",
  description:
    "Learn about PVR Concrete, our experience, RMC plants, team and Ready Mix Concrete operations in Bengaluru.",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}