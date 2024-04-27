import { FC, ReactNode } from "react";
import { Now } from "./Now";

type Props = {
  stickyItems?: ReactNode;
};

export const TimeColumn: FC<Props> = ({ stickyItems }) => {
  return (
    <div className="sticky left-0 z-20 mt-[85px] min-w-[60px]">
      <Now />
      {new Array(7).fill(0).map((_, i) => {
        return (
          <div
            key={i}
            className="flex h-[120px] w-full items-center justify-end bg-white relative z-10"
          >
            <p className="font-limelight text-2xl">{i + 9}</p>
          </div>
        );
      })}
    </div>
  );
};
