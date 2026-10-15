"use client";

import { FormEvent, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const company = formData.get("company")?.toString() || "";
    const location = formData.get("location")?.toString() || "";
    const projectType = formData.get("projectType")?.toString() || "";
    const concreteGrade = formData.get("concreteGrade")?.toString() || "";
    const quantity = formData.get("quantity")?.toString() || "";
    const message = formData.get("message")?.toString() || "";

    const whatsappMessage = `
*PVR CONCRETE - QUOTE REQUEST*

*Name:* ${name}
*Phone:* ${phone}
*Company:* ${company || "Not provided"}
*Project Location:* ${location}
*Project Type:* ${projectType}
*Concrete Grade:* ${concreteGrade || "Not specified"}
*Estimated Quantity:* ${quantity || "Not specified"}

*Additional Requirements:*
${message || "None"}

I would like to enquire about Ready Mix Concrete from PVR Concrete.
    `.trim();

    const whatsappUrl = `https://wa.me/916363336313?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    setSubmitted(true);

    window.open(whatsappUrl, "_blank");

    form.reset();
  }

  return (
    <main className="overflow-hidden bg-white text-[#111513]">
      <Navbar />

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#063B2A] pt-[210px] md:pt-[220px]">
        <div className="absolute inset-0">
          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#C9252D]/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#075B3C] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-20 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#C9252D]">
              Contact PVR Concrete
            </p>

            <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-tight text-white md:text-7xl">
              Let&apos;s build
              <span className="block text-white/40">
                something strong.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              Looking for reliable Ready Mix Concrete for your next project?
              Talk to the PVR Concrete team for project requirements,
              availability and quotations.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="tel:+918880552225"
                className="rounded-full bg-[#C9252D] px-7 py-4 font-bold text-white transition hover:bg-red-700"
              >
                Call Us →
              </a>

              <a
                href="https://wa.me/918880552225"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 bg-white/5 px-7 py-4 font-bold text-white transition hover:bg-white/10"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT CARDS
      ====================================================== */}
      <section className="relative z-10 -mt-8 pb-20">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <a
            href="tel:+918880552225"
            className="group rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/5 transition hover:-translate-y-1"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F3F3F0] text-xl">
              ☎
            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-wider text-gray-400">
              Primary Phone
            </p>

            <p className="mt-2 font-black text-[#075B3C]">
              +91 88805 52225
            </p>
          </a>

          <a
            href="tel:+918884433084"
            className="group rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/5 transition hover:-translate-y-1"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F3F3F0] text-xl">
              ☎
            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-wider text-gray-400">
              Alternate Phone
            </p>

            <p className="mt-2 font-black text-[#075B3C]">
              +91 88844 33084
            </p>
          </a>

          <a
            href="https://wa.me/918880552225"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl bg-[#075B3C] p-6 text-white shadow-xl transition hover:-translate-y-1"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-xl">
              W
            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-wider text-white/50">
              WhatsApp
            </p>

            <p className="mt-2 font-black">
              Chat with our team →
            </p>
          </a>

          <a
            href="mailto:pvrconcreteblr@gmail.com"
            className="group rounded-2xl bg-[#C9252D] p-6 text-white shadow-xl transition hover:-translate-y-1"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-xl">
              @
            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-wider text-white/60">
              Email
            </p>

            <p className="mt-2 break-all font-black">
              pvrconcreteblr@gmail.com
            </p>
          </a>
        </div>
      </section>

      {/* =====================================================
          QUOTE FORM
      ====================================================== */}
      <section className="pb-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          {/* LEFT */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C9252D]">
              Get a Quote
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Tell us about your project.
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Share your basic project requirements and our team can connect
              with you regarding your Ready Mix Concrete requirement.
            </p>

            <div className="mt-10 rounded-3xl bg-[#063B2A] p-8 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C9252D]">
                PVR Concrete
              </p>

              <h3 className="mt-4 text-2xl font-black">
                Smarter Mixing.
                <br />
                Stronger Foundations.
              </h3>

              <div className="mt-8 space-y-5 text-sm text-white/70">
                <div>
                  <p className="font-bold text-white">
                    RMC Plant 1
                  </p>

                  <p className="mt-1 leading-6">
                    Sy No. 20, Vaderamanchenahalli, H,
                    Konasandra, Kallabalu (P),
                    Jigani, Bengaluru,
                    Karnataka - 560106
                  </p>

                  <p className="font-bold text-white">
                    RMC Plant 2
                  </p>

                  <p className="mt-1 leading-6">
                    Sy No.165, Gerupalya Village,Ondane Mailikallu,
                    Ramohalli Road, Kumbalgodu,
                    Bengaluru Urban, Karnataka 560074
                  </p>
                </div>

                <div>
                  <p className="font-bold text-white">
                    Email
                  </p>

                  <p className="mt-1">
                    pvrconcreteblr@gmail.com
                  </p>
                </div>

                <div>
                  <p className="font-bold text-white">
                    Phone
                  </p>

                  <p className="mt-1">
                    +91 88805 52225
                  </p>
                  <p className="mt-1">
                    +91 88844 33084
                    </p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl md:p-9">
            <div className="mb-8">
              <p className="text-2xl font-black">
                Request a quotation
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Fill in the details below. Your enquiry will open in WhatsApp
                for quick communication.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold">
                    Full Name *
                  </label>

                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition focus:border-[#075B3C] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold">
                    Phone Number *
                  </label>

                  <input
                    required
                    name="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition focus:border-[#075B3C] focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold">
                    Company / Organization
                  </label>

                  <input
                    name="company"
                    type="text"
                    placeholder="Company name"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition focus:border-[#075B3C] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold">
                    Project Location *
                  </label>

                  <input
                    required
                    name="location"
                    type="text"
                    placeholder="Project location"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition focus:border-[#075B3C] focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold">
                    Project Type *
                  </label>

                  <select
                    required
                    name="projectType"
                    defaultValue=""
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition focus:border-[#075B3C] focus:bg-white"
                  >
                    <option value="" disabled>
                      Select project type
                    </option>

                    <option value="Residential">
                      Residential
                    </option>

                    <option value="Commercial">
                      Commercial
                    </option>

                    <option value="Industrial">
                      Industrial
                    </option>

                    <option value="Infrastructure">
                      Infrastructure
                    </option>

                    <option value="Institutional">
                      Institutional
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold">
                    Concrete Grade
                  </label>

                  <select
                    name="concreteGrade"
                    defaultValue=""
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition focus:border-[#075B3C] focus:bg-white"
                  >
                    <option value="">
                      Select grade
                    </option>

                    <option value="M5 – M20">
                      M5 – M20
                    </option>

                    <option value="M25 – M40">
                      M25 – M40
                    </option>

                    <option value="M45 – M60">
                      M45 – M60
                    </option>

                    <option value="Not Sure">
                      Not Sure
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  Estimated Concrete Quantity
                </label>

                <input
                  name="quantity"
                  type="text"
                  placeholder="Example: 100 m³"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition focus:border-[#075B3C] focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold">
                  Additional Requirements
                </label>

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us anything else about your project..."
                  className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition focus:border-[#075B3C] focus:bg-white"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#C9252D] px-6 py-4 font-black text-white transition hover:bg-red-700"
              >
                Send Quote Request via WhatsApp →
              </button>

              {submitted && (
                <div className="rounded-xl bg-green-50 p-4 text-sm font-semibold text-green-700">
                  Your enquiry has been prepared. WhatsApp should open in a
                  new tab.
                </div>
              )}

              <p className="text-center text-xs leading-5 text-gray-400">
                By submitting this form, your enquiry details will be
                transferred to WhatsApp to contact PVR Concrete.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* =====================================================
          GOOGLE MAPS
      ====================================================== */}
      <section className="bg-[#F3F3F0] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C9252D]">
                Find Our Plant
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                Visit PVR Concrete.
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Our RMC plant is located at Jigani, Bengaluru, Karnataka.
              </p>

              <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  RMC Plant Address
                </p>

                <p className="mt-3 leading-7 font-semibold text-gray-800">
                  Sy No. 20, Vaderamanchenahalli, H,
                  Konasandra, Kallabalu (P),
                  Jigani, Bengaluru,
                  Karnataka - 560106
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Sy+No.+20%2C+Vaderamanchenahalli%2C+Konasandra%2C+Kallabalu%2C+Jigani%2C+Bengaluru%2C+Karnataka+560106"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex rounded-full bg-[#075B3C] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#063B2A]"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>

            <div className="min-h-[450px] overflow-hidden rounded-3xl bg-gray-200 shadow-xl">
              <iframe
                title="PVR Concrete RMC Plant Location"
                src="https://www.google.com/maps?q=Sy+No.+20,+Vaderamanchenahalli,+Konasandra,+Kallabalu,+Jigani,+Bengaluru,+Karnataka+560106&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "450px" }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
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
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/60">
                Ready to Build?
              </p>

              <h2 className="mt-3 text-3xl font-black md:text-5xl">
                Let&apos;s talk concrete.
              </h2>

              <p className="mt-3 max-w-xl text-white/75">
                Get in touch with PVR Concrete for your next construction
                project.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+916363336313"
                className="rounded-full bg-white px-7 py-4 font-black text-[#C9252D] transition hover:bg-gray-100"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/916363336313"
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

      <Footer />
    </main>
  );
}