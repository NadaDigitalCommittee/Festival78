import { MicroCMSDate, MicroCMSImage } from "microcms-js-sdk";
import { Time } from "./time";

export type Event = {
  id: number;
  name: string;
  description?: string;
  time: Time[];
  location?: string;
  image?: string;
};
export type Blog = {
  id: string;
  title: string;
  content: string;
  type: string;
  eyecatch?: MicroCMSImage;
} & MicroCMSDate;
export type TimetableData = {
  id: string;
  category: "lecture_m" | "lecture_h" | "raffle" | "garden" | "audiovisual" | "lecture" | "mainhall" | "gym" | "others";
  name: string;
  time: {
    day: 1 | 2;
    time: Time;
  }[] | undefined;
}