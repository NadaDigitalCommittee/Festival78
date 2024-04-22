import { forwardRef, ReactNode } from "react";
import { NowBorder } from "./NowBorder";

type Props = {
  children: ReactNode;
  eventCount: number;
};

// eslint-disable-next-line react/display-name
export const BorderRows = forwardRef<HTMLDivElement, Props>(
  ({ children, eventCount }, ref) => {
    return (
      <div
        className={`relative overflow-y-hidden overflow-x-scroll`}
        style={{
          height: 120 * 7 + 100,
        }}
        ref={ref}
      >
        <NowBorder eventCount={eventCount} />
        {children}
        <div className="absolute -z-10 flex h-[calc(120px*7)]">
          {Array(eventCount)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="h-full w-[160px] odd:bg-[#FFEFE8] even:bg-white"
              />
            ))}
        </div>
        <div>
          {Array(7 * 2)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className={`h-[60px] border-t-[2px] border-black first:border-0 odd:border-dashed`}
                style={{
                  width: `calc(${eventCount}*160px)`,
                }}
              />
            ))}
        </div>
      </div>
    );
  }
);
