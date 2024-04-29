"use client";

import Image from "next/image";
import { VscExpandAll } from "react-icons/vsc";
import { FC } from "react";
import { useDisclosure } from "@chakra-ui/hooks";
import { ChakraProvider } from "@chakra-ui/provider";
import { theme } from "@chakra-ui/theme";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/modal";
import useEmblaCarousel from "embla-carousel-react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
  useDotButton,
} from "@/components/Embla";
import { goods, Item, souvenirs } from "@/lib/data/goods";
import { Header } from "@/components/Header";
import { AFew, Few, No } from "@/components/svg/Stock";
import useSWR from "swr";

export default function Page() {
  return (
    <ChakraProvider theme={theme}>
      <main className="p-4 font-alte_din md:p-8">
        <div className="flex justify-center p-6">
          <Header path="/goods">Goods</Header>
        </div>
        <p className="m-4 font-zen_kaku_gothic_new text-xl text-theme md:m-8 md:text-2xl">
          画像をタップすると詳細とサンプル画像の一覧を見ることができます。
        </p>
        <div className="m-4 my-8 grid skew-y-[4deg] grid-cols-3 gap-4 gap-y-[calc(1rem/cos(8deg))] md:m-8 md:my-16 md:grid-cols-4">
          {goods.map((item, i) => (
            <Frame key={item.id[0]} isGoods item={item} isLarge={i === 0} />
          ))}
        </div>
        <div className="flex justify-center p-6">
          <Header path="/goods">Souvenirs</Header>
        </div>
        <div className="m-4 my-8 grid skew-y-[4deg] grid-cols-3 gap-4 gap-y-[calc(1rem/cos(8deg))] md:m-8 md:my-16 md:grid-cols-4">
          {souvenirs.map((item, i) => (
            <Frame key={item.id[0]} item={item} isLarge={i === 0} />
          ))}
        </div>
        <div className="h-[200px]" />
      </main>
    </ChakraProvider>
  );
}

