import React from "react";
import { createPortal } from "react-dom";
import { BasicCalendarProps, DatePickerType } from "../date-picker-types";
import { YearMonthCalendar } from "./year-month-calendar";

interface Props extends BasicCalendarProps {
  title?: string;
  date?: DatePickerType;
  handleYear: (e: number) => void;
  handleMonth: (e: number) => void;
}

export const YearMonthCalendarPortal = React.forwardRef<HTMLDivElement, Props>(
  (
    { open, axis, date, handleYear, handleMonth, title, id, className },
    ref
  ) => {
    return createPortal(
      <YearMonthCalendar
        open={open}
        axis={axis}
        date={date}
        handleYear={handleYear}
        handleMonth={handleMonth}
        title={title}
        id={id}
        className={className}
        calendarRef={ref}
      />,
      document.getElementById("root") || document.getElementById("app")!
    );
  }
);
