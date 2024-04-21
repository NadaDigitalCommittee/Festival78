import { forwardRef, ReactNode } from "react";
import { NowBorder } from "./NowBorder";

type Props = {
  children: ReactNode;
  eventCount: number;
};

// eslint-disable-next-line react/display-name
export const BorderColumn = forwardRef<HTMLDivElement, Props>(
  ({ children, eventCount }, ref) => {
    return (
      <div
        className={`relative flex overflow-y-hidden overflow-x-scroll`}
        style={{
          height: 120 * eventCount + 100,
        }}
        ref={ref}
      >
        {Array(7 * 2)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="h-full w-[6vw] min-w-[80px] border-l-[2px] border-black first:border-l-0 odd:border-dashed"
            />
          ))}
        {children}
        <div className="absolute -z-10 w-[calc(max(12vw,160px)*7)]">
          {Array(eventCount)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="h-[120px] w-full odd:bg-[#FFEFE8] even:bg-white"
              />
            ))}
        </div>
        <NowBorder />
      </div>
    );
  }
);
