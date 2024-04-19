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
import { DotButton, useDotButton } from '@/components/EmblaDot';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from '@/components/EmblaArrow';

type Item = {
  id: number[],
  size: 's' | 'm' | 'l',
  name: string,
  imageCount: number,
  price: number,
  description: string
};
const goods: Item[] = [{
  id: [1],
  size: 'l',
  name: 'ルービック\nキューブ',
  imageCount: 2,
  price: 1700,
  description: '台座付。インテリアにも\n正規ルービックキューブライセンスマーク入り'
}, {
  id: [2],
  size: 'l',
  name: 'マグカップ',
  imageCount: 2,
  price: 1000,
  description: '文化祭ロゴマグカップ。食洗機可。日本製\n280ml'
}, {
  id: [3],
  size: 'l',
  name: 'マフラー\nタオル',
  imageCount: 2,
  price: 1000,
  description: '柔らかく品質のいいタオル。綿100%\n110×20cm'
}, {
  id: [4],
  size: 'l',
  name: 'トートバッグ',
  imageCount: 1,
  price: 800,
  description: 'ゆったりサイズ丈夫なキャンパス地\n横42×高さ38×幅13cm'
}, {
  id: [5],
  size: 'l',
  name: 'アクリル\nキーホルダー',
  imageCount: 1,
  price: 300,
  description: '300円文化祭ロゴ。\n縦約5㎝'
}, {
  id: [6],
  size: 'm',
  name: 'クリアしおり\n2枚組',
  imageCount: 1,
  price: 100,
  description: '丈夫なプラスチック素材。透明感がかっこい。\n135×47mm'
}, {
  id: [7],
  size: 'l',
  name: 'ロゴ\nステッカー',
  imageCount: 5,
  price: 100,
  description: 'ハガキサイズに10カットのステッカー\nPET素材、耐水性〇'
}, {
  id: [8, 9, 10, 11, 12, 13, 14, 15],
  size: 'l',
  name: '文化祭ロゴ\nTシャツ',
  imageCount: 7,
  price: 1500,
  description: 'サイズ S、M、L、LL'
}, {
  id: [16],
  size: 's',
  name: 'ホットマン\nシェニール織り\nハンカチ',
  imageCount: 2,
  price: 2500,
  description: '校門と本館の風景を芸術性の高いシェニール織りで表現。\n28×28cm'
}, {
  id: [17, 18, 19, 20],
  size: 'm',
  name: '灘校是布扇子\n京都白竹堂製',
  imageCount: 6,
  price: 1300,
  description: '紺、えんじ、深緑、白地\n灘校書道教師倉橋先生による校是書字。綿製'
}, {
  id: [21, 22],
  size: 'l',
  name: '校章チャーム',
  imageCount: 1,
  price: 1000,
  description: 'ダークブラウン、紺\n本革製校章チャーム。丁寧な手作りチャーム\n約3.3×3.3cm'
}, {
  id: [23],
  size: 'l',
  name: '灘ベア大',
  imageCount: 3,
  price: 2300,
  description: '約23cm\n灘校オリジナルオーダーのベアぬいぐるみ。NADAパーカー着用。背中に校章。'
}, {
  id: [24, 25],
  size: 'l',
  name: '灘ベア小',
  imageCount: 2,
  price: 800,
  description: '約8cm\n紺、えんじ\n灘校オリジナルオーダーのベアストラップ。'
}, {
  id: [26],
  size: 'm',
  name: 'ワンタッチ\nファイルケース',
  imageCount: 3,
  price: 300,
  description: 'A4クリアファイルがそのまま入る。プリントをすっきり整理\n32.4×23cm\n収容枚数 コピー用紙60枚'
}, {
  id: [27],
  size: 's',
  name: 'デザイン\nクリアファイル\n2枚組',
  imageCount: 4,
  price: 400,
  description: '文化祭ロゴデザインクリアファイル'
}, {
  id: [28, 29, 30, 31, 32],
  size: 'm',
  name: '無地\nクリアファイル',
  imageCount: 1,
  price: 100,
  description: '使いやすい無地'
}, {
  id: [33],
  size: 'm',
  name: '合格五角鉛筆HB',
  imageCount: 1,
  price: 150,
  description: '縁起のいい五角形の合格鉛筆'
}, {
  id: [34],
  size: 's',
  name: '鉛筆\nユニスターB\n6本セット',
  imageCount: 1,
  price: 400,
  description: 'ユニスターＢ'
}, {
  id: [35, 36, 37],
  size: 'l',
  name: 'ぺんてる\nスマッシュ',
  imageCount: 3,
  price: 900,
  description: 'ブラック、レッド、ダークグレー\n灘校生に大人気のスマッシュが灘校グッズに新登場'
}, {
  id: [38, 39, 40],
  size: 'l',
  name: 'クルトガ\nKSモデル',
  imageCount: 3,
  price: 500,
  description: 'ネイビー、 アイスブルー、ライトグレー\nクルトガ大人気モデル'
}, {
  id: [41, 42, 43, 44],
  size: 'm',
  name: 'シャープペン\nベリーシャ楽',
  imageCount: 2,
  price: 100,
  description: '黒、緑、ピンク、青\nお手頃価格だけど書き味抜群'
}, {
  id: [45, 46, 47],
  size: 's',
  name: 'ジェット\nストリーム\n3色ボールペン',
  imageCount: 2,
  price: 500,
  description: 'ブラック、ブルーグレー、アイスブルー\n間違えずに黒を出せる'
}, {
  id: [48, 49, 50],
  size: 's',
  name: 'ユニボール\nシグノRT1 0.5\n単色ボールペン',
  imageCount: 2,
  price: 150,
  description: 'スイスイ書ける単色ゲルインクボールペン。黒・赤・青'
}, {
  id: [51, 52, 53, 54],
  size: 's',
  name: 'ジェット\nストリーム\n多機能ペン2&1',
  imageCount: 2,
  price: 700,
  description: 'ネイビー、ボルドー、ブラック、ピンク\n最も使用頻度の高い赤・黒ボールペン＆シャープペンシルの組み合わせ'
}, {
  id: [55, 56, 57, 58],
  size: 's',
  name: '灘校校是\n消しゴム\nSEEDレーダー',
  imageCount: 5,
  price: 150,
  description: '紺・えんじ・緑・水色\n灘校書道教師倉橋先生による校是書字デザイン'
}, {
  id: [59],
  size: 'l',
  name: '蛍光ペン\n3色セット',
  imageCount: 1,
  price: 400,
  description: '灘校校章ケース入り'
}, {
  id: [60],
  size: 'l',
  name: '15センチ定規',
  imageCount: 1,
  price: 300,
  description: '使いやすい15センチ定規'
}, {
  id: [61, 62],
  size: 'l',
  name: '下敷き',
  imageCount: 1,
  price: 200,
  description: '暗記ペン用にも便利な赤・緑'
}, {
  id: [63],
  size: 'l',
  name: '灘校てぬぐい',
  imageCount: 1,
  price: 300,
  description: '灘中・灘校校章と校是'
}, {
  id: [0],
  size: 'l',
  name: '不織布バッグ',
  imageCount: 2,
  price: 100,
  description: '横270×高さ345×幅60mm\n＊無料レジ袋にかわるエコバッグの位置づけ。\n1-63の商品購入者のみ購入可'
}];

