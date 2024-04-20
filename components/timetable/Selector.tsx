"use client";
import { FC, useEffect, useMemo, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type Props = {
  selects: string[];
  onChange?: (index: number) => void;
  className?: string;
};

export const Selector: FC<Props> = ({ onChange, className,selects }) => {
  const [index, setIndex] = useState(0);
  const realIndex = useMemo(() => Math.abs(index) % selects.length, [index, selects.length]);
  useEffect(() => {
    onChange?.(realIndex);
  }, [onChange, realIndex]);
  return (
    <div className={`${className} flex items-center`}>      
      {
        selects.map((select, i) => (
          <button
            key={i}
            className={`px-2 py-1 mx-1 border rounded-md ${realIndex === i ? "bg-theme text-white" : "bg-white text-theme"}`}
            onClick={() => setIndex(i)}
          >
            {select}
          </button>
        ))
      }
    </div>
  );
};
