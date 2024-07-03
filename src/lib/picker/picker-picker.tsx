import React, { useEffect, useRef } from "react";
import { DatePickerButton } from "../button/date-picker";
import { MonthCalendarPortal } from "../calendar/month-calendar-portal";
import { YearCalendarPortal } from "../calendar/year-calendar-portal";
import { YearMonthCalendarPortal } from "../calendar/year-month-calendar-portal";
import { DatePickerType } from "../types/react-year-gogo-types";

interface PickerPickerProps {
  title?: string;
  type: "YEAR" | "MONTH" | "YEAR_MONTH";
  locale?: string;
  buttonId?: string;
  buttonClassName?: string;
  calendarId?: string;
  calendarClassName?: string;
  backgroundColor?: string;
  focusedColor?: string;
  date?: DatePickerType;
  year?: number;
  month?: number;
  setDate?: React.Dispatch<React.SetStateAction<DatePickerType>>;
  setYear?: React.Dispatch<React.SetStateAction<number | undefined>>;
  setMonth?: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const PickerPicker = ({
  title,
  type,
  locale = "en-US",
  buttonId,
  buttonClassName,
  calendarId,
  calendarClassName,
  backgroundColor = "#fff",
  focusedColor,
  date,
  year,
  month,
  setDate,
  setYear,
  setMonth,
}: PickerPickerProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
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
    _title = new Date(2000, month - 1).toLocaleString(locale, {
      month: "long",
    });
  }
  if (date?.month) {
    _title = new Date(2000, date.month - 1).toLocaleString(locale, {
      month: "long",
    });
    _title += ", ";
    _title += date?.year?.toString();
  }

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (!calendarRef.current) return;
      if (!buttonRef.current) return;
      if (calendarRef.current.contains(event.target)) return;
      if (buttonRef.current.contains(event.target)) return;
      setIsOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [calendarRef, buttonRef]);

  return (
    <>
      <DatePickerButton
        title={_title || title}
        id={buttonId}
        className={buttonClassName}
        ref={buttonRef}
        onClick={handleOpen}
      />
      {type === "YEAR" && (
        <YearCalendarPortal
          axis={axis}
          open={isOpen}
          id={calendarId}
          className={calendarClassName}
          backgroundColor={backgroundColor}
          focusColor={focusedColor}
          date={year}
          handleDate={handleYear1}
          ref={calendarRef}
        />
      )}
      {type === "MONTH" && (
        <MonthCalendarPortal
          axis={axis}
          open={isOpen}
          id={calendarId}
          className={calendarClassName}
          backgroundColor={backgroundColor}
          focusColor={focusedColor}
          date={month}
          handleDate={handleMonth1}
          ref={calendarRef}
        />
      )}
      {type === "YEAR_MONTH" && (
        <YearMonthCalendarPortal
          axis={axis}
          open={isOpen}
          id={calendarId}
          className={calendarClassName}
          backgroundColor={backgroundColor}
          focusColor={focusedColor}
          date={typeof date === "object" ? date : undefined}
          handleYear={handleYear2}
          handleMonth={handleMonth2}
          ref={calendarRef}
        />
      )}
    </>
  );
};

export { PickerPicker };
