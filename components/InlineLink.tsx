import Link from "next/link";

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
  return disableLink ? (
    <a
      {...restProps}
      tabIndex={-1}
      className={`relative inline-block outline-none cursor-text ${classNameAttr}`}
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
    >
      <span
        {...spanProps}
        className="rounded-sm outline outline-0 outline-offset-1 outline-body_text group-focus-visible:outline-2"
      >
        {children}
      </span>
    </Link>
  );
};
