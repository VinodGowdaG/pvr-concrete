import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Concrete Quality & Standards | PVR Concrete",
  description:
    "Learn about PVR Concrete quality control, concrete testing, mix design, laboratory facilities and quality standards.",
};

const standards = [
  {
    code: "IS 4926",
    title: "Ready-Mixed Concrete",
    description:
      "Indian standard code of practice covering ready-mixed concrete production and supply.",
  },
  {
    code: "IS 456",
    title: "Plain & Reinforced Concrete",
    description:
      "Code of practice covering requirements for plain and reinforced concrete.",
  },
  {
    code: "IS 516",
    title: "Concrete Strength Testing",
    description:
      "Methods for testing concrete to evaluate strength characteristics.",
  },
  {
    code: "IS 1199",
    title: "Fresh Concrete Testing",
    description:
      "Guidelines for sampling and testing fresh concrete, including workability assessment.",
  },
];

const grades = [
  {
    range: "M5 – M20",
    title: "Ordinary Concrete",
    description:
      "Used for non-structural applications, basic construction and selected residential requirements.",
  },
  {
    range: "M25 – M40",
    title: "Standard Concrete",
    description:
      "Used for general residential, commercial and structural building applications.",
  },
  {
    range: "M45 – M60",
    title: "High-Performance Concrete",
    description:
      "Used for demanding structural applications, infrastructure projects and high-rise construction.",
  },
];

const team = [
  {
    number: "01",
    title: "Skilled QC Team",
    text:
      "Experienced quality-control personnel supporting testing, inspection and quality monitoring across plant operations.",
  },
  {
    number: "02",
    title: "Skilled Pump Line Labour",
    text:
      "Trained personnel supporting concrete pumping, line handling and site-level concrete placement operations.",
  },
  {
    number: "03",
    title: "20+ Transit Mixer Vehicles",
    text:
      "A fleet of more than 20 transit mixer vehicles supporting concrete transportation and project requirements.",
  },
  {
    number: "04",
    title: "Experienced Drivers",
    text:
      "Experienced drivers supporting safe and timely transportation of ready-mix concrete to project sites.",
  },
  {
    number: "05",
    title: "Skilled Boom Operators",
    text:
      "Experienced operators supporting boom-pump operations and controlled concrete placement at project locations.",
  },
  {
    number: "06",
    title: "100+ Employees",
    text:
      "A growing workforce supporting plant operations, quality control, logistics, administration and project execution.",
  },
];

const testingFacilities = [
  {
    number: "01",
    title: "Plant / Field Laboratory",
    text:
      "Laboratory facilities supporting testing and quality-control activities related to concrete production and site requirements.",
  },
  {
    number: "02",
    title: "NABL-Accredited Labs",
    text:
      "Access to accredited laboratory testing where applicable to project and quality requirements.",
  },
  {
    number: "03",
    title: "Dedicated Quality-Control Support",
    text:
      "Quality-control activities supported by trained personnel, testing equipment and plant-level monitoring.",
  },
  {
    number: "04",
    title: "Laboratory & Office Infrastructure",
    text:
      "Sufficient laboratory and office facilities supporting testing, documentation, coordination and quality-management activities.",
  },
];

const testingGallery = [
  {
    image: "/quality/sieve-analysis.png",
    title: "Sieve Analysis",
    text:
      "Aggregate particle-size distribution testing supporting material evaluation and mix-design requirements.",
  },
  {
    image: "/quality/flakiness-index-testing.png",
    title: "Flakiness Index Testing",
    text:
      "Aggregate shape assessment supporting material quality and concrete mix-design requirements.",
  },
  {
    image: "/quality/slump-cone-test.png",
    title: "Slump Cone Testing",
    text:
      "Fresh concrete workability assessment carried out as part of quality-control procedures.",
  },
  {
    image: "/quality/concrete-pumping.png",
    title: "Concrete Pumping & Site Execution",
    text:
      "Concrete placement supported by experienced site personnel, pump-line labour and boom operators.",
  },
  {
    image: "/quality/plant-qc-monitoring.png",
    title: "Plant Quality Control",
    text:
      "Plant-level monitoring and operational control supporting consistent concrete production.",
  },
  {
    image: "/quality/laboratory-customer-qc.png",
    title: "Laboratory & Customer QC",
    text:
      "Quality checks and laboratory activities carried out with customer representatives where required.",
  },
];

