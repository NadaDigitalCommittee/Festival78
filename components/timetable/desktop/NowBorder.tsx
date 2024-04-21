import { Time } from "@/lib/time";
import { FC } from "react";
import { IoTriangleOutline } from "react-icons/io5";

export const NowBorder:FC=()=>{
  const now=Time.nowJST()

  const interval=(now.getHours()-9)+(now.getMinutes()/60)
  console.log(interval)
  const ok=0<=interval&&interval<=6.5
  return(
    <div className={`${ok?"visible":"hidden"} top-0 -translate-x-1/2 h-full w-0 
    border-r-4 border-theme -z-10 border-dotted`} style={{
      position:"absolute",
      left: `calc(${interval + 0.5}*max(160px,12vw))`,
    }}>
          
    </div>
  )
}