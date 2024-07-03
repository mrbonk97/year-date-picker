import { forwardRef } from "react";
import { createPortal } from "react-dom";
import { YearCalendar } from "./year-calendar";
import { CalendarPortalProps } from "../types/react-year-gogo-types";

export const YearCalendarPortal = forwardRef<
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
      <YearCalendar
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
      document.getElementById("root")!
    );
  }
);
