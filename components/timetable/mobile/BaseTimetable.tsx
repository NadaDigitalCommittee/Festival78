//mobile
"use client";
import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { BorderRows } from "./BorderColumn";
import { TimeColumn } from "./TimeColumn";
import { EventsRow } from "./EventsRow";

type Props = {
  events: {
    eventId: string;
    eventName: string;
  }[];
  children?: ReactNode;
  stickyItems?: ReactNode;
  defaultScrollX?: number;
};

export const BaseTimetableMobile: FC<Props> = ({
  children,
  events,
  stickyItems,
  defaultScrollX = 0,
}) => {
  const [scrollX, setScrollX] = useState(0);
  const timetableRef = useRef<HTMLDivElement>(null);
  const timeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!timetableRef.current) return;
    timetableRef.current.addEventListener("scroll", () => {
      setScrollX(timetableRef.current?.scrollLeft || 0);
    });
  }, [timetableRef]);

  useEffect(() => {
    timeRef.current?.scrollTo(scrollX, 0);
  }, [scrollX]);

  useEffect(() => {
    timeRef.current?.scrollTo({
      left: defaultScrollX,
      behavior: "smooth",
    });
    timetableRef.current?.scrollTo({
      left: defaultScrollX,
      behavior: "smooth",
    });
  }, [defaultScrollX]);

  return (
    <div className="flex">
      <TimeColumn stickyItems={stickyItems} />
      <div className="relative overflow-x-clip">
        <EventsRow ref={timeRef} events={events} />
        <BorderRows ref={timetableRef} eventCount={events.length}>
          <div className="absolute">{children}</div>
        </BorderRows>
      </div>
    </div>
  );
};
