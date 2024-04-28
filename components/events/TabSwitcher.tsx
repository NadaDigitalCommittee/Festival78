"use client";

import { ButtonHTMLAttributes, Suspense, useState } from "react";
import ContentSection from "./ContentSection";
import { EVENTS_PAGE_SOURCE } from "@/components/events/events_source";
import EventsScroller from "./EventsScroller";
import { useSearchParams } from "next/navigation";
import { eventsTimetable } from "@/lib/data/eventsTimetable";
import { Time } from "@/lib/time";
import { data } from "@/lib/data/circles";

export default function TabSwitcher() {
  const id = useSearchParams().get("id");
  const eventPage = EVENTS_PAGE_SOURCE.findIndex((e) => e.map_id === id);
  //idがありつつ、eventPageが-1の場合は、idがクラブサークルであると判断
  const [index, setIndex] = useState<number>(
    !id ? 0 : eventPage === -1 ? 5 : eventPage
  );

  return (
    <>
      <Suspense>
        <EventsScroller setIndex={setIndex} />
      </Suspense>
      <div
        className="grid grid-cols-2 gap-3 px-3 md:grid-cols-3"
        aria-label="Event Tabs"
        role="tablist"
      >
        <TabButton selected={index === 0} onClick={() => setIndex(0)}>
          中庭ステージ
        </TabButton>
        <TabButton selected={index === 1} onClick={() => setIndex(1)}>
          視聴覚ステージ
        </TabButton>
        <TabButton selected={index === 2} onClick={() => setIndex(2)}>
          大講義ステージ
        </TabButton>
        <TabButton selected={index === 3} onClick={() => setIndex(3)}>
          本館ステージ
        </TabButton>
        <TabButton selected={index === 4} onClick={() => setIndex(4)}>
          体育館ステージ
        </TabButton>
        <TabButton selected={index === 5} onClick={() => setIndex(5)}>
          クラブ・サークル企画
        </TabButton>
      </div>
      <div className="pt-16">
        {EVENTS_PAGE_SOURCE[index].events.map((event) => (
          <ContentSection
            key={event.event_id}
            title={event.name}
            eventId={event.event_id}
            mapId={event.map_id ?? EVENTS_PAGE_SOURCE[index].map_id}
            comingSoon={isComingSoon(event.event_id)}
            content={event.description}
            markerColor={event.color}
            logoSrc={event.hasLogo ? `/img/events/${event.event_id}/logo.webp` : undefined}
            circleName={data.find(d=>d.id===event.event_id.split("_")?.[0])?.name}
          />
        ))}
      </div>
    </>
  );
}

type TabButtonProps = {
  children: React.ReactNode;
  selected?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function TabButton({ children, selected = false, ...props }: TabButtonProps) {
  return (
    <button
      className="group box-border rounded-md border-2 border-border bg-white pb-[3px] pl-[16px] pr-[16px] pt-[3px] aria-selected:bg-border"
      aria-selected={selected}
      role="tab"
      {...props}
    >
      <span className="font-zen_kaku_gothic_new text-lg font-bold text-border group-aria-selected:text-white">
        {children}
      </span>
    </button>
  );
}

function isComingSoon(eventId: string) {
  return eventsTimetable.find((e) => e.id === eventId)?.time
  .filter(t=>t.day===Time.nowJST().getDate())
  .map(t => {
    if(!t.time.isNotStarted()){
      return false;
    }
    const interval=t.time.start.getTime()-Time.nowJST().getTime()
    return interval<15*60*1000
  }).includes(true) ?? false;
}