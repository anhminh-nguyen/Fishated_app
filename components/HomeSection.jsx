import Image from "next/image";

export default function HomeSection() {
  return (
    <>
      <div id="line1" className="h-[20svh] max-[1148px]:hidden" />

      <div className="z-[-1] grid h-auto grid-cols-[50%_1fr] max-[1148px]:flex max-[1148px]:flex-col max-[1148px]:items-center max-[1148px]:justify-start">
        <div className="overflow-hidden max-[1148px]:order-2 max-[480px]:grid max-[480px]:min-h-[60vh] max-[480px]:place-items-center max-[480px]:min-h-[568px]:hidden">
          <Image
            className="h-[clamp(30px,83vh,80rem)] w-full object-fill max-[1148px]:h-[min(60vh)] max-[480px]:h-[80%] max-[480px]:w-[90%] max-[480px]:min-h-[568px]:hidden"
            src="/images/new11.png"
            alt="picture"
            width={800}
            height={1000}
            priority
          />
        </div>

        <div className="relative top-[140px] flex h-[38rem] flex-col items-center text-center font-[family-name:var(--font-titan-one)] text-[3.5rem] font-light leading-[50px] max-[1148px]:order-1 max-[1148px]:top-0 max-[1148px]:h-[40svh] max-[1148px]:text-[25px] max-[786px]:top-[50px] max-[480px]:h-[20vh] max-[480px]:min-h-[568px]:top-[90px] max-[480px]:min-h-[568px]:h-screen">
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
