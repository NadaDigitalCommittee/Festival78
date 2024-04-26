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

export const BaseTimetableDesktop: FC<Props> = ({
  children,
  events,
  stickyItems,
}) => {
  // const [scrollX, setScrollX] = useState(0);
  // const timetableRef = useRef<HTMLDivElement>(null);
  // const timeRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (!timetableRef.current) return;
  //   timetableRef.current.addEventListener("scroll", () => {
  //     setScrollX(timetableRef.current?.scrollLeft || 0);
  //   });
  // }, [timetableRef]);

  // useEffect(() => {
  //   if (!timeRef.current) return;
  //   timeRef.current.addEventListener("scroll", () => {
  //     timeRef.current?.scrollTo(scrollX || 0, 0);
  //   });
  // }, [timeRef, scrollX]);

  // useEffect(() => {
  //   timeRef.current?.scrollTo(scrollX, 0);
  // }, [scrollX]);

  return (
    <div className=" overflow-x-scrolal ">
      <div className="flex overflow-y-scroll w-screen h-[700px]">
        <EventColumn events={events} stickyItems={stickyItems} />
        <div>
          <div className="absolute">
            <div className="bg-white w-[153px] h-[51px] relative z-40 -translate-x-[99%]"/>
          </div>
          <TimeRow />
          <BorderColumn eventCount={events.length}>
            <div className="absolute">{children}</div>
          </BorderColumn>
        </div>
      </div>
    </div>
  );
};
