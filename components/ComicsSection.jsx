import Comictour from "@/components/Comictour";
import { COMICS, getLoopItems } from "@/lib/comics";

export default function ComicsSection() {
  const loopItems = getLoopItems(COMICS);

  return (
    <>
      <div className="flex h-[23vh] max-[786px]:ml-0 max-[786px]:flex-col max-[786px]:items-center max-[360px]:max-h-[800px]:h-[30vh]">
        <h3
          id="line-3"
          className="z-[6] ml-[5rem] w-[1rem] text-wrap font-[family-name:var(--font-luckiest-guy)] text-[5rem] font-medium text-white [word-spacing:5px] max-[786px]:mb-0 max-[786px]:ml-0 max-[786px]:mt-0 max-[786px]:w-full max-[786px]:bg-[rgba(26,10,1,0.6)] max-[786px]:p-0 max-[786px]:text-center max-[786px]:backdrop-blur-[12px] max-[486px]:grid max-[486px]:h-[15vh] max-[486px]:place-items-center max-[360px]:max-h-[800px]:grid max-[360px]:max-h-[800px]:h-[50vh] max-[360px]:max-h-[800px]:place-items-center"
        >
          Most Poupular
        </h3>
        <a href="#fishated" className="nav-link max-[486px]:mt-[20px] max-[360px]:max-h-[800px]:mt-[20px]">
          Home
        </a>
      </div>

      <div className="z-[7] mt-[10px] flex h-[45rem] flex-col content-start justify-center min-h-[980px]:mt-[120px] max-[786px]:pt-[40px]">
        <Comictour items={loopItems} />
      </div>

      <div className="footer" />
    </>
  );
}
