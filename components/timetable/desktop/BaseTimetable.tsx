"use client";
import { FC, ReactNode } from "react";
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
  return (
    <div className="">
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
