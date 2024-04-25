"use client";
import { Header } from "@/components/Header";
import { Maps, mapIdAll } from "@/components/maps/Maps";
import { useSearchParams } from "next/navigation";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useRef } from "react";

export default function Page() {
  const mapIdList =
    useSearchParams()
      .get("id")
      ?.split(",")
      .filter(Boolean)
      .map((mapId) => mapId.trim()) || [];

  const swiperRef = useRef<SwiperRef>(null);
  useEffect(() => {
    swiperRef?.current?.swiper.slideTo(mapIdAll[mapIdList[0]] || 0, 500);
  });
  return (
    <>
      <Header path="/maps">Maps</Header>
      <main className="m-auto w-full p-1 md:w-3/5">
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
          ref={swiperRef}
        >
          {[...new Array(4)].map((_, i) => {
            return (
              <SwiperSlide key={`${i + 1}階`}>
                <div className="p-auto h-full w-full">
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
