import { IoTriangleOutline } from "react-icons/io5";
import { Time } from "@/lib/time";
import { FC } from "react";

export const Now: FC = () => {
  const now = Time.nowJST()

  const interval = (now.getHours() - 9) + (now.getMinutes() / 60)
  
  const ok = 0 <= interval && interval <= 6.5
  return (
    <div className={`${ok ? "absolute" : "hidden"} w-12 
    `} style={{
        
        top: `calc(calc(${interval + 0.5}*120px) + 235px)`,
      }}>
      <div className="flex items-center">
      <p className="text-xs text-theme text-center">現在時刻</p>
      <p><IoTriangleOutline className="rotate-90 text-2xl text-theme" /></p>
      </div>
    </div>
  )
}