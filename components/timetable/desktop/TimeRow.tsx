import { forwardRef } from "react";
import { Now } from "./Now";

// eslint-disable-next-line react/display-name
export const TimeRow = forwardRef<HTMLDivElement, {}>(({}, ref) => {
  return (
    <div className="sticky top-0 z-30 h-0">
      <div
        className="flex border-b border-black bg-white "
        ref={ref}
      >
        {Array(7)
          .fill(0)
          .map((_, i) => {
            return (
              <div
                key={i}
                className="flex h-[50px] w-[12vw] min-w-[160px] items-end text-center"
              >
                <p className="w-full font-limelight text-3xl">{i + 9}</p>
              </div>
            );
          })}
        <Now />
      </div>
    </div>
  );
});
