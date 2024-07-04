import React from "react";
import { CalendarProps } from "../date-picker-types";

export const MonthCalendar = ({
  axis,
  open,
  date,
  handleDate,
  id,
  className,
  backgroundColor,
  calendarRef,
}: CalendarProps) => {
  if (!open) return null;

  return (
    <div
      id={id}
      ref={calendarRef}
      className={className || "calendar round-shadow"}
      style={{ top: axis?.y, left: axis?.x }}
    >
      {new Array(3).fill(1).map((_, row) => (
        <ul key={`row${row}`} className="calendar-row">
          {new Array(4).fill(1).map((_, col) => (
            <li
              role="button"
              key={`row${row}col${col}`}
              onClick={() => {
                if (!handleDate) return;
                handleDate(row * 4 + col + 1);
              }}
              aria-pressed={row * 4 + col + 1 === date}
              className="calendar-button"
            >
              {row * 4 + col + 1}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};
