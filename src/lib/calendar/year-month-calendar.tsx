import { useRef } from "react";
import { MonthCalendar } from "./month-calendar";
import { YearCalendar } from "./year-calendar";
import { YearMonthCalendarProps } from "../types/react-year-gogo-types";

export const YearMonthCalendar = ({
  open,
  axis,
  date,
  handleYear,
  handleMonth,
  title = "Pick a Date",
  id,
  className,
  backgroundColor,
  calendarRef,
}: YearMonthCalendarProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleYearExtend = (e: number) => {
    handleYear(e);
    if (e == date?.year) return;
    setTimeout(() => (ref.current!.style.marginLeft = "-20rem"), 300);
  };

  if (!open) return null;

  if (open)
    return (
      <div
        ref={calendarRef}
        id={id}
        className={`absolute w-80 h-72 border rounded bg-white shadow box-content overflow-hidden ${className}`}
        style={{
          backgroundColor: backgroundColor,
          top: axis?.y,
          left: axis?.x,
        }}
      >
        <div className="w-full h-12 border-b flex items-center justify-between px-5">
          <button
            onClick={() => (ref.current!.style.marginLeft = "0")}
            className="cursor-pointer hover:bg-neutral-100 duration-150 rounded"
          >
            <ChevornLeft />
          </button>
          <span>
            {date && date.year ? date.year : title}
            {date && date.year && date.month && " · " + date.month}
          </span>
        </div>

        <div ref={ref} className="relative duration-500">
          <YearCalendar
            date={date?.year && date.year}
            className="border-none shadow-none rounded-none"
            handleDate={handleYearExtend}
            axis={{ y: 0, x: 0 }}
            backgroundColor={backgroundColor}
            open
          />
          <MonthCalendar
            date={date?.month && date.month}
            className="border-none shadow-none rounded-none"
            handleDate={handleMonth}
            axis={{ y: 0, x: 320 }}
            backgroundColor={backgroundColor}
            open
          />
        </div>
      </div>
    );
};

const ChevornLeft = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
};
