import { FC, ReactNode } from "react";

type Props={ eventNames: string[],stickyItems?:ReactNode; }

export const EventColumn: FC<Props> = ({ eventNames,stickyItems }) => {
  return (
    <div className="z-20">
      <div className="sticky top-0 h-[200px] w-[120px] min-w-[100px] bg-white z-20">
        {stickyItems}
      </div>
      {eventNames.map((name, i) => {
        return (
          <div
            key={i}
            className={`odd: flex  h-[120px] w-[120px]
        items-center justify-center  border-r-2
        border-black text-center text-theme 
        odd:bg-white even:bg-theme even:text-white`}
          >
            <p>{name}</p>
          </div>
        );
      })}
    </div>
  );
};
