import Link from "next/link";
import { Blog, getBlogList } from "@/lib/cms";
import type { Metadata } from "next";
import { ChevronRight } from "@/components/svg/ChevronRight";

export const metadata: Metadata = {
  title: "記事一覧 | ブログ",
};
export default async function StaticPage() {
  const { contents } = await getBlogList();
  if (!contents || !contents.length) {
    return <div>記事はありません。</div>;
  }

  return (
    <>
      <h1 className="m-8 flex items-center justify-center text-3xl font-bold text-body_text md:text-4xl">
        記事一覧
      </h1>
      <ul>
        {contents.map((post: Blog) => {
          const publishedAtUTC = new Date(post.publishedAt || 0);
          const publishedAt = {
            year: publishedAtUTC.getFullYear(),
            month: publishedAtUTC.getMonth() + 1,
            date: publishedAtUTC.getDate(),
            hour: publishedAtUTC.getHours(),
            minute: publishedAtUTC.getMinutes(),
            second: publishedAtUTC.getSeconds(),
          };
          return (
            <li
              key={post.id}
              className="my-1 w-full -translate-x-0 border-b-2 border-theme border-opacity-0 bg-white duration-300 focus-within:-translate-x-3 hover:-translate-x-3 hover:border-opacity-100 md:focus-within:-translate-x-4 md:hover:-translate-x-4 [&:nth-child(2n+1)]:bg-odd_column"
            >
              <Link
                href={`/blogs/${post.id}`}
                className="flex w-full h-full items-center justify-start rounded-sm pl-2 outline outline-0 outline-offset-1 outline-body_text focus-visible:outline-2"
              >
                <div className="mx-2 my-2 flex w-20 flex-col justify-center font-times_new_roman font-bold text-body_text text-opacity-50">
                  <div className="text-lg">{publishedAt.year}</div>
                  <div className="text-3xl">
                    {publishedAt.month}/{publishedAt.date}
                  </div>
                </div>
                <div className="mx-2 my-2 line-clamp-2 overflow-hidden text-xl font-bold md:text-2xl">
                  {post.title}
                </div>
                <div className="flex-shrink-1 mx-2 ml-auto mr-4 aspect-[3/4] h-6 w-auto text-theme md:mr-6">
                  <ChevronRight />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
