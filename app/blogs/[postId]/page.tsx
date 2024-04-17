import Image from "next/image";
import Link from "next/link";
import React, { createElement } from "react";
import { notFound } from "next/navigation";
import parse, {
  DOMNode,
  Element,
  HTMLReactParserOptions,
  domToReact,
} from "html-react-parser";
import { getBlogList, getBlogDetail, Blog } from "@/lib/cms";
import type { Metadata } from "next";

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

  const paths = contents.map((post: Blog) => {
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
  const options: HTMLReactParserOptions = {
    replace(domNode:DOMNode) {
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
        }else if([...new Array(6)].map((_,i)=>{return `h${i+1}`}).includes(name)){
          const tsFontSizes=["3xl","2xl","xl","base","sm","xs"];
          return createElement(
            name,
            { ...attribsExcClass, className:`${name[1]==="1"?"p-3 md:p-4 mx-0 my-4 flex justify-start border-b-2 border-b-theme":"py-1 my-1 ml-3 mr-1"} text-${tsFontSizes[+name[1]-1]} font-bold ${classAttr || ""}`,},
            domToReact(children as DOMNode[], options)
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
              className={`mx-auto my-4 w-full lg:w-5/6 ${classAttr || ""}`}
            />
          );
        }
      }
    },
  };
  const documentBody = parse(post.content, options);
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
      <div className="mx-auto my-10 w-11/12 md:text-xl">{documentBody}</div>
    </>
  );
}
export const dynamicParams = false;