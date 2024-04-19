"use client";

import { ButtonHTMLAttributes, Suspense, useState } from "react";
import ContentSection from "./ContentSection";
import { EVENTS_PAGE_SOURCE } from "@/components/events/events_source";
import EventsScroller from "./EventsScroller";

export default function TabSwitcher() {
  const [index, setIndex] = useState<number>(0);

  return (
    <>
      <Suspense>
        <EventsScroller setIndex={setIndex} />
      </Suspense>
      <div
        className="grid grid-cols-2 gap-3 md:grid-cols-3 px-3"
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
      <div className="pt-10">
        {EVENTS_PAGE_SOURCE[index].events.map((event) => (
          <ContentSection
            key={event.event_id}
            title={event.name}
            eventId={event.event_id}
            mapId={event.map_id ?? EVENTS_PAGE_SOURCE[index].map_id}
            comingSoon={false}
            content={event.description}
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
      className="border-border aria-selected:bg-border group box-border rounded-md border-2 pb-[3px] pl-[16px] pr-[16px] pt-[3px]"
      aria-selected={selected}
      role="tab"
      {...props}
    >
      <span className="font-zen_kaku_gothic_new text-border text-lg font-bold group-aria-selected:text-white">
        {children}
      </span>
    </button>
  );
}
