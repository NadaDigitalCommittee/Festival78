import { News, getNews } from "@/lib/cms";
import parse from "html-react-parser";
import "@/styles/news.scss";

export default async function NewsPage({ params }: { params: { id: string } }) {
  const news = (await getNews()).find((news) => news.id === params.id);
  return (
    <main>
      {news ? (
        <>
          <h1>{news.title}</h1>
          <div className="news-content">{parse(news.content)}</div>
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

export const runtime = "edge"