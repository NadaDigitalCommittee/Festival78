import { IoTriangleOutline } from "react-icons/io5";
import { Time } from "@/lib/time";
import { FC } from "react";

export const Now: FC = () => {
  const now = Time.nowJST()

  const interval = (now.getHours() - 9) + (now.getMinutes() / 60)
  console.log(interval)
  const ok = 0 <= interval && interval <= 6.5
  return (
    <div className={`${ok ? "visible" : "hidden"} h-full w-12 
    `} style={{
        position: "absolute",
        top: 155,
        left: `calc(calc(${interval + 0.5}*max(160px,12vw)) + 120px)`,
      }}>
        <p className="min-w-20 -translate-x-1/2 text-sm text-theme text-center">現在時刻</p>
      <p><IoTriangleOutline className="rotate-180 -translate-x-1/2 text-2xl text-theme" /></p>
    </div>
  )
}