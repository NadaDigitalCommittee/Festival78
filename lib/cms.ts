import {
  MicroCMSQueries,
  createClient,
} from "microcms-js-sdk";
import type { Blog } from "./types";

export const client = createClient({
  apiKey: process.env.MICROCMS_API_KEY,
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
});

type CategorySchema = {
  name: string;
};

type NewsSchema = {
  title: string;
  content: string;
  category: CategorySchema;
};
export type News = NewsSchema & MicroCMSContentId & MicroCMSDate;

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
