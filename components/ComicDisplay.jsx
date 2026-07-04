"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Navcomic from "@/components/Navcomic";

export default function ComicDisplay({ value, chapter, id, chapterNumber, chapterList,title }) {
  const router = useRouter();
  
  // Find current index in chapterList (if it exists)
  const currentIndex = chapterList && chapterList.length > 0 
    ? chapterList.findIndex(c => String(c) === String(chapter))
    : parseInt(chapter) - 1; // Fallback for comics without chapterList

  const hasPrev = currentIndex > 0;
  const hasNext = chapterList && chapterList.length > 0 
    ? currentIndex < chapterList.length - 1
    : currentIndex < chapterNumber - 1;

  const prevChapter = hasPrev 
    ? (chapterList && chapterList.length > 0 ? chapterList[currentIndex - 1] : (currentIndex).toString()) 
    : null;
    
  const nextChapter = hasNext 
    ? (chapterList && chapterList.length > 0 ? chapterList[currentIndex + 1] : (currentIndex + 2).toString()) 
    : null;

  return (
    <div className="bg-[#121212] min-h-screen text-neutral-300 font-inter transition-colors duration-500">
      <Navcomic switchOn="block" comicName={id} />

      <main className="ml-0 md:ml-[100px] flex flex-col items-center">
        {/* Reader Header */}
        <div className="w-full max-w-4xl px-4 py-8 md:py-12 flex flex-col items-center gap-4">
          <div className="bg-orange-500/10 border border-orange-500/20 px-6 py-2 rounded-full">
            <span className="text-orange-500 font-black tracking-widest uppercase text-md">
              Reading Chapter {chapter.toString().padStart(2, "0")}
            </span>
          </div>
          <h1 className="text-2xl md:text-6xl font-black text-neutral-300 tracking-tighter text-center">
            {title}
          </h1>
        </div>

        {/* Comic Pages Container */}
        <div className="w-full max-w-7xl flex flex-col items-center px-0 sm:px-4 md:px-0 md:border-12 md:border-neutral-800 rounded-xl shadow-lg shadow-neutral-700/50">
          <div className="relative w-full bg-white shadow-xl overflow-hidden md:rounded-lg border border-neutral-200">
            {value.map((src, index) => (
              <div key={src} className="relative w-full">
                <Image
                  src={src}
                  alt={`Page ${index + 1}`}
                  width={1200}
                  height={1800}
                  className="w-full h-auto block"
                  priority={index < 2}
                  quality={90}
                />
                {/* Visual separator between pages */}
                {index < value.length - 1 && (
                  <div className="h-4 bg-neutral-100 border-y border-neutral-200/50" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Reader Navigation */}
        <div className="w-full max-w-3xl px-4 py-16 md:py-24 border-t border-neutral-200 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button
              onClick={() => router.push(`/comic/${id}/${prevChapter}`)}
              disabled={!hasPrev}
              className={`group flex items-center gap-6 p-6 rounded-2xl border transition-all duration-500 ${
                !hasPrev
                  ? "opacity-30 grayscale cursor-not-allowed border-neutral-200"
                  : "bg-white border-neutral-200 hover:border-orange-500/50 hover:bg-neutral-50 shadow-sm"
              }`}
            >
              <div className="w-14 h-14 rounded-full bg-neutral-100 flex items-center justify-center group-hover:scale-110 transition-transform font-bold text-neutral-400 group-hover:text-orange-500">
                <i className="fi fi-rr-arrow-small-left text-2xl" />
              </div>
              <div className="flex flex-col items-start text-left">
                <span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">
                  Previous
                </span>
                <span className="text-[15px] font-bold text-neutral-700">
                  Chương {prevChapter ? prevChapter.toString().padStart(2, "0") : "--"}
                </span>
              </div>
            </button>

            <button
              onClick={() => router.push(`/comic/${id}/${nextChapter}`)}
              className="group flex items-center justify-between p-6 rounded-2xl bg-orange-500 hover:bg-orange-600 transition-all duration-500 shadow-xl shadow-orange-500/20 active:scale-95 disabled:opacity-40 disabled:pointer-events-none disabled:cursor-not-allowed disabled:shadow-none"
              disabled={!hasNext}
            >
              <div className="flex flex-col items-start text-left pl-2 text-white">
                <span className="text-[10px] font-black uppercase tracking-widest text-white/70">
                  Up Next
                </span>
                <span className="text-[15px] font-bold">
                  Chương {nextChapter ? nextChapter.toString().padStart(2, "0") : "--"}
                </span>
              </div>
              <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-2 transition-transform">
                <i className="fi fi-rr-arrow-small-right text-2xl text-white" />
              </div>
            </button>
          </div>

          <button
            onClick={() => router.push(`/comic/${id}`)}
            className="w-full mt-8 mb-20 p-6 rounded-2xl border border-neutral-200 text-neutral-400 hover:text-neutral-800 hover:bg-neutral-100 transition-all font-bold uppercase tracking-widest text-sm"
          >
            Quay lại danh sách chương
          </button>
        </div>
      </main>
    </div>
  );
}
