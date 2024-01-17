import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen h-screen">
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
        <div className="text-center text-red-500">
          <p className="font-avianosans text-6xl tracking-wider">ODYSSEY</p>
          <p className="font-zen_kaku_gothic_new tracking-widest text-red-500 -translate-y-3">第78回灘校文化祭</p>
          <div className="font-alte_din tracking-wider">
            <p className="text-2xl">2024</p>
            <p className="text-3xl">05/02 Tue → 05/03 Wed</p>
            <p className="text-3xl">9:30-15:30</p>
          </div>
          <div>
            <p className="font-zen_kaku_gothic_new">文化祭まであと</p>
            <p>
              <span className="font-limelight">98</span>
            </p>

          </div>
        </div>
      </main>
    </div>
  );
}
