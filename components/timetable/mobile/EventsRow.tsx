import { forwardRef } from "react";

type Props = {
  events: {
    eventId: string;
    eventName: string;
  }[];
};

// eslint-disable-next-line react/display-name
export const EventsRow = forwardRef<HTMLDivElement, Props>(
  ({ events }, ref) => {
    return (
      <div className="sticky top-0 z-10">
        <div className="flex border-b border-black bg-white " ref={ref}>
          <div />
          {events.map((event, i) => {
            return (
              <div
                key={i}
                className={`group flex h-[80px] min-w-[160px] items-end
                text-center even:text-white`}
              >
                <div className="flex h-[90px] w-full flex-col justify-center text-xl group-odd:bg-white group-even:bg-theme">
                  <p className="text-base">{event.eventName}</p>
                  <p>
                    <a
                      href={`/events?id=${event.eventId}`}
                      className="text-xs underline"
                    >
                      詳細・会場を確認
                    </a>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);
