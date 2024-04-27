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
  stickyItems?: ReactNode;
  defaultScrollX?: number;
  defaultScrollY?: number;
};

export const BaseTimetableMobile: FC<Props> = ({
  children,
  events,
  stickyItems,
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
  }, [defaultScrollX]);

  return (
    <div className="overflow-x-scroll relative mt-4">
      <div className="absolute h-[81px] w-[60px] z-40 bg-white" />
      <div className="flex overflow-y-scroll h-screen" ref={timetableRef}>
        <TimeColumn stickyItems={stickyItems} />
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
