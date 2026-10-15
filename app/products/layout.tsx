import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ready Mix Concrete Products | PVR Concrete",
  description:
    "Explore Ready Mix Concrete products and concrete solutions from PVR Concrete for construction projects in Bengaluru.",
};

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}