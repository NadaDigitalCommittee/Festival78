import { getNews } from "@/lib/cms";
import Link from "next/link";

export default async function Page() {
  const news = await getNews();
  return (
    <main>
      {news.map((news, i) => (
        <Link key={news.id} href={`/news/${news.id}`}>{`${i}番目の記事`}</Link>
      ))}
    </main>
  );
}
