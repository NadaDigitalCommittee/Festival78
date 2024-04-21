"use client";
import { FC, useEffect, useMemo, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type Props = {
  selects: string[];
  defaultIndex?: number;
  onChange?: (index: number) => void;
  className?: string;
};

export const Selector: FC<Props> = ({
  defaultIndex,
  onChange,
  className,
  selects,
}) => {
  const [index, setIndex] = useState(defaultIndex ?? 0);
  const realIndex = useMemo(
    () => Math.abs(index) % selects.length,
    [index, selects.length]
  );
  useEffect(() => {
    onChange?.(realIndex);
  }, [onChange, realIndex]);
  return (
    <div className={`${className} flex items-center`}>
      {selects.map((select, i) => (
        <button
          key={i}
          className={`mx-1 rounded-md border border-theme px-2 py-1 text-sm md:text-base ${realIndex === i ? "bg-theme text-white" : "bg-white text-theme"}`}
          onClick={() => setIndex(i)}
        >
          {select}
        </button>
      ))}
    </div>
  );
};
