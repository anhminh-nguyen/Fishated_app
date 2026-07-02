"use client";

import { useEffect } from "react";
import Navcomic from "@/components/Navcomic";
import ChapterList from "@/components/ChapterList";
import Intro from "@/components/Intro";

export default function ComicDetailPage({ chapterCount, chapterName }) {
  useEffect(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <div className="z-10">
        <Navcomic />
      </div>

      <div className="mx-[9rem] mt-[40px] h-auto pb-[2rem] font-mono text-[1.4rem] max-[480px]:min-h-[568px]:mx-[6vw] max-[480px]:min-h-[568px]:mb-[5vh]">
        <ChapterList sl={chapterCount} name={chapterName} />
        <h1 className="inline border-b-[3px] border-l-[3px] border-black pb-[1rem] pl-[1rem] max-[767px]:min-h-[640px]:border-b-0 max-[480px]:min-h-[568px]:border-b-0 max-[480px]:min-h-[568px]:text-[30px]">
          Danh sách truyện
        </h1>
      </div>

      <div className="z-[-1] grid h-[100svh] grid-rows-[40%_60%] max-[767px]:min-h-[640px]:flex max-[767px]:min-h-[640px]:h-auto max-[767px]:min-h-[640px]:flex-col">
        <Intro />
      </div>
    </>
  );
}
