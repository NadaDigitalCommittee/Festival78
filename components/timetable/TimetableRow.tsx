"use client";
import { FC, forwardRef, ReactNode, useEffect, useRef, useState } from "react";

// eslint-disable-next-line react/display-name
const BorderColumn = forwardRef<HTMLDivElement>((props, ref) => {
  return (<div className="flex overflow-x-scroll h-[1300px]" ref={ref}>
    {Array(7 * 2).fill(0).map((_, i) => {
      return (
        <div key={i} className="min-w-[50px] w-[6vw] border-black first:border-l-[0px] border-l-[2px] odd:border-dashed h-full">

        </div>
      )
    })}
  </div>)
})

// eslint-disable-next-line react/display-name
const TimeRow = forwardRef<HTMLDivElement, {}>(({ }, ref) => {
  return (
    <div className="sticky top-0 z-10">
      <div className="flex overflow-x-scroll hidden-scrollbar sticky border-b border-black bg-white" ref={ref}>
        {Array(7).fill(0).map((_, i) => {
          return (
            <div key={i} className="min-w-[100px] w-[12vw] text-center h-[120px] flex items-end">
              <p className="font-limelight text-3xl w-full">{i + 9}</p>
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
        <div className="absolute top-[120px]">
          {children}
        </div>
        <TimeRow ref={timeRef} />
        <BorderColumn ref={timetableRef} />
      </div>
    </div>
  )
}

const EventColumn: FC<{ eventNames: string[] }> = ({ eventNames }) => {
  return (<div className="z-0">
    <div className="min-w-[100px] w-[120px] h-[120px] bg-white sticky top-0" />
    {eventNames.map((name, i) => {
      return (
        <div key={i} className={`border-r-2 border-black w-[120px] h-[120px] 
        even:bg-theme odd:bg-white 
        even:text-white odd: text-theme 
        flex items-center justify-center`}>
          <p>{name}</p>
        </div>
      )
    })}
  </div>)
}