import Image from "next/image";
import { FC } from "react";

export default async function Page() {
  const goods = [{ id: 1, name: "ルービック キューブ", price: 1700 }, { id: 2, name: "マグカップ", price: 1000 }, { id: 3, name: "文化祭ロゴ Tシャツ", price: 300 }, { id: 4, name: "名前の長さの 限界はこの位", price: 400 }, { id: 5, name: "ホットマン シェニール 織りハンカチ", price: 500 }, { id: 6, name: "灘校是布扇子 京都白竹堂製", price: 600 }, { id: 7, name: "灘校クラフトキット 専用クリアケース付き", price: 700 }, { id: 8, name: "ジェットストリーム 多機能ペン２＆１", price: 800 }, { id: 9, name: "商品9", price: 900 }, { id: 10, name: "商品10", price: 1000 }];
  return (
    <main className="font-alte_din max-w-[1000px] p-8">
      <p className="flex justify-center p-6 font-south_amsterdam text-theme text-6xl">Goods</p>
      <div className="py-6 grid gap-6 gap-y-8 grid-cols-4">
        {goods.map((item, i) => (
          <Item key={item.id} id={item.id} name={item.name} price={item.price} isLarge={i === 0} />
        ))}
      </div>
    </main>
  );
}

const Item: FC<{ id: number, name: string, price: number, isLarge?: boolean }> = ({ id, name, price, isLarge = false }) => {
  const shift = Math.sin(8 * Math.PI / 180) * 80;
  return (
    <div className={`relative aspect-[4/5] w-full ${isLarge ? "row-span-2 col-span-2 text-[64px] leading-none" : "text-3xl"}`}>
      <div className="absolute size-full">
        <Image src={`/img/_temp_goods_${isLarge ? "1" : "2"}.png`} alt={name} fill style={{ transform: `translate(0, -${shift / 2}%)`, objectFit: "cover", clipPath: `polygon(0 ${shift}%, 100% 0, 100% 100%, 0 ${100 + shift}%)` }}/>
      </div>
      <div className="size-full border-2 border-theme -skew-y-[8deg]">
        {/* <div className="absolute -top-0 w-0 h-0 mt-[44px] border-r-[218px] border-t-[130px] border-b-[44px] border-theme border-t-transparent" /> */}
        <div className="absolute w-[15%] h-[20%] top-0 right-0 bg-theme">
          <p className="size-full flex items-center justify-center text-white text-center text-[1em] font-bold">{id}</p>
        </div>
        <div style={{ clipPath: 'polygon(0 80%, 100% 40%, 100% 100%, 0 100%)' }} className="absolute w-full h-full bg-theme" />
        <div className="absolute bottom-0 right-0 p-[0.25em] text-[1em] text-white text-right">
          <p>￥{price.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')}</p>
          <p className="font-zen_kaku_gothic_new font-bold">{name.split(' ').map((x, i) => (<span key={i} className="inline-block">{x}</span>))}</p>
        </div>
      </div>
    </div>
  );
}

export const runtime = "edge";
