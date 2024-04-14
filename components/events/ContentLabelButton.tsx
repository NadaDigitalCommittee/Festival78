import Link from "next/link";
import { ReactNode } from "react";

type ContentLabelButtonProps = {
    children: ReactNode;
    href: string;
}

export default function ContentLabelButton({children, href}: ContentLabelButtonProps) {
    return <Link href={href} className="pt-[5px] pb-[5px] pl-[16px] pr-[16px] rounded-2xl border-border border-2 box-border">
        {children}
    </Link>
}