import React from "react";
import { createPortal } from "react-dom";
import { YearCalendar } from "./year-calendar";
import { BasicCalendarProps } from "../date-picker-types";

interface Props extends BasicCalendarProps {
  year?: number;
  handleYear?: (e: number) => void;
}

export const YearCalendarPortal = React.forwardRef<HTMLDivElement, Props>(
  ({ axis, open, year, handleYear, id, className }, ref) => {
    return createPortal(
      <YearCalendar
        axis={axis}
        open={open}
        year={year}
        handleYear={handleYear}
        id={id}
        className={className}
        calendarRef={ref}
      />,
      document.getElementById("root") || document.getElementById("app")!
    );
  }
);
