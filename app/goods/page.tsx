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
  ModalBody
} from "@chakra-ui/modal";
import useEmblaCarousel from "embla-carousel-react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
  useDotButton
} from '@/components/Embla';
import { goods, Item, souvenirs } from "@/lib/data/goods";
import { Header } from "@/components/Header";
import { AFew, Few, No } from "@/components/svg/Stock";

export default async function Page() {
  return (
    <ChakraProvider theme={theme}>
      <main className="font-alte_din p-4 md:p-8">
        <div className="flex justify-center p-6">
          <Header path="/goods">Goods</Header>
        </div>
        <p className="m-4 md:m-8 font-zen_kaku_gothic_new text-theme text-xl md:text-2xl">画像をタップすると詳細とサンプル画像の一覧を見ることができます。</p>
        <div className="m-4 my-8 md:m-8 md:my-16 grid gap-4 gap-y-[calc(1rem/cos(8deg))] grid-cols-3 md:grid-cols-4 skew-y-[4deg]">
          {goods.map((item, i) => (
            <Frame key={item.id[0]} isGoods item={item} isLarge={i === 0} />
          ))}
        </div>
        <div className="flex justify-center p-6">
          <Header path="/goods">Souvenirs</Header>
        </div>
        <div className="m-4 my-8 md:m-8 md:my-16 grid gap-4 gap-y-[calc(1rem/cos(8deg))] grid-cols-3 md:grid-cols-4 skew-y-[4deg]">
          {souvenirs.map((item, i) => (
            <Frame key={item.id[0]} item={item} isLarge={i === 0} />
          ))}
        </div>
        <div className="h-[200px]" />
      </main>
    </ChakraProvider>
  );
}

