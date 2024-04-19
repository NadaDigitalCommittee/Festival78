import clsx from "clsx";
import ContentLabelButton from "./ContentLabelButton";
import styles from "@/styles/events.module.scss";

type ContentSectionProps = {
  title: string;
  eventId: string;
  mapId: string;
  comingSoon: boolean;

  content: React.ReactNode;
};

export default function ContentSection({
  title,
  eventId,
  mapId,
  content,
}: ContentSectionProps) {
  return (
    <article id={`section_${eventId}`} className="w-screen">
      <div className="flex justify-center px-1">
        <h1
          className={clsx(
            "font-zen_kaku_gothic_new mb-[16px] pb-[16px] text-3xl font-bold md:text-4xl break-all",
            styles.stripeMarker
          )}
        >
          {title}
        </h1>
      </div>
      <div className="flex justify-center pb-[100px]">
        <div className={clsx(styles.contentSection_wrapper, "px-3")}>
          <div className="flex justify-end gap-[15px] pb-[20px]">
            <ContentLabelButton
              href={{
                pathname: "/map",
                query: {
                  id: mapId,
                },
              }}
            >
              <span className="font-zen_kaku_gothic_new text-border text-sm font-bold">
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
              <span className="font-zen_kaku_gothic_new text-border text-sm font-bold">
                タイムテーブル
              </span>
            </ContentLabelButton>
          </div>
          <div className="px-4 text-center">
            <p className="font-zen_kaku_gothic_new break-words break-keep text-base font-medium">
              {content}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
