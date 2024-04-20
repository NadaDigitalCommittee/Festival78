"use client";
import { Selector } from "@/components/timetable/Selector";
import { BaseTimetable } from "@/components/timetable/table/BaseTimetable";
import { Cell } from "@/components/timetable/table/Cell";
import { Category, events } from "@/lib/data/events";
import { eventsTimetable } from "@/lib/data/eventsTimetable";
import { useState } from "react";

export default function Page() {
  const day = 1;
  const data = events.map((event) => {
    const time = eventsTimetable.find((e) => e.id === event.id)?.time;
    return {
      category: event.category,
      name: event.name,
      time: time?.filter((t) => t.day === day),
    };
  });

  const [stageIndex, setStageIndex] = useState(0);

  const eventsFromCategory = (category: Category, index: number) => {
    const events = data.filter((v) => v.category === category);
    return events.map((event) => {
      return event.time?.map((t) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <Cell
            name={event.name}
            time={t.time}
            index={index}
            showTime={t.time.periodMinutes > 30}
          />
        );
      });
    });
  };

  const raffleEvents = data.filter((v) => v.category === "raffle");
  const circleEvents = data.filter((v) => v.category === "others");

  return (
    <div className="font-zen_kaku_gothic_new font-bold">
      <div className="h-20" />

      <BaseTimetable
        eventNames={
          [
            [
              "中庭ステージ",
              "視聴覚ステージ",
              "大講義ステージ",
              "本館ステージ",
              "体育館ステージ",
              "講義教室 M3-2",
              "講義教室 H3-1",
            ],
            raffleEvents.map((v) => v.name),
            circleEvents.map((v) => v.name),
          ][stageIndex]
        }
        stickyItems={
          <div className="flex w-screen pt-16">
            <div className="flex flex-col items-center">
              <p className="text-xl">DAY</p>
              <Selector
                selects={["1日目 5/2", "2日目 5/3"]}
                onChange={(i) => {
                  setStageIndex(i);
                }}
              />
            </div>
            <div className="flex flex-col items-center">
              <p className="text-xl mr-2">カテゴリー</p>
              <Selector
                selects={["ステージ企画", "抽選企画", "サークル企画"]}
                onChange={(i) => {
                  setStageIndex(i);
                }}
              />
            </div>
          </div>
        }
      >
        {
          [
            <>
              {eventsFromCategory("garden", 0)}
              {eventsFromCategory("audiovisual", 1)}
              {eventsFromCategory("lecture", 2)}
              {eventsFromCategory("mainhall", 3)}
              {eventsFromCategory("gym", 4)}
              {eventsFromCategory("lecture_m", 5)}
              {eventsFromCategory("lecture_h", 6)}
            </>,
            <>
              {raffleEvents.map((event, eventIndex) => {
                return event.time?.map((t, i) => {
                  return (
                    <Cell index={eventIndex} name={""} time={t.time} key={i} />
                  );
                });
              })}
            </>,
            <>
              {circleEvents.map((event, eventIndex) => {
                return event.time?.map((t, i) => {
                  return (
                    <Cell index={eventIndex} name={""} time={t.time} key={i} />
                  );
                });
              })}
            </>,
          ][stageIndex]
        }
      </BaseTimetable>
    </div>
  );
}
