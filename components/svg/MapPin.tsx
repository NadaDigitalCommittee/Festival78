import { FC } from "react";

type Props={
  className?:string
}

export const MapPin:FC<Props> = ({className}) => (
  <svg
    width="14"
    height="19"
    viewBox="0 0 22 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} inline-block`}
  >
    <path
      d="M10.9998 0C5.04966 0 0.227539 4.82219 0.227539 10.7723C0.227539 16.8449 3.23741 18.1386 6.56416 22.1782C10.5433 27.0101 10.9998 32 10.9998 32C10.9998 32 11.4563 27.0101 15.4354 22.1782C18.7622 18.1386 21.772 16.8449 21.772 10.7723C21.772 4.82219 16.9499 0 10.9998 0ZM10.9998 14.4951C8.94373 14.4951 7.27704 12.8283 7.27704 10.7723C7.27704 8.71631 8.94379 7.04956 10.9998 7.04956C13.0558 7.04956 14.7225 8.71631 14.7225 10.7723C14.7225 12.8283 13.0558 14.4951 10.9998 14.4951Z"
    />
  </svg>
);
