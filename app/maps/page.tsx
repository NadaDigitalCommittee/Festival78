"use client";
import { Header } from "@/components/Header";
import { Maps } from "@/components/maps/Maps";
import { mapIdDict } from "@/lib/data/maps";
import { useSearchParams } from "next/navigation";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useRef, useState } from "react";
import "@/components/maps/swiperPref.scss";

export default function Page() {
  const swiperRef = useRef<SwiperRef>(null);
  const [activeIndex, setIndex] = useState<number>(0);
  useEffect(() => {
    swiperRef?.current?.swiper.slideTo(activeIndex, 500);
  }, [activeIndex]);

  const mapIdList =
    useSearchParams()
      .get("id")
      ?.split(",")
      .filter(Boolean)
      .map((mapId) => mapId.trim()) || [];
  useEffect(() => {
    swiperRef?.current?.swiper.slideTo(mapIdDict[mapIdList[0]] || 0, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Header path="/maps">Maps</Header>
      <main className="m-auto w-full max-w-[768px] p-1 font-zen_kaku_gothic_new">
        <ol className="flex w-full items-center justify-center px-4 py-2">
          {[...new Array(4)].map((_, i) => {
            return (
              <li key={`${i}階`} className="mx-1 w-1/4 p-0 font-semibold">
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`px-auto h-full w-full rounded-lg border-2 border-theme py-1 text-xl duration-300 ${activeIndex === i ? "bg-theme text-white" : "bg-transparent text-theme"}`}
                >
                  {i + 1}階
                </button>
              </li>
            );
          })}
        </ol>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          className="mx-auto mb-28"
          onSlideChange={() => {
            setIndex(swiperRef?.current?.swiper.realIndex || 0);
          }}
          ref={swiperRef}
        >
          {[...new Array(4)].map((_, i) => {
            return (
              <SwiperSlide key={`${i + 1}階`}>
                <div className="flex h-full w-full items-center justify-center">
                  <Maps
                    floorNumber={i + 1}
                    className="h-auto w-full"
                    mapIdList={mapIdList}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </main>
    </>
  );
}
