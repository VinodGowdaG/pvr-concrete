"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const highlights = [
  {
    number: "12+",
    title: "Years of Experience",
    description:
      "More than 12 years of experience in the Ready Mix Concrete industry.",
  },
  {
    number: "2500+",
    title: "Projects",
    description:
      "Experience built through concrete solutions delivered across diverse construction requirements.",
  },
  {
    number: "20+",
    title: "RMC Trucks",
    description:
      "A growing fleet supporting reliable concrete transportation and project requirements.",
  },
  {
    number: "02",
    title: "RMC Plants",
    description:
      "Company-owned RMC plants located in Jigani and Kumbalgodu, Bengaluru.",
  },
  {
    number: "100+",
    title: "Employees",
    description:
      "A growing team working across operations, plant management, quality and project support.",
  },
  {
    number: "01",
    title: "Quality Focus",
    description:
      "QualityReady Mix Concrete solutions for construction requirements.",
  },
];

const milestones = [
  {
    number: "01",
    title: "The Beginning",
    subtitle: "12+ Years Ago",
    description:
      "PVR Concrete began its journey with a focus on building a dependable presence in the Ready Mix Concrete industry.",
  },
  {
    number: "02",
    title: "Building Trust",
    subtitle: "Early Growth",
    description:
      "The business grew through consistent operations, project experience and long-term relationships.",
  },
  {
    number: "03",
    title: "Jigani Plant",
    subtitle: "Expanding Operations",
    description:
      "The Jigani RMC plant became an important part of PVR Concrete's growing operational network.",
  },
  {
    number: "04",
    title: "Growing the Fleet",
    subtitle: "20+ RMC Trucks",
    description:
      "The company expanded its fleet to more than 20 RMC trucks to support increasing project requirements.",
  },
  {
    number: "05",
    title: "Second Plant",
    subtitle: "Kumbalgodu",
    description:
      "PVR Concrete expanded its operations with a second company-owned RMC plant in Kumbalgodu.",
  },
  {
    number: "06",
    title: "Growing Team",
    subtitle: "100+ Employees",
    description:
      "The organization continued to grow with a workforce of more than 100 employees across its operations.",
  },
  {
    number: "07",
    title: "PVR Concrete Today",
    subtitle: "Growing Forward",
    description:
      "Today, PVR Concrete continues to expand its capabilities and serve construction requirements across Bengaluru and Karnataka.",
  },
];

