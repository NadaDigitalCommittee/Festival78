//mobile
"use client";
import { FC, ReactNode, useEffect, useRef } from "react";
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
  // const [scrollX, setScrollX] = useState(0);
  const timetableRef = useRef<HTMLDivElement>(null);
  const timeRef = useRef<HTMLDivElement>(null);

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
  // }, [scrollX, timeRef]);

  // useEffect(() => {
  //   timeRef.current?.scrollTo(scrollX, 0);
  // }, [scrollX]);

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
    <div className="overflow-x-scroll relative mt-4">

      <div className="absolute h-[101px] w-[60px] z-40 bg-white" />
      <div className="flex overflow-y-scroll h-screen">

        <TimeColumn stickyItems={stickyItems} />

        <div className="relative">
          <EventsRow ref={timeRef} events={events} />
          <BorderRows ref={timetableRef} eventCount={events.length}>
            <div className="absolute">{children}</div>
          </BorderRows>
        </div>
      </div>
    </div>
  );
};
