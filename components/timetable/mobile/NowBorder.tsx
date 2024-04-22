import { Time } from "@/lib/time";
import { FC } from "react";

type Props = {
  eventCount: number;
};

export const NowBorder: FC<Props> = ({ eventCount }) => {
  const now = Time.nowJST();
  const interval = now.getHours() - 9 + now.getMinutes() / 60;
  
  const ok = 0 <= interval && interval <= 6.5;
  return (
    <div
      className={`${ok ? "visible" : "hidden"} absolute left-0 z-0 h-0 
    -translate-y-1/2 border-t-4 border-dotted border-theme`}
      style={{
        top: `calc(${interval + 0.5}*120px)`,
        width: `calc(${eventCount}*160px)`,
      }}
    ></div>
  );
};
