"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const applications = [
  {
    number: "01",
    title: "Residential Construction",
    description:
      "Ready Mix Concrete solutions for homes, apartments and residential developments.",
  },
  {
    number: "02",
    title: "Commercial Construction",
    description:
      "Concrete solutions supporting commercial buildings and development projects.",
  },
  {
    number: "03",
    title: "Infrastructure",
    description:
      "RMC solutions for construction requirements across infrastructure projects.",
  },
  {
    number: "04",
    title: "Industrial Construction",
    description:
      "Concrete solutions for industrial facilities, warehouses and manufacturing units.",
  },
  {
    number: "05",
    title: "Roads & Highways",
    description:
      "Ready Mix Concrete solutions for roadways, highways and transportation projects.",
  },
  {
    number: "06",
    title: "Bridges & Flyovers",
    description:
      "Ready Mix Concrete solutions for bridge construction and flyover projects.",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white text-[#111513]">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#063b2a] pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(209,40,48,0.25),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#d12830]">
              Our Product
            </p>

            <h1 className="mt-5 text-5xl font-black leading-tight text-white md:text-6xl lg:text-7xl">
              Ready Mix Concrete.
              <span className="block text-[#d12830]">
                Built for your project.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              PVR Concrete provides Ready Mix Concrete solutions for a wide
              range of construction requirements, backed by more than 20 years
              of experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Product */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-[2rem]"
          >
            <Image
              src="/products/pvr-mixer-truck.png"
              alt="Ready Mix Concrete construction"
              width={1200}
              height={800}
              className="h-[520px] w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex rounded-full bg-[#063b2a] px-4 py-2 text-xs font-bold uppercase tracking-widest text-white">
              RMC
            </div>

            <h2 className="mt-5 text-4xl font-black leading-tight text-[#063b2a] md:text-5xl">
              Ready Mix Concrete
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Ready Mix Concrete is the core product offered by PVR Concrete,
              providing a practical and consistent solution for construction
              projects.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              With more than two decades of experience and 2500+ completed
              projects, PVR Concrete serves different construction
              requirements with a focus on dependable concrete supply.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#f3f3f0] p-5">
                <p className="font-bold text-[#063b2a]">
                  Project Focused
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Solutions suited to different construction requirements.
                </p>
              </div>

              <div className="rounded-2xl bg-[#f3f3f0] p-5">
                <p className="font-bold text-[#063b2a]">
                  Industry Experience
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  More than 20 years of practical experience.
                </p>
              </div>

              <div className="rounded-2xl bg-[#f3f3f0] p-5">
                <p className="font-bold text-[#063b2a]">
                  Dependable Supply
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Consistent and reliable concrete supply for projects.
                </p>
              </div>
              <div className="rounded-2xl bg-[#f3f3f0] p-5">
                <p className="font-bold text-[#063b2a]">
                  Quality Assurance
                </p>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Quality control and testing to ensure concrete meets project standards.
                </p>
              </div>
            </div>
            

          </motion.div>
        </div>
      </section>

      {/* Applications */}
      <section className="bg-[#f3f3f0] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#d12830]">
              Applications
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#063b2a] md:text-5xl">
              Concrete solutions for different construction needs.
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              PVR Concrete&apos;s RMC solutions can support a broad range of
              construction projects.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {applications.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="text-sm font-black text-[#d12830]">
                  {item.number}
                </span>

                <h3 className="mt-8 text-xl font-black text-[#063b2a]">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why RMC */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-2">

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#d12830]">
              Why Ready Mix Concrete
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#063b2a] md:text-5xl">
              A practical approach to modern construction.
            </h2>
          </div>

          <div className="space-y-5">
            {[
              [
                "01",
                "Consistent Supply",
                "Ready Mix Concrete provides a structured approach to supplying concrete for construction requirements.",
              ],
              [
                "02",
                "Project Efficiency",
                "Using RMC can help construction teams streamline concrete requirements at the project site.",
              ],
              [
                "03",
                "Experienced Supplier",
                "PVR Concrete brings more than 20 years of experience and 2500+ completed projects.",
              ],
            ].map(([number, title, description]) => (
              <motion.div
                key={number}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-gray-200 p-6"
              >
                <div className="flex gap-5">
                  <span className="font-black text-[#d12830]">
                    {number}
                  </span>

                  <div>
                    <h3 className="font-black text-[#063b2a]">
                      {title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#d12830] px-8 py-16 text-white md:px-16">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/70">
                Need RMC?
              </p>

              <h2 className="mt-4 max-w-2xl text-4xl font-black md:text-5xl">
                Let&apos;s discuss your project.
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-white/80">
                Contact PVR Concrete for your Ready Mix Concrete requirements.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+916363336313"
                className="rounded-full bg-white px-7 py-4 text-sm font-bold text-[#d12830] transition hover:bg-gray-100"
              >
                Call Us
              </a>

              <a
                href="https://wa.me/916363336313"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/40 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </main>
  );
}