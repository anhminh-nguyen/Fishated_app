"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ChapterList({ sl, name }) {
  const router = useRouter();
  const chapters = [];

  for (let index = sl; index > 0; index -= 1) {
    chapters.push(
      <button
        key={index}
        className="mt-[20px] flex h-[7rem] w-[60%] flex-col justify-center rounded-[5px] border-none bg-white text-left font-[family-name:'Bpmf_Huninn',sans-serif] text-[2rem] font-normal text-black shadow-[0_2px_6px_rgba(0,0,0,0.03),0_8px_20px_rgba(0,0,0,0.08),0_20px_40px_rgba(0,0,0,0.04)] hover:border-x-2 hover:border-black max-[767px]:min-h-[640px]:w-full"
        id={`c${index}`}
        onClick={() => router.push(`/comic/${name}/${index}`)}
        type="button"
      >
        Chapter {index}
      </button>,
    );
  }

  return (
    <div className="mx-[3rem] mt-[3.5rem] h-auto w-auto pb-[40px] max-[767px]:min-h-[640px]:mx-0">
      {chapters}
    </div>
  );
}
