import { CountDown } from "@/components/CountDown";
import { Line2 } from "@/components/Line2";
import { Arrow1 } from "@/components/svg/Arrow1";
import { MapPin } from "@/components/svg/MapPin";
import Logo3 from "@/public/img/logo3.webp";
import Line1 from "@/public/img/top/line1.webp";
import Star from "@/public/img/top/star.svg";
import styles from "@/styles/top.module.scss";
import { YouTubeEmbed } from "@next/third-parties/google";
import Image from "next/image";

export default function Home() {
  const now = new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000;
  const festival = new Date("2024-05-02T00:00:00").getTime(); //UTC 00:30 JST 09:00
  const restTime = Math.floor((festival - now) / 1000);
  return (
    <div className="mx-auto h-full w-full max-w-[1000px] overflow-x-hidden">
      <main className="">
        <div className="lg:min-h-[min(100svh,950px)]">
          <div className="h-[calc(min(100vw,550px))] -translate-y-[40%] translate-x-[50%]">
            <div className="relative -left-[calc(min(75vw,400px))] h-[150vw] max-h-[800px] w-[150vw] max-w-[800px]">
              <Line2 />
              <Image
                src={Line1}
                alt="文化祭ロゴ回転する線"
                fill
                style={{
                  scale: 1.3,
                }}
                quality={50}
                className={styles.rotate_img}
                priority
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full"
                srcSet="/img/logo1_900w.webp 900w,/img/logo1_600w.webp 600w, /img/logo1_450w.webp 450w"
                alt="文化祭ロゴ"
              />
            </div>
          </div>
          <div className="relative text-center text-theme">
            <p className="relative block font-avianosans text-6xl font-bold tracking-wider md:text-9xl">
              ODYSSEY
              <Image
                src={Star}
                width={50}
                height={55}
                alt="キラキラ"
                className="absolute block md:hidden"
                style={{
                  translate: "calc(50vw + 120px) -105px",
                }}
              />
              <Image
                src={Star}
                width={100}
                height={115}
                alt="キラキラ"
                className="absolute block max-md:hidden lg:hidden"
                style={{
                  translate: "calc(50vw + 270px) -210px",
                }}
              />
              <Image
                src={Star}
                width={100}
                height={115}
                alt="キラキラ"
                className="absolute block max-lg:hidden"
                style={{
                  translate: "760px -210px",
                }}
              />
            </p>
            <p className="-translate-y-3 font-zen_kaku_gothic_new font-bold tracking-widest md:text-4xl">
              第78回灘校文化祭
            </p>
          </div>
        </div>
        <div className="text-center text-theme md:mt-6">
          <div className="block font-alte_din tracking-wider lg:hidden">
            <p className="text-2xl md:text-4xl">2024</p>
            <p className="text-3xl md:text-6xl">
              05/02 Thu <Arrow1 direction="right" /> 05/03 Fri
            </p>
            <p className="text-3xl md:text-6xl">9:00-15:30</p>
          </div>
          <div className="hidden w-full items-center justify-center gap-[150px] font-alte_din tracking-wider lg:flex">
            <div>
              <p className="text-4xl">2024</p>
              <p className="text-5xl">05/02 Thu</p>
              <Arrow1 direction="down" />
              <p className="text-5xl">05/03 Fri</p>
            </div>
            <p className="text-6xl">9:00-15:30</p>
          </div>

          <div className="mx-6 mb-24 mt-6">
            <CountDown restTime={restTime} />
          </div>
        </div>
        <YouTubeEmbed videoid="MiaSs1-RXK0" style="margin:auto" />
        <div className="mx-5">
          {/* <div className="mt-12">
            <div className="flex items-center">
              <p className="relative h-0 -translate-y-8 font-south_amsterdam text-7xl text-theme/25">
                News
              </p>
              <div className="h-[1px] w-full bg-theme/25 mr-auto inline-block"></div>
            </div>
            <p className="font-zen_kaku_gothic_new text-2xl font-bold">
              お知らせ
            </p>
            <div className="m-4 border-slate-800 border-[1px]">
              <div className="flex h-12 justify-between ml-2">
                <p className="font-times_new_roman text-slate-800/50 m-0">
                  <span className="text-xs leading-none">2024</span>
                  <br />
                  <span className="text-2xl leading-none">5/1</span>
                </p>
                <p className="font-zen_kaku_gothic_new text-xl">こんにちは</p>
              </div>
            </div>
            <Tweet />
          </div> */}
          <div className="mt-16">
            <div className="flex items-center">
              <p className="relative h-0 -translate-y-8 font-south_amsterdam text-7xl text-theme/25">
                Concept
              </p>
              <div className="mr-auto inline-block h-[1px] w-full bg-theme/25"></div>
            </div>
            <p className="font-zen_kaku_gothic_new text-2xl font-bold">
              コンセプト
            </p>
            <br />
            <div className=" flex flex-col text-base md:flex-row">
              <div>
                <p className="mx-4 indent-4 font-zen_kaku_gothic_new">
                  第78回灘校文化祭テーマ <br />
                  「ODYSSEY」には"長い冒険"という意味があります。
                </p>
                <p className="mx-4 indent-4 font-zen_kaku_gothic_new">
                  私たちが作り上げる唯一無二の灘校文化祭を、羅針盤であるロゴを片手に冒険して欲しい。
                  そして灘校文化祭での体験が、皆さんそれぞれの"Odyssey"の中の1つのターニングポイントとなって欲しい。
                  そんな想いが込められています。
                </p>
                <br />
              </div>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                width="450"
                height="450"
                srcSet="/img/logo3_900w.webp 900w,/img/logo3_600w.webp 600w, /img/logo3_450w.webp 450w"
                className="mx-auto my-auto block"
                alt="文化祭ロゴ"
              />
            </div>
          </div>
          <div className="mt-8">
            <div className="flex items-center">
              <p className="relative h-0 -translate-y-8 font-south_amsterdam text-7xl text-theme/25">
                Access
              </p>
              <div className="mr-auto inline-block h-[1px] w-full bg-theme/25"></div>
            </div>
            <p className="font-zen_kaku_gothic_new text-2xl font-bold">
              アクセス
            </p>

            <div className="my-3 mb-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2">
              <div className="flex flex-col items-center justify-center border-black text-center font-zen_kaku_gothic_new md:border-r">
                <div>
                  <p className="text-2xl font-bold">灘中学校・灘高等学校</p>
                  <p className="text-sm">
                    <MapPin className="fill-[#616161]" />
                    兵庫県神戸市東灘区魚崎北町8丁目5番1号
                  </p>
                </div>
              </div>
              <div className="mx-auto grid w-[240px] grid-cols-2 place-items-center font-zen_kaku_gothic_new font-bold">
                <p className="text-[22px]">JR住吉駅</p>
                <p>
                  <span className="text-[10px]">徒歩</span>
                  <span className="text-[24px] text-theme">10</span>
                  <span className="text-[12px]">分</span>
                </p>
                <p className="text-[22px]">阪神魚崎駅</p>

                <p>
                  <span className="text-[10px]">徒歩</span>
                  <span className="text-[24px] text-theme">10</span>
                  <span className="text-[12px]">分</span>
                </p>
                <p className="text-[22px]">阪急岡本駅</p>
                <p>
                  <span className="text-[10px]">徒歩</span>
                  <span className="text-[24px] text-theme">25</span>
                  <span className="text-[12px]">分</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

const Tweet = () => (
  <div className="my-3">
    <a
      className="twitter-timeline"
      data-height="300"
      data-theme="light"
      href="https://twitter.com/Nada_festival?ref_src=twsrc%5Etfw"
    ></a>{" "}
    <script
      async
      src="https://platform.twitter.com/widgets.js"
      charSet="utf-8"
    ></script>
  </div>
);

export const runtime = "edge";
