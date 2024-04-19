import { EventTimetable } from "@/lib/data/eventsTimetable"
import { Time } from "@/lib/time";
import { FC } from "react"

type Props={
  index:number;
  time:Time;
  name:string;
}

export const Cell:FC<Props>=({index,time,name})=>{
  const interval=time.start.getTime()-new Time(9,0,0,0).start.getTime()
  const ratioX=(60*60*1000)/1
  return (
    <div className="absolute bg-gray-500 rounded-xl"
      style={{
        top: `${index * 120}px`,
        left: `calc(${interval / ratioX + 0.5}*max(100px,8vw))`,
        width: `${(time.end.getTime()-time.start.getTime())/ratioX}px`
      }}
    >
      {name}{time.toPeriodString()}
    </div>
  )
}