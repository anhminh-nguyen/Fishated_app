"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { AnimatePresence, motion } from "framer-motion";

export default function Comictour({ items }) {
  const [selected, setSelected] = useState(null);
  const swiperRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;

    requestAnimationFrame(() => {
      swiper.update();
      swiper.autoplay?.start();
    });
  }, []);

  const open = (item) => {
    setSelected(item);

    const swiper = swiperRef.current;
    if (swiper) {
      swiper.autoplay?.stop();
      swiper.allowTouchMove = false;
    }
  };

  const close = () => {
    setSelected(null);

    const swiper = swiperRef.current;
    if (swiper) {
      swiper.allowTouchMove = true;
      swiper.autoplay?.start();
    }
  };

  return (
    <div>
      <div className={selected ? "opacity-70" : ""}>
        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          loop
          autoplay={{ delay: 1800, disableOnInteraction: false }}
          speed={450}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            0: {
              slidesOffsetBefore: 0,
              spaceBetween: 16,
              centeredSlides: true,
            },
            480: {
              slidesOffsetBefore: 0,
              spaceBetween: 24,
              centeredSlides: true,
            },
            786: {
              slidesOffsetBefore: 0,
              spaceBetween: 30,
              centeredSlides: true,
            },
            1024: {
              slidesOffsetBefore: 280,
              spaceBetween: 90,
              centeredSlides: false,
            },
          }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <button
                className="cursor-pointer border-0 bg-transparent p-0"
                onClick={() => open(item)}
                type="button"
              >
                <motion.div
                  className="comic-card relative aspect-[3/4] sm:aspect-[4/3] w-[clamp(16rem,80vw,22rem)] sm:w-[clamp(32rem,40vw,44rem)] scale-[0.79] overflow-hidden rounded-[1.4rem] opacity-90 grayscale-[10%] transition-[transform,opacity,filter] duration-[120ms] ease-linear"
                  layoutId={
                    selected?.id === item.id ? `poster-${item.id}` : undefined
                  }
                >
                  <Image
                    className="block h-full w-full object-cover"
                    src={item.poster}
                    alt={item.title}
                    width={440}
                    height={330}
                  />

                  <div className="absolute bottom-0 left-0 flex items-end justify-between gap-[30px] bg-gradient-to-t from-black/75 via-black/35 to-transparent p-[50px_30px] max-[786px]:p-[30px_10px]">
                    <div className="min-w-0 text-left">
                      <h3 className="m-0 max-w-[180px] font-[family-name:var(--font-open-sans)] text-[3.5rem] font-extrabold leading-[1.05] text-white [text-shadow:0_4px_16px_rgba(0,0,0,0.6)] max-[786px]:text-[2.5rem] max-[486px]:text-[20px] max-[320px]:text-[20px]">
                        {item.title}
                      </h3>
                      <p className="mt-[6px] line-clamp-2 max-w-[20rem] text-[1.5rem] leading-[1.25] text-white/85 max-[786px]:text-[1rem] max-[320px]:hidden">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[9999] grid place-items-center bg-black/90 max-[786px]:place-items-[start_center] max-[486px]:place-items-center"
            style={{
              backgroundImage: 'url("/images/background 3.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              className="relative grid h-[min(650px,75vh)] w-[min(1200px,85vw)] grid-cols-[1.2fr_1fr] overflow-hidden rounded-[20px] max-[786px]:mt-[50px] max-[786px]:flex max-[786px]:h-auto max-[786px]:w-[70vh] max-[786px]:flex-col max-[486px]:w-[80vw] max-[320px]:w-[30vh]"
              onClick={(event) => event.stopPropagation()}
              initial={{ opacity: 0, y: 10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <div className=" bg-black/10 relative grid place-items-center p-[28px] max-[786px]:order-2 max-[786px]:p-0">
                <div className="h-[35rem] w-[min(570px,100%)] rounded-[22px] border border-white/0 bg-white/10 p-[22px_24px] backdrop-blur-[12px] max-[786px]:h-auto">
                  <p className="my-[10px] ml-[30px] font-[family-name:var(--font-open-sans)] text-[2rem] font-medium leading-[1.1] text-[#FF5F00] max-[786px]:text-[20px] max-[486px]:text-[25px] max-[486px]:font-semibold max-[320px]:text-[25px] max-[320px]:font-semibold">
                    {selected.title}
                  </p>
                  <p className="mb-[18px] ml-[30px] line-clamp-4 pb-[23px] font-[family-name:var(--font-open-sans)] text-[2rem] leading-[1.45] opacity-90 [word-spacing:2px] max-[1000px]:text-[15px] max-[786px]:line-clamp-3 max-[786px]:pb-0 max-[320px]:text-[13px]">
                    {selected.desc}
                  </p>
                  <button
                    className="ml-[30px] cursor-pointer rounded-full border-0 bg-[#FF5F00] px-[14px] py-[10px] font-[family-name:var(--font-open-sans)] text-[20px] text-white hover:bg-black active:bg-[#FF5F00] max-[786px]:text-[15px]"
                    type="button"
                    onClick={() => router.push(`/comic/${selected.id}`)}
                  >
                    Read Now
                  </button>
                </div>
              </div>

              <div className="relative overflow-hidden max-[786px]:order-1 max-[786px]:h-[40vh]">
                <motion.div
                  className="relative h-full w-full"
                  layoutId={`poster-${selected.id}`}
                >
                  <Image
                    className="block h-full w-full object-cover"
                    src={selected.hero ?? selected.poster}
                    alt={selected.title}
                    fill
                    sizes="(max-width: 786px) 70vh, 40vw"
                  />
                </motion.div>
                <button
                  className="absolute right-[14px] top-[14px] z-[999] h-[50px] w-[50px] cursor-pointer rounded-[10px] border-0 bg-black/65 text-[3rem] text-[#FFC300] max-[786px]:h-[40px] max-[786px]:w-[40px] max-[786px]:text-[30px] max-[486px]:h-[35px] max-[486px]:w-[35px] max-[486px]:text-[20px] max-[320px]:h-[35px] max-[320px]:w-[35px] max-[320px]:text-[20px] "
                  onClick={close}
                  type="button"
                >
                  X
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
