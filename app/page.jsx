import Navbar from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";
import ComicsSection from "@/components/ComicsSection";

export default function HomePage() {
  return (
    <>
      <div
        id="navbar"
        className="fixed top-0 right-0 z-[1] grid w-full grid-cols-[1fr_3fr] border-b border-white/30 bg-white/60 backdrop-blur-[12px] max-[786px]:static max-[786px]:flex max-[786px]:flex-col"
      >
        <Navbar />
      </div>

      <div id="container-1" className="flex flex-col max-[786px]:justify-start">
        <HomeSection />
      </div>

      <div id="container-2" className="relative flex h-screen flex-col">
        <ComicsSection />
        <div className="absolute left-0 top-0 z-[5] h-full w-[30%] bg-[rgba(26,10,1,0.6)] backdrop-blur-[12px] max-[1024px]:w-[40%] max-[786px]:hidden sidebar-block" />
      </div>
    </>
  );
}
