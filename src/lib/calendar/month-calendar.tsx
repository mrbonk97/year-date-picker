import { CalendarProps } from "../types/react-year-gogo-types";
import "../styles/calendar.css";

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
      className={`calendarContainer ${className}`}
      style={{ backgroundColor: backgroundColor, top: axis?.y, left: axis?.x }}
    >
      {new Array(3).fill(1).map((_, idx) => (
        <ul key={idx} className="dateList">
          <li
            role="button"
            onClick={() => {
              if (!handleDate) return;
              handleDate(idx * 4 + 1);
            }}
            aria-pressed={idx * 4 + 1 === date}
            className={"dateListButton"}
          >
            {idx * 4 + 1}
          </li>
          <li
            role="button"
            onClick={() => {
              if (!handleDate) return;
              handleDate(idx * 4 + 2);
            }}
            aria-pressed={idx * 4 + 2 === date}
            className={"dateListButton"}
          >
            {idx * 4 + 2}
          </li>
          <li
            role="button"
            onClick={() => {
              if (!handleDate) return;
              handleDate(idx * 4 + 3);
            }}
            aria-pressed={idx * 4 + 3 === date}
            className={"dateListButton"}
          >
            {idx * 4 + 3}
          </li>
          <li
            role="button"
            onClick={() => {
              if (!handleDate) return;
              handleDate(idx * 4 + 4);
            }}
            aria-pressed={idx * 4 + 4 === date}
            className={"dateListButton"}
          >
            {idx * 4 + 4}
          </li>
        </ul>
      ))}
    </div>
  );
};
