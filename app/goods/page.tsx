"use client";

import Image from "next/image";
import { VscExpandAll } from "react-icons/vsc";
import { FC } from "react";
import { useDisclosure } from "@chakra-ui/hooks";
import { Button } from "@chakra-ui/button";
import { ChakraProvider } from "@chakra-ui/provider";
import { theme } from "@chakra-ui/theme";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
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

export default async function Page() {
  return (
    <ChakraProvider theme={theme}>
      <main className="font-alte_din p-4 md:p-8">
        <div className="flex justify-center p-6">
          <Header path="/goods">Goods</Header>
        </div>
        <p className="m-4 md:m-8 font-zen_kaku_gothic_new text-theme text-xl md:text-2xl">画像をタップするとサンプル画像の一覧を見ることができます。</p>
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
        <div className="h-[200px]"/>
      </main>
    </ChakraProvider>
  );
}

const Frame: FC<{ isGoods?: boolean, item: Item; isLarge?: boolean }> = ({ isGoods = false, item: { id, size, name, imageCount, price, description }, isLarge = false }) => {
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
          <Modal isOpen={isOpen} onClose={onClose} size="xl" >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                <p className="text-theme text-2xl">{id.length === 1 ? id : `${id[0]}-${id[id.length - 1]}`}. {name.split('\n').join('')}</p>
                <p className="px-2">{description.split('\n').map((x, i) => (<span key={i} className="block">{x}</span>))}</p>
              </ModalHeader>
              <ModalCloseButton className="text-theme" />
              <ModalBody>
                <section className="embla max-w-[48rem] m-auto rounded-xl [--slide-height:19rem] [--slide-spacing:1rem] [--slide-size:80%]">
                  <div className="embla__viewport overflow-hidden" ref={emblaRef}>
                    <div className="embla__container [backface-visibility:hidden] flex touch-pan-y ml-[calc(var(--slide-spacing)*-1)]">
                      {Array.from(Array(imageCount).keys()).map(i=>(<div className="embla__slide flex-[0_0_var(--slide-size)] min-w-0 aspect-square pl-[var(--slide-spacing)]" key={i}>
                        <div className="relative size-full p-1 border-2 border-gray-200 rounded-3xl">
                          <Image src={`/img/items/${isGoods ? "" : "souvenirs/"}${`0${id[0]}`.slice(-2)}_${i+1}.webp`} alt={name} fill className="object-contain" />
                        </div>
                      </div>))}
                    </div>
                  </div>
                  <div className="embla__controls flex justify-between mt-[1.8rem]">
                    <div className="items-center text-theme">
                      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    </div>
                    <div className="embla__dots flex flex-wrap justify-end items-center mr-[calc((2.6rem-1.4rem)/2*(-1))]">
                      {scrollSnaps.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => onDotButtonClick(index)}
                          className={'embla__dot flex items-center justify-center size-[2.6rem] rounded-[50%] after:shadow-[inset_0_0_0_0.2rem_rgb(234,234,234)] after:flex after:size-[1.4rem] after:rounded-[50%] after:items-center]'.concat(
                            index === selectedIndex ? ' after:shadow-theme after:shadow-[inset_0_0_0_0.2rem]' : ''
                          )}
                        />
                      ))}
                    </div>
                    <div className="items-center text-theme">
                      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                    </div>
                  </div>
                </section>
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose} bg="transparent" >
                  閉じる
                </Button>
              </ModalFooter>
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
            <p>¥{price.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')}</p>
            <p className="font-zen_kaku_gothic_new font-bold leading-tight">{name.split('\n').map((x, i) => (<span key={i} className="block">{x}</span>))}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export const runtime = "edge";
