import { FC, ReactNode } from "react";
import { Now } from "./Now";

type Props = {
  stickyItems?: ReactNode;
};

export const TimeColumn: FC<Props> = ({ stickyItems }) => {
  return (
    <div className="sticky left-0 z-20 mt-[105px] min-w-[60px]">
      {/* {events.map((event, i) => {
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
      })} */}
      <Now />
      <div className="h-[120px] w-[60px] -mt-[120px]  bg-white" />
      {new Array(7).fill(0).map((_, i) => {
        return (
          <div
            key={i}
            className="flex h-[120px] w-full items-center justify-end bg-white relative z-10"
          >
            <p className="font-limelight text-2xl">{i + 9}</p>
          </div>
        );
      })}
    </div>
  );
};