const Frame: FC<{ isGoods?: boolean, item: Item; isLarge?: boolean }> = ({ isGoods = false, item: { id, size, name, imageCount, price, description, types }, isLarge = false }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [emblaRef, emblaApi] = useEmblaCarousel({ containScroll: false });
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <div className={`relative w-full leading-none ${isLarge ? "h-[100%] row-span-2 col-span-2 text-[max(0rem,calc((100vw-6rem)/12))] md:text-[max(0rem,calc((100vw-11rem)/16))]" : "aspect-[4/5] text-[max(0rem,calc((100vw-6rem)/24))] md:text-[max(0rem,calc((100vw-11rem)/32))]"}`}>
      <div className={`absolute inset-0 ${isLarge ? "my-[calc((100%+1rem)*tan(16deg)/4)]" : ""}`}>
        <div className={`absolute w-full -skew-y-[4deg] text-theme ${isLarge ? "aspect-[9/10]" : "aspect-[calc(1/(1+tan(12deg)))]"}`}>
          <Modal isOpen={isOpen/*isGoods && id[0] === 35*/} onClose={onClose} size={{ base: "sm", md: "4xl" }} isCentered >
            <ModalOverlay />
            <ModalContent className="relative p-2 md:p-4" mx="1rem" rounded="2.5rem">
              <button onClick={onClose} className="absolute flex justify-center items-center top-4 right-4 size-[3.2rem] md:size-[2.4rem]">
                <svg className="size-[50%]" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2.82812" width="40" height="4" transform="rotate(45 2.82812 0)" fill="#2F2F2F" />
                  <rect y="28.2842" width="40" height="4" transform="rotate(-45 0 28.2842)" fill="#2F2F2F" />
                </svg>
              </button>
              <ModalBody className="md:flex" p={{ base: "0", md: "0.5rem" }}>
                <section className="max-w-[48rem] w-full md:w-[67%] mt-16 md:my-auto md:mr-4 rounded-xl [--slide-spacing:1rem] [--slide-size:100%]">
                  <div className="flex justify-between md:h-[50svh] md:p-4">
                    <div className="flex items-center text-theme">
                      <div className="size-[2.4rem] md:size-[3.2rem]">
                        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                      </div>
                    </div>
                    <div className="overflow-hidden w-[calc(100%-5.8rem)] md:w-[calc(100%-8.4rem)] max-md:aspect-square flex items-center" ref={emblaRef}>
                      <div className="[backface-visibility:hidden] flex touch-pan-y h-full w-[calc(100%+var(--slide-spacing))] ml-[calc(var(--slide-spacing)*-1)]">
                        {Array.from(Array(imageCount).keys()).map(i => (<div className="flex-[0_0_var(--slide-size)] min-w-0 pl-[var(--slide-spacing)]" key={i}>
                          <div className="relative size-full">
                            <Image src={`/img/items/${isGoods ? "" : "souvenirs/"}${`0${id[0]}`.slice(-2)}_${i + 1}.webp`} alt={name} fill className="object-contain" />
                          </div>
                        </div>))}
                      </div>
                    </div>
                    <div className="flex items-center text-theme">
                      <div className="size-[2.4rem] md:size-[3.2rem]">
                        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center h-12 md:h-8 mt-2 md:m-0 md:mb-2 -border-t-2">
                    <div className="flex flex-wrap justify-center items-center">
                      {scrollSnaps.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => onDotButtonClick(index)}
                          className={`flex items-center justify-center size-[2rem] rounded-[50%] after:shadow-theme after:flex after:size-[1rem] after:rounded-[50%] after:items-center] ${index === selectedIndex ? 'after:shadow-[inset_0_0_0_1rem]' : 'after:shadow-[inset_0_0_0_0.1rem]'}`}
                        />
                      ))}
                    </div>
                  </div>
                </section>
                <div className="md:border-[1px] border-black" />
                <div className="flex flex-col gap-6 md:w-[33%] p-8 pt-4 md:pr-4 font-zen_kaku_gothic_new font-medium">
                  <p className="text-3xl md:text-2xl font-bold">{id.length === 1 ? id : `${id[0]}-${id[id.length - 1]}`}. {name.split('\n').join('')}</p>
                  <p>{description.split('\n').map((x, i) => (<span key={i} className="block">{x}</span>))}</p>
                  <p className="flex justify-end items-end text-5xl font-bold">{price.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')}<span className="text-2xl pl-2">円</span></p>
                  {types ?
                    <table className="w-full mt-2">
                      <tbody>
                        {types.map((type, i) => (
                          <tr key={i}>
                            <td className="pl-4 border-black border-[1.25px]">{id[i]}. {type}</td>
                            <td className="size-4 p-2 border-black border-[1.25px]">
                              <AFew />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table> : null}
                </div>
              </ModalBody>
            </ModalContent>
          </Modal>
          <Image src={`/img/items/${isGoods ? "" : "souvenirs/"}${`0${id[0]}`.slice(-2)}_1.webp`} alt={name} fill className={`object-cover ${isLarge ? "-translate-y-[calc((tan(16deg)-tan(4deg))*(9/20)*100%)] [clipPath:polygon(0_calc((tan(16deg)-tan(4deg))*(9/10)*100%),100%_0,100%_80%,0_100%)]" : "-translate-y-[calc((tan(16deg)-tan(4deg))*(5/12)*100%)] [clipPath:polygon(0_calc((tan(16deg)-tan(4deg))*(5/6)*100%),100%_0,100%_100%,0_100%)]"}`} />
          <div className={`size-full pl-1 ${isLarge ? "translate-y-[calc((tan(16deg)-tan(4deg))*(9/20)*100%)]" : "translate-y-[calc((tan(16deg)-tan(4deg))*(5/12)*100%)]"}`}>
            <VscExpandAll />
          </div>
        </div>
        <div className="relative size-full -skew-y-[16deg]">
          <div className={`absolute size-full border-theme ${isLarge ? "border-[6px]" : "border-[3px]"}`}>
            <button onClick={onOpen} className="size-full" />
          </div>
          <div className="absolute w-[15%] h-[20%] top-0 right-0 bg-theme">
            <p className={`size-full flex items-center justify-center text-white text-center font-bold leading-none ${id.length === 1 ? "text-[120%]" : "text-[80%]"}`}>{id.length === 1 ? id : (<span>{id[0]}-<br />{id[id.length - 1]}</span>)}</p>
          </div>
          <div className={`absolute size-full bg-theme ${isLarge ? "[clip-path:polygon(0_80%,100%_30%,100%_100%,0_100%)]" : "[clip-path:polygon(0_80%,100%_40%,100%_100%,0_100%)]"}`} />
          <div className={`absolute bottom-0 right-0 p-[0.4em] text-white text-right ${size === 's' ? "text-[85%]" : size === 'm' ? "text-[100%]" : "text-[110%]"}`}>
            <p><span className="text-[75%]">¥</span>{price.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')}</p>
            <p className="font-zen_kaku_gothic_new font-bold leading-tight">{name.split('\n').map((x, i) => (<span key={i} className="block">{x}</span>))}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export const runtime = "edge";
