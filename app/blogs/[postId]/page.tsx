import Image from "next/image";
import Link from "next/link";
import React, { ReactNode, createElement } from "react";
import { notFound } from "next/navigation";
import parse, {
  DOMNode,
  Element,
  HTMLReactParserOptions,
  domToReact,
} from "html-react-parser";
import { getBlogList, getBlogDetail, Blog } from "@/lib/cms";
import type { Metadata } from "next";
import { ChevronRightIcon } from "@/components/svg/ChevronRightIcon";
import { InlineLink } from "@/components/InlineLink";

export async function generateMetadata({
  params: { postId },
}: {
  params: { postId: string };
}): Promise<Metadata> {
  const { contents } = await getBlogList();
  const contentTypes = Object.fromEntries(
    contents.map((post: Blog) => {
      return [post.id, post.type];
    })
  );
  const post = contentTypes[postId]
    ? await getBlogDetail(contentTypes[postId], postId)
    : { title: "記事が見つかりません" };
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
  const { contents } = await getBlogList();
  const contentTypes = Object.fromEntries(
    contents.map((post: Blog) => {
      return [post.id, post.type];
    })
  );
  if (!contentTypes[postId]) {
    notFound();
  }
  const post = await getBlogDetail(contentTypes[postId], postId);
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
    replace(domNode: DOMNode) {
      if (domNode instanceof Element && domNode.attribs) {
        const { name, attribs, type, parent, children } = domNode;
        const { class: classAttr, style: styleAttr, ...restAttribs } = attribs;
        const styleAttrObject = Object.fromEntries(
          (styleAttr || "")
            .split(";")
            .filter(Boolean)
            .map((s: string) => {
              return s.split(":").map((v) => {
                return v.trim();
              });
            })
        );
        if (name === "a") {
          //形式上hrefなしだと静的解析に引っかかるのでダミーhrefをattribsで上書き. alt, src同様
          return (
            <InlineLink
              href=""
              {...restAttribs}
              style={styleAttrObject}
              className={`text-theme ${classAttr || ""}`}
            >
              {domToReact(children as DOMNode[], options)}
            </InlineLink>
          );
        } else if (
          name === "u" && parent ? (parent as Element).name === "a" : false
        ) {
          return <>{domToReact(children as DOMNode[])}</>;
        } else if (
          [...new Array(6)]
            .map((_, i) => {
              return `h${i + 1}`;
            })
            .includes(name)
        ) {
          const twFontSizes = ["3xl", "2xl", "xl", "base", "sm", "xs"];
          return createElement(
            name,
            {
              ...restAttribs,
              style: styleAttrObject,
              className: `${name[1] === "1" ? "p-3 md:p-4 mx-0 my-4 flex justify-start border-b-2 border-b-theme" : "py-1 my-1 ml-3 mr-1"} text-${twFontSizes[+name[1] - 1]} font-bold ${classAttr || ""}`,
            },
            domToReact(children as DOMNode[], options)
          );
        } else if (name === "p") {
          return (
            <p
              {...restAttribs}
              style={styleAttrObject}
              className={`p-1 ${classAttr || ""}`}
            >
              {domToReact(children as DOMNode[], options)}
            </p>
          );
        } else if (name === "img") {
          return (
            <Image
              alt=""
              src=""
              {...restAttribs}
              style={styleAttrObject}
              className={`mx-auto my-4 w-full lg:w-5/6 ${classAttr || ""}`}
            />
          );
        } else if (type === "tag") {
          const voidTags = [
            "area",
            "base",
            "br",
            "col",
            "embed",
            "hr",
            "img",
            "input",
            "link",
            "meta",
            "param",
            "source",
            "track",
            "wbr",
          ];
          return createElement(
            name,
            {
              ...restAttribs,
              style: styleAttrObject,
              className: classAttr || "",
            },
            voidTags.includes(name.toLowerCase())
              ? null
              : domToReact(children as DOMNode[], options)
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
      <nav
        aria-label="パンくずリスト"
        className="mx-0 my-2 flex h-max w-full items-center justify-start p-0 text-sm md:mx-2 md:w-max md:text-base"
      >
        <ol
          className="flex"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {[
            ["/", "トップ"],
            ["/blogs", "ブログ"],
            [`/blogs/${postId}`, post.title],
          ].map((hierarchy, index, originalArray) => {
            const isCurrentPage = Boolean(index === originalArray.length - 1);
            return (
              <li
                className="flex"
                key={index}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <InlineLink
                  {...(isCurrentPage
                    ? { "aria-current": "page", disableLink: true }
                    : {})}
                  spanProps={{
                    itemprop: "name",
                  }}
                  href={hierarchy[0]}
                  className={`text-body_text ${isCurrentPage ? "" : "text-theme"}`}
                  itemscope
                  itemtype="https://schema.org/WebPage"
                  itemprop="item"
                  itemid={`https://fest.nada-sc.jp${hierarchy[0]}`}
                >
                  {hierarchy[1]}
                </InlineLink>
                {isCurrentPage ? (
                  ""
                ) : (
                  <div className="mx-1 my-auto h-3 w-2 scale-75">
                    <ChevronRightIcon />
                  </div>
                )}
                <meta itemProp="position" content={String(index + 1)} />
              </li>
            );
          })}
        </ol>
      </nav>
      <div className="mx-auto my-10 w-11/12 text-base md:text-xl">
        {documentBody}
      </div>
    </>
  );
}
export const dynamicParams = false;
