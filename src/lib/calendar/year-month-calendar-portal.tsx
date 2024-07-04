import React from "react";
import { createPortal } from "react-dom";
import { YearMonthCalendarPortalProps } from "../date-picker-types";
import { YearMonthCalendar } from "./year-month-calendar";

export const YearMonthCalendarPortal = React.forwardRef<
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
      document.getElementById("root") || document.getElementById("app")!
    );
  }
);
