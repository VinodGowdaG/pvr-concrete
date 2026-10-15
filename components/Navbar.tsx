"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Projects", href: "/projects" },
  { name: "Quality", href: "/quality" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <nav className="mx-auto max-w-7xl px-6 py-5 lg:px-8">
        <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#063B2A]/80 px-4 py-3 shadow-lg backdrop-blur-xl">
          
          {/* Logo */}
          <Link
            href="/"
            className="relative z-10 flex items-center"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/logo/pvr-concrete-logo.png"
              alt="PVR Concrete"
              width={180}
              height={75}
              priority
              className="h-auto w-[145px] object-contain sm:w-[165px]"
            />
          </Link>

          {/* Desktop Navigation */}
<div className="hidden shrink-0 items-center gap-1 lg:flex">
  {navItems.map((item) => (
    <Link
      key={item.name}
      href={item.href}
      className="whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white xl:px-4"
    >
      {item.name}
    </Link>
  ))}
</div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="rounded-full bg-[#C9252D] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#a91e25] hover:shadow-lg"
            >
              Get a Quote →
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
          >
            <div className="space-y-1.5">
              <motion.span
                animate={
                  menuOpen
                    ? { rotate: 45, y: 6 }
                    : { rotate: 0, y: 0 }
                }
                className="block h-0.5 w-5 bg-white"
              />

              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-0.5 w-5 bg-white"
              />

              <motion.span
                animate={
                  menuOpen
                    ? { rotate: -45, y: -6 }
                    : { rotate: 0, y: 0 }
                }
                className="block h-0.5 w-5 bg-white"
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-[#063B2A]/95 shadow-xl backdrop-blur-xl lg:hidden"
            >
              <div className="p-3">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block rounded-xl px-4 py-3 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 block rounded-xl bg-[#C9252D] px-4 py-3 text-center text-sm font-bold text-white"
                >
                  Get a Quote →
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}