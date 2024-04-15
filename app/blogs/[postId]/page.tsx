import Image from "next/image";
import Link from "next/link";
import React from "react";
import { notFound } from "next/navigation";
import { getBlogList, getBlogDetail } from "@/lib/cms";
import type { Metadata } from "next";
import { metadata } from "../page";
import { Cheerio } from "cheerio";

export async function generateMetadata({
  params: { postId },
}: {
  params: { postId: string };
}): Promise<Metadata> {
  if (
    !(await generateStaticParams()).map((path) => path.postId).includes(postId)
  ) {
    return {};
  }
  const post = await getBlogDetail(postId);
  return {
    title: `${post.title} | ブログ`,
  };
}

export async function generateStaticParams() {
  const { contents } = await getBlogList();

  const paths = contents.map((post) => {
    return {
      postId: post.id,
    };
  });

  return [...paths];
}

export default async function StaticDetailPage({
  params: { postId },
}: {
  params: { postId: string };
}) {
  if (
    !(await generateStaticParams()).map((path) => path.postId).includes(postId)
  ) {
    notFound();
  }
  const post = await getBlogDetail(postId);
  const publishedAtUTC = new Date(post.publishedAt || 0);
  const publishedAt = {
    year: publishedAtUTC.getFullYear(),
    month: publishedAtUTC.getMonth() + 1,
    date: publishedAtUTC.getDate(),
    hour: publishedAtUTC.getHours(),
    minute: publishedAtUTC.getMinutes(),
    second: publishedAtUTC.getSeconds(),
  };
  /*const options: HTMLReactParserOptions = {
    replace(domNode) {
      if (domNode instanceof Element && domNode.attribs) {
        const { name, attribs, parent, children } = domNode;
        const { classAttr, ...attribsExcClass } = attribs;
        if (name === "a") {
          //形式上hrefなしだと静的解析に引っかかるのでダミーhrefをattribsで上書き. alt, src同様
          return (
            <Link
              href=""
              {...attribsExcClass}
              className={`group relative inline-block text-theme transition before:absolute before:bottom-0 before:left-0 before:inline-block before:h-[2px] before:w-full before:-translate-x-full before:bg-theme before:opacity-0 before:duration-300 before:content-[''] hover:before:translate-x-0 hover:before:opacity-100 focus:before:translate-x-0 focus:before:opacity-100 focus-visible:outline-none ${classAttr || ""}`}
            >
              <span className="rounded-sm outline outline-0 outline-offset-1 outline-body_text group-focus-visible:outline-2">
                {domToReact(children as DOMNode[], options)}
              </span>
            </Link>
          );
        } else if (
          name === "u" && parent ? (parent as Element).name === "a" : false
        ) {
          return <>{domToReact(children as DOMNode[])}</>;
        } else if (name === "h2") {
          return (
            <h2
              {...attribsExcClass}
              className={`my-1 ml-3 mr-1 text-2xl font-bold ${classAttr || ""}`}
            >
              {domToReact(children as DOMNode[], options)}
            </h2>
          );
        } else if (name === "h3") {
          return (
            <h3
              {...attribsExcClass}
              className={`my-1 ml-3 mr-1 text-xl font-bold ${classAttr || ""}`}
            >
              {domToReact(children as DOMNode[], options)}
            </h3>
          );
        } else if (name === "h4") {
          return (
            <h4
              {...attribsExcClass}
              className={`my-1 ml-3 mr-1 text-base font-bold ${classAttr || ""}`}
            >
              {domToReact(children as DOMNode[], options)}
            </h4>
          );
        } else if (name === "h5") {
          return (
            <h5
              {...attribsExcClass}
              className={`my-1 ml-3 mr-1 text-sm font-bold ${classAttr || ""}`}
            >
              {domToReact(children as DOMNode[], options)}
            </h5>
          );
        } else if (name === "h6") {
          return (
            <h6
              {...attribsExcClass}
              className={`my-1 ml-3 mr-1 text-xs font-bold ${classAttr || ""}`}
            >
              {domToReact(children as DOMNode[], options)}
            </h6>
          );
        } else if (name === "p") {
          return (
            <p {...attribsExcClass} className={`p-1 ${classAttr || ""}`}>
              {domToReact(children as DOMNode[], options)}
            </p>
          );
        } else if (name === "img") {
          return (
            <Image
              alt=""
              src=""
              {...attribsExcClass}
              className={` ${classAttr || ""}`}
            />
          );
        }
      }
    },
  };*/
  //const documentBody = parse(post.content, options);

  const $ = (await import("cheerio")).load(post.content);

  const documentBody = $.html();
  return (
    <>
      <div className="flex justify-start border-b-2 border-b-theme">
        <div className="mx-2 my-4 flex w-28 flex-col justify-center font-times_new_roman font-bold text-body_text text-opacity-50 md:w-40">
          <div className="text-3xl md:text-4xl">{publishedAt.year}</div>
          <div className="text-5xl md:text-7xl">
            {publishedAt.month}/{publishedAt.date}
          </div>
        </div>
        <h1 className="mx-2 my-4 flex items-center justify-center text-3xl font-bold text-body_text md:text-4xl">
          {post.title}
        </h1>
      </div>
      <div className="mx-auto my-10 w-11/12 md:text-xl" dangerouslySetInnerHTML={{__html: documentBody}}></div>
    </>
  );
}

export const runtime = "edge";