const plants = [
  {
    name: "Jigani RMC Plant",
    location: "Jigani, Bengaluru",
    address:
      "Sy No. 20, Vaderamanchenahalli, H, Konasandra, Kallabalu (P), Jigani, Bengaluru, Karnataka - 560106.",
  },
  {
    name: "Kumbalgodu RMC Plant",
    location: "Kumbalgodu, Bengaluru",
    address:
      "Sy No.165, Gerupalya Village, Ondane Mailikallu, Ramohalli Road, Kumbalgodu, Bengaluru Urban, Karnataka - 560074.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#111513]">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#063b2a] pt-[150px] md:pt-[170px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(209,40,48,0.28),transparent_35%)]" />

        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#d12830]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl"
          >
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#d12830]">
              About PVR Concrete
            </p>

            <h1 className="mt-5 text-5xl font-black leading-[0.95] text-white md:text-7xl lg:text-8xl">
              Building trust.
              <span className="block text-[#d12830]">
                Delivering strength.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/70 md:text-xl">
              PVR Concrete is a Ready Mix Concrete business built around
              experience, growing infrastructure and a commitment to serving
              construction requirements with dependable concrete solutions.
            </p>
          </motion.div>

          {/* Hero Stats */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              ["12+", "Years Experience"],
              ["2500+", "Projects"],
              ["20+", "RMC Trucks"],
              ["2", "Company-Owned Plants"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
              >
                <p className="text-3xl font-black text-white">{number}</p>
                <p className="mt-1 text-sm text-white/60">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#d12830]">
              Who We Are
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight text-[#063b2a] md:text-5xl">
              Experience that keeps moving forward.
            </h2>

            <div className="mt-7 space-y-5 text-gray-600">
              <p className="leading-8">
                PVR Concrete is a Ready Mix Concrete business based in
                Bengaluru, Karnataka, with a growing operational presence
                across the region.
              </p>

              <p className="leading-8">
                With more than 12 years of experience and over 2500 projects,
                the company has grown from its early beginnings into an
                organization supported by two company-owned RMC plants, more
                than 20 RMC trucks and a workforce of over 100 employees.
              </p>

              <p className="leading-8">
                Our focus remains on Ready Mix Concrete and building the
                infrastructure, team and operational capabilities required to
                support construction projects.
              </p>
            </div>

            <Link
              href="/products"
              className="mt-8 inline-flex rounded-full bg-[#d12830] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#b91f27]"
            >
              Explore Our Products →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2rem]"
          >
            <Image
              src="/about/pvr-plant.png"
              alt="PVR Concrete RMC plant"
              width={1400}
              height={900}
              className="h-[520px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#063b2a]/90 via-transparent to-transparent" />

            <div className="absolute bottom-8 left-8">
              <p className="text-sm font-bold uppercase tracking-widest text-[#d12830]">
                PVR Concrete
              </p>

              <p className="mt-2 text-3xl font-black text-white">
                Smarter Mixing.
                <br />
                Stronger Foundations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NUMBERS */}
      <section className="bg-[#f3f3f0] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#d12830]">
              PVR By The Numbers
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#063b2a] md:text-5xl">
              A growing organization built around concrete.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-5xl font-black text-[#d12830]">
                  {item.number}
                </p>

                <h3 className="mt-7 text-xl font-black text-[#063b2a]">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="overflow-hidden rounded-[2.5rem] bg-[#063b2a]">
          <div className="grid lg:grid-cols-[0.75fr_1.25fr]">
            {/* Founder Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative min-h-[360px] bg-[#075b3c]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(209,40,48,0.35),transparent_45%)]" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-48 w-48 items-center justify-center rounded-full border border-white/20 bg-white/10 text-7xl font-black text-white backdrop-blur-sm">
                  RP
                </div>
              </div>

              <div className="absolute bottom-8 left-8">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#d12830]">
                  Founder & Owner
                </p>

                <p className="mt-2 text-2xl font-black text-white">
                  R. Purushotham
                </p>
              </div>
            </motion.div>

            {/* Founder Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="p-8 md:p-12 lg:p-16"
            >
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#d12830]">
                The Person Behind PVR
              </p>

              <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
                Growing a business with a long-term vision.
              </h2>

              <p className="mt-7 leading-8 text-white/65">
                R. Purushotham is the founder and owner of PVR Concrete. He
                started the business with a vision to build a dependable and
                growing presence in the Ready Mix Concrete industry.
              </p>

              <p className="mt-5 leading-8 text-white/65">
                With more than 12 years of experience in the field, he has
                guided the company from its early beginnings into an expanding
                organization with two company-owned RMC plants, a fleet of more
                than 20 RMC trucks and a workforce of over 100 employees.
              </p>

              <p className="mt-5 leading-8 text-white/65">
                His focus on business growth, operational development and
                long-term relationships has played an important role in shaping
                PVR Concrete&apos;s journey and continuing expansion.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MILESTONES */}
      <section className="bg-[#f3f3f0] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#d12830]">
              Our Journey
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#063b2a] md:text-5xl">
              From the beginning to where we are today.
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              PVR Concrete&apos;s journey has been shaped by continuous
              expansion, growing infrastructure and experience in the Ready
              Mix Concrete industry.
            </p>
          </div>

          <div className="relative mx-auto mt-16 max-w-5xl">
            {/* Timeline line */}
            <div className="absolute left-[19px] top-0 hidden h-full w-px bg-[#d12830]/20 md:block" />

            <div className="space-y-10">
              {milestones.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative flex gap-6"
                >
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d12830] text-xs font-black text-white shadow-lg">
                    {item.number}
                  </div>

                  <div className="flex-1 rounded-3xl bg-white p-7 shadow-sm">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d12830]">
                      {item.subtitle}
                    </p>

                    <h3 className="mt-2 text-2xl font-black text-[#063b2a]">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-3xl leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PLANTS */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#d12830]">
              Our Infrastructure
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#063b2a] md:text-5xl">
              Two company-owned RMC plants.
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              PVR Concrete operates two company-owned Ready Mix Concrete
              plants in Bengaluru, supporting the company&apos;s growing
              operational capabilities.
            </p>

            <div className="mt-8 space-y-4">
              {plants.map((plant, index) => (
                <motion.div
                  key={plant.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl border border-gray-200 bg-[#f8f8f6] p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#063b2a] text-sm font-black text-white">
                      0{index + 1}
                    </div>

                    <div>
                      <h3 className="text-lg font-black text-[#063b2a]">
                        {plant.name}
                      </h3>

                      <p className="mt-1 text-sm font-semibold text-[#d12830]">
                        {plant.location}
                      </p>

                      <p className="mt-3 text-sm leading-6 text-gray-600">
                        {plant.address}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2rem]"
          >
            <Image
              src="/about/pvr-plant1.png"
              alt="PVR Concrete RMC truck"
              width={1400}
              height={900}
              className="h-[560px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#063b2a]/90 via-transparent to-transparent" />

            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-sm font-bold uppercase tracking-widest text-[#d12830]">
                Growing Capability
              </p>

              <p className="mt-2 text-3xl font-black text-white">
                20+ RMC trucks supporting our operations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VISION / MISSION */}
      <section className="bg-[#063b2a] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10"
            >
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#d12830]">
                Our Vision
              </p>

              <h2 className="mt-5 text-3xl font-black text-white md:text-4xl">
                Build a stronger future through continuous growth.
              </h2>

              <p className="mt-5 leading-8 text-white/60">
                To continue growing PVR Concrete&apos;s capabilities,
                infrastructure and presence while building lasting
                relationships within the construction industry.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-[2rem] bg-[#d12830] p-8 md:p-10"
            >
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/70">
                Our Mission
              </p>

              <h2 className="mt-5 text-3xl font-black text-white md:text-4xl">
                Deliver dependable concrete solutions.
              </h2>

              <p className="mt-5 leading-8 text-white/75">
                To strengthen our operations, people and infrastructure while
                serving construction requirements with dependable Ready Mix
                Concrete solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#f3f3f0] px-8 py-16 text-center md:px-16">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#d12830]">
            Let&apos;s Build Together
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black text-[#063b2a] md:text-5xl">
            Looking for reliable Ready Mix Concrete?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
            Get in touch with PVR Concrete to discuss your construction
            requirements.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+918880552225"
              className="rounded-full bg-[#d12830] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#b91f27]"
            >
              Call +91 88805 52225
            </a>

            <a
              href="https://wa.me/918880552225"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#063b2a]/20 px-7 py-4 text-sm font-bold text-[#063b2a] transition hover:bg-[#063b2a] hover:text-white"
            >
              WhatsApp Us
            </a>

            <a
              href="mailto:pvrconcreteblr@gmail.com"
              className="rounded-full border border-[#063b2a]/20 px-7 py-4 text-sm font-bold text-[#063b2a] transition hover:bg-[#063b2a] hover:text-white"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}