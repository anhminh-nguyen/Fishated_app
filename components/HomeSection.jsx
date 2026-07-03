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

        <div className="flex flex-col text-center min-h-screen items-center  mt-[15rem] font-[family-name:var(--font-titan-one)] text-[3.5rem] font-light max-lg:my-[1.5rem] max-md:text-[2rem] max-md:px-2 max-md:items-center max-md:min-w-screen ">
          <p>
            Fuel your passion for stories
            <br />
            Welcome to <span className="text-orange-500">Fishated</span>!
          </p>
        </div>
      </div>
    </>
  );
}
