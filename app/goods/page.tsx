import { Header } from "@/components/Header";
import { Items } from "./Items";

export const dynamic = "force-dynamic";

export default async function Page() {
  const res = await fetch(`${process.env.HOST}/api/goods`, {
    method: "GET",
    next: {
      revalidate: 1,
    },
  });
  const data = await res.json();
  return (
    <main className="p-4 font-alte_din md:p-8">
      <div className="flex justify-center p-6">
        <Header path="/goods">Goods</Header>
      </div>
      <p className="m-4 font-zen_kaku_gothic_new text-xl text-theme md:m-8 md:text-2xl">
        画像をタップすると説明やサンプル画像の一覧、在庫状況を見ることができます。
      </p>
      <Items isGoods statuses={data.statuses} />
      <div className="flex justify-center p-6">
        <Header path="/goods">Souvenirs</Header>
      </div>
      <Items statuses={data.statuses} />
      <div className="h-[200px]" />
    </main>
  );
}
