import styles from "@/styles/events.module.scss";
import clsx from "clsx";
import ContentLabelButton from "./ContentLabelButton";
import Image from "next/image";

type ContentSectionProps = {
  title: string;
  eventId: string;
  mapId: string;
  comingSoon: boolean;
  markerColor?: "red" | "blue" | "yellow" | "green" | "orange" | "pink";
  content: React.ReactNode;
  logoSrc?: string;
  circleName?: string;
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
  if (id === "chemistry") return "化学教室";

  if (id === "m3-2") return "中学3-2";
  if (id === "h3-1") return "高校3-1";
  if (id === "m2-4") return "中学2-4";
  if (id === "h3-3") return "高校3-3";
  if (id === "m3-3") return "中学3-3";
  if (id === "h2-3") return "高校2-3";
  if (id === "m3-4") return "中学3-4";

  return id;
}

const {
  stripeMarker_blue,
  stripeMarker_red,
  stripeMarker_yellow,
  stripeMarker_green,
  stripeMarker_orange,
  stripeMarker_pink,
} = styles;

export default function ContentSection({
  title,
  eventId,
  mapId,
  content,
  comingSoon,
  markerColor,
  logoSrc,
  circleName
}: ContentSectionProps) {
  const mapName = getMapNameFromId(mapId);
  const stripeMarkerColor = markerColor === "red"
    ? stripeMarker_red
    : markerColor === "blue"
      ? stripeMarker_blue
      : markerColor === "yellow"
        ? stripeMarker_yellow
        : markerColor === "green"
          ? stripeMarker_green
          : markerColor === "orange"
            ? stripeMarker_orange
            : markerColor === "pink"
              ? stripeMarker_pink
              : stripeMarker_blue;
  const borderColor = markerColor === "red"
    ? "bg-red-400"
    : markerColor === "blue"
      ? "bg-[#0400FF]/45"
      : markerColor === "yellow"
        ? "bg-yellow-400"
        : markerColor === "green"
          ? "bg-[#008000]/45"
          : markerColor === "orange"
            ? "bg-[#FFC500]/45"
            : markerColor === "pink"
              ? "bg-[#d45888]/45"
              : "bg-[#0400FF]/45";

  return (
    <article id={`section_${eventId}`} className="w-screen">
      <div className="flex flex-col items-center px-1">
        <div className="relative">
          <div className="w-full translate-x-[50%]">
            {logoSrc&&<Image src={logoSrc} alt="" width={100} height={100} className="-translate-x-1/2"/>}
          </div>
          <div className="md:hidden">
            <div className={clsx("absolute h-1 z-0 translate-y-[45px]", borderColor)}
              style={{
                width: "calc(45vw - 50% - 20px)",
                translate: "calc(-100% - 20px)"
              }} />
            <div className="absolute w-full h-1 z-0 translate-y-[45px]"
              style={{
                translate: "calc(100% + 20px)"
              }}
            >
              <div className={clsx("h-1 w-[10vw]", borderColor)} style={{
                width: "calc(45vw - 50% - 20px)",
              }} />
            </div>
          </div>

          <div className="max-md:hidden">
            <div className={clsx("absolute h-1 z-0 translate-y-[45px]", borderColor)}
              style={{
                width: "calc(30vw - 50% - 20px)",
                translate: "calc(-100% - 20px)"
              }} />
            <div className="absolute w-full h-1 z-0 translate-y-[45px]"
              style={{
                translate: "calc(100% + 20px)"
              }}
            >
              <div className={clsx("h-1 w-[10vw]", borderColor)} style={{
                width: "calc(30vw - 50% - 20px)",
              }} />
            </div>
          </div>

          <h1
            className={clsx(
              "relative z-10 mb-[16px] break-all pb-[16px] font-zen_kaku_gothic_new text-3xl font-bold md:text-4xl",
              stripeMarkerColor
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
        {mapName !== "本館ステージ" && (
          <span className="font-zen_kaku_gothic_new">{`at: ${mapName} ${circleName?`(${circleName})`:""}`}</span>
        )}
      </div>
      <div className="flex justify-center pb-[100px]">
        <div className={clsx(styles.contentSection_wrapper, "px-3")}>
          <div className="flex justify-end gap-[15px] pb-[20px]">
            <ContentLabelButton
              href={{
                pathname: "/maps",
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
            <div className="break-words break-keep font-zen_kaku_gothic_new text-base font-medium">
              {content}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
