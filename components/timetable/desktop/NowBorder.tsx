import { Time } from "@/lib/time";
import { FC } from "react";

export const NowBorder: FC = () => {
  const now = Time.nowJST();
  const interval = now.getHours() - 9 + now.getMinutes() / 60;

  const ok = 0 <= interval && interval <= 6.5;
  return (
    <div
      className={`${ok ? "visible" : "hidden"} top-0 -z-10 h-full w-0 
    -translate-x-1/2 border-r-4 border-dotted border-theme`}
      style={{
        position: "absolute",
        left: `calc(${interval + 0.5}*max(160px,12vw))`,
      }}
    ></div>
  );
};
