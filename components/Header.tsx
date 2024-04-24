"use client";
import { Star1, Star2 } from "@/components/svg/Star";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { createElement } from "react";

const hrefRequired = ["Blogs"];

export const Header = (props: { children: string; path?: string }) => {
  const { children } = props;
  const _props = props;
  _props.path ??= `/${children.toLowerCase()}`;
  const { path } = _props;
  const isHrefRequired = hrefRequired.includes(children);
  return (
    <header className="flex flex-col">
      <div className="m-12 h-16 md:h-20 lg:h-36">
        {createElement(
          isHrefRequired ? Link : "div",
          {
            href: isHrefRequired ? path : (undefined as unknown as Url),
            tabIndex: +isHrefRequired - 1,
            className:
              "mx-auto my-0 flex w-max justify-center rounded-sm p-0 text-theme outline outline-0 outline-offset-1 outline-body_text focus-visible:outline-2",
          },
          <>
            <Star1 />
            <div className="mx-1 mb-0 mt-auto font-south_amsterdam font-normal text-6xl md:text-7xl lg:text-9xl">
              {children}
            </div>
            <Star2 />
          </>
        )}
      </div>
    </header>
  );
};
