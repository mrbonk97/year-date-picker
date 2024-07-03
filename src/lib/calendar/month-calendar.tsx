import { twMerge } from "tailwind-merge";
import { CalendarProps } from "../types/react-year-gogo-types";

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
      className={twMerge(
        "absolute p-2 w-80 h-60 rounded border shadow bg-white flex flex-col justify-between",
        className
      )}
      style={{ backgroundColor: backgroundColor, top: axis?.y, left: axis?.x }}
    >
      {new Array(3).fill(1).map((_, idx) => (
        <ul key={idx} className="flex justify-between">
          <li
            role="button"
            onClick={() => {
              if (!handleDate) return;
              handleDate(idx * 4 + 1);
            }}
            aria-pressed={idx * 4 + 1 === date}
            className="w-14 h-14 flex items-center justify-center rounded-full hover:bg-neutral-100 aria-pressed:bg-blue-200 aria-pressed:font-medium"
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
            className="w-14 h-14 flex items-center justify-center rounded-full hover:bg-neutral-100 aria-pressed:bg-blue-200 aria-pressed:font-medium"
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
            className="w-14 h-14 flex items-center justify-center rounded-full hover:bg-neutral-100 aria-pressed:bg-blue-200 aria-pressed:font-medium"
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
            className="w-14 h-14 flex items-center justify-center rounded-full hover:bg-neutral-100 aria-pressed:bg-blue-200 aria-pressed:font-medium"
          >
            {idx * 4 + 4}
          </li>
        </ul>
      ))}
    </div>
  );
};
