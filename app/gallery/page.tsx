"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Category = "all" | "images" | "videos" | "brochures";

const images = [
  {
    src: "/gallery/images/gallery-1.jpeg",
    title: "PVR Concrete",
    category: "Plant & Operations",
  },
  {
    src: "/gallery/images/gallery-2.jpeg",
    title: "Ready Mix Concrete",
    category: "RMC",
  },
  {
    src: "/gallery/images/gallery-3.jpeg",
    title: "Concrete Operations",
    category: "Operations",
  },
  {
    src: "/gallery/images/gallery-4.jpeg",
    title: "Construction Support",
    category: "Projects",
  },
  {
    src: "/gallery/images/gallery-5.jpeg",
    title: "RMC Plant",
    category: "Plant",
  },
  {
    src: "/gallery/images/gallery-6.jpeg",
    title: "PVR Concrete Fleet",
    category: "Fleet",
  },
];

const videos = [
  {
    title: "PVR Concrete Plant",
    description: "A look inside PVR Concrete operations.",
    src: "/gallery/videos/plant-tour.mp4",
  },
  {
    title: "Concrete Pouring",
    description: "Ready Mix Concrete in action at site.",
    src: "/gallery/videos/concrete-pouring.mp4",
  },
];

const brochures = [
  {
    file: "/gallery/brochures/company-profile.pdf",
    title: "PVR Concrete Company Profile",
    description:
      "Learn more about PVR Concrete, our operations and capabilities.",
  },
  {
    file: "/gallery/brochures/product-brochure.pdf",
    title: "PVR Concrete Product Brochure",
    description:
      "Explore our Ready Mix Concrete solutions and applications.",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const showImages =
    activeCategory === "all" || activeCategory === "images";


  const showBrochures =
    activeCategory === "all" || activeCategory === "brochures";

  return (
    <main className="overflow-hidden bg-white text-[#111513]">
      <Navbar />

      {/* HERO */}
      <section className="relative bg-[#063B2A] pt-[150px] text-white md:pt-[170px]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute right-[-10%] top-[-25%] h-[600px] w-[600px] rounded-full bg-[#C9252D]/20 blur-3xl" />
          <div className="absolute bottom-[-30%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[#075B3C] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9252D]" />

              <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/60">
                PVR Concrete Gallery
              </p>
            </div>

            <h1 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
              Inside PVR Concrete.
              <span className="block text-white/40">
                Our work. Our journey.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65">
              Explore photographs, videos and brochures showcasing PVR
              Concrete, our operations, Ready Mix Concrete solutions and
              projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FILTER */}
      <section className="sticky top-0 z-30 border-b border-gray-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-6 py-4 lg:px-8">
          <FilterButton
            active={activeCategory === "all"}
            onClick={() => setActiveCategory("all")}
          >
            All
          </FilterButton>

          <FilterButton
            active={activeCategory === "images"}
            onClick={() => setActiveCategory("images")}
          >
            Images
          </FilterButton>

          <FilterButton
            active={activeCategory === "videos"}
            onClick={() => setActiveCategory("videos")}
          >
            Videos
          </FilterButton>

          <FilterButton
            active={activeCategory === "brochures"}
            onClick={() => setActiveCategory("brochures")}
          >
            Brochures
          </FilterButton>
        </div>
      </section>

      {/* IMAGES */}
      {showImages && (
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading
              eyebrow="Images"
              title="A closer look at PVR Concrete."
              description="Explore our plants, equipment, operations and construction-related activities."
            />

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {images.map((image, index) => (
                <motion.button
                  key={image.src}
                  type="button"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                  }}
                  onClick={() => setSelectedImage(image.src)}
                  className="group relative overflow-hidden rounded-3xl bg-gray-100 text-left"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90" />

                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <p className="text-xs font-bold uppercase tracking-wider text-white/60">
                        {image.category}
                      </p>

                      <h3 className="mt-1 text-xl font-black text-white">
                        {image.title}
                      </h3>
                    </div>

                    <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-md transition group-hover:opacity-100">
                      +
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* VIDEOS */}
     <section className="px-6 py-20 lg:px-8">
  <div className="mx-auto max-w-7xl">

    <div className="mb-10">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C9252D]">
        Videos
      </p>

      <h2 className="mt-4 text-4xl font-black tracking-tight text-[#063B2A] md:text-5xl">
        See PVR Concrete in action.
      </h2>

      <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-500 md:text-base">
        Watch our plant operations, concrete delivery, testing and
        construction activities.
      </p>
    </div>

    <div className="grid gap-6 md:grid-cols-2">

      {videos.map((video, index) => (
        <motion.div
          key={video.src}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.5,
            delay: index * 0.08,
          }}
          className="overflow-hidden rounded-2xl border border-black/10 bg-[#063B2A] shadow-sm"
        >

          <div className="relative aspect-video w-full overflow-hidden bg-black">

            <video
              className="h-full w-full object-cover"
              controls
              preload="metadata"
              playsInline
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

          </div>

          <div className="p-5">
            <h3 className="text-lg font-black text-white">
              {video.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-white/65">
              {video.description}
            </p>
          </div>

        </motion.div>
      ))}

    </div>
  </div>
</section>

      {/* BROCHURES */}
      {showBrochures && (
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeading
              eyebrow="Brochures"
              title="Explore our company information."
              description="View or download PVR Concrete brochures and company documents."
            />

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {brochures.map((brochure, index) => (
                <motion.div
                  key={brochure.file}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#C9252D]/10 text-2xl">
                      📄
                    </div>

                    <div>
                      <h3 className="text-xl font-black">
                        {brochure.title}
                      </h3>

                      <p className="mt-2 leading-7 text-gray-600">
                        {brochure.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href={brochure.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-[#075B3C] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#063B2A]"
                    >
                      View PDF →
                    </a>

                    <a
                      href={brochure.file}
                      download
                      className="rounded-full border border-gray-200 px-5 py-3 text-sm font-bold text-[#075B3C] transition hover:border-[#075B3C]"
                    >
                      Download
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-[#C9252D] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/60">
                PVR Concrete
              </p>

              <h2 className="mt-3 text-3xl font-black md:text-5xl">
                Ready to build something strong?
              </h2>

              <p className="mt-3 max-w-xl text-white/75">
                Talk to our team about your Ready Mix Concrete requirements.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-white px-7 py-4 font-black text-[#C9252D] transition hover:bg-gray-100"
              >
                Get a Quote
              </Link>

              <a
                href="https://wa.me/8880552225"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/30 px-7 py-4 font-black text-white transition hover:bg-white/10"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-5"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            aria-label="Close image viewer"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl text-white backdrop-blur-md transition hover:bg-white/20"
          >
            ×
          </button>

          <div
            className="relative h-[80vh] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="PVR Concrete gallery image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-bold transition ${
        active
          ? "bg-[#075B3C] text-white"
          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
      }`}
    >
      {children}
    </button>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C9252D]">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
        {title}
      </h2>

      <p className="mt-5 leading-8 text-gray-600">{description}</p>
    </div>
  );
}