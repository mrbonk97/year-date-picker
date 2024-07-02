import React, { useRef } from "react";
import { DatePickerButton } from "../button/date-picker";
import { MonthCalendarPortal } from "../calendar/month-calendar-portal";
import { YearCalendarPortal } from "../calendar/year-calendar-portal";
import { YearMonthCalendar } from "../calendar/year-month-calendar";
import { dateType } from "../types/react-year-gogo-types";

interface PickerPickerProps {
  title?: string;
  type: "YEAR" | "MONTH" | "YEAR_MONTH";
  date?: dateType;
  year?: number;
  month?: number;
  setDate?: React.Dispatch<React.SetStateAction<dateType>>;
  setYear?: React.Dispatch<React.SetStateAction<number | undefined>>;
  setMonth?: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const PickerPicker = ({
  title,
  type,
  date,
  year,
  month,
  setDate,
  setYear,
  setMonth,
}: PickerPickerProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [axis, setAxis] = React.useState({ y: 0, x: 0 });

  const handleOpen = () => {
    if (!buttonRef.current) return;
    const clientRect = buttonRef.current.getBoundingClientRect();

    setAxis({
      y: clientRect.top + clientRect.height + 5,
      x: clientRect.left,
    });
    setIsOpen((cur) => !cur);
  };

  const handleYear1 = (clickedYear: number) => {
    setYear?.((cur) => {
      return cur == clickedYear ? undefined : clickedYear;
    });
  };

  const handleMonth1 = (clickedMonth: number) => {
    setMonth?.((cur) => {
      return cur == clickedMonth ? undefined : clickedMonth;
    });
  };

  const handleYear2 = (clickedYear: number) => {
    setDate?.((cur) => {
      if (cur.year === clickedYear)
        return { year: undefined, month: undefined };
      return { ...cur, year: clickedYear };
    });
  };

  const handleMonth2 = (clickedMonth: number) => {
    setDate?.((cur) => {
      if (cur.month === clickedMonth) return { ...cur, month: undefined };
      return { ...cur, month: clickedMonth };
    });
  };

  let _title = year?.toString();
  if (month) {
    _title = new Date(2000, month - 1).toLocaleString("en-US", {
      month: "long",
    });
  }
  if (date?.month) {
    _title = new Date(2000, date.month - 1).toLocaleString("en-US", {
      month: "long",
    });
    _title += ", ";
    _title += date?.year?.toString();
  }

  return (
    <>
      <DatePickerButton
        title={_title || title}
        ref={buttonRef}
        onClick={handleOpen}
      />
      {type === "YEAR" && (
        <YearCalendarPortal
          axis={axis}
          open={isOpen}
          date={year}
          handleDate={handleYear1}
        />
      )}
      {type === "MONTH" && (
        <MonthCalendarPortal
          axis={axis}
          open={isOpen}
          date={month}
          handleDate={handleMonth1}
        />
      )}
      {type === "YEAR_MONTH" && (
        <YearMonthCalendar
          axis={axis}
          open={isOpen}
          date={typeof date === "object" ? date : undefined}
          handleYear={handleYear2}
          handleMonth={handleMonth2}
        />
      )}
    </>
  );
};

export { PickerPicker };
