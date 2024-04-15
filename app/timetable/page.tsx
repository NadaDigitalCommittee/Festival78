import { BaseTimetable } from "./TimetableRow";

export default function Page() {
  return (
    <div className="font-zen_kaku_gothic_new font-bold">
      <h1>Timetable</h1>
      <BaseTimetable eventNames={["あ","い","う","え","お"]}>
      
      </BaseTimetable>
    </div>
  )
}