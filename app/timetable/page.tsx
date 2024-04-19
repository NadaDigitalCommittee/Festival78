import { Cell } from "@/components/timetable/Cell";
import { BaseTimetable } from "../../components/timetable/TimetableRow";
import { Time } from "@/lib/time";
import { eventsTimetable } from "@/lib/data/eventsTimetable";
import { Category, events } from "@/lib/data/events";

export default function Page() {
  const data = new Map<Category, { category: Category, name: string, time?: { day: 1 | 2, time: Time }[] }[]>()
  const a = events.map((event, i) => {
    return (
      {
        category: event.category,
        name: event.name,
        time: eventsTimetable.find((e) => e.id === event.id)?.time
      }
    )
  })
  const day = 1

  const categories = a.map(b => b.category).filter((x, i, self) => self.indexOf(x) === i)
  categories.forEach((category) => {
    const c = a.filter((e) => e.category === category)
    data.set(category, c)
  })

  return (
    <div className="font-zen_kaku_gothic_new font-bold">

      <BaseTimetable eventNames={["あ", "い", "う", "え", "お"]}>
        {
          categories.map((category,i_c) => {
            return (
              <div key={category}>
                {
                  data.get(category)?.map((event, i) => {
                    return (
                      <div key={i}>
                        {
                          event.time?.map((time, i) => {
                            if (time.day !== day) { return; }
                            return (
                              <Cell key={i} index={i_c} time={time.time} name={event.name} />
                            )
                          })
                        }
                      </div>
                    )
                  })
                }
              </div>
            )
          })
        }
      </BaseTimetable>
    </div>
  )
}