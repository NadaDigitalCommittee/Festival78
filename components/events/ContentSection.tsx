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
    return (<article id={`section_${eventId}`} className="pb-[100px]">
        <div className="flex justify-center">
            <h1 className="pb-[30px] text-7xl font-zen_kaku_gothic_new font-bold">{title}</h1>
        </div>
        <div className="flex justify-center">
            <div className={styles.contentSection_wrapper}>
                <div className="flex gap-[20px] justify-end">
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