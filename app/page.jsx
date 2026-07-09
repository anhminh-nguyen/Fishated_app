import Navbar from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";
import ComicsSection from "@/components/ComicsSection";

export default function HomePage() {
  return (
    <>
      <div
        id="navbar"
        className="fixed top-0 right-0 z-[50] grid w-full grid-cols-[1fr_3fr] border-b border-white/30 bg-white/60 backdrop-blur-[12px] max-lg:static max-md:flex max-md:flex-col overflow-hidden"
      >
        <Navbar />
      </div>
      <div className="flex flex-col overflow-hidden ">
        <div
          id="container-1"
          className="flex max-md:justify-start max-lg:mt-0 max-h-screen"
        >
          <HomeSection />
        </div>

        <div
          id="container-2"
          className=" bg-white relative flex min-h-screen flex-col overflow-hidden max-md:max-h-screen"
        >
          {/* Target for Comics navbar link */}
          <div id="line-3" className="absolute top-0"></div>

          <div
  className="absolute left-0 top-0 z-[1] flex flex-col h-full w-[30%] bg-[rgba(255,122,0,0.82)] backdrop-blur-[12px] max-[1024px]:w-[40%] max-md:hidden sidebar-block"
/>

          <div className="z-[6] flex flex-col w-[30%] max-[1024px]:w-[40%] max-md:w-full max-md:bg-orange-500/90 max-md:backdrop-blur-[12px] max-md:py-6">
            <h3 className="hidden px-[1rem] w-full break-words whitespace-normal font-[family-name:var(--font-luckiest-guy)] text-[5rem] max-md:block leading-[1.1] font-medium text-white [word-spacing:5px] max-md:m-0 max-md:p-0 max-md:text-center max-md:text-[3.5rem] flex items-center justify-center">
              Most Popular
            </h3>
            <a
              href="#fishated"
              className=" hidden text-white font-[family-name:var(--font-luckiest-guy)] text-2xl nav-link max-md:block max-md:text-center max-md:pt-4 max-md:mx-auto"
            >
              Home
            </a>
          </div>
          <div id="comics">
            <ComicsSection />
          </div>
        </div>
      </div>
    </>
  );
}
