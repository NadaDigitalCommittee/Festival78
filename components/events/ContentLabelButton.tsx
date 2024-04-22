import Link from "next/link";
import { ReactNode } from "react";
import { UrlObject } from "url";

type ContentLabelButtonProps = {
  children: ReactNode;
  href: UrlObject;
};

export default function ContentLabelButton({
  children,
  href,
}: ContentLabelButtonProps) {
  return (
    <Link
      href={href}
      className="box-border rounded-2xl border-2 border-border pb-[3px] pl-[16px] pr-[16px] pt-[3px]"
    >
      {children}
    </Link>
  );
}
