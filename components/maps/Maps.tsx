"use client";
import { FC, cloneElement, useEffect } from "react";
import styles from "./maps.module.scss";

const useFocusMap = function (mapIdList: string[] | undefined) {
  useEffect(() => {
    if (!mapIdList) return;
    [...document.getElementsByClassName(attention)]?.forEach((elm) => {
      elm.classList.remove(attention);
    });
    mapIdList.forEach(
      (mapId) => {
        document.getElementById(mapId)?.classList.add(attention);
      },
      [mapIdList]
    );
  });
};

const expandChildren = (elm: JSX.Element) => {
  if (Array.isArray(elm?.props?.children)) {
    return elm.props.children.map(expandChildren);
  } else {
    return elm;
  }
};

type Props = {
  floorNumber: number;
  className?: string;
  mapIdList?: string[];
};

const padding = 20;
const { arrow, boxFill, boxStroke, fillNone, strokeNone, attention } = styles;

const boxFS = [boxFill, boxStroke].join(" ");
const boxF_ = [boxFill, strokeNone].join(" ");
const box_S = [fillNone, boxStroke].join(" ");
const box__ = [fillNone, strokeNone].join(" ");

const mapSvgAll = [
  <svg
    key="1F"
    xmlns="http://www.w3.org/2000/svg"
    viewBox={[
      0 - padding,
      0 - padding,
      396.85 + 2 * padding,
      847.91 + 2 * padding,
    ].join(" ")}
    className="font-zen_kaku_gothic_new"
  >
    <path
      fill="#edeef0"
      d="M 367.81 129.14 h 0 v 27.57 h -38.28 v 43.16 h -260.78 v -70.73 h 299.06 z m -322.23 191.1 h 284.16 v 86.13 h -284.16 v -86.13 z"
    />
    <g>
      <path
        fill="#119351"
        stroke="none"
        d="M 281.48 370.86 h 24.22 v 17.435 h -24.22 v -17.435 z"
      />
      <g fill="#fff" opacity=".9">
        <circle cx="292.88" cy="374.68" r="1.17" />
        <path d="M295.96 382.93h-3.65v-5.41h1.18v4.2h3.5v.06l.53 3.69 1.62-.24-.13-.88-.73.11-.51-3.63h-3.38v-4.2h-2.98v1.78a4.083 4.083 0 0 0 1.64 7.82h.1c1.25-.03 2.34-.63 3.06-1.55l-.25-1.74Zm-3.66.01Z" />
      </g>
    </g>
    <g>
      <path
        fill="#bf0811"
        stroke="none"
        d="M281.45 388.51h24.24v17.22h-24.24z"
      />
      <g fill="#fff" opacity=".9">
        <circle cx="293.58" cy="391.51" r="1.17" />
        <path d="m292.87 394.33-2.33 6.39c-.08.24.1.49.35.49h5.35c.26 0 .44-.25.36-.49l-2.33-6.39c-.22-.68-1.18-.68-1.41 0Z" />
        <rect
          width="2.05"
          height="3.62"
          x="292.55"
          y="400.29"
          rx=".36"
          ry=".36"
        />
      </g>
    </g>
    <g>
      <path
        fill="#bf0811"
        stroke="none"
        d="M 69.81 371.75 h 23.61 v 33.98 H 69.81 z"
      />
      <g fill="#fff" opacity=".9">
        <circle cx="81.61" cy="379.59" r="1.91" />
        <path d="m80.47 384.19-3.8 10.42c-.13.39.16.8.58.8h8.73c.42 0 .71-.41.58-.8l-3.8-10.42c-.36-1.11-1.93-1.11-2.29 0z" />
        <rect
          width="3.34"
          height="5.9"
          x="79.94"
          y="393.91"
          rx=".48"
          ry=".48"
        />
      </g>
    </g>
    <g>
      <path fill="#4f8e3a" stroke="none" d="M49.83 581.42h23.35v23.74H49.83z" />
      <g fill="#fff" opacity=".9">
        <circle cx="60.75" cy="587.28" r="1.36" />
        <path d="M64.32 596.85h-4.24v-6.28h1.37v4.86h4.06v.07l.62 4.28 1.87-.28-.15-1.03-.84.13-.59-4.21H62.5v-4.86h-3.46v2.07a4.725 4.725 0 0 0-2.83 4.33c0 2.61 2.12 4.73 4.73 4.73h.11c1.45-.04 2.71-.74 3.55-1.79l-.29-2.02Zm-4.25 0h.01-.01Z" />
      </g>
    </g>
    <g>
      <path fill="#bf0811" stroke="none" d="M73.18 581.42h23.35v23.74H73.18z" />
      <g fill="#fff" opacity=".9">
        <circle cx="84.4" cy="586.49" r="1.42" />
        <path d="m83.55 589.91-2.82 7.74c-.1.29.12.59.43.59h6.49c.31 0 .53-.3.43-.6l-2.82-7.74c-.27-.82-1.44-.82-1.7 0Z" />
        <rect
          width="2.48"
          height="4.38"
          x="83.16"
          y="597.13"
          rx=".36"
          ry=".36"
        />
      </g>
    </g>
    <g>
      <path
        fill="#4a72b2"
        stroke="#221714"
        strokeWidth="1.26"
        d="M302.33 458.3h19.45v28.2h-19.45z"
      />
      <g fill="#fff" opacity=".9">
        <circle cx="312.06" cy="464.77" r="1.59" />
        <rect
          width="3.39"
          height="8.34"
          x="310.36"
          y="473.27"
          rx=".36"
          ry=".36"
        />
        <path d="M309.88 467.73h4.36c.59 0 1.07.48 1.07 1.07v6.91c0 .3-.24.54-.54.54h-5.43c-.3 0-.54-.24-.54-.54v-6.91c0-.59.48-1.07 1.07-1.07Z" />
      </g>
    </g>
    <path
      d="M164.35 137.27H80.58v42.82h83.77l4.05-14.28v-14.26l-4.05-14.28z"
      className={boxFS}
      id="music"
    />
    <path className={boxFS} d="M238.77 319.88h67.27v35.34h-67.27z" id="nurse" />
    <path
      className={boxFS}
      d="M329.54 250.57h32.01v21.91h-32.01z"
      id="broadcasting"
    />
    <path
      className={boxFS}
      d="M260.99 180.12H293v21.91h-32.01z"
      id="newgarden"
    />
    <path
      className={boxFS}
      d="M315.14 305.48v-33h14.4v33z"
      id="broadcasting_juice"
    />
    <path
      className={boxFS}
      d="M168.59 467.66h86.37v29.21h-86.37z"
      id="garden"
    />
    <text fill="#fff" fontSize="13" transform="translate(104 164)">
      <tspan x="0" y="0">
        音楽室
      </tspan>
    </text>
    <text fill="#231815" fontSize="13" transform="translate(132 290)">
      <tspan x="0" y="0">
        図書館
      </tspan>
    </text>
    <text fill="#231815" fontSize="13" transform="translate(338 538)">
      <tspan x="0" y="0">
        柔道場
      </tspan>
    </text>
    <text fill="#231815" fontSize="12" transform="translate(354 626)">
      <tspan x="0" y="0">
        共栄館
      </tspan>
    </text>
    <text fill="#fff" fontSize="13" transform="translate(173 488)">
      <tspan x="0" y="0">
        中庭ステージ
      </tspan>
    </text>
    <text fill="#231815" fontSize="12" transform="translate(254.67 664)">
      <tspan x="0" y="0">
        正門
      </tspan>
    </text>
    <text x="170.357" y="78.727" fill="#231815" fontSize="15">
      <tspan x="170.357" y="78.727">
        第一グラウンド
      </tspan>
    </text>
    <text fill="#231815" fontSize="8" transform="translate(230 554)">
      <tspan x="0" y="0">
        本館ステージへ
      </tspan>
    </text>
    <text fill="#fff" fontSize="10" transform="translate(330.5 265.27)">
      <tspan x="0" y="0">
        放送室
      </tspan>
    </text>
    <text fill="#fff" fontSize="12" transform="translate(265 195.5)">
      <tspan x="0" y="0">
        古本
      </tspan>
    </text>
    <text
      fill="#fff"
      fontSize="7"
      glyphOrientationVertical="0deg"
      transform="translate(322 275)"
      writingMode="tb"
    >
      <tspan x="0" y="0">
        ジュース
      </tspan>
    </text>
    <path
      fill="#221714"
      stroke="#221714"
      strokeWidth="1.26"
      d="M223.38 654.98h8.48v8.48h-8.48zM304.27 654.98h8.48v8.48h-8.48z"
    />
    <text fill="#231815" fontSize="12" transform="translate(270 13.27)">
      <tspan x="0" y="0">
        退場口
      </tspan>
    </text>
    <path
      fill="#221714"
      stroke="#221714"
      strokeWidth="1.26"
      d="M252.13 4.79h8.48v8.48h-8.48zM314.4 4.79h8.48v8.48h-8.48z"
    />

    <text
      fill="#231815"
      fontSize="9"
      glyphOrientationVertical="0deg"
      transform="translate(312.06 524)"
      writingMode="tb"
    >
      <tspan x="0" y="0">
        スロープ２階へ
      </tspan>
    </text>
    <path
      fill="none"
      stroke="#221714"
      className={arrow}
      d="M 312 523 v -13 c 0.3 1.5 1.5 2.4 2.5 3 m -2.5 -3 c -0.3 1.5 -1.5 2.4 -2.5 3"
    />
    <path
      fill="none"
      stroke="#221714"
      className={arrow}
      d="M262.98 549v-12c 0.3 1.5 1.5 2.4 2.5 3 m -2.5 -3 c -0.3 1.5 -1.5 2.4 -2.5 3"
    />
    <path
      fill="none"
      stroke="#221714"
      className={arrow}
      d="M262.98 553v8c 0.3 -1.5 1.5 -2.4 2.5 -3 m -2.5 3 c -0.3 -1.5 -1.5 -2.4 -2.5 -3"
    />
    <path
      className={boxFS}
      d="M321.78 598.99h27.29v45.35h-27.29z"
      id="souvenir"
    />
    <path className={boxFS} d="M230 590H276.56v25H230v-25z" id="campustour" />
    <text
      fill="#fff"
      fontSize="8"
      glyphOrientationVertical="0deg"
      transform="translate(335.5 601)"
      writingMode="tb"
    >
      <tspan x="0" y="0">
        お土産販売
      </tspan>
    </text>
    <text fill="#fff" fontSize="8" transform="translate(230 600)">
      <tspan x="3" y="1">
        キャンパス
      </tspan>
      <tspan x="11" y="9">
        ツアー
      </tspan>
    </text>
    <text fill="#fff" fontSize="13" transform="translate(253 342)">
      <tspan x="0" y="0">
        保健室
      </tspan>
    </text>
    <path
      fill="none"
      stroke="#221714"
      strokeWidth="1.26"
      d="M394.38 659.28h-90.11M315.31 9.03h79.21V129.3h-26.71"
    />
    <path className={boxFS} d="M116.9 368.93h22.82v36.7H116.9z" id="library" />
    <text
      fill="#fff"
      fontSize="6.5"
      glyphOrientationVertical="0deg"
      transform="translate(128.56 371.05)"
      writingMode="tb"
    >
      <tspan x="0" y="0">
        図書委員会
      </tspan>
    </text>
    <path
      className={box_S}
      d="M 1.4 444.13 h 48.44 v 81.29 h -48.44 z"
      id="cafe"
    />
    <text
      fill="#231815"
      fontSize="9"
      glyphOrientationVertical="0deg"
      transform="translate(56.21 457.96)"
      writingMode="tb"
    >
      <tspan x="0" y="0">
        食堂地下１階へ
      </tspan>
    </text>
    <path
      fill="none"
      stroke="#221714"
      className={arrow}
      d="M56.21 522.22v10c 0.3 -1.5 1.5 -2.4 2.5 -3 m -2.5 3 c -0.3 -1.5 -1.5 -2.4 -2.5 -3"
    />
    <path
      fill="none"
      stroke="#221714"
      className={arrow}
      d="M56.21 455v-10c 0.3 1.5 1.5 2.4 2.5 3 m -2.5 -3 c -0.3 1.5 -1.5 2.4 -2.5 3"
    />
    <path
      className={boxFS}
      d="M 62.56 444.13 h 33.97 v 71.02 h -33.97 z M 1.4 444.13 h 48.44 v 81.29 h -48.44 z"
      id="meeting"
    />
    <text
      fill="#fff"
      fontSize="13"
      glyphOrientationVertical="0deg"
      transform="translate(79.54 447)"
      writingMode="tb"
    >
      <tspan x="0" y="0">
        鉄道研究部
      </tspan>
    </text>
    <text
      fill="#fff"
      fontSize="13"
      glyphOrientationVertical="0deg"
      transform="translate(25.62 452.96)"
      writingMode="tb"
    >
      <tspan x="0" y="0">
        鉄道研究部
      </tspan>
    </text>
    <path
      className={boxFS}
      d="M256.37 241.09h38.15v28.25h-38.15z"
      id="newgarden_info"
    />
    <text fill="#fff" fontSize="7.5" transform="translate(260.5 253.4)">
      <tspan x="0" y="0">
        インフォ
      </tspan>
      <tspan x="-4" y="9">
        メーション
      </tspan>
    </text>
    <path
      className={boxFS}
      d="M192.597 39.816h58.107V61.58h-58.107zM65.5 60.12h77.23v21.64H65.5zM65.5 87.26h77.23v21.64H65.5zM45.7 113.53h33.11v21.64H45.7zM301.89 31.06h77.23V52.7h-77.23zM301.89 62.34h77.23v21.64h-77.23zM301.89 95.19h77.23v21.64h-77.23zM 77.22 22.38 h 76 a 16 16 0 0 1 0 32 h -76.02 a 16 16 0 0 1 0 -32z"
      id="ground1"
    />
    <text fill="#fff" fontSize="13" transform="translate(86 44)">
      <tspan x="0" y="0">
        ミニ電車
      </tspan>
    </text>
    <text fill="#fff" fontSize="10" transform="translate(75 75)">
      <tspan x="0" y="0">
        ヨーヨー釣り
      </tspan>
    </text>
    <text fill="#fff" fontSize="7" transform="translate(69.5 101)">
      <tspan x="0" y="0">
        スーパーボールすくい
      </tspan>
    </text>
    <text fill="#fff" fontSize="10" transform="translate(52 128)">
      <tspan x="0" y="0">
        金券
      </tspan>
    </text>
    <text fill="#fff" fontSize="9" transform="translate(306 45.89)">
      <tspan x="0" y="0">
        キックターゲット
      </tspan>
    </text>
    <text x="202.928" y="53.631" fill="#fff" fontSize="10">
      <tspan x="201" y="54">
        BE NADA
      </tspan>
    </text>
    <text fill="#fff" fontSize="12" transform="translate(329 77.74)">
      <tspan x="0" y="0">
        射的
      </tspan>
    </text>
    <text fill="#fff" fontSize="8" transform="translate(316.3 106.01)">
      <tspan x="-7" y="-1">
        ストラックアウト
      </tspan>
      <tspan x="2.05" y="8">
        スピードガン
      </tspan>
    </text>
    <path className={boxFS} d="M59.33 680.95h163.03v81.29H59.33z" id="gym" />
    <path className={boxFS} d="M59.33 762.25h163.03v50.94H59.33z" id="tennis" />
    <text fill="#fff" fontSize="13" transform="translate(120.16 727.51)">
      <tspan x="0" y="0">
        体育館
      </tspan>
    </text>
    <text fill="#fff" fontSize="13" transform="translate(103.11 792.26)">
      <tspan x="0" y="0">
        テニスコート
      </tspan>
    </text>
    <path fill="none" stroke="#221714" d="M70 705 h-44 v 21.52" />
    <circle cx="70" cy="705" r="1.5" fill="#221714" />
    <text fontSize="10" transform="translate(-5 740)">
      <tspan x="0" y="0">
        グッズ・軽食
      </tspan>
      <tspan x="4.38" y="11">
        ・休憩所
      </tspan>
    </text>
    <path
      fill="none"
      stroke="#221714"
      strokeWidth="1.26"
      d="M281.45 388.51h24.24M93.29 137.27H68.75v62.6h100.32v15.19M211.48 250.57v48.48h-9.89v20.64h6.49v35.37h-44.41v50.68h-46.8v-50.62H93.41v-45.38h4.88v-11h-4.88v-98.87M329.54 175.22l60.06.02v130.24h-17.32v111.45h-42.74V175.22zM 173.84 180.09 l 3.9 -15.7 v -12.47 l -7.64 -23.46 H 81.33M156.55 188.95v-8.86M156.55 199.87v-4.07M169.07 201.25h8.5l14.55 4.85.27.2a98.284 98.284 0 0 1 21.33 21.28s4.85 14.55 4.85 14.55v8.43h-23.32M93.41 199.87h19.71v22H93.41zM113.12 199.87h11.65v22h-11.65zM175.77 398.7v-21.2M163.67 405.74h46.52l-.01-34.88h-22.3l-.02 34.88M 93.41 267.9 l -11.99 7.22 v 44.49 h -80.02 v 94.75 h 44.81 v -8.62 h 47.2 v -34.08 h -23.55 l -0.09 34.08 m -68.37 -86.13 h 44.81 v 94.75 h -44.81 z m 44.8 0 h 35.22 v 34.96 h -35.22 z m 12.3 51.78 v 24.05 m -25.46 37.02 h 17.39 m -17.39 -11.46 h 16.8 v -2.7 h 47.14M260.99 128.04v52.07h49.53V129.3h57.29v27.41h-38.27v18.51M260.99 137.47h49.53M329.54 305.48h51.25M329.54 319.88h42.74M333.07 143.18h28.61M234.35 371.05v34.69M257.22 370.86v34.88h48.48v-34.88h-24.25v34.88M269.35 398.67v-21.16M96.53 547.45V444.13H62.62v98.36h33.91M62.62 515.15h33.91M267.58 520.68v23.48M267.58 557.22v19.75M1.4 525.43h48.44v56H1.4zM49.83 581.42h46.69v23.74H49.83zM96.53 556.16v25.26M276.56 544.16v-33.89H147.32v33.89h65.44v-33.89M147.32 557.22v26.26h129.24v-26.26M73.18 581.42V605.16M163.69 510.27h49.08v33.89h-49.08zM163.69 557.22h49.08v26.26h-49.08zM240.32 557.22h18.43v26.26h-18.43zM221.33 557.22h18.99v26.26h-18.99zM221.33 510.27h37.43v33.89h-37.43zM349.03 598.99h45.35v45.35h-45.35zM321.78 486.49h72.59v94.87h-72.59zM321.78 431.27h72.59v55.22h-72.59zM302.33 580.9v-68.34l19.45-11.51v79.85M256.37 9.03H41.47V137.3h27.28M69.69 566.32h19.77M69.69 575.86h19.77M231.86 659.28H49.83v-54.12"
    />
    <path
      fill="none"
      stroke="#221714"
      strokeWidth=".6"
      d="M 175.8 377.8 h 12.1 m -12.1 2.38 h 12.1 m -12.1 2.37 h 12.1 m -12.1 2.38 h 12.1 m -12.1 2.38 h 12.1 m -12.1 2.38 h 12.1 m -12.1 2.37 h 12.1 m -12.1 2.38 h 12.1 M 258.56 520.98 h 8.84 m -8.84 2.38 h 8.84 m -8.84 2.38 h 8.84 m -8.84 2.37 h 8.84 m -8.84 2.38 h 8.84 m -8.84 2.38 h 8.84 m -8.84 2.38 h 8.84 m 9.16 -8.33 h 25.77 m -25.77 2.38 h 25.77 m -25.77 2.38 h 25.77 m -25.77 2.38 h 25.77 m -25.77 2.37 h 25.77 M 258.74 562.41 h 8.84 m -8.84 2.37 h 8.84 m -8.84 2.38 h 8.84 m -8.84 2.38 h 8.84 m -8.84 2.38 h 8.84 m -8.84 2.37 h 8.84 m -8.84 2.38 h 8.84 M 269.35 377.89 h 12.1 m -12.1 2.38 h 12.1 m -12.1 2.37 h 12.1 m -12.1 2.38 h 12.1 m -12.1 2.38 h 12.1 m -12.1 2.38 h 12.1 m -12.1 2.37 h 12.1 m -12.1 2.38 h 12.1 M 47.04 376.12 h 11.46 m -11.46 2.38 h 11.46 m -11.46 2.38 h 11.46 m -11.46 2.37 h 11.46 m -11.46 2.38 h 11.46 m -11.46 2.38 h 11.46 m -11.46 2.38 h 11.46 m -11.46 2.37 h 11.46 m -11.46 2.38 h 11.46 M 35.87 421 v 23.04 m 2.38 -23.04 v 23.04 m 2.38 -23.04 v 23.04 m 2.37 -23.04 v 23.04 m 2.38 -23.04 v 23.04 m 2.38 -23.04 v 23.04 m 2.38 -23.04 v 23.04 M 75.09 418.3 v 25.74 m 2.37 -25.74 v 25.74 m 2.38 -25.74 v 25.74 m 2.38 -25.74 v 25.74 m 2.38 -25.74 v 25.74 M 81.53 280.01 h 11.98 m -11.98 2.38 h 11.98 m -11.98 2.38 h 11.98 m -11.98 2.38 h 11.98 m -11.98 2.37 h 11.98 m -11.98 2.38 h 11.98 m -11.98 2.38 h 11.98 m -11.98 2.38 h 11.98 m -11.98 2.37 h 11.98 M 177.74 153.24 h 83.25 m -83.25 2.38 h 83.25 m -83.25 2.37 h 83.25 m -83.25 2.38 h 83.25 m -83.25 2.38 h 83.25M 68.75 147.64 h 11.83 m -11.83 2.38 h 11.83 m -11.83 2.38 h 11.83 m -11.83 2.37 h 11.83 m -11.83 2.38 h 11.83 m -11.83 2.38 h 11.83 m -11.83 2.38 h 11.83 m -11.83 4.75 h 11.83 m -11.83 -2.38 h 11.83 m -11.83 4.76 h 11.83M 333.37 129.64 v 13.54 m 2.38 -13.54 v 13.54 m 2.38 -13.54 v 13.54 m 2.37 -13.54 v 13.54 m 2.38 -13.54 v 13.54 m 2.38 -13.54 v 13.54 m 2.38 -13.54 v 13.54 m 2.37 -13.54 v 13.54 m 2.38 -13.54 v 13.54 m 2.38 -13.54 v 13.54 m 2.29 -13.54 v 13.54M 77.27 566.41 v 9.45 m 2.38 -9.45 v 9.45 m 2.37 -9.45 v 9.45 m 2.38 -9.45 v 9.45 m 2.38 -9.45 v 9.45 m 2.38 -9.45 v 9.45"
    />
    <path
      fill="none"
      stroke="#221714"
      strokeWidth=".6"
      d="M169.07 204.84h7.88l13.49 4.5.25.19a90.897 90.897 0 0 1 19.77 19.73s4.5 13.49 4.5 13.49v7.82h-12.32M169.07 208.04h7.33l12.55 4.18.24.17a84.892 84.892 0 0 1 18.39 18.35s4.18 12.55 4.18 12.55v7.27h-11.45M169.07 211.39h6.75l11.56 3.85.22.16a77.847 77.847 0 0 1 16.94 16.91s3.85 11.56 3.85 11.56v6.7h-10.55M169.07 214.82h6.16l10.55 3.52.2.15a71.147 71.147 0 0 1 15.46 15.43s3.52 10.55 3.52 10.55v6.11h-9.63M 175.23 214.82 l 2.34 -13.57 m 8.21 17.09 l 6.34 -12.24 m 9.32 27.81 l 12.28 -6.33 m -8.77 16.88 l 13.62 -2.32"
    />
  </svg>,
  <svg
    key="2F"
    xmlns="http://www.w3.org/2000/svg"
    viewBox={[
      0 - padding,
      0 - padding,
      396.85 + 2 * padding,
      423.77 + 2 * padding,
    ].join(" ")}
    className="font-zen_kaku_gothic_new"
  >
    <text
      fill="#231815"
      fontSize="9"
      glyphOrientationVertical="0deg"
      transform="translate(274.6 286)"
      writingMode="tb"
    >
      <tspan x="0" y="0">
        スロープ１階へ
      </tspan>
    </text>
    <path
      className={boxF_}
      d="M237.55 187.46h29.78v30.64h-29.78z"
      id="m1open"
    />
    <g>
      <path fill="#004d85" stroke="none" d="M81.35 247.75h20.75v15.32H81.35z" />
      <g fill="#fff" opacity=".9">
        <circle cx="91.73" cy="250.48" r=".99" />
        <rect
          width="2.1"
          height="5.18"
          x="90.67"
          y="255.75"
          rx=".22"
          ry=".22"
        />
        <path d="M90.37 252.32h2.7c.37 0 .66.3.66.66v4.29c0 .18-.15.33-.33.33h-3.37c-.18 0-.33-.15-.33-.33v-4.29c0-.37.3-.66.66-.66Z" />
      </g>
    </g>
    <path className={boxFS} d="M288.88 60.75h52.78v114.22h-52.78z" />
    <path
      className={boxFS}
      d="M.51 187.38h39.38v30.72H.51z"
      id="studentcouncil"
    />
    <path
      className={boxFS}
      d="M.51 296.81h42.56v119.65H.51z"
      id="audiovisual"
    />
    <path className={boxFS} d="M282.06 285.51h59.6v48.53h-59.6z" id="lecture" />
    <path
      className={boxFS}
      d="M345.19 168.4h48.54v51.05h-48.54z"
      id="training"
    />
    <text fill="#fff" fontSize="13" transform="translate(284 315)">
      <tspan x="6" y="-7">
        大講義
      </tspan>
      <tspan x="2" y="7">
        ステージ
      </tspan>
    </text>
    <text fill="#231815" fontSize="10" transform="translate(287 378)">
      <tspan x="0" y="0">
        柔道場上部
      </tspan>
    </text>
    <path
      className={boxF_}
      d="M128.74 354.93h97.14v64.34h-97.14z"
      id="mainhall"
    />
    <text fill="#fff" fontSize="13" transform="translate(139 393)">
      <tspan x="0" y="0">
        本館ステージ
      </tspan>
    </text>
    <circle cx="140.25" cy="132.72" r="8.28" fill="none" stroke="#221714" />
    <path
      fill="none"
      stroke="#221714"
      d="M187.1 106.52a86.328 86.328 0 0 0-18.74-18.7l-.24-.18-12.79-4.26h-7.47v36.13c3.513 0 7.21 3.698 7.21 7.21h36.28v-7.41zm-49.76 7.49v-35H93.89v20.86h-4.94v22.89h35.19a18.91 18.91 0 0 1 13.19-8.75Zm-43.45-35v20.86m-12.52 0V79.01m77.79 54.64c-.49 10.03-8.75 18.03-18.91 18.03-3.75 0-7.24-1.1-10.18-2.98l-7.02 7.55c-7.08 7.5-16.62 12.22-26.19 12.23s-15.48 0-15.48 0v18.98h95.05v-53.81h-17.26Z"
    />
    <path
      fill="none"
      stroke="#221714"
      d="M121.46 130.39H88.95v29.95h4.68c8.72 0 17.449-3.424 23.85-10.3l6.74-7.24a18.841 18.841 0 0 1-2.92-10.08c0-.79.16-2.33.16-2.33z"
    />
    <path fill="none" stroke="#221714" d="M70.1 59.13V36.31" />
    <text
      fill="#fff"
      fontSize="13"
      glyphOrientationVertical="0deg"
      transform="translate(316 103)"
      writingMode="tb"
    >
      <tspan x="0" y="0">
        職員室
      </tspan>
    </text>
    <text
      fill="#fff"
      fontSize="13"
      glyphOrientationVertical="0deg"
      transform="translate(22 313)"
      writingMode="tb"
    >
      <tspan x="0" y="0">
        視聴覚ステージ
      </tspan>
    </text>
    <path
      fill="none"
      stroke="#221714"
      d="M288.88 187.47h36.87v21.32h-36.87zm0 21.32h36.87v21.32h-36.87z"
    />
    <path
      fill="none"
      stroke="#221714"
      d="M288.88 230.1h36.87v21.32h-36.87zm0 21.32h36.87v21.32h-36.87zm0 21.31h-6.82v12.78M176.42 169.57h3.6v-42.85"
    />
    <path
      fill="none"
      stroke="#221714"
      d="M147.86 79.01v4.36h7.47l12.79 4.26c3.937 2.952 11.482 8.664 18.98 18.89l4.25 12.792.01 7.398h-11.34v42.85h-3.6v17.9h90.91V79H147.86Z"
    />
    <path className={boxFS} d="M159.46 187.46h39.04v30.64h-39.04z" id="m1-2" />
    <path className={boxFS} d="M81.38 187.46h39.04v30.64H81.38z" id="m1-4" />
    <path className={boxFS} d="M120.42 187.46h39.04v30.64h-39.04z" id="m1-3" />
    <path className={boxFS} d="M102.1 232.43h41.01v30.64H102.1z" id="seminar" />
    <path className={boxFS} d="M.51 232.43h39.38v38.22H.51z" id="syodo" />
    <path
      className={boxFS}
      d="M184.01 232.43h41.33v30.64h-41.33z"
      id="socialstudies1"
    />
    <path className={boxFS} d="M198.51 187.46h39.04v30.64h-39.04z" id="m1-1" />
    <path fill="#717171" stroke="#221714" d="M120.42 187.46v30.64" />
    <text fill="#fff" fontSize="12" transform="translate(1 256)">
      <tspan x="7" y="-7">
        書道
      </tspan>
      <tspan x="1" y="7">
        同好会
      </tspan>
    </text>
    <text fill="#fff" fontSize="8" transform="translate(4 206)">
      <tspan x="0" y="0">
        生徒会室
      </tspan>
    </text>
    <text fill="#fff" fontSize="10" transform="translate(203 207)">
      <tspan x="0" y="0">
        囲碁部
      </tspan>
    </text>
    <text fill="#fff" fontSize="6.8" transform="translate(183.7 247)">
      <tspan x="0" y="0">
        ビューイング
      </tspan>
      <tspan x="12" y="8.41">
        ルーム
      </tspan>
    </text>
    <text fill="#fff" fontSize="12" transform="translate(104.5 252)">
      <tspan x="5" y="-7">
        文藝
      </tspan>
      <tspan x="0" y="7">
        同好会
      </tspan>
    </text>
    <text fill="#fff" fontSize="5.8" transform="translate(240.5 202)">
      <tspan x="0" y="0">
        インフォ
      </tspan>
      <tspan x="-2.63" y="6.31">
        メーション
      </tspan>
    </text>
    <path
      fill="none"
      stroke="#221714"
      className={arrow}
      d="M274.5 351.9v10c 0.3 -1.5 1.5 -2.4 2.5 -3 m -2.5 3 c -0.3 -1.5 -1.5 -2.4 -2.5 -3"
    />
    <path fill="#717171" stroke="#221714" d="M81.35 263.07h-5.9" />
    <path
      fill="none"
      stroke="#221714"
      d="M44.77 263.07h20.16m-44.22 33.74v-10.26h24.75v-12.84h-3.13v-10.5m11.98 33.6h29.8V396h-29.8z"
    />
    <path
      fill="#e50020"
      stroke="#231815"
      strokeWidth="1.01"
      d="M80.5 27.15h16.06v18.81H80.5z"
    />
    <path
      className={boxF_}
      d="M 184.36 27.15 h -43.9 v 37.63 h 43.9 v -37.63 z"
      id="h3-3"
    />
    <path
      className={boxF_}
      d="M 140.46 27.15 h -43.9 v 37.63 h 43.9 v -37.63 z"
      id="h3-4"
    />
    <path className={box_S} d="M140.46 27.15h-43.9v37.63h87.8V27.15h-43.9z" />
    <path className={boxFS} d="M184.36 27.15h43.9v37.63h-43.9z" id="h3-2" />
    <path className={boxFS} d="M228.26 27.15h43.9v37.63h-43.9z" id="h3-1" />
    <path fill="none" stroke="#221714" d="M55.36 218.1H39.89v-30.72h15.47" />
    <path
      className={boxF_}
      d="M55.36 187.38h15.47v30.72H55.36z"
      id="kingcrab"
    />
    <path fill="none" stroke="#221714" d="M55.36 188.88v-1.5h1.5" />
    <path
      fill="none"
      stroke="#221714"
      strokeDasharray="0 0 4 4"
      d="M59.36 187.38h8.73"
    />
    <path fill="none" stroke="#221714" d="M69.34 187.38h1.5v1.5" />
    <path
      fill="none"
      stroke="#221714"
      strokeDasharray="0 0 4 4"
      d="M70.84 191.96v23.1"
    />
    <path fill="none" stroke="#221714" d="M70.84 216.6v1.5h-1.5" />
    <path
      fill="none"
      stroke="#221714"
      strokeDasharray="0 0 4 4"
      d="M66.84 218.1h-8.73"
    />
    <path fill="none" stroke="#221714" d="M56.86 218.1h-1.5v-1.5" />
    <path
      fill="none"
      stroke="#221714"
      strokeDasharray="0 0 4 4"
      d="M55.36 213.52v-23.1"
    />
    <text
      fill="#fff"
      fontSize="6"
      glyphOrientationVertical="0deg"
      transform="translate(63 188)"
      writingMode="tb"
    >
      <tspan x="0" y="0">
        タラバガニ
      </tspan>
    </text>
    <g fill="#fff" opacity=".9">
      <circle cx="88.53" cy="31.06" r="1.14" />
      <path d="m87.84 33.83-2.28 6.26c-.08.24.1.48.35.48h5.24c.25 0 .43-.24.35-.48l-2.28-6.25c-.22-.67-1.16-.67-1.38 0Z" />
      <rect width="2.01" height="3.54" x="87.53" y="39.66" rx=".29" ry=".29" />
    </g>
    <path fill="none" stroke="#221714" d="M140.46 28.48v1.5" />
    <path
      fill="none"
      stroke="#221714"
      strokeDasharray="0 0 4 4"
      d="M140.46 33.01v28.76"
    />
    <path fill="none" stroke="#221714" d="M140.46 63.29v1.49" />
    <text fill="#fff" fontSize="13" transform="translate(108 51)">
      <tspan x="0" y="0">
        レゴ同好会
      </tspan>
    </text>
    <text fill="#fff" fontSize="10" transform="translate(231 49.3)">
      <tspan x="0" y="0">
        講義教室
      </tspan>
    </text>
    <text fill="#fff" fontSize="10" transform="translate(187 44)">
      <tspan x="0" y="0">
        パソコン
      </tspan>
      <tspan x="3.87" y="12">
        研究部
      </tspan>
    </text>
    <path
      fill="none"
      stroke="#221714"
      d="M44.77 263.07h-4.88m5.57 10.64v-2.33m8.85 2.33v-2.33"
    />
    <text fill="#231815" fontSize="9" transform="translate(365 229)">
      <tspan x="0" y="0">
        退場口
      </tspan>
    </text>
    <path
      fill="none"
      stroke="#221714"
      strokeWidth=".5"
      d="M58.78 273.85v-10.64m2.09 10.64v-10.64m2.09 10.64v-10.64"
    />
    <path
      fill="none"
      stroke="#221714"
      d="M55.36 187.38v30.72m26.01-77.58v19.82H70.84v27.04H.51v45.05"
    />
    <text fill="#fff" fontSize="10" transform="translate(355 182)">
      <tspan x="0" y="0">
        研修館
      </tspan>
    </text>
    <text fill="#fff" fontSize="6" transform="translate(347 193)">
      <tspan x="0" y="0">
        ３階 少林寺拳法
      </tspan>
      <tspan x="0" y="9.68">
        ２階 古典文化
      </tspan>
      <tspan x="0" y="19.37">
        １階 卓球部
      </tspan>
    </text>
    <text fill="#fff" fontSize="6.3" transform="translate(165.8 201)">
      <tspan x="0" y="0">
        ワンダー
      </tspan>
      <tspan x="-5.95" y="7.93">
        フォーゲル部
      </tspan>
    </text>
    <text fill="#fff" fontSize="8" transform="translate(127 201)">
      <tspan x="1" y="0">
        オセロ
      </tspan>
      <tspan x="-3" y="9">
        サークル
      </tspan>
    </text>
    <path
      fill="none"
      stroke="#221714"
      strokeDasharray="0 0 4 4"
      strokeWidth="1.1"
      d="M 100.22 187.46 v 30.64"
    />
    <g>
      <path
        fill="#4f8e3a"
        stroke="#231815"
        strokeWidth=".99"
        d="M81.35 232.43h20.75v15.32H81.35z"
      />
      <circle cx="90.96" cy="235.76" r=".98" fill="#fff" opacity=".9" />
      <path
        fill="#fff"
        d="M 93.53 242.65 h -3.05 v -4.52 h 0.99 v 3.51 h 2.93 v 0.05 l 0.44 3.08 l 1.35 -0.2 l -0.11 -0.74 l -0.61 0.09 l -0.43 -3.04 h -2.82 v -3.51 h -2.49 v 1.49 a 3.41 3.41 0 0 0 -2.04 3.12 c 0 1.88 1.53 3.41 3.41 3.41 h 0.08 c 1.04 -0.03 1.96 -0.53 2.56 -1.29 l -0.21 -1.45 z"
        opacity=".9"
      />
    </g>
    <g>
      <path
        fill="#4f8e3a"
        stroke="#231815"
        strokeWidth="1.01"
        d="M80.5 45.97h16.06v18.81H80.5z"
      />
      <g opacity=".9">
        <circle cx="88.45" cy="51.04" r=".98" fill="#fff" />
        <path
          fill="#fff"
          d="M 91.02 57.94 h -3.05 v -4.52 h 0.99 v 3.51 h 2.93 v 0.05 l 0.44 3.08 l 1.35 -0.2 l -0.11 -0.74 l -0.61 0.09 l -0.43 -3.04 h -2.82 v -3.51 h -2.49 v 1.49 a 3.41 3.41 0 0 0 -2.04 3.12 c 0 1.88 1.53 3.41 3.41 3.41 h 0.08 c 1.04 -0.03 1.96 -0.53 2.56 -1.29 l -0.21 -1.45 z"
        />
      </g>
    </g>
    <text
      fill="#fff"
      fontSize="5.8"
      glyphOrientationVertical="0deg"
      transform="translate(110 188)"
      writingMode="tb"
    >
      <tspan x="0" y="0">
        生徒会の間
      </tspan>
    </text>
    <text
      fill="#fff"
      fontSize="7"
      glyphOrientationVertical="0deg"
      transform="translate(90.6 189)"
      writingMode="tb"
    >
      <tspan x="0" y="0">
        東北企画
      </tspan>
    </text>

    <path
      fill="none"
      stroke="#221714"
      strokeDasharray="0 0 4 4"
      d="M 267.33 187.46 v 30.64 h -29.78"
    />
    <path
      fill="none"
      stroke="#221714"
      strokeWidth=".5"
      d="M 59.7 36.31 h 20.8 m -20.8 2.09 h 20.8 m -20.8 2.09 h 20.8 m -20.8 2.09 h 20.8 m -20.8 2.09 h 20.8 m -20.8 2.09 h 20.8 m -20.8 2.09 h 20.8 m -20.8 2.09 h 20.8 m -20.8 2.09 h 20.8 m -20.8 2.09 h 20.8M 234.31 362.99 h 7.77 m -7.77 2.09 h 7.77 m -7.77 2.09 h 7.77 m -7.77 2.09 h 7.77 m -7.77 2.08 h 7.77 m -7.77 2.09 h 7.77 m -7.77 2.09 h 7.77 M 234.46 399.39 h 7.78 m -7.78 2.09 h 7.78 m -7.78 2.09 h 7.78 m -7.78 2.09 h 7.78 m -7.78 2.09 h 7.78 m -7.78 2.09 h 7.78 m -7.78 2.09 h 7.78M 143.11 238.52 h 21.28 m -21.28 2.09 h 21.28 m -21.28 2.09 h 21.28 m -21.28 2.09 h 21.28 m -21.28 2.09 h 21.28 m -21.28 2.09 h 21.28 m -21.28 2.09 h 21.28 m -21.28 2.09 h 21.28M236 238.52h10.64M236 240.61h10.64M236 242.7h10.64M236 244.79h10.64M236 246.88h10.64M236 248.97h10.64M236 251.06h10.64m-21.29-12.54h10.63m-10.63 2.09h10.63m-10.63 2.09h10.63m-10.63 2.09h10.63m-10.63 2.09h10.63m-10.63 2.09h10.63m-10.63 2.09h10.63m.02 2.09h10.64m-21.29 0h10.63M 39.89 237.04 h 20.14 m -20.14 2.09 h 20.14 m -20.14 2.09 h 20.14 m -20.14 2.08 h 20.14 m -20.14 2.09 h 20.14 m -20.14 2.09 h 20.14 m -20.14 2.09 h 20.14 m -20.14 2.09 h 20.14 m -20.14 2.09 h 20.14 M 28.32 286.66 v 10.07 m 2.08 -10.07 v 10.07 m 2.09 -10.07 v 10.07 m 2.09 -10.07 v 10.07 m 2.09 -10.07 v 10.07 m 2.09 -10.07 v 10.07 m 2.09 -10.07 v 10.07 m 2.09 -10.07 v 10.07M71.37 396.13v8.3m4.17-8.3v8.3m2.09-8.3v8.3m-8.35-8.3v8.3m-2.09-8.3v8.3m6.26-8.3v8.3m-8.35-8.3v8.3M70.65 151.23h10.53m-10.53-2.09h10.53m-10.53-2.09h10.53m-10.53-2.09h10.53m-10.53-2.09h10.53m-10.53-2.09h10.53M298.51 32.34v-11.9m-4.18 11.9v-11.9m-2.09 11.9v-11.9m8.36 11.9v-11.9m2.09 11.9v-11.9m-6.27 11.9v-11.9m8.36 11.9v-11.9m2.09 11.9v-11.9m2.09 11.9v-11.9m2.08 11.9v-11.9m2.02 11.9v-11.9m-14.55 23.8v-11.9m-4.18 11.9v-11.9m-2.09 11.9v-11.9m8.36 11.9v-11.9m2.09 11.9v-11.9m-6.27 11.9v-11.9m8.36 11.9v-11.9m2.09 11.9v-11.9m2.09 11.9v-11.9m2.08 11.9v-11.9m2.02 11.9v-11.9"
    />
    <path
      fill="none"
      stroke="#221714"
      strokeWidth="1.26"
      d="M 4.12 221 l 9.09 9.09 m 0 -9.09 l -9.09 9.09 m 230.19 166.35 v 18.49 m 0 -54.95 v 17.95 m -142.37 -298.92 h 55.92 v 4.36 m -66.59 -56.22 h -21.57 v 51.86 h 23.85 m -2.18 0 v 55.31 h -10.53 v 19.18 m 82.91 102.9 v -18.14 m -10.19 24.81 h 40.45 v -30.64 h -19.63 l -0.01 30.64 m 60.98 0 h 41.98 v -30.64 h -20.69 l -0.01 30.64 m -10.65 -6.67 v -18.14 m -186.02 -1.44 v 20.22 m 10.07 -24.16 v 30.33 m 0.49 141.22 h 17.38 m 194.26 -339.63 v -44.66 h 50.34 v 24.09 h -33.62 v 130.74 m 45.03 0 h -45.03 m 35.88 0 h 20.43 v 44.47 h 51.66 m -72.09 -31.97 h 7.05 v 44.02 h 65.04 m -104.87 -199.15 h 25.14 m -262.81 335.77 h 29.8 m 0 24.13 v 24.22 h -41.03 m 238.98 -82.42 h 59.6 v 83.37 h -59.6 z m 0 35.98 l -17.8 10.53 v -85.45 h 2.83 v -21.39 h -212.78 v 23.1M 128.74 354.93 h 113.58 v 64.34 h -113.58 v -64.34 z m 97.14 0 v 25.85 m 0 12.65 v 25.84"
    />
    <path
      fill="none"
      stroke="#221714"
      strokeWidth=".5"
      d="M147.86 86.53h6.92l11.86 3.95c6.593 4.795 14.963 13.868 17.621 17.5l3.919 11.86v6.87M147.86 89.34h6.44l11.03 3.68c5.408 3.863 13.523 12.394 16.365 16.28l3.685 11.03v6.39M147.86 92.28h5.93l10.16 3.39c6.293 4.637 13.175 12.399 15.082 15l3.388 10.16v5.89M147.86 95.3h5.41l9.27 3.09c4.971 3.59 11.572 10.715 13.75 13.69l3.1 9.27v5.37M147.86 98.38h4.88l8.36 2.79c6.296 4.722 11.626 11.28 12.41 12.35l2.79 8.36v4.84M147.86 103.8h3.95l6.76 2.25c2.751 1.905 8.027 7.236 10.04 9.98l2.25 6.76v3.92M147.86 106.9h3.41l5.85 1.95c3.29 2.392 7.388 6.87 8.68 8.63l1.95 5.85v3.39M147.86 109.9h2.9l4.96 1.65c4.628 3.6 7.355 7.323 7.36 7.33l1.65 4.96v2.88M147.86 112.94h2.37l4.07 1.36c3.127 2.345 5.711 5.56 6.04 6.01l1.36 4.46v1.97M147.86 116.05h1.84l3.15 1.05c1.097.732 3.651 3.25 4.67 4.64l1.05 3.15v1.82M 152.74 98.38 l 2.59 -15.01 m 5.77 17.8 l 7.02 -13.53 m 5.39 25.87 l 13.59 -6.99 m -10.8 15.35 l 15.06 -2.56"
    />
  </svg>,
  <svg
    key="3F"
    xmlns="http://www.w3.org/2000/svg"
    viewBox={[
      0 - padding,
      0 - padding,
      396.85 + 2 * padding,
      388.94 + 2 * padding,
    ].join(" ")}
    className="font-zen_kaku_gothic_new"
  >
    <path
      fill="none"
      stroke="#000"
      strokeDasharray="0 0 4 4"
      strokeWidth="1.08"
      d="M323.91 344.67h66.6"
    />
    <path
      className={boxFS}
      d="M326.09 179.8v73.87h47.9V179.8h-47.9z"
      id="socialstudies2"
    />
    <path
      fill="#e50020"
      stroke="#231815"
      strokeWidth=".97"
      d="M271.2 258.13h26.89v19.91H271.2z"
    />
    <path fill="#717171" d="M259.39 179.8h38.69v39.81h-38.69z" id="m2open" />
    <path
      fill="none"
      stroke="#221714"
      strokeWidth="1.37"
      d="M259.39 181.85v-2.05h2.05"
    />
    <path
      fill="none"
      stroke="#221714"
      strokeDasharray="0 0 4 4"
      strokeWidth="1.37"
      d="M265.28 179.8h28.83"
    />
    <path
      fill="none"
      stroke="#221714"
      strokeWidth="1.37"
      d="M296.04 179.8h2.05v2.05"
    />
    <path
      fill="none"
      stroke="#221714"
      strokeDasharray="0 0 4 4"
      strokeWidth="1.37"
      d="M298.09 185.82v29.76"
    />
    <path
      fill="none"
      stroke="#221714"
      strokeWidth="1.37"
      d="M298.09 217.56v2.05h-2.05"
    />
    <path
      fill="none"
      stroke="#221714"
      strokeDasharray="0 0 4 4"
      strokeWidth="1.37"
      d="M292.19 219.61h-28.83"
    />
    <path
      fill="none"
      stroke="#221714"
      strokeWidth="1.37"
      d="M261.44 219.61h-2.05v-2.05"
    />
    <path
      fill="none"
      stroke="#221714"
      strokeDasharray="0 0 4 4"
      strokeWidth="1.37"
      d="M259.39 213.59v-29.75"
    />
    <path
      fill="none"
      stroke="#221714"
      strokeWidth=".68"
      d="M34.77 38.26h10.78m-10.78-5.43h10.78m-10.78-2.71h10.78M34.77 27.4h10.78m-10.78-2.71h10.78M34.77 40.98h10.78m-10.78 2.71h10.78m-10.78-8.14h10.78m0 2.71h10.79m-10.79-5.43h10.79m-10.79-2.71h10.79M45.55 27.4h10.79m-10.79-2.71h10.79M45.55 40.98h10.79m-10.79 2.71h10.79m-21.57 2.72h10.78m-10.78 2.71h10.78m0-2.71h10.79m-10.79 2.71h10.79M45.55 35.55h10.79"
    />
    <path
      fill="none"
      stroke="#221714"
      strokeWidth="1.37"
      d="M56.41 238.22h26.97v39.82H56.41zm-27.7 0h27.7v39.82h-27.7zM56.3 12.8H34.77v67.38h108.07"
    />
    <path
      className={boxFS}
      d="M326.09 56.45h68.59v107.11h-68.59z"
      id="chemistry"
    />
    <path
      fill="none"
      stroke="#221714"
      strokeWidth="1.37"
      d="M150.49 269.37V245.8m-13.24 32.25h52.57v-39.83h-25.51l-.02 39.83m79.24 0h54.56v-39.83H271.2l-.02 39.83"
    />
    <path
      fill="none"
      stroke="#221714"
      strokeWidth=".68"
      d="M150.52 246.14h13.82m-13.82 2.72h13.82m-13.82 2.71h13.82m-13.82 2.72h13.82M150.52 257h13.82m-13.82 2.72h13.82m-13.82 2.71h13.82m-13.82 2.72h13.82"
    />
    <path
      fill="none"
      stroke="#221714"
      strokeWidth="1.37"
      d="M257.35 269.37V245.8"
    />
    <path
      fill="none"
      stroke="#221714"
      strokeWidth=".68"
      d="M257.38 246.14h13.82m-13.82 2.72h13.82m-13.82 2.71h13.82m-13.82 2.72h13.82M257.38 257h13.82m-13.82 2.72h13.82m-13.82 2.71h13.82m-27.67-16.29h13.82m-13.82 2.72h13.82m-13.82 2.71h13.82m-13.82 2.72h13.82M243.53 257h13.82m-13.82 2.72h13.82m-13.82 2.71h13.82m.03 2.72h13.82m-27.67 0h13.82"
    />
    <path
      fill="none"
      stroke="#221714"
      strokeWidth="1.37"
      d="M15.63 243.94v26.27"
    />
    <path
      fill="none"
      stroke="#221714"
      strokeWidth=".68"
      d="M2.54 249.64h13.09m-13.09-5.42h13.09m-13.09 8.14h13.09m-13.09 2.71h13.09m-13.09-8.14h13.09M2.54 257.79h13.09M2.54 260.5h13.09m-13.09 2.72h13.09m-13.09 2.71h13.09"
    />
    <path
      fill="none"
      stroke="#221714"
      strokeWidth="1.37"
      d="M28.71 238.81v39.41"
    />
    <path
      fill="none"
      stroke="#221714"
      strokeWidth=".68"
      d="M15.63 249.64h13.08m-13.08-5.42h13.08m-13.08 8.14h13.08m-13.08 2.71h13.08m-13.08-8.14h13.08m-13.08 10.86h13.08m-13.08 2.71h13.08m-13.08 2.72h13.08m-13.08 2.71h13.08M338.6 19.54V4.07m-5.43 15.47V4.07m-2.71 15.47V4.07m10.86 15.47V4.07m2.71 15.47V4.07m-8.14 15.47V4.07m10.86 15.47V4.07m2.71 15.47V4.07m2.72 15.47V4.07m2.71 15.47V4.07m2.62 15.47V4.07M338.6 35V19.54M333.17 35V19.54M330.46 35V19.54M341.32 35V19.54M344.03 35V19.54M335.89 35V19.54M346.75 35V19.54M349.46 35V19.54M352.18 35V19.54M354.89 35V19.54M357.51 35V19.54"
    />
    <path
      fill="none"
      stroke="#221714"
      strokeWidth="1.37"
      d="M304.37 61.71V3.69h65.41v31.3h-43.69v128.57m58.52 0h-58.52m0 16.24v-16.24m4.03-144.02h32.66"
    />
    <path
      className={boxFS}
      d="M317.71 296.57h76.5v35.445h-76.5z"
      id="biology"
    />
    <path fill="#717171" d="M317.71 332.015h76.5v35.445h-76.5z" id="kendo" />
    <path
      fill="none"
      stroke="#221714"
      strokeWidth="1.37"
      d="M394.68 163.47V56.39l-68.59.06-.02-21.57 43.72.07V3.63h-65.42v9.1H34.77v67.39h263.32v99.6H2.54v98.42h295.55l.04 81.79h.04v26.38h19.36v-18.99h76.68v-71.34h-76.68v-5.47h56l.47-110.79h-47.91v-16.25z"
    />
    <text fill="#fff" fontSize="13" transform="translate(324 319.64)">
      <tspan x="0" y="0">
        生物研究部
      </tspan>
    </text>
    <path
      fill="none"
      stroke="#221714"
      strokeWidth="1.37"
      d="M129.16 80.18H72.71m-16.27 0h16.27m-16.27 99.61h123.51M45.55 54.34V24.69"
    />
    <text
      fill="#fff"
      fontSize="13"
      glyphOrientationVertical="0deg"
      transform="translate(360 80)"
      writingMode="tb"
    >
      <tspan x="0" y="0">
        化学研究部
      </tspan>
    </text>
    <path
      fill="none"
      stroke="#221714"
      strokeWidth="1.37"
      d="M326.09 290.6h-8.56v76.72M179.95 179.8h118.14V80.18H142.84"
    />
    <path
      className={boxFS}
      d="M81.81 179.79H56.44v39.82h50.74v-39.82H81.81z"
      id="m2-4"
    />
    <path
      className={boxFS}
      d="M132.69 179.79h-25.37v39.82h50.74v-39.82h-25.37z"
      id="m2-3"
    />
    <path className={boxFS} d="M157.92 179.79h50.74v39.82h-50.74z" id="m2-2" />
    <path className={boxFS} d="M2.54 179.79h53.9v39.82H2.54z" id="english2" />
    <path
      fill="none"
      stroke="#221714"
      strokeWidth="1.37"
      d="M83.37 238.22h53.3v39.82h-53.3z"
    />
    <path
      className={boxFS}
      d="M189.82 238.22h53.71v39.82h-53.71z"
      id="english1"
    />
    <path className={boxFS} d="M208.65 179.79h50.74v39.82h-50.74z" id="m2-1" />
    <path
      fill="none"
      stroke="#221714"
      strokeWidth="1.37"
      d="M373.99 216.74h-2.05"
    />
    <path
      fill="none"
      stroke="#221714"
      strokeDasharray="0 0 4 4"
      strokeWidth="1.37"
      d="M367.96 216.74h-37.83"
    />
    <path
      fill="none"
      stroke="#221714"
      strokeWidth="1.37"
      d="M328.14 216.74h-2.05"
    />
    <text fill="#fff" fontSize="10" transform="translate(113 204)">
      <tspan x="0" y="0">
        占いの館
      </tspan>
    </text>
    <text fill="#fff" fontSize="10" transform="translate(158.5 200)">
      <tspan x="0" y="-1">
        野球ファン
      </tspan>
      <tspan x="4.1" y="9">
        サークル
      </tspan>
    </text>
    <text fill="#fff" fontSize="10" transform="translate(330.5 197)">
      <tspan x="0" y="0">
        地理歴史
      </tspan>
      <tspan x="4.1" y="10.93">
        研究部
      </tspan>
    </text>
    <text fill="#fff" fontSize="10" transform="translate(192 262)">
      <tspan x="0" y="0">
        美術同好会
      </tspan>
    </text>
    <text fill="#fff" fontSize="8.5" transform="translate(262 199)">
      <tspan x="0" y="0">
        スライム
      </tspan>
      <tspan x="0" y="8.2">
        サークル
      </tspan>
    </text>
    <path
      fill="none"
      stroke="#221714"
      strokeWidth="1.37"
      d="m56.42 278.04-53.88.1v-58.53"
    />
    <path
      fill="#004d85"
      stroke="#231815"
      strokeWidth="1.37"
      d="M55.31 12.8h20.87v48.9H55.31z"
    />
    <path className={boxFS} d="M76.18 12.8h57.05v48.9H76.18z" id="h2-4" />
    <path
      className={boxFS}
      d="m190.2 61.66-56.98.03V12.8l56.98-.03z"
      id="h2-3"
    />
    <path className={boxFS} d="M247.25 61.66H190.2V12.77h57.05z" id="h2-2" />
    <path
      className={boxFS}
      d="m247.25 61.66 57.12.03V12.8l-57.12-.03z"
      id="h2-1"
    />
    <path
      fill="none"
      stroke="#221714"
      strokeWidth="1.37"
      d="M218.79 12.8v2.04"
    />
    <path
      fill="none"
      stroke="#221714"
      strokeDasharray="0 0 4 4"
      strokeWidth="1.37"
      d="M218.79 18.92v38.69"
    />
    <path
      fill="none"
      stroke="#221714"
      strokeWidth="1.37"
      d="M218.79 59.64v2.05"
    />
    <path
      fill="#717171"
      stroke="#221714"
      strokeWidth="1.37"
      d="M247.25 12.8v48.89M190.2 12.77v48.9"
    />
    <text fill="#fff" fontSize="13" transform="translate(77.5 41.44)">
      <tspan x="13" y="-7">
        写真
      </tspan>
      <tspan x="7" y="7">
        同好会
      </tspan>
    </text>
    <g fill="#fff" opacity=".9">
      <circle cx="65.74" cy="28.97" r="1.81" />
      <rect width="3.87" height="9.53" x="63.81" y="38.68" rx=".38" ry=".38" />
      <path d="M63.17 32.35h5.14c.63 0 1.14.51 1.14 1.14v8.02c0 .31-.26.57-.57.57H62.6c-.31 0-.57-.26-.57-.57v-8.02c0-.63.51-1.14 1.14-1.14Z" />
    </g>
    <path
      className={boxFS}
      d="M326.09 253.67H374v36.93h-47.91z"
      id="biologysub"
    />
    <text fill="#fff" fontSize="9" transform="translate(327.4 275)">
      <tspan x="0" y="0">
        生物研究部
      </tspan>
    </text>
    <path
      fill="none"
      stroke="#221714"
      strokeWidth="1.37"
      d="m301.96 369.54 11.62 11.62m0-11.62-11.62 11.62"
    />
    <g fill="#fff" opacity=".9">
      <circle cx="284.64" cy="261.88" r="1.29" />
      <path d="m283.87 265-2.58 7.07c-.09.27.11.54.39.54h5.92c.28 0 .48-.28.4-.54l-2.58-7.06c-.25-.75-1.31-.75-1.56 0Z" />
      <rect width="2.27" height="4" x="283.51" y="271.59" rx=".3" ry=".3" />
    </g>
    <text
      fill="#fff"
      fontSize="10"
      glyphOrientationVertical="0deg"
      transform="translate(237.08 18)"
      writingMode="tb"
    >
      <tspan x="0" y="0">
        ポケモン
      </tspan>
      <tspan x="-8.63" y="0">
        サークル
      </tspan>
    </text>
    <text
      fill="#fff"
      fontSize="8"
      glyphOrientationVertical="0deg"
      transform="translate(211 13.5)"
      writingMode="tb"
    >
      <tspan x="0" y="0">
        文化祭からの
      </tspan>
      <tspan x="-12" y="14.5">
        脱出
      </tspan>
    </text>
    <text fill="#fff" fontSize="8" transform="translate(336.48 225)">
      <tspan x="-2" y="0">
        社会科学
      </tspan>
      <tspan x="-6" y="8">
        研究同好会
      </tspan>
    </text>
    <text fill="#fff" fontSize="8" transform="translate(334 243.5)">
      <tspan x="0" y="0">
        都市開発
      </tspan>
      <tspan x="0" y="8">
        サークル
      </tspan>
    </text>
    <text fill="#fff" fontSize="12" transform="translate(57 198)">
      <tspan x="0" y="0">
        マジカル
      </tspan>
      <tspan x="5.5" y="11">
        同好会
      </tspan>
    </text>
    <text fill="#fff" fontSize="13" transform="translate(18 205)">
      <tspan x="0" y="0">
        ESS
      </tspan>
    </text>
    <text fill="#fff" fontSize="13" transform="translate(257 42.39)">
      <tspan x="0" y="0">
        将棋部
      </tspan>
    </text>
    <text fill="#fff" fontSize="13" transform="translate(336 355)">
      <tspan x="0" y="0">
        剣道部
      </tspan>
    </text>
    <path
      fill="none"
      stroke="#221714"
      strokeWidth="1.37"
      d="M373.99 235.2h-2.05"
    />
    <path
      fill="none"
      stroke="#221714"
      strokeDasharray="0 0 4 4"
      strokeWidth="1.37"
      d="M367.96 235.2h-37.83"
    />
    <path
      fill="none"
      stroke="#221714"
      strokeWidth="1.37"
      d="M328.14 235.2h-2.05"
    />
    <path
      fill="none"
      stroke="#221714"
      strokeWidth="1.39"
      d="M224.92 179.39v2.09"
    />
    <path
      fill="none"
      stroke="#221714"
      strokeDasharray="0 0 4 4"
      strokeWidth="1.39"
      d="M224.92 185.53v30.35"
    />
    <path
      fill="none"
      stroke="#221714"
      strokeWidth="1.39"
      d="M224.92 217.9v2.09"
    />
    <path
      fill="none"
      stroke="#221714"
      strokeWidth="1.37"
      d="M171.67 12.8v2.04"
    />
    <path
      fill="none"
      stroke="#221714"
      strokeDasharray="0 0 4 4"
      strokeWidth="1.37"
      d="M171.67 18.92v38.69"
    />
    <path
      fill="none"
      stroke="#221714"
      strokeWidth="1.37"
      d="M171.67 59.64v2.05m-19.22-49.07v2.05"
    />
    <path
      fill="none"
      stroke="#221714"
      strokeDasharray="0 0 4 4"
      strokeWidth="1.37"
      d="M152.45 18.74v38.69"
    />
    <path
      fill="none"
      stroke="#221714"
      strokeWidth="1.37"
      d="M152.45 59.47v2.05"
    />
    <text
      fill="#fff"
      fontSize="10"
      glyphOrientationVertical="0deg"
      transform="translate(181 17)"
      writingMode="tb"
    >
      <tspan x="0" y="0">
        にこやか
      </tspan>
    </text>
    <text
      fill="#fff"
      fontSize="10"
      glyphOrientationVertical="0deg"
      transform="translate(162.4 32)"
      writingMode="tb"
    >
      <tspan x="0" y="0">
        車
      </tspan>
    </text>
    <text
      fill="#fff"
      fontSize="10"
      glyphOrientationVertical="0deg"
      transform="translate(142.84 23)"
      writingMode="tb"
    >
      <tspan x="0" y="0">
        折り紙
      </tspan>
    </text>
    <path
      fill="#fff"
      stroke="#211915"
      strokeWidth="1.42"
      d="M394.21 332.01h-76.68 76.68"
    />
    <path
      fill="#4f8e3a"
      stroke="#231815"
      strokeWidth="1.34"
      d="M271.2 238.22h26.89v19.91H271.2z"
    />
    <circle cx="284.03" cy="242.1" r="1.37" fill="#fff" opacity=".9" />
    <path
      fill="#fff"
      d="M287.63 251.77h-4.29v-6.35h1.39v4.92h4.11v.08l.62 4.33 1.9-.29-.16-1.04-.85.13-.6-4.26h-3.96v-4.92h-3.5v2.09a4.79 4.79 0 0 0-2.87 4.38c0 2.64 2.15 4.79 4.79 4.79h.11c1.46-.04 2.75-.74 3.59-1.81l-.29-2.04Zm-4.29.01h.01-.01Z"
      opacity=".9"
    />
    <text
      fill="#fff"
      fontSize="10"
      glyphOrientationVertical="0deg"
      transform="translate(217 185)"
      writingMode="tb"
    >
      <tspan x="0" y="0">
        パズル
      </tspan>
    </text>
    <text
      fill="#fff"
      fontSize="7"
      glyphOrientationVertical="0deg"
      transform="translate(246 182)"
      writingMode="tb"
    >
      <tspan x="0" y="0">
        ドラえもん
      </tspan>
      <tspan x="-8.63" y="7.19">
        同好会
      </tspan>
    </text>
  </svg>,
  <svg
    key="4F"
    xmlns="http://www.w3.org/2000/svg"
    viewBox={[
      0 - padding,
      0 - padding,
      396.85 + 2 * padding,
      283.34 + 2 * padding,
    ].join(" ")}
    className="font-zen_kaku_gothic_new"
  >
    <path
      d="M 5.72038,180.75137 55.396065,180.94 55.460079,219.75367 5.72,219.85 Z"
      id="m3-4"
      className={boxF_}
    />
    <path
      d="m 55.460459,180.75137 49.647351,0.18863 0.064,38.81367 -49.7117,0.0963 z"
      id="m3-3"
      className={boxF_}
    />
    <rect
      x="204.41"
      y="180.83"
      width="41.13"
      height="39.02"
      className={boxF_}
      id="m3open"
    />
    <polyline
      points="204.41 182.84 204.41 180.83 206.42 180.83"
      fill="none"
      stroke="#221714"
      strokeWidth="1.34px"
    />
    <line
      x1="210.54"
      y1="180.83"
      x2="241.47"
      y2="180.83"
      fill="none"
      stroke="#221714"
      strokeWidth="1.34px"
      strokeDasharray="0 0 4 4"
    />
    <polyline
      points="243.53 180.83 245.54 180.83 245.54 182.84"
      fill="none"
      stroke="#221714"
      strokeWidth="1.34px"
    />
    <line
      x1="245.54"
      y1="186.73"
      x2="245.54"
      y2="215.89"
      fill="none"
      stroke="#221714"
      strokeWidth="1.34px"
      strokeDasharray="0 0 4 4"
    />
    <polyline
      points="245.54 217.84 245.54 219.85 243.53 219.85"
      fill="none"
      stroke="#221714"
      strokeWidth="1.34px"
    />
    <line
      x1="239.41"
      y1="219.85"
      x2="208.48"
      y2="219.85"
      fill="none"
      stroke="#221714"
      strokeWidth="1.34px"
      strokeDasharray="0 0 4 4"
    />
    <polyline
      points="206.42 219.85 204.41 219.85 204.41 217.84"
      fill="none"
      stroke="#221714"
      strokeWidth="1.34px"
    />
    <line
      x1="204.41"
      y1="213.95"
      x2="204.41"
      y2="184.78"
      fill="none"
      stroke="#221714"
      strokeWidth="1.34px"
      strokeDasharray="0 0 4 4"
    />
    <rect
      x="268.94"
      y="196.35"
      width="53.77"
      height="80.75"
      fill="none"
      stroke="#221714"
      strokeWidth="1.34px"
    />
    <line
      x1="47.86"
      y1="42.2"
      x2="58.43"
      y2="42.2"
      fill="none"
      stroke="#221714"
      strokeWidth=".67px"
    />
    <line
      x1="47.86"
      y1="36.88"
      x2="58.43"
      y2="36.88"
      fill="none"
      stroke="#221714"
      strokeWidth=".67px"
    />
    <line
      x1="47.86"
      y1="34.22"
      x2="58.43"
      y2="34.22"
      fill="none"
      stroke="#221714"
      strokeWidth=".67px"
    />
    <line
      x1="47.86"
      y1="31.56"
      x2="58.43"
      y2="31.56"
      fill="none"
      stroke="#221714"
      strokeWidth=".67px"
    />
    <line
      x1="47.86"
      y1="28.9"
      x2="58.43"
      y2="28.9"
      fill="none"
      stroke="#221714"
      strokeWidth=".67px"
    />
    <line
      x1="47.86"
      y1="44.86"
      x2="58.43"
      y2="44.86"
      fill="none"
      stroke="#221714"
      strokeWidth=".67px"
    />
    <line
      x1="47.86"
      y1="47.52"
      x2="58.43"
      y2="47.52"
      fill="none"
      stroke="#221714"
      strokeWidth=".67px"
    />
    <line
      x1="47.86"
      y1="50.18"
      x2="58.43"
      y2="50.18"
      fill="none"
      stroke="#221714"
      strokeWidth=".67px"
    />
    <line
      x1="47.86"
      y1="52.84"
      x2="58.43"
      y2="52.84"
      fill="none"
      stroke="#221714"
      strokeWidth=".67px"
    />
    <line
      x1="47.86"
      y1="39.54"
      x2="58.43"
      y2="39.54"
      fill="none"
      stroke="#221714"
      strokeWidth=".67px"
    />
    <polyline
      points="58.39 17.25 37.29 17.25 37.29 83.27 143.18 83.27"
      fill="none"
      stroke="#221714"
      strokeWidth="1.34px"
    />
    <rect
      x="322.71"
      y="94.97"
      width="67.2"
      height="69.97"
      className={boxFS}
      id="physics"
    />
    <rect
      x="340.29"
      y="60.01"
      width="49.61"
      height="35.08"
      className={boxFS}
      id="multipurpose"
    />
    <line
      x1="237.81"
      y1="277.1"
      x2="291.26"
      y2="277.1"
      fill="none"
      stroke="#221714"
      strokeWidth="1.34px"
    />
    <polyline
      points="255.36 268.6 255.36 245.66 255.36 245.51"
      fill="none"
      stroke="#221714"
      strokeWidth="1.34px"
    />
    <line
      x1="241.83"
      y1="245.84"
      x2="255.36"
      y2="245.84"
      fill="none"
      stroke="#221714"
      strokeWidth=".67px"
    />
    <line
      x1="241.83"
      y1="248.5"
      x2="255.36"
      y2="248.5"
      fill="none"
      stroke="#221714"
      strokeWidth=".67px"
    />
    <line
      x1="241.83"
      y1="251.16"
      x2="255.36"
      y2="251.16"
      fill="none"
      stroke="#221714"
      strokeWidth=".67px"
    />
    <line
      x1="241.83"
      y1="253.82"
      x2="255.36"
      y2="253.82"
      fill="none"
      stroke="#221714"
      strokeWidth=".67px"
    />
    <line
      x1="241.83"
      y1="256.48"
      x2="255.36"
      y2="256.48"
      fill="none"
      stroke="#221714"
      strokeWidth=".67px"
    />
    <line
      x1="241.83"
      y1="259.14"
      x2="255.36"
      y2="259.14"
      fill="none"
      stroke="#221714"
      strokeWidth=".67px"
    />
    <line
      x1="241.83"
      y1="261.8"
      x2="255.36"
      y2="261.8"
      fill="none"
      stroke="#221714"
      strokeWidth=".67px"
    />
    <line
      x1="241.83"
      y1="264.46"
      x2="255.36"
      y2="264.46"
      fill="none"
      stroke="#221714"
      strokeWidth=".67px"
    />
    <line
      x1="18.54"
      y1="243.68"
      x2="18.54"
      y2="269.42"
      fill="none"
      stroke="#221714"
      strokeWidth="1.34px"
    />
    <line
      x1="31.36"
      y1="238.66"
      x2="31.36"
      y2="277.27"
      fill="none"
      stroke="#221714"
      strokeWidth="1.34px"
    />
    <line
      x1="18.54"
      y1="249.27"
      x2="31.36"
      y2="249.27"
      fill="none"
      stroke="#221714"
      strokeWidth=".67px"
    />
    <line
      x1="18.54"
      y1="243.95"
      x2="31.36"
      y2="243.95"
      fill="none"
      stroke="#221714"
      strokeWidth=".67px"
    />
    <line
      x1="18.54"
      y1="251.93"
      x2="31.36"
      y2="251.93"
      fill="none"
      stroke="#221714"
      strokeWidth=".67px"
    />
    <line
      x1="18.54"
      y1="254.59"
      x2="31.36"
      y2="254.59"
      fill="none"
      stroke="#221714"
      strokeWidth=".67px"
    />
    <line
      x1="18.54"
      y1="246.61"
      x2="31.36"
      y2="246.61"
      fill="none"
      stroke="#221714"
      strokeWidth=".67px"
    />
    <line
      x1="18.54"
      y1="257.25"
      x2="31.36"
      y2="257.25"
      fill="none"
      stroke="#221714"
      strokeWidth=".67px"
    />
    <line
      x1="18.54"
      y1="259.91"
      x2="31.36"
      y2="259.91"
      fill="none"
      stroke="#221714"
      strokeWidth=".67px"
    />
    <line
      x1="18.54"
      y1="262.57"
      x2="31.36"
      y2="262.57"
      fill="none"
      stroke="#221714"
      strokeWidth=".67px"
    />
    <line
      x1="18.54"
      y1="265.23"
      x2="31.36"
      y2="265.23"
      fill="none"
      stroke="#221714"
      strokeWidth=".67px"
    />
    <line
      x1="334.97"
      y1="39"
      x2="334.97"
      y2="23.85"
      fill="none"
      stroke="#221714"
      strokeWidth=".67px"
    />
    <line
      x1="329.65"
      y1="39"
      x2="329.65"
      y2="23.85"
      fill="none"
      stroke="#221714"
      strokeWidth=".67px"
    />
    <line
      x1="326.99"
      y1="39"
      x2="326.99"
      y2="23.85"
      fill="none"
      stroke="#221714"
      strokeWidth=".67px"
    />
    <line
      x1="337.63"
      y1="39"
      x2="337.63"
      y2="23.85"
      fill="none"
      stroke="#221714"
      strokeWidth=".67px"
    />
    <line
      x1="340.29"
      y1="39"
      x2="340.29"
      y2="23.85"
      fill="none"
      stroke="#221714"
      strokeWidth=".67px"
    />
    <line
      x1="332.31"
      y1="39"
      x2="332.31"
      y2="23.85"
      fill="none"
      stroke="#221714"
      strokeWidth=".67px"
    />
    <line
      x1="342.95"
      y1="39"
      x2="342.95"
      y2="23.85"
      fill="none"
      stroke="#221714"
      strokeWidth=".67px"
    />
    <line
      x1="345.61"
      y1="39"
      x2="345.61"
      y2="23.85"
      fill="none"
      stroke="#221714"
      strokeWidth=".67px"
    />
    <line
      x1="348.27"
      y1="39"
      x2="348.27"
      y2="23.85"
      fill="none"
      stroke="#221714"
      strokeWidth=".67px"
    />
    <line
      x1="350.93"
      y1="39"
      x2="350.93"
      y2="23.85"
      fill="none"
      stroke="#221714"
      strokeWidth=".67px"
    />
    <line
      x1="353.49"
      y1="39"
      x2="353.49"
      y2="23.85"
      fill="none"
      stroke="#221714"
      strokeWidth=".67px"
    />
    <line
      x1="326.66"
      y1="23.85"
      x2="358.66"
      y2="23.85"
      fill="none"
      stroke="#221714"
      strokeWidth="1.34px"
    />
    <line
      x1="129.78"
      y1="83.27"
      x2="74.47"
      y2="83.27"
      fill="none"
      stroke="#221714"
      strokeWidth="1.34px"
    />
    <line
      x1="58.53"
      y1="83.27"
      x2="74.47"
      y2="83.27"
      fill="none"
      stroke="#221714"
      strokeWidth="1.34px"
    />
    <line
      x1="47.86"
      y1="28.56"
      x2="47.86"
      y2="57.62"
      fill="none"
      stroke="#221714"
      strokeWidth="1.34px"
    />
    <text
      transform="translate(356.32 97)"
      fill="#fff"
      glyphOrientationVertical="0deg"
      text-orientation="upright"
      writingMode="tb"
      fontSize="13px"
    >
      <tspan x="0" y="0">
        物理研究部
      </tspan>
    </text>

    <polyline
      points="179.54 180.85 295.28 180.85 295.28 83.27 143.18 83.27"
      fill="none"
      stroke="#221714"
      strokeWidth="1.34px"
    />
    <path
      d="m 129.99,180.83 -24.85041,0 4.1e-4,39.02 24.85,0 h 24.86 v -39.02 z"
      fill="#717171"
      stroke="#221714"
      strokeWidth="1.34px"
      id="m3-2"
    />
    <rect
      x="154.7"
      y="180.83"
      width="49.71"
      height="39.02"
      className={boxFS}
      id="m3-1"
    />
    <rect
      x="268.96"
      y="221.07"
      width="53.72"
      height="56.03"
      className={boxFS}
      id="earthscience"
    />
    <text transform="translate(106 205)" fill="#fff" fontSize="12px">
      <tspan x="0" y="0">
        講義教室
      </tspan>
    </text>
    <text transform="translate(128 263.07)" fill="#231815" fontSize="13px">
      <tspan x="0" y="0">
        テラス
      </tspan>
    </text>
    <text transform="translate(177.9 205.22)" fill="#fff" fontSize="13px">
      <tspan x="-11" y="0">
        地学研究部
      </tspan>
    </text>
    <text transform="translate(271 253)" fill="#fff" fontSize="13px">
      <tspan x="12" y="-7">
        地学
      </tspan>
      <tspan x="5" y="7">
        研究部
      </tspan>
    </text>
    <polyline
      points="58.5 277.1 50.99 277.1 37.59 277.27 11.92 277.27 5.72 277.27 5.72 219.85"
      fill="none"
      stroke="#221714"
      strokeWidth="1.34px"
    />
    <rect
      x="77.86"
      y="17.25"
      width="55.89"
      height="47.91"
      className={boxFS}
      id="h1-4"
    />
    <polygon
      points="180.33 17.25 171.02 17.25 152.39 17.25 133.75 17.25 133.75 65.15 152.39 65.15 171.02 65.15 180.33 65.15 189.65 65.15 189.65 17.25 180.33 17.25"
      className={boxFS}
      id="h1-3"
    />
    <polygon
      points="236.15 17.25 226.84 17.25 208.21 17.25 189.57 17.25 189.57 65.15 208.21 65.15 226.84 65.15 236.15 65.15 245.47 65.15 245.47 17.25 236.15 17.25"
      className={boxFS}
      id="h1-2"
    />
    <polygon
      points="292.12 17.25 282.8 17.25 264.17 17.25 245.54 17.25 245.54 65.15 264.17 65.15 282.8 65.15 292.12 65.15 301.43 65.15 301.43 17.25 292.12 17.25"
      className={boxFS}
      id="h1-1"
    />
    <text transform="translate(254 46)" fill="#fff" fontSize="13px">
      <tspan x="0" y="0">
        カジノ
      </tspan>
    </text>
    <text transform="translate(340 81)" fill="#fff" fontSize="13px">
      <tspan x="5.5" y="-6">
        アニメ
      </tspan>
      <tspan x="5.5" y="6">
        研究会
      </tspan>
    </text>
    <text transform="translate(135 46)" fontSize="13px" fill="#fff">
      <tspan x="6" y="-7">
        クイズ
      </tspan>
      <tspan x="6" y="7">
        同好会
      </tspan>
    </text>
    <text transform="translate(192 46)" fontSize="13px" fill="#fff">
      <tspan x="12" y="-7">
        数学
      </tspan>
      <tspan x="6" y="7">
        研究部
      </tspan>
    </text>
    <text transform="translate(80 46)" fill="#fff" fontSize="13px">
      <tspan x="0" y="0">
        暗闇迷路
      </tspan>
    </text>
    <line
      x1="11.92"
      y1="277.27"
      x2="5.72"
      y2="277.27"
      fill="none"
      stroke="#221714"
      strokeWidth="1.34px"
    />
    <text
      transform="translate(96 182)"
      fill="#fff"
      fontSize="9"
      glyphOrientationVertical="0deg"
      text-orientation="upright"
      writingMode="tb"
    >
      <tspan x="1" y="4">
        コナン
      </tspan>
      <tspan x="-8" y="1">
        サークル
      </tspan>
    </text>
    <polyline
      points="322.71 180.83 322.71 164.94 380.05 164.94"
      fill="none"
      stroke="#221714"
      strokeWidth="1.34px"
    />
    <line
      x1="322.71"
      y1="196.35"
      x2="322.71"
      y2="180.83"
      fill="none"
      stroke="#221714"
      strokeWidth="1.34px"
    />
    <polyline
      points="301.43 65.17 301.43 8.32 365.52 8.32 365.52 38.99 322.71 38.99 322.71 79.96"
      fill="none"
      stroke="#221714"
      strokeWidth="1.34px"
    />
    <line
      x1="340.29"
      y1="60.01"
      x2="322.71"
      y2="60.01"
      fill="none"
      stroke="#221714"
      strokeWidth="1.34px"
    />
    <path
      d="M 173.47999,180.76679 55.43,180.87679 5.7205701,180.87606 5.72,219.85 l 99.42,0"
      fill="none"
      stroke="#221714"
      strokeWidth="1.34px"
    />
    <rect
      x="31.36"
      y="238.08"
      width="30.93"
      height="19.88"
      fill="#009245"
      stroke="#231815"
      strokeWidth="1.29px"
    />
    <rect
      x="62.29"
      y="238.08"
      width="179.54"
      height="39.02"
      fill="none"
      stroke="#221714"
      strokeWidth="1.34px"
    />
    <path
      d="m 80.480002,180.85345 0,38.99655"
      fill="#30ffff"
      stroke="#221714"
      strokeWidth="1.34"
      strokeDasharray="0 0 4 4"
    />
    <path
      d="M 55.428072,180.87679 V 219.85"
      fill="#30ffff"
      stroke="#221714"
      strokeWidth="1.34"
    />
    <text fill="#ffffff" fontSize="13px" transform="translate(10 198)">
      <tspan x="0" y="-1">
        アマチュア
      </tspan>
      <tspan x="0" y="14">
        無線研究部
      </tspan>
    </text>
    <rect
      x="57.42"
      y="17.25"
      width="20.44"
      height="23.95"
      stroke="#231815"
      strokeWidth="1.33px"
      fill="#e50020"
    />
    <g opacity=".9">
      <circle cx="67.26" cy="22.27" r="1.45" fill="#fff" strokeWidth="0px" />
      <path
        d="M66.39,25.77l-2.89,7.92c-.1.3.13.6.44.6h6.63c.32,0,.54-.31.44-.61l-2.88-7.91c-.27-.84-1.47-.84-1.74,0Z"
        fill="#fff"
        strokeWidth="0px"
      />
      <rect
        x="65.99"
        y="33.15"
        width="2.54"
        height="4.48"
        rx=".33"
        ry=".33"
        fill="#fff"
        strokeWidth="0px"
      />
    </g>
    <rect
      x="31.36"
      y="257.25"
      width="30.93"
      height="19.88"
      stroke="#231815"
      strokeWidth="1.29px"
      fill="#004d85"
    />
    <circle
      cx="46.52"
      cy="241.38"
      r="1.34"
      fill="#fff"
      strokeWidth="0px"
      opacity=".9"
    />
    <path
      d="M50.04,250.83h-4.18v-6.2h1.35s.01,4.8.01,4.8h4s.01.07.01.07l.6,4.23,1.85-.28-.15-1.01-.83.13-.58-4.16h-3.87s-.01-4.8-.01-4.8h-3.4s0,2.04,0,2.04c-1.69.74-2.8,2.41-2.8,4.28,0,2.57,2.09,4.67,4.67,4.67.04,0,.07,0,.11,0,1.43-.04,2.68-.73,3.51-1.77l-.28-1.99ZM45.85,250.83h0s.01,0,.01,0h-.01Z"
      fill="#fff"
      strokeWidth="0px"
      opacity=".9"
    />
    <g opacity=".9">
      <circle cx="47.08" cy="261.14" r="1.26" fill="#fff" strokeWidth="0px" />
      <rect
        x="45.73"
        y="267.89"
        width="2.69"
        height="6.62"
        rx=".26"
        ry=".26"
        fill="#fff"
        strokeWidth="0px"
      />
      <path
        d="M45.28,263.49h3.6c.43,0,.78.35.78.78v5.59c0,.21-.17.39-.39.39h-4.38c-.21,0-.39-.17-.39-.39v-5.59c0-.43.35-.78.78-.78Z"
        fill="#fff"
        strokeWidth="0px"
      />
    </g>
    <rect
      x="57.42"
      y="41.2"
      width="20.44"
      height="23.95"
      fill="#009245"
      stroke="#231815"
      strokeWidth="1.33px"
    />
    <circle
      cx="66.81"
      cy="46.9"
      r="1.34"
      fill="#fff"
      strokeWidth="0px"
      opacity=".9"
    />
    <path
      d="M70.33,56.34h-4.18v-6.2h1.35s.01,4.8.01,4.8h4s.01.07.01.07l.6,4.23,1.85-.28-.15-1.01-.83.13-.58-4.16h-3.87s-.01-4.8-.01-4.8h-3.4s0,2.04,0,2.04c-1.69.74-2.8,2.41-2.8,4.28,0,2.57,2.09,4.67,4.67,4.67.04,0,.07,0,.11,0,1.43-.04,2.68-.73,3.51-1.77l-.28-1.99ZM66.13,56.35h0s.01,0,.01,0h-.01Z"
      fill="#fff"
      strokeWidth="0px"
      opacity=".9"
    />
  </svg>,
];

export const mapIdAll = Object.fromEntries(
  mapSvgAll
    .map((mapSvg, i) => {
      return expandChildren(cloneElement(mapSvg)).map((elm: JSX.Element) => {
        return [elm.props?.id, i];
      });
    })
    .flat()
    .filter((mapId) => mapId[0])
);

export const Maps: FC<Props> = ({ mapIdList, className, floorNumber }) => {
  useFocusMap(mapIdList);
  return mapSvgAll.map((mapSvg) => {
    return cloneElement(mapSvg, {
      className: `${mapSvg.props.className} ${className}`,
    });
  })[floorNumber - 1];
};
