import { CalendarProps } from "../types/react-year-gogo-types";

export const MonthCalendar = ({
  axis,
  open,
  date,
  handleDate,
  id,
  className,
  backgroundColor = "#fff",
  focusColor = "#fecdd3",
  ref,
}: CalendarProps) => {
  if (!open) return;

  return (
    <div
      id={id}
      ref={ref}
      className={`absolute p-2 w-80 h-60 rounded border flex flex-col justify-between ${className}`}
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
            className={`h-16 w-16 rounded-full flex items-center justify-center hover:bg-neutral-100 aria-pressed:bg-rose-200 aria-pressed:font-medium duration-150`}
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
            className={`h-16 w-16 rounded-full flex items-center justify-center hover:bg-neutral-100 aria-pressed:bg-rose-200 aria-pressed:font-medium duration-150`}
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
            className={`h-16 w-16 rounded-full flex items-center justify-center hover:bg-neutral-100 aria-pressed:bg-rose-200 aria-pressed:font-medium duration-150`}
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
            className={`h-16 w-16 rounded-full flex items-center justify-center hover:bg-neutral-100 aria-pressed:bg-rose-200 aria-pressed:font-medium duration-150`}
          >
            {idx * 4 + 4}
          </li>
        </ul>
      ))}
    </div>
  );
};
