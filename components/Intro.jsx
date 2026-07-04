import Image from "next/image";

export default function Intro() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-white text-neutral-800 shadow-xl border border-neutral-200 transition-colors duration-500">
      {/* Cinematic Banner Background */}
      <div className="absolute inset-0 z-0 h-[350px] md:h-full">
        <Image
          src="/images/girlslast.png"
          alt="Banner"
          fill
          className="object-cover opacity-20 blur-[2px] scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 py-12 md:px-16 md:py-24 flex flex-col items-center text-center">
        

        {/* Titles */}
        <div className="space-y-6 mb-12 ">
          <h1 className="text-6xl sm:text-6xl md:text-50xl font-black tracking-tighter text-neutral-800 drop-shadow-sm">
            少女終末旅行
          </h1>
          <h2 className="text-base sm:text-xl md:text-2xl font-bold text-orange-500 tracking-[0.3em] uppercase opacity-90">
            - Girls' Last Tour -
          </h2>
        </div>

        {/* Description Card */}
        <div className="max-w-5xl bg-neutral-50/50 backdrop-blur-md p-6 md:p-6 md:mx-auto rounded-2xl border border-neutral-300 shadow-inner">
          <div className="space-y-6 text-base md:text-2xl leading-relaxed text-neutral-600 font-medium  text-left md:text-center ">
            <p className="">
              Đến một ngày nhân loại lụi tàn, thế giới sẽ ồn ào trong hoảng loạn hay
              bị bao trùm bởi sự tĩnh lặng chết chóc và bi ai? Trong Girls'
              last tour, thế giới ấy tuy lặng thinh nhưng cũng đầy yên bình và tươi
              đẹp qua con mắt của hai thiếu
              nữ Chito và Yuuri.
            </p> <br />
            <p className="hidden md:block text-neutral-500">
              Hai con người với tính cách và suy nghĩ trái ngược cùng nhau đi tìm ý
              nghĩa của chính chuyến hành trình của họ, với đích đến là đỉnh của
              ngọn tháp, hay cũng như đỉnh thế giới của hai cô gái.
            </p> <br />
            <p className="text-neutral-400 italic text-sm md:text-lg border-l-4 border-orange-500/50 pl-4 md:border-none md:pl-0">
              Bộ truyện là phương tiện giải trí hay cũng có thể là thứ khiến ta suy ngẫm về chiến tranh, về hy vọng, tuyệt vọng và về cách ta sống.
            </p>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-12 pt-8 border-t border-neutral-100 w-full max-w-3xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-md md:text-[10px] text-neutral-400 text-center md:text-left font-medium">
              Bản dịch tiếng Việt bởi <span className="text-orange-500 font-bold">Fishated</span><br />
              © Tsukumizu / Shinchosha
            </p>
            
            <div className="flex justify-center gap-8 text-neutral-500 font-bold text-[15px]">
              <a 
                href="https://www.facebook.com/fishated" 
                className="hover:text-orange-500 transition-colors duration-300 flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fi fi-brands-facebook text-xl text-blue-500" />
                Fishated
              </a>
              {/* <a 
                href="https://x.com/lililjiliijili" 
                className="hover:text-orange-500 transition-colors duration-300 flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fi fi-brands-twitter text-xl text-sky-400" />
                Tsukumizu
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
