//mobile
"use client";
import { FC, ReactNode, useEffect, useRef } from "react";
import { BorderRows } from "./BorderColumn";
import { EventsRow } from "./EventsRow";
import { TimeColumn } from "./TimeColumn";

type Props = {
  events: {
    eventId: string;
    eventName: string;
  }[];
  children?: ReactNode;
  defaultScrollX?: number;
  defaultScrollY?: number;
};

export const BaseTimetableMobile: FC<Props> = ({
  children,
  events,
  defaultScrollX = 0,
  defaultScrollY = 0,
}) => {
  const timetableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    timetableRef.current?.scrollTo({
      top: defaultScrollY,
      left: defaultScrollX,
      behavior: "smooth",
    });
  }, [defaultScrollX, defaultScrollY]);

  return (
    <div className="relative mt-4 overflow-x-scroll">
      <div className="absolute z-40 h-[81px] w-[60px] bg-white" />
      <div className="flex h-screen overflow-y-scroll" ref={timetableRef}>
        <TimeColumn />
        <div className="relative">
          <EventsRow events={events} />
          <BorderRows eventCount={events.length}>
            <div className="absolute">{children}</div>
          </BorderRows>
        </div>
      </div>
    </div>
  );
};
