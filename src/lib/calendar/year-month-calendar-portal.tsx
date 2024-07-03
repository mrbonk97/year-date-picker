import { forwardRef } from "react";
import { createPortal } from "react-dom";
import { YearMonthCalendarPortalProps } from "../types/react-year-gogo-types";
import { YearMonthCalendar } from "./year-month-calendar";

export const YearMonthCalendarPortal = forwardRef<
  HTMLDivElement,
  YearMonthCalendarPortalProps
>(
  (
    {
      open,
      axis,
      date,
      handleYear,
      handleMonth,
      title,
      id,
      className,
      backgroundColor,
      focusColor,
    },
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
        backgroundColor={backgroundColor}
        focusColor={focusColor}
        calendarRef={ref}
      />,
      document.getElementById("root")!
    );
  }
);
