import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RMC Projects in Bengaluru | PVR Concrete",
  description:
    "Explore Ready Mix Concrete projects and applications across residential, commercial, industrial and infrastructure construction.",
};

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}