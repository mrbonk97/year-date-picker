import React from "react";
import { BasicCalendarProps } from "../date-picker-types";
import { MonthCalendar } from "./month-calendar";
import { createPortal } from "react-dom";

interface Props extends BasicCalendarProps {
  month?: number;
  handleMonth?: (e: number) => void;
}

export const MonthCalendarPortal = React.forwardRef<HTMLDivElement, Props>(
  ({ axis, open, month, handleMonth, id, className }, ref) => {
    return createPortal(
      <MonthCalendar
        axis={axis}
        open={open}
        month={month}
        handleMonth={handleMonth}
        id={id}
        className={className}
        calendarRef={ref}
      />,
      document.getElementById("root") || document.getElementById("app")!
    );
  }
);
