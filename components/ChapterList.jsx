"use client";

import { useRouter } from "next/navigation";

export default function ChapterList({ sl, name }) {
  const router = useRouter();
  const chapters = [];

  for (let index = sl; index > 0; index -= 1) {
    chapters.push(
      <button
        key={index}
        className="group relative flex items-center justify-between p-5 md:p-8 rounded-2xl bg-white border border-neutral-200 hover:border-orange-500/50 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md active:scale-95"
        id={`c${index}`}
        onClick={() => router.push(`/comic/${name}/${index}`)}
        type="button"
      >
        {/* Hover background effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative z-10 flex flex-col items-start">
          <span className="text-[10px] md:text-xs font-black text-orange-500 uppercase tracking-[0.2em] mb-2 opacity-80">
            Chapter
          </span>
          <span className="text-xl md:text-3xl font-black text-neutral-800 group-hover:text-orange-500 transition-colors">
            {index.toString().padStart(2, '0')}
          </span>
        </div>

        <div className="relative z-10 w-10 h-10 md:w-14 md:h-14 rounded-full bg-neutral-50 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 border border-neutral-100 group-hover:border-orange-400 shadow-inner">
          <i className="fi fi-rr-play text-lg md:text-xl translate-x-0.5" />
        </div>
      </button>,
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
      {chapters}
    </div>
  );
}
