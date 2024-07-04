import React from "react";
import { forwardRef } from "react";
import { createPortal } from "react-dom";
import { YearCalendar } from "./year-calendar";
import { CalendarPortalProps } from "../date-picker-types";

export const YearCalendarPortal = forwardRef<
  HTMLDivElement,
  CalendarPortalProps
>(({ axis, open, date, handleDate, id, className }, ref) => {
  return createPortal(
    <YearCalendar
      axis={axis}
      open={open}
      date={date}
      handleDate={handleDate}
      id={id}
      className={className}
      calendarRef={ref}
    />,
    document.getElementById("root") || document.getElementById("app")!
  );
});
