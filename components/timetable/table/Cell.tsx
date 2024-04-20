import { EventTimetable } from "@/lib/data/eventsTimetable";
import { Time } from "@/lib/time";
import { FC } from "react";

type Props = {
  index: number;
  time: Time;
  name: string;
  showTime?: boolean;
};

export const Cell: FC<Props> = ({ index, time, name, showTime = true }) => {
  const ratioX = (60 * 60 * 1000) / 1;
  const interval =
    (time.start.getTime() - new Time(9, 0, 0, 0).start.getTime()) / ratioX;
  const interval2 = (time.end.getTime() - time.start.getTime()) / ratioX;

  return (
    <div
      className={`absolute mt-[15px] flex flex-col items-center justify-center rounded-xl bg-[#7A7A7A] text-center
      text-white
    `}
      style={{
        top: `${index * 120}px`,
        left: `calc(${interval + 0.5}*max(160px,12vw))`,
        width: `calc(${interval2}*max(160px,12vw))`,
        height: "90px",
      }}
    >
      <p>{name}</p>
      {showTime && <p className="break-words w-full">{time.toPeriodString()}</p>}    
    </div>
  );
};
