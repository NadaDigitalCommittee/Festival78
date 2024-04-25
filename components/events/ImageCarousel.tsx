import { ReactNode } from "react";
import { EmblaOptionsType } from "embla-carousel";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

type PropType = {
  slides: ReactNode[];
  options?: EmblaOptionsType;
};

export const ImageCarousel: React.FC<PropType> = ({ options, slides }) => {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true, speed: 0.5 }),
  ]);

  // useEffect(() => {
  //   if (emblaApi) {
  //     console.log(emblaApi.slideNodes())
  //   }
  // }, [emblaApi]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div
        className={`flex ${options?.direction === "rtl" && "flex-row-reverse"}`}
      >
        {slides.map((slide, i) => (
          <div
            className="min-w-0 flex-shrink-0 flex-grow-0  basis-[calc(min(300px,80vw))]"
            key={i}
          >
            <div>{slide}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
