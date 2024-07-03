import { useEffect, useRef } from "react";
import { CalendarProps } from "../types/react-year-gogo-types";
import "../styles/calendar.css";

export const YearCalendar = ({
  calendarRef,
  axis,
  open,
  date,
  handleDate,
  id,
  className,
  backgroundColor,
}: CalendarProps) => {
  const curYear = new Date().getFullYear() - 100;
  const cellRef = useRef<HTMLLIElement[]>([]);

  useEffect(() => {
    if (!open) return;
    if (!cellRef.current) return;

    if (date) cellRef.current[date - curYear - 4].scrollIntoView({});
    else cellRef.current[96].scrollIntoView();
  }, [open]);

  if (!open) return null;

  return (
    <div
      id={id}
      ref={calendarRef}
      className={`calendarContainer ${className}`}
      style={{
        backgroundColor: backgroundColor,
        top: axis?.y,
        left: axis?.x,
        overflowY: "scroll",
      }}
    >
      {new Array(50).fill(1).map((_, idx1) => {
        return (
          <ul key={`ul${idx1}`} className="dateList">
            {new Array(4).fill(1).map((_, idx2) => {
              const _year = curYear + idx1 * 4 + idx2;
              return (
                <li
                  role="button"
                  ref={(el) => (cellRef.current[idx1 * 4 + idx2] = el!)}
                  key={`li${idx1 * 4 + idx2}`}
                  aria-pressed={date === _year}
                  className="dateListButton"
                  onClick={() => {
                    if (!handleDate) return;
                    handleDate(_year);
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
