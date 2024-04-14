import Link from "next/link";
import { ReactNode } from "react";

type ContentLabelButtonProps = {
  children: ReactNode;
  href: string;
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
