import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";

const hostName = "fest.nada-sc.jp";
export const InlineLink = function (props: {
  [key: string]: any;
  children?: any;
  href: string;
  className?: string;
  disableLink?: boolean;
  spanProps?: Object;
}) {
  const {
    children,
    href: hrefAttr,
    className: classNameAttr,
    disableLink,
    spanProps,
    ...restProps
  } = props;
  const isExternal =
    new URL(hrefAttr, `https://${hostName}`).hostname !== hostName;
  return disableLink ? (
    <a
      {...restProps}
      tabIndex={-1}
      className={`relative inline-block cursor-text outline-none ${classNameAttr}`}
    >
      <span {...spanProps} className="outline-none">
        {children}
      </span>
    </a>
  ) : (
    <Link
      {...restProps}
      href={hrefAttr}
      className={`group relative inline-block transition before:absolute before:bottom-0 before:left-0 before:inline-block before:h-[2px] before:w-full before:scale-x-0 before:bg-current before:opacity-0 before:duration-300 before:content-[''] hover:before:scale-x-100 hover:before:opacity-100 focus-visible:outline-none ${classNameAttr}`}
      target={isExternal ? "_blank" : "_self"}
    >
      <span
        {...spanProps}
        className="flex rounded-sm outline outline-0 outline-offset-1 outline-body_text group-focus-visible:outline-2"
      >
        {children}
        {isExternal ? (
          <span className="my-auto inline-block h-full" aria-hidden="true">
            <HiOutlineExternalLink />
          </span>
        ) : null}
      </span>
    </Link>
  );
};