const mixDesignSteps = [
  {
    number: "01",
    title: "Understand the Requirement",
    text:
      "Our team visits the customer site to understand project requirements, construction conditions and concrete requirements.",
  },
  {
    number: "02",
    title: "Identify the Required Grade",
    text:
      "The required concrete grade is identified based on the customer requirement, structural design and project application.",
  },
  {
    number: "03",
    title: "Prepare the Design Mix",
    text:
      "A required design mix is prepared according to the specified grade and applicable project requirements.",
  },
  {
    number: "04",
    title: "Laboratory Testing",
    text:
      "Relevant materials and concrete parameters are assessed through appropriate laboratory testing procedures.",
  },
  {
    number: "05",
    title: "Plant Production",
    text:
      "The required mix and production parameters are followed during concrete production at the RMC plant.",
  },
  {
    number: "06",
    title: "Delivery & Site Support",
    text:
      "Concrete is transported to the project site through the RMC fleet and supported by experienced operational personnel.",
  },
];

const qualityWorkflow = [
  "Customer Requirement",
  "Site Visit",
  "Grade Selection",
  "Design Mix",
  "Laboratory Testing",
  "Plant Production",
  "QC Inspection",
  "Transit Mixer Delivery",
  "Site Placement",
];

export default function QualityPage() {
  return (
    <main className="overflow-hidden bg-white text-[#111513]">
      <Navbar />

      {/* =====================================================
          01. QUALITY HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#063B2A] pt-[150px] md:pt-[170px]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#C9252D] blur-3xl" />
          <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[#075B3C] blur-3xl" />
        </div>

        <div className="relative mx-auto grid min-h-[560px] max-w-7xl items-center gap-12 px-6 pb-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#C9252D]">
              Quality & Standards
            </p>

            <h1 className="mt-5 text-5xl font-black leading-[1] tracking-tight text-white md:text-7xl">
              Quality built
              <span className="block text-white/50">
                into every mix.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/70">
              Quality at PVR Concrete is supported by recognized Indian
              standards, laboratory testing, skilled personnel and controlled
              plant and site processes.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {["IS 4926", "ISO 9001", "RMCPCS", "IS 4031"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/quality/pvr-qc1.png"
                alt="PVR Concrete laboratory and quality control"
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-5 rounded-2xl bg-[#C9252D] p-6 text-white shadow-2xl">
              <p className="text-3xl font-black">QC</p>
              <p className="mt-1 text-sm font-semibold text-white/80">
                Quality Control
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          02. OUR QUALITY APPROACH
      ====================================================== */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C9252D]">
                Our Quality Approach
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                Consistency starts with control.
              </h2>
            </div>

            <div className="space-y-5 lg:col-span-2">
              <p className="text-lg leading-8 text-gray-600">
                Ready-mix concrete quality depends on controlled production,
                appropriate testing, experienced personnel and consistent
                processes.
              </p>

              <p className="leading-8 text-gray-600">
                At PVR Concrete, our quality approach brings together
                laboratory testing, plant-level quality control, customer
                requirements, mix-design preparation, experienced drivers,
                skilled operators and site-level support.
              </p>

              <div className="grid gap-4 pt-5 sm:grid-cols-3">
                {[
                  ["Testing", "Laboratory & field checks"],
                  ["People", "Skilled technical workforce"],
                  ["Process", "Controlled production & delivery"],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-gray-200 p-5"
                  >
                    <p className="font-black text-[#075B3C]">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          03. CERTIFICATIONS & STANDARDS
      ====================================================== */}
      <section className="bg-[#F3F3F0] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C9252D]">
              Certifications & Schemes
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Standards that support quality.
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              PVR Concrete&apos;s quality framework includes the following
              standards and quality-management references.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl bg-[#063B2A] p-8 text-white shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C9252D] text-xl font-black">
                IS
              </div>

              <h3 className="mt-7 text-2xl font-black">
                BIS / IS 4926
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/65">
                Indian standard code of practice for ready-mixed concrete
                production and supply.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#075B3C] text-sm font-black text-white">
                ISO
              </div>

              <h3 className="mt-7 text-2xl font-black">
                ISO 9001
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                Quality management system framework supporting controlled and
                consistent organizational processes.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C9252D] text-sm font-black text-white">
                RMC
              </div>

              <h3 className="mt-7 text-2xl font-black">
                RMCPCS Scheme
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                RMC capability and RMC 9000+ quality references supporting
                ready-mixed concrete quality practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          04. LABORATORY & TESTING STANDARDS
      ====================================================== */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C9252D]">
                Laboratory & Testing Standards
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                Testing with recognised standards.
              </h2>
            </div>

            <p className="max-w-md leading-7 text-gray-500">
              Testing standards provide a structured framework for assessing
              concrete quality and performance.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {standards.map((standard) => (
              <div
                key={standard.code}
                className="group rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#075B3C] hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-2xl font-black text-[#075B3C]">
                      {standard.code}
                    </p>

                    <h3 className="mt-2 text-xl font-black">
                      {standard.title}
                    </h3>
                  </div>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F3F3F0] text-[#C9252D] transition group-hover:bg-[#C9252D] group-hover:text-white">
                    →
                  </span>
                </div>

                <p className="mt-5 text-sm leading-7 text-gray-600">
                  {standard.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          05. CONCRETE GRADES
      ====================================================== */}
      <section className="bg-[#063B2A] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C9252D]">
              Concrete Grades
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Concrete solutions for different applications.
            </h2>

            <p className="mt-5 leading-8 text-white/60">
              Different concrete grades are selected according to project
              requirements, structural design and application.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {grades.map((grade, index) => (
              <div
                key={grade.range}
                className={`rounded-3xl p-8 ${
                  index === 1
                    ? "bg-[#C9252D]"
                    : "border border-white/10 bg-white/5"
                }`}
              >
                <p className="text-4xl font-black">{grade.range}</p>

                <h3 className="mt-6 text-2xl font-black">
                  {grade.title}
                </h3>

                <p
                  className={`mt-5 text-sm leading-7 ${
                    index === 1 ? "text-white/80" : "text-white/60"
                  }`}
                >
                  {grade.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs leading-6 text-white/40">
            Concrete grade availability should be confirmed with PVR Concrete
            based on the specific project requirement and current product
            offering.
          </p>
        </div>
      </section>

      {/* =====================================================
          06. OUR SKILLED TEAM & WORKFORCE
      ====================================================== */}
      <section className="bg-[#F3F3F0] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C9252D]">
              Our Team & Workforce
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Skilled people behind every delivery.
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Quality concrete depends not only on equipment and testing, but
              also on the people operating the plant, managing quality,
              transporting concrete and supporting site execution.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.number}
                className="group rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-black text-[#C9252D]">
                    {member.number}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#063B2A] text-white transition group-hover:bg-[#C9252D]">
                    →
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-black">
                  {member.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {member.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          07. LABORATORY & TESTING FACILITIES
      ====================================================== */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C9252D]">
                Laboratory & Testing Facilities
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                Testing every stage.
                <span className="block text-[#075B3C]">
                  Controlling every parameter.
                </span>
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                PVR Concrete maintains laboratory and testing facilities to
                support quality-control activities from material evaluation to
                fresh concrete and hardened concrete assessment.
              </p>

              <div className="mt-10 space-y-4">
                {testingFacilities.map((facility) => (
                  <div
                    key={facility.number}
                    className="flex gap-5 rounded-2xl border border-gray-200 p-5 transition hover:border-[#075B3C] hover:shadow-md"
                  >
                    <span className="text-sm font-black text-[#C9252D]">
                      {facility.number}
                    </span>

                    <div>
                      <h3 className="font-black">{facility.title}</h3>

                      <p className="mt-2 text-sm leading-7 text-gray-600">
                        {facility.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image
                  src="/quality/rmc-plant-equipment-landscape.png"
                  alt="RMC plant equipment"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -right-5 rounded-2xl bg-[#075B3C] p-6 text-white shadow-xl">
                <p className="text-3xl font-black">QC</p>
                <p className="mt-1 text-sm text-white/70">
                  Testing & Control
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          08. TESTING & QC GALLERY
      ====================================================== */}
      <section className="bg-[#063B2A] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C9252D]">
              Testing & QC Gallery
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Quality you can see.
            </h2>

            <p className="mt-5 leading-8 text-white/60">
              Our testing and operational activities support material
              assessment, fresh concrete checks, plant monitoring and site
              execution.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testingGallery.map((item) => (
              <div
                key={item.title}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/60">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          09. CUSTOMER-FOCUSED MIX DESIGN PROCESS
      ====================================================== */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C9252D]">
              Customer-Focused Mix Design
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              From project requirement to the right mix.
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              We work with customers to understand project requirements and
              prepare the required design mix based on the grade and application
              needed for the project.
            </p>
          </div>

          <div className="mt-14 grid gap-0 lg:grid-cols-6">
            {mixDesignSteps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="border-l border-gray-200 px-6 py-7 first:border-l-0 lg:min-h-[280px]">
                  <span className="text-sm font-black text-[#C9252D]">
                    {step.number}
                  </span>

                  <h3 className="mt-5 text-lg font-black">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {step.text}
                  </p>
                </div>

                {index < mixDesignSteps.length - 1 && (
                  <span className="absolute right-0 top-8 hidden text-xl text-[#C9252D] lg:block">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-[#F3F3F0] p-8 md:p-10">
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <p className="text-sm font-black uppercase tracking-wider text-[#C9252D]">
                  Site Visit
                </p>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Our team can visit the customer site to understand project
                  requirements.
                </p>
              </div>

              <div>
                <p className="text-sm font-black uppercase tracking-wider text-[#C9252D]">
                  Grade Selection
                </p>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Concrete grade requirements are considered before preparing
                  the required design mix.
                </p>
              </div>

              <div>
                <p className="text-sm font-black uppercase tracking-wider text-[#C9252D]">
                  Technical Support
                </p>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Our technical and QC personnel support project-specific
                  requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          10. PLANT + CUSTOMER QC INSPECTION
      ====================================================== */}
      <section className="bg-[#F3F3F0] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image
                  src="/quality/laboratory-customer-qc.png"
                  alt="Quality control inspection at laboratory"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-5 rounded-2xl bg-[#C9252D] p-6 text-white shadow-xl">
                <p className="text-2xl font-black">QC</p>
                <p className="mt-1 text-sm text-white/80">
                  Customer Involvement
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C9252D]">
                Plant + Customer QC
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                Quality checks with transparency.
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Quality-control activities are carried out at the plant with
                customer representatives where required. This allows relevant
                testing and quality procedures to be reviewed together.
              </p>

              <div className="mt-10 space-y-4">
                {[
                  {
                    title: "Plant QC",
                    text: "Quality checks carried out at the RMC plant.",
                  },
                  {
                    title: "Customer Participation",
                    text: "Customers can participate in relevant inspections and quality checks where required.",
                  },
                  {
                    title: "Documentation",
                    text: "Quality and testing activities can be coordinated according to project requirements.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-gray-200 bg-white p-6"
                  >
                    <h3 className="font-black text-[#075B3C]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-gray-600">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          11. DELIVERY & SITE EXECUTION TEAM
      ====================================================== */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C9252D]">
                Delivery & Site Execution
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                Quality continues beyond the plant.
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Concrete quality is not only about production. Transportation,
                pumping and site placement also require experienced personnel
                and coordinated operations.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  "20+ Transit Mixer Vehicles",
                  "Experienced Drivers",
                  "Skilled Boom Operators",
                  "Skilled Pump Line Labour",
                  "Site Coordination",
                  "Project Requirement Support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#C9252D] text-sm font-black text-white">
                      ✓
                    </span>

                    <span className="text-sm font-bold">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image
                  src="/quality/concrete-pumping.png"
                  alt="Concrete pumping and site execution"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute right-5 top-5 rounded-2xl bg-[#063B2A]/95 px-5 py-4 text-white backdrop-blur">
                <p className="text-2xl font-black">20+</p>
                <p className="text-xs text-white/60">
                  Transit Mixers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          12. QUALITY ASSURANCE WORKFLOW
      ====================================================== */}
      <section className="bg-[#063B2A] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C9252D]">
              Quality Assurance Workflow
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              A process designed around quality.
            </h2>

            <p className="mt-5 leading-8 text-white/60">
              From the first customer discussion to concrete placement at the
              project site, every stage requires coordination and control.
            </p>
          </div>

          <div className="mt-14 grid gap-3 md:grid-cols-3 lg:grid-cols-9">
            {qualityWorkflow.map((step, index) => (
              <div
                key={step}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-5 text-center"
              >
                <span className="text-xs font-black text-[#C9252D]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-3 text-sm font-bold leading-6 text-white/80">
                  {step}
                </p>

                {index < qualityWorkflow.length - 1 && (
                  <span className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-[#C9252D] lg:block">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="bg-[#C9252D] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/70">
                PVR Concrete
              </p>

              <h2 className="mt-3 text-3xl font-black md:text-5xl">
                Build with confidence.
              </h2>

              <p className="mt-3 max-w-xl text-white/75">
                Talk to our team about your ready-mix concrete requirements,
                project grade and site requirements.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+918880552225"
                className="rounded-full border border-white/30 px-7 py-4 text-center font-bold text-white transition hover:bg-white/10"
              >
                +91 8880552225
              </a>

              <Link
                href="/contact"
                className="rounded-full bg-white px-8 py-4 text-center font-bold text-[#C9252D] transition hover:bg-gray-100"
              >
                Get a Quote →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}