"use client";
import { eventNames } from "process";
import { FC, forwardRef, ReactNode, useEffect, useRef, useState } from "react";

// eslint-disable-next-line react/display-name
const BorderColumn = forwardRef<HTMLDivElement>((props, ref) => {
  return (<div className="flex overflow-x-scroll h-[1300px]" ref={ref}>
    {Array(7 * 2).fill(0).map((_, i) => {
      return (
        <div key={i} className="min-w-[50px] border-black first:border-l-[0px] border-l-[2px] odd:border-dashed h-full">

        </div>
      )
    })}
  </div>)
})

// eslint-disable-next-line react/display-name
const TimeRow = forwardRef<HTMLDivElement, {}>(({ }, ref) => {
  return (
    <div className="sticky top-0">
      <div className="flex overflow-x-scroll hidden-scrollbar sticky border-b border-black bg-white" ref={ref}>
        {Array(7).fill(0).map((_, i) => {
          return (
            <div key={i} className="min-w-[100px] text-center">
              <p className="font-limelight text-3xl">{i + 9}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
})

type Props = {
  eventNames: string[];
  children?: ReactNode;
}

export const BaseTimetable: FC<Props> = ({ children, eventNames }) => {
  const [scrollX, setScrollX] = useState(0)
  const timetableRef = useRef<HTMLDivElement>(null)
  const timeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!timetableRef.current) return;
    timetableRef.current.addEventListener("scroll", (e) => {
      setScrollX(timetableRef.current?.scrollLeft || 0)
    })
  }, [timetableRef])

  useEffect(() => {
    timeRef.current?.scrollTo(scrollX, 0)
  }, [scrollX])

  return (
    <div className="flex">
      <EventColumn eventNames={eventNames} />
      <div className="overflow-x-clip relative">
        <div className="absolute">
          {children}
        </div>
        <TimeRow ref={timeRef} />
        <BorderColumn ref={timetableRef} />
      </div>
    </div>
  )
}

const EventColumn: FC<{ eventNames: string[] }> = ({ eventNames }) => {
  return (<div className="mt-[37px] border-r-2 border-black">
    {eventNames.map((name, i) => {
      return (
        <div key={i} className="w-[120px] h-[120px] odd:bg-theme even:bg-white odd:text-white even: text-theme flex items-center justify-center">
          <p>{name}</p>
        </div>
      )
    })}
  </div>)
}