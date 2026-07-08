import Image from "next/image";

export default function HomeSection() {
  return (
    <>
      <div id="line1" className="" />

      <div className="z-[-1] grid min-h-screen grid-cols-[50%_1fr] mt-50 max-lg:mt-0 max-md:flex max-md:flex-col max-md:items-center ">
        <div className="overflow-hidden max-md:order-2 max-[480px]:grid max-[480px]:min-h-[60vh] max-[480px]:place-items-center max-[480px]:min-h-[568px]:hidden">
          <Image
            className=" w-full object-fill  max-md:hidden "
            src="/images/new11.png"
            alt="picture"
            width={750}
            height={900}
            priority
          />
        </div>

          <div className="flex flex-col text-center min-h-screen items-center mt-[15rem] font-[family-name:var(--font-titan-one)] font-bold max-lg:my-[1.5rem] max-md:px-2 max-md:items-center max-md:min-w-screen">
            
            <h2 className="text-[4.5rem] max-md:text-[2.8rem] mb-16 max-md:mb-10 leading-tight text-neutral-800">
              Here at{' '}
              <a 
                href="https://www.facebook.com/fishated" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sky-500/90 tracking-wide hover:opacity-80 transition-opacity"
              >
                Fishated
              </a>{' '}
              we have:
            </h2>
            
            <ul className="list-none p-0 m-0 space-y-3 text-[3.5rem] max-md:text-[2rem]">
              <li className="text-emerald-700/90">🪖Kettenkrad🪖</li>
              <li className="text-sky-700/90">🪏Hole Digging Club🪏</li>
              <li className="text-rose-600/90">☢️ Wine and Submarines☢️</li>
              <li className="text-amber-600/90">🥔Finally, a lot of Potatoes🥔</li>
            </ul>

          </div>
      </div>
    </>
  );
}
