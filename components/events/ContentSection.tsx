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

function getMapNameFromId(id: string) {
  if (id === "mainhall") return "本館ステージ";
  if (id === "garden") return "中庭ステージ";
  if (id === "audiovisual") return "視聴覚ステージ";
  if (id === "lecture") return "大講義ステージ";
  if (id === "gym") return "体育館";
  if (id === "training") return "研修館";
  if (id === "library") return "図書館";
  if (id === "biologysub") return "理科講義室";
  if (id === "campustour") return "本館前";
  if (id === "earthscience") return "地学教室";
  if (id === "ground1") return "第一グラウンド";
  if (id === "chemistry") return "科学教室";

  if (id === "m3-2") return "中学3-2";
  if (id === "h3-1") return "高校3-1";
  if (id === "m2-4") return "中学2-4";
  if (id === "h3-3") return "高校3-3";
  if (id === "m3-3") return "中学3-3";
  if (id === "h2-3") return "高校2-3";
  if (id === "m3-4") return "中学3-4";

  return id;
}

export default function ContentSection({
  title,
  eventId,
  mapId,
  content,
  comingSoon,
}: ContentSectionProps) {
  const mapName = getMapNameFromId(mapId);
  return (
    <article id={`section_${eventId}`} className="w-screen">
      <div className="flex flex-col items-center px-1">
        <div className="relative">
          <h1
            className={clsx(
              "mb-[16px] break-all pb-[16px] font-zen_kaku_gothic_new text-3xl font-bold md:text-4xl",
              styles.stripeMarker
            )}
          >
            {title}
          </h1>
          {comingSoon ? (
            <span className="absolute right-[-50px] top-[-40px] rotate-12 break-keep rounded-[40px_40px_40px_40px/20px_20px_20px_20px] bg-border p-2 font-zen_kaku_gothic_new font-bold text-white">
              もうすぐ開催!
            </span>
          ) : (
            <></>
          )}
        </div>
        <span className="font-zen_kaku_gothic_new">{`at: ${mapName}`}</span>
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
          <div className="px-4 text-center">
            <p className="break-words break-keep font-zen_kaku_gothic_new text-base font-medium">
              {content}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
