"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const stats = [
  {
    value: "20+",
    label: "Years of Experience",
  },
  {
    value: "2500+",
    label: "Projects Delivered",
  },
  {
    value: "M5–M80",
    label: "Concrete Grade Range",
  },
  {
    value: "RMC",
    label: "Ready Mix Concrete",
  },
];

const strengths = [
  {
    number: "01",
    title: "Quality Focused",
    text: "Quality management and testing practices support consistent ready-mix concrete production.",
  },
  {
    number: "02",
    title: "Industry Experience",
    text: "More than two decades of experience supporting construction requirements.",
  },
  {
    number: "03",
    title: "Testing & Control",
    text: "Laboratory and testing facilities support quality control throughout the concrete process.",
  },
  {
    number: "04",
    title: "Construction Ready",
    text: "Concrete solutions for residential, commercial, industrial and infrastructure applications.",
  },
];

const applications = [
  "Residential Construction",
  "Commercial Buildings",
  "Industrial Projects",
  "Infrastructure",
  "Institutional Buildings",
  "High-Rise Construction",
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-white text-[#111513]">
      <Navbar />

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative min-h-[720px] overflow-hidden bg-[#063B2A]">
        <Image
          src="/hero/pvr-construction-hero1.png"
          alt="PVR Concrete ready mix concrete construction site"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#031d15]/95 via-[#063B2A]/75 to-[#063B2A]/20" />

        <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl items-center px-6 py-32 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-12 bg-[#C9252D]" />

              <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/80">
                PVR Concrete
              </p>
            </div>

            <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[88px]">
              Building Strength.
              <span className="block text-[#C9252D]">
                Delivering Confidence.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
              Reliable ready-mix concrete solutions for construction projects
              across Bengaluru and Karnataka.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#C9252D] px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#a91e25] hover:shadow-xl"
              >
                Get a Quote
                <span className="ml-2">→</span>
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#063B2A]"
              >
                Explore RMC
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm text-white/60">
              <span>20+ Years Experience</span>
              <span>•</span>
              <span>2500+ Projects</span>
              <span>•</span>
              <span>Quality Focused</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          STATS
      ====================================================== */}
      <section className="relative z-20 -mt-10 px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl bg-white shadow-2xl shadow-black/10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="border-b border-gray-100 p-7 last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0"
            >
              <p className="text-3xl font-black text-[#075B3C] md:text-4xl">
                {stat.value}
              </p>

              <p className="mt-2 text-sm font-semibold text-gray-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =====================================================
          ABOUT
      ====================================================== */}
      <section className="py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C9252D]">
              About PVR Concrete
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight md:text-5xl">
              Strong foundations begin with the right concrete.
            </h2>

            <p className="mt-7 leading-8 text-gray-600">
              PVR Concrete is a ready-mix concrete dealer serving construction
              requirements with a focus on quality, consistency and reliable
              concrete solutions.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              With more than 20 years of experience and 2500+ projects
              delivered, PVR Concrete supports a wide range of construction
              applications.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center font-bold text-[#075B3C] transition hover:text-[#C9252D]"
            >
              Discover PVR Concrete
              <span className="ml-2">→</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/about/pvr-rmc-plant.png"
                alt="PVR Concrete ready mix concrete plant"
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute -bottom-7 -left-5 rounded-2xl bg-[#C9252D] p-6 text-white shadow-xl md:left-[-30px]">
              <p className="text-4xl font-black">20+</p>
              <p className="mt-1 text-sm font-semibold text-white/80">
                Years of Experience
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          WHY PVR
      ====================================================== */}
      <section className="bg-[#F3F3F0] py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C9252D]">
              Why PVR Concrete
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
              Experience meets quality control.
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              From production to testing and supply, every part of the process
              contributes to dependable ready-mix concrete.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {strengths.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group rounded-2xl bg-white p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <p className="text-sm font-black text-[#C9252D]">
                  {item.number}
                </p>

                <h3 className="mt-7 text-xl font-black">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {item.text}
                </p>

                <div className="mt-7 h-1 w-10 bg-[#075B3C] transition-all duration-300 group-hover:w-20" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          RMC PRODUCT
      ====================================================== */}
      <section className="overflow-hidden bg-[#063B2A] py-28 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative h-[380px] md:h-[500px]">
              <Image
                src="/products/pvr-mixer-truck.png"
                alt="PVR Concrete ready mix concrete mixer truck"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C9252D]">
              Our Core Product
            </p>

            <h2 className="mt-5 text-5xl font-black tracking-tight md:text-6xl">
              Ready Mix
              <span className="block text-white/50">Concrete.</span>
            </h2>

            <p className="mt-7 max-w-xl leading-8 text-white/65">
              PVR Concrete provides ready-mix concrete solutions for a broad
              range of construction applications, helping projects achieve
              consistent and dependable concrete supply.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {applications.map((application) => (
                <div
                  key={application}
                  className="flex items-center gap-3 text-sm text-white/80"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#C9252D] text-xs">
                    ✓
                  </span>
                  {application}
                </div>
              ))}
            </div>

            <Link
              href="/products"
              className="mt-10 inline-flex rounded-full bg-white px-7 py-4 font-bold text-[#063B2A] transition hover:bg-[#C9252D] hover:text-white"
            >
              Explore Products →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          QUALITY
      ====================================================== */}
      <section className="py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C9252D]">
              Quality & Testing
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">
              Quality checked from mix to placement.
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              PVR Concrete&apos;s quality process incorporates recognized Indian
              standards and quality management practices, supported by
              laboratory and testing facilities.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {["IS 4926", "IS 456", "IS 516", "IS 1199"].map((standard) => (
                <div
                  key={standard}
                  className="rounded-xl border border-gray-200 p-5"
                >
                  <p className="font-black text-[#075B3C]">{standard}</p>
                </div>
              ))}
            </div>

            <Link
              href="/quality"
              className="mt-8 inline-flex font-bold text-[#075B3C] hover:text-[#C9252D]"
            >
              Explore Quality Standards →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/quality/pvr-laboratory.png"
                alt="PVR Concrete laboratory and quality testing"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-5 rounded-2xl bg-[#075B3C] p-6 text-white shadow-xl">
              <p className="text-sm font-bold uppercase tracking-wider text-white/60">
                Quality
              </p>

              <p className="mt-1 text-xl font-black">
                Testing Focused
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          CONSTRUCTION / PROJECT VISUAL
      ====================================================== */}
      <section className="relative overflow-hidden">
        <div className="relative h-[550px]">
          <Image
            src="/quality/pvr-quality-testing.png"
            alt="PVR Concrete concrete pouring and quality testing"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[#063B2A]/65" />

          <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl text-white"
            >
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#C9252D]">
                Built for Construction
              </p>

              <h2 className="mt-5 text-4xl font-black md:text-6xl">
                From the plant
                <span className="block text-white/60">
                  to the foundation.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                Ready-mix concrete solutions designed to support projects
                through every stage of construction.
              </p>

              <Link
                href="/projects"
                className="mt-8 inline-flex rounded-full bg-[#C9252D] px-7 py-4 font-bold text-white transition hover:bg-[#a91e25]"
              >
                View Projects →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="bg-[#C9252D] py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/70">
              Start your project
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Need reliable ready-mix concrete?
            </h2>

            <p className="mt-3 max-w-xl text-white/75">
              Talk to PVR Concrete about your construction requirements.
            </p>
          </div>

          <Link
            href="/contact"
            className="shrink-0 rounded-full bg-white px-8 py-4 text-center font-bold text-[#C9252D] transition hover:bg-gray-100"
          >
            Get a Quote →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}