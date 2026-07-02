"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Navcomic() {
  const router = useRouter();
  const [openNav, setOpenNav] = useState(true);

  return (
    <>
      <Image
        className="comic-nav-logo comic-nav-logo-detail fixed z-[99999] ml-[1.7rem] mt-[3rem] h-[5rem] w-[5rem] cursor-pointer rounded-full bg-white/50"
        src="/images/favicon.png"
        alt="Fishated"
        width={80}
        height={80}
        onClick={() => setOpenNav((value) => !value)}
      />

      <div
        className={`comic-nav-sidebar comic-nav-detail ${
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
          className="comic-nav-extra mt-[40px] rounded-full border-none bg-transparent text-[23px] text-grey disabled:cursor-not-allowed"
          disabled
          style={{ color: "grey" }}
          type="button"
        >
          <i className="fi fi-rr-play" />
        </button>
        <button
          className="comic-nav-extra mt-[40px] rounded-full border-none bg-transparent text-[23px] text-grey disabled:cursor-not-allowed"
          disabled
          style={{ color: "grey" }}
          type="button"
        >
          <i
            className="fi fi-rr-play"
            style={{ display: "inline-block", transform: "rotate(180deg)" }}
          />
        </button>
        <div className="comic-nav-mark mb-[2rem] mt-auto rounded-full text-[23px] text-black">
          <i className="fi fi-rr-m" />
        </div>
      </div>
    </>
  );
}
