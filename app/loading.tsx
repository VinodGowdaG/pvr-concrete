import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center">

        {/* PVR Concrete Logo */}
        <div className="mb-8">
          <Image
            src="/logo/pvr-concrete-logo1.png"
            alt="PVR Concrete"
            width={210}
            height={90}
            priority
            className="h-auto w-[180px] object-contain"
          />
        </div>

        {/* Construction Worker */}
        <div className="relative flex h-20 w-20 items-center justify-center">

          {/* Helmet */}
          <div className="absolute top-1 h-5 w-11 rounded-t-full bg-[#F4A300]" />
          <div className="absolute top-5 h-2 w-14 rounded-full bg-[#F4A300]" />

          {/* Head */}
          <div className="absolute top-6 h-7 w-7 rounded-full bg-[#F2B38F]" />

          {/* Body */}
          <div className="absolute bottom-1 h-10 w-11 rounded-t-xl bg-[#F4A300]" />

          {/* Safety Vest */}
          <div className="absolute bottom-2 h-8 w-7 rounded-t-md bg-[#075B3C]">
            <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-white" />
          </div>

          {/* Arms */}
          <div className="absolute bottom-3 left-1 h-3 w-5 rotate-[-20deg] rounded-full bg-[#F2B38F]" />
          <div className="absolute bottom-3 right-1 h-3 w-5 rotate-[20deg] rounded-full bg-[#F2B38F]" />
        </div>

        {/* Loading Bar */}
        <div className="mt-8 h-1.5 w-32 overflow-hidden rounded-full bg-gray-200">
          <div className="h-full w-1/2 animate-[pvr-loading_1.3s_ease-in-out_infinite] rounded-full bg-[#C9252D]" />
        </div>

        {/* Loading Text */}
        <p className="mt-4 text-xs font-semibold tracking-[0.35em] text-[#063B2A]">
          LOADING
        </p>

      </div>
    </div>
  );
}