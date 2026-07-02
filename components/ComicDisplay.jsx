import Image from "next/image";
import Newnavbar from "@/components/Newnavbar";

export default function ComicDisplay({ value, chapter }) {
  return (
    <>
      <div>
        <Newnavbar />
      </div>

      <div className="flex h-auto flex-col items-center bg-black">
        <div className="mt-[10rem] pb-[30px] font-[family-name:'Bpmf_Huninn',sans-serif] text-[30px] text-white">
          Chapter {chapter}
        </div>
        <div className="mb-[20px] w-[60%] rounded-[10px] bg-[#222] p-[24px] max-[1366px]:min-h-[650px]:w-[80%] max-[767px]:mb-[60px] max-[767px]:w-[85%] max-[767px]:p-[10px] max-[480px]:w-[90%]">
          {value.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={`Page ${index + 1}`}
              width={1200}
              height={1800}
              className="block h-auto w-full object-cover shadow-[0_0_20px_rgba(0,0,0,0.6)]"
            />
          ))}
        </div>
      </div>
    </>
  );
}
