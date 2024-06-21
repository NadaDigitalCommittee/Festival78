"use client";

import { useLocalStorage } from "@/lib/hooks/useLocalStorage";
import { FC, useEffect, useState } from "react";

type Props = {
  content: string;
  className?: string;
  color: string;
  rotate: number;
  length?: number;
  initialValue?: string;
};

export const QuizCell: FC<Props> = ({
  className,
  content,
  color,
  rotate,
  length,
  initialValue,
}) => {
  const random = Math.floor(Math.random() * 255).toString();
  const { storedValue, setStoredValue } = useLocalStorage(
    `quizCell-${content}`,
    initialValue ?? ""
  );
  const [inputValue, setInputValue] = useState(storedValue);

  useEffect(() => {
    setStoredValue(inputValue);
  }, [inputValue, setStoredValue]);

  return (
    <div className="flex items-center justify-center">
      <div
        className={`${className} relative`}
        style={{
          width: length,
          height: length,
        }}
      >
        <svg
          viewBox="0 0 100 100"
          className="absolute overflow-visible"
          style={{
            rotate: `${rotate}deg`,
          }}
        >
          <path d={"M 0,50 a 50,50 0 1,1 0,1 z"} id={random} fill={color} />
          <text>
            <textPath xlinkHref={`#${random}`}>{content}</textPath>
          </text>
        </svg>
        <input
          style={{
            fontSize: `${(length ?? 0) * 0.8}px`,
          }}
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onBlur={(e) => {
            const s = e.target.value;
            const a = Array.from(s);
            if (a.length) {
              setInputValue(a[0]);
            }
          }}
          className="absolute z-10 h-full w-full bg-transparent text-center"
        ></input>
      </div>
    </div>
  );
};
