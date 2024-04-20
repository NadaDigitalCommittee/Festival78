"use client";
import { ReactNode, FC, useState, useRef, useEffect } from "react";
import { BorderColumn } from "./BorderColumn";
import { EventColumn } from "./EventColumn";
import { TimeRow } from "./TimeRow";

type Props = {
  eventNames: string[];
  children?: ReactNode;
  stickyItems?:ReactNode;
};

export const BaseTimetable: FC<Props> = ({ children, eventNames,stickyItems }) => {
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
      <EventColumn eventNames={eventNames} stickyItems={stickyItems} />
      <div className="relative overflow-x-clip">
        <TimeRow ref={timeRef} />
        <BorderColumn ref={timetableRef} eventCount={eventNames.length}>
          <div className="absolute">{children}</div>
        </BorderColumn>
      </div>
    </div>
  );
};
