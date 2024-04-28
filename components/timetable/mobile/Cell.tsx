import { Category } from "@/lib/data/events";
import { Time } from "@/lib/time";
import { TimetableData } from "@/lib/types";
import { FC } from "react";

type Props = {
  id: string;
  index: number;
  time: Time;
  name: string;
  showTime?: boolean;
  timeId: number;
};

export const CellMobile: FC<Props> = ({
  id,
  index,
  time,
  name,
  showTime = true,
  timeId,
}) => {
  const ratioX = (60 * 60 * 1000) / 1;
  const interval =
    (time.start.getTime() - new Time(9, 0, 0, 0).start.getTime()) / ratioX;
  const interval2 = (time.end.getTime() - time.start.getTime()) / ratioX;

  return (
    <div
      id={id+"-"+timeId}
      className={`absolute ml-[20px] flex flex-col items-center justify-center rounded-xl bg-[#7A7A7A] text-center
      text-white
    `}
      style={{
        left: `${index * 160}px`,
        top: `calc(${interval + 0.5}*120px)`,
        height: `calc(${interval2}*120px)`,
        width: "120px",
      }}
    >
      <p>{name}</p>
      {showTime && (
        <p className="w-full break-words">{time.toPeriodString()}</p>
      )}
    </div>
  );
};

type StageCellsProps = {
  category: Category;
  index: number;
  dayIndex: number;
  data: TimetableData[];
};
export const StageCellsMobile: FC<StageCellsProps> = ({
  category,
  index,
  data,
  dayIndex,
}) => {
  const events = data.filter((v) => v.category === category);
  return events.map((event) => {
    return event.time
      ?.filter((t) => t.day === dayIndex + 1)
      .map((t, tid) => {
        return (
          <CellMobile
            id={event.id}
            name={event.name}
            time={t.time}
            index={index}
            showTime={t.time.periodMinutes > 30}
            key={event.id + tid}
            timeId={tid}
          />
        );
      });
  });
};

type CircleCellsProps = {
  events: TimetableData[];
  dayIndex: number;
};

export const CircleCellsMobile: FC<CircleCellsProps> = ({
  events,
  dayIndex,
}) => {
  return events.map((event, eventIndex) => {
    return event.time
      ?.filter((t) => t.day === dayIndex + 1)
      .map((t, i) => {
        return (
          <CellMobile
            id={event.id}
            index={eventIndex}
            name={""}
            time={t.time}
            key={i}
            timeId={i}
          />
        );
      });
  });
};
