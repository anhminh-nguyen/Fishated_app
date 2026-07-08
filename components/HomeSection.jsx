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

        <div className="flex flex-col text-center min-h-screen items-center mt-[15rem] font-[family-name:var(--font-titan-one)] text-[3.5rem] font-bold max-lg:my-[1.5rem] max-md:text-[2rem] max-md:px-2 max-md:items-center max-md:min-w-screen">
          <p className="mb-4">Ở đây, chúng mình có:</p>
          <ul className="list-none p-0 m-0 space-y-2">
            <li className="text-yellow-600">- Khoai tây (Potato)</li>
            <li className="text-green-600">- Kettenkrad</li>
            <li className="text-blue-600">- Câu Lạc Bộ Đào Hố (Hole Digging Club)</li>
            <li className="text-red-600">- Rượu và Tàu ngầm</li>
          </ul>
        </div>
      </div>
    </>
  );
}
