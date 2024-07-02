import { useRef } from "react";
import { MonthCalendar } from "./month-calendar";
import { YearCalendar } from "./year-calendar";
import { YearMonthCalendarProps } from "../types/react-year-gogo-types";

export const YearMonthCalendar = ({
  open,
  axis,
  date,
  setDate,
  title = "Pick a Date",
  id,
  className,
  backgroundColor = "#fff",
  focusColor,
}: YearMonthCalendarProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleYear = (selYear: number) => {
    if (!setDate || !date) return;

    if (selYear == date.year) {
      setDate({ year: undefined, month: undefined });
    } else {
      setDate((cur) => {
        return { ...cur, year: selYear };
      });

      setTimeout(() => (ref.current!.style.marginLeft = "-20rem"), 300);
    }
  };

  const handleMonth = (selMonth: number) => {
    if (!setDate || !date) return;

    if (selMonth == date.month) {
      setDate((cur) => {
        return { ...cur, month: undefined };
      });
      return;
    }

    setDate((cur) => {
      return { ...cur, month: selMonth };
    });
  };

  const handlePage = () => {
    ref.current!.style.marginLeft = "0";
  };

  if (!open) return;

  if (open)
    return (
      <div id={id} className="absolute" style={{ top: axis.y, left: axis.x }}>
        <div
          className={`w-80 h-72 overflow-hidden border rounded ${className}`}
          style={{ backgroundColor: backgroundColor }}
        >
          <div className="w-full h-12 flex items-center justify-between px-5 border-b">
            <button onClick={handlePage}>
              <ChevornLeft />
            </button>
            <span>
              {date.year ? date.year : title}
              {date.month && " · " + date.month}
            </span>
          </div>
          <div ref={ref} className="relative duration-500">
            <YearCalendar
              date={date?.year && date.year}
              handleDate={handleYear}
              axis={{ y: 0, x: 0 }}
              className="border-none rounded-none"
              backgroundColor={backgroundColor}
              open
            />
            <MonthCalendar
              axis={{ y: 0, x: 20 }}
              date={date?.month && date.month}
              handleDate={handleMonth}
              className="border-none rounded-none"
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

// const handleYear = (clickedYear: number) => {
//   if (!date || !setDate) return;

//   if (date?.year == clickedYear) {
//     setDate({ year: null, month: null });
//     return;
//   }

//   setDate({ ...date, year: clickedYear });
//   setTimeout(() => (ref.current!.style.marginLeft = "-20rem"), 150);
// };

// const handleMonth = (clickedMonth: number) => {
//   if (!setDate || !date) return;

//   if (date?.month == clickedMonth) setDate({ ...date, month: null });
//   else setDate({ ...date, month: clickedMonth });
// };

// const handlePage = () => {
//   ref.current!.style.marginLeft = "0";
// };

// const curYear = new Date().getFullYear();

// if (!open) return;
