import React from "react";
import { forwardRef } from "react";
import { createPortal } from "react-dom";
import { CalendarPortalProps } from "../date-picker-types";
import { MonthCalendar } from "./month-calendar";

export const MonthCalendarPortal = forwardRef<
  HTMLDivElement,
  CalendarPortalProps
>(
  (
    {
      axis,
      open,
      date,
      handleDate,
      id,
      className,
      backgroundColor,
      focusColor,
    },
    ref
  ) => {
    return createPortal(
      <MonthCalendar
        axis={axis}
        open={open}
        date={date}
        handleDate={handleDate}
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
