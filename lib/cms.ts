import {
  MicroCMSQueries,
  // createClient,
} from "microcms-js-sdk";
import type { Blog } from "./types";
import cmsData from "./cmsData.json";

// const apiKey = process.env.MICROCMS_API_KEY;
// const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;

// if (!apiKey || !serviceDomain) {
//   throw new Error(
//     "Please set the environment variables MICROCMS_API_KEY and MICROCMS_SERVICE_DOMAIN."
//   );
// }

// export const client = createClient({
//   apiKey: process.env.MICROCMS_API_KEY ?? "",
//   serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN ?? "",
// });

export { Blog };

// eslint-disable-next-line unused-imports/no-unused-vars
export const getBlogList = async (queries?: MicroCMSQueries) => {
  // const blogsListData = await client.getList<Blog>({
  //   endpoint: "blogs",
  //   queries,
  // });
  // const journeyListData = await client.getList<Blog>({
  //   endpoint: "journey",
  //   queries,
  // });
  // blogsListData.contents.map((post: Blog) => {
  //   post.type = "blogs";
  // });
  // journeyListData.contents.map((post: Blog) => {
  //   post.type = "journey";
  // });
  // const listDataAll = {
  //   contents: blogsListData.contents.concat(journeyListData.contents),
  //   totalCount: blogsListData.totalCount + journeyListData.totalCount,
  // };
  // return listDataAll;
  return cmsData;
};

export const getBlogDetail = async (
  contentType: string,
  contentId: string,
  // eslint-disable-next-line unused-imports/no-unused-vars
  queries?: MicroCMSQueries
) => {
  // const detailData = await client.getListDetail<Blog>({
  //   endpoint: contentType,
  //   contentId,
  //   queries,
  // });
  const detailData = cmsData.contents.find(
    (content: Blog) => content.id === contentId && content.type === contentType
  );
  return detailData as Blog;
};
