import { MicroCMSContentId, MicroCMSDate, createClient } from "microcms-js-sdk";

const client = createClient({
  apiKey: process.env.MICROCMS_API_KEY,
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
});

type BlogSchema = {
  title: string;
  content: string;
  shortContent: string;
};
export type Blog = BlogSchema & MicroCMSContentId & MicroCMSDate;

export async function getBlogs(draftKey?: string): Promise<Blog[]> {
  return (
    await client.getList<BlogSchema>({
      endpoint: "blogs",
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