import Link from "next/link";
import { FC, ReactNode } from "react";

type Props = {
  events: {
    eventId: string;
    eventName: string;
  }[];
  stickyItems?: ReactNode;
};

export const EventColumn: FC<Props> = ({ events, stickyItems }) => {
  return (
    <div className="z-20 sticky left-0 mt-[50px]">
      {events.map((event, i) => {
        return (
          <div
            key={i}
            className={`flex h-[120px]  w-[120px] flex-col items-center
        justify-center gap-3  border-r-2
        border-black text-center text-theme 
        odd:bg-white even:bg-theme even:text-white`}
          >
            <p>{event.eventName}</p>
            <Link href={`/events?id=${event.eventId}`}>
              <p className="text-xs underline">詳細・会場を確認</p>
            </Link>
          </div>
        );
      })}
      <div className="h-[100px] w-[120px] bg-white" />
    </div>
  );
};
