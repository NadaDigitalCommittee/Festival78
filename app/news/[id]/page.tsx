import { News, getNews } from "@/lib/cms";
import style from "@/styles/news.module.scss";

export default async function NewsPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const draftKey = searchParams.draftKey as string | undefined;
  const news = (await getNews(draftKey)).find((news) => news.id === params.id);
  return (
    <main className="w-full max-w-[1000px] font-zen_kaku_gothic_new">
      {news ? (
        <div className="mx-3">
          <p>{draftKey && "※これはプレビュー画面です"}</p>
          <h1 className="font-3xl">{news.title}</h1>
          <p>投稿日時:{news.publishedAt}</p>
          <div
            className={style.content}
            dangerouslySetInnerHTML={{ __html: news.content }}
          ></div>
        </div>
      ) : (
        <h1>記事が見つかりませんでした</h1>
      )}
    </main>
  );
}

export async function generateStaticParams() {
  const news = await getNews();

  return news.map((news) => ({
    params: {
      id: news.id,
    },
  }));
}

export const runtime = "edge";
