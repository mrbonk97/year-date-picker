import { useRef, useState } from "react";
import { DatePickerButton } from "../button/date-picker";
import { MonthCalendarPortal } from "../calendar/month-calendar-portal";
import { DatePickerProps } from "../types/react-year-gogo-types";

export const MonthPicker = ({
  title,
  buttonId,
  buttonClassName,
  date,
  setDate,
}: DatePickerProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [axis, setAxis] = useState({ y: 0, x: 0 });

  const handleClick = () => {
    if (!buttonRef) return;
    const clientRect = buttonRef.current!.getBoundingClientRect();

    setAxis({
      y: clientRect.top + clientRect.height + 5,
      x: clientRect.left,
    });
    setIsOpen((cur) => !cur);
  };

  const handleMonth = (clickedMonth: number) => {
    if (!setDate) return;

    if (date == clickedMonth) {
      setDate(undefined);
      return;
    }

    setDate(clickedMonth);
  };

  return (
    <>
      <DatePickerButton
        title={title}
        id={buttonId}
        className={buttonClassName}
        ref={buttonRef}
        onClick={handleClick}
      />
      <MonthCalendarPortal
        axis={axis}
        open={isOpen}
        date={date}
        handleDate={handleMonth}
      />
    </>
  );
};
