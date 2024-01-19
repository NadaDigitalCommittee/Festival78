import { CountDown } from "@/components/CountDown";
import Image from "next/image";

export default function Home() {
  const now = new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000;
  const festival = new Date("2024-05-02T00:30:00").getTime(); //UTC 00:30 JST 09:30
  const restTime = Math.floor((festival - now) / 1000);
  return (
    <div className="w-full max-w-[700px] mx-auto h-full overflow-x-hidden">
      <main className="">
        <div className="translate-x-[50%] -translate-y-[40%] h-[calc(min(100vw,400px))]">
          <div className="w-[150vw] max-w-[500px] h-[150vw] max-h-[500px] -left-[calc(min(75vw,250px))] relative object-none">
            <Image
              src={"/img/top/line2.svg"}
              alt="文化祭ロゴ"
              fill
              style={{
                objectFit: "fill",
                scale: 0.85,
              }}
              className="mt-[calc(min(32vw,120px))]"
            />
            <Image
              src={"/img/top/line3.png"}
              alt="文化祭ロゴ"
              fill
              style={{
                objectFit: "fill",
                scale: 1.3,
              }}
              className=""
            />
            {/* ↑これおかしいので変更必要 */}
            <Image
              src={"/img/logo1.png"}
              alt="文化祭ロゴ"
              fill
              style={{
                objectFit: "fill",
              }}
            />
          </div>
        </div>
        <div className="text-center text-theme">
          <p className="font-avianosans text-6xl font-bold tracking-wider">
            ODYSSEY
          </p>
          <p className="font-zen_kaku_gothic_new font-bold tracking-widest -translate-y-3">
            第78回灘校文化祭
          </p>
          <div className="font-alte_din tracking-wider">
            <p className="text-2xl">2024</p>
            <p className="text-3xl">05/02 Tue ▶ 05/03 Wed</p>
            <p className="text-3xl">9:30-15:30</p>
          </div>
          <div className="mb-20 mx-6">
            <CountDown restTime={restTime} />
          </div>
          {/* <div className="w-[72vw] h-[40.5vw] max-h-full mx-auto bg-slate-200">
            <p className="text-black">pv?</p>
          </div> */}
        </div>
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
          <div className="mt-12">
            <div className="flex items-center">
              <p className="relative h-0 -translate-y-8 font-south_amsterdam text-7xl text-theme/25">
                Concept
              </p>
              <div className="h-[1px] w-full bg-theme/25 mr-auto inline-block"></div>
            </div>
            <p className="font-zen_kaku_gothic_new text-2xl font-bold">
              コンセプト
            </p>
            <p className="font-zen_kaku_gothic_new mx-4 indent-4">
              今を生きてる喜びが宇宙(そら)を駆ける　風のしらべ　川のせせらぎ　胸の鼓動のリズムで踊れ　希望の螺旋を描き青空に向け　手を伸ばせば明日(あした)があるさ　新しいキミがいるから
            </p>
            <p className="font-zen_kaku_gothic_new mx-4 indent-4">
              たった100万年ほどの幸せを掴もう　輝くこの地球(ほし)に　Oh,
              愛を刻み込もうよ　(ウパウパウパウパ)　今を生きてる大切な生命(いのち)守ろう　風のしらべ　川のせせらぎ　永遠に願う　Ah…　今を生きてる喜びが宇宙(そら)を駆ける　風のしらべ　川のせせらぎ　胸の鼓動のリズムで踊れ　希望の螺旋を描き青空に向け　手を伸ばせば明日(あした)があるさ　新しいキミがいるから
            </p>
            <Image
              src={"/img/logo3.png"}
              alt="文化祭ロゴ"
              width="450"
              height="450"
              className="block mx-auto"
            />
          </div>
          <div className="mt-8">
            <div className="flex items-center">
              <p className="relative h-0 -translate-y-8 font-south_amsterdam text-7xl text-theme/25">
                Access
              </p>
              <div className="h-[1px] w-full bg-theme/25 mr-auto inline-block"></div>
            </div>
            <p className="font-zen_kaku_gothic_new text-2xl font-bold">
              アクセス
            </p>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 my-3">
              <div className="text-center font-zen_kaku_gothic_new border-r border-black">
                <p className="font-bold text-2xl">灘中学校・灘高等学校</p>
                <p className="text-sm">
                  <svg
                    width="14"
                    height="19"
                    viewBox="0 0 22 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block"
                  >
                    <path
                      d="M10.9998 0C5.04966 0 0.227539 4.82219 0.227539 10.7723C0.227539 16.8449 3.23741 18.1386 6.56416 22.1782C10.5433 27.0101 10.9998 32 10.9998 32C10.9998 32 11.4563 27.0101 15.4354 22.1782C18.7622 18.1386 21.772 16.8449 21.772 10.7723C21.772 4.82219 16.9499 0 10.9998 0ZM10.9998 14.4951C8.94373 14.4951 7.27704 12.8283 7.27704 10.7723C7.27704 8.71631 8.94379 7.04956 10.9998 7.04956C13.0558 7.04956 14.7225 8.71631 14.7225 10.7723C14.7225 12.8283 13.0558 14.4951 10.9998 14.4951Z"
                      fill="#616161"
                    />
                  </svg>
                  兵庫県神戸市東灘区魚崎北町8丁目5番1号
                </p>
              </div>
              <div className="grid grid-cols-2 font-zen_kaku_gothic_new font-bold w-[250px] mx-auto place-items-center">
                <p className="text-[20px]">JR住吉駅</p>
                <p>
                  <span className="text-[10px]">徒歩</span>
                  <span className="text-theme text-[24px]">10</span>
                  <span className="text-[12px]">分</span>
                </p>
                <p className="text-[20px]">阪神魚崎駅</p>

                <p>
                  <span className="text-[10px]">徒歩</span>
                  <span className="text-theme text-[24px]">10</span>
                  <span className="text-[12px]">分</span>
                </p>
                <p className="text-[20px]">阪急岡本駅</p>
                <p>
                  <span className="text-[10px]">徒歩</span>
                  <span className="text-theme text-[24px]">25</span>
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
    >

    </a>{" "}
    <script
      async
      src="https://platform.twitter.com/widgets.js"
      charSet="utf-8"
    ></script>
  </div>
);
