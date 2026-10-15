import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Projects", href: "/projects" },
  { name: "Quality", href: "/quality" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#C9252D]/40 bg-[#0C1210] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr_1.4fr_0.8fr]">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <div className="text-3xl font-black tracking-tight">
                <span className="text-[#C9252D]">PVR</span>{" "}
                <span className="text-white">CONCRETE</span>
              </div>
            </Link>

            <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#C9252D]">
              Smarter Mixing. Stronger Foundations.
            </p>

            <p className="mt-6 max-w-sm text-sm leading-6 text-gray-400">
              PVR Concrete provides Ready Mix Concrete solutions for
              construction projects across Bengaluru and surrounding areas.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-300">
                12+ Years Experience
              </span>

              <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-300">
                2500+ Projects
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-[#C9252D]">
              Quick Links
            </h3>

            <div className="mt-5 space-y-2.5">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-gray-400 transition hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* RMC Plants */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-[#C9252D]">
              RMC Plants
            </h3>

            <div className="mt-5 space-y-5 text-sm">

              {/* Plant 1 */}
              <div>
                <p className="font-semibold text-white">
                  RMC Plant 1 — Jigani
                </p>

                <p className="mt-1.5 max-w-md leading-6 text-gray-400">
                  Sy No. 20, Vaderamanchenahalli, H, Konasandra,
                  Kallabalu (P), Jigani, Bengaluru, Karnataka – 560106
                </p>
              </div>

              {/* Plant 2 */}
              <div>
                <p className="font-semibold text-white">
                  RMC Plant 2 — Kumbalgodu
                </p>

                <p className="mt-1.5 max-w-md leading-6 text-gray-400">
                  Sy No. 165, Gerupalya Village, Ondane Mailikallu,
                  Ramohalli Road, Kumbalgodu, Bengaluru Urban,
                  Karnataka – 560074
                </p>
              </div>

            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-[#C9252D]">
              Contact
            </h3>

            <div className="mt-5 space-y-4 text-sm">

              <div>
                <p className="font-semibold text-white">Phone</p>

                <a
                  href="tel:+918880552225"
                  className="mt-1.5 block text-gray-400 transition hover:text-white"
                >
                  +91 8880552225
                </a>
              </div>

              <div>
                <p className="font-semibold text-white">Email</p>

                <a
                  href="mailto:pvrconcreteblr@gmail.com"
                  className="mt-1.5 block break-all text-gray-400 transition hover:text-white"
                >
                  pvrconcreteblr@gmail.com
                </a>
              </div>

              <div>
                <p className="font-semibold text-white">WhatsApp</p>

                <a
                  href="https://wa.me/918880552225"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1.5 block text-gray-400 transition hover:text-white"
                >
                  Chat with us →
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">

            <p>
              © {new Date().getFullYear()} PVR Concrete. All rights reserved.
            </p>

            <p>
              Website designed & developed by{" "}
              <a
                href="https://vinodgowda-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-gray-300 transition hover:text-white"
              >
                Vinodgowda G
              </a>
            </p>

          </div>
        </div>

      </div>
    </footer>
  );
}