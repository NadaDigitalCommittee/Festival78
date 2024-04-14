"use client";

import { useEffect, useRef, useState } from "react";

export default function Page() {
  const [scrollX, setScrollX] = useState(0)
  const timetableRef = useRef<HTMLDivElement>(null)
  const timeRef = useRef<HTMLDivElement>(null)
  console.log(scrollX)

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
    <div className="font-zen_kaku_gothic_new font-bold">
      <h1>Timetable</h1>
      <div className="ml-4">
        <div className="sticky top-0">
          <div className="flex overflow-x-scroll hidden-scrollbar sticky border-b border-black bg-white" ref={timeRef}>
            {Array(7).fill(0).map((_, i) => {
              return (
                <div key={i} className="min-w-[100px] text-center">
                  <p className="font-limelight text-3xl">{i + 9}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div className="flex overflow-x-scroll h-[1300px]" ref={timetableRef}>
          {Array(7 * 2).fill(0).map((_, i) => {
            return (
              <div key={i} className="min-w-[50px] border-black first:border-l-[0px] border-l-[2px] odd:border-dashed h-full">

              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}