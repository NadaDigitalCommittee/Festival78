import ContentLabelButton from "./ContentLabelButton";

type ContentSectionProps = {
    title: string;
    eventId: string;
    comingSoon: boolean;

    content: string;
}

export default function ContentSection({title, eventId, content}: ContentSectionProps) {
    return (<article id={`section_${eventId}`}>
        <h1>{title}</h1>
        <div>
            <div>
                <div>
                    <ContentLabelButton href="">
                        マップ
                    </ContentLabelButton>
                    <ContentLabelButton href="">
                        タイムテーブル
                    </ContentLabelButton>
                </div>
                <div>
                    <span>{content}</span>
                </div>
            </div>
        </div>
    </article>);
}