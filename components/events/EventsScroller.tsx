"use client";

import { useSearchParams } from "next/navigation";
import { Dispatch, SetStateAction, useEffect } from "react";
import { EVENTS_PAGE_SOURCE } from "./events_source";

export default function EventsScroller({
  setIndex,
}: {
  setIndex: Dispatch<SetStateAction<number>>;
}) {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    if (!id) return;

    const eventData = [
      ...EVENTS_PAGE_SOURCE[0].events,
      ...EVENTS_PAGE_SOURCE[1].events,
      ...EVENTS_PAGE_SOURCE[2].events,
      ...EVENTS_PAGE_SOURCE[3].events,
      ...EVENTS_PAGE_SOURCE[4].events,
      ...EVENTS_PAGE_SOURCE[5].events,
    ].find((event) => event.event_id === id);
    if (!eventData) return;

    const index = EVENTS_PAGE_SOURCE[0].events.includes(eventData)
      ? 0
      : EVENTS_PAGE_SOURCE[1].events.includes(eventData)
        ? 1
        : EVENTS_PAGE_SOURCE[2].events.includes(eventData)
          ? 2
          : EVENTS_PAGE_SOURCE[3].events.includes(eventData)
            ? 3
            : EVENTS_PAGE_SOURCE[4].events.includes(eventData)
              ? 4
              : 5;

    setIndex(index);

    setTimeout(() => {
      const section = document.getElementById(`section_${id}`);
      if (!section) return;

      section.scrollIntoView({
        behavior: "instant",
        block: "start",
      });
    }, 100);
  }, [id, setIndex]);

  return <></>;
}
