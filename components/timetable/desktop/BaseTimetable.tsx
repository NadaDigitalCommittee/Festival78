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
};

export const BaseTimetableDesktop: FC<Props> = ({ children, events }) => {
  return (
    <div className="">
      <div className="flex h-[700px] w-screen overflow-y-scroll">
        <EventColumn events={events} />
        <div>
          <div className="absolute">
            <div className="relative z-40 h-[51px] w-[153px] -translate-x-[99%] bg-white" />
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
