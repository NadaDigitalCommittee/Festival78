import clsx from "clsx";
import ContentLabelButton from "./ContentLabelButton";
import styles from "@/styles/events.module.scss";

type ContentSectionProps = {
  title: string;
  eventId: string;
  mapId: string;
  comingSoon: boolean;

  content: string;
};

export default function ContentSection({
  title,
  eventId,
  mapId,
  content,
}: ContentSectionProps) {
  return (
    <article id={`section_${eventId}`}>
      <div className="flex justify-center">
        <h1
          className={clsx(
            "mb-[16px] pb-[16px] font-zen_kaku_gothic_new font-bold",
            styles.stripeMarker
          )}
        >
          {title}
        </h1>
      </div>
      <div className="flex justify-center pb-[100px]">
        <div className={styles.contentSection_wrapper}>
          <div className="flex justify-end gap-[15px] pb-[10px]">
            <ContentLabelButton
              href={{
                pathname: "/map",
                query: {
                  id: mapId,
                },
              }}
            >
              <span className="font-zen_kaku_gothic_new text-sm font-bold text-border">
                マップ
              </span>
            </ContentLabelButton>
            <ContentLabelButton
              href={{
                pathname: "/timetable",
                query: {
                  id: eventId,
                },
              }}
            >
              <span className="font-zen_kaku_gothic_new text-sm font-bold text-border">
                タイムテーブル
              </span>
            </ContentLabelButton>
          </div>
          <div>
            <span className="font-zen_kaku_gothic_new text-base font-medium">
              {content}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
