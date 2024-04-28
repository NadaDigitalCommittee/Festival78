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

type Props = {
  floorNumber: number;
  className?: string;
  mapIdList?: string[];
};

const padding = 20;
const {
  arrow,
  dashed,
  boxFill,
  boxStroke,
  fillNone,
  strokeNone,
  attention,
  boxStrokeThin,
} = styles;

const boxFS = [boxFill, boxStroke].join(" ");
const boxF_ = [boxFill, strokeNone].join(" ");
const box_S = [fillNone, boxStroke].join(" ");
const box__ = [fillNone, strokeNone].join(" ");
const box_ST = [fillNone, boxStrokeThin].join(" ");
const box_SD = [fillNone, boxStroke, dashed].join(" ");

const mapSvgAll = [
  <svg
    key="1F"
    xmlns="http://www.w3.org/2000/svg"
    viewBox={[
      0 - padding,
      0 - padding,
      396.85 + 2 * padding,
      847.91 + 2 * padding,
    ].join(" ")}>
    {/*<path fill="#edeef0" d="M367.81 129.14h0v27.57h-38.28v43.16h-260.78v-70.73h299.06zM45.58 320.24h284.16v86.13h-284.16v-86.13z" />*/}
    <path className={boxFS} d="M329.54 250.57h32.01v21.91h-32.01z" id="broadcasting" />
    <path className={boxFS} d="M315.14 305.48v-33h14.4v33z" id="broadcasting_juice" />
    <path className={boxFS} d="M1.4 444.13h48.44v81.29h-48.44z" id="cafe" />
    <path className={boxFS} d="M230 590h46.56v25h-46.56v-25z" id="campustour" />
    <path className={boxFS} d="M168.59 467.66h86.37v29.21h-86.37z" id="garden" />
    <g id="ground1" className={boxFS}>
      <path d="M192.597 39.816h58.107v21.764h-58.107v-21.764z" id="benada"/>
      <path d="M65.5 60.12h77.23v21.64h-77.23v-21.64z" id="yoyo"/>
      <path d="M65.5 87.26h77.23v21.64h-77.23v-21.64z" id="superball"/>
      <path d="M301.89 62.34h77.23v21.64h-77.23v-21.64z" id="shooting"/>
      <path d="M301.89 95.19h77.23v21.64h-77.23v-21.64z" id="baseball"/>
      <path d="M301.89 31.06h77.23v21.64h-77.23v-21.64z" id="kicktarget"/>
      <path d="M77.22 22.38h76a16 16 0 010 32h-76.02a16 16 0 010-32z" id="minitrain"/>
      <path d="M45.7 113.53h33.11v21.64h-33.11v-21.64z" id="ticket"/>
    </g>
    <path className={boxFS} d="M59.33 680.95h163.03v81.29h-163.03z" id="gym" />
    <path className={boxFS} d="M116.9 368.93h22.82v36.7h-22.82z" id="library" />
    <path className={boxFS} d="M62.56 444.13h33.97v71.02h-33.97zM1.4 444.13h48.44v81.29h-48.44z" id="meeting" />
    <path className={boxFS} d="M164.35 137.27h-83.77v42.82h83.77l4.05-14.28v-14.26l-4.05-14.28z" id="music" />
    <path className={boxFS} d="M260.99 180.12h32.01v21.91h-32.01z" id="newgarden" />
    <path className={boxFS} d="M256.37 241.09h38.15v28.25h-38.15z" id="newgarden_info" />
    <path className={boxFS} d="M238.77 319.88h67.27v35.34h-67.27z" id="nurse" />
    <path className={boxFS} d="M321.78 598.99h27.29v45.35h-27.29z" id="souvenir" />
    <path className={boxFS} d="M59.33 762.25h163.03v50.94h-163.03z" id="tennis" />
    <g>
      <g>
        <path
          fill="#4f8e3a"
          stroke="none"
          d="M281.48 370.86h24.22v17.435h-24.22v-17.435z"
        />
        <path fill="#fff" opacity=".9" d="M292.88 373.34a1.34 1.34 0 010 2.68 1.34 1.34 0 010-2.68zM295.859 382.931h-3.549v-5.411h1.18v4.2h3.5l.53 3.75 1.62-.24-.13-.88-.73.11-.51-3.63h-3.38v-4.2h-2.98v1.78a4.083 4.083 0 001.64 7.82c1.251.008 2.34-.63 3.06-1.55z" />
      </g>
      <g>
        <path
          fill="#e50020"
          stroke="none"
          d="M281.45 388.51h24.24v17.22h-24.24z"
        />
        <g fill="#fff" opacity=".9">
          <circle cx="293.58" cy="391.51" r="1.17" />
          <path d="M292.87 394.33l-2.33 6.39c-.08.24.1.49.35.49h5.35c.26 0 .44-.25.36-.49l-2.33-6.39c-.22-.68-1.18-.68-1.41 0z" />
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
            fill="#e50020"
            stroke="none"
            d="M69.81 371.75h23.61v33.98h-23.61z"
          />
          <g fill="#fff" opacity=".9">
            <circle cx="81.61" cy="379.59" r="1.81" />
            <path d="M80.47 384.19l-3.8 10.42c-.13.39.16.8.58.8h8.73c.42 0 .71-.41.58-.8l-3.8-10.42c-.36-1.11-1.93-1.11-2.29 0z" />
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
          <path fill="#4f8e3a" stroke="none" d="M49.83 581.42h23.35v23.74h-23.35z" />
          <g fill="#fff" opacity=".9">
            <path d="M60.75 585.94a1.34 1.34 0 010 2.68 1.34 1.34 0 010-2.68zM64.31 596.85h-4.23v-6.28h1.37v4.86h4.06l.62 4.35 1.87-.28-.15-1.03-.84.13-.59-4.21h-3.92v-4.86h-3.46v2.07a4.725 4.725 0 00-2.83 4.33c0 2.61 2.12 4.73 4.73 4.73 1.576-.014 2.82-.74 3.66-1.79l-.29-2.02z" />
          </g>
      </g>
      <g>
          <path fill="#e50020" stroke="none" d="M73.18 581.42h23.35v23.74h-23.35z" />
          <g fill="#fff" opacity=".9">
            <circle cx="84.6" cy="586.49" r="1.34" />
            <path d="M83.75 589.91l-2.82 7.74c-.1.29.12.59.43.59h6.49c.31 0 .53-.3.43-.6l-2.82-7.74c-.27-.82-1.44-.82-1.7 0z" />
            <rect
              width="2.48"
              height="4.38"
              x="83.36"
              y="597.13"
              rx=".36"
              ry=".36"
            />
          </g>
      </g>
      <g>
          <path
            fill="#004d85"
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
      <g>
          <path fill="none" stroke="#221714" d="M70 705 h-44v21.52" />
          <circle cx="70" cy="705" r="1.5" fill="#221714" />
      </g>
    </g>
    <path className={arrow} d="M312 523v-13 c 0.3 1.5 1.5 2.4 2.5 3 m-2.5 -3 c -0.3 1.5 -1.5 2.4 -2.5 3M262.98 549v-12c 0.3 1.5 1.5 2.4 2.5 3 m-2.5 -3 c -0.3 1.5 -1.5 2.4 -2.5 3M262.98 553v8c 0.3 -1.5 1.5 -2.4 2.5 -3 m-2.5 3 c -0.3 -1.5 -1.5 -2.4 -2.5 -3M56.21 522.22v10c 0.3 -1.5 1.5 -2.4 2.5 -3 m-2.5 3 c -0.3 -1.5 -1.5 -2.4 -2.5 -3M56.21 455v-10c 0.3 1.5 1.5 2.4 2.5 3 m-2.5 -3 c -0.3 1.5 -1.5 2.4 -2.5 3" />
    <path className={box_S} d="M394.38 659.28h-90.11 M315.31 9.03h79.21v120.27h-26.71M281.45 388.51h24.24 M80.58 137.27h-11.83v62.6h100.32v15.19 M211.48 250.57v48.48h-9.89v20.64h6.49v35.37h-44.41v50.68h-46.8v-50.62h-23.46v-45.38h4.88v-11h-4.88v-98.87 M329.54 175.22 l 60.06 0.02v130.24h-17.32v111.45h-42.74v-241.71 z M173.84 180.09 l 3.9 -15.7v-12.47 l -7.64 -23.46h-88.77 M156.55 188.95v-8.86 M156.55 199.87v-4.07 M169.07 201.25h8.5 l 14.55 4.85 l 0.27 0.2 a 98.284 98.284 0 0 1 21.33 21.28 s 4.85 14.55 4.85 14.55v8.43h-23.32 M93.41 199.87h19.71v22h-19.71 z M113.12 199.87h11.65v22h-11.65 z M175.77 398.7v-21.2 M163.67 405.74h46.52 l -0.01 -34.88h-22.3 l -0.02 34.88 M93.41 267.9 l -11.99 7.22v44.49h-80.02v94.75h44.81v-8.62h47.2v-34.08h-23.55 l -0.09 34.08 m-68.37 -86.13h44.81v94.75h-44.81 z m44.8 0h35.22v34.96h-35.22 z m12.3 51.78v24.05 m-25.46 37.02h17.39 m-17.39 -11.46h16.8v-2.7h47.14 M260.99 128.04v52.07h49.53 V 129.3h57.29v27.41h-38.27v18.51 M260.99 137.47h49.53 M329.54 305.48h51.25 M329.54 319.88h42.74 M333.07 143.18h28.61 M234.35 371.05v34.69 M257.22 370.86v34.88h48.48v-34.88h-24.25v34.88 M269.35 398.67v-21.16 M96.53 547.45v-103.32h-33.91v98.36h33.91 M62.62 515.15h33.91 M267.58 520.68v23.48 M267.58 557.22v19.75 M1.4 525.43h48.44v56 H 1.4 z M49.83 581.42h46.69v23.74 H 49.83 z M96.53 556.16v25.26 M276.56 544.16v-33.89 H 147.32v33.89h65.44v-33.89 M147.32 557.22v26.26h129.24v-26.26 M73.18 581.42v23.74 M163.69 510.27h49.08v33.89h-49.08 z M163.69 557.22h49.08v26.26h-49.08 z M240.32 557.22h18.43v26.26h-18.43 z M221.33 557.22h18.99v26.26h-18.99 z M221.33 510.27h37.43v33.89h-37.43 z M349.03 598.99h45.35v45.35h-45.35 z M321.78 486.49h72.59v94.87h-72.59 z M321.78 431.27h72.59v55.22h-72.59 z M302.33 580.9v-68.34 l 19.45 -11.51v79.85 M256.37 9.03h-214.9v128.27h27.28 M69.69 566.32h19.77 M69.69 575.86h19.77 M231.86 659.28h-182.03v-54.12" />
    <path fill="#221714" className={boxStroke} d="M223.38 654.98h8.48v8.48h-8.48zM304.27 654.98h8.48v8.48h-8.48zM252.13 4.79h8.48v8.48h-8.48zM314.4 4.79h8.48v8.48h-8.48z" />
    <path className={box_ST} d="M175.8 377.8h12.1 m-12.1 2.38h12.1 m-12.1 2.37h12.1 m-12.1 2.38h12.1 m-12.1 2.38h12.1 m-12.1 2.38h12.1 m-12.1 2.37h12.1 m-12.1 2.38h12.1 M258.56 520.98h8.84 m-8.84 2.38h8.84 m-8.84 2.38h8.84 m-8.84 2.37h8.84 m-8.84 2.38h8.84 m-8.84 2.38h8.84 m-8.84 2.38h8.84 m9.16 -8.33h25.77 m-25.77 2.38h25.77 m-25.77 2.38h25.77 m-25.77 2.38h25.77 m-25.77 2.37h25.77 M258.74 562.41h8.84 m-8.84 2.37h8.84 m-8.84 2.38h8.84 m-8.84 2.38h8.84 m-8.84 2.38h8.84 m-8.84 2.37h8.84 m-8.84 2.38h8.84 M269.35 377.89h12.1 m-12.1 2.38h12.1 m-12.1 2.37h12.1 m-12.1 2.38h12.1 m-12.1 2.38h12.1 m-12.1 2.38h12.1 m-12.1 2.37h12.1 m-12.1 2.38h12.1 M47.04 376.12h11.46 m-11.46 2.38h11.46 m-11.46 2.38h11.46 m-11.46 2.37h11.46 m-11.46 2.38h11.46 m-11.46 2.38h11.46 m-11.46 2.38h11.46 m-11.46 2.37h11.46 m-11.46 2.38h11.46 M35.87 421v23.04 m2.38 -23.04v23.04 m2.38 -23.04v23.04 m2.37 -23.04v23.04 m2.38 -23.04v23.04 m2.38 -23.04v23.04 m2.38 -23.04v23.04 M75.09 418.3v25.74 m2.37 -25.74v25.74 m2.38 -25.74v25.74 m2.38 -25.74v25.74 m2.38 -25.74v25.74 M81.53 280.01h11.98 m-11.98 2.38h11.98 m-11.98 2.38h11.98 m-11.98 2.38h11.98 m-11.98 2.37h11.98 m-11.98 2.38h11.98 m-11.98 2.38h11.98 m-11.98 2.38h11.98 m-11.98 2.37h11.98 M177.74 153.24h83.25 m-83.25 2.38h83.25 m-83.25 2.37h83.25 m-83.25 2.38h83.25 m-83.25 2.38h83.25M68.75 147.64h11.83 m-11.83 2.38h11.83 m-11.83 2.38h11.83 m-11.83 2.37h11.83 m-11.83 2.38h11.83 m-11.83 2.38h11.83 m-11.83 2.38h11.83 m-11.83 4.75h11.83 m-11.83 -2.38h11.83 m-11.83 4.76h11.83M333.37 129.64v13.54 m2.38 -13.54v13.54 m2.38 -13.54v13.54 m2.37 -13.54v13.54 m2.38 -13.54v13.54 m2.38 -13.54v13.54 m2.38 -13.54v13.54 m2.37 -13.54v13.54 m2.38 -13.54v13.54 m2.38 -13.54v13.54 m2.29 -13.54v13.54M77.27 566.41v9.45 m2.38 -9.45v9.45 m2.37 -9.45v9.45 m2.38 -9.45v9.45 m2.38 -9.45v9.45 m2.38 -9.45v9.45M169.07 204.84h7.88l13.49 4.5.25.19a90.897 90.897 0 0 1 19.77 19.73s4.5 13.49 4.5 13.49v7.82h-12.32M169.07 208.04h7.33l12.55 4.18.24.17a84.892 84.892 0 0 1 18.39 18.35s4.18 12.55 4.18 12.55v7.27h-11.45M169.07 211.39h6.75l11.56 3.85.22.16a77.847 77.847 0 0 1 16.94 16.91s3.85 11.56 3.85 11.56v6.7h-10.55M169.07 214.82h6.16l10.55 3.52.2.15a71.147 71.147 0 0 1 15.46 15.43s3.52 10.55 3.52 10.55v6.11h-9.63M175.23 214.82 l 2.34 -13.57 m8.21 17.09 l 6.34 -12.24 m9.32 27.81 l 12.28 -6.33 m-8.77 16.88 l 13.62 -2.32" />
    <g>
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
      <text fill="#231815" fontSize="15" x="170.357" y="78.727">
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
        <tspan x="0" y="0" textLength={30}
        lengthAdjust={"spacing"}>
          ジュース
        </tspan>
      </text>
      <text fill="#231815" fontSize="12" transform="translate(270 13.27)">
        <tspan x="0" y="0">
          退場口
        </tspan>
      </text>
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
      <text
        fill="#fff"
        fontSize="8"
        glyphOrientationVertical="0deg"
        transform="translate(335.5 601)"
        writingMode="tb"
      >
        <tspan x="0" y="0" textLength={45}
        lengthAdjust={"spacing"}>
          お土産販売
        </tspan>
      </text>
      <text fill="#fff" fontSize="8" transform="translate(230 600.5)">
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
      <text
        fill="#fff"
        fontSize="6.5"
        glyphOrientationVertical="0deg"
        transform="translate(128.56 371.05)"
        writingMode="tb"
      >
        <tspan x="0" y="-2" textLength={35}
        lengthAdjust={"spacing"}>
          図書委員会
        </tspan>
      </text>
      <text
        fill="#231815"
        fontSize="9"
        glyphOrientationVertical="0deg"
        transform="translate(56.21 457.96)"
        writingMode="tb"
      >
        <tspan x="0" y="0" textLength={65}
        lengthAdjust={"spacing"}>
          食堂地下１階へ
        </tspan>
      </text>
      <text
        fill="#fff"
        fontSize="13"
        glyphOrientationVertical="0deg"
        transform="translate(79.54 447)"
        writingMode="tb"
      >
        <tspan x="0" y="0" textLength={70}
        lengthAdjust={"spacing"}>
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
        <tspan x="0" y="0" textLength={70}
        lengthAdjust={"spacing"}>
          鉄道研究部
        </tspan>
      </text>
      <text fill="#fff" fontSize="7.5" transform="translate(260.5 253.4)">
        <tspan x="0" y="0">
          インフォ
        </tspan>
        <tspan x="-4" y="9">
          メーション
        </tspan>
      </text>
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
      <text fill="#fff" fontSize="9" transform="translate(305 45.89)">
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
      <text fontSize="10" transform="translate(-5 740)">
        <tspan x="0" y="0">
          グッズ・軽食
        </tspan>
        <tspan x="4.38" y="11">
          ・休憩所
        </tspan>
      </text>
    </g>
  </svg>,
  <svg
    key="2F"
    xmlns="http://www.w3.org/2000/svg"
    viewBox={[
      0 - padding,
      0 - padding,
      396.85 + 2 * padding,
      423.77 + 2 * padding,
    ].join(" ")}>
    <path className={boxFS} d="M.51 296.81h42.56v119.65h-42.56z" id="audiovisual" />
    <path className={boxFS} d="M228.26 27.15h43.9v37.63h-43.9z" id="h3-1" />
    <path className={boxFS} d="M184.36 27.15h43.9v37.63h-43.9z" id="h3-2" />
    <g id="lego" className={boxF_}>
      <path d="M184.36 27.15h-43.9v37.63h43.9v-37.63 z" id="h3-3" />
      <path d="M140.46 27.15h-43.9v37.63h43.9v-37.63 z" id="h3-4" />
    </g>
    <path className={boxF_} d="M55.36 187.38h15.47v30.72h-15.47 z" id="kingcrab" />
    <path className={boxFS} d="M282.06 285.51h59.6v48.53h-59.6z" id="lecture" />
    <path className={boxFS} d="M198.51 187.46h39.04v30.64h-39.04z" id="m1-1" />
    <path className={boxFS} d="M159.46 187.46h39.04v30.64h-39.04z" id="m1-2" />
    <path className={boxFS} d="M120.42 187.46h39.04v30.64h-39.04z" id="m1-3" />
    <g id="m1-4" className={boxF_}>
      <path d="M 100.9 187.46h19.52v30.64h-19.52v-30.64 z" id="studentcouncil" />
      <path d="M 81.38 187.46h19.52v30.64h-19.52v-30.64 z" id="tohoku" />
    </g>
    <path className={box_S} d="M81.38 187.46h39.04v30.64H81.38z" />
    <path className={boxF_} d="M237.55 187.46h29.78v30.64h-29.78z" id="m1open" />
    <path className={boxF_} d="M128.74 354.93h97.14v64.34h-97.14z" id="mainhall" />
    <path className={boxFS} d="M102.1 232.43h41.01v30.64H102.1z" id="seminar" />
    <path className={boxFS} d="M184.01 232.43h41.33v30.64h-41.33z" id="socialstudies1" />
    <path className={box_S} d="M.51 187.38h39.38v30.72H.51z" />
    <path className={boxFS} d="M.51 232.43h39.38v38.22H.51z" id="syodo" />
    <path className={box_S} d="M288.88 60.75h52.78v114.22h-52.78z" />
    <g>
      <path className={boxF_} d="M345.19 168.4h48.54v51.05h-48.54z" />
      <g className={box__} id="training">
        <path d="M345.19 168.4h48.54v51.05h-48.54z" id="tabletennis" />
        <path d="M345.19 168.4h48.54v51.05h-48.54z" id="shorinji" />
        <path d="M345.19 168.4h48.54v51.05h-48.54z" id="classicculture" />
      </g>
      <path className={box_S} d="M345.19 168.4h48.54v51.05h-48.54z" />
    </g>
    <g>
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
      <g>
        <path fill="#e50020" stroke="none" d="M80.5 27.15h16.06v18.81H80.5z" />
        <g fill="#fff" opacity=".9">
          <circle cx="88.43" cy="31.06" r="1.14" />
          <path d="M87.74 33.83 l -2.28 6.26 c -0.08 0.24 0.1 0.48 0.35 0.48h5.24 c 0.25 0 0.43 -0.24 0.35 -0.48 l -2.28 -6.25 c -0.22 -0.67 -1.16 -0.67 -1.38 0 z" />
          <rect
            width="2.01"
            height="3.54"
            x="87.43"
            y="39.66"
            rx=".29"
            ry=".29"
          />
        </g>
      </g>
      <g>
        <path fill="#4f8e3a" stroke="none" d="M80.5 45.97h16.06v18.81H80.5z" />
        <g fill="#fff" opacity=".9">
          <circle cx="88.45" cy="51.04" r=".98" />
          <path d="M91.02 57.94h-3.05v-4.52h0.99v3.51h2.93v0.05 l 0.44 3.08 l 1.35 -0.2 l -0.11 -0.74 l -0.61 0.09 l -0.43 -3.04h-2.82v-3.51h-2.49v1.49 a 3.41 3.41 0 0 0 -2.04 3.12 c 0 1.88 1.53 3.41 3.41 3.41h0.08 c 1.04 -0.03 1.96 -0.53 2.56 -1.29 l -0.21 -1.45 z" />
        </g>
      </g>
      <g>
        <path
          fill="#4f8e3a"
          stroke="none"
          d="M81.35 232.43h20.75v15.32h-20.75 z"
        />
        <g opacity=".9">
          <circle cx="90.96" cy="235.76" r=".98" fill="#fff" />
          <path
            fill="#fff"
            d="M93.53 242.65h-3.05v-4.52h0.99v3.51h2.93v0.05 l 0.44 3.08 l 1.35 -0.2 l -0.11 -0.74 l -0.61 0.09 l -0.43 -3.04h-2.82v-3.51h-2.49v1.49 a 3.41 3.41 0 0 0 -2.04 3.12 c 0 1.88 1.53 3.41 3.41 3.41h0.08 c 1.04 -0.03 1.96 -0.53 2.56 -1.29 l -0.21 -1.45 z"
          />
        </g>
      </g>
    </g>
    <path className={arrow} d="M274.5 351.9v10c 0.3 -1.5 1.5 -2.4 2.5 -3 m-2.5 3 c -0.3 -1.5 -1.5 -2.4 -2.5 -3"/>
    <path className={box_S} d="M55.36 187.38v30.72 m26.01 -77.58v19.82h-10.53v27.04h-70.33v45.05M44.77 263.07h-4.88m5.57 10.64v-2.33m8.85 2.33v-2.33M140.25 124.44 a 8.28 8.28 0 1 1 0 16.56 a 8.28 8.28 0 1 1 0 -16.56 z M187.1 106.52 a 86.328 86.328 0 0 0 -18.74 -18.7 l -0.24 -0.18 l -12.79 -4.26h-7.47v36.13 c 3.513 0 7.21 3.698 7.21 7.21h36.28v-7.41 z M137.34 114.01v-35h-43.45v20.86h-4.94v22.89h35.19 a 18.91 18.91 0 0 1 13.19 -8.75 z M81.37 79.01v20.86 M159.16 133.65 c -0.49 10.03 -8.75 18.03 -18.91 18.03 c -3.75 0 -7.24 -1.1 -10.18 -2.98 l -7.02 7.55 c -7.08 7.5 -16.62 12.22 -26.19 12.23 s -15.48 0 -15.48 0v18.98h95.05v-53.81h-17.26 z M121.46 130.39h-32.51v29.95h4.68 c 8.72 0 17.449 -3.424 23.85 -10.3 l 6.74 -7.24 a 18.841 18.841 0 0 1 -2.92 -10.08 c 0 -0.79 0.16 -2.33 0.16 -2.33 z M70.1 36.31v22.82 M288.88 187.47h36.87v21.32h-36.87 z m0 21.32h36.87v21.32h-36.87 z M288.88 230.1h36.87v21.32h-36.87 z m0 21.32h36.87v21.32h-36.87 z m0 21.31h-6.82v12.78 M176.42 169.57h3.6v-42.85 M147.86 79.01v4.36h7.47 l 12.79 4.26 c 3.937 2.952 11.482 8.664 18.98 18.89 l 4.25 12.792 l 0.01 7.398h-11.34v42.85h-3.6v17.9h90.91v-108.46h-119.47 z M44.77 263.07h20.16 m-44.22 33.74v-10.26h24.75v-12.84h-3.13v-10.5 m11.98 33.6h29.8v99.19h-29.8 zM4.12 221 l 9.09 9.09 m0 -9.09 l -9.09 9.09 m230.19 166.35v18.49 m0 -54.95v17.95 m-142.37 -298.92h55.92v4.36 m-66.59 -56.22h-21.57v51.86h23.85 m-2.18 0v55.31h-10.53v19.18 m82.91 102.9v-18.14 m-10.19 24.81h40.45v-30.64h-19.63 l -0.01 30.64 m60.98 0h41.98v-30.64h-20.69 l -0.01 30.64 m-10.65 -6.67v-18.14 m-186.02 -1.44v20.22 m10.07 -24.16v30.33 m0.49 141.22h17.38 m194.26 -339.63v-44.66h50.34v24.09h-33.62v130.74 m45.03 0h-45.03 m35.88 0h20.43v44.47h51.66 m-72.09 -31.97h7.05v44.02h65.04 m-104.87 -199.15h25.14 m-262.81 335.77h29.8 m0 24.13v24.22h-41.03 m238.98 -82.42h59.6v83.37h-59.6 z m0 35.98 l -17.8 10.53v-85.45h2.83v-21.39h-212.78v23.1M128.74 354.93h113.58v64.34h-113.58v-64.34 z m97.14 0v25.85 m0 12.65v25.84M96.56 27.15v37.63h87.8v-37.63h-87.8 z M80.5 27.15h16.06v18.815h-16.06v-18.815 z M80.5 45.97h16.06v18.815h-16.06 zM55.36 218.1h-15.47v-30.72h15.47 zM81.35 263.07h-5.9 M81.35 232.43h20.75v15.32h-20.75v-15.32 z M81.35 247.75h20.75v15.32h-20.75v-15.32 z" />
    <path className={box_SD} d="M 70.83 187.38h0v30.72h-15.47 M 140.46 28.48v36.3 M 100.9 187.46v30.64 M 267.33 187.46v30.64h-29.78" />
    <path className={box_ST} d="M58.78 263.21v10.64 m2.09 -10.64v10.64 m2.09 -10.64v10.64M59.7 36.31h20.8 m-20.8 2.09h20.8 m-20.8 2.09h20.8 m-20.8 2.09h20.8 m-20.8 2.09h20.8 m-20.8 2.09h20.8 m-20.8 2.09h20.8 m-20.8 2.09h20.8 m-20.8 2.09h20.8 m-20.8 2.09h20.8M234.31 362.99h7.77 m-7.77 2.09h7.77 m-7.77 2.09h7.77 m-7.77 2.09h7.77 m-7.77 2.08h7.77 m-7.77 2.09h7.77 m-7.77 2.09h7.77 M234.46 399.39h7.78 m-7.78 2.09h7.78 m-7.78 2.09h7.78 m-7.78 2.09h7.78 m-7.78 2.09h7.78 m-7.78 2.09h7.78 m-7.78 2.09h7.78M143.11 238.52h21.28 m-21.28 2.09h21.28 m-21.28 2.09h21.28 m-21.28 2.09h21.28 m-21.28 2.09h21.28 m-21.28 2.09h21.28 m-21.28 2.09h21.28 m-21.28 2.09h21.28M236 238.52h10.64M236 240.61h10.64M236 242.7h10.64M236 244.79h10.64M236 246.88h10.64M236 248.97h10.64M236 251.06h10.64m-21.29-12.54h10.63m-10.63 2.09h10.63m-10.63 2.09h10.63m-10.63 2.09h10.63m-10.63 2.09h10.63m-10.63 2.09h10.63m-10.63 2.09h10.63m.02 2.09h10.64m-21.29 0h10.63M39.89 237.04h20.14 m-20.14 2.09h20.14 m-20.14 2.09h20.14 m-20.14 2.08h20.14 m-20.14 2.09h20.14 m-20.14 2.09h20.14 m-20.14 2.09h20.14 m-20.14 2.09h20.14 m-20.14 2.09h20.14 M28.32 286.66v10.07 m2.08 -10.07v10.07 m2.09 -10.07v10.07 m2.09 -10.07v10.07 m2.09 -10.07v10.07 m2.09 -10.07v10.07 m2.09 -10.07v10.07 m2.09 -10.07v10.07M71.37 396.13v8.3m4.17-8.3v8.3m2.09-8.3v8.3m-8.35-8.3v8.3m-2.09-8.3v8.3m6.26-8.3v8.3m-8.35-8.3v8.3M70.65 151.23h10.53m-10.53-2.09h10.53m-10.53-2.09h10.53m-10.53-2.09h10.53m-10.53-2.09h10.53m-10.53-2.09h10.53M298.51 32.34v-11.9m-4.18 11.9v-11.9m-2.09 11.9v-11.9m8.36 11.9v-11.9m2.09 11.9v-11.9m-6.27 11.9v-11.9m8.36 11.9v-11.9m2.09 11.9v-11.9m2.09 11.9v-11.9m2.08 11.9v-11.9m2.02 11.9v-11.9m-14.55 23.8v-11.9m-4.18 11.9v-11.9m-2.09 11.9v-11.9m8.36 11.9v-11.9m2.09 11.9v-11.9m-6.27 11.9v-11.9m8.36 11.9v-11.9m2.09 11.9v-11.9m2.09 11.9v-11.9m2.08 11.9v-11.9m2.02 11.9v-11.9M147.86 86.53h6.92l11.86 3.95c6.593 4.795 14.963 13.868 17.621 17.5l3.919 11.86v6.87M147.86 89.34h6.44l11.03 3.68c5.408 3.863 13.523 12.394 16.365 16.28l3.685 11.03v6.39M147.86 92.28h5.93l10.16 3.39c6.293 4.637 13.175 12.399 15.082 15l3.388 10.16v5.89M147.86 95.3h5.41l9.27 3.09c4.971 3.59 11.572 10.715 13.75 13.69l3.1 9.27v5.37M147.86 98.38h4.88l8.36 2.79c6.296 4.722 11.626 11.28 12.41 12.35l2.79 8.36v4.84M147.86 103.8h3.95l6.76 2.25c2.751 1.905 8.027 7.236 10.04 9.98l2.25 6.76v3.92M147.86 106.9h3.41l5.85 1.95c3.29 2.392 7.388 6.87 8.68 8.63l1.95 5.85v3.39M147.86 109.9h2.9l4.96 1.65c4.628 3.6 7.355 7.323 7.36 7.33l1.65 4.96v2.88M147.86 112.94h2.37l4.07 1.36c3.127 2.345 5.711 5.56 6.04 6.01l1.36 4.46v1.97M147.86 116.05h1.84l3.15 1.05c1.097.732 3.651 3.25 4.67 4.64l1.05 3.15v1.82M152.74 98.38 l 2.59 -15.01 m5.77 17.8 l 7.02 -13.53 m5.39 25.87 l 13.59 -6.99 m-10.8 15.35 l 15.06 -2.56" />
    <g>
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
      <text
        fill="#231815"
        fontSize="9"
        glyphOrientationVertical="0deg"
        transform="translate(274.6 286)"
        writingMode="tb"
      >
        <tspan x="0" y="0" textLength={66}
        lengthAdjust={"spacing"}>
          スロープ１階へ
        </tspan>
      </text>
      <text fill="#fff" fontSize="13" transform="translate(139 393)">
        <tspan x="0" y="0">
          本館ステージ
        </tspan>
      </text>
      <text
        fill="#231815"
        fontSize="13"
        glyphOrientationVertical="0deg"
        transform="translate(316 83)"
        writingMode="tb"
      >
        <tspan x="0" y="0" textLength={70}
        lengthAdjust={"spacing"}>
          職員室
        </tspan>
      </text>
      <text
        fill="#fff"
        fontSize="13"
        glyphOrientationVertical="0deg"
        transform="translate(22 300)"
        writingMode="tb"
      >
        <tspan x="0" y="0" textLength={110}
        lengthAdjust={"spacing"}>
          視聴覚ステージ
        </tspan>
      </text>
      <text fill="#fff" fontSize="12" transform="translate(1 256)">
        <tspan x="7" y="-7">
          書道
        </tspan>
        <tspan x="1" y="7">
          同好会
        </tspan>
      </text>
      <text fill="#231815" fontSize="8" transform="translate(4 206)">
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
      <text
        fill="#fff"
        fontSize="6"
        glyphOrientationVertical="0deg"
        transform="translate(63 188)"
        writingMode="tb"
      >
        <tspan x="0" y="0" textLength={32}
        lengthAdjust={"spacing"}>
          タラバガニ
        </tspan>
      </text>
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
      <text fill="#231815" fontSize="9" transform="translate(365 229)">
        <tspan x="0" y="0">
          退場口
        </tspan>
      </text>
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
      <text
        fill="#fff"
        fontSize="5.8"
        glyphOrientationVertical="0deg"
        transform="translate(110 188)"
        writingMode="tb"
      >
        <tspan x="0" y="0" textLength={32}
        lengthAdjust={"spacing"}>
          生徒会の間
        </tspan>
      </text>
      <text
        fill="#fff"
        fontSize="7"
        glyphOrientationVertical="0deg"
        transform="translate(90.6 188)"
        writingMode="tb"
      >
        <tspan x="0" y="0" textLength={32}
        lengthAdjust={"spacing"}>
          東北企画
        </tspan>
      </text>
    </g>
  </svg>,
  <svg
    key="3F"
    xmlns="http://www.w3.org/2000/svg"
    viewBox={[
      0 - padding,
      0 - padding,
      396.85 + 2 * padding,
      388.94 + 2 * padding,
    ].join(" ")}>
    <path className={boxF_} d="M 319.487 295.98h74.723v35.67h-74.723v-35.67" id="biology" />
    <path className={boxF_} d="M 326.09 253.67h49.397v36.84h-49.397v-36.84 z" id="biologysub" />
    <path className={boxF_} d="M326.09 56.45h68.59v107.11h-68.59z" id="chemistry" />
    <path className={boxFS} d="M189.82 238.22h53.71v39.82h-53.71z" id="english1" />
    <path className={boxFS} d="M 2.54 179.79h53.9v39.82h-53.9 z" id="english2" />
    <path className={boxFS} d="M 247.25 61.66h57.12v-48.86h-57.12 z" id="h2-1" />
    <g id="h2-2" className={boxF_}>
      <path d="M 218.725 12.77h28.525v48.89h-28.525v-48.89 z" id="pokemon" />
      <path d="M 190.2 12.77h28.525v48.89h-28.525v-48.89 z" id="escape" />
    </g>
    <path className={box_S} d="M 190.2 12.77h57.05v48.89h-57.05v-48.89z" />
    <g id="h2-3" className={boxF_}>
      <path d="M171.21 12.77h18.99v48.89h-18.99v-48.89z" id="nikoyaka" />
      <path d="M152.21 12.77h19v48.89h-19v-48.89z" id="car" />
      <path d="M133.22 12.77h18.99v48.89h-18.99v-48.89z" id="origami" />
    </g>
    <path className={box_S} d="M133.22 12.77h56.98v48.89h-56.98v-48.89z" />
    <path className={boxFS} d="M 76.18 12.8h57.05v48.9h-57.05 z" id="h2-4" />
    <path className={boxF_} d="M 319.487 331.65h74.723v35.67h-74.723v-35.67" id="kendo" />
    <g id="h2-2" className={boxF_}>
      <path d="M 224.92 179.79 h 34.47 v 39.82 h -34.47 z" id="doraemon" />
      <path d="M 208.65 179.79 h 16.27 v 39.82 h -16.27 z" id="puzzle" />
    </g>
    <path className={boxFS} d="M157.92 179.79h50.74v39.82h-50.74z" id="m2-2" />
    <path className={boxFS} d="M132.69 179.79h-25.37v39.82h50.74v-39.82h-25.37z" id="m2-3" />
    <path className={boxFS} d="M 56.44 179.79v39.82h50.74v-39.82h-50.74 z" id="m2-4" />
    <path className={boxF_} d="M259.39 179.8h38.69v39.81h-38.69z" id="m2open" />
    <g id="socialstudies2" className={boxF_}>
      <path d="M 326.09 179.72h49.397v73.95h-49.397v-73.95 z" />
      <path d="M 326.09 179.72h49.397v37.02h-49.397v-37.02 z" id="geography" />
      <path d="M 326.09 216.74h49.397v18.46h-49.397v-18.46 z" id="society" />
      <path d="M 326.09 235.2h49.397v18.47h-49.397v-18.47 z" id="urbandevelopment" />
    </g>
    <g>
      <g>
        <path fill="#e50020" className={boxStroke} d="M 271.2 258.13h26.89v19.91h-26.89 z" />
        <g fill="#fff" opacity=".9">
          <circle cx="284.64" cy="261.88" r="1.29" />
          <path d="M 283.87 265 l -2.58 7.07 c -0.09 0.27 0.11 0.54 0.39 0.54h5.92 c 0.28 0 0.48 -0.28 0.4 -0.54 l -2.58 -7.06 c -0.25 -0.75 -1.31 -0.75 -1.56 0 z" />
          <rect width="2.27" height="4" x="283.51" y="271.59" rx=".3" ry=".3" />
        </g>
      </g>
      <g>
        <path
          fill="#4f8e3a"
          className={boxStroke}
          d="M271.2 238.22h26.89v19.91H271.2z"
        />
        <g fill="#fff" opacity=".9">
          <circle cx="284.03" cy="242.1" r="1.37" />
          <path
            d="M287.63 251.77h-4.29v-6.35h1.39v4.92h4.11v.08l.62 4.33 1.9-.29-.16-1.04-.85.13-.6-4.26h-3.96v-4.92h-3.5v2.09a4.79 4.79 0 0 0-2.87 4.38c0 2.64 2.15 4.79 4.79 4.79h.11c1.46-.04 2.75-.74 3.59-1.81l-.29-2.04Zm-4.29.01h.01-.01Z"
          />
        </g>
      </g>
      <g>
        <path fill="#004d85" className={boxStroke} d="M 55.31 12.8h20.87v48.9h-20.87 z" />
        <g fill="#fff" opacity=".9">
          <circle cx="65.74" cy="28.97" r="1.81" />
          <rect width="3.87" height="9.53" x="63.81" y="38.68" rx=".38" ry=".38" />
          <path d="M63.17 32.35h5.14c.63 0 1.14.51 1.14 1.14v8.02c0 .31-.26.57-.57.57H62.6c-.31 0-.57-.26-.57-.57v-8.02c0-.63.51-1.14 1.14-1.14Z" />
        </g>
      </g>
    </g>
    <path className={box_S} d="M208.65 179.79h50.74v39.82h-50.74zM 394.68 163.47v-107.08h-68.59v-21.57h43.72v-31.19h-65.44v9.1h-269.6v67.39h263.32v99.6h-295.55v98.42h295.55v108.17h21.397v-18.99h74.723v-71.34h-74.723v-5.47h56v-110.79h-49.397v-16.25 z M 326.09 56.39v107.08 M 326.09 179.72v110.79 M 319.487 295.98v71.34 M 319.487 331.65h74.723 M 330.12 19.54h32.66 M 15.63 243.94v26.27 M 45.04 54.34v-29.65M83.37 238.22h53.3v39.82h-53.3zM 56.41 238.22h26.97v39.82h-26.97v-39.82 zM 28.71 238.22h27.7v39.82h-27.7v-39.82 z M 150.49 245.8v23.57 M 137.25 278.05h52.57v-39.83h-25.51v39.83M 257.35 245.8v23.57M 302.9785 369.54 l 11.62 11.62 m 0 -11.62 l -11.62 11.62" />
    <path className={box_SD} d="M 218.725 12.77 v 48.89 M 224.92 179.79 v 39.82 M 171.21 12.77 v 48.89 M 152.21 12.77 v 48.89 M 298.08 179.8 h 0 v 39.81 h -38.69 M 326.09 216.74 h 49.397 M 326.09 235.2 h 49.397 M 326.09 253.67 h 49.397" />
    <path className={box_ST} d="M 150.52 246.14h13.82 m -13.82 2.72h13.82 m -13.82 2.71h13.82 m -13.82 2.71h13.82 m -13.82 2.71h13.82 m -13.82 2.71h13.82 m -13.82 2.71h13.82 m -13.82 2.71h13.82M 243.53 246.14h27.67 m -27.67 2.72h27.67 m -27.67 2.71h27.67 m -27.67 2.72h27.67 m -27.67 2.71h27.67 m -27.67 2.72h27.67 m -27.67 2.71h27.67 m -27.67 2.72h27.67M34.77 24.69h20.54 m-20.54 2.71h20.54 m-20.54 2.72h20.54 m-20.54 2.71h20.54 m-20.54 2.71h20.54 m-20.54 2.71h20.54 m-20.54 2.72h20.54 m-20.54 2.71h20.54 m-20.54 2.71h20.54 m-20.54 2.71h20.54M2.54 249.64h26.18m-26.18-5.42h26.18m-26.18 8.14h26.18m-26.18 2.71h26.18m-26.18-8.14h26.18M2.54 257.79h26.18M2.54 260.5h26.18m-26.18 2.72h26.18m-26.18 2.71h26.18M 330.46 4.07v30.94 m 2.71 -30.94v30.94 m 2.72 -30.94v30.94 m 2.71 -30.94v30.94 m 2.72 -30.94v30.94 m 2.71 -30.94v30.94 m 2.72 -30.94v30.94 m 2.71 -30.94v30.94 m 2.72 -30.94v30.94 m 2.71 -30.94v30.94 m 2.62 -30.94v30.94" />
    <g>
      <text fill="#fff" fontSize="13" transform="translate(324 319.64)">
        <tspan x="0" y="0">
          生物研究部
        </tspan>
      </text>
      <text
        fill="#fff"
        fontSize="13"
        glyphOrientationVertical="0deg"
        transform="translate(360 80)"
        writingMode="tb"
      >
        <tspan x="0" y="-20" textLength={105}
        lengthAdjust={"spacing"}>
          化学研究部
        </tspan>
      </text>
      <text fill="#fff" fontSize="12" transform="translate(108 204)">
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
      <text fill="#fff" fontSize="13" transform="translate(77.5 41.44)">
        <tspan x="13" y="-7">
          写真
        </tspan>
        <tspan x="7" y="7">
          同好会
        </tspan>
      </text>
      <text fill="#fff" fontSize="9" transform="translate(328.4 275)">
        <tspan x="0" y="0">
          生物研究部
        </tspan>
      </text>
      <text
        fill="#fff"
        fontSize="10"
        glyphOrientationVertical="0deg"
        transform="translate(237.08 18)"
        writingMode="tb"
      >
        <tspan x="0" y="-5" textLength={45}
        lengthAdjust={"spacing"}>
          ポケモン
        </tspan>
        <tspan x="-8.63" y="-5" textLength={45}
        lengthAdjust={"spacing"}>
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
        <tspan x="0" y="0" textLength={50}
        lengthAdjust={"spacing"}>
          文化祭からの
        </tspan>
        <tspan x="-12" y="6.5" textLength={35}
        lengthAdjust={"spacing"}>
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
      <text
        fill="#fff"
        fontSize="10"
        glyphOrientationVertical="0deg"
        transform="translate(181 17)"
        writingMode="tb"
      >
        <tspan x="0" y="0" textLength={45}
        lengthAdjust={"spacing"}>
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
        transform="translate(142.84 15)"
        writingMode="tb"
      >
        <tspan x="0" y="0" textLength={45}
        lengthAdjust={"spacing"}>
          折り紙
        </tspan>
      </text>
      <text
        fill="#fff"
        fontSize="10"
        glyphOrientationVertical="0deg"
        transform="translate(217 185)"
        writingMode="tb"
      >
        <tspan x="0" y="-6" textLength={40}
        lengthAdjust={"spacing"}>
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
        <tspan x="0" y="0" textLength={39}
        lengthAdjust={"spacing"}>
          ドラえもん
        </tspan>
        <tspan x="-8.63" y="1.19" textLength={35}
        lengthAdjust={"spacing"}>
          同好会
        </tspan>
      </text>
    </g>
  </svg>,
  <svg 
  key="4F" 
  xmlns="http://www.w3.org/2000/svg"
  viewBox={[
    0 - padding,
    0 - padding,
    396.85 + 2 * padding,
    283.34 + 2 * padding,
  ].join(" ")}>
    <path className={boxFS} d="M268.96 221.07h53.72v56.03h-53.72z" id="earthscience" />
    <path className={boxFS} d="M292.12 17.25h-46.58v47.9h55.89v-47.9z" id="h1-1" />
    <path className={boxFS} d="M236.15 17.25h-46.58v47.9h55.9v-47.9z" id="h1-2" />
    <path className={boxFS} d="M180.33 17.25h-46.58v47.9h55.9v-47.9z" id="h1-3" />
    <path className={boxFS} d="M77.86 17.25h55.89v47.91H77.86Z" id="h1-4" />
    <path className={boxF_} d="M 154.7 180.83h49.71v39.02h-49.71 z" id="m3-1" />
    <path className={boxFS} d="M129.99 180.83h-24.85v39.02h49.71v-39.02z" id="m3-2" />
    <path className={boxF_} d="M 55.46 180.751h49.74v38.814h-49.74v-38.814 z" id="m3-3"/>
    <path className={boxF_} d="M 5.72 180.751h49.74v38.814h-49.74v-38.814 z" id="m3-4" />
    <path className={box__} d="M 5.72 180.751h74.76v38.814h-74.76v-38.814 z" id="amateurradio" />
    <path className={box__} d="M 80.48 180.751h24.72v38.814h-24.72v-38.814 z" id="conan" />
    <path className={boxF_} d="M204.41 180.83h41.13v38.814h-41.13v-38.814z" id="m3open" />
    <path className={boxFS}  d="M 340.3 59.89h49.61v35.08h-49.61 z" id="multipurpose" />
    <path className={boxFS} d="M 322.71 94.97h67.2v69.97h-67.2 z" id="physics" />
    <g>
      <g>
        <path fill="#e50020" stroke="#231815" className={boxStroke} d="M 57.42 17.25h20.44v23.95h-20.44 z" />
        <path fill="#fff" stroke="none" opacity=".9" d="M 67.26 20.82 a 1.34 1.34 0 0 1 0 2.68 a 1.34 1.34 0 0 1 0 -2.68zM 67.2598 25.1406 c -0.3675 0 -0.7341 0.2089 -0.8691 0.6289 l -2.8906 7.9199 c -0.1 0.3 0.1295 0.5996 0.4395 0.5996h2.0508v3.0117 c 0 0.1828 0.1473 0.3301 0.3301 0.3301h1.8789 c 0.1828 0 0.3301 -0.1473 0.3301 -0.3301v-3.0117h2.041 c 0.32 0 0.5395 -0.3094 0.4395 -0.6094 l -2.8789 -7.9102 c -0.135 -0.42 -0.5036 -0.6289 -0.8711 -0.6289 z" />
      </g>
      <g>
        <path fill="#4f8e3a" stroke="#231815" className={boxStroke} d="M31.36 238.08h30.93v19.88H31.36z" />
        <path fill="#fff" stroke="none" opacity=".9" d="M 46.62 240.04 a 1.34 1.34 0 0 1 0 2.68 a 1.34 1.34 0 0 1 0 -2.68 zM 50.04 250.83h-4.08v-6.21h1.35 l 0.01 4.8h4 l 0.61 4.3 l 1.85 -0.28 l -0.15 -1.01 l -0.83 0.13 l -0.58 -4.16h-3.87 l -0.01 -4.8h-3.4v2.04 a 4.67 4.67 0 0 0 1.87 8.95 c 1.425 -0.014 2.68 -0.73 3.51 -1.77 l -0.28 -1.99 z" />
      </g>
      <g>
        <path fill="#004d85" stroke="#231815" className={boxStroke} d="M 31.36 257.25h30.93v19.88h-30.93v-19.88 z" />
        <path fill="#fff" stroke="none" opacity=".9" d="M 47.08 259.89 a 1.34 1.34 0 0 1 0 2.68 a 1.34 1.34 0 0 1 0 -2.68zM 45.2793 263.4902 c -0.43 0 -0.7793 0.3493 -0.7793 0.7793v5.5899 c 0 0.22 0.1806 0.3906 0.3906 0.3906h0.8398v4 c 0 0.144 0.1157 0.2598 0.2598 0.2598h2.1699 c 0.144 0 0.2598 -0.1157 0.2598 -0.2598v-4h0.8496 c 0.22 0 0.3906 -0.1806 0.3906 -0.3906v-5.5899 c 0 -0.43 -0.3493 -0.7793 -0.7793 -0.7793h-3.6016 z" />
      </g>
      <g>
        <path fill="#4f8e3a" stroke="#231815" className={boxStroke} d="M 57.42 41.2h20.44v23.95h-20.44 z" />
        <path fill="#fff" stroke="none" opacity=".9" d="M 66.81 45.56 a 1.34 1.34 0 0 1 0 2.68 a 1.34 1.34 0 0 1 0 -2.68 zM 70.23 56.35h-4.08v-6.21h1.35 l 0.01 4.8h4 l 0.61 4.3 l 1.85 -0.28 l -0.15 -1.01 l -0.83 0.13 l -0.58 -4.16h-3.87 l -0.01 -4.8h-3.4v2.04 a 4.67 4.67 0 0 0 1.87 8.95 c 1.425 -0.014 2.68 -0.73 3.51 -1.77 l -0.28 -1.99 z" />
      </g>
    </g>
    <path className={box_S} d="M 154.7 180.83h49.71v39.02h-49.71 zM 268.94 196.35h53.77v80.75h-53.77 z m -210.55 -179.1h-21.1v66.02h105.89 m 98.65 193.83h27.11 m -13.58 -8.5v-23.09 m -236.82 -1.83v25.74 m 308.12 -245.57h32 m -311.81 4.71v29.06 m 157.56 123.23h90.87v-97.58h-152.1 m -84.68 193.83h-52.78v-57.25 m 316.99 -23.5v-31.41h57.34 m -78.62 -99.77v-56.85h64.09v30.67h-42.81v40.97 m 0 -20.07h17.58 m -284.862 120.987v38.973 m 49.772 -39.083h-99.48v39.083h99.48v-39.083 z m -42.91 57.313h179.54v39.02h-179.54 z" />
    <path className={box_SD} d="M 245.54 180.83v38.814h-41.13M80.48 180.853v38.997" />
    <path className={box_ST} d="M 46.85 28.9h10.57 m -10.57 2.66h10.57 m -10.57 2.66h10.57 m -10.57 2.66h10.57 m -10.57 2.66h10.57 m -10.57 2.66h10.57 m -10.57 2.66h10.57 m -10.57 2.66h10.57 m -10.57 2.66h10.57 m -10.57 2.66h10.57 M 241.83 245.84h13.53 m -13.53 2.66h13.53 m -13.53 2.66h13.53 m -13.53 2.66h13.53 m -13.53 2.66h13.53 m -13.53 2.66h13.53 m -13.53 2.66h13.53 m -13.53 2.66h13.53 M 18.54 243.95h12.82 m -12.82 2.66h12.82 m -12.82 2.66h12.82 m -12.82 2.66h12.82 m -12.82 2.66h12.82 m -12.82 2.66h12.82 m -12.82 2.66h12.82 m -12.82 2.66h12.82 m -12.82 2.66h12.82 M 326.99 23.85v15.15 m 2.66 -15.15v15.15 m 2.66 -15.15v15.15 m 2.66 -15.15v15.15 m 2.66 -15.15v15.15 m 2.66 -15.15v15.15 m 2.66 -15.15v15.15 m 2.66 -15.15v15.15 m 2.66 -15.15v15.15 m 2.66 -15.15v15.15 m 2.56 -15.15v15.15" />
    <g>
      <text
        transform="translate(356.32 97)"
        fill="#fff"
        glyphOrientationVertical="0deg"
        text-orientation="upright"
        writingMode="tb"
        fontSize="13px"
      >
        <tspan x="0" y="0" textLength={69}
        lengthAdjust={"spacing"}>
          物理研究部
        </tspan>
      </text>
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
      <text
        transform="translate(96 182)"
        fill="#fff"
        fontSize="9"
        glyphOrientationVertical="0deg"
        text-orientation="upright"
        writingMode="tb"
      >
        <tspan x="1" y="0" textLength={35}
        lengthAdjust={"spacing"}>
          コナン
        </tspan>
        <tspan x="-8" y="1" textLength={39}
        lengthAdjust={"spacing"}>
          サークル
        </tspan>
      </text>
      <text fill="#ffffff" fontSize="13px" transform="translate(10 198)">
        <tspan x="0" y="-1">
          アマチュア
        </tspan>
        <tspan x="0" y="14">
          無線研究部
        </tspan>
      </text>
    </g>
</svg>,
];

export const Maps: FC<Props> = ({ mapIdList, className, floorNumber }) => {
  useFocusMap(mapIdList);
  return mapSvgAll.map((mapSvg) => {
    return cloneElement(mapSvg, {
      className: `font-zen_kaku_gothic_new ${className}`,
    });
  })[floorNumber - 1];
};
