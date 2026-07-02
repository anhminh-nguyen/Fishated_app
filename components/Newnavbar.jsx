"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function Newnavbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [openNav, setOpenNav] = useState(true);

  const chapterPath = pathname.split("/");
  const current = 3;

  return (
    <>
      <Image
        className="comic-nav-logo fixed z-[99999] ml-[1.7rem] mt-[3rem] h-[5rem] w-[5rem] cursor-pointer rounded-full bg-white/50"
        src="/images/favicon.png"
        alt="Fishated"
        width={80}
        height={80}
        onClick={() => setOpenNav((value) => !value)}
      />

      <div
        className={`comic-nav-sidebar comic-nav-chapter ${
          openNav ? "is-open" : "is-closed"
        }`}
      >
        <button
          className="comic-nav-btn comic-nav-home z-[3] mt-[15rem] rounded-full border-none bg-transparent text-[23px] text-black"
          onClick={() => {
            window.scrollTo(0, 0);
            router.push("/");
          }}
          type="button"
        >
          <i className="fi fi-rr-house-blank" />
        </button>

        <button
          className="comic-nav-btn comic-nav-action comic-nav-up mt-[40px] rounded-full border-none bg-transparent text-[23px] text-black"
          onClick={() => {
            let chapter = Number(chapterPath[3]);
            if (chapter + 1 > current) {
              chapter = current - 1;
            }
            window.scrollTo(0, 0);
            router.push(`/comic/${chapterPath[2]}/${chapter + 1}`);
          }}
          type="button"
        >
          <i className="fi fi-rr-play" />
        </button>

        <button
          className="comic-nav-btn comic-nav-action comic-nav-down mt-[40px] rounded-full border-none bg-transparent text-[23px] text-black"
          onClick={() => {
            let chapter = Number(chapterPath[3]);
            if (chapter - 1 < 1) {
              chapter = 2;
            }
            window.scrollTo(0, 0);
            router.push(`/comic/${chapterPath[2]}/${chapter - 1}`);
          }}
          type="button"
        >
          <i
            className="fi fi-rr-play"
            style={{ display: "inline-block", transform: "rotateY(180deg)" }}
          />
        </button>

        <button
          className="comic-nav-btn comic-nav-action comic-nav-side mt-[40px] rounded-full border-none bg-transparent text-[23px] text-black"
          onClick={() => router.push(`/comic/${chapterPath[2]}`)}
          type="button"
        >
          <i className="fi fi-rr-arrow-turn-down-left" />
        </button>

        <div className="comic-nav-mark mb-[2rem] mt-auto rounded-full text-[23px] text-black">
          <i className="fi fi-rs-square-m" />
        </div>
      </div>
    </>
  );
}
