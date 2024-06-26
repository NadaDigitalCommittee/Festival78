import { FC } from "react";

export const Article: FC<{
  className?: string;
  width: number;
  height: number;
}> = ({ className, width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M11.6474 0L3.12891 8.51807V30H26.8722V0H11.6474ZM24.9031 28.0304H5.09848V9.66744H12.7968V1.96916H24.9031V28.0304Z" />
      <path d="M20.7777 13.95H9.22266V15.4673H20.7777V13.95Z" />
      <path d="M20.7777 18.0935H9.22266V19.6108H20.7777V18.0935Z" />
      <path d="M20.7777 22.2369H9.22266V23.7543H20.7777V22.2369Z" />
    </svg>
  );
};
