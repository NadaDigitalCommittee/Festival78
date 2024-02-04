import { News, getNews } from "@/lib/cms";
import "@/styles/news.scss";

export default async function NewsPage({ params }: { params: { id: string } }) {
  const news = (await getNews()).find((news) => news.id === params.id);
  return (
    <main className="font-zen_kaku_gothic_new">
      {news ? (
        <>
          <h1>タイトル:{news.title}</h1>
          <p>投稿日時:{news.publishedAt}</p>
          <div
            className="news-content"
            dangerouslySetInnerHTML={{ __html: news.content }}
          ></div>
        </>
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
