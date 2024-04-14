import Link from "next/link";
import { ReactNode } from "react";

type ContentLabelButtonProps = {
    children: ReactNode;
    href: string;
}

export default function ContentLabelButton({children, href}: ContentLabelButtonProps) {
    return <Link href={href} className="pt-2.5 pb-2.5 pl-4 pr-4 rounded-sm">
        {children}
    </Link>
}