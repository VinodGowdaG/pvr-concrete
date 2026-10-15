import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact PVR Concrete | Ready Mix Concrete Bengaluru",
  description:
    "Contact PVR Concrete for Ready Mix Concrete requirements, project enquiries and quotations in Bengaluru.",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}