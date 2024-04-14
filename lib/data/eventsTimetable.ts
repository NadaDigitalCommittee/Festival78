import { Time } from "../time";
import { events } from "./events";

export type EventTimetable = {
  id: string;
  time: { day: 1 | 2; time: Time }[];
};

export const eventsTimetable: EventTimetable[] = [
  //講義用教室
  {
    id: "mathematics_event1",
    time: [
      { day: 1, time: new Time(12, 0, 13, 0) },
    ]
  },
  {
    id: "mathematics_event2",
    time: [
      { day: 2, time: new Time(12, 0, 13, 0) },
    ]
  },
  {
    id: "mathematics_event3",
    time: [
      { day: 1, time: new Time(11, 0, 12, 0) },
    ]
  },
  {
    id: "mathematics_event4",
    time: [
      { day: 2, time: new Time(11, 0, 12, 0) },
    ]
  },
  {
    id: "mathematics_event5",
    time: [
      { day: 1, time: new Time(14, 0, 15, 0) },
    ]
  },
  {
    id: "othello_event",
    time: [
      { day: 1, time: new Time(14, 0, 15, 0) },
      { day: 2, time: new Time(14, 0, 15, 0) },
    ]
  },
  {
    id: "npca_event1",
    time: [
      { day: 1, time: new Time(10, 0, 11, 0) },
      { day: 2, time: new Time(10, 0, 11, 0) },
    ]
  },
  {
    id: "npca_event2",
    time: [
      { day: 1, time: new Time(13, 0, 14, 0) },
      { day: 2, time: new Time(13, 0, 14, 0) },
    ]
  },
  {
    id: "physics_event",
    time: [
      { day: 1, time: new Time(12, 0, 13, 0) },
      { day: 2, time: new Time(12, 0, 13, 0) },
    ]
  },
  //その他サークル
  {
    id: "magical_event",
    time: [
      { day: 1, time: new Time(10, 15, 10, 45) },
      { day: 1, time: new Time(11, 45, 12, 15) },
      { day: 1, time: new Time(13, 45, 14, 15) },
      { day: 1, time: new Time(15, 0, 15, 30) },
      { day: 2, time: new Time(10, 15, 10, 45) },
      { day: 2, time: new Time(11, 45, 12, 15) },
      { day: 2, time: new Time(13, 45, 14, 15) },
      { day: 2, time: new Time(15, 0, 15, 30) },
    ]
  },
  {
    id: "classicculture_event",
    time: [
      { day: 1, time: new Time(13, 30, 13, 45) },
      { day: 2, time: new Time(13, 30, 13, 45) }
    ]
  },
  {
    id: "shorinji_event",
    time: [
      { day: 1, time: new Time(14, 0, 14, 15) },
      { day: 2, time: new Time(14, 0, 14, 15) }
    ]
  },
  {
    id: "quiz_event",
    time: [
      { day: 1, time: new Time(9, 0, 15, 0) },
      { day: 2, time: new Time(9, 0, 15, 0) }
    ]
  },
  /*
  "9：40～10：30
11：00～11：50
12：40～13：30
14：00～14：50"
  */
  {
    id: "library_event",
    time: [
      { day: 1, time: new Time(9, 40, 10, 30) },
      { day: 1, time: new Time(11, 0, 11, 50) },
      { day: 1, time: new Time(12, 40, 13, 30) },
      { day: 1, time: new Time(14, 0, 14, 50) },
      { day: 2, time: new Time(9, 40, 10, 30) },
      { day: 2, time: new Time(11, 0, 11, 50) },
      { day: 2, time: new Time(12, 40, 13, 30) },
      { day: 2, time: new Time(14, 0, 14, 50) }
    ]
  },
  {
    id: "biology_event1",
    time: [
      { day: 1, time: new Time(9, 10, 9, 50) },
      { day: 1, time: new Time(10, 0, 10, 40) },
      { day: 1, time: new Time(11, 0, 11, 40) },
      { day: 1, time: new Time(12, 0, 12, 40) },
      { day: 1, time: new Time(13, 0, 13, 40) },
      { day: 1, time: new Time(14, 0, 14, 40) },
      { day: 2, time: new Time(9, 10, 9, 50) },
      { day: 2, time: new Time(10, 0, 10, 40) },
      { day: 2, time: new Time(11, 0, 11, 40) },
      { day: 2, time: new Time(12, 0, 12, 40) },
      { day: 2, time: new Time(13, 0, 13, 40) },
      { day: 2, time: new Time(14, 0, 14, 40) }
    ]
  },
  {
    id: "biology_event2",
    time: [
      { day: 1, time: new Time(9, 5, 14, 55) },
      { day: 2, time: new Time(9, 5, 14, 55) }
    ]
  },
  {
    id: "biology_event3",
    time: [
      { day: 1, time: new Time(10, 0, 10, 15) },
      { day: 1, time: new Time(10, 30, 10, 45) },
      { day: 1, time: new Time(11, 0, 11, 15) },
      { day: 1, time: new Time(11, 30, 11, 45) },
      { day: 1, time: new Time(12, 0, 12, 15) },
      { day: 1, time: new Time(12, 30, 12, 45) },
      { day: 1, time: new Time(13, 0, 13, 15) },
      { day: 1, time: new Time(13, 30, 13, 45) },
      { day: 2, time: new Time(10, 0, 10, 15) },
      { day: 2, time: new Time(10, 30, 10, 45) },
      { day: 2, time: new Time(11, 0, 11, 15) },
      { day: 2, time: new Time(11, 30, 11, 45) },
      { day: 2, time: new Time(12, 0, 12, 15) },
      { day: 2, time: new Time(12, 30, 12, 45) },
      { day: 2, time: new Time(13, 0, 13, 15) },
      { day: 2, time: new Time(13, 30, 13, 45) }
    ]
  },
  //抽選券企画
  {
    id: "lego_event",
    time: [
      { day: 1, time: new Time(11, 0, 12, 0) },
      { day: 1, time: new Time(13, 0, 14, 0) },
      { day: 2, time: new Time(11, 0, 12, 0) },
      { day: 2, time: new Time(13, 0, 14, 0) },
    ]
  },
  {
    id: "campustour",
    time: [
      { day: 1, time: new Time(9, 0, 9, 30) },
      { day: 1, time: new Time(9, 30, 10, 0) },
      { day: 1, time: new Time(10, 0, 10, 30) },
      { day: 1, time: new Time(10, 30, 11, 0) },
      { day: 1, time: new Time(11, 0, 11, 30) },
      { day: 1, time: new Time(11, 30, 12, 0) },
      { day: 1, time: new Time(12, 0, 12, 30) },
      { day: 1, time: new Time(12, 30, 13, 0) },
      { day: 1, time: new Time(13, 0, 13, 30) },
      { day: 1, time: new Time(13, 30, 14, 0) },
      { day: 1, time: new Time(14, 0, 14, 30) },
      { day: 1, time: new Time(14, 30, 15, 0) },
      { day: 2, time: new Time(9, 0, 9, 30) },
      { day: 2, time: new Time(9, 30, 10, 0) },
      { day: 2, time: new Time(10, 0, 10, 30) },
      { day: 2, time: new Time(10, 30, 11, 0) },
      { day: 2, time: new Time(11, 0, 11, 30) },
      { day: 2, time: new Time(11, 30, 12, 0) },
      { day: 2, time: new Time(12, 0, 12, 30) },
      { day: 2, time: new Time(12, 30, 13, 0) },
      { day: 2, time: new Time(13, 0, 13, 30) },
    ]
  },
  {
    id: "conan_event",
    time: [
      { day: 1, time: new Time(10, 30, 11, 0) },
      { day: 1, time: new Time(13, 30, 14, 0) },
      { day: 2, time: new Time(10, 30, 11, 0) },
      { day: 2, time: new Time(13, 30, 14, 0) },
    ]
  },
  {
    id: "car_event",
    time: [
      { day: 1, time: new Time(10, 30, 11, 0) },
      { day: 1, time: new Time(12, 0, 12, 30) },
      { day: 1, time: new Time(13, 30, 14, 0) },
      { day: 2, time: new Time(10, 15, 10, 45) },
      { day: 2, time: new Time(11, 30, 12, 0) },
      { day: 2, time: new Time(12, 45, 13, 15) },
      { day: 2, time: new Time(14, 30, 15, 0) },
    ]
  },
  {
    id: "earthscience_event",
    time: [
      { day: 1, time: new Time(9, 5, 10, 0) },
      { day: 1, time: new Time(10, 5, 11, 0) },
      { day: 1, time: new Time(11, 5, 12, 0) },
      { day: 1, time: new Time(12, 5, 13, 0) },
      { day: 1, time: new Time(13, 5, 14, 0) },
      { day: 1, time: new Time(14, 5, 15, 15) },
      { day: 2, time: new Time(9, 5, 10, 0) },
      { day: 2, time: new Time(10, 5, 11, 0) },
      { day: 2, time: new Time(11, 5, 12, 0) },
      { day: 2, time: new Time(12, 5, 13, 0) },
      { day: 2, time: new Time(13, 5, 14, 0) },
      { day: 2, time: new Time(14, 5, 15, 15) }
    ]
  },
  {
    id: "railway_event",
    time: [
      { day: 1, time: new Time(9, 15, 9, 45) },
      { day: 1, time: new Time(9, 45, 10, 15) },
      { day: 1, time: new Time(10, 15, 10, 45) },
      { day: 1, time: new Time(10, 45, 11, 15) },
      { day: 1, time: new Time(11, 25, 11, 55) },
      { day: 1, time: new Time(11, 55, 12, 25) },
      { day: 1, time: new Time(12, 25, 12, 55) },
      { day: 1, time: new Time(12, 55, 13, 25) },
      { day: 1, time: new Time(13, 40, 14, 10) },
      { day: 1, time: new Time(14, 10, 14, 40) },
      { day: 2, time: new Time(14, 10, 15, 20) },
      { day: 2, time: new Time(9, 15, 9, 45) },
      { day: 2, time: new Time(9, 45, 10, 15) },
      { day: 2, time: new Time(10, 15, 10, 45) },
      { day: 2, time: new Time(10, 45, 11, 15) },
      { day: 2, time: new Time(11, 25, 11, 55) },
      { day: 2, time: new Time(11, 55, 12, 25) },
      { day: 2, time: new Time(12, 25, 12, 55) },
      { day: 2, time: new Time(12, 55, 13, 25) },
      { day: 2, time: new Time(13, 40, 14, 10) },
      { day: 2, time: new Time(14, 10, 15, 10) }
    ]
  },
  {
    id: "chemistry_event",
    time: [
      { day: 1, time: new Time(10, 0, 10, 25) },
      { day: 1, time: new Time(10, 30, 10, 55) },
      { day: 1, time: new Time(12, 0, 12, 25) },
      { day: 1, time: new Time(12, 30, 12, 55) },
      { day: 2, time: new Time(10, 0, 10, 25) },
      { day: 2, time: new Time(10, 30, 10, 55) },
      { day: 2, time: new Time(12, 0, 12, 25) },
      { day: 2, time: new Time(12, 30, 12, 55) }
    ]
  },
  {
    id: "amateurradio_event1",
    time: [
      { day: 1, time: new Time(9, 20, 9, 50) },
      { day: 1, time: new Time(10, 50, 11, 20) },
      { day: 1, time: new Time(13, 10, 13, 40) },
      { day: 2, time: new Time(9, 20, 9, 50) },
      { day: 2, time: new Time(10, 50, 11, 20) },
      { day: 2, time: new Time(13, 10, 13, 40) }
    ]
  },
  {
    id: "amateurradio_event2",
    time: [
      { day: 1, time: new Time(10, 10, 10, 40) },
      { day: 1, time: new Time(11, 40, 12, 10) },
      { day: 1, time: new Time(14, 0, 14, 30) },
      { day: 2, time: new Time(10, 10, 10, 40) },
      { day: 2, time: new Time(11, 40, 12, 10) },
      { day: 2, time: new Time(14, 0, 14, 30) }
    ]
  },
  //ステージ企画
  {
    id: "odoriba",
    time: [
      { day: 1, time: new Time(10, 45, 12, 0) },
      { day: 1, time: new Time(14, 30, 15, 30) },
      { day: 2, time: new Time(10, 15, 11, 45) },
      { day: 2, time: new Time(13, 0, 13, 45) }
    ]
  },
  {
    id: "mscontest",
    time: [
      { day: 1, time: new Time(9, 30, 10, 30) },
      { day: 2, time: new Time(9, 15, 10, 0) }
    ]
  },
  {
    id: "muscle",
    time: [
      { day: 1, time: new Time(12, 15, 13, 0) },
      { day: 2, time: new Time(11, 0, 12, 0) }
    ]
  },
  {
    id: "performance",
    time: [
      { day: 1, time: new Time(13, 45, 14, 15) },
      { day: 2, time: new Time(12, 0, 12, 15) }
    ]
  },
  {
    id: "magic",
    time: [
      { day: 1, time: new Time(13, 15, 13, 30) },
      { day: 2, time: new Time(12, 35, 12, 45) }
    ]
  },
  {
    id: "finale",
    time: [
      { day: 2, time: new Time(14, 15, 15, 15) }
    ]
  },
  {
    id: "n1",
    time: [
      { day: 1, time: new Time(14, 0, 15, 30) },
      { day: 2, time: new Time(11, 45, 13, 45) }
    ]
  },
  {
    id: "ippon",
    time: [
      { day: 1, time: new Time(11, 15, 12, 15) },
      { day: 2, time: new Time(9, 15, 10, 15) }
    ]
  },
  {
    id: "kakuzuke",
    time: [
      { day: 1, time: new Time(9, 30, 10, 30) },
    ]
  },
  {
    id: "quiz",
    time: [
      { day: 2, time: new Time(10, 30, 11, 30) },
    ]
  },
  {
    id: "n1consolation",
    time: [
      { day: 1, time: new Time(12, 45, 13, 30) },
    ]
  },
  {
    id: "maetoato",
    time: [
      { day: 1, time: new Time(10, 45, 11, 45) },
      { day: 2, time: new Time(9, 15, 10, 15) }
    ]
  },
  {
    id: "boxing",
    time: [
      { day: 1, time: new Time(12, 0, 13, 0) },
      { day: 2, time: new Time(11, 45, 12, 45) }
    ]
  },
  {
    id: "nadaju",
    time: [
      { day: 1, time: new Time(9, 30, 10, 30) },
      { day: 2, time: new Time(10, 30, 11, 30) }
    ]
  },
  {
    id: "aurorascience",
    time: [
      { day: 1, time: new Time(13, 15, 14, 45) },
      { day: 2, time: new Time(13, 15, 14, 45) }
    ]
  },
  {
    id: "band1",
    time: [
      { day: 1, time: new Time(9, 30, 10, 0) },
      { day: 2, time: new Time(10, 30, 11, 0) },
    ]
  },
  {
    id: "band2",
    time: [
      { day: 1, time: new Time(10, 0, 10, 30) },
      { day: 2, time: new Time(9, 15, 9, 45) },
    ]
  },
  {
    id: "band3",
    time: [
      { day: 1, time: new Time(10, 30, 11, 0) },
      { day: 2, time: new Time(10, 0, 10, 30) },
    ]
  },
  {
    id: "band4",
    time: [
      { day: 1, time: new Time(11, 0, 11, 15) },
      { day: 2, time: new Time(9, 45, 10, 0) },
    ]
  },
  {
    id: "band5",
    time: [
      { day: 1, time: new Time(11, 30, 12, 0) },
      { day: 2, time: new Time(12, 45, 13, 15) },
    ]
  },
  {
    id: "band6",
    time: [
      { day: 1, time: new Time(12, 0, 12, 30) },
      { day: 2, time: new Time(11, 0, 11, 30) },
    ]
  },
  {
    id: "band7",
    time: [
      { day: 1, time: new Time(12, 30, 13, 0) },
      { day: 2, time: new Time(12, 0, 12, 30) },
    ]
  },
  {
    id: "band8",
    time: [
      { day: 1, time: new Time(13, 0, 13, 15) },
      { day: 2, time: new Time(12, 30, 12, 45) },
    ]
  },
  {
    id: "band9",
    time: [
      { day: 1, time: new Time(13, 15, 13, 45) },
      { day: 2, time: new Time(11, 30, 12, 0) },
    ]
  },
  {
    id: "band10",
    time: [
      { day: 1, time: new Time(13, 45, 14, 15) },
      { day: 2, time: new Time(13, 15, 13, 45) },
    ]
  },
  {
    id: "band11",
    time: [
      { day: 1, time: new Time(14, 15, 14, 45) },
      { day: 2, time: new Time(13, 45, 14, 15) },
    ]
  },
  {
    id: "ess",
    time: [
      { day: 1, time: new Time(14, 0, 15, 30) },
    ]
  }
]