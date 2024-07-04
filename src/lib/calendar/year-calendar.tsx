import React from "react";
import { BasicCalendarProps } from "../date-picker-types";

interface Props extends BasicCalendarProps {
  year?: number;
  handleYear?: (e: number) => void;
  calendarRef?: React.LegacyRef<HTMLDivElement>;
}

export const YearCalendar = ({
  axis,
  open,
  year,
  handleYear,
  id,
  className,
  calendarRef,
}: Props) => {
  const curYear = new Date().getFullYear() - 100;
  const cellRef = React.useRef<HTMLLIElement[]>([]);

  React.useEffect(() => {
    if (!open) return;
    if (!cellRef.current) return;

    if (year) cellRef.current[year - curYear - 4].scrollIntoView({});
    else cellRef.current[96].scrollIntoView();
  }, [open]);

  if (!open) return null;

  return (
    <div
      id={id}
      ref={calendarRef}
      className={className || "calendar round-shadow"}
      style={{
        top: axis?.y,
        left: axis?.x,
        overflowY: "scroll",
      }}
    >
      {new Array(50).fill(1).map((_, idx1) => {
        return (
          <ul key={`ul${idx1}`} className="calendar-row">
            {new Array(4).fill(1).map((_, idx2) => {
              const _year = curYear + idx1 * 4 + idx2;
              return (
                <li
                  role="button"
                  ref={(el) => (cellRef.current[idx1 * 4 + idx2] = el!)}
                  key={`li${idx1 * 4 + idx2}`}
                  aria-pressed={year === _year}
                  className="calendar-button"
                  onClick={() => {
                    if (!handleYear) return;
                    handleYear(_year);
                  }}
                >
                  {curYear + idx1 * 4 + idx2}
                </li>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
};
