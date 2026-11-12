
"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion } from "motion/react";

type MediaItem = {
  type: "image" | "video";
  src: string;
  title: string;
  category: string;
};

const mediaItems: MediaItem[] = [
  {
    type: "image",
    src: "/gallery/images/gallery-7.jpeg",
    title: "Our RMC Plant",
    category: "Plant Operations",
  },
  {
    type: "video",
    src: "/gallery/videos/kumbalgodu-plant-tour.mp4",
    title: "PVR Concrete Kumbalgodu",
    category: "Plant Tour",
  },
  {
    type: "image",
    src: "/quality/pvr-laboratory.png",
    title: "Concrete Quality Testing",
    category: "Quality Assurance",
  },
  {
    type: "video",
    src: "/gallery/videos/concrete-pouring.mp4",
    title: "Concrete at Work",
    category: "Site Operations",
  },
  {
    type: "image",
    src: "/gallery/images/gallery-3.jpeg",
    title: "Our Concrete Fleet",
    category: "Transportation",
  },
  {
    type: "video",
    src: "/gallery/videos/plant-tour.mp4",
    title: "On the Project Site",
    category: "Project Execution",
  },
];

export default function HomeMediaSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index: number) => {
    const total = mediaItems.length;
    const nextIndex = (index + total) % total;

    const container = sliderRef.current;
    const slide = slideRefs.current[nextIndex];

    if (!container || !slide) return;

    const containerRect = container.getBoundingClientRect();
    const slideRect = slide.getBoundingClientRect();

    const targetLeft =
      container.scrollLeft +
      slideRect.left -
      containerRect.left -
      (container.clientWidth - slide.clientWidth) / 2;

    container.scrollTo({
      left: targetLeft,
      behavior: "smooth",
    });

    setActiveIndex(nextIndex);
  };

  const handleScroll = () => {
    const container = sliderRef.current;
    if (!container) return;

    const containerCenter =
      container.getBoundingClientRect().left +
      container.clientWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    slideRefs.current.forEach((slide, index) => {
      if (!slide) return;

      const rect = slide.getBoundingClientRect();
      const slideCenter = rect.left + rect.width / 2;
      const distance = Math.abs(containerCenter - slideCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  return (
    <section className="overflow-hidden bg-[#F7F7F2] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#C9252D]">
            Life at PVR Concrete
          </span>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#063B2A] sm:text-4xl">
            A Closer Look at <span className="text-[#C9252D]">Our Work</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
            Explore our plants, operations, quality processes and
            concrete delivery through images and videos.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">

          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-0 pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={{
              paddingInline: "max(7%, calc((100% - 800px) / 2))",
              scrollPaddingInline: "max(7%, calc((100% - 800px) / 2))",
            }}
          >
            {mediaItems.map((item, index) => (
              <motion.div
                key={item.src}
                ref={(element) => {
                  slideRefs.current[index] = element;
                }}
                initial={{ opacity: 0.7, scale: 0.94 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0.72,
                  scale: activeIndex === index ? 1 : 0.94,
                }}
                transition={{ duration: 0.35 }}
                onClick={() => goToSlide(index)}
                className="relative w-[86%] max-w-[800px] min-w-[280px] flex-shrink-0 snap-center cursor-pointer"
              >
                <div className="group overflow-hidden rounded-2xl border border-[#063B2A]/10 bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl">

                  {/* Media */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-[#063B2A]">
                    {item.type === "image" ? (
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 86vw, (max-width: 1024px) 86vw, 800px"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <video
                        controls
                        preload="metadata"
                        playsInline
                        className="h-full w-full object-cover"
                        onClick={(event) => event.stopPropagation()}
                      >
                        <source src={item.src} type="video/mp4" />
                        Your browser does not support video playback.
                      </video>
                    )}

                    {item.type === "image" && (
                      <div className="absolute left-4 top-4 rounded-full bg-[#063B2A]/90 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-sm">
                        IMAGE
                      </div>
                    )}
                  </div>

                  {/* Caption */}
                  <div className="flex items-center justify-between gap-3 p-4 sm:p-5">
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#C9252D]">
                        {item.category}
                      </p>

                      <h3 className="mt-1 truncate text-base font-bold text-[#063B2A] sm:text-lg">
                        {item.title}
                      </h3>
                    </div>

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#063B2A] text-lg text-white">
                      {item.type === "video" ? "▶" : "↗"}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Previous / Next Buttons */}
          <div className="mt-5 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={() => goToSlide(activeIndex - 1)}
              aria-label="Previous slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#063B2A]/20 bg-white text-xl text-[#063B2A] shadow-sm transition hover:bg-[#063B2A] hover:text-white"
            >
              ←
            </button>

            <div className="flex items-center gap-2">
              {mediaItems.map((item, index) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-7 bg-[#C9252D]"
                      : "w-2 bg-[#063B2A]/25"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => goToSlide(activeIndex + 1)}
              aria-label="Next slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#063B2A]/20 bg-white text-xl text-[#063B2A] shadow-sm transition hover:bg-[#063B2A] hover:text-white"
            >
              →
            </button>
          </div>
        </div>

        {/* Gallery Link */}
        <div className="mt-10 text-center">
          <a
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-full bg-[#C9252D] px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#A91E25]"
          >
            Explore Full Gallery <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
