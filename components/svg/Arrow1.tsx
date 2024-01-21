import { FC } from "react";

export const Arrow1: FC<{ direction: "right" | "down" }> = ({ direction }) => {
    const width = "30"
    const height = "30"
  return direction === "right" ? (
    <svg
      width={width}
      height={height}
      viewBox="0 0 34 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block"
    >
      <path d="M34 19.5L0.25 38.9856V0.0144295L34 19.5Z" fill="#FF500C" />
    </svg>
  ) : (
    <svg
      width={width}
      height={height}
      viewBox="0 0 52 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block"
    >
      <path
        d="M26 45L0.0192385 2.26498e-06L51.9808 2.26498e-06L26 45Z"
        fill="#FF500C"
      />
    </svg>
  );
};
