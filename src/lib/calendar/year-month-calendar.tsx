import { useRef } from "react";
import { MonthCalendar } from "./month-calendar";
import { YearCalendar } from "./year-calendar";
import { YearMonthCalendarProps } from "../types/react-year-gogo-types";
import "../styles/calendar.css";

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
    setTimeout(() => (ref.current!.style.marginLeft = "-20rem"), 300);
  };

  if (!open) return null;

  if (open)
    return (
      <div
        ref={calendarRef}
        id={id}
        className={`calendarContainer2 ${className}`}
        style={{
          backgroundColor: backgroundColor,
          top: axis?.y,
          left: axis?.x,
        }}
      >
        <div>
          <div className="calendarHeader">
            <button
              onClick={() => (ref.current!.style.marginLeft = "0")}
              style={{
                cursor: "pointer",
                backgroundColor: "transparent",
                border: "none",
              }}
            >
              <ChevornLeft />
            </button>
            <span>
              {date && date.year ? date.year : title}
              {date && date.year && date.month && " · " + date.month}
            </span>
          </div>
          <div
            ref={ref}
            style={{ position: "relative", transitionDuration: "500ms" }}
          >
            <YearCalendar
              date={date?.year && date.year}
              handleDate={handleYearExtend}
              axis={{ y: 0, x: 0 }}
              backgroundColor={backgroundColor}
              open
            />
            <MonthCalendar
              date={date?.month && date.month}
              handleDate={handleMonth}
              axis={{ y: 0, x: 320 }}
              backgroundColor={backgroundColor}
              open
            />
          </div>
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
