"use client";

import { motion } from "motion/react";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/918880552225"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with PVR Concrete on WhatsApp"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-black/20"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7 fill-current"
        aria-hidden="true"
      >
        <path d="M19.11 17.19c-.27-.14-1.61-.79-1.86-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.03-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.98 2.64 1.11 2.82c.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.57.66.21 1.27.18 1.75.11.53-.08 1.61-.66 1.84-1.3.23-.64.23-1.18.16-1.3-.07-.11-.25-.18-.52-.32z" />
        <path d="M16.02 3.2c-7.07 0-12.82 5.75-12.82 12.82 0 2.26.59 4.46 1.72 6.4L3.1 28.8l6.53-1.71a12.76 12.76 0 0 0 6.39 1.72h.01c7.07 0 12.82-5.75 12.82-12.82S23.1 3.2 16.02 3.2zm0 23.5h-.01a10.64 10.64 0 0 1-5.43-1.48l-.39-.23-3.88 1.02 1.04-3.78-.25-.4a10.65 10.65 0 1 1 8.92 4.87z" />
      </svg>
    </motion.a>
  );
}