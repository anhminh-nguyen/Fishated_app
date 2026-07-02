import Image from "next/image";

export default function Intro() {
  return (
    <>
      <div className="relative z-[1] grid place-items-end bg-transparent px-0 pt-[30px] max-[767px]:min-h-[640px]:pt-[50px] max-[480px]:min-h-[568px]:pt-[66px]">
        <a href="#c2">
          <Image
            className="absolute top-0 z-[3] ml-0 h-[50px] w-[40px] rotate-[270deg] max-[767px]:min-h-[640px]:left-[45vw] max-[767px]:min-h-[640px]:m-0"
            src="/images/output1.gif"
            alt="scroll up"
            width={40}
            height={50}
            unoptimized
          />
        </a>
        <div className="mt-[20px] flex h-full w-full flex-row items-end justify-center max-[767px]:min-h-[640px]:m-0">
          <h1 className="mb-[20px] text-[10rem] max-[767px]:min-h-[640px]:text-[40px]">
            少女終末旅行
          </h1>
        </div>
      </div>

      <div className="mt-px flex h-full w-full flex-col items-center rounded-t-[20%] bg-[rgb(27,21,34)] max-[767px]:min-h-[640px]:pb-[25px] max-[767px]:min-h-[640px]:h-auto">
        <div className="m-0 p-0 font-mono text-[2rem] leading-none text-[#EEEFF0] max-[767px]:min-h-[640px]:text-[15px]">
          <h3>- Girls&apos; Last Tour -</h3>
        </div>
        <div className="intro-content-block text-center font-mono text-[15px] text-[#B0B3B6] max-[767px]:min-h-[640px]:flex max-[767px]:min-h-[640px]:flex-col max-[767px]:min-h-[640px]:items-center max-[767px]:min-h-[640px]:text-[13px] max-[480px]:min-h-[568px]:flex max-[480px]:min-h-[568px]:flex-col max-[480px]:min-h-[568px]:items-center max-[480px]:min-h-[568px]:text-[11px]">
          <p className="mx-auto w-[65%] max-[767px]:min-h-[640px]:m-0 max-[480px]:min-h-[568px]:mb-[6vh]">
            Đến một ngày nhân loại lụi tàn, thế giới sẽ ồn ào trong hoảng loạn hay
            bị bao trùm bởi sự tĩnh lặng chết chóc và bi ai? Trong Girls&apos; last
            tour - tác phẩm đã tạo nên tên tuổi của của Tsukumizu, thế giới ấy tuy
            lặng thinh nhưng cũng đầy yên bình và tươi đẹp qua con mắt của hai thiếu
            nữ Chito và Yuuri. Hai con người với tính cách và suy nghĩ trái ngược
            cùng nhau đi tìm ý nghĩa của chính chuyến hành trình của họ, với đích đến
            là đỉnh của ngọn tháp, hay cũng như đỉnh thế giới của hai cô gái. Chuyến
            đi ấy có tiếng cười, có bữa đói, bữa no, có những điều lạ, cả cũ lẫn mới,
            có vài sự sống ít ỏi và không ít những cái chết của loài người do chính
            loài người gây ra. Bộ truyện là phương tiện giải trí hay cũng có thể là thứ
            khiến ta suy ngẫm về chiến tranh, về hy vọng, tuyệt vọng và về cách ta
            sống.
          </p>
          <p className="mx-auto mt-[3rem] w-[65%] max-[767px]:min-h-[640px]:m-0 max-[480px]:min-h-[568px]:mt-[3%] max-[480px]:min-h-[568px]:mb-[6vh]">
            Bản dịch tiếng Việt được thực hiện bởi Fishated <br />
            Mọi quyền sở hữu đều thuộc về tác giả và đơn vị phát hành chính thức
          </p>
          <p className="mx-auto w-[65%] max-[767px]:min-h-[640px]:m-0">
            <a className="text-[aqua]" href="https://www.facebook.com/fishated">
              Fishated
            </a>{" "}
            |{" "}
            <a className="text-[aqua]" href="https://x.com/lililjiliijili">
              Tsukumizu/つくみず
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
