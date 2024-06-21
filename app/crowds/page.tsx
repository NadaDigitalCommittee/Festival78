import { FC } from "react";
import { Header } from "@/components/Header";

export const dynamic = "force-dynamic";
export const runtime = "edge";

export default async function Page() {
  const data = await fetch(`${process.env.HOST}/api/crowds`, {
    method: "GET",
    next: { revalidate: 10 },
  })
    .then((res) => res.json())
    .then((data) => data.statuses);
  const shogiData = await fetch(`${process.env.HOST}/api/crowds/shogi`, {
    method: "GET",
    next: { revalidate: 10 },
  }).then((res) => res.json());

  return (
    <main className="p-4 font-zen_kaku_gothic_new md:p-8">
      <div className="flex justify-center p-6">
        <Header path="/crowds">Crowds</Header>
      </div>
      <Body data={data} shogiData={shogiData} />
    </main>
  );
}

type queuingPerson = {
  number: number;
  time: number;
};
type shogiData = {
  queue: queuingPerson[];
  queuingTime: number;
  queuingNumber: number;
  skippedNumbers: number[];
};
type Props = {
  shogiData: shogiData;
  data: number[];
};

const Body: FC<Props> = ({ shogiData, data }) => {
  const stages = {
    stages: [
      "中庭ステージ",
      "視聴覚ステージ",
      "大講義ステージ",
      "本館ステージ",
    ],
    schoolyard: [
      "ヨーヨー釣り",
      "スーパーボールすくい",
      "野球",
      "射的",
      "キックターゲット",
    ],
  };
  const statuses = [
    {
      str: "空きあり",
      str2: "待ちなし",
      str3: "空きあり",
      color: "text-[#00BA13]",
    },
    {
      str: "混雑",
      str2: "待ち30分未満",
      str3: "混雑",
      color: "text-[#FF9900]",
    },
    {
      str: "満員",
      str2: "待ち30分以上",
      str3: "大混雑",
      color: "text-[#FF0C0C]",
    },
  ];
  const statuses_schoolyard = [
    <p key={0} className="text-4xl text-[#00BA13] md:text-6xl">
      待ちなし
    </p>,
    <p key={1} className="text-xl text-[#FF9900]">
      待ち<span className="text-4xl md:text-6xl">30分未満</span>
    </p>,
    <p key={2} className="text-xl text-[#FF0C0C]">
      待ち<span className="text-4xl md:text-6xl">30分以上</span>
    </p>,
  ];
  return (
    <>
      <>
        <div className="h-14 w-0" />
        <div className="flex items-center">
          <p className="relative h-0 -translate-y-8 font-south_amsterdam text-7xl text-theme/25">
            Stages
          </p>
          <div className="mr-auto inline-block h-[1px] w-full bg-theme/25"></div>
        </div>
        <p className="font-zen_kaku_gothic_new text-2xl font-bold">ステージ</p>
      </>
      <div className="grid grid-cols-1 grid-rows-4 px-8 md:grid-cols-2 md:grid-rows-2">
        {stages.stages.map((stageName, i) => (
          <div
            key={i}
            className={`flex flex-col gap-2 border-[#2F2F2F] p-4 text-center font-bold md:gap-4 md:p-8 ${i === 0 ? "border-b-[1px] md:border-r-[1px]" : i === 1 ? "border-b-[1px]" : i === 2 ? "max-md:border-b-[1px] md:border-r-[1px]" : ""}`}
          >
            <p className="text-2xl">{stageName}</p>
            <p
              className={`text-4xl md:text-7xl ${!data ? "text-black" : statuses[data[i]].color}`}
            >
              {!data ? "読み込み失敗" : statuses[data[i]].str}
            </p>
          </div>
        ))}
      </div>
      <>
        <div className="h-14 w-0" />
        <div className="flex items-center">
          <p className="relative h-0 -translate-y-8 font-south_amsterdam text-7xl text-theme/25">
            Schoolyard
          </p>
          <div className="mr-auto inline-block h-[1px] w-full bg-theme/25"></div>
        </div>
        <p className="font-zen_kaku_gothic_new text-2xl font-bold">
          第一グラウンド
        </p>
      </>
      <div className="grid grid-cols-1 grid-rows-4 px-8 md:grid-cols-2 md:grid-rows-2">
        {stages.schoolyard.map((stageName, i) => (
          <div
            key={i}
            className={`flex flex-col gap-2 border-[#2F2F2F] p-4 text-center font-bold md:gap-4 md:p-8 ${i === 0 ? "border-b-[1px] md:border-r-[1px]" : i === 1 ? "border-b-[1px]" : i === 2 ? "border-b-[1px] md:border-r-[1px]" : i === 3 ? "border-b-[1px]" : "md:border-r-[1px]"}`}
          >
            <p className="text-2xl">{stageName}</p>
            {!data ? (
              <p className="text-4xl md:text-6xl">読み込み失敗</p>
            ) : (
              statuses_schoolyard[data[i + 4]]
            )}
          </div>
        ))}
      </div>
      <>
        <div className="h-14 w-0" />
        <div className="flex items-center">
          <p className="relative h-0 -translate-y-8 font-south_amsterdam text-7xl text-theme/25">
            Circles
          </p>
          <div className="mr-auto inline-block h-[1px] w-full bg-theme/25"></div>
        </div>
        <p className="font-zen_kaku_gothic_new text-2xl font-bold">サークル</p>
      </>
      <div className="grid grid-cols-1 grid-rows-2 px-8 md:grid-cols-2 md:grid-rows-1">
        <div className="flex flex-col gap-2 border-b-[1px] border-[#2F2F2F] p-4 text-center font-bold md:gap-4 md:border-r-[1px] md:p-8">
          <p className="text-2xl">アマチュア無線研究部</p>
          <p
            className={`text-4xl md:text-7xl ${!data ? "text-black" : statuses[data[9]].color}`}
          >
            {!data ? "読み込み失敗" : statuses[data[9]].str3}
          </p>
        </div>
        <div className="flex flex-col gap-2 border-b-[1px] border-[#2F2F2F] p-4 text-center font-bold md:gap-4 md:p-8">
          <p className="text-2xl">謎解き迷路</p>
          {!data ? (
            <p className="text-4xl md:text-6xl">読み込み失敗</p>
          ) : (
            statuses_schoolyard[data[10]]
          )}
        </div>
        <div className="flex flex-col gap-2 p-4 text-center font-bold md:gap-4 md:p-8">
          <p className="text-2xl">将棋部</p>
          {!shogiData ? (
            <p className="text-4xl md:text-7xl">読み込み失敗</p>
          ) : (
            <>
              <div className="col-span-2 grid grid-cols-2 grid-rows-2 gap-x-2 text-xl">
                <p className="flex items-end justify-end">待ち人数:</p>
                {isNaN(shogiData.queuingNumber ?? NaN) ? (
                  <p className="flex items-end">読み込み失敗</p>
                ) : (
                  <p className="flex items-end">
                    <span
                      className={`text-5xl md:text-7xl ${statuses[shogiData.queuingNumber === 0 ? 0 : shogiData.queuingNumber < 5 ? 1 : 2].color}`}
                    >
                      {shogiData.queuingNumber}
                    </span>
                    人
                  </p>
                )}
                <p className="flex items-end justify-end">待ち時間:</p>
                {isNaN(shogiData.queuingTime ?? NaN) ? (
                  <p className="flex items-end">読み込み失敗</p>
                ) : (
                  <p className="flex items-end">
                    約
                    <span
                      className={`text-5xl md:text-7xl ${statuses[shogiData.queuingTime === 0 ? 0 : shogiData.queuingTime < 30 ? 1 : 2].color}`}
                    >
                      {shogiData.queuingTime}
                    </span>
                    分
                  </p>
                )}
              </div>
              <p>※待ち時間0分でも、多少待ち時間が存在することがあります。</p>
            </>
          )}
        </div>
        <div
          className={`${!shogiData ? "hidden" : ""} flex flex-col gap-4 p-4 text-center font-bold md:p-8`}
        >
          <div>
            <p className="text-xl">次にご案内する方</p>
            {shogiData?.queue.length ? (
              <table className="mx-auto my-2 border-separate border-spacing-x-4">
                <tbody className="text-left">
                  {shogiData?.queue.map((person, i) => (
                    <tr key={i}>
                      <td className="align-bottom">{i + 1}.</td>
                      <td>
                        受付番号
                        <span className="text-4xl">{person.number}</span>
                      </td>
                      <td>
                        約<span className="text-4xl">{person.time}</span>分後
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-4xl">-</p>
            )}
          </div>
          <div>
            <p className="text-xl">案内時間を過ぎた方</p>
            <div className="p-2">
              <p className="text-lg">受付番号</p>
              <p className="text-4xl">
                {shogiData?.skippedNumbers.length
                  ? shogiData?.skippedNumbers.join(", ")
                  : "-"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