export default async function Page() {
  return (
    <ChakraProvider theme={theme}>
      <main className="font-alte_din p-4 md:p-8">
        <div className="flex justify-center p-6">
          <div className="relative">
            <div className="absolute w-8 h-8">
              <Image
                src="/img/star.svg"
                alt="キラキラ"
                fill
                className="-translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <div className="absolute right-0 bottom-0 w-12 h-12">
              <Image
                src="/img/star.svg"
                alt="キラキラ"
                fill
                className="translate-x-full translate-y-0 rotate-180"
              />
            </div>
            <p className="font-south_amsterdam text-theme text-8xl">Goods</p>
          </div>
        </div>
        <div className="m-4 md:m-8 grid gap-4 gap-y-[calc(1rem/cos(8deg))] grid-cols-3 md:grid-cols-4 skew-y-[4deg]">
          {goods.map((item, i) => (
            <Item key={item.id[0]} item={item} isLarge={i === 0} />
          ))}
        </div>
      </main>
    </ChakraProvider>
  );
}

const Item: FC<{ item: Item; isLarge: boolean }> = ({ item: { id, size, name, imageCount, price, description }, isLarge = false }) => {
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
        <div className={`absolute w-full -skew-y-[4deg] text-theme ${isLarge ? "aspect-[9/10]" : "aspect-[5/6]"}`}>
          <Modal isOpen={isOpen} onClose={onClose} size="xl" >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                <p className="text-theme text-2xl">{id.length === 1 ? id : `${id[0]}-${id[id.length - 1]}`}. {name.split('\n').join('')}</p>
                <p>{description.split('\n').map((x, i) => (<span key={i} className="block">{x}</span>))}</p>
              </ModalHeader>
              <ModalCloseButton className="text-theme" />
              <ModalBody>
                <section className="embla max-w-[48rem] m-auto rounded-xl [--slide-height:19rem] [--slide-spacing:1rem] [--slide-size:80%]">
                  <div className="embla__viewport overflow-hidden" ref={emblaRef}>
                    <div className="embla__container [backface-visibility:hidden] flex touch-pan-y ml-[calc(var(--slide-spacing)*-1)]">
                      {Array.from(Array(imageCount).keys()).map(i=>(<div className="embla__slide flex-[0_0_var(--slide-size)] min-w-0 aspect-square pl-[var(--slide-spacing)]" key={i}>
                        <div className="relative size-full p-1 border-2 border-gray-200 rounded-3xl">
                          <Image src={`/img/items/${`0${id[0]}`.slice(-2)}_${i+1}.jpg`} alt={name} fill className="object-contain" />
                        </div>
                      </div>))}
                    </div>
                  </div>
                  <div className="embla__controls grid-cols-[auto_1fr] justify-between gap-[1.2rem] mt-[1.8rem]">
                    <div className="embla__buttons grid grid-cols-2 gap-[1.6rem] items-center">
                      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                    </div>
                    <div className="embla__dots flex flex-wrap justify-end items-center mr-[calc((2.6rem-1.4rem)/2*(-1))]">
                      {scrollSnaps.map((_, index) => (
                        <DotButton
                          key={index}
                          onClick={() => onDotButtonClick(index)}
                          className={'embla__dot'.concat(
                            index === selectedIndex ? ' embla__dot--selected' : ''
                          )}
                        />
                      ))}
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
          <Image src={`/img/items/${`0${id[0]}`.slice(-2)}_1.jpg`} alt={name} fill className={`object-cover ${isLarge ? "-translate-y-[calc((tan(16deg)-tan(4deg))*(9/20)*100%)] [clipPath:polygon(0_calc((tan(16deg)-tan(4deg))*(9/10)*100%),100%_0,100%_80%,0_100%)]" : "-translate-y-[calc((tan(16deg)-tan(4deg))*(5/12)*100%)] [clipPath:polygon(0_calc((tan(16deg)-tan(4deg))*(5/6)*100%),100%_0,100%_100%,0_100%)]"}`} />
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
