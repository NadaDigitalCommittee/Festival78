import Link from "next/link";
import { ReactNode } from "react";
import { UrlObject } from "url";

type ContentLabelButtonProps = {
    children: ReactNode;
    href: UrlObject;
}

export default function ContentLabelButton({children, href}: ContentLabelButtonProps) {
    return <Link href={href} className="pt-[3px] pb-[3px] pl-[16px] pr-[16px] rounded-2xl border-border border-2 box-border">
        {children}
    </Link>
}