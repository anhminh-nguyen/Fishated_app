"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Navcomic() {
  const router = useRouter();

  return (
    <>
      {/* Desktop Sidebar */}
      <nav
        className={`fixed left-0 top-0 z-[100] h-screen bg-white/90 backdrop-blur-xl border-r border-neutral-200 flex flex-col items-center py-10 transition-all duration-500 ease-in-out hidden md:flex w-[100px]`}
      >
        <button
          onClick={() => router.push("/")}
          className="mb-12 hover:scale-110 transition-transform active:scale-95"
        >
          <Image
            className="h-14 w-14 rounded-2xl border border-neutral-200 shadow-2xl bg-white"
            src="/images/favicon.png"
            alt="Fishated"
            width={80}
            height={80}
          />
        </button>

        <div className="flex flex-col gap-10 items-center">
          <button
            title="Trang chủ"
            className="p-4 rounded-2xl bg-neutral-100 text-neutral-500 hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-orange-500/20"
            onClick={() => router.push("/")}
            type="button"
          >
            <i className="fi fi-rr-house-blank text-2xl" />
          </button>

          <button
            title="Khám phá"
            className="p-4 rounded-2xl bg-neutral-100 text-neutral-500 hover:bg-neutral-200 transition-all duration-300"
            disabled
            type="button"
          >
            <i className="fi fi-rr-search text-2xl" />
          </button>

          <button
            title="Yêu thích"
            className="p-4 rounded-2xl bg-neutral-100 text-neutral-500 hover:bg-neutral-200 transition-all duration-300"
            disabled
            type="button"
          >
            <i className="fi fi-rr-heart text-2xl" />
          </button>
        </div>

        <div className="mt-auto">
          <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-xl shadow-lg shadow-orange-500/20 ring-4 ring-orange-500/10">
            F
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] md:hidden">
        <div className="bg-white/95 backdrop-blur-2xl px-6 py-4 border-t border-neutral-200 flex items-center justify-around pb-8">
          <button
            onClick={() => router.push("/")}
            className="flex flex-col items-center gap-1 text-neutral-500 hover:text-orange-500 transition-colors"
          >
            <i className="fi fi-rr-house-blank text-2xl" />
            <span className="text-[10px] font-bold uppercase tracking-tighter text-neutral-400">Home</span>
          </button>
          
          <button
            className="flex flex-col items-center gap-1 text-neutral-500"
            disabled
          >
            <i className="fi fi-rr-search text-2xl" />
            <span className="text-[10px] font-bold uppercase tracking-tighter text-neutral-400">Search</span>
          </button>

          <div className="relative -top-8">
            <button
               onClick={() => router.push("/")}
               className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-2xl shadow-orange-500/40 ring-8 ring-white"
            >
              <i className="fi fi-rr-apps text-2xl" />
            </button>
          </div>

          <button
            className="flex flex-col items-center gap-1 text-neutral-500"
            disabled
          >
            <i className="fi fi-rr-heart text-2xl" />
            <span className="text-[10px] font-bold uppercase tracking-tighter text-neutral-400">Saved</span>
          </button>

          <button
            className="flex flex-col items-center gap-1 text-neutral-500"
            disabled
          >
            <i className="fi fi-rr-user text-2xl" />
            <span className="text-[10px] font-bold uppercase tracking-tighter text-neutral-400">Profile</span>
          </button>
        </div>
      </div>
    </>
  );
}
