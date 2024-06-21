"use client";

import {
  usePrevNextButtons,
  useDotButton,
  PrevButton,
  NextButton,
} from "@/components/Embla";
import { No, AFew } from "@/components/svg/Stock";
import { Item } from "@/lib/data/goods";
import { useDisclosure } from "@chakra-ui/hooks";
import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/modal";
import useEmblaCarousel from "embla-carousel-react";
import { FC } from "react";
import { VscExpandAll } from "react-icons/vsc";
import Image from "next/image";
import { ChakraProvider } from "@chakra-ui/provider";
import { theme } from "@chakra-ui/theme";

type Props = {
  isGoods?: boolean;
  item: Item;
  isLarge?: boolean;
  statuses: boolean[] | undefined;
};

export const Frame: FC<Props> = ({
  isGoods = false,
  item: { id, size, name, imageCount, price, description, types },
  isLarge = false,
  statuses,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [emblaRef, emblaApi] = useEmblaCarousel({ containScroll: false });
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <ChakraProvider theme={theme}>
      <div
        className={`relative w-full leading-none ${isLarge ? "col-span-2 row-span-2 h-[100%] text-[max(0rem,calc(var(--frame-width)/8))] [--frame-width:calc((100vw-6rem)*2/3)] md:[--frame-width:calc((100vw-11rem)/2)]" : "aspect-[4/5] text-[max(0rem,calc(var(--frame-width)/8))] [--frame-width:calc((100vw-6rem)/3)] md:[--frame-width:calc((100vw-11rem)/4)]"}`}
      >
        <div
          className={`absolute inset-0 ${isLarge ? "my-[calc((100%+1rem)*tan(16deg)/4)]" : ""}`}
        >
          <div
            className={`absolute w-full -skew-y-[4deg] text-theme ${isLarge ? "aspect-[9/10]" : "aspect-[calc(1/(1+tan(12deg)))]"}`}
          >
            <Modal
              isOpen={isOpen}
              onClose={onClose}
              size={{ base: "sm", md: "4xl" }}
              isCentered
            >
              <ModalOverlay />
              <ModalContent
                className="relative p-2 md:p-4"
                mx="1rem"
                rounded="2.5rem"
              >
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 flex size-[3.2rem] items-center justify-center md:size-[2.4rem]"
                >
                  <svg
                    className="size-[50%]"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="2.82812"
                      width="40"
                      height="4"
                      transform="rotate(45 2.82812 0)"
                      fill="#2F2F2F"
                    />
                    <rect
                      y="28.2842"
                      width="40"
                      height="4"
                      transform="rotate(-45 0 28.2842)"
                      fill="#2F2F2F"
                    />
                  </svg>
                </button>
                <ModalBody className="md:flex" p={{ base: "0", md: "0.5rem" }}>
                  <section className="mt-16 w-full max-w-[48rem] rounded-xl [--slide-size:100%] [--slide-spacing:1rem] md:my-auto md:mr-4 md:w-[67%]">
                    <div className="flex justify-between md:h-[50svh] md:p-4">
                      <div className="flex items-center text-theme">
                        <div className="size-[2.4rem] md:size-[3.2rem]">
                          <PrevButton
                            onClick={onPrevButtonClick}
                            disabled={prevBtnDisabled}
                          />
                        </div>
                      </div>
                      <div
                        className="flex w-[calc(100%-5.8rem)] items-center overflow-hidden max-md:aspect-square md:w-[calc(100%-8.4rem)]"
                        ref={emblaRef}
                      >
                        <div className="ml-[calc(var(--slide-spacing)*-1)] flex h-full w-[calc(100%+var(--slide-spacing))] touch-pan-y [backface-visibility:hidden]">
                          {Array.from(Array(imageCount).keys()).map((i) => (
                            <div
                              className="min-w-0 flex-[0_0_var(--slide-size)] pl-[var(--slide-spacing)]"
                              key={i}
                            >
                              <div className="relative size-full">
                                <Image
                                  src={`/img/items/${isGoods ? "" : "souvenirs/"}${`0${id[0]}`.slice(-2)}_${i + 1}.webp`}
                                  alt={name}
                                  fill
                                  sizes=""
                                  className="object-contain"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center text-theme">
                        <div className="size-[2.4rem] md:size-[3.2rem]">
                          <NextButton
                            onClick={onNextButtonClick}
                            disabled={nextBtnDisabled}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="-border-t-2 mt-2 flex h-12 justify-center md:m-0 md:mb-2 md:h-8">
                      <div className="flex flex-wrap items-center justify-center">
                        {scrollSnaps.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={`after:items-center] flex size-[2rem] items-center justify-center rounded-[50%] after:flex after:size-[1rem] after:rounded-[50%] after:shadow-theme ${index === selectedIndex ? "after:shadow-[inset_0_0_0_1rem]" : "after:shadow-[inset_0_0_0_0.1rem]"}`}
                          />
                        ))}
                      </div>
                    </div>
                  </section>
                  <div className="border-black md:border-[1px]" />
                  <div className="flex flex-col gap-6 p-8 pt-4 font-zen_kaku_gothic_new font-medium md:w-[33%] md:pr-4">
                    <p className="text-3xl font-bold md:text-2xl">
                      {id.length === 1 ? id : `${id[0]}-${id[id.length - 1]}`}.{" "}
                      {name.split("\n").join("")}
                    </p>
                    <p>
                      {description.split("\n").map((x, i) => (
                        <span key={i} className="block">
                          {x}
                        </span>
                      ))}
                    </p>
                    <p className="flex items-end justify-end text-5xl font-bold">
                      {price.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1,")}
                      <span className="pl-2 text-2xl">円</span>
                    </p>
                    {types ? (
                      !statuses ? (
                        <p>読み込みに失敗しました</p>
                      ) : (
                        <div>
                          <table className="my-2 w-full">
                            <tbody>
                              {types.map((type, i) => (
                                <tr key={i}>
                                  <td className="border-[1.25px] border-black pl-4">
                                    {id[i]}. {type}
                                  </td>
                                  <td className="size-4 border-[1.25px] border-black p-2">
                                    {statuses[id[i]] ? <No /> : <AFew />}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          <p>
                            <AFew className="inline-block align-middle" />
                            :在庫あり <No className="inline-block" />
                            :在庫なし
                          </p>
                          <p>
                            ※実際の販売状況の反映には時間がかかる場合があります。
                          </p>
                        </div>
                      )
                    ) : null}
                  </div>
                </ModalBody>
              </ModalContent>
            </Modal>
            <Image
              src={`/img/items/${isGoods ? "" : "souvenirs/"}${`0${id[0]}`.slice(-2)}_1.webp`}
              alt={name}
              fill
              className={`object-cover ${isLarge ? "-translate-y-[calc((tan(16deg)-tan(4deg))*(9/20)*100%)] [clipPath:polygon(0_calc((tan(16deg)-tan(4deg))*(9/10)*100%),100%_0,100%_80%,0_100%)]" : "-translate-y-[calc((tan(16deg)-tan(4deg))*(5/12)*100%)] [clipPath:polygon(0_calc((tan(16deg)-tan(4deg))*(5/6)*100%),100%_0,100%_100%,0_100%)]"}`}
            />
            <div
              className={`size-full pl-1 ${isLarge ? "translate-y-[calc((tan(16deg)-tan(4deg))*(9/20)*100%)]" : "translate-y-[calc((tan(16deg)-tan(4deg))*(5/12)*100%)]"}`}
            >
              <VscExpandAll />
            </div>
          </div>
          <div className="relative size-full -skew-y-[16deg]">
            <div
              className={`absolute size-full border-theme ${isLarge ? "border-[6px]" : "border-[3px]"}`}
            />
            <div className="absolute right-0 top-0 h-[20%] w-[15%] bg-theme">
              <p
                className={`flex size-full items-center justify-center text-center font-bold leading-none text-white ${id.length === 1 ? "text-[120%]" : "text-[80%]"}`}
              >
                {id.length === 1 ? (
                  id
                ) : (
                  <span>
                    {id[0]}-<br />
                    {id[id.length - 1]}
                  </span>
                )}
              </p>
            </div>
            <div
              className={`absolute size-full bg-theme ${isLarge ? "[clip-path:polygon(0_80%,100%_30%,100%_100%,0_100%)]" : "[clip-path:polygon(0_80%,100%_40%,100%_100%,0_100%)]"}`}
            />
            <div
              className={`absolute bottom-0 right-0 p-[0.4em] text-right text-white ${size === "s" ? "text-[85%]" : size === "m" ? "text-[100%]" : "text-[110%]"}`}
            >
              <p>
                <span className="text-[75%]">¥</span>
                {price.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1,")}
              </p>
              <p className="font-zen_kaku_gothic_new font-bold leading-tight">
                {name.split("\n").map((x, i) => (
                  <span key={i} className="block">
                    {x}
                  </span>
                ))}
              </p>
            </div>
            <div className={`absolute size-full`}>
              <button onClick={onOpen} className="size-full" />
            </div>
          </div>
        </div>
        <div
          className={`${!isGoods || !statuses || id.some((i) => !statuses[i]) ? "hidden" : ""} absolute inset-0 z-40 m-auto flex size-fit rotate-[20deg] skew-y-[-4deg] items-center justify-center border-[#FF0C0C] bg-white px-2 pb-0 pt-[calc(var(--frame-width)/12.8)] text-center text-[calc((var(--frame-width)-1rem)/3.2)] ${isLarge ? "border-[8px]" : "border-4"} font-ltc_broadway tracking-tighter text-[#FF0C0C]`}
        >
          <p>
            SOLD
            <br />
            OUT
          </p>
        </div>
      </div>
    </ChakraProvider>
  );
};
