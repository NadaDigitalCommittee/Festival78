//mobile
"use client";
import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { BorderColumn } from "./BorderColumn";
import { EventColumn } from "./EventColumn";
import { TimeRow } from "./TimeRow";

type Props = {
  events: {
    eventId: string;
    eventName: string;
  }[];
  children?: ReactNode;
  stickyItems?: ReactNode;
};

export const BaseTimetableMobile: FC<Props> = ({
  children,
  events,
  stickyItems,
}) => {
  const [scrollX, setScrollX] = useState(0);
  const timetableRef = useRef<HTMLDivElement>(null);
  const timeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!timetableRef.current) return;
    timetableRef.current.addEventListener("scroll", (e) => {
      setScrollX(timetableRef.current?.scrollLeft || 0);
    });
  }, [timetableRef]);

  useEffect(() => {
    timeRef.current?.scrollTo(scrollX, 0);
  }, [scrollX]);

  return (
    <div className="flex">
      <EventColumn events={events} stickyItems={stickyItems} />
      <div className="relative overflow-x-clip">
        <TimeRow ref={timeRef} />
        <BorderColumn ref={timetableRef} eventCount={events.length}>
          <div className="absolute">{children}</div>
        </BorderColumn>
      </div>
    </div>
  );
};
