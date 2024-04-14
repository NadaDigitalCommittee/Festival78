import clsx from "clsx";
import ContentLabelButton from "./ContentLabelButton";
import styles from "@/styles/events.module.scss";

type ContentSectionProps = {
    title: string;
    eventId: string;
    mapId: string;
    comingSoon: boolean;

    content: string;
}

export default function ContentSection({title, eventId, content}: ContentSectionProps) {
    return (<article id={`section_${eventId}`}>
        <div className="flex justify-center">
            <h1 className={clsx("mb-[24px] pb-[24px] text-7xl font-zen_kaku_gothic_new font-bold", styles.stripeMarker)}>{title}</h1>
        </div>
        <div className="flex justify-center pb-[100px]">
            <div className={styles.contentSection_wrapper}>
                <div className="flex gap-[20px] justify-end pb-[16px]">
                    <ContentLabelButton href="">
                        <span className="text-xl font-zen_kaku_gothic_new font-bold text-border">マップ
                            </span>
                    </ContentLabelButton>
                    <ContentLabelButton href="">
                        <span className="text-xl font-zen_kaku_gothic_new font-bold text-border">
                        タイムテーブル
                        </span>
                    </ContentLabelButton>
                </div>
                <div>
                    <span className="text-2xl font-medium">{content}</span>
                </div>
            </div>
        </div>
    </article>);
}