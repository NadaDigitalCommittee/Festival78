import { FC, ReactNode } from "react";

type Props = {
  events: {
    eventId: string;
    eventName: string;
  }[];
  stickyItems?: ReactNode;
};

export const TimeColumn: FC<Props> = ({ events, stickyItems }) => {
  return (
    <div className="z-20">
      <div className="sticky top-0 z-20 h-[250px] w-[50px] bg-white">
        {stickyItems}
      </div>
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
      {new Array(7).fill(0).map((_,i)=>{
        return(<div key={i} className="h-[120px] w-[50px] flex items-center justify-end">
            <p className="text-3xl font-limelight">{i+9}</p>
        </div>)
      })}
    </div>
  );
};
