import Comictour from "@/components/Comictour";
import { COMICS, getLoopItems } from "@/lib/comics";

export default function ComicsSection() {
  const loopItems = getLoopItems(COMICS);

  return (
    <>
      

      <div className="z-[7] mt-[100px] flex h-[45rem] flex-col max-h-screen content-start justify-center max-md:mt-[10px]">
        <Comictour items={loopItems} />
      </div>

      <div className="footer" />
    </>
  );
}
