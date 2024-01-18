import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <main className="">
        <div className="translate-x-[50%] -translate-y-[40%] h-[100vw]">
          <div className="w-[150vw] h-[150vw] -left-[75vw] relative object-none">
            <Image src={"/img/top/line.svg"} alt="文化祭ロゴ" fill style={{
              "objectFit": "fill",
              scale: 0.85
            }} className="mt-[32vw]" />
            {/* ↑これおかしいので変更必要 */}
            <Image src={"/img/logo1.png"} alt="文化祭ロゴ" fill style={{
              "objectFit": "fill"
            }} />
          </div>
        </div>
        <div className="text-center text-[#ff4d00]">
          <p className="font-avianosans text-6xl font-bold tracking-wider">ODYSSEY</p>
          <p className="font-zen_kaku_gothic_new font-bold tracking-widest -translate-y-3">第78回灘校文化祭</p>
          <div className="font-alte_din tracking-wider">
            <p className="text-2xl">2024</p>
            <p className="text-3xl">05/02 Tue ▶ 05/03 Wed</p>
            <p className="text-3xl">9:30-15:30</p>
          </div>
          <div className="mb-8 mx-6">
            <div className="font-limelight text-7xl tracking-wide -skew-y-12">
              <p className="text-left translate-x-4"><span className="text-xl font-bold">文化祭まであと</span><br /></p>
              <p>98<span className="text-2xl font-bold">日 </span>17<span className="text-2xl font-bold">時間</span><br /></p>
              <p className="translate-x-4">55<span className="text-2xl font-bold">分 </span>06<span className="text-2xl font-bold">秒</span></p>
            </div>
          </div>
          <div className="w-[72vw] h-[40.5vw] translate-x-[14vw] bg-slate-200">
            <p className="text-black">pv?</p>
          </div>
        </div>
        <div className="mx-5">
          <div className="mt-8">
            <p className="relative h-0 -translate-y-8 font-south_amsterdam text-7xl text-[#ff4d00]/25">News</p>
            <p className="font-zen_kaku_gothic_new text-2xl font-bold">お知らせ</p>
            <div className="m-4 border-slate-800 border-[1px]">
              <div className="flex h-12 justify-between ml-2">
                <p className="font-times_new_roman text-slate-800/50 m-0"><span className="text-xs leading-none">2024</span><br /><span className="text-2xl leading-none">5/1</span></p>
                <p className="font-zen_kaku_gothic_new text-xl">こんにちは</p>
              </div>
            </div>
            <div>[twitter]</div>
          </div>
          <div className="mt-8">
            <p className="relative h-0 -translate-y-8 font-south_amsterdam text-7xl text-[#ff4d00]/25">Concept</p>
            <p className="font-zen_kaku_gothic_new text-2xl font-bold">コンセプト</p>
            <p className="font-zen_kaku_gothic_new mx-4 indent-4">今を生きてる喜びが宇宙(そら)を駆ける　風のしらべ　川のせせらぎ　胸の鼓動のリズムで踊れ　希望の螺旋を描き青空に向け　手を伸ばせば明日(あした)があるさ　新しいキミがいるから</p>
            <p className="font-zen_kaku_gothic_new mx-4 indent-4">たった100万年ほどの幸せを掴もう　輝くこの地球(ほし)に　Oh, 愛を刻み込もうよ　(ウパウパウパウパ)　今を生きてる大切な生命(いのち)守ろう　風のしらべ　川のせせらぎ　永遠に願う　Ah…　今を生きてる喜びが宇宙(そら)を駆ける　風のしらべ　川のせせらぎ　胸の鼓動のリズムで踊れ　希望の螺旋を描き青空に向け　手を伸ばせば明日(あした)があるさ　新しいキミがいるから</p>
            <Image src={"/img/logo3.png"} alt="文化祭ロゴ" width="450" height="450" style={{
              //"objectFit": "fill"
            }} className="block mx-auto" />
          </div>
          <div className="mt-8">
            <p className="relative h-0 -translate-y-8 font-south_amsterdam text-7xl text-[#ff4d00]/25">Access</p>
            <p className="font-zen_kaku_gothic_new text-2xl font-bold">アクセス</p>
            <p>灘中学校・灘高等学校</p>
            <svg width="22" height="32" viewBox="0 0 22 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.9998 0C5.04966 0 0.227539 4.82219 0.227539 10.7723C0.227539 16.8449 3.23741 18.1386 6.56416 22.1782C10.5433 27.0101 10.9998 32 10.9998 32C10.9998 32 11.4563 27.0101 15.4354 22.1782C18.7622 18.1386 21.772 16.8449 21.772 10.7723C21.772 4.82219 16.9499 0 10.9998 0ZM10.9998 14.4951C8.94373 14.4951 7.27704 12.8283 7.27704 10.7723C7.27704 8.71631 8.94379 7.04956 10.9998 7.04956C13.0558 7.04956 14.7225 8.71631 14.7225 10.7723C14.7225 12.8283 13.0558 14.4951 10.9998 14.4951Z" fill="#616161"/>
</svg>
            <p>兵庫県神戸市東灘区魚崎北町8丁目5番1号</p>
          </div>
        </div>
      </main>
    </div>
  );
}
