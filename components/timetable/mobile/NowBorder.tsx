import { Time } from "@/lib/time";
import { FC } from "react";

type Props={
  eventCount:number
}

export const NowBorder:FC<Props>=({eventCount})=>{
  const now=Time.nowJST()

  const interval=(now.getHours()-9)+(now.getMinutes()/60)
  console.log(interval)
  const ok=0<=interval&&interval<=6.5
  return(
    <div className={`${ok?"visible":"hidden"} absolute left-0 -translate-y-1/2 h-0 
    border-t-4 border-theme z-0 border-dotted`} style={{
      top: `calc(${interval + 0.5}*120px)`,
      width: `calc(${eventCount}*160px)`
    }}>
          
    </div>
  )
}