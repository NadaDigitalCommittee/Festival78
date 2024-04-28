"use client";
import { Header } from "@/components/Header";
import { Selector } from "@/components/timetable/Selector";
import { BaseTimetableDesktop } from "@/components/timetable/desktop/BaseTimetable";
import {
  CircleCellsDesktop,
  StageCellsDesktop,
} from "@/components/timetable/desktop/Cell";
import { BaseTimetableMobile } from "@/components/timetable/mobile/BaseTimetable";
import {
  CircleCellsMobile,
  StageCellsMobile,
} from "@/components/timetable/mobile/Cell";
import { Category, events } from "@/lib/data/events";
import { eventsTimetable } from "@/lib/data/eventsTimetable";
import { MediaType, useResponsive } from "@/lib/hooks/useResponsive";
import { Time } from "@/lib/time";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const stages: { eventId: Category; eventName: string }[] = [
  {
    eventId: "garden",
    eventName: "中庭ステージ",
  },
  {
    eventId: "audiovisual",
    eventName: "視聴覚ステージ",
  },
  {
    eventId: "lecture",
    eventName: "大講義ステージ",
  },
  {
    eventId: "mainhall",
    eventName: "本館ステージ",
  },
  {
    eventId: "gym",
    eventName: "体育館ステージ",
  },
  {
    eventId: "lecture_m",
    eventName: "講義教室 M3-2",
  },
  {
    eventId: "lecture_h",
    eventName: "講義教室 H3-1",
  },
];

export default function Page() {
  const data = useMemo(
    () =>
      events.map((event) => {
        const time = eventsTimetable.find((e) => e.id === event.id)?.time;
        return {
          id: event.id,
          category: event.category,
          name: event.name,
          time: time,
        };
      }),
    []
  );

  // ?id={id}と来た時にそのイベントまでスクロールする
  const params = useSearchParams();
  const defaultEvent = data.find((v) => v.id === params.get("id"));
  const defaultCategory = defaultEvent?.category;
  const defaultStageIndex =
    defaultCategory === "raffle" ? 1 : defaultCategory === "others" ? 2 : 0;
  const isOnlyOneDay =
    Array.from(new Set(defaultEvent?.time?.map((t) => t.day))).length === 1;

  const now = Time.nowJST();
  const month = now.getMonth();
  const day = now.getDate();
  const isDay2 = month === 5 && day === 3;
  //上のイベントまでスクロールコードについて、日付がひとつだけの場合はstateのdefault値を変更する
  const [dayIndex, setDayIndex] = useState(
    isOnlyOneDay ? (defaultEvent?.time?.[0]?.day ?? 1) - 1 : isDay2 ? 1 : 0
  );

  const media = useResponsive();
  const [scrollX, setScrollX] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (!defaultEvent) return;
      const i = defaultEvent.time?.findIndex((t) => t.time.isNotStarted());
      const element = document.getElementById(defaultEvent.id + "-" + i);
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const left = rect.left + window.scrollX;
      setScrollX(left - 70);
      setScrollY(top - 390);
      window.scrollTo({
        top: media === MediaType.Mobile ? 320 : 245,
        behavior: "smooth",
      });
    }, 800);
  }, [defaultEvent, media]);

  const [stageIndex, setStageIndex] = useState(defaultStageIndex ?? 0);

  const raffleEvents = data.filter((v) => v.category === "raffle");
  const circleEvents = data.filter((v) => v.category === "others");

  const events_ = [
    stages,
    raffleEvents.map((v) => {
      return {
        eventName: v.name,
        eventId: v.id,
      };
    }),
    circleEvents.map((v) => {
      return {
        eventName: v.name,
        eventId: v.id,
      };
    }),
  ];

  const stickyItems = (
    <div className="flex w-screen pt-16">
      <div className="flex flex-col items-center">
        <p className="text-xl">DAY</p>
        <Selector
          selects={["1日目 5/2", "2日目 5/3"]}
          onChange={(i) => {
            setDayIndex(i);
          }}
          defaultIndex={dayIndex}
        />
      </div>
      <div className="flex flex-col items-center">
        <p className="mr-2 text-xl">カテゴリー</p>
        <Selector
          selects={["ステージ企画", "抽選企画", "サークル企画"]}
          onChange={(i) => {
            setStageIndex(i);
          }}
          defaultIndex={stageIndex}
        />
      </div>
    </div>
  );

  return (
    <div className="mb-[100px] overflow-y-clip font-zen_kaku_gothic_new font-bold">
      <Header path="/timetable">Timetable</Header>
      {stickyItems}
      {media === undefined ? (
        <></>
      ) : media === MediaType.Mobile ? (
        <BaseTimetableMobile
          defaultScrollX={scrollX}
          defaultScrollY={scrollY}
          events={events_[stageIndex]}
        >
          {
            [
              <>
                {stages.map((stage, i) => (
                  <StageCellsMobile
                    category={stage.eventId}
                    index={i}
                    data={data}
                    dayIndex={dayIndex}
                    key={i}
                  />
                ))}
              </>,
              <>
                <CircleCellsMobile events={raffleEvents} dayIndex={dayIndex} />
              </>,
              <>
                <CircleCellsMobile events={circleEvents} dayIndex={dayIndex} />
              </>,
            ][stageIndex]
          }
        </BaseTimetableMobile>
      ) : (
        <BaseTimetableDesktop
          events={events_[stageIndex]}
        >
          {
            [
              <>
                {stages.map((stage, i) => (
                  <StageCellsDesktop
                    category={stage.eventId}
                    index={i}
                    data={data}
                    dayIndex={dayIndex}
                    key={i}
                  />
                ))}
              </>,
              <>
                <CircleCellsDesktop events={raffleEvents} dayIndex={dayIndex} />
              </>,
              <>
                <CircleCellsDesktop events={circleEvents} dayIndex={dayIndex} />
              </>,
            ][stageIndex]
          }
        </BaseTimetableDesktop>
      )}
    </div>
  );
}
