"use client";

import Navcomic from "@/components/Navcomic";
import ChapterList from "@/components/ChapterList";
import Intro from "@/components/Intro";

export default function ComicDetailPage({ poster,chapterCount, chapterName, title,secondTitle, mainDesc,secondDesc,lightDesc }) {
  return (
    <div className="bg-black/20 min-h-screen font-inter text-neutral-600 pb-24 md:pb-0 transition-colors duration-500">
      {/* Navigation */}
      <Navcomic /> 

      {/* Main Content */}
      <main className="ml-0 md:ml-[100px] transition-all duration-500">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 py-8 md:py-16"> 
          
          {/* Intro Section */}
          <section className="mb-12 md:mb-20">
            <Intro poster={poster} title={title} secondTitle={secondTitle} mainDesc={mainDesc} lightDesc={lightDesc} secondDesc={secondDesc}/>
          </section> 

          {/* Chapters Section */}
          <section className="bg-white rounded-[2rem] border border-neutral-200 p-6 md:p-16 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-neutral-100 pb-8">
              <div className="">
                <h2 className="text-3xl md:text-6xl font-open font-black text-orange-500 tracking-tighter mb-8">
                  Danh sách chương
                </h2>
                {/* <p className="text-neutral-500 font-medium md:text-lg ">
                  Khám phá hành trình của Chito và Yuuri qua từng trang truyện.
                </p> */}
              </div>
              
              <div className="flex items-center gap-3 bg-orange-50 border border-orange-100 px-6 py-3 rounded-2xl">
                <span className="text-orange-500 font-black text-2xl md:text-4xl">{chapterCount}</span>
                <span className="text-orange-500/80 font-bold uppercase tracking-widest text-xs md:text-sm">Chương đã phát hành</span>
              </div>
            </div>
            
            <ChapterList sl={chapterCount} name={chapterName} />
          </section>

          {/* Footer Decoration */}
          <div className="mt-20 flex justify-center opacity-20 grayscale hover:grayscale-0 transition-all duration-700">
             <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full" />
          </div>
        </div>
      </main>

      <style jsx global>{`
        ::selection {
          background: #f97316;
          color: white;
        }
      `}</style>
    </div>
  );
}
