import { forwardRef } from "react";
import { createPortal } from "react-dom";
import { MonthCalendar } from "./month-calendar";
import { CalendarProps } from "../types/react-year-gogo-types";

export const MonthCalendarPortal = forwardRef<HTMLDivElement, CalendarProps>(
  (
    {
      axis,
      open,
      date,
      handleDate,
      id,
      className,
      backgroundColor = "#fff",
      focusColor = "#fecdd3",
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
        ref={ref}
      />,
      document.getElementById("root")!
    );
  }
);
