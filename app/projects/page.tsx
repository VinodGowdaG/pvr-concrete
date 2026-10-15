"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Project = {
  title: string;
  category: string;
  location: string;
  image: string;
  description: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "Skyline Heights",
    category: "Residential",
    location: "Bengaluru",
    image: "/projects/skyline-heights.png",
    description:
      "RMC solutions for a multi-storey residential development.",
    link: "https://www.squaresnacres.com/builders/skyline-bengaluru",
  },
  {
    title: "Cessna Business Park",
    category: "Commercial",
    location: "Bengaluru",
    image: "/projects/cessna-business-park.png",
    description:
      "Concrete supply for a modern commercial development.",
    link: "https://www.prestigeevergreenvarthur.in/blog/cessna-business-park.html",
  },
  {
    title: "Greenfield Villas",
    category: "Residential",
    location: "Jigani",
    image: "/projects/greenfield-villas.png",
    description:
      "RMC solutions supporting villa construction and structural works.",
    link: "https://example.com",
  },
  {
    title: "Aadya Academy",
    category: "Institutional",
    location: "Bengaluru",
    image: "/projects/aadya-academy.png",
    description:
      "Concrete solutions for institutional construction requirements.",
    link: "https://aadyaacademy.com",
  },
  {
    title: "Urban Link",
    category: "Infrastructure",
    location: "Karnataka",
    image: "/projects/urban-links.png",
    description:
      "RMC applications for infrastructure and civil construction works.",
    link: "https://example.com",
  },
  {
    title: "Knowledge Campus",
    category: "Institutional",
    location: "Bengaluru",
    image: "/projects/knowledge-campus.png",
    description:
      "Concrete solutions for institutional and educational infrastructure.",
    link: "https://example.com",
  },
];

const categories = [
  "All",
  "Residential",
  "Commercial",
  "Industrial",
  "Infrastructure",
  "Institutional",
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#063B2A] px-6 pb-16 pt-[150px] text-white md:pt-[170px] lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C9252D]">
            Our Projects
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
            Built across
            <span className="text-[#C9252D]"> different sectors.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
            Explore the types of construction projects where Ready Mix
            Concrete can provide practical and reliable solutions.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">

          {/* Category Filter */}
          <div className="mb-10 flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                key={category}
                type="button"
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  index === 0
                    ? "bg-[#063B2A] text-white"
                    : "bg-[#F3F3F0] text-[#063B2A] hover:bg-[#C9252D] hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                }}
                whileHover={{ y: -6 }}
                className="group block overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />

                  {/* Category */}
                  <span className="absolute bottom-4 left-4 rounded-full bg-[#C9252D] px-3 py-1 text-xs font-bold text-white">
                    {project.category}
                  </span>

                  {/* Open Link Icon */}
                  <div className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white/90 text-[#063B2A] opacity-0 shadow-lg transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    ↗
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gray-400">
                    {project.location}
                  </p>

                  <h2 className="mt-2 text-xl font-black text-[#063B2A]">
                    {project.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {project.description}
                  </p>

                  <div className="mt-5 border-t border-black/10 pt-4">
                    <span className="text-sm font-bold text-[#063B2A] transition group-hover:text-[#C9252D]">
                      View Project →
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#063B2A] px-8 py-14 text-center text-white md:px-16">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C9252D]">
            Start Your Project
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black tracking-tight md:text-5xl">
            Need reliable Ready Mix Concrete for your project?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-white/70">
            Talk to the PVR Concrete team about your project requirements,
            concrete grade and delivery needs.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-[#C9252D] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#a91e25]"
          >
            Get a Quote →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}