const Frame: FC<{ isGoods?: boolean; item: Item; isLarge?: boolean }> = ({
  isGoods = false,
  item: { id, size, name, imageCount, price, description },
  isLarge = false,
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
    <div
      className={`relative w-full leading-none ${isLarge ? "col-span-2 row-span-2 h-[100%] text-[max(0rem,calc((100vw-6rem)/12))] md:text-[max(0rem,calc((100vw-11rem)/16))]" : "aspect-[4/5] text-[max(0rem,calc((100vw-6rem)/24))] md:text-[max(0rem,calc((100vw-11rem)/32))]"}`}
    >
      <div
        className={`absolute inset-0 ${isLarge ? "my-[calc((100%+1rem)*tan(16deg)/4)]" : ""}`}
      >
        <div
          className={`absolute w-full -skew-y-[4deg] text-theme ${isLarge ? "aspect-[9/10]" : "aspect-[calc(1/(1+tan(12deg)))]"}`}
        >
          <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                <p className="text-2xl text-theme">
                  {id.length === 1 ? id : `${id[0]}-${id[id.length - 1]}`}.{" "}
                  {name.split("\n").join("")}
                </p>
                <p className="px-2">
                  {description.split("\n").map((x, i) => (
                    <span key={i} className="block">
                      {x}
                    </span>
                  ))}
                </p>
              </ModalHeader>
              <ModalCloseButton className="text-theme" />
              <ModalBody>
                <section className="embla m-auto max-w-[48rem] rounded-xl [--slide-height:19rem] [--slide-size:80%] [--slide-spacing:1rem]">
                  <div
                    className="embla__viewport overflow-hidden"
                    ref={emblaRef}
                  >
                    <div className="embla__container ml-[calc(var(--slide-spacing)*-1)] flex touch-pan-y [backface-visibility:hidden]">
                      {Array.from(Array(imageCount).keys()).map((i) => (
                        <div
                          className="embla__slide aspect-square min-w-0 flex-[0_0_var(--slide-size)] pl-[var(--slide-spacing)]"
                          key={i}
                        >
                          <div className="relative aspect-square border-2 border-theme/50">
                            <Image
                              src={`/img/items/${isGoods ? "" : "souvenirs/"}${`0${id[0]}`.slice(-2)}_${i + 1}.webp`}
                              alt={name}
                              fill
                              className="object-contain"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="embla__controls mt-[1.8rem] flex justify-between">
                    <div className="items-center text-theme">
                      <PrevButton
                        onClick={onPrevButtonClick}
                        disabled={prevBtnDisabled}
                      />
                    </div>
                    <div className="embla__dots mr-[calc((2.6rem-1.4rem)/2*(-1))] flex flex-wrap items-center justify-end">
                      {scrollSnaps.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => onDotButtonClick(index)}
                          className={"embla__dot after:items-center] flex size-[2.6rem] items-center justify-center rounded-[50%] after:flex after:size-[1.4rem] after:rounded-[50%] after:shadow-[inset_0_0_0_0.2rem_rgb(234,234,234)]".concat(
                            index === selectedIndex
                              ? " after:shadow-[inset_0_0_0_0.2rem] after:shadow-theme"
                              : ""
                          )}
                        />
                      ))}
                    </div>
                    <div className="items-center text-theme">
                      <NextButton
                        onClick={onNextButtonClick}
                        disabled={nextBtnDisabled}
                      />
                    </div>
                  </div>
                </section>
                <div className="md:border-[1px] border-black" />
                <div className="flex flex-col gap-6 md:w-[33%] p-8 pt-4 md:pr-4 font-zen_kaku_gothic_new font-medium">
                  <p className="text-3xl md:text-2xl font-bold">{id.length === 1 ? id : `${id[0]}-${id[id.length - 1]}`}. {name.split('\n').join('')}</p>
                  <p>{description.split('\n').map((x, i) => (<span key={i} className="block">{x}</span>))}</p>
                  <p className="flex justify-end items-end text-5xl font-bold">{price.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')}<span className="text-2xl pl-2">円</span></p>
                  {types ?
                    (isLoading || !data) ? <p>読み込み中...</p>
                      : error ? <p>読み込みに失敗しました</p>
                        : <div>
                          <table className="w-full my-2">
                            <tbody>
                              {types.map((type, i) => (
                                <tr key={i}>
                                  <td className="pl-4 border-black border-[1.25px]">{id[i]}. {type}</td>
                                  <td className="size-4 p-2 border-black border-[1.25px]">
                                    {data.statuses[id[i]] ? <No /> : <AFew />}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          <p><AFew className="inline-block align-middle" />:在庫あり <No className="inline-block" />:在庫なし</p>
                          <p>※実際の販売状況の反映には時間がかかる場合があります。</p>
                        </div>
                    : null}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose} bg="transparent">
                  閉じる
                </Button>
              </ModalFooter>
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
          >
            <button onClick={onOpen} className="size-full" />
          </div>
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
            <p>¥{price.toString().replace(/(\d)(?=(\d{3})+$)/g, "$1,")}</p>
            <p className="font-zen_kaku_gothic_new font-bold leading-tight">
              {name.split("\n").map((x, i) => (
                <span key={i} className="block">
                  {x}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
      <div className={`${!isGoods || isLoading || !data || id.find(i => !data.statuses[i]) ? "hidden" : ""} z-40 absolute flex justify-center items-center size-fit inset-0 m-auto px-2 pt-[calc(var(--frame-width)/12.8)] pb-0 skew-y-[-4deg] rotate-[20deg] bg-white border-[#FF0C0C] text-center text-[calc((var(--frame-width)-1rem)/3.2)] ${isLarge ? "border-[8px]" : "border-4"} tracking-tighter text-[#FF0C0C] font-ltc_broadway`}>
        <p>SOLD<br />OUT</p>
      </div>
    </div>
  );
};

export const runtime = "edge";
