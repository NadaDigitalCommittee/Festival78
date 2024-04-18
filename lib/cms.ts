import {
  MicroCMSContentId,
  MicroCMSDate,
  MicroCMSQueries,
  createClient,
} from "microcms-js-sdk";
import { Time } from "./time";
import type { Event, Blog } from "./types";

export const client = createClient({
  apiKey: process.env.MICROCMS_API_KEY,
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
});

type TimeSchema = {
  hour: number;
  minute: number;
};

type EventSchema = {
  number: number;
  name: string;
  capacity: number;
  description: string;
  place: string;
  start: TimeSchema[];
  end: TimeSchema[];
};

type CategorySchema = {
  name: string;
};

type NewsSchema = {
  title: string;
  content: string;
  category: CategorySchema;
};
export type News = NewsSchema & MicroCMSContentId & MicroCMSDate;

export async function getEvents(): Promise<Event[]> {
  const res = await client.getList<EventSchema>({
    endpoint: "events",
    customRequestInit: {
      next: {
        revalidate: 60,
      },
    },
  });
  return res.contents
    .map((content) => {
      const time: Time[] = [];
      for (let i = 0; i < content.start.length; i++) {
        time.push(
          new Time(
            content.start[i].hour,
            content.start[i].minute,
            content.end[i].hour,
            content.end[i].minute
          )
        );
      }
      return {
        id: content.number,
        name: content.name,
        capacity: content.capacity,
        description: content.description,
        place: content.place,
        time: time,
      };
    })
    .sort((a, b) => a.id - b.id);
}

export async function getNews(draftKey?: string): Promise<News[]> {
  return (
    await client.getList<NewsSchema>({
      endpoint: "news",
      customRequestInit: {
        next: {
          revalidate: 60,
        },
      },
      queries: {
        draftKey: draftKey,
      },
    })
  ).contents;
}

export { Blog };

export const getBlogList = async (queries?: MicroCMSQueries) => {
  const blogsListData = await client.getList<Blog>({
    endpoint: "blogs",
    queries,
  });
  const journeyListData = await client.getList<Blog>({
    endpoint: "journey",
    queries,
  });
  blogsListData.contents.map((post: Blog) => {
    post.type = "blogs";
  });
  journeyListData.contents.map((post: Blog) => {
    post.type = "journey";
  });
  const listDataAll = {
    contents: blogsListData.contents.concat(journeyListData.contents),
    totalCount: blogsListData.totalCount + journeyListData.totalCount,
  };
  return listDataAll;
};

export const getBlogDetail = async (
  contentType: string,
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Blog>({
    endpoint: contentType,
    contentId,
    queries,
  });
  return detailData;
};
