import { goods, souvenirs } from "@/lib/data/goods";
import { FC } from "react";
import { Frame } from "./Frame";

export const Items: FC<{ isGoods?: boolean; statuses: boolean[] }> = async ({
  isGoods = false,
  statuses,
}) => {
  return (
    <div className="m-4 my-8 grid skew-y-[4deg] grid-cols-3 gap-4 gap-y-[calc(1rem/cos(8deg))] md:m-8 md:my-16 md:grid-cols-4">
      {(isGoods ? goods : souvenirs).map((item, i) => (
        <Frame
          key={item.id[0]}
          isGoods={isGoods}
          item={item}
          isLarge={i === 0}
          statuses={statuses}
        />
      ))}
    </div>
  );
};
