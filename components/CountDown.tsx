"use client";

import { MediaType, useResponsive } from "@/lib/hooks/useResponsive";
import { FC, useEffect, useState } from "react";

type Props = {
  restTime: number;
};

export const CountDown: FC<Props> = ({ restTime }) => {
  const [time, setTime] = useState<number>(restTime);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const to2digit = (num: number) => {
    return ("0" + Math.max(num, 0)).slice(-2);
  };

  const isNotStarted = time > 0;
  const isOpening = -(1830 * 60) < time && time <= 0;
  const isEnd = time <= -1830 * 60;

  const day = to2digit(Math.floor(time / 86400));
  const hour = to2digit(Math.floor((time % 86400) / 3600));
  const minute = to2digit(Math.floor((time % 3600) / 60));
  const second = to2digit(time % 60);

  const responsive = useResponsive();

  return (
    <div className="-skew-y-12 font-limelight text-7xl tracking-wide">
      {isNotStarted && (
        <p className="translate-x-4 text-left">
          <span className="text-xl font-bold">文化祭まであと</span>
          <br />
        </p>
      )}
      {isNotStarted &&
        (responsive === MediaType.Desktop ? (
          // PC
          <>
            <p>
              <span className="inline-block w-[100px]">{day} </span>
              <span className="text-2xl font-bold">日</span>
              <span className="inline-block w-[100px]">{hour}</span>
              <span className="text-2xl font-bold">時間</span>

              <span className="inline-block w-[100px]">{minute}</span>
              <span className="text-2xl font-bold">分 </span>
              <span className="inline-block w-[100px]">{second}</span>
              <span className="text-2xl font-bold">秒</span>
            </p>
          </>
        ) : (
          // スマホ タブレット
          <>
            <p>
              <span className="inline-block w-[100px]">{day} </span>
              <span className="text-2xl font-bold">日</span>
              <span className="inline-block w-[100px]">{hour}</span>
              <span className="text-2xl font-bold">時間</span>
              <br />
            </p>
            <p className="translate-x-4">
              <span className="inline-block w-[100px]">{minute}</span>
              <span className="text-2xl font-bold">分 </span>
              <span className="inline-block w-[100px]">{second}</span>
              <span className="text-2xl font-bold">秒</span>
            </p>
          </>
        ))}
      {isOpening && (
        <p className="ml-[0.4em] mt-24 text-3xl font-bold tracking-[0.2em] md:text-6xl">
          ただいま開催中！
        </p>
      )}
      {isEnd && (
        <p className="ml-[0.4em] mt-24 text-3xl font-bold tracking-[0.2em] md:text-6xl">
          お越しいただきありがとうございました！
        </p>
      )}
    </div>
  );
};
