import Comictour from "@/components/Comictour";
import { COMICS, getLoopItems } from "@/lib/comics";

export default function ComicsSection() {
  const loopItems = getLoopItems(COMICS);

  return (
    <>
      

      <div className=" z-[3]  flex flex-col min-h-screen content-start max-md:justify-start justify-center m-auto">
        <Comictour items={loopItems} />
      </div>

      <div className="footer" />
    </>
  );
}
