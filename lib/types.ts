import { Time } from "./time";
import { MicroCMSDate, MicroCMSImage } from "microcms-js-sdk";

